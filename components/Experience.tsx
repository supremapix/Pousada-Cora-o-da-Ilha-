
import React from 'react';
import { Map, Camera, Compass, Anchor } from 'lucide-react';

const Experience: React.FC = () => {
  const attractions = [
    {
      title: "Gruta das Encantadas",
      desc: "A apenas 15 minutos da pousada, este patrimônio natural é envolto em lendas e belezas cênicas impressionantes.",
      icon: <Camera size={24} />
    },
    {
      title: "Farol das Conchas",
      desc: "Um dos cartões postais da ilha, oferecendo a vista panorâmica mais incrível de todas as praias.",
      icon: <Compass size={24} />
    },
    {
      title: "Fortaleza Nossa Sra. dos Prazeres",
      desc: "História viva datada de 1767, localizada na beira da Praia da Fortaleza com canhões originais.",
      icon: <Anchor size={24} />
    },
    {
      title: "Trilhas e Natureza",
      desc: "Explore a ilha a pé ou de bicicleta. Aqui não circulam carros, apenas paz e ar puro.",
      icon: <Map size={24} />
    }
  ];

  return (
    <section id="experiencia" className="py-24 bg-deep-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-lime/5 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 space-y-6">
            <span className="text-lime font-black tracking-widest uppercase text-sm">O Coração de Encantadas</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              A Magia da Ilha do Mel <br /> Começa Aqui.
            </h2>
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              A Ilha do Mel é um santuário ecológico preservado onde o tempo parece passar mais devagar. Localizada na Praia de Encantadas, nossa pousada coloca você no centro de tudo, mantendo a privacidade de um refúgio exclusivo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              {attractions.map((item, idx) => (
                <div key={idx} className="space-y-3 group">
                  <div className="text-lime group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="/images/hospedagem/hospedagem-4.jpg" 
              alt="Gruta das Encantadas - Ilha do Mel" 
              className="rounded-2xl w-full h-64 object-cover shadow-2xl border-2 border-white/10"
            />
            <img 
              src="/images/hospedagem/hospedagem-5.jpg" 
              alt="Caminho para o Farol" 
              className="rounded-2xl w-full h-64 object-cover mt-8 shadow-2xl border-2 border-white/10"
            />
            <img 
              src="/images/hospedagem/hospedagem-6.jpg" 
              alt="Fortaleza de Nossa Senhora dos Prazeres" 
              className="rounded-2xl w-full h-64 object-cover shadow-2xl border-2 border-white/10"
            />
            <img 
              src="/images/hospedagem/hospedagem-7.jpg" 
              alt="Vista Mar de Dentro" 
              className="rounded-2xl w-full h-64 object-cover mt-8 shadow-2xl border-2 border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
