import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Clock, ChevronDown, ChevronUp, Instagram, MessageCircle, Star, Anchor, Lightbulb, Landmark, Camera, Fish, Waves, Car, Sailboat, Footprints, Sun, Moon, Wifi, DollarSign, ShieldPlus, Calendar } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../constants';
import { navigate } from '../../utils/navigate';
import SobreIlha from '../SobreIlha';
import MapaInterativo from '../MapaInterativo';
import PousadaDestaque from '../PousadaDestaque';

interface GuiaIlhaProps {
  onNavigate: (page: string) => void;
}

const faqItems = [
  { q: 'Qual a distância da pousada do cais de Encantadas?', a: 'Aproximadamente 500m pela praia — uma caminhada tranquila de cerca de 5 minutos.' },
  { q: 'A pousada tem piscina?', a: 'Sim! Somos a ÚNICA pousada beira-mar com piscina em toda a Ilha do Mel.' },
  { q: 'A pousada é exclusiva para casais?', a: 'Sim, atendemos apenas 7 casais por vez, garantindo máxima privacidade e atenção personalizada.' },
  { q: 'Tem wi-fi na pousada?', a: 'Sim, 100Mbps disponível em todos os quartos — mas a ilha convida ao desapego!' },
  { q: 'Qual o horário de check-in / check-out?', a: 'Check-in: a partir das 14h. Check-out: até 12h.' },
  { q: 'Como funciona o café da manhã?', a: 'Incluso na diária, servido das 08h às 10h com frutas regionais, pães artesanais e geleias caseiras.' },
  { q: 'Aceita crianças?', a: 'Por ser uma pousada exclusiva para casais, não é recomendado para crianças.' },
  { q: 'Qual a melhor época para ver golfinhos?', a: 'Fins de semana pela manhã têm maior frequência de avistamentos — às vezes da própria piscina!' },
  { q: 'Como faço uma reserva?', a: 'Via WhatsApp: (41) 99900-4808 ou pelo botão de reserva online.' },
];

const attractions = [
  {
    icon: <Anchor size={32} className="text-ocean" />,
    name: 'Gruta das Encantadas',
    difficulty: 'Fácil',
    diffColor: 'bg-emerald-500',
    distance: '1km',
    duration: '1-2h',
    description: 'Formação rochosa mística com grutas e piscinas naturais. Lenda das sereias e encantamentos. Um dos pontos mais fotografados do Brasil.',
  },
  {
    icon: <Lightbulb size={32} className="text-amber-400" />,
    name: 'Farol das Conchas',
    difficulty: 'Moderado',
    diffColor: 'bg-amber-500',
    distance: '6km',
    duration: '3-4h',
    description: 'Construído em 1872, o farol permite ver os dois lados da ilha simultaneamente. Vista 360° incomparável no topo.',
  },
  {
    icon: <Landmark size={32} className="text-stone-400" />,
    name: 'Fortaleza Portuguesa',
    difficulty: 'Fácil',
    diffColor: 'bg-emerald-500',
    distance: '5km',
    duration: '2-3h',
    description: 'Único monumento militar do Paraná, construído em 1767 por ordem de Portugal. História viva da colonização brasileira.',
  },
  {
    icon: <Camera size={32} className="text-rose-400" />,
    name: 'Istmo da Ilha',
    difficulty: 'Fácil',
    diffColor: 'bg-emerald-500',
    distance: '3km',
    duration: '1h',
    description: 'Faixa de areia estreitíssima separando baía e oceano. Foto obrigatória da Ilha do Mel — o frame mais instagramável da ilha.',
  },
  {
    icon: <Fish size={32} className="text-cyan-400" />,
    name: 'Mergulho em Encantadas',
    difficulty: 'Fácil',
    diffColor: 'bg-emerald-500',
    distance: 'Em frente',
    duration: '1-3h',
    description: 'Águas rasas e cristalinas com peixes tropicais. A Pontinha tem pedras onde crianças também podem explorar.',
  },
  {
    icon: <Waves size={32} className="text-blue-400" />,
    name: 'Ver os Golfinhos',
    difficulty: 'Fácil',
    diffColor: 'bg-emerald-500',
    distance: 'Da pousada',
    duration: 'Manhã',
    description: 'Golfinhos nariz-de-garrafa frequentam as águas de Encantadas regularmente — vistos da piscina da pousada!',
  },
];

