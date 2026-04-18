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

  const isHome = currentPage === '/';

  useEffect(() => {
    setIsScrolled(window.scrollY > 50);
    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMoreOpen(false);
  }, [currentPage]);

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
        isScrolled
          ? 'bg-deep-navy/95 backdrop-blur-md shadow-2xl py-2'
          : isHome
            ? 'bg-transparent py-6'
            : 'bg-deep-navy/90 backdrop-blur-md py-2'
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
              className="font-black tracking-widest text-xs uppercase text-white hover:text-lime transition-all duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNav(guiaLink.href)}
            className={`font-black tracking-widest text-xs uppercase px-4 py-1.5 rounded-full border transition-all duration-300 ${
              currentPage === guiaLink.href
                ? 'bg-ocean text-white border-ocean'
                : 'text-white border-white/60 hover:bg-white/10 hover:border-white'
            }`}
          >
            {guiaLink.name}
          </button>

          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className="font-black tracking-widest text-xs uppercase text-white hover:text-lime transition-all duration-300 flex items-center gap-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
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
          className="md:hidden text-white bg-deep-navy/70 backdrop-blur-sm p-2 rounded-lg focus:outline-none transition-transform active:scale-90 border border-white/20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0a1628] border-t border-white/10 transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[90vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col py-4 px-4 space-y-1">
          <button
            onClick={() => handleNav(guiaLink.href)}
            className={`text-left px-5 py-4 font-black text-sm tracking-wider rounded-xl transition-colors mb-1 ${
              currentPage === guiaLink.href
                ? 'text-white bg-[#1A6B5A]'
                : 'text-[#E8C96B] bg-[#1A6B5A]/15 hover:bg-[#1A6B5A]/30'
            }`}
          >
            Guia da Ilha do Mel
          </button>

          <div className="border-b border-white/10 pb-2 mb-2">
            {mainLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.href)}
                className={`w-full text-left px-5 py-3.5 font-bold text-sm tracking-wide rounded-lg transition-colors ${
                  currentPage === link.href
                    ? 'text-[#57ff14] bg-white/10'
                    : 'text-white hover:bg-white/8 hover:text-[#57ff14]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="border-b border-white/10 pb-2 mb-2">
            {moreLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.href)}
                className={`w-full text-left px-5 py-3 font-semibold text-sm rounded-lg transition-colors ${
                  currentPage === link.href
                    ? 'text-[#57ff14] bg-white/10'
                    : 'text-gray-300 hover:bg-white/8 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNav(isHome ? '#reservas' : '/#reservas')}
            className="text-left px-5 py-4 font-black text-sm tracking-wider text-[#0a1628] bg-[#57ff14] rounded-xl hover:bg-white transition-colors"
          >
            Reservas
          </button>

          <div className="p-5 bg-white/5 border border-white/10 rounded-xl mt-2 flex flex-col gap-2">
            <span className="text-[10px] text-gray-400 uppercase font-black tracking-[0.2em]">Contato Imediato</span>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#57ff14] flex-shrink-0" />
              <a href={`tel:${PHONE_NUMBER}`} className="font-black text-base text-white">(41) 3426-9043</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
