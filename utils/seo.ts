import { useEffect } from 'react';

export const SITE_URL = 'https://coracaodailha.com.br';
export const DEFAULT_OG_IMAGE =
  'https://coracaodailha.com.br/site/assets/images/pousada-coracao-da-ilha-encantadas-ilha-do-mel-parana-360x371.png';

interface SEOOptions {
  title: string;
  description: string;
  /** Caminho relativo (ex.: "/blog") ou URL absoluta. */
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  /** Objeto(s) JSON-LD a serem injetados na página. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const JSONLD_FLAG = 'data-managed-jsonld';

function setJsonLd(data?: Record<string, unknown> | Record<string, unknown>[]) {
  document.head
    .querySelectorAll(`script[${JSONLD_FLAG}]`)
    .forEach((node) => node.remove());
  if (!data) return;
  const blocks = Array.isArray(data) ? data : [data];
  blocks.forEach((block) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute(JSONLD_FLAG, 'true');
    script.textContent = JSON.stringify(block);
    document.head.appendChild(script);
  });
}

/**
 * Hook de SEO para a SPA. Atualiza title, meta description, canonical,
 * Open Graph, Twitter Card e injeta os schemas JSON-LD da página atual.
 */
export function useSEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  jsonLd,
}: SEOOptions) {
  useEffect(() => {
    const url = canonical
      ? canonical.startsWith('http')
        ? canonical
        : `${SITE_URL}${canonical}`
      : `${SITE_URL}${window.location.pathname}`;

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertCanonical(url);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:site_name', 'Pousada Coração da Ilha');
    upsertMeta('property', 'og:locale', 'pt_BR');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);

    setJsonLd(jsonLd);

    return () => setJsonLd(undefined);
  }, [title, description, canonical, ogImage, ogType, jsonLd]);
}

/** Schema base da pousada (BedAndBreakfast), reutilizado em todas as páginas. */
export const LODGING_SCHEMA: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'BedAndBreakfast',
  name: 'Pousada Coração da Ilha',
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  description:
    'Pousada à beira-mar na Praia de Encantadas, Ilha do Mel - PR, com vista para o mar e avistamento de golfinhos.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ilha do Mel - Encantadas',
    addressRegion: 'PR',
    addressCountry: 'BR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: -25.5651, longitude: -48.3147 },
  priceRange: '$$',
  checkinTime: '14:00',
  checkoutTime: '12:00',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Vista para o mar', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Café da manhã', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
  ],
};

/** Schema WebSite com SearchAction, usado apenas na home. */
export const WEBSITE_SCHEMA: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Pousada Coração da Ilha',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/blog?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};