const otherPousadas = [
  { name: 'Praia do Farol', emoji: '💑', type: 'Casal', desc: 'Tranquila e aconchegante no Farol das Conchas, ótima para casais.', tags: ['Vista para o mar', 'Trilhas próximas'], price: '$$' },
  { name: 'Astral da Ilha', emoji: '🎒', type: 'Mochileiro', desc: 'Opção econômica e animada, com área social e boa localização.', tags: ['Café da manhã', 'Social'], price: '$' },
  { name: 'Casa da Ilha do Mel', emoji: '👨‍👩‍👧', type: 'Família', desc: 'Espaçosa e bem estruturada para grupos e famílias maiores.', tags: ['Espaçosa', 'Famílias'], price: '$$' },
  { name: 'Marimar', emoji: '💑', type: 'Casal', desc: 'Estrutura charmosa com vista privilegiada para o mar aberto.', tags: ['Beira-Mar', 'Romântica'], price: '$$$' },
  { name: 'Malie Chalés', emoji: '💑', type: 'Casal', desc: 'Chalés privativos com clima intimista e natureza ao redor.', tags: ['Privacidade', 'Chalés'], price: '$$$' },
  { name: 'Ilha do Mel Lodges', emoji: '🎒', type: 'Aventura', desc: 'Ideal para quem quer aventura com conforto em meio à natureza.', tags: ['Trilhas', 'Natureza'], price: '$$' },
];

const compareRows = [
  { pousada: 'Coração da Ilha', beira: true, piscina: true, casal: true, familia: true, preco: 'R$ 350–600', highlight: true },
  { pousada: 'Praia do Farol', beira: true, piscina: false, casal: true, familia: false, preco: 'R$ 250–450', highlight: false },
  { pousada: 'Astral da Ilha', beira: false, piscina: false, casal: false, familia: true, preco: 'R$ 150–280', highlight: false },
  { pousada: 'Casa da Ilha', beira: false, piscina: false, casal: false, familia: true, preco: 'R$ 200–350', highlight: false },
  { pousada: 'Marimar', beira: true, piscina: false, casal: true, familia: false, preco: 'R$ 300–500', highlight: false },
  { pousada: 'Malie Chalés', beira: false, piscina: false, casal: true, familia: false, preco: 'R$ 280–480', highlight: false },
];

