import React from 'react';
import { useSEO } from '../../utils/seo';
export default function NotFound() {
  useSEO({ title: 'Página não encontrada | Coração da Ilha', description: 'Encontre as páginas e os guias de viagem da Pousada Coração da Ilha.', noindex: true });
  return <main id="conteudo" tabIndex={-1} className="pt-40 pb-24 px-6 text-center bg-deep-navy text-white flex-grow">
    <h1 className="text-4xl font-serif font-bold mb-6">Página não encontrada</h1>
    <p className="mb-8">Confira o endereço ou encontre sua cidade no blog.</p>
    <a className="text-lime underline mr-6" href="/">Página inicial</a>
    <a className="text-lime underline" href="/blog#cidades">Guias de viagem por cidade</a>
  </main>;
}
