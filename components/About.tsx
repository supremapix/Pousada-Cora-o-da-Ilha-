
import React from 'react';
import { Coffee, Waves, Heart, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-lime/10 rounded-3xl -z-10 transition-all group-hover:bg-lime/20"></div>
              <img 
                src="/images/acomodacao-1.jpg" 
                alt="Fachada Pousada Coração da Ilha" 
                className="rounded-3xl shadow-2xl w-full object-cover h-[600px] border-8 border-deep-navy-50"
              />
              <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-deep-navy rounded-3xl p-8 flex flex-col justify-center items-center text-white hidden md:flex shadow-2xl border-4 border-lime/20 transform group-hover:rotate-3 transition-transform">
                <span className="text-5xl font-bold font-serif mb-2 text-lime">10+</span>
                <span className="text-center text-sm font-bold tracking-widest uppercase opacity-80">Anos de Encanto</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-lime-700 font-black tracking-widest uppercase text-sm mb-4 block">Hospedagem com Alma</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-deep-navy leading-tight">
                Sinta o Coração <br /> da Ilha Bater.
              </h2>
              <div className="h-2 w-24 bg-lime mt-6 rounded-full"></div>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              Nossa pousada não é apenas um lugar para dormir, mas sim um lar temporário para quem deseja viver a verdadeira essência da Ilha do Mel. Localizada "pé na areia" na Praia de Encantadas, oferecemos uma experiência sensorial completa: o som das ondas, a brisa constante e a vista privilegiada.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              Destaque absoluto da nossa casa, o **Café da Manhã Tropical** é preparado com frutas frescas da estação, pães artesanais e quitutes locais, servido em um ambiente que convida à contemplação e ao início calmo de um dia de exploração.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-4 bg-deep-navy-50 p-5 rounded-2xl hover:bg-lime/10 transition-all cursor-default">
                <div className="bg-lime p-3 rounded-xl text-deep-navy shadow-lg">
                  <Coffee size={24} />
                </div>
                <div>
                    <span className="block font-black text-deep-navy">Café Colonial</span>
                    <span className="text-xs text-gray-500 uppercase font-bold">Incluso na Diária</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-deep-navy-50 p-5 rounded-2xl hover:bg-lime/10 transition-all cursor-default">
                <div className="bg-lime p-3 rounded-xl text-deep-navy shadow-lg">
                  <Waves size={24} />
                </div>
                <div>
                    <span className="block font-black text-deep-navy">Pé na Areia</span>
                    <span className="text-xs text-gray-500 uppercase font-bold">Praia de Encantadas</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-deep-navy-50 p-5 rounded-2xl hover:bg-lime/10 transition-all cursor-default">
                <div className="bg-lime p-3 rounded-xl text-deep-navy shadow-lg">
                  <Heart size={24} />
                </div>
                <div>
                    <span className="block font-black text-deep-navy">Pet Friendly</span>
                    <span className="text-xs text-gray-500 uppercase font-bold">Consulte Condições</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-deep-navy-50 p-5 rounded-2xl hover:bg-lime/10 transition-all cursor-default">
                <div className="bg-lime p-3 rounded-xl text-deep-navy shadow-lg">
                  <ShieldCheck size={24} />
                </div>
                <div>
                    <span className="block font-black text-deep-navy">Hospitalidade</span>
                    <span className="text-xs text-gray-500 uppercase font-bold">Atendimento Premium</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