const timelineSteps = [
  { icon: '🏖️', label: 'Check-in 14h', sub: 'Bem-vindo ao paraíso' },
  { icon: '☕', label: 'Café da Manhã', sub: 'Frutas regionais' },
  { icon: '🏊', label: 'Piscina Beira-Mar', sub: 'A única da ilha' },
  { icon: '🥾', label: 'Trilha', sub: 'Explorar Encantadas' },
  { icon: '🌅', label: 'Pôr do Sol', sub: 'Encantadas' },
  { icon: '🍽️', label: 'Jantar', sub: 'Frutos do mar' },
  { icon: '🌊', label: 'Ouvir o Mar', sub: 'Descanso total' },
  { icon: '🔁', label: 'Repeat', sub: '…e mais 2 noites' },
];

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${open ? 'border-ocean/40 bg-ocean/5' : 'border-white/10 bg-white/3 hover:border-white/20'}`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-5 gap-4">
        <span className="font-bold text-white text-sm md:text-base">{q}</span>
        {open ? <ChevronUp size={18} className="text-ocean flex-shrink-0" /> : <ChevronDown size={18} className="text-white/40 flex-shrink-0" />}
      </div>
      {open && (
        <div className="px-6 pb-5 text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-4">
          {a}
        </div>
      )}
    </div>
  );
};

const Counter: React.FC<{ end: number; suffix: string; label: string }> = ({ end, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = Math.ceil(end / 40);
        const timer = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timer); }
          else setCount(start);
        }, 40);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-ocean mb-1">{count}{suffix}</div>
      <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">{label}</div>
    </div>
  );
};

const GuiaIlha: React.FC<GuiaIlhaProps> = ({ onNavigate }) => {
  return (
    <main className="bg-deep-navy text-white min-h-screen">

      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/acomodacao-1.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/60 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 pt-32">
          <div className="inline-flex items-center gap-2 bg-ocean/20 border border-ocean/30 text-ocean text-xs font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
            <MapPin size={12} /> Ilha do Mel, Paraná
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
            Guia Completo<br />
            <span className="text-ocean">Ilha do Mel</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Tudo que você precisa saber para aproveitar o paraíso ao máximo — atrações, dicas, como chegar e onde ficar.
          </p>
        </div>
      </section>

      <section className="py-16 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={20} suffix="+" label="Anos de História" />
            <Counter end={7} suffix="" label="Casais por Vez" />
            <Counter end={500} suffix="+" label="Avaliações 5 Estrelas" />
            <Counter end={9} suffix="" label="Acomodações" />
          </div>
        </div>
      </section>

      <SobreIlha />
      <MapaInterativo />
      <PousadaDestaque />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <span className="text-ocean text-xs font-black uppercase tracking-[0.3em]">Depoimento</span>
            <h2 className="text-3xl md:text-4xl font-black mt-4 mb-2">O que dizem nossos hóspedes</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative">
            <div className="text-ocean text-7xl font-black leading-none absolute top-6 left-10 opacity-30 select-none">"</div>
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" className="text-amber-400" />)}
            </div>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed italic mb-8">
              Gostei de tudo nesta pousada. Uma vista incrível do pôr do sol, local muito tranquilo, piscina, bar e lazer. O proprietário foi muito prestativo e o café da manhã estava incrível, com frutas típicas da região.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-ocean/20 border border-ocean/30 flex items-center justify-center">
                <Star size={20} className="text-ocean" />
              </div>
              <div>
                <div className="font-bold text-white">Hóspede Verificado</div>
                <div className="text-xs text-gray-400">Ilha do Mel, Paraná</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/2 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-ocean text-xs font-black uppercase tracking-[0.3em]">Um dia típico</span>
            <h2 className="text-3xl md:text-4xl font-black mt-4">Sua Experiência na Ilha</h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-ocean/20 z-0 mx-20" />
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 overflow-x-auto pb-4 relative z-10">
              {timelineSteps.map((step, i) => (
                <div key={i} className="flex md:flex-col items-center md:items-center gap-4 md:gap-0 md:flex-1 md:text-center px-4 group">
                  <div className="w-16 h-16 rounded-full bg-deep-navy border-2 border-ocean/30 group-hover:border-ocean flex items-center justify-center text-2xl transition-all duration-300 flex-shrink-0 shadow-[0_0_20px_rgba(0,150,200,0.15)]">
                    {step.icon}
                  </div>
                  <div className="md:mt-4">
                    <div className="font-black text-white text-sm">{step.label}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{step.sub}</div>
                  </div>
                  {i < timelineSteps.length - 1 && (
                    <div className="md:hidden w-6 h-0.5 bg-ocean/30 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <a
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Ol%C3%A1!%20Vim%20pelo%20Guia%20da%20Ilha%20do%20Mel%20e%20gostaria%20de%20fazer%20uma%20reserva.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-black px-8 py-4 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.6)] hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Reservar pelo WhatsApp
            </a>
            <a
              href="https://www.instagram.com/coracaodailha/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              <Instagram size={20} />
              Ver no Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-ocean text-xs font-black uppercase tracking-[0.3em]">Atrações</span>
            <h2 className="text-3xl md:text-4xl font-black mt-4">O Que Fazer na Ilha do Mel</h2>
            <p className="text-gray-400 mt-3 max-w-lg mx-auto">Do aventureiro ao relaxante — a ilha tem para todos os perfis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((a, i) => (
              <div
                key={i}
                className="group bg-white/4 border border-white/8 rounded-3xl p-7 hover:border-ocean/30 hover:bg-white/7 transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {a.icon}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-wider text-white px-3 py-1 rounded-full ${a.diffColor}`}>
                    {a.difficulty}
                  </span>
                </div>
                <h3 className="font-black text-lg text-white mb-3">{a.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{a.description}</p>
                <div className="flex gap-3 flex-wrap">
                  <span className="flex items-center gap-1.5 text-[11px] text-gray-300 bg-white/5 rounded-full px-3 py-1.5 font-bold">
                    <MapPin size={11} className="text-ocean" /> {a.distance} da pousada
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-gray-300 bg-white/5 rounded-full px-3 py-1.5 font-bold">
                    <Clock size={11} className="text-amber-400" /> {a.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/2 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-ocean text-xs font-black uppercase tracking-[0.3em]">Comparativo</span>
            <h2 className="text-3xl md:text-4xl font-black mt-4">Conheça as Melhores Pousadas da Ilha do Mel</h2>
            <p className="text-gray-400 mt-3 max-w-lg mx-auto">Explore as opções e descubra qual combina com seu estilo de viagem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {otherPousadas.map((p, i) => (
              <div key={i} className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xl mr-2">{p.emoji}</span>
                    <span className="font-black text-white">{p.name}</span>
                  </div>
                  <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full font-bold">{p.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map((t, j) => (
                    <span key={j} className="text-[10px] text-ocean border border-ocean/30 px-2.5 py-1 rounded-full font-bold">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-gray-400">
                  <th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs">Pousada</th>
                  <th className="px-5 py-4 font-black uppercase tracking-wider text-xs text-center">Beira-Mar</th>
                  <th className="px-5 py-4 font-black uppercase tracking-wider text-xs text-center">Piscina</th>
                  <th className="px-5 py-4 font-black uppercase tracking-wider text-xs text-center">Casal</th>
                  <th className="px-5 py-4 font-black uppercase tracking-wider text-xs text-center">Família</th>
                  <th className="px-5 py-4 font-black uppercase tracking-wider text-xs text-center">Preço Médio</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r, i) => (
                  <tr
                    key={i}
                    className={`border-t border-white/5 transition-colors ${r.highlight ? 'bg-ocean/10 border-ocean/20' : 'hover:bg-white/3'}`}
                  >
                    <td className="px-5 py-4 font-bold">
                      {r.highlight ? (
                        <span className="text-ocean flex items-center gap-2">{r.pousada} <span className="text-[10px] bg-ocean/20 text-ocean px-2 py-0.5 rounded-full font-black uppercase">Você está aqui</span></span>
                      ) : r.pousada}
                    </td>
                    {[r.beira, r.piscina, r.casal, r.familia].map((v, j) => (
                      <td key={j} className="px-5 py-4 text-center text-lg">{v ? '✅' : '—'}</td>
                    ))}
                    <td className="px-5 py-4 text-center font-bold text-gray-300">{r.preco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-ocean text-xs font-black uppercase tracking-[0.3em]">Logística</span>
            <h2 className="text-3xl md:text-4xl font-black mt-4">Como Chegar + Dicas de Viagem</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white/4 border border-white/10 rounded-3xl p-8">
              <h3 className="font-black text-xl text-white mb-8 flex items-center gap-3">
                <Sailboat size={22} className="text-ocean" /> Como Chegar
              </h3>
              <ol className="space-y-6">
                {[
                  { icon: <Car size={18} />, text: 'Dirija até Pontal do Sul (~115km de Curitiba pela PR-407)' },
                  { icon: <Sailboat size={18} />, text: 'Embarque no barco para Encantadas (20 min de travessia)' },
                  { icon: <Footprints size={18} />, text: 'Caminhe ~500m pela praia até a pousada' },
                  { icon: <Sun size={18} />, text: 'Chegou ao paraíso!' },
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-full bg-ocean/20 border border-ocean/30 flex items-center justify-center text-ocean flex-shrink-0 font-black text-sm">
                      {i + 1}
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <span className="text-ocean">{step.icon}</span>
                      <span className="text-sm leading-relaxed">{step.text}</span>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-300 text-xs leading-relaxed">
                <strong>Obs.:</strong> Não há carros na ilha. Deixe o veículo no estacionamento de Pontal do Sul.
              </div>
            </div>

            <div className="bg-white/4 border border-white/10 rounded-3xl p-8">
              <h3 className="font-black text-xl text-white mb-8 flex items-center gap-3">
                <Lightbulb size={22} className="text-amber-400" /> Dicas Práticas
              </h3>
              <ul className="space-y-5">
                {[
                  { icon: <Calendar size={16} className="text-ocean" />, label: 'Melhor época', value: 'Dezembro a março (verão); novembro ou abril para menor movimento' },
                  { icon: <ShieldPlus size={16} className="text-emerald-400" />, label: 'O que levar', value: 'Repelente, protetor solar, tênis para trilha, roupas leves' },
                  { icon: <Moon size={16} className="text-blue-400" />, label: 'Estadia ideal', value: 'Mínimo 3 noites para aproveitar tudo com calma' },
                  { icon: <DollarSign size={16} className="text-amber-400" />, label: 'Pagamento', value: 'A ilha funciona muito com dinheiro/PIX. Leve!' },
                  { icon: <Wifi size={16} className="text-gray-400" />, label: 'Sinal', value: 'Limitado. Aproveite para desconectar!' },
                  { icon: <ShieldPlus size={16} className="text-rose-400" />, label: 'Saúde', value: 'Leve seu kit básico de medicamentos' },
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {tip.icon}
                    </div>
                    <div>
                      <div className="text-xs font-black text-gray-400 uppercase tracking-wider mb-0.5">{tip.label}</div>
                      <div className="text-gray-200 text-sm leading-relaxed">{tip.value}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/2 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-ocean text-xs font-black uppercase tracking-[0.3em]">Dúvidas</span>
            <h2 className="text-3xl md:text-4xl font-black mt-4">Perguntas Frequentes</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean/20 via-deep-navy to-deep-navy" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Pronto para Vivenciar<br />
            <span className="text-ocean">a Ilha do Mel?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-4">Vagas limitadas — apenas 7 casais por vez</p>

          <div className="max-w-lg mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-2">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-ocean/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-2">Pessoas</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-ocean/50 transition-colors">
                  <option value="2">2 pessoas</option>
                  <option value="3">3 pessoas</option>
                  <option value="4">4 pessoas</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-2">Check-in</label>
                <input
                  type="date"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-ocean/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-2">Check-out</label>
                <input
                  type="date"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-ocean/50 transition-colors"
                />
              </div>
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Pousada%20Cora%C3%A7%C3%A3o%20da%20Ilha.`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-black py-4 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.6)]"
            >
              <MessageCircle size={20} />
              Confirmar pelo WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2"><MessageCircle size={14} className="text-emerald-400" /> (41) 99900-4808</span>
            <span className="flex items-center gap-2"><Instagram size={14} className="text-pink-400" /> @coracaodailha</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-ocean" /> Praia de Encantadas, Ilha do Mel – PR</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {['Turismo Ecológico', 'Reserva Ambiental', 'Mais de 20 anos'].map((badge, i) => (
              <span key={i} className="text-[10px] font-black uppercase tracking-widest text-ocean border border-ocean/30 px-4 py-2 rounded-full bg-ocean/5">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GuiaIlha;
