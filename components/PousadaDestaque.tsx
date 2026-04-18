import React from 'react';
import { Waves, Users, Coffee, Wifi, Wind, Star, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const diferenciais = [
  { icon: <Waves size={22} className="text-[#1A6B5A]" />, title: 'Piscina Beira-Mar', sub: 'Única na ilha' },
  { icon: <Users size={22} className="text-[#0D4F6C]" />, title: 'Apenas 7 Casais', sub: 'Máxima privacidade' },
  { icon: <Star size={22} className="text-[#E8C96B]" />, title: 'Suítes + Hidromassagem', sub: 'Conforto premium' },
  { icon: <span className="text-xl">🐬</span>, title: 'Veja Golfinhos', sub: 'Fins de semana' },
  { icon: <Coffee size={22} className="text-amber-600" />, title: 'Café da Manhã Incluso', sub: 'Variedades regionais' },
  { icon: <span className="text-xl">🍹</span>, title: 'Bar + Churrasqueira', sub: 'Área externa ao mar' },
  { icon: <Wifi size={22} className="text-blue-500" />, title: 'Wi-Fi 100Mbps', sub: 'Em todos os quartos' },
  { icon: <Wind size={22} className="text-sky-400" />, title: 'Ar-condicionado', sub: 'Todos os quartos' },
];

const PousadaDestaque: React.FC = () => (
  <section className="py-24" style={{ background: 'linear-gradient(135deg, #0D4F6C 0%, #1A6B5A 50%, #2A8A70 100%)' }}>
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#E8C96B] text-xs font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
          <Star size={12} fill="currentColor" /> Escolha dos Casais · Mais de 20 anos
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
          Desperte com o som das ondas.<br />
          <span className="text-[#E8C96B]">Durma olhando para o mar.</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-base leading-relaxed">
          A Pousada Coração da Ilha não é apenas um lugar para dormir — é uma experiência completa à beira-mar. Localizada diretamente na areia de Encantadas, somos a <strong className="text-white">ÚNICA</strong> pousada da Ilha do Mel com piscina de frente pro mar. Atendemos exclusivamente 7 casais por vez, garantindo privacidade, silêncio e um atendimento que parece cuidado de família.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {diferenciais.map((d, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex justify-center mb-3 w-10 h-10 rounded-xl bg-white/10 mx-auto items-center">
              {d.icon}
            </div>
            <div className="font-black text-white text-sm leading-tight">{d.title}</div>
            <div className="text-white/50 text-xs mt-1">{d.sub}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Ol%C3%A1!%20Quero%20verificar%20disponibilidade%20na%20Pousada%20Cora%C3%A7%C3%A3o%20da%20Ilha.`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 bg-white text-[#1A6B5A] font-black px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#E8C96B] hover:text-[#1C1C1C] shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_30px_rgba(232,201,107,0.5)]"
        >
          <MessageCircle size={20} />
          Verificar Disponibilidade
        </a>
        <a
          href="#mapa"
          className="flex items-center justify-center gap-3 border-2 border-white/40 text-white font-black px-8 py-4 rounded-full transition-all duration-300 hover:border-white hover:bg-white/10"
        >
          Ver no Mapa Interativo
        </a>
      </div>
    </div>
  </section>
);

export default PousadaDestaque;
