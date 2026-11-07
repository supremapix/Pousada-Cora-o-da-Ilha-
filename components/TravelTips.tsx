import React from 'react';
const tips = [
  ['Escolha o desembarque certo', 'A Coração da Ilha fica em Encantadas. Ao consultar a passagem, confirme esse destino: Nova Brasília é outra região da Ilha do Mel.'],
  ['Planeje estrada e barco juntos', 'Chegue ao terminal com folga para estacionar, retirar a bagagem e embarcar. Confirme a última saída e não conte com uma travessia após um voo ou ônibus que chega tarde.'],
  ['Deixe o carro no continente', 'Compare estacionamentos perto do terminal e confirme diária, segurança e horário de retirada. Na ilha, prepare-se para caminhar por areia com uma bagagem leve.'],
  ['Organize também a volta', 'Confira o barco de retorno antes de fechar sua programação. Mau tempo, condições do mar e operação podem alterar a viagem; mantenha margem para o trecho seguinte.'],
];
export default function TravelTips() {
  return <section id="como-chegar" aria-labelledby="travel-tips-title" className="py-20 bg-deep-navy text-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <p className="text-lime uppercase tracking-widest font-bold text-xs mb-4">Antes de colocar o pé na areia</p>
      <h2 id="travel-tips-title" className="text-3xl md:text-5xl font-serif font-bold mb-6">Da sua cidade à Ilha do Mel, com a viagem bem planejada</h2>
      <p className="text-gray-300 text-lg max-w-3xl mb-10">Vem de Maringá, Curitiba, Joinville ou São Paulo? Reunimos 151 guias por cidade para ajudar a escolher o caminho até o litoral e a travessia para Encantadas.</p>
      <div className="grid md:grid-cols-2 gap-6 mb-10">{tips.map(([title, text]) => <article key={title} className="p-6 rounded-2xl border border-white/10 bg-white/5"><h3 className="text-xl font-bold text-ocean mb-3">{title}</h3><p className="text-gray-300 leading-relaxed">{text}</p></article>)}</div>
      <div className="flex flex-wrap gap-4"><a href="/blog#cidades" className="bg-lime text-deep-navy rounded-full px-7 py-4 font-bold">Encontrar minha cidade</a><a href="/blog/como-chegar-na-ilha-do-mel-guia-completo" className="border border-white/30 rounded-full px-7 py-4 font-bold">Entender a travessia</a></div>
      <p className="text-gray-400 text-sm mt-6">Horários, tarifas e condições devem ser confirmados com os prestadores. A reserva da pousada não inclui automaticamente transporte nem estacionamento.</p>
    </div>
  </section>;
}
