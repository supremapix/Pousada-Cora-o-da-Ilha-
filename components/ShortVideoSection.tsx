import React from 'react';
import { Calendar, Star, Waves, Heart, Sparkles } from 'lucide-react';
import { BOOKING_LINK } from '../constants';

const ShortVideoSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-lime/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-deep-navy/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-lime/30 via-deep-navy/20 to-lime/30 rounded-[3rem] blur-2xl opacity-60 animate-pulse"></div>
              
              <div className="relative bg-deep-navy rounded-[2.5rem] p-3 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-deep-navy rounded-b-2xl z-20"></div>
                
                <div className="w-[280px] h-[500px] md:w-[320px] md:h-[568px] rounded-[2rem] overflow-hidden bg-black relative">
                  <iframe
                    src="https://www.youtube.com/embed/1pJBwcBFAxQ"
                    className="absolute inset-0 w-full h-full"
                    title="Tour Virtual Pousada Coração da Ilha"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-lime text-deep-navy py-2 px-4 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-black uppercase tracking-tight">Ao Vivo</span>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-white py-3 px-5 rounded-2xl shadow-xl border border-gray-100 hidden md:flex items-center gap-2">
                <Heart className="text-red-500 fill-red-500 w-5 h-5" />
                <span className="text-deep-navy font-bold text-sm">+2.5k curtidas</span>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-lime/20 border border-lime/40 text-deep-navy font-black tracking-[0.2em] uppercase text-[10px] md:text-xs">
                <Star className="w-4 h-4 fill-lime text-lime" /> Experiência Comprovada
              </span>
              
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-deep-navy leading-tight">
                Não é Sonho, é a <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime to-emerald-600">Ilha do Mel!</span>
              </h2>
              
              <div className="h-1.5 w-24 bg-gradient-to-r from-lime to-emerald-500 rounded-full"></div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Cansado da rotina pesada e do estresse do dia a dia? <span className="text-deep-navy font-semibold">Aperte o play ao lado</span> e sinta a brisa, 
              o som das ondas e a paz que só a Pousada Coração da Ilha pode oferecer. 
              <span className="text-lime font-semibold"> Transforme seu próximo feriado em memórias inesquecíveis.</span>
            </p>

            <div className="bg-gradient-to-r from-deep-navy/5 to-lime/10 p-6 rounded-2xl border border-lime/20">
              <p className="text-deep-navy font-bold text-lg mb-4">
                <Waves className="inline w-5 h-5 text-lime mr-2" />
                Reserve agora e garanta:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-lime shrink-0" />
                  <span>Café da manhã artesanal com vista para o mar</span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-lime shrink-0" />
                  <span>Localização privilegiada a 100m de tudo</span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-lime shrink-0" />
                  <span>Atendimento personalizado e exclusivo</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-lime to-emerald-500 hover:from-emerald-500 hover:to-lime text-deep-navy font-black py-5 px-10 rounded-full transition-all duration-500 shadow-[0_10px_40px_rgba(57,255,20,0.4)] hover:shadow-[0_15px_50px_rgba(57,255,20,0.5)] transform hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <Calendar className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10 text-lg">Quero Reservar Agora!</span>
                <Sparkles className="w-5 h-5 relative z-10 animate-pulse" />
              </a>
              
              <a 
                href="#acomodacoes" 
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-deep-navy text-deep-navy hover:text-white font-bold py-5 px-8 rounded-full border-2 border-deep-navy transition-all duration-300"
              >
                Conhecer Suítes
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShortVideoSection;
