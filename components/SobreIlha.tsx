import React from 'react';
import { Leaf, Car, Waves, TreePine, Calendar, Map } from 'lucide-react';

const quickFacts = [
  { icon: <Map size={16} />, value: '2.700 ha', label: 'Extensão total' },
  { icon: <Leaf size={16} />, value: '95%', label: 'Área preservada' },
  { icon: <Waves size={16} />, value: '+20', label: 'Praias paradisíacas' },
  { icon: <Car size={16} />, value: 'Sem carros', label: 'Apenas trilhas' },
  { icon: <Calendar size={16} />, value: '1767', label: 'Fundada por Portugal' },
  { icon: <TreePine size={16} />, value: 'Litoral PR', label: 'Sul do Brasil' },
];

const SobreIlha: React.FC = () => (
  <section className="py-24 bg-[#F5F0E8]">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#1A6B5A] text-xs font-black uppercase tracking-[0.3em]">Sobre a Ilha</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1C1C1C] mt-4 mb-6 leading-tight">
            Um Paraíso Ecológico<br />
            <span className="text-[#1A6B5A]">Protegido pela Natureza</span>
          </h2>
          <p className="text-[#444] leading-relaxed mb-6 text-base">
            A Ilha do Mel é um paraíso ecológico no litoral do Paraná, uma das ilhas mais preservadas do Brasil. Com apenas 2.700 hectares, ela é 95% área de proteção ambiental. Não há carros, não há asfalto — apenas trilhas, praias paradisíacas e um ritmo de vida que você só encontra aqui.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 border border-[#1A6B5A]/10 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D4F6C]/10 flex items-center justify-center">
                  <Waves size={18} className="text-[#0D4F6C]" />
                </div>
                <span className="font-black text-[#0D4F6C] text-base">Encantadas</span>
              </div>
              <p className="text-[#555] text-sm leading-relaxed">Mar calmo, bares, movimento, golfinhos e os pôres do sol mais bonitos da ilha. Onde fica a Pousada Coração da Ilha.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-[#1A6B5A]/10 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#1A6B5A]/10 flex items-center justify-center">
                  <TreePine size={18} className="text-[#1A6B5A]" />
                </div>
                <span className="font-black text-[#1A6B5A] text-base">Nova Brasília</span>
              </div>
              <p className="text-[#555] text-sm leading-relaxed">Trilhas pela Mata Atlântica, farol histórico e uma tranquilidade que convida à introspecção e descanso total.</p>
            </div>
          </div>
          <div className="bg-[#1A6B5A] text-white text-sm font-bold py-3 px-6 rounded-xl inline-block">
            Patrimônio Ambiental reconhecido pelo Governo do Paraná
          </div>
        </div>

        <div>
          <div
            className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(26,107,90,0.2)] mb-8"
            style={{ aspectRatio: '4/3' }}
          >
            <img
              src="/images/acomodacao-3.jpg"
              alt="Vista aérea da Ilha do Mel, Paraná"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {quickFacts.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 text-center border border-[#1A6B5A]/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-1 text-[#1A6B5A]">{f.icon}</div>
                <div className="font-black text-[#1C1C1C] text-sm">{f.value}</div>
                <div className="text-[#888] text-[10px] leading-tight mt-0.5">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SobreIlha;
