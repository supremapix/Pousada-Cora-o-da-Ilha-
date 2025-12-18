import React from 'react';
import { Play, Anchor, MapPin, Sparkles, Calendar } from 'lucide-react';

const VideoPresentation: React.FC = () => {
  return (
    <section className="py-24 bg-deep-navy relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-lime/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Coluna de Texto */}
          <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <span className="text-lime font-black tracking-[0.3em] uppercase text-xs flex items-center gap-2">
                <Sparkles size={16} /> Experiência Imersiva
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                Hospede-se na Pousada Coração da Ilha e transforme seus dias de descanso em <span className="text-lime">momentos inesquecíveis.</span>
              </h2>
              <div className="h-1.5 w-24 bg-lime rounded-full"></div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed font-light">
              Estamos a apenas <strong>500 metros</strong> do desembarque da Praia de Encantadas e a <strong>menos de 100 metros</strong> de tudo o que você precisa: excelentes restaurantes, bares, padarias e paisagens deslumbrantes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
                <Anchor className="text-lime shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-gray-400">Oferecemos o melhor ponto da praia para <strong>atracar seu barco</strong> com segurança.</p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
                <MapPin className="text-lime shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-gray-400">Localização privilegiada: O entardecer mais bonito com <strong>golfinhos</strong> saltando próximos.</p>
              </div>
            </div>

            <p className="text-gray-400 italic font-light border-l-2 border-lime/30 pl-4">
              "Tranquilidade e paz aguardam você na Pousada Coração da Ilha, na Praia de Encantadas. Viva a beleza da Ilha do Mel com quem entende de bem-estar."
            </p>

            <div className="pt-4">
              <a 
                href="#reservas" 
                className="inline-flex items-center gap-3 bg-lime hover:bg-white text-deep-navy font-black py-4 px-10 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(57,255,20,0.3)] hover:shadow-[0_10px_35px_rgba(255,255,255,0.3)] transform hover:-translate-y-1 group"
              >
                <Calendar size={20} />
                <span>GARANTIR MINHA RESERVA</span>
              </a>
            </div>
          </div>

          {/* Coluna do Vídeo */}
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              {/* Moldura Decorativa */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-lime/20 to-transparent rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative aspect-video bg-deep-navy-950 rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                {/* Embed do Vídeo (Usando Iframe para o link fornecido) */}
                <iframe 
                  src="https://www.youtube.com/embed/S2p0P4y6P-0" // Exemplo de embed, o link curto do usuário deve ser convertido ou usado um player compatível
                  className="w-full h-full object-cover"
                  title="Vídeo Apresentação Pousada Coração da Ilha"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Overlay persuasivo caso o vídeo não carregue ou antes do play */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:bg-black/0 transition-colors"></div>
              </div>

              {/* Tag flutuante */}
              <div className="absolute -bottom-6 -left-6 bg-white py-3 px-6 rounded-2xl shadow-xl border border-gray-100 hidden md:flex items-center gap-3 animate-bounce">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-deep-navy font-black text-xs uppercase tracking-tighter">Assista ao Tour Virtual</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoPresentation;