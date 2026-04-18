import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_NUMBER, EMAIL_ADDRESS, MAPS_LINK } from '../../constants';

const Contato: React.FC = () => {
  return (
    <main className="pt-24">
      <section className="bg-deep-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-lime font-bold tracking-widest uppercase text-xs mb-4 block">Fale Conosco</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Contato</h1>
          <div className="h-1 w-24 bg-lime mx-auto rounded-full mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Estamos prontos para atender você. Escolha o canal de comunicação mais conveniente.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-serif font-bold text-deep-navy mb-10">Canais de Atendimento</h2>

              <div className="space-y-6">
                <a
                  href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Olá! Gostaria de informações sobre hospedagem na Pousada Coração da Ilha.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-6 p-6 bg-green-50 border border-green-100 rounded-2xl hover:shadow-md transition-shadow group"
                >
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle size={26} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-deep-navy text-lg mb-1 group-hover:text-green-600 transition-colors">WhatsApp</div>
                    <div className="text-gray-600 text-sm mb-2">(41) 99900-4808</div>
                    <div className="text-green-600 text-xs font-semibold">Resposta mais rápida — clique para conversar</div>
                  </div>
                </a>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-start gap-6 p-6 bg-blue-50 border border-blue-100 rounded-2xl hover:shadow-md transition-shadow group"
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={26} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-deep-navy text-lg mb-1 group-hover:text-blue-600 transition-colors">Telefone Fixo</div>
                    <div className="text-gray-600 text-sm mb-2">(41) 3426-9043</div>
                    <div className="text-blue-600 text-xs font-semibold">Ligue nos horários de atendimento</div>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-start gap-6 p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-md transition-shadow group"
                >
                  <div className="w-14 h-14 bg-deep-navy rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={26} className="text-lime" />
                  </div>
                  <div>
                    <div className="font-bold text-deep-navy text-lg mb-1 group-hover:text-lime-700 transition-colors">E-mail</div>
                    <div className="text-gray-600 text-sm mb-2">{EMAIL_ADDRESS}</div>
                    <div className="text-gray-500 text-xs font-semibold">Respondemos em até 24 horas úteis</div>
                  </div>
                </a>

                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-6 p-6 bg-amber-50 border border-amber-100 rounded-2xl hover:shadow-md transition-shadow group"
                >
                  <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={26} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-deep-navy text-lg mb-1 group-hover:text-amber-600 transition-colors">Localização</div>
                    <div className="text-gray-600 text-sm mb-2">Praia das Encantadas, Ilha do Mel — Paranaguá, PR</div>
                    <div className="text-amber-600 text-xs font-semibold flex items-center gap-1">Ver no Google Maps <ExternalLink size={12} /></div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-deep-navy mb-10">Horários de Atendimento</h2>
              <div className="bg-deep-navy text-white rounded-3xl p-8 mb-8">
                <div className="space-y-5">
                  {[
                    { label: "Recepção / Check-in", value: "14:00 – 20:00h" },
                    { label: "Check-out", value: "Até 12:00h" },
                    { label: "Café da Manhã", value: "08:00 – 10:00h" },
                    { label: "Atendimento WhatsApp", value: "08:00 – 22:00h" },
                    { label: "Telefone Fixo", value: "09:00 – 18:00h" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <Clock size={16} className="text-lime" />
                        <span className="text-gray-300 text-sm">{item.label}</span>
                      </div>
                      <span className="text-lime font-bold text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-lime/10 border border-lime/30 rounded-2xl p-6">
                <h3 className="font-bold text-deep-navy mb-3">Como Chegar</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  A Ilha do Mel não possui acesso por estradas — é um paraíso de barco! O embarque é feito a partir do <strong>Terminal Turístico de Pontal do Sul</strong>, em Pontal do Sul (PR). A travessia de barco dura aproximadamente 40 minutos.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ao desembarcar na Praia das Encantadas, nossa pousada fica a poucos minutos a pé do pier. Basta perguntar pela <strong>Pousada Coração da Ilha</strong> — todos conhecem!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gray-50 rounded-3xl p-12">
            <h2 className="text-2xl font-serif font-bold text-deep-navy mb-4">Pronto para reservar?</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">Use nosso formulário de reservas ou fale diretamente pelo WhatsApp para verificar disponibilidade.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#reservas"
                className="inline-flex items-center gap-2 bg-lime hover:bg-lime-500 text-deep-navy font-bold py-4 px-8 rounded-full transition-all shadow-lg"
              >
                Solicitar Orçamento
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Olá! Gostaria de verificar a disponibilidade de quartos.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-deep-navy hover:bg-deep-navy/80 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;
