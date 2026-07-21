import React from 'react';
import { Calendar, Clock, ArrowRight, ArrowLeft, MessageCircle, User } from 'lucide-react';
import { BlogPost as BlogPostType, getRelatedPosts } from '../../data/blogPosts';
import { navigate } from '../../utils/navigate';
import { useSEO, LODGING_SCHEMA, SITE_URL, DEFAULT_OG_IMAGE } from '../../utils/seo';
import { WHATSAPP_NUMBER } from '../../constants';

interface BlogPostProps {
  post: BlogPostType;
  onNavigate: (page: string) => void;
}

const formatDate = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

const BlogPost: React.FC<BlogPostProps> = ({ post, onNavigate }) => {
  const canonical = `/blog/${post.slug}`;
  const absoluteUrl = `${SITE_URL}${canonical}`;
  const imageUrl = post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`;
  const related = getRelatedPosts(post);

  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: imageUrl,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@type': 'Organization',
      name: 'Pousada Coração da Ilha',
      url: SITE_URL,
    },
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

  useSEO({
    title: post.seoTitle,
    description: post.metaDescription,
    canonical,
    ogImage: imageUrl,
    ogType: 'article',
    jsonLd: schemas,
  });

  const whatsappHref = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    'Olá! Vim pelo blog da Pousada Coração da Ilha e gostaria de reservar minha estadia.'
  )}`;

  return (
    <main className="bg-deep-navy text-white min-h-screen pt-24">
      {/* Hero */}
      <header className="relative">
        <div className="relative h-[45vh] min-h-[320px] overflow-hidden">
          <img
            src={post.image || '/placeholder.svg'}
            alt={post.imageAlt}
            width={1600}
            height={900}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/70 to-deep-navy/30" />
        </div>

        <div className="container mx-auto px-4 relative -mt-40 z-10 max-w-3xl">
          <nav aria-label="Trilha de navegação" className="mb-5 text-xs text-gray-300">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <button onClick={() => navigate('/', onNavigate)} className="hover:text-lime transition-colors">Home</button>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <button onClick={() => navigate('/blog', onNavigate)} className="hover:text-lime transition-colors">Blog</button>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-lime font-semibold line-clamp-1" aria-current="page">{post.category}</li>
            </ol>
          </nav>

          <span className="inline-block bg-lime text-deep-navy text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 text-balance">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-300 border-b border-white/10 pb-8">
            <span className="flex items-center gap-2"><User size={15} className="text-ocean" /> Equipe Pousada Coração da Ilha</span>
            <time dateTime={post.datePublished} className="flex items-center gap-2">
              <Calendar size={15} className="text-ocean" /> {formatDate(post.datePublished)}
            </time>
            <span className="flex items-center gap-2"><Clock size={15} className="text-ocean" /> {post.readingTime} de leitura</span>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 max-w-3xl py-12">
        <article className="blog-content">
          {post.content.map((block, i) => {
            switch (block.type) {
              case 'h2':
                return <h2 key={i} className="text-2xl md:text-3xl font-black mt-12 mb-4 text-ocean text-balance">{block.text}</h2>;
              case 'h3':
                return <h3 key={i} className="text-xl font-black mt-8 mb-3 text-white text-balance">{block.text}</h3>;
              case 'ul':
                return (
                  <ul key={i} className="my-5 space-y-3">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-gray-300 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0" aria-hidden="true" />
                        <span className="text-pretty">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              default:
                return <p key={i} className="text-gray-200 leading-relaxed my-5 text-pretty text-[17px]">{block.text}</p>;
            }
          })}
        </article>

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="mt-14">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-black mb-6 text-balance">Perguntas frequentes</h2>
          <div className="space-y-3">
            {post.faq.map((item, i) => (
              <details key={i} className="group border border-white/10 rounded-2xl bg-white/4 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-bold text-white list-none">
                  <span className="text-pretty">{item.q}</span>
                  <ArrowRight size={16} className="text-ocean flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5 text-gray-300 leading-relaxed text-pretty border-t border-white/5 pt-4">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Reserve sua estadia" className="mt-14 bg-gradient-to-br from-ocean/20 to-lime/10 border border-ocean/30 rounded-3xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-balance">
            Reserve sua estadia na Pousada Coração da Ilha
          </h2>
          <p className="text-gray-200 mb-8 max-w-lg mx-auto text-pretty">
            À beira-mar em Encantadas, a poucos passos do trapiche e das melhores trilhas da Ilha do Mel. Café da manhã incluso e vista para o mar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-black px-8 py-4 rounded-full transition-all shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle size={18} /> Reservar pelo WhatsApp
            </a>
            <button
              onClick={() => navigate('/#reservas', onNavigate)}
              className="inline-flex items-center justify-center gap-2 bg-lime hover:bg-white text-deep-navy font-black px-8 py-4 rounded-full transition-all shadow-lg hover:-translate-y-0.5"
            >
              Solicitar Orçamento
            </button>
          </div>
        </section>
      </div>

      {/* Posts relacionados */}
      {related.length > 0 && (
        <aside aria-label="Artigos relacionados" className="border-t border-white/5 py-14">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-black mb-8 text-balance">Continue explorando a Ilha do Mel</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rp) => (
                <button
                  key={rp.slug}
                  onClick={() => navigate(`/blog/${rp.slug}`, onNavigate)}
                  className="group text-left bg-white/4 border border-white/8 rounded-2xl overflow-hidden hover:border-ocean/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={rp.image || '/placeholder.svg'}
                      alt={rp.imageAlt}
                      width={600}
                      height={360}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] text-ocean font-black uppercase tracking-widest">{rp.category}</span>
                    <h3 className="font-bold text-white mt-2 leading-snug text-pretty group-hover:text-ocean transition-colors">{rp.title}</h3>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={() => navigate('/blog', onNavigate)}
                className="inline-flex items-center gap-2 text-lime font-black text-sm uppercase tracking-wider hover:text-white transition-colors"
              >
                <ArrowLeft size={16} /> Ver todos os artigos do blog
              </button>
            </div>
          </div>
        </aside>
      )}
    </main>
  );
};

export default BlogPost;
