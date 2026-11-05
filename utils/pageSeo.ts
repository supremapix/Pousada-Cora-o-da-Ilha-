import { SEOOptions, LODGING_SCHEMA, WEBSITE_SCHEMA } from './seo';

/**
 * Fonte única dos metadados de SEO das páginas estáticas (não-blog).
 * Consumido tanto pelos componentes (via useSEO) quanto pelo script de
 * prerender de build (scripts/routes.ts), garantindo que o HTML estático
 * gerado e a SPA em runtime fiquem sempre em sincronia.
 */
export const PAGE_SEO = {
  home: {
    title: 'Pousada na Ilha do Mel à Beira-Mar | Coração da Ilha – Encantadas',
    description:
      'Pousada na Ilha do Mel pé na areia, na Praia de Encantadas. Conheça suítes e chalé para até 4 pessoas, veja fotos e consulte disponibilidade para sua viagem.',
    canonical: '/',
    jsonLd: [LODGING_SCHEMA, WEBSITE_SCHEMA],
  },
  quemSomos: {
    title: 'Quem Somos | Pousada na Ilha do Mel em Encantadas – Coração da Ilha',
    description:
      'Conheça a Pousada Coração da Ilha, na Praia de Encantadas: acomodações para casais e famílias e canais diretos para planejar sua estadia.',
    canonical: '/quem-somos',
    jsonLd: LODGING_SCHEMA,
  },
  contato: {
    title: 'Reservas – Pousada na Ilha do Mel em Encantadas | Coração da Ilha',
    description:
      'Reserve sua pousada na Ilha do Mel, em Encantadas. Fale com a Pousada Coração da Ilha pelo WhatsApp, telefone ou e-mail e garanta sua estadia à beira-mar.',
    canonical: '/contato',
    jsonLd: LODGING_SCHEMA,
  },
  guiaIlha: {
    title: 'Guia da Ilha do Mel: O Que Fazer, Trilhas e Dicas | Coração da Ilha',
    description:
      'Guia completo da Ilha do Mel: como chegar, trilhas, praias, Gruta das Encantadas e onde ficar. Planeje sua viagem com a Pousada Coração da Ilha.',
    canonical: '/guia-ilha-do-mel',
    jsonLd: LODGING_SCHEMA,
  },
  mapaSite: {
    title: 'Mapa do Site | Pousada na Ilha do Mel – Coração da Ilha',
    description:
      'Navegue por todas as páginas da Pousada Coração da Ilha: acomodações, blog, guia da Ilha do Mel, contato e reservas.',
    canonical: '/mapa-do-site',
    jsonLd: LODGING_SCHEMA,
  },
  politicaPrivacidade: {
    title: 'Política de Privacidade | Pousada Coração da Ilha',
    description:
      'Política de privacidade da Pousada Coração da Ilha: como coletamos, usamos e protegemos os seus dados pessoais.',
    canonical: '/politica-privacidade',
    jsonLd: LODGING_SCHEMA,
  },
  politicaDevolucao: {
    title: 'Política de Reembolso e Cancelamento | Pousada Coração da Ilha',
    description:
      'Conheça a política de reembolso e cancelamento de reservas da Pousada Coração da Ilha, na Ilha do Mel – Encantadas.',
    canonical: '/politica-devolucao',
    jsonLd: LODGING_SCHEMA,
  },
} satisfies Record<string, SEOOptions>;
