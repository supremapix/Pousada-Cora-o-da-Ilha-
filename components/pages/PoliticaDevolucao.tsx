import React from 'react';
import { CircleAlert as AlertCircle, CircleCheck as CheckCircle, Circle as XCircle, Clock, MessageCircle, CreditCard } from 'lucide-react';
import { WHATSAPP_NUMBER, EMAIL_ADDRESS } from '../../constants';
import { useSEO } from '../../utils/seo';

const PoliticaDevolucao: React.FC = () => {
  const lastUpdated = "18 de abril de 2026";

  useSEO({
    title: 'Política de Cancelamento e Reembolso | Coração da Ilha',
    description:
      'Confira as regras de cancelamento, reembolso e alteração de reservas da Pousada Coração da Ilha, na Ilha do Mel.',
    canonical: '/politica-devolucao',
  });

  return (
    <main className="pt-24">
      <section className="bg-deep-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-lime font-bold tracking-widest uppercase text-xs mb-4 block">Transparência na Reserva</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Política de Cancelamento e Reembolso</h1>
          <div className="h-1 w-24 bg-lime mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-sm">Última atualização: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex gap-4">
            <AlertCircle size={24} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-800 mb-1">Leia antes de reservar</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                Recomendamos que você leia atentamente esta política antes de confirmar sua reserva. Em caso de dúvidas, entre em contato conosco antes de finalizar o pagamento.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-serif font-bold text-deep-navy mb-6 flex items-center gap-3">
                <Clock size={24} className="text-lime-700" />
                Prazos de Cancelamento
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: CheckCircle,
                    color: "green",
                    title: "Cancelamento Gratuito",
                    period: "Mais de 15 dias antes do check-in",
                    detail: "Reembolso integral do valor pago, sem taxas adicionais.",
                  },
                  {
                    icon: AlertCircle,
                    color: "amber",
                    title: "Cancelamento Parcial",
                    period: "De 8 a 14 dias antes do check-in",
                    detail: "Reembolso de 50% do valor total da reserva.",
                  },
                  {
                    icon: XCircle,
                    color: "red",
                    title: "Sem Reembolso",
                    period: "Menos de 7 dias antes do check-in",
                    detail: "Cancelamentos com menos de 7 dias não geram reembolso.",
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`rounded-2xl p-6 border-2 ${
                    item.color === 'green' ? 'bg-green-50 border-green-200' :
                    item.color === 'amber' ? 'bg-amber-50 border-amber-200' :
                    'bg-red-50 border-red-200'
                  }`}>
                    <item.icon size={28} className={`mb-4 ${
                      item.color === 'green' ? 'text-green-600' :
                      item.color === 'amber' ? 'text-amber-600' :
                      'text-red-600'
                    }`} />
                    <h3 className="font-bold text-deep-navy mb-2">{item.title}</h3>
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${
                      item.color === 'green' ? 'text-green-600' :
                      item.color === 'amber' ? 'text-amber-600' :
                      'text-red-600'
                    }`}>{item.period}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-deep-navy mb-6 flex items-center gap-3">
                <CreditCard size={24} className="text-lime-700" />
                Como Solicitar o Reembolso
              </h2>
              <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
                {[
                  { step: "01", title: "Entre em contato conosco", desc: "Envie um e-mail ou mensagem no WhatsApp informando sua reserva e o motivo do cancelamento." },
                  { step: "02", title: "Confirmação do cancelamento", desc: "Nossa equipe confirmará o cancelamento e o valor a ser reembolsado conforme a política aplicável." },
                  { step: "03", title: "Processamento do reembolso", desc: "O reembolso é processado em até 10 dias úteis, via o mesmo meio de pagamento utilizado na reserva." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="w-10 h-10 bg-lime/20 text-deep-navy font-black text-sm rounded-full flex items-center justify-center shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-deep-navy mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-deep-navy mb-6">Casos Especiais</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "No-show (não comparecimento)",
                    desc: "Hóspedes que não comparecem sem aviso prévio perdem o valor integral da reserva."
                  },
                  {
                    title: "Emergências médicas comprovadas",
                    desc: "Em caso de emergência médica devidamente comprovada por atestado, analisamos o reembolso de forma excepcional. Entre em contato o quanto antes."
                  },
                  {
                    title: "Eventos climáticos extremos",
                    desc: "Em situações de força maior que impeçam o acesso à Ilha do Mel (condições climáticas extremas, fechamento do porto), oferecemos reagendamento sem custo adicional."
                  },
                  {
                    title: "Alterações de data",
                    desc: "Alterações de data estão sujeitas à disponibilidade e devem ser solicitadas com pelo menos 5 dias de antecedência do check-in original."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:border-lime/40 transition-colors">
                    <h3 className="font-bold text-deep-navy mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-deep-navy mb-6">Planos de Reserva</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-deep-navy text-lg mb-3">Plano Tradicional</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Pagamento no ato do check-in. Cancelamento gratuito a qualquer momento antes da chegada. Sem multa.</p>
                </div>
                <div className="border-2 border-lime/40 bg-lime/5 rounded-2xl p-6">
                  <h3 className="font-bold text-deep-navy text-lg mb-3">Plano Pré-pago</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Pagamento antecipado com desconto especial. Sujeito às regras de cancelamento descritas acima. O desconto é mantido para reagendamentos dentro de 12 meses.</p>
                </div>
              </div>
            </div>

            <div className="bg-deep-navy text-white rounded-2xl p-8">
              <h2 className="text-xl font-serif font-bold text-lime mb-4">Ainda tem dúvidas?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Nossa equipe está disponível para esclarecer qualquer questão sobre cancelamentos e reembolsos. Fale conosco:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Olá! Tenho uma dúvida sobre a política de cancelamento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-lime text-deep-navy font-bold py-3 px-6 rounded-xl transition-all hover:bg-lime-400"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${EMAIL_ADDRESS}?subject=Dúvida sobre cancelamento`}
                  className="inline-flex items-center gap-2 bg-white/10 text-white font-bold py-3 px-6 rounded-xl transition-all hover:bg-white/20"
                >
                  E-mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PoliticaDevolucao;
