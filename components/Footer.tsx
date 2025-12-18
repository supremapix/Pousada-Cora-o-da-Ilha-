import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-deep-navy text-white pt-24 pb-10 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-5 grayscale"
        style={{ backgroundImage: "url('/images/acomodacao-2.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/90 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & Social */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/images/logo.png" 
              alt="Pousada Coração da Ilha" 
              className="w-48 mb-8 transition-transform hover:scale-105 drop-shadow-[0_5px_15px_rgba(57,255,20,0.3)]"
            />
            <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-xs text-center md:text-left">
              O seu refúgio autêntico na Praia das Encantadas. Viva a Ilha do Mel com a hospitalidade de quem ama este paraíso.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/coracaodailha" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border-2 border-white/10 hover:border-lime flex items-center justify-center transition-all hover:bg-lime hover:text-deep-navy group">
                <Facebook size={22} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://instagram.com/coracaodailha" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border-2 border-white/10 hover:border-lime flex items-center justify-center transition-all hover:bg-lime hover:text-deep-navy group">
                <Instagram size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="text-center md:text-left">
            <h4 className="text-lime text-xs font-black uppercase tracking-[0.3em] mb-8">Navegação</h4>
            <ul className="space-y-4 text-gray-300 font-medium">
              <li><a href="#home" className="hover:text-lime transition-colors">Página Inicial</a></li>
              <li><a href="#sobre" className="hover:text-lime transition-colors">A Pousada</a></li>
              <li><a href="#experiencia" className="hover:text-lime transition-colors">Ilha do Mel</a></li>
              <li><a href="#acomodacoes" className="hover:text-lime transition-colors">Suítes & Chalés</a></li>
              <li><a href="#politicas" className="hover:text-lime transition-colors">Políticas de Reserva</a></li>
              <li><a href="#reservas" className="hover:text-lime transition-colors text-lime font-bold">Solicitar Orçamento</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-center md:text-left">
            <h4 className="text-lime text-xs font-black uppercase tracking-[0.3em] mb-8">Contato Direto</h4>
            <ul className="space-y-6 text-gray-300">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <MapPin className="text-lime flex-shrink-0" size={24} />
                <span className="text-sm">Praia das Encantadas<br/>Ilha do Mel, Paranaguá - PR</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <Phone className="text-lime flex-shrink-0" size={24} />
                <div className="flex flex-col">
                    <a href="tel:+554134269043" className="hover:text-lime transition-colors font-bold">(41) 3426-9043</a>
                    <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="hover:text-lime transition-colors text-sm">(41) 99900-4808</a>
                </div>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <Mail className="text-lime flex-shrink-0" size={24} />
                <a href="mailto:coracaodailha@gmail.com" className="hover:text-lime transition-colors text-sm break-all">coracaodailha@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div className="text-center md:text-left">
            <h4 className="text-lime text-xs font-black uppercase tracking-[0.3em] mb-8">Logística</h4>
            <div className="space-y-4 bg-white/5 p-6 rounded-3xl border border-white/5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 uppercase font-black">Check-in</span>
                <span className="text-lime font-black">14:00 - 20:00h</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 uppercase font-black">Check-out</span>
                <span className="text-white font-black">Até 12:00h</span>
              </div>
              <div className="h-px bg-white/10 w-full"></div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 uppercase font-black">Café da Manhã</span>
                <span className="text-lime font-black">08:00 - 10:00h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Developer */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold text-center md:text-left">
            © 2024 Pousada Coração da Ilha. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-3 bg-white/5 py-2 px-6 rounded-full border border-white/5">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Powered with</span>
            <Heart size={16} className="text-lime fill-current animated-heart" />
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">by</span>
            <a 
              href="https://supremasite.com.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lime hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest"
            >
              Suprema Sites
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;