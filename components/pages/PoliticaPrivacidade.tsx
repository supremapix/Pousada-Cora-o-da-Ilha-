import React from 'react';
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';
import { EMAIL_ADDRESS } from '../../constants';
import { useSEO } from '../../utils/seo';

const PoliticaPrivacidade: React.FC = () => {
  const lastUpdated = "18 de abril de 2026";

  useSEO({
    title: 'Política de Privacidade | Pousada Coração da Ilha',
    description:
      'Saiba como a Pousada Coração da Ilha coleta, usa e protege seus dados pessoais em conformidade com a LGPD.',
    canonical: '/politica-privacidade',
  });

  return (
    <main className="pt-24">
      <section className="bg-deep-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-lime font-bold tracking-widest uppercase text-xs mb-4 block">Legal & Transparência</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Política de Privacidade</h1>
          <div className="h-1 w-24 bg-lime mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-sm">Última atualização: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Shield, title: "Segurança", desc: "Dados protegidos por criptografia" },
              { icon: Lock, title: "Privacidade", desc: "Nunca vendemos suas informações" },
              { icon: Eye, title: "Transparência", desc: "Você sabe exatamente o que coletamos" },
              { icon: FileText, title: "LGPD", desc: "Em conformidade com a lei brasileira" },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <item.icon size={28} className="text-lime-700 mx-auto mb-3" />
                <div className="font-bold text-deep-navy text-sm mb-1">{item.title}</div>
                <div className="text-gray-500 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none space-y-10">
            <div>
              <h2 className="text-2xl font-serif font-bold text-deep-navy mb-4">1. Quem somos</h2>
              <p className="text-gray-700 leading-relaxed">
                A <strong>Pousada Coração da Ilha</strong>, situada na Praia das Encantadas, Ilha do Mel — Paranaguá, PR, é a responsável pelo tratamento dos seus dados pessoais, nos termos desta Política de Privacidade e da Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-deep-navy mb-4">2. Quais dados coletamos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Coletamos apenas as informações necessárias para prestar nossos serviços de hospedagem, incluindo:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Nome completo e documento de identificação</li>
                <li>Endereço de e-mail e número de telefone</li>
                <li>Datas de check-in e check-out desejadas</li>
                <li>Número de hóspedes e preferências de acomodação</li>
                <li>Informações de pagamento (processadas por terceiros certificados)</li>
                <li>Mensagens e solicitações enviadas pelo formulário de contato</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-deep-navy mb-4">3. Como usamos seus dados</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Suas informações são utilizadas exclusivamente para:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Processar e confirmar reservas de hospedagem</li>
                <li>Entrar em contato sobre sua reserva ou solicitações</li>
                <li>Enviar informações relevantes sobre sua estadia</li>
                <li>Cumprir obrigações legais e fiscais</li>
                <li>Melhorar nossos serviços com base em feedbacks</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Não compartilhamos, vendemos ou alugamos seus dados pessoais a terceiros</strong> para fins de marketing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-deep-navy mb-4">4. Base legal para o tratamento</h2>
              <p className="text-gray-700 leading-relaxed">
                Tratamos seus dados com base no <strong>consentimento</strong> (art. 7º, I da LGPD), na <strong>execução de contrato</strong> (art. 7º, V) e no <strong>cumprimento de obrigação legal</strong> (art. 7º, II), conforme aplicável a cada situação.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-deep-navy mb-4">5. Armazenamento e segurança</h2>
              <p className="text-gray-700 leading-relaxed">
                Seus dados são armazenados em servidores seguros com criptografia e acesso restrito. Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acessos não autorizados, perda ou destruição.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-deep-navy mb-4">6. Retenção de dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei. Dados de reserva são mantidos por até 5 anos após a estadia para fins fiscais e legais.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-deep-navy mb-4">7. Seus direitos (LGPD)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Você tem os seguintes direitos em relação aos seus dados pessoais:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Confirmar a existência de tratamento dos seus dados</li>
                <li>Acessar seus dados pessoais que mantemos</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou exclusão dos seus dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
                <li>Solicitar portabilidade dos dados</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-deep-navy mb-4">8. Cookies e tecnologias de rastreamento</h2>
              <p className="text-gray-700 leading-relaxed">
                Nosso site pode utilizar cookies para melhorar sua experiência de navegação. Esses cookies são usados apenas para fins funcionais e analíticos, nunca para rastreamento invasivo ou publicidade comportamental.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-deep-navy mb-4">9. Alterações nesta política</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Qualquer alteração relevante será comunicada por e-mail ou notificada em nosso site. Recomendamos que você revise esta página regularmente.
              </p>
            </div>

            <div className="bg-deep-navy text-white rounded-2xl p-8">
              <h2 className="text-xl font-serif font-bold text-lime mb-4">10. Contato</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato com nosso responsável pelo tratamento de dados:
              </p>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="inline-flex items-center gap-2 text-lime hover:text-white transition-colors font-semibold">
                <Mail size={18} />
                {EMAIL_ADDRESS}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PoliticaPrivacidade;
