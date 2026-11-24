import React from 'react';
import { useSEO } from '../../utils/seo';
import { PAGE_SEO } from '../../utils/pageSeo';
import { WHATSAPP_NUMBER } from '../../constants';
import SobreIlha from '../SobreIlha';
import MapaInterativo from '../MapaInterativo';
import PousadaDestaque from '../PousadaDestaque';
const faqs = [
 ['Em qual região fica a pousada?', 'Na Praia de Encantadas, Ilha do Mel, no município de Paranaguá, Paraná. Ao organizar a travessia, confirme o desembarque em Encantadas.'],
 ['A pousada recebe famílias?', 'O catálogo apresenta acomodações para duas ou até quatro pessoas. Informe o número de adultos e as idades das crianças para confirmar a acomodação e as condições da reserva.'],
 ['Qual é o horário de entrada e saída?', 'O check-in informado pela pousada é das 14h às 20h e o check-out até 12h. Combine antecipadamente qualquer necessidade de chegada fora desse intervalo.'],
 ['Como consultar valores?', 'Os valores dependem das datas, da acomodação e do número de hóspedes. Consulte o motor de reservas ou fale com a equipe.'],
 ['É garantido ver golfinhos?', 'Não. O avistamento de animais silvestres depende das condições naturais. Observe à distância, sem alimentar ou perseguir os animais.'],
 ['O que devo confirmar antes da viagem?', 'Disponibilidade, capacidade do quarto, condições de pagamento e cancelamento, horários de barco e orientações para chegar à pousada.'],
];
export default function GuiaIlha({ onNavigate }: { onNavigate: (page:string)=>void }) {
 useSEO(PAGE_SEO.guiaIlha);
 return <main id="conteudo" tabIndex={-1} className="pt-24 bg-deep-navy text-white">
 <section id="travessia-encantadas" aria-labelledby="travessia-encantadas-titulo" className="container mx-auto px-4 py-16 max-w-4xl scroll-mt-28">
  <h2 id="travessia-encantadas-titulo" className="text-3xl font-bold mb-6">Como chegar a Encantadas</h2>
  <p className="leading-relaxed mb-4">O acesso à ilha é feito de barco. Pontal do Sul e Paranaguá são pontos de embarque no continente. Para chegar à Coração da Ilha, confirme que a embarcação desembarca em Encantadas, não em Nova Brasília.</p>
  <h3 className="text-xl font-bold mb-3">Checklist da travessia</h3>
  <ul className="list-disc pl-6 space-y-2 mb-6">
   <li>Confirme o terminal de origem, o destino Encantadas e as instruções de embarque com a operadora.</li>
   <li>Confira as saídas e o último horário de retorno nas datas da viagem. Os horários podem mudar com a maré e o tempo.</li>
   <li>Deixe margem para chegar ao terminal, organizar a bagagem e embarcar. Se for de carro, planeje onde deixá-lo no continente.</li>
   <li>Avise a pousada sobre sua previsão de chegada e peça orientação para o trajeto a pé desde o trapiche.</li>
  </ul>
  <div className="rounded-2xl border border-white/20 bg-white/5 p-5 mb-6">
   <h3 className="text-xl font-bold mb-2">Controle de acesso à Ilha do Mel</h3>
   <p className="leading-relaxed mb-2"><strong>Conferido em 24/11/2026:</strong> o IAT e a Unadim iniciaram o cadastro de moradores. A etapa para turistas foi anunciada para depois, sem data de início informada no comunicado. Antes de viajar, confira se o IAT publicou novas orientações para visitantes.</p>
   <a href="https://www.iat.pr.gov.br/Noticia/IAT-inicia-cadastramento-de-moradores-para-sistema-de-controle-de-acesso-Ilha-do-Mel" target="_blank" rel="noopener noreferrer" className="underline text-lime">Ler o comunicado do IAT</a>
  </div>
  <div className="flex flex-wrap gap-4"><a href="https://abaline.com.br/travessia/pontal-encantadas" target="_blank" rel="noopener noreferrer" className="underline text-lime">Conferir Pontal do Sul a Encantadas: ida e volta</a><a href="/blog#cidades" className="underline text-lime">Ver guias de 151 cidades</a><a href="/blog/como-chegar-na-ilha-do-mel-guia-completo" className="underline text-lime">Passo a passo da viagem</a></div>
 </section>
 <SobreIlha />
 <section className="container mx-auto px-4 py-16 max-w-4xl"><h2 className="text-3xl font-bold mb-6">Como chegar a Encantadas</h2><p className="leading-relaxed mb-4">O acesso à ilha é feito de barco. Pontal do Sul e Paranaguá são pontos de embarque. Para chegar à Coração da Ilha, confirme com a operadora a linha para Encantadas, o último horário de saída e as condições da travessia.</p><p className="leading-relaxed mb-6">Deixe o carro no continente e leve bagagem adequada aos caminhos de areia. Avise a pousada sobre sua previsão de chegada e peça orientação para o trajeto a pé desde o trapiche.</p><div className="flex flex-wrap gap-4"><a href="https://www.abaline.com.br/" target="_blank" rel="noopener noreferrer" className="underline text-lime">Consultar a operadora de travessia</a><a href="/blog#cidades" className="underline text-lime">Ver guias de 151 cidades</a><a href="/blog/como-chegar-na-ilha-do-mel-guia-completo" className="underline text-lime">Passo a passo da viagem</a></div></section>
 <section className="bg-white text-deep-navy py-16"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-3xl font-bold mb-6">Passeios para organizar com calma</h2><div className="grid md:grid-cols-3 gap-6">{[
 ['Gruta das Encantadas','Um dos atrativos da região de Encantadas. Verifique as condições de acesso e respeite a sinalização.'],
 ['Farol das Conchas','Na região de Nova Brasília, o passeio envolve caminhada e escadaria. Planeje o deslocamento desde Encantadas e a volta antes de sair.'],
 ['Fortaleza de Nossa Senhora dos Prazeres','Reserve tempo para visitar o patrimônio histórico. Consulte a rota, o transporte e as condições de visitação no dia.'],
 ].map(([title,text])=><article key={title} className="bg-gray-50 p-6 rounded-2xl"><h3 className="text-xl font-bold mb-3">{title}</h3><p>{text}</p></article>)}</div><p className="mt-8">Use os caminhos autorizados, recolha seu lixo e respeite as áreas de conservação. <a href="https://www.iat.pr.gov.br/Pagina/Parque-Estadual-da-Ilha-do-Mel-PEIM" target="_blank" rel="noopener noreferrer" className="underline">Consulte as orientações do Instituto Água e Terra.</a></p></div></section>
 <PousadaDestaque /><MapaInterativo />
 <section className="container mx-auto px-4 max-w-4xl py-16"><h2 className="text-3xl font-bold mb-6">Dúvidas antes da reserva</h2>{faqs.map(([q,a])=><details key={q} className="border-b border-white/20 py-5"><summary className="font-bold cursor-pointer">{q}</summary><p className="pt-4 text-gray-300">{a}</p></details>)}<a className="inline-block mt-8 bg-lime text-deep-navy rounded-full px-6 py-4 font-bold" href={'https://wa.me/'+WHATSAPP_NUMBER} target="_blank" rel="noopener noreferrer">Conversar com a pousada</a></section>
 </main>;
}
