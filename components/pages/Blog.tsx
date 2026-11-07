import React from 'react';
import { Calendar, Clock, ArrowRight, MapPin } from 'lucide-react';
import { EDITORIAL_POSTS } from '../../data/blogPosts';
import TravelDirectory from '../TravelDirectory';
import { BLOG_SEO, BLOG_SCHEMAS } from '../../utils/blogSeo';
import { useSEO, LODGING_SCHEMA, SITE_URL } from '../../utils/seo';

interface BlogProps {
  onNavigate: (page: string) => void;
}

const formatDate = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  useSEO({ ...BLOG_SEO, jsonLd: BLOG_SCHEMAS });

  const [featured, ...rest] = EDITORIAL_POSTS;

  return (
    <main id="conteudo" tabIndex={-1} className="bg-deep-navy text-white min-h-screen pt-24">
      <section className="relative py-16 border-b border-white/5">
        <div className="container mx-auto px-4">
          <nav aria-label="Trilha de navegação" className="mb-6 text-xs text-gray-400">
            <ol className="flex items-center gap-2">
              <li>
                <a href={'/'} className="hover:text-lime transition-colors">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-lime font-semibold" aria-current="page">Blog</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 bg-ocean/20 border border-ocean/30 text-ocean text-xs font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
            <MapPin size={12} /> Ilha do Mel, Paraná
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 text-balance">
            Blog da <span className="text-ocean">Ilha do Mel</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl text-pretty">
            Orientações para escolher sua hospedagem, organizar a travessia e planejar os passeios. Confira as datas de cada artigo e confirme serviços e horários antes de viajar.
          </p>
        </div>
      </section>

      <TravelDirectory />

      <section className="py-14" aria-label="Artigos do blog">
        <div className="container mx-auto px-4">
          {/* Post em destaque */}
          <article
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/4 border border-white/8 rounded-3xl overflow-hidden mb-14 hover:border-ocean/30 transition-all duration-300"
          >
            <div className="relative h-64 lg:h-full min-h-[280px] overflow-hidden">
              <img
                src={featured.image || '/placeholder.svg'}
                alt={featured.imageAlt}
                width={1200}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-lime text-deep-navy text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                {featured.category}
              </span>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                <span className="flex items-center gap-1.5"><Calendar size={13} className="text-ocean" /> {formatDate(featured.datePublished)}</span>
                <span className="flex items-center gap-1.5"><Clock size={13} className="text-ocean" /> {featured.readingTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight text-balance group-hover:text-ocean transition-colors">
                <a href={`/blog/${featured.slug}`}>{featured.title}</a>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-pretty">{featured.excerpt}</p>
              <a href={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 text-lime font-black text-sm uppercase tracking-wider">
                Ler artigo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </article>

          {/* Grade dos demais posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-white/4 border border-white/8 rounded-3xl overflow-hidden hover:border-ocean/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image || '/placeholder.svg'}
                    alt={post.imageAlt}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-deep-navy/80 backdrop-blur-sm text-lime text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-lime/20">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-ocean" /> Atualizado em {formatDate(post.dateModified)}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-ocean" /> {post.readingTime}</span>
                  </div>
                  <h2 className="text-lg font-black mb-3 leading-snug text-balance group-hover:text-ocean transition-colors">
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow text-pretty">{post.excerpt}</p>
                  <a href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-lime font-bold text-xs uppercase tracking-wider mt-auto">
                    Ler artigo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
