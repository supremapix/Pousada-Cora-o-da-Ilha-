import React, { useState } from 'react';
import { ACCOMMODATIONS, BOOKING_LINK, WHATSAPP_NUMBER } from '../constants';
import { Users, ExternalLink, MessageCircle, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import GalleryLightbox from './GalleryLightbox';

interface LightboxState {
  roomIndex: number;
  imageIndex: number;
}

interface RoomImageSliderProps {
  images: string[];
  alts: string[];
  name: string;
  onImageClick: (imageIndex: number) => void;
}

const RoomImageSlider: React.FC<RoomImageSliderProps> = ({ images, alts, name, onImageClick }) => {
  const [current, setCurrent] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <div
      className="relative h-72 overflow-hidden group/slider cursor-zoom-in"
      onClick={() => onImageClick(current)}
      role="button"
      tabIndex={0}
      aria-label={`Abrir galeria completa de ${name}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onImageClick(current); }}
    >
      <img
        src={images[current]}
        alt={alts[current] ?? `${name} - foto ${current + 1} - Pousada Coração da Ilha, Ilha do Mel, Paraná`}
        className="w-full h-full object-cover transform group-hover/slider:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent opacity-60" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
        <div className="bg-black/50 backdrop-blur-sm rounded-full p-3 border border-white/30">
          <ZoomIn size={22} className="text-white" />
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-deep-navy/70 hover:bg-lime text-white hover:text-deep-navy rounded-full p-1.5 transition-all opacity-0 group-hover/slider:opacity-100 z-20"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-deep-navy/70 hover:bg-lime text-white hover:text-deep-navy rounded-full p-1.5 transition-all opacity-0 group-hover/slider:opacity-100 z-20"
            aria-label="Próxima foto"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-14 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
                className={`w-1.5 h-1.5 rounded-full transition-all pointer-events-auto ${idx === current ? 'bg-lime w-4' : 'bg-white/60'}`}
                aria-label={`Foto ${idx + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-4 left-4 bg-deep-navy/80 backdrop-blur-sm text-lime text-[10px] font-bold px-2 py-1 rounded-full z-10 pointer-events-none">
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

const Accommodations: React.FC = () => {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = (roomIndex: number, imageIndex: number) => {
    setLightbox({ roomIndex, imageIndex });
  };

  const closeLightbox = () => setLightbox(null);

  const activeLightboxRoom = lightbox !== null ? ACCOMMODATIONS[lightbox.roomIndex] : null;
  const activeLightboxImages = activeLightboxRoom?.images && activeLightboxRoom.images.length > 0
    ? activeLightboxRoom.images
    : activeLightboxRoom ? [activeLightboxRoom.image] : [];
  const activeLightboxAlts = activeLightboxRoom?.imageAlts ?? [];

  return (
    <>
      <section id="acomodacoes" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-lime-700 font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">
              Conforto & Charme Tropical
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mb-6">
              Nossas Acomodações
            </h2>
            <div className="h-1 w-24 bg-lime mx-auto rounded-full mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Cada quarto foi preparado com carinho, unindo a rusticidade da ilha com o conforto que você merece.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {ACCOMMODATIONS.map((room, roomIndex) => {
              const allImages = room.images && room.images.length > 0 ? room.images : [room.image];
              const allAlts = room.imageAlts ?? [];
              return (
                <article
                  key={room.id}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
                  aria-label={`Acomodação: ${room.name} - ${room.capacity} - Pousada Coração da Ilha, Ilha do Mel`}
                >
                  <div className="relative">
                    <RoomImageSlider
                      images={allImages}
                      alts={allAlts}
                      name={room.name}
                      onImageClick={(imageIndex) => openLightbox(roomIndex, imageIndex)}
                    />

                    <div className="absolute top-4 right-4 bg-deep-navy/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-lime shadow-lg flex items-center gap-1.5 border border-lime/20 z-10">
                      <Users size={14} className="text-lime" />
                      {room.capacity}
                    </div>

                    <div className="absolute bottom-4 left-6 text-white z-10">
                      <h3 className="text-2xl font-serif font-bold shadow-black drop-shadow-lg">
                        {room.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex-grow flex flex-col">
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                      {room.description}
                    </p>

                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {room.features.slice(0, 4).map((feature, idx) => (
                          <span key={idx} className="text-[11px] uppercase tracking-wide bg-lime/10 text-deep-navy px-3 py-1.5 rounded-lg border border-lime/30 font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

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
                </article>
              );
            })}
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

      {lightbox !== null && activeLightboxRoom && (
        <GalleryLightbox
          images={activeLightboxImages}
          alts={activeLightboxAlts}
          roomName={activeLightboxRoom.name}
          roomDescription={activeLightboxRoom.description}
          initialIndex={lightbox.imageIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
};

export default Accommodations;
