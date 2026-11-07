import type { BlogPost } from '../data/blogPosts';
import { LODGING_SCHEMA, SITE_URL } from './seo';
export const BLOG_SEO = {
  title: 'Como chegar à Ilha do Mel: 151 cidades e dicas | Coração da Ilha',
  description: 'Encontre sua cidade entre 151 guias para chegar à Ilha do Mel. Planeje estrada, transporte, travessia para Encantadas e hospedagem na Coração da Ilha.',
  canonical: '/blog',
};
export const BLOG_SCHEMAS = [LODGING_SCHEMA, {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
  ],
}];
export function getPostSchemas(post: BlogPost): Record<string, unknown>[] {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return [LODGING_SCHEMA, {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: post.title, description: post.metaDescription,
    image: post.image.startsWith('https://') ? post.image : `${SITE_URL}${post.image}`,
    datePublished: post.datePublished, dateModified: post.dateModified, inLanguage: 'pt-BR',
    author: { '@type': 'Organization', name: 'Pousada Coração da Ilha', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Pousada Coração da Ilha', logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(post.sources ? { citation: post.sources.map(source => source.url) } : {}),
  }, {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  }];
}
