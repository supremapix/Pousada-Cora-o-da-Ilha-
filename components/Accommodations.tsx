import React from 'react';
import { ACCOMMODATIONS, BOOKING_LINK, WHATSAPP_NUMBER } from '../constants';
import { Users, ExternalLink, MessageCircle } from 'lucide-react';

const Accommodations: React.FC = () => {
  return (
    <section id="acomodacoes" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-lime-700 font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">
            Conforto & Charme Tropical
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
            Nossas Acomodações
          </h2>
          <div className="h-1 w-24 bg-lime mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Cada quarto foi preparado com carinho, unindo a rusticidade da ilha com o conforto que você merece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {ACCOMMODATIONS.map((room) => (
            <div key={room.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
              
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent opacity-60"></div>
                
                {/* Capacity Badge */}
                <div className="absolute top-4 right-4 bg-deep-navy/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-lime shadow-lg flex items-center gap-1.5 border border-lime/20">
                  <Users size={14} className="text-lime" />
                  {room.capacity}
                </div>

                {/* Name on Image */}
                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="text-2xl font-serif font-bold shadow-black drop-shadow-lg">
                    {room.name}
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                  {room.description}
                </p>
                
                {/* Features Tags */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {room.features.slice(0, 4).map((feature, idx) => (
                      <span key={idx} className="text-[11px] uppercase tracking-wide bg-lime/10 text-deep-navy px-3 py-1.5 rounded-lg border border-lime/30 font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="mt-auto space-y-3">
                  <a 
                    href={BOOKING_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-lime hover:bg-lime-500 text-deep-navy font-bold py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg group/btn"
                  >
                    <span>Reservar Online</span>
                    <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  
                  <a 
                    href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Olá! Gostaria de saber mais sobre a acomodação: ${room.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-transparent border-2 border-deep-navy text-deep-navy hover:bg-deep-navy/5 font-semibold py-3.5 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Dúvidas no WhatsApp</span>
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-deep-navy font-bold hover:text-lime-700 transition-colors border-b-2 border-lime pb-1"
          >
            Ver disponibilidade de todos os quartos no motor de reservas
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;