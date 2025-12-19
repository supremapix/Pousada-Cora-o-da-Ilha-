
import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { HERO_IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const subtitles = [
    "Conforto, natureza e momentos inesquecíveis",
    "Acorde com o som do mar na Praia de Encantadas",
    "Onde os golfinhos dão as boas-vindas ao seu dia"
  ];
  
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    const subtitleInterval = setInterval(() => {
      setCurrentSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 4500);

    return () => {
      clearInterval(imageInterval);
      clearInterval(subtitleInterval);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-deep-navy">
      {/* Imagens em Loop Otimizadas */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={img}
              alt={`Pousada Coração da Ilha - Vista ${index + 1}`}
              className={`w-full h-full object-cover transform transition-transform duration-[8000ms] ease-linear ${
                index === currentImageIndex ? 'scale-105' : 'scale-100'
              }`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="absolute inset-0 bg-deep-navy/40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/60 via-transparent to-deep-navy/90"></div>
          </div>
        ))}
      </div>

      <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto flex flex-col items-center justify-center h-full pt-20">
        <div className="animate-fade-in-up space-y-10">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-lime/20 border border-lime/30 text-lime font-black tracking-[0.2em] uppercase backdrop-blur-md shadow-2xl animate-pulse text-[10px] md:text-xs">
              <Sparkles size={14} className="animate-spin-slow" /> Seu Refúgio de Luxo Tropical
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)] leading-tight tracking-tight">
            A essência da <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime via-white to-lime/80 italic">
              Ilha do Mel
            </span>
          </h1>

          <div className="h-20 flex items-center justify-center overflow-hidden">
             <p 
               key={currentSubtitleIndex}
               className="text-xl md:text-3xl font-light text-gray-100 tracking-wide animate-fade-in max-w-3xl px-4 drop-shadow-lg"
             >
               {subtitles[currentSubtitleIndex]}
             </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a 
              href="#reservas" 
              className="group bg-lime hover:bg-white text-deep-navy text-lg font-black py-5 px-12 rounded-full transition-all duration-500 transform hover:-translate-y-2 shadow-[0_15px_40px_rgba(57,255,20,0.4)] flex items-center gap-4 w-full sm:w-auto justify-center"
            >
              <span>RESERVAR AGORA</span>
              <Calendar className="w-6 h-6 group-hover:scale-125 transition-transform" />
            </a>
            
            <a 
              href="#acomodacoes" 
              className="group bg-white/10 hover:bg-white/20 text-white text-lg border-2 border-white/20 hover:border-lime font-bold py-5 px-12 rounded-full transition-all duration-500 backdrop-blur-xl flex items-center gap-4 w-full sm:w-auto justify-center"
            >
              <span>VER SUÍTES</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-lime animate-pulse">Explorar</span>
        <div className="w-px h-16 bg-gradient-to-b from-lime to-transparent"></div>
        <a 
          href="#sobre" 
          aria-label="Rolar para baixo" 
          className="text-white/40 hover:text-lime transition-all duration-300 transform hover:scale-110"
        >
          <ChevronDown className="w-10 h-10 animate-bounce" />
        </a>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; filter: blur(4px); }
          to { opacity: 1; filter: blur(0); }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
