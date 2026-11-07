import React, { useState, useRef, useEffect } from 'react';
import { User, Mail, Phone, MessageSquare, Check, Star } from 'lucide-react';
import { BookingFormData } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

const localDate = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

const BookingForm: React.FC = () => {
  const checkinRef = useRef<HTMLInputElement>(null);
  const checkoutRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<BookingFormData>({
    nome: '',
    email: '',
    telefone: '',
    checkin: '',
    checkout: '',
    acomodacao: '',
    hospedes: 2,
    plano: 'Plano Pré-Pago (Parcelado)',
    mensagem: '',
    aceite: false
  });

  // Keep server markup and the first client render independent of the build date.
  const [today, setToday] = useState('');
  useEffect(() => {
    const refreshToday = () => setToday(localDate(new Date()));
    refreshToday();
    window.addEventListener('focus', refreshToday);
    window.addEventListener('pageshow', refreshToday);
    const timer = window.setInterval(refreshToday, 60_000);
    return () => {
      window.removeEventListener('focus', refreshToday);
      window.removeEventListener('pageshow', refreshToday);
      window.clearInterval(timer);
    };
  }, []);

  let checkoutMin = '';
  if (today) {
    const earliestCheckout = new Date(`${formData.checkin && formData.checkin >= today ? formData.checkin : today}T12:00:00`);
    earliestCheckout.setDate(earliestCheckout.getDate() + 1);
    checkoutMin = localDate(earliestCheckout);
  }
  const checkinError = today && formData.checkin && formData.checkin < today ? 'Escolha hoje ou uma data futura para o check-in.' : '';
  const checkoutError = checkoutMin && formData.checkout && formData.checkout < checkoutMin ? 'O check-out deve ser posterior ao check-in e à data de hoje.' : '';

  useEffect(() => {
    checkinRef.current?.setCustomValidity(checkinError);
    checkoutRef.current?.setCustomValidity(checkoutError);
  }, [checkinError, checkoutError, today, formData.checkin, formData.checkout]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    if (name === 'checkin' || name === 'checkout') {
      // Clear any submit-time error before recomputing both date constraints.
      checkinRef.current?.setCustomValidity('');
      checkoutRef.current?.setCustomValidity('');
      setToday(localDate(new Date()));
    }
    setFormData(prev => ({
      ...prev,
      [name]: e.target.type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Recheck the current date even when the form has stayed open overnight.
    const currentToday = localDate(new Date());
    setToday(currentToday);
    if (formData.checkin < currentToday || formData.checkout <= formData.checkin) {
      const invalidInput = formData.checkin < currentToday ? checkinRef.current : checkoutRef.current;
      invalidInput?.setCustomValidity('Confira as datas: o check-in não pode estar no passado e o check-out deve ser posterior.');
      invalidInput?.reportValidity();
      return;
    }
    const formatDate = (dateString: string) => {
      if (!dateString) return '';
      const [year, month, day] = dateString.split('-');
      return `${day}/${month}/${year}`;
    };

    const text = `🏝️ *SOLICITAÇÃO DE RESERVA - POUSADA CORAÇÃO DA ILHA*

📝 *Dados do Hóspede:*
Nome: ${formData.nome}
E-mail: ${formData.email}
WhatsApp: ${formData.telefone}

📅 *Detalhes da Reserva:*
Check-in: ${formatDate(formData.checkin)}
Check-out: ${formatDate(formData.checkout)}
Acomodação: ${formData.acomodacao}
Número de Hóspedes: ${formData.hospedes}

💳 *Forma de Pagamento:*
${formData.plano}

${formData.mensagem ? `📌 *Observações:*\n${formData.mensagem}` : ''}

Aguardo confirmação! 😊`;

    const encodedText = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedText}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reservas" className="py-20 bg-deep-navy relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="max-w-4xl mx-auto bg-lime border border-lime-600 rounded-lg p-4 mb-10 flex items-center gap-4 shadow-xl">
           <div className="bg-deep-navy p-2 rounded-full text-lime">
             <Star size={24} fill="currentColor" />
           </div>
           <div>
             <p className="text-deep-navy font-bold text-lg">Consulte sua estadia</p>
             <p className="text-deep-navy/80 text-sm font-medium">Informe suas datas e consulte disponibilidade, valores e condições diretamente com a pousada.</p>
           </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-serif font-bold text-deep-navy">Solicitar Reserva</h2>
              <p className="text-gray-500 mt-1">Preencha os dados para preparar sua solicitação no WhatsApp.</p>
            </div>

            <noscript><p>Para consultar sua estadia, use o <a href={`https://wa.me/${WHATSAPP_NUMBER}`}>WhatsApp da pousada</a>.</p><style>{'#reservas form { display: none; }'}</style></noscript>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                  </div>
                  <input type="text" id="nome" name="nome" autoComplete="name" required value={formData.nome} onChange={handleChange} className="pl-10 w-full rounded-lg border-gray-300 border focus:ring-2 focus:ring-lime focus:border-transparent py-2.5 text-gray-900" placeholder="Seu nome" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Mail size={18} />
                    </div>
                    <input type="email" id="email" name="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="pl-10 w-full rounded-lg border-gray-300 border focus:ring-2 focus:ring-lime focus:border-transparent py-2.5 text-gray-900" placeholder="seu@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Phone size={18} />
                    </div>
                    <input type="tel" id="telefone" name="telefone" autoComplete="tel" required value={formData.telefone} onChange={handleChange} className="pl-10 w-full rounded-lg border-gray-300 border focus:ring-2 focus:ring-lime focus:border-transparent py-2.5 text-gray-900" placeholder="(00) 00000-0000" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-1">Data Check-in *</label>
                  <input type="date" id="checkin" name="checkin" ref={checkinRef} min={today || undefined} aria-invalid={!!checkinError} aria-describedby={checkinError ? "checkin-error" : undefined} required value={formData.checkin} onChange={handleChange} className="w-full rounded-lg border-gray-300 border focus:ring-2 focus:ring-lime focus:border-transparent py-2.5 text-gray-900" />
                  {checkinError && <p id="checkin-error" role="alert" className="mt-1 text-sm text-red-700">{checkinError}</p>}
                </div>
                <div>
                  <label htmlFor="checkout" className="block text-sm font-medium text-gray-700 mb-1">Data Check-out *</label>
                  <input type="date" id="checkout" name="checkout" ref={checkoutRef} min={checkoutMin || undefined} aria-invalid={!!checkoutError} aria-describedby={checkoutError ? "checkout-error" : undefined} required value={formData.checkout} onChange={handleChange} className="w-full rounded-lg border-gray-300 border focus:ring-2 focus:ring-lime focus:border-transparent py-2.5 text-gray-900" />
                  {checkoutError && <p id="checkout-error" role="alert" className="mt-1 text-sm text-red-700">{checkoutError}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="acomodacao" className="block text-sm font-medium text-gray-700 mb-1">Acomodação *</label>
                  <select id="acomodacao" name="acomodacao" required value={formData.acomodacao} onChange={handleChange} className="w-full rounded-lg border-gray-300 border focus:ring-2 focus:ring-lime focus:border-transparent py-2.5 text-gray-900 bg-white">
                    <option value="">Selecione...</option>
                    <option value="Chalé Luxo (até 4 pessoas)">Chalé Luxo (até 4 pessoas)</option>
                    <option value="Suíte Top Luxo 1 (até 4 pessoas)">Suíte Top Luxo 1 (até 4 pessoas)</option>
                    <option value="Suíte Top Standard (até 4 pessoas)">Suíte Top Standard (até 4 pessoas)</option>
                    <option value="Suíte Top Luxo 2 (até 2 pessoas)">Suíte Top Luxo 2 (até 2 pessoas)</option>
                    <option value="Suíte Standard (até 2 pessoas)">Suíte Standard (até 2 pessoas)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="hospedes" className="block text-sm font-medium text-gray-700 mb-1">Nº de Hóspedes *</label>
                  <input type="number" id="hospedes" name="hospedes" min="1" max="8" required value={formData.hospedes} onChange={handleChange} className="w-full rounded-lg border-gray-300 border focus:ring-2 focus:ring-lime focus:border-transparent py-2.5 text-gray-900" />
                </div>
              </div>

              <div>
                <label htmlFor="plano" className="block text-sm font-medium text-gray-700 mb-1">Forma de Pagamento *</label>
                <select id="plano" name="plano" required value={formData.plano} onChange={handleChange} className="w-full rounded-lg border-gray-300 border focus:ring-2 focus:ring-lime focus:border-transparent py-2.5 text-gray-900 bg-white">
                  <option value="Plano Tradicional (50% + 50%)">Plano Tradicional (50% agora + 50% no check-in)</option>
                  <option value="Plano Pré-Pago (Parcelado)">✨ Plano Pré-Pago (Consulte condições)</option>
                  <option value="Cartão de Crédito (até 12x)">Cartão de Crédito (até 12x com juros)</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Observações (opcional)</label>
                <textarea id="mensagem" name="mensagem" rows={3} value={formData.mensagem} onChange={handleChange} className="w-full rounded-lg border-gray-300 border focus:ring-2 focus:ring-lime focus:border-transparent py-2 text-gray-900"></textarea>
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" id="aceite" name="aceite" required checked={formData.aceite} onChange={handleChange} className="mt-1 h-4 w-4 text-lime-600 focus:ring-lime border-gray-300 rounded" />
                <label htmlFor="aceite" className="text-sm text-gray-600 font-medium">
                  Li e aceito as <a href="#politicas" className="text-deep-navy font-bold hover:underline">políticas de reserva e cancelamento</a>
                </label>
              </div>

              <p id="booking-privacy" className="text-sm text-gray-600">
                Ao continuar, os dados preenchidos serão compartilhados com o WhatsApp para preparar uma mensagem à pousada em uma nova aba. Revise a mensagem e envie no WhatsApp. Isso não confirma uma reserva: disponibilidade, valores e confirmação dependem do atendimento da pousada. Consulte a <a href="/politica-privacidade" className="text-deep-navy font-bold underline">Política de Privacidade</a>.
              </p>

              <button type="submit" aria-describedby="booking-privacy" className="w-full bg-lime hover:bg-lime-500 text-deep-navy font-black py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg uppercase tracking-wider">
                <span>Abrir solicitação no WhatsApp</span>
                <MessageSquare className="animate-pulse" />
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-deep-navy-950/40 backdrop-blur-md border border-lime/20 p-6 rounded-2xl text-white shadow-2xl">
              <h3 className="text-xl font-serif font-bold mb-4 text-lime">💬 Atendimento da pousada</h3>
              <p className="mb-6 opacity-80 text-sm">Envie sua dúvida pelos canais abaixo e aguarde o retorno da equipe.</p>
              
              <div className="space-y-4">
                <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-lime text-deep-navy p-3 rounded-lg font-bold hover:bg-lime-500 transition-colors">
                   <div className="bg-deep-navy p-2 rounded-full text-lime"><MessageSquare size={20} /></div>
                   <div>
                     <span className="block text-xs opacity-70">WhatsApp</span>
                     <span className="text-sm">(41) 99900-4808</span>
                   </div>
                </a>
                <a href="tel:+554134269043" className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors cursor-pointer border border-white/10">
                   <div className="bg-white/20 p-2 rounded-full text-white"><Phone size={20} /></div>
                   <div>
                     <span className="block text-xs opacity-70">Telefone</span>
                     <span className="text-sm">(41) 3426-9043</span>
                   </div>
                </a>
              </div>
            </div>

            <div className="bg-lime/10 p-6 rounded-2xl text-lime border border-lime/30">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white"><Star className="text-lime" fill="currentColor"/> Benefícios Exclusivos</h3>
               <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-sm text-gray-200"><Check size={16} className="text-lime flex-shrink-0" /> Café da manhã tropical incluso</li>
                 <li className="flex items-center gap-3 text-sm text-gray-200"><Check size={16} className="text-lime flex-shrink-0" /> Wi-Fi na pousada</li>
                 <li className="flex items-center gap-3 text-sm text-gray-200"><Check size={16} className="text-lime flex-shrink-0" /> Crianças até 5 anos grátis</li>
                 <li className="flex items-center gap-3 text-sm text-gray-200"><Check size={16} className="text-lime flex-shrink-0" /> Acesso direto à Praia de Encantadas</li>
               </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingForm;
