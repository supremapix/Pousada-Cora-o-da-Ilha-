import React, { useState } from 'react';
import { CreditCard, CalendarX, Info, CheckCircle, AlertTriangle, XCircle, Clock, Coffee, Baby, Wifi, Copy } from 'lucide-react';

type TabType = 'deposito' | 'cancelamento' | 'geral';

const Policies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('deposito');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Chave PIX copiada!');
  };

  return (
    <section id="politicas" className="py-24 bg-deep-navy-50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-lime-700 font-bold tracking-widest uppercase text-sm mb-2 block">Informações Importantes</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-navy mt-2">Políticas da Pousada</h2>
          <div className="h-1 w-20 bg-lime mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto border border-gray-100">
          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row border-b border-gray-200 bg-gray-50">
            <button 
              onClick={() => setActiveTab('deposito')}
              className={`flex-1 py-6 px-6 text-sm md:text-base font-bold flex items-center justify-center gap-3 transition-all ${
                activeTab === 'deposito' ? 'bg-deep-navy text-lime border-b-4 border-lime' : 'text-gray-500 hover:text-deep-navy hover:bg-gray-100'
              }`}
            >
              <CreditCard size={20} />
              Pagamento & PIX
            </button>
            <button 
              onClick={() => setActiveTab('cancelamento')}
              className={`flex-1 py-6 px-6 text-sm md:text-base font-bold flex items-center justify-center gap-3 transition-all ${
                activeTab === 'cancelamento' ? 'bg-deep-navy text-lime border-b-4 border-lime' : 'text-gray-500 hover:text-deep-navy hover:bg-gray-100'
              }`}
            >
              <CalendarX size={20} />
              Cancelamento
            </button>
            <button 
              onClick={() => setActiveTab('geral')}
              className={`flex-1 py-6 px-6 text-sm md:text-base font-bold flex items-center justify-center gap-3 transition-all ${
                activeTab === 'geral' ? 'bg-deep-navy text-lime border-b-4 border-lime' : 'text-gray-500 hover:text-deep-navy hover:bg-gray-100'
              }`}
            >
              <Info size={20} />
              Informações Gerais
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-12 min-h-[450px]">
            
            {/* Depósito Content */}
            {activeTab === 'deposito' && (
              <div className="animate-fade-in space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-deep-navy p-8 rounded-3xl text-white shadow-xl">
                    <h4 className="font-bold text-2xl mb-6 text-lime flex items-center gap-3">
                      <CreditCard className="text-lime" /> Formas de Pagamento
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <CheckCircle size={20} className="text-lime mt-1 flex-shrink-0" />
                        <div>
                          <strong className="block text-lg">Plano Tradicional</strong>
                          <span className="text-gray-300 text-sm">50% na reserva + 50% no check-in.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckCircle size={20} className="text-lime mt-1 flex-shrink-0" />
                        <div>
                          <strong className="block text-lg text-lime">Plano Pré-Pago (Melhor Tarifa)</strong>
                          <span className="text-gray-300 text-sm">Parcelamento mensal via PIX até a data da viagem.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckCircle size={20} className="text-lime mt-1 flex-shrink-0" />
                        <div>
                          <strong className="block text-lg">Cartão de Crédito</strong>
                          <span className="text-gray-300 text-sm">Até 12x com juros via link de pagamento.</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 flex flex-col justify-center">
                    <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-3 text-xl">
                      🔑 Chave PIX (CNPJ)
                    </h4>
                    <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-lime shadow-inner text-center">
                       <span className="block text-2xl font-mono font-black text-deep-navy mb-4">20.746.844/0001-93</span>
                       <button 
                         onClick={() => copyToClipboard('20.746.844/0001-93')}
                         className="bg-deep-navy text-lime font-bold py-3 px-8 rounded-full hover:bg-deep-navy-950 transition-all flex items-center justify-center gap-2 mx-auto w-full"
                       >
                         <Copy size={18} /> Copiar Chave PIX
                       </button>
                    </div>
                    <p className="mt-6 text-sm text-gray-500 font-medium text-center">
                      Favorecido: JEISON MM FREITAS POUSADA ME
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Cancelamento Content */}
            {activeTab === 'cancelamento' && (
              <div className="animate-fade-in space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-green-50 border-l-8 border-lime-500 flex items-start gap-4">
                    <CheckCircle className="text-lime-700 mt-1" />
                    <div>
                      <h5 className="font-bold text-deep-navy">Mais de 60 dias</h5>
                      <p className="text-sm text-gray-600 italic">Reembolso de 50% ou 100% em crédito.</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-yellow-50 border-l-8 border-yellow-400 flex items-start gap-4">
                    <AlertTriangle className="text-yellow-700 mt-1" />
                    <div>
                      <h5 className="font-bold text-deep-navy">20 a 59 dias</h5>
                      <p className="text-sm text-gray-600 italic">100% em crédito apenas. Sem reembolso.</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-orange-50 border-l-8 border-orange-400 flex items-start gap-4">
                    <AlertTriangle className="text-orange-700 mt-1" />
                    <div>
                      <h5 className="font-bold text-deep-navy">8 a 19 dias</h5>
                      <p className="text-sm text-gray-600 italic">Crédito de apenas 25% do valor pago.</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-red-50 border-l-8 border-red-500 flex items-start gap-4">
                    <XCircle className="text-red-700 mt-1" />
                    <div>
                      <h5 className="font-bold text-deep-navy">Menos de 7 dias</h5>
                      <p className="text-sm text-gray-600 italic">Não haverá reembolso nem crédito.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 bg-deep-navy text-white p-6 rounded-2xl">
                   <p className="flex items-center gap-3 text-sm font-light">
                     <Info size={20} className="text-lime" /> Todas as solicitações devem ser formalizadas via WhatsApp.
                   </p>
                </div>
              </div>
            )}

            {/* Geral Content */}
            {activeTab === 'geral' && (
              <div className="animate-fade-in grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-deep-navy flex items-center gap-3">
                    <Clock className="text-lime" /> Horários
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="text-xs uppercase text-gray-400 font-bold block mb-1">Check-in</span>
                      <span className="text-xl font-bold text-deep-navy">14:00h</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <span className="text-xs uppercase text-gray-400 font-bold block mb-1">Check-out</span>
                      <span className="text-xl font-bold text-deep-navy">12:00h</span>
                    </div>
                  </div>
                  <div className="bg-lime/10 p-4 rounded-xl flex justify-between items-center">
                    <span className="font-bold text-deep-navy flex items-center gap-2"><Coffee size={18} /> Café da Manhã</span>
                    <span className="bg-lime text-deep-navy font-black px-3 py-1 rounded-lg">08:00 - 10:00</span>
                  </div>
                </div>

                <div className="space-y-6">
                   <h4 className="text-2xl font-bold text-deep-navy flex items-center gap-3">
                    <Wifi className="text-lime" /> Facilidades
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="bg-deep-navy p-1.5 rounded-full text-lime"><Baby size={16} /></div> Crianças até 5 anos grátis
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="bg-deep-navy p-1.5 rounded-full text-lime"><Wifi size={16} /></div> Fibra óptica em toda pousada
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="bg-deep-navy p-1.5 rounded-full text-lime font-black px-1.5">P</div> Estacionamento em Paranaguá
                    </li>
                  </ul>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Policies;