/** One route catalogue and the same React markup/metadata for crawlers and visitors. */
import { PAGE_SEO } from '../utils/pageSeo';
import { SITE_URL, DEFAULT_OG_IMAGE, SEOOptions } from '../utils/seo';
import { BLOG_POSTS } from '../data/blogPosts';
import { BLOG_SEO, BLOG_SCHEMAS, getPostSchemas } from '../utils/blogSeo';
import { renderPage } from './render';
export interface PrerenderRoute {
  path: string; title: string; description: string; canonical: string;
  ogImage: string; ogType: 'website' | 'article'; jsonLd: Record<string, unknown>[]; bodyHtml?: string;
}
const abs = (value: string) => value.startsWith('http') ? value : `${SITE_URL}${value}`;
function fromSeo(seo: SEOOptions): PrerenderRoute {
  return { path: seo.canonical || '/', title: seo.title, description: seo.description,
    canonical: abs(seo.canonical || '/'), ogImage: abs(seo.ogImage || DEFAULT_OG_IMAGE),
    ogType: seo.ogType || 'website', jsonLd: !seo.jsonLd ? [] : Array.isArray(seo.jsonLd) ? seo.jsonLd : [seo.jsonLd] };
}
export function getRoutes(): PrerenderRoute[] {
  return [
    ...Object.values(PAGE_SEO).map(fromSeo),
    fromSeo({ ...BLOG_SEO, jsonLd: BLOG_SCHEMAS }),
    ...BLOG_POSTS.map(post => fromSeo({ title: post.seoTitle, description: post.metaDescription,
      canonical: `/blog/${post.slug}`, ogType: 'article', jsonLd: getPostSchemas(post) })),
  ].map(route => ({ ...route, bodyHtml: renderPage(route.path) }));
}
