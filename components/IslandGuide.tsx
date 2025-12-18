
import React from 'react';
import { History, MapPin, Lightbulb, Shield, Footprints, Camera, Palmtree, Anchor, Waves, Ship, Info } from 'lucide-react';

const IslandGuide: React.FC = () => {
  const pointsOfInterest = [
    {
      name: "Gruta das Encantadas",
      desc: "Patrimônio natural envolto em lendas. O acesso é feito por uma passarela de madeira que contorna o costão rochoso.",
      dist: "15 min de caminhada",
      image: "/images/hospedagem/hospedagem-11.jpg",
      icon: <Camera size={20} />
    },
    {
      name: "Farol das Conchas",
      desc: "Construído em 1872, oferece a vista mais icônica da ilha. Um local perfeito para ver o nascer do sol.",
      dist: "45 min de trilha",
      image: "/images/hospedagem/hospedagem-23.jpg",
      icon: <Anchor size={20} />
    },
    {
      name: "Fortaleza N. Sra. dos Prazeres",
      desc: "História viva à beira-mar com canhões do século XVIII e uma vista estratégica da baía.",
      dist: "Barco ou Trilha Longa",
      image: "/images/hospedagem/hospedagem-24.jpg",
      icon: <Shield size={20} />
    },
    {
      name: "Istmo (O Passinho)",
      desc: "Onde a ilha quase se divide em duas. Um espetáculo da natureza onde o mar de dentro e o mar de fora se aproximam.",
      dist: "20 min de caminhada",
      image: "/images/hospedagem/hospedagem-32.jpg",
      icon: <Waves size={20} />
    }
  ];

  const travelTips = [
    { title: "Calçados", text: "Trilhas de areia predominam. Chinelos e tênis confortáveis são essenciais.", icon: <Footprints size={20} /> },
    { title: "Noite", text: "Não há iluminação pública nas trilhas. Uma lanterna é sua melhor amiga após o pôr do sol.", icon: <Lightbulb size={20} /> },
    { title: "Meio Ambiente", text: "95% da ilha é reserva. Não retire conchas, pedras ou plantas. Lixo sempre no lixo.", icon: <Palmtree size={20} /> },
    { title: "Dinheiro", text: "Sinal de internet pode oscilar. Tenha sempre um pouco de dinheiro em espécie para emergências.", icon: <History size={20} /> }
  ];

  return (
    <section id="guia-ilha" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-lime-700 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Exploração & Aventura</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-deep-navy mb-6">Guia do <span className="italic text-lime-700">Explorador</span></h2>
          <div className="h-1.5 w-24 bg-lime mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            Descubra os tesouros escondidos na Ilha do Mel. Preparamos uma seleção dos pontos imperdíveis para sua estadia na Praia de Encantadas.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {pointsOfInterest.map((spot, idx) => (
            <div key={idx} className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <img 
                src={spot.image} 
                alt={spot.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/20 to-transparent"></div>
              
              <div className="absolute top-6 left-6">
                <div className="bg-lime text-deep-navy p-3 rounded-2xl shadow-lg border border-white/20">
                  {spot.icon}
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-lime mb-2 block">{spot.dist}</span>
                <h3 className="text-2xl font-serif font-bold mb-3">{spot.name}</h3>
                <p className="text-xs text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                  {spot.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Logistics & Tips Container */}
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            {/* Logistics Card */}
            <div className="bg-deep-navy p-10 rounded-[3rem] text-white shadow-2xl flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-lime/20 p-3 rounded-2xl text-lime">
                    <Ship size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">Como Chegar</h3>
                </div>
                <p className="text-gray-400 font-light mb-6">
                  O acesso à ilha é feito exclusivamente por barcos que partem de <strong>Pontal do Sul</strong> (30 min) ou <strong>Paranaguá</strong> (1h45).
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm border-b border-white/10 pb-3">
                    <MapPin size={16} className="text-lime" />
                    <span>Desembarque: <strong>Trapiche de Encantadas</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Info size={16} className="text-lime" />
                    <span>Nossa pousada fica a 5 min do trapiche.</span>
                  </div>
                </div>
              </div>
              <a 
                href={`https://api.whatsapp.com/send?phone=5541999004808&text=Olá! Gostaria de informações sobre horários de barcos.`}
                target="_blank"
                className="mt-10 bg-white/10 hover:bg-lime text-white hover:text-deep-navy font-bold py-4 px-6 rounded-2xl transition-all text-center flex items-center justify-center gap-2 group/btn"
              >
                Consultar Horários <Waves size={18} className="group-hover/btn:animate-bounce" />
              </a>
            </div>

            {/* Travel Tips Column */}
            <div className="space-y-4">
              {travelTips.map((tip, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 flex gap-5 items-start hover:bg-white hover:shadow-xl transition-all group">
                  <div className="bg-white p-3 rounded-xl text-deep-navy shadow-sm group-hover:bg-lime group-hover:text-deep-navy transition-colors">
                    {tip.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-navy text-sm uppercase tracking-widest">{tip.title}</h4>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Quote/Image */}
          <div className="lg:w-1/3 relative h-full min-h-[400px]">
            <div className="h-full bg-lime rounded-[3rem] p-12 flex flex-col justify-center items-center text-center shadow-xl group cursor-default">
              <Palmtree size={64} className="text-deep-navy/20 mb-8 group-hover:scale-110 transition-transform" />
              <p className="text-2xl font-serif font-bold italic text-deep-navy leading-tight mb-8">
                "A Ilha do Mel não é apenas um lugar, é um estado de espírito onde a natureza dita o ritmo."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-deep-navy/20"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-deep-navy">Preserve o Paraíso</span>
                <div className="h-px w-12 bg-deep-navy/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IslandGuide;
