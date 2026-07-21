import React from 'react';
import { Heart, Award, Users, Leaf, Star, MapPin } from 'lucide-react';
import { useSEO } from '../../utils/seo';
import { PAGE_SEO } from '../../utils/pageSeo';

const QuemSomos: React.FC = () => {
  useSEO(PAGE_SEO.quemSomos);

  return (
    <main className="pt-24">
      <section className="bg-deep-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-lime font-bold tracking-widest uppercase text-xs mb-4 block">Conheça nossa história</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Quem Somos</h1>
          <div className="h-1 w-24 bg-lime mx-auto rounded-full mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Pousada Coração da Ilha — um refúgio de autenticidade e afeto na Praia das Encantadas, Ilha do Mel, Paraná.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-lime-700 font-bold tracking-widest uppercase text-xs mb-3 block">Nossa Essência</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-navy mb-6">
                Uma história de amor pela Ilha do Mel
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A Pousada Coração da Ilha nasceu do amor genuíno por um dos lugares mais especiais do Brasil. Localizada na Praia das Encantadas, na Ilha do Mel — Patrimônio Ecológico do Paraná —, nossa pousada foi construída com alma, madeira nobre e muita dedicação para oferecer muito mais do que hospedagem: oferecemos experiências que ficam na memória.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Desde o primeiro dia, nossa missão é receber cada hóspede como um amigo que chega em casa. A arquitetura rústica tropical, o acolhimento caloroso e os cuidados que colocamos em cada detalhe fazem da sua estadia algo único e especial.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Na Ilha do Mel não há carros, o ritmo é outro — e aqui você vai descobrir o prazer de simplesmente ser. Nossos quartos e chalés, com seus tetos em madeira e varanda com vista para a ilha, são o cenário perfeito para reconectar com o que realmente importa.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/hospedagem/pousada-na-ilha-do-mel-quarto-01_(2).jpg"
                alt="Interior aconchegante da Pousada Coração da Ilha com teto e paredes em madeira nobre - Ilha do Mel, Paraná"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-lime text-deep-navy p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-black">+10</div>
                <div className="text-xs font-bold uppercase tracking-wider">anos recebendo viajantes</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: Heart,
                title: "Hospitalidade com Afeto",
                description: "Cada hóspede é recebido com atenção genuína, como se fosse da família. O sorriso e a dedicação de nossa equipe fazem toda a diferença."
              },
              {
                icon: Leaf,
                title: "Respeito à Natureza",
                description: "Operamos com consciência ambiental, respeitando as normas da APA da Ilha do Mel e preservando o ecossistema único deste paraíso natural."
              },
              {
                icon: Star,
                title: "Experiência Autêntica",
                description: "Aqui você vive a ilha de verdade — trilhas, praia, silêncio e natureza. Nossa pousada é o ponto de partida para descobertas inesquecíveis."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-3xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-lime/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon size={28} className="text-lime-700" />
                </div>
                <h3 className="text-xl font-serif font-bold text-deep-navy mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-deep-navy text-white rounded-3xl p-10 md:p-16 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-lime font-bold tracking-widest uppercase text-xs mb-4 block">Nossa Missão</span>
                <h2 className="text-3xl font-serif font-bold mb-6">Mais do que uma pousada, um lar temporário</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Acreditamos que viajar é uma forma de transformação. Por isso, queremos que cada hóspede parta da Ilha do Mel renovado, com histórias para contar e vontade de voltar.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Nossa visão é ser referência em hospitalidade autêntica na Ilha do Mel, combinando o charme rústico da arquitetura local com um serviço atencioso e personalizado.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, value: "Milhares", label: "de hóspedes satisfeitos" },
                  { icon: Award, value: "9", label: "acomodações exclusivas" },
                  { icon: MapPin, value: "Praia das", label: "Encantadas — Ilha do Mel" },
                  { icon: Leaf, value: "100%", label: "comprometidos com a natureza" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center">
                    <stat.icon size={24} className="text-lime mx-auto mb-3" />
                    <div className="text-2xl font-black text-lime mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400 uppercase font-bold tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-6">Venha nos conhecer</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
              Estamos na Praia das Encantadas, acessível apenas de barco a partir de Pontal do Sul. Uma viagem diferente começa aqui.
            </p>
            <a
              href="/#reservas"
              className="inline-flex items-center gap-2 bg-lime hover:bg-lime-500 text-deep-navy font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Faça sua Reserva
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QuemSomos;
