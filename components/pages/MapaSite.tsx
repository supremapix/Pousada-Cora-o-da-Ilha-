import React from 'react';
import { Map, ExternalLink } from 'lucide-react';
import { useSEO, LODGING_SCHEMA } from '../../utils/seo';

interface SitemapGroup {
  title: string;
  links: { label: string; href: string; desc?: string; external?: boolean }[];
}

const sitemapData: SitemapGroup[] = [
  {
    title: "Páginas Principais",
    links: [
      { label: "Página Inicial", href: "/", desc: "Início — Pousada Coração da Ilha, Ilha do Mel" },
      { label: "A Pousada", href: "/#sobre", desc: "Conheça nossa história e estrutura" },
      { label: "Quem Somos", href: "/quem-somos", desc: "Nossa missão, valores e história" },
      { label: "Contato", href: "/contato", desc: "Canais de atendimento e localização" },
    ]
  },
  {
    title: "Hospedagem",
    links: [
      { label: "Acomodações", href: "/#acomodacoes", desc: "Suítes 1 a 8 e Chalé Luxo 9" },
      { label: "Suíte Top Luxo 1 — Família", href: "/#acomodacoes", desc: "Cama de casal + beliche, até 4 pessoas" },
      { label: "Suítes Standard Casal", href: "/#acomodacoes", desc: "Suítes 3 a 8 para casais" },
      { label: "Chalé Luxo 9", href: "/#acomodacoes", desc: "Nossa acomodação mais exclusiva" },
    ]
  },
  {
    title: "Ilha do Mel & Experiências",
    links: [
      { label: "Ilha do Mel", href: "/#experiencia", desc: "Descubra as atrações da ilha" },
      { label: "Guia da Ilha", href: "/#guia", desc: "Praias, trilhas e pontos turísticos" },
      { label: "História da Ilha", href: "/#historia", desc: "A origem e patrimônio da Ilha do Mel" },
    ]
  },
  {
    title: "Blog da Ilha do Mel",
    links: [
      { label: "Blog (índice)", href: "/blog", desc: "Eventos, festas e guias da Ilha do Mel 2026" },
      { label: "Férias de Julho na Ilha do Mel", href: "/blog/ferias-de-julho-na-ilha-do-mel-2026", desc: "Baixa temporada, tainha e tranquilidade" },
      { label: "Festivais de Jazz em Agosto", href: "/blog/festivais-de-jazz-ilha-do-mel-agosto-2026", desc: "Guia completo dos festivais de jazz" },
      { label: "Feriado de 7 de Setembro", href: "/blog/feriado-7-de-setembro-ilha-do-mel-2026", desc: "Feriadão de primavera na ilha" },
      { label: "Primavera: Trilhas e Aves", href: "/blog/primavera-ilha-do-mel-trilhas-observacao-aves", desc: "Melhor época para trilhas e natureza" },
      { label: "12 de Outubro em Família", href: "/blog/feriado-12-de-outubro-dia-das-criancas-ilha-do-mel", desc: "Feriadão com crianças" },
      { label: "Feriados de Novembro", href: "/blog/feriados-de-novembro-ilha-do-mel-2026", desc: "3 feriadões pré-temporada" },
      { label: "Natal na Ilha do Mel", href: "/blog/natal-na-ilha-do-mel-2026", desc: "Fim de ano pé na areia" },
      { label: "Réveillon 2026/2027", href: "/blog/reveillon-ilha-do-mel-2027", desc: "Fogos, festas e virada na praia" },
      { label: "Como Chegar na Ilha do Mel", href: "/blog/como-chegar-na-ilha-do-mel-guia-completo", desc: "Barco, horários e preços 2026" },
      { label: "Melhor Época para Visitar", href: "/blog/melhor-epoca-para-visitar-ilha-do-mel", desc: "Guia mês a mês" },
    ]
  },
  {
    title: "Reservas",
    links: [
      { label: "Solicitar Orçamento", href: "/#reservas", desc: "Formulário de reserva direta" },
      { label: "Reservar Online", href: "https://book.omnibees.com/hotel/20548?lang=pt-BR&currencyId=16", desc: "Motor de reservas OmniBees", external: true },
      { label: "Políticas de Reserva", href: "/#politicas", desc: "Check-in, check-out e regras" },
    ]
  },
  {
    title: "Legal & Privacidade",
    links: [
      { label: "Política de Privacidade", href: "/politica-privacidade", desc: "Como tratamos seus dados pessoais (LGPD)" },
      { label: "Política de Cancelamento e Reembolso", href: "/politica-devolucao", desc: "Regras de cancelamento e reembolso" },
      { label: "Mapa do Site", href: "/mapa-do-site", desc: "Visão geral de todas as páginas" },
    ]
  }
];

const MapaSite: React.FC = () => {
  useSEO({
    title: 'Mapa do Site | Pousada na Ilha do Mel – Coração da Ilha',
    description:
      'Navegue por todas as páginas da Pousada Coração da Ilha: acomodações, blog, guia da Ilha do Mel, contato e reservas.',
    canonical: '/mapa-do-site',
    jsonLd: LODGING_SCHEMA,
  });

  return (
    <main className="pt-24">
      <section className="bg-deep-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-lime font-bold tracking-widest uppercase text-xs mb-4 block">Navegação Completa</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Mapa do Site</h1>
          <div className="h-1 w-24 bg-lime mx-auto rounded-full mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Encontre rapidamente qualquer seção ou página do site da Pousada Coração da Ilha.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapData.map((group, gIdx) => (
              <div key={gIdx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h2 className="flex items-center gap-2 text-deep-navy font-bold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-gray-200">
                  <Map size={16} className="text-lime-700" />
                  {group.title}
                </h2>
                <ul className="space-y-3">
                  {group.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="group flex items-start gap-2 hover:text-lime-700 transition-colors"
                      >
                        <span className="text-lime-600 mt-0.5 shrink-0">›</span>
                        <div>
                          <span className="font-semibold text-deep-navy group-hover:text-lime-700 transition-colors text-sm flex items-center gap-1">
                            {link.label}
                            {link.external && <ExternalLink size={12} className="opacity-60" />}
                          </span>
                          {link.desc && (
                            <span className="text-gray-500 text-xs block leading-snug">{link.desc}</span>
                          )}
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
              Não encontrou o que procura?{" "}
              <a href="/contato" className="text-lime-700 font-semibold hover:underline">Entre em contato</a>{" "}
              e teremos prazer em ajudar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MapaSite;
