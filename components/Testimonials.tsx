import React from 'react';
import { MAPS_LINK } from '../constants';
export default function Testimonials() {
 return <section className="py-20 bg-white"><div className="container mx-auto px-4 max-w-3xl text-center">
 <h2 className="text-3xl md:text-4xl font-serif font-bold mb-5">Conheça a experiência de outros hóspedes</h2>
 <p className="text-gray-600 leading-relaxed mb-8">Antes de reservar, consulte avaliações recentes, confira as fotos das acomodações e converse com a pousada sobre o que é importante para sua estadia.</p>
 <a className="inline-block bg-deep-navy text-white px-8 py-4 rounded-full" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">Ver a pousada no Google Maps</a>
 </div></section>;
}
