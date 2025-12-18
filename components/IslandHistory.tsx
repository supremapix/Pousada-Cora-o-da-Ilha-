
import React from 'react';
import { Shield, Library, Palmtree, Anchor, Landmark, Compass, History } from 'lucide-react';

const IslandHistory: React.FC = () => {
  const historyEras = [
    {
      title: "Legado Indígena",
      period: "Tempo Ancestral",
      desc: "Os índios Carijós chamavam a ilha de 'Y-Melo'. Eles viviam em harmonia com a abundância de mel e peixes. Os sambaquis na região são provas silenciosas desta ocupação milenar.",
      icon: <Palmtree className="text-lime" size={32} />,
      image: "/images/hospedagem/hospedagem-8.jpg"
    },
    {
      title: "Sentinela Colonial",
      period: "Século XVIII",
      desc: "Para proteger o litoral paranaense de invasores, a coroa portuguesa ergueu a Fortaleza de N. Sra. dos Prazeres. Seus canhões de bronze ainda guardam a entrada da baía.",
      icon: <Shield className="text-lime" size={32} />,
      image: "/images/hospedagem/hospedagem-9.jpg"
    },
    {
      title: "Refúgio Ecológico",
      period: "Era Moderna",
      desc: "Em 1975, a ilha foi oficialmente protegida. Hoje, é um Patrimônio da Humanidade pela UNESCO, mantendo 95% de sua mata atlântica original intacta.",
      icon: <Compass className="text-lime" size={32} />,
      image: "/images/hospedagem/hospedagem-10.jpg"
    }
  ];

  return (
    <section id="historia" className="py-24 bg-deep-navy relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/canvas-orange.png')]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-lime/10 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-lime/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-lime font-black tracking-[0.4em] uppercase text-xs mb-4 block animate-pulse">Memória Viva</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Onde o passado <br /><span className="text-lime italic">encontra o mar.</span>
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
            <History className="text-lime" size={40} />
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest max-w-[150px]">
              Uma jornada de milênios em um só lugar.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {historyEras.map((era, idx) => (
            <div 
              key={idx} 
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] overflow-hidden hover:bg-white/10 transition-all duration-700 hover:-translate-y-4"
            >
              <div className="h-72 relative overflow-hidden">
                <img 
                  src={era.image} 
                  alt={era.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-transparent"></div>
                <div className="absolute bottom-6 left-8">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-px bg-lime/50"></span>
                    <span className="text-lime text-[10px] font-black uppercase tracking-widest">
                      {era.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-10 space-y-6">
                <div className="bg-lime/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-lime/20 group-hover:rotate-6 transition-all">
                  {era.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-white tracking-tight">{era.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {era.desc}
                </p>
                
                <div className="pt-4 flex items-center justify-between border-t border-white/5">
                  <div className="flex items-center gap-2 text-lime/50 text-[10px] font-bold uppercase tracking-widest">
                    <Library size={14} />
                    <span>Registro Oficial</span>
                  </div>
                  <Landmark size={18} className="text-white/10" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Heritage Badge */}
        <div className="mt-20 flex flex-col items-center">
          <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-full flex items-center gap-4 backdrop-blur-sm">
             <div className="w-2 h-2 bg-lime rounded-full animate-ping"></div>
             <span className="text-xs text-gray-300 font-bold uppercase tracking-[0.2em]">Patrimônio da Humanidade - UNESCO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IslandHistory;
