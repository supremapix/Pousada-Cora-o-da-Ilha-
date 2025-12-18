
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Rocha",
    text: "Lugar paradisíaco! Ver os golfinhos da janela da suíte no pôr do sol foi a experiência mais incrível da minha vida. A localização é perfeita.",
    stars: 5,
    location: "São Paulo, SP"
  },
  {
    name: "João Pedro Silva",
    text: "O café da manhã é espetacular. Tudo fresquinho e feito com muito carinho. A proximidade com o trapiche facilita demais a logística na ilha.",
    stars: 5,
    location: "Curitiba, PR"
  },
  {
    name: "Beatriz Oliveira",
    text: "Atendimento nota mil. A equipe nos fez sentir em casa. O Chalé Luxo é impecável e super privativo. Perfeito para casais.",
    stars: 5,
    location: "Joinville, SC"
  },
  {
    name: "Carlos Eduardo",
    text: "Melhor custo-benefício da Ilha. Pé na areia de verdade e uma vibe inexplicável. Voltaremos com certeza em todas as temporadas!",
    stars: 5,
    location: "Londrina, PR"
  },
  {
    name: "Fernanda Lima",
    text: "Ficamos na Suíte Top Luxo e superou as expectativas. Cama maravilhosa e o ar condicionado gela muito bem. Limpeza impecável.",
    stars: 5,
    location: "Rio de Janeiro, RJ"
  },
  {
    name: "Ricardo Mendes",
    text: "A pousada tem uma energia única. O deck da piscina com vista para o mar é o melhor lugar para relaxar. Recomendo muito!",
    stars: 5,
    location: "Porto Alegre, RS"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-deep-navy relative overflow-hidden h-[700px]">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10 opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-deep-navy to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center gap-16">
        
        {/* Title Side */}
        <div className="lg:w-1/2 space-y-6 z-20">
          <span className="text-lime font-black tracking-[0.3em] uppercase text-xs flex items-center gap-2">
            <Star size={16} fill="currentColor" /> Experiência Real
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            O que nossos <br />
            <span className="text-lime">hóspedes dizem.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
            A satisfação de quem viveu dias mágicos na Pousada Coração da Ilha é o nosso maior orgulho.
          </p>
          <div className="flex gap-4 items-center pt-4">
             <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-deep-navy bg-gray-300 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="Hóspede" />
                  </div>
                ))}
             </div>
             <span className="text-white/60 text-sm font-medium">Mais de 500+ avaliações 5 estrelas</span>
          </div>
        </div>

        {/* Scrolling List Side */}
        <div className="lg:w-1/2 h-full relative overflow-hidden flex items-center">
          <div className="w-full relative flex flex-col gap-6 animate-vertical-loop">
            {/* Double the list for seamless loop */}
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div 
                key={idx} 
                className="w-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] flex flex-col gap-4 hover:bg-white/10 transition-colors group"
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={14} className="text-lime fill-current" />
                    ))}
                  </div>
                  <Quote className="text-lime/20 group-hover:text-lime/40 transition-colors" size={32} />
                </div>
                
                <p className="text-gray-200 text-lg font-light italic leading-relaxed">
                  "{t.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-2">
                  <div className="w-10 h-10 rounded-full bg-lime/20 flex items-center justify-center text-lime font-bold text-xs uppercase">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider">{t.name}</h4>
                    <span className="text-gray-500 text-xs">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Overlays to smooth transitions top/bottom */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-deep-navy via-deep-navy/40 to-transparent pointer-events-none z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      <style>{`
        @keyframes vertical-loop {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-loop {
          animation: vertical-loop 30s linear infinite;
        }
        .animate-vertical-loop:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
