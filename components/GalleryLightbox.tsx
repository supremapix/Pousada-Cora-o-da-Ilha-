import React, { useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryLightboxProps {
  images: string[];
  alts: string[];
  roomName: string;
  roomDescription: string;
  initialIndex: number;
  onClose: () => void;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  images,
  alts,
  roomName,
  roomDescription,
  initialIndex,
  onClose,
}) => {
  const [current, setCurrent] = React.useState(Math.max(0, Math.min(initialIndex, images.length - 1)));
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const siblings = Array.from(document.body.children).filter(
      (element): element is HTMLElement => element instanceof HTMLElement && element !== dialogRef.current
    );
    const previousInert = siblings.map(element => element.inert);
    siblings.forEach(element => { element.inert = true; });
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;
      const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button:not([disabled])');
      if (!buttons?.length) return;
      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', trapFocus);
    return () => {
      document.removeEventListener('keydown', trapFocus);
      document.body.style.overflow = previousOverflow;
      siblings.forEach((element, index) => { element.inert = previousInert[index]; });
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (['Escape', 'ArrowLeft', 'ArrowRight'].includes(e.key)) e.preventDefault();
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose, prev, next]);

  useEffect(() => {
    if (images.length < 2) return;

    const adjacentIndexes = [
      (current + 1) % images.length,
      (current - 1 + images.length) % images.length,
    ];

    adjacentIndexes.forEach((index) => {
      const image = new Image();
      image.src = images[index];
    });
  }, [current, images]);

  return createPortal(
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[9999] flex flex-col bg-black/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria de fotos - ${roomName}`}
    >
      <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-white/10 shrink-0">
        <div>
          <h2 className="text-white font-serif text-xl md:text-2xl font-bold leading-tight">
            {roomName}
          </h2>
          <p className="text-white/50 text-xs md:text-sm mt-0.5 max-w-xl line-clamp-1">
            {roomDescription}
          </p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all ml-4 shrink-0"
          aria-label="Fechar galeria"
        >
          <X size={24} />
        </button>
      </header>

      <div className="flex-1 flex items-center justify-center relative min-h-0 px-2 py-4">
        <button
          type="button"
          disabled={images.length < 2}
          onClick={prev}
          className="absolute left-2 md:left-6 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 md:p-3 transition-all border border-white/10"
          aria-label="Foto anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <figure className="flex flex-col items-center h-full max-h-full w-full max-w-5xl mx-auto px-12 md:px-20">
          <img
            key={current}
            src={images[current]}
            alt={alts[current] ?? `${roomName} - foto ${current + 1} de ${images.length} - Pousada Coração da Ilha, Ilha do Mel, Paraná`}
            decoding="async"
            fetchPriority="high"
            className="max-h-full max-w-full object-contain rounded-xl shadow-2xl animate-fade-in"
            style={{ maxHeight: 'calc(100vh - 220px)' }}
          />
          {alts[current] && (
            <figcaption className="text-white/40 text-xs mt-3 text-center max-w-lg px-4 line-clamp-2">
              {alts[current]}
            </figcaption>
          )}
        </figure>

        <button
          type="button"
          disabled={images.length < 2}
          onClick={next}
          className="absolute right-2 md:right-6 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 md:p-3 transition-all border border-white/10"
          aria-label="Próxima foto"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="shrink-0 pb-4 px-4">
        <p role="status" aria-live="polite" aria-atomic="true" className="text-white/70 text-xs text-center mb-3">
          {current + 1} de {images.length}
        </p>

        <div
          className="flex gap-2 justify-center overflow-x-auto pb-1 scrollbar-hide"
          role="group"
          aria-label="Miniaturas das fotos"
        >
          {images.map((src, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                idx === current
                  ? 'border-lime-400 opacity-100 scale-105'
                  : 'border-white/20 opacity-50 hover:opacity-80'
              }`}
              aria-label={`Ver foto ${idx + 1}`}
              aria-current={idx === current ? 'true' : undefined}
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default GalleryLightbox;
