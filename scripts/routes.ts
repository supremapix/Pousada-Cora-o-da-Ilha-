/**
 * Fonte de dados do prerender de build (usado por scripts/prerender.mjs).
 * Reaproveita PAGE_SEO e BLOG_POSTS para gerar, para cada rota, o conjunto de
 * metadados de <head> e — no caso do blog — um HTML semântico do conteúdo,
 * garantindo que crawlers e LLMs recebam o conteúdo mesmo sem executar JS.
 *
 * Este módulo é transpilado on-the-fly pelo esbuild no momento do build,
 * portanto pode importar os mesmos TS da aplicação.
 */
import { PAGE_SEO } from '../utils/pageSeo';
import { SITE_URL, DEFAULT_OG_IMAGE, LODGING_SCHEMA, SEOOptions } from '../utils/seo';
import { BLOG_POSTS, BlogPost, BlogBlock } from '../data/blogPosts';

export interface PrerenderRoute {
  path: string;
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType: 'website' | 'article';
  jsonLd: Record<string, unknown>[];
  bodyHtml?: string;
}

const abs = (value: string) => (value.startsWith('http') ? value : `${SITE_URL}${value}`);
const toArray = (v: SEOOptions['jsonLd']): Record<string, unknown>[] =>
  !v ? [] : Array.isArray(v) ? v : [v];

function esc(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const formatDate = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

function renderBlock(block: BlogBlock): string {
  switch (block.type) {
    case 'h2':
      return `<h2>${esc(block.text)}</h2>`;
    case 'h3':
      return `<h3>${esc(block.text)}</h3>`;
    case 'ul':
      return `<ul>${block.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
    default:
      return `<p>${esc(block.text)}</p>`;
  }
}

/** HTML semântico do artigo, exibido a crawlers sem JS (substituído pela SPA no cliente). */
function postBodyHtml(post: BlogPost): string {
  const content = post.content.map(renderBlock).join('');
  const faq = post.faq
    .map((f) => `<details><summary>${esc(f.q)}</summary><div>${esc(f.a)}</div></details>`)
    .join('');
  return [
    '<main>',
    '<nav aria-label="Trilha de navegação"><ol>',
    `<li><a href="/">Home</a></li><li><a href="/blog">Blog</a></li><li aria-current="page">${esc(post.category)}</li>`,
    '</ol></nav>',
    '<article>',
    `<img src="${esc(post.image)}" alt="${esc(post.imageAlt)}" width="1600" height="900" loading="lazy" />`,
    `<span>${esc(post.category)}</span>`,
    `<h1>${esc(post.title)}</h1>`,
    '<p>Por Equipe Pousada Coração da Ilha · ',
    `<time datetime="${esc(post.datePublished)}">${esc(formatDate(post.datePublished))}</time>`,
    ` · ${esc(post.readingTime)} de leitura</p>`,
    content,
    `<section aria-labelledby="faq-heading"><h2 id="faq-heading">Perguntas frequentes</h2>${faq}</section>`,
    '<section aria-label="Reserve sua estadia"><h2>Reserve sua estadia na Pousada Coração da Ilha</h2>',
    '<p>À beira-mar em Encantadas, a poucos passos do trapiche e das melhores trilhas da Ilha do Mel. Café da manhã incluso e vista para o mar.</p></section>',
    '</article>',
    '</main>',
  ].join('');
}

function blogIndexBodyHtml(): string {
  const items = BLOG_POSTS.map(
    (p) =>
      `<article><a href="/blog/${esc(p.slug)}"><img src="${esc(p.image)}" alt="${esc(
        p.imageAlt
      )}" width="800" height="500" loading="lazy" /><span>${esc(p.category)}</span><h2>${esc(
        p.title
      )}</h2><p>${esc(p.excerpt)}</p></a></article>`
  ).join('');
  return [
    '<main>',
    '<nav aria-label="Trilha de navegação"><ol><li><a href="/">Home</a></li><li aria-current="page">Blog</li></ol></nav>',
    '<h1>Blog da Ilha do Mel</h1>',
    '<p>Eventos, festas, feriados e guias completos para você planejar a viagem perfeita à Ilha do Mel em 2026 — direto de quem vive Encantadas todos os dias.</p>',
    `<section aria-label="Artigos do blog">${items}</section>`,
    '</main>',
  ].join('');
}

function postSchemas(post: BlogPost): Record<string, unknown>[] {
  const canonical = `/blog/${post.slug}`;
  const absoluteUrl = abs(canonical);
  const imageUrl = abs(post.image);

  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: imageUrl,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { '@type': 'Organization', name: 'Pousada Coração da Ilha', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Pousada Coração da Ilha',
      logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: absoluteUrl },
    ],
  };

  const schemas: Record<string, unknown>[] = [LODGING_SCHEMA, blogPosting, breadcrumb];

  if (post.event) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: post.event.name,
      startDate: post.event.startDate,
      endDate: post.event.endDate,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      isAccessibleForFree: post.event.isAccessibleForFree,
      image: imageUrl,
      location: {
        '@type': 'Place',
        name: 'Ilha do Mel',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ilha do Mel - Encantadas',
          addressRegion: 'PR',
          addressCountry: 'BR',
        },
      },
    });
  }

  return schemas;
}

function fromPageSeo(seo: SEOOptions, ogType: 'website' | 'article' = 'website'): PrerenderRoute {
  return {
    path: seo.canonical || '/',
    title: seo.title,
    description: seo.description,
    canonical: abs(seo.canonical || '/'),
    ogImage: abs(seo.ogImage || DEFAULT_OG_IMAGE),
    ogType,
    jsonLd: toArray(seo.jsonLd),
  };
}

export function getRoutes(): PrerenderRoute[] {
  const routes: PrerenderRoute[] = Object.values(PAGE_SEO).map((seo) => fromPageSeo(seo));

  // Índice do blog
  routes.push({
    path: '/blog',
    title: 'Blog da Ilha do Mel: Eventos, Festas e Dicas 2026 | Coração da Ilha',
    description:
      'Blog da Pousada Coração da Ilha: eventos, festas, feriados e guias completos da Ilha do Mel em 2026. Planeje sua viagem para Encantadas.',
    canonical: abs('/blog'),
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    jsonLd: [
      LODGING_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        ],
      },
    ],
    bodyHtml: blogIndexBodyHtml(),
  });

  // Posts do blog
  for (const post of BLOG_POSTS) {
    routes.push({
      path: `/blog/${post.slug}`,
      title: post.seoTitle,
      description: post.metaDescription,
      canonical: abs(`/blog/${post.slug}`),
      ogImage: abs(post.image),
      ogType: 'article',
      jsonLd: postSchemas(post),
      bodyHtml: postBodyHtml(post),
    });
  }

  return routes;
}
