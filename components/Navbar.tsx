import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';
import { navigate } from '../utils/navigate';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentPage === '/';

  const mainLinks = [
    { name: 'A Pousada', href: isHome ? '#sobre' : '/#sobre' },
    { name: 'Ilha do Mel', href: isHome ? '#experiencia' : '/#experiencia' },
    { name: 'Acomodações', href: isHome ? '#acomodacoes' : '/#acomodacoes' },
    { name: 'Políticas', href: isHome ? '#politicas' : '/#politicas' },
  ];

  const guiaLink = { name: 'Guia da Ilha', href: '/guia-ilha-do-mel' };

  const moreLinks = [
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Contato', href: '/contato' },
    { name: 'Política de Privacidade', href: '/politica-privacidade' },
    { name: 'Política de Cancelamento', href: '/politica-devolucao' },
    { name: 'Mapa do Site', href: '/mapa-do-site' },
  ];

  const handleNav = (href: string) => {
    setIsMobileMenuOpen(false);
    setMoreOpen(false);
    navigate(href, onNavigate);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-deep-navy/95 backdrop-blur-md shadow-2xl py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button
          onClick={() => handleNav('/')}
          className="flex items-center gap-2 group transition-transform hover:scale-105"
          aria-label="Ir para a página inicial"
        >
          <img
            src="/images/logo.png"
            alt="Pousada Coração da Ilha — Ilha do Mel, Paraná"
            className={`transition-all duration-300 object-contain drop-shadow-[0_2px_10px_rgba(57,255,20,0.4)] ${isScrolled ? 'h-14 md:h-16' : 'h-20 md:h-24'}`}
          />
        </button>

        <div className="hidden md:flex items-center gap-6">
          {mainLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNav(link.href)}
              className="font-black tracking-widest text-xs uppercase text-white hover:text-lime transition-all duration-300"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNav(guiaLink.href)}
            className={`font-black tracking-widest text-xs uppercase px-4 py-1.5 rounded-full border transition-all duration-300 ${
              currentPage === guiaLink.href
                ? 'bg-ocean text-white border-ocean'
                : 'text-ocean border-ocean/50 hover:bg-ocean hover:text-white hover:border-ocean'
            }`}
          >
            {guiaLink.name}
          </button>

          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className="font-black tracking-widest text-xs uppercase text-white hover:text-lime transition-all duration-300 flex items-center gap-1"
            >
              Mais <ChevronDown size={14} className={`transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
            </button>
            {moreOpen && (
              <div className="absolute top-full right-0 mt-3 bg-deep-navy/98 backdrop-blur-xl border border-lime/10 rounded-2xl py-2 min-w-[220px] shadow-2xl">
                {moreLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNav(link.href)}
                    className={`w-full text-left px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/5 hover:text-lime ${
                      currentPage === link.href ? 'text-lime' : 'text-gray-300'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav(isHome ? '#reservas' : '/#reservas')}
            className="font-black tracking-widest text-xs uppercase bg-lime hover:bg-white text-deep-navy px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(57,255,20,0.4)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)] transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Reservas
          </button>
        </div>

        <button
          className="md:hidden text-lime p-2 focus:outline-none transition-transform active:scale-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-deep-navy/98 backdrop-blur-xl border-t border-lime/10 transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[90vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col py-6 px-6 space-y-1">
          <button
            onClick={() => handleNav(guiaLink.href)}
            className={`text-left px-6 py-4 font-black text-base tracking-wider border rounded-xl transition-colors mb-1 ${
              currentPage === guiaLink.href ? 'text-white bg-ocean border-ocean' : 'text-ocean border-ocean/40 bg-ocean/10 hover:bg-ocean/20'
            }`}
          >
            Guia da Ilha do Mel
          </button>
          {[...mainLinks, ...moreLinks].map((link) => (
            <button
              key={link.name}
              onClick={() => handleNav(link.href)}
              className={`text-left px-6 py-4 font-black text-base tracking-wider border-b border-white/5 last:border-0 rounded-xl transition-colors ${
                currentPage === link.href ? 'text-lime bg-lime/10' : 'text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNav(isHome ? '#reservas' : '/#reservas')}
            className="text-left px-6 py-4 font-black text-base tracking-wider text-lime bg-lime/10 rounded-xl"
          >
            Reservas
          </button>
          <div className="p-6 bg-lime/5 rounded-2xl mt-4 flex flex-col gap-2">
            <span className="text-[10px] text-lime/60 uppercase font-black tracking-[0.2em]">Contato Imediato</span>
            <div className="flex items-center gap-3 text-white">
              <Phone size={20} className="text-lime" />
              <a href={`tel:${PHONE_NUMBER}`} className="font-black text-lg">(41) 3426-9043</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
