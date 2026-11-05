import React from 'react';
import { ACCOMMODATIONS, BOOKING_LINK } from '../constants';
export default function PousadaDestaque() { return <section className="py-20 bg-deep-navy text-white"><div className="container mx-auto px-4 max-w-4xl text-center">
 <h2 className="text-3xl md:text-4xl font-serif font-bold mb-5">Escolha sua acomodação em Encantadas</h2>
 <p className="text-gray-300 leading-relaxed mb-8">O catálogo da Coração da Ilha reúne {ACCOMMODATIONS.length} acomodações. Há opções para duas pessoas e quartos com capacidade para até quatro hóspedes. Banheira, hidromassagem e varanda variam conforme a unidade: confira os detalhes antes de reservar.</p>
 <div className="flex flex-wrap gap-4 justify-center"><a href="/#acomodacoes" className="bg-lime text-deep-navy rounded-full px-6 py-4 font-bold">Ver fotos e acomodações</a><a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="border border-white rounded-full px-6 py-4">Consultar disponibilidade</a></div>
 </div></section>; }
