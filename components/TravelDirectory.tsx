import React, { useId, useState } from 'react';
import { BLOG_POSTS } from '../data/blogPosts';
const travelPosts = BLOG_POSTS.filter(post => post.travel);
const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
const states = [...new Set(travelPosts.map(post => post.travel!.state))].sort();
export default function TravelDirectory() {
  const id = useId();
  const [query, setQuery] = useState('');
  const [state, setState] = useState('');
  const matches = travelPosts.filter(post => (!state || post.travel!.state === state) && normalize(`${post.travel!.city} ${post.travel!.state}`).includes(normalize(query.trim())));
  return <section id="cidades" aria-labelledby={`${id}-heading`} className="py-16 border-b border-white/10 scroll-mt-32">
    <div className="container mx-auto px-4">
      <p className="uppercase tracking-widest text-xs text-lime font-bold mb-4">Da sua cidade até Encantadas</p>
      <h2 id={`${id}-heading`} className="text-3xl md:text-4xl font-serif font-bold mb-5">Como chegar à Ilha do Mel saindo de {travelPosts.length} cidades</h2>
      <p className="text-gray-300 max-w-3xl mb-8 leading-relaxed">Escolha sua origem para entender o acesso rodoviário, planejar as conexões e organizar a travessia. As rotas são orientações de planejamento: confira trânsito, passagens e operação dos barcos nas suas datas.</p>
      <div role="search" aria-label="Encontrar guia por cidade" className="grid sm:grid-cols-3 gap-4 max-w-3xl mb-6">
        <div className="sm:col-span-2"><label htmlFor={`${id}-city`} className="block text-sm font-bold mb-2">Sua cidade</label><input id={`${id}-city`} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Ex.: Maringá, Londrina, Joinville" className="w-full rounded-xl bg-white text-deep-navy px-4 py-3" /></div>
        <div><label htmlFor={`${id}-state`} className="block text-sm font-bold mb-2">Estado</label><select id={`${id}-state`} value={state} onChange={event => setState(event.target.value)} className="w-full rounded-xl bg-white text-deep-navy px-4 py-3"><option value="">Todos os estados</option>{states.map(uf => <option key={uf}>{uf}</option>)}</select></div>
      </div>
      <p role="status" aria-live="polite" className="text-gray-300 text-sm mb-6">{matches.length} {matches.length === 1 ? 'cidade encontrada' : 'cidades encontradas'}{query ? ` para “${query}”` : ''}.</p>
      {matches.length === 0 && <div className="bg-white/5 rounded-xl p-6"><p className="mb-4">Tente outro nome ou confira o guia geral de acesso.</p><button className="text-lime underline mr-6" onClick={() => { setQuery(''); setState(''); }}>Limpar busca</button><a className="text-lime underline" href="/blog/como-chegar-na-ilha-do-mel-guia-completo">Guia de como chegar</a></div>}
      {states.map(uf => { const posts = matches.filter(post => post.travel!.state === uf); return posts.length > 0 ? <section key={uf} aria-labelledby={`${id}-${uf}`} className="travel-city-group mb-9"><h3 id={`${id}-${uf}`} className="text-xl font-bold text-ocean border-b border-white/10 pb-3 mb-3">{uf} · {posts.length} {posts.length === 1 ? 'cidade' : 'cidades'}</h3><ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-1">{posts.map(post => <li key={post.slug}><a className="city-link text-gray-200 hover:text-lime underline decoration-white/20 underline-offset-4" href={`/blog/${post.slug}`}>{post.travel!.city} <span className="sr-only">para a Ilha do Mel</span></a></li>)}</ul></section> : null; })}
    </div>
  </section>;
}
