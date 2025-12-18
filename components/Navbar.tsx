import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'A Pousada', href: '#sobre' },
    { name: 'Ilha do Mel', href: '#experiencia' },
    { name: 'Acomodações', href: '#acomodacoes' },
    { name: 'Políticas', href: '#politicas' },
    { name: 'Reservas', href: '#reservas', isButton: true },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-deep-navy/95 backdrop-blur-md shadow-2xl py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group transition-transform hover:scale-105" aria-label="Ir para o topo">
          <img 
            src="https://coracaodailha.com.br/site/assets/images/pousada-coracao-da-ilha-encantadas-ilha-do-mel-parana-360x371.png" 
            alt="Pousada Coração da Ilha" 
            className={`transition-all duration-300 object-contain drop-shadow-[0_2px_10px_rgba(57,255,20,0.4)] ${isScrolled ? 'h-14 md:h-16' : 'h-20 md:h-24'}`}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-black tracking-widest text-xs uppercase transition-all duration-300 ${
                link.isButton
                  ? 'bg-lime hover:bg-white text-deep-navy px-8 py-3 rounded-full shadow-[0_4px_20px_rgba(57,255,20,0.4)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)] transform hover:-translate-y-0.5'
                  : 'text-white hover:text-lime'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-lime p-2 focus:outline-none transition-transform active:scale-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-deep-navy/98 backdrop-blur-xl border-t border-lime/10 transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col py-8 px-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-6 py-4 font-black text-xl tracking-wider border-b border-white/5 last:border-0 rounded-xl transition-colors ${
                 link.isButton ? 'text-lime bg-lime/10' : 'text-white hover:bg-white/5'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="p-6 bg-lime/5 rounded-2xl mt-6 flex flex-col gap-2">
               <span className="text-[10px] text-lime/60 uppercase font-black tracking-[0.2em]">Contato Imediato</span>
               <div className="flex items-center gap-3 text-white">
                 <Phone size={20} className="text-lime" />
                 <span className="font-black text-lg">(41) 3426-9043</span>
               </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;