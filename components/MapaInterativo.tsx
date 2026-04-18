import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';

type Category = 'all' | 'pousada' | 'atracao' | 'praia' | 'barco';

interface MapPoint {
  lat: number;
  lng: number;
  nome: string;
  cat: Exclude<Category, 'all'>;
  desc: string;
  link?: string;
  destaque?: boolean;
}

const points: MapPoint[] = [
  { lat: -25.5285, lng: -48.3060, nome: 'Pousada Coração da Ilha', cat: 'pousada', desc: 'Única pousada beira-mar em Encantadas. Piscina de frente pro mar, suítes com hidromassagem. WhatsApp: (41) 99900-4808', link: 'https://wa.me/5541999004808', destaque: true },
  { lat: -25.4950, lng: -48.3100, nome: 'Pousada Praia do Farol', cat: 'pousada', desc: 'Excelente localização próxima ao Farol das Conchas.' },
  { lat: -25.4980, lng: -48.3080, nome: 'Astral da Ilha', cat: 'pousada', desc: 'Quartos temáticos e atmosfera zen. Ideal para casais.' },
  { lat: -25.5000, lng: -48.3050, nome: 'Pousada Marimar', cat: 'pousada', desc: 'Conforto, limpeza e ótimo café da manhã.' },
  { lat: -25.5350, lng: -48.3020, nome: 'Gruta das Encantadas', cat: 'atracao', desc: 'Formação rochosa lendária com grutas e piscinas naturais. Um dos pontos mais místicos da ilha.' },
  { lat: -25.4860, lng: -48.3140, nome: 'Fortaleza Nossa Senhora dos Prazeres', cat: 'atracao', desc: 'Único monumento militar português na ilha. Construída em 1767. Vista panorâmica incrível.' },
  { lat: -25.4820, lng: -48.3020, nome: 'Farol das Conchas', cat: 'atracao', desc: 'Farol histórico de 1872. De lá você vê os dois lados da ilha ao mesmo tempo.' },
  { lat: -25.5100, lng: -48.3200, nome: 'Istmo da Ilha do Mel', cat: 'atracao', desc: 'Estreito de areia que separa os dois lados da ilha. Ponto fotográfico único no Brasil.' },
  { lat: -25.5200, lng: -48.3150, nome: 'Trilha das Encantadas', cat: 'atracao', desc: 'Trilha ecológica pela Mata Atlântica preservada. Fauna e flora exuberantes.' },
  { lat: -25.5280, lng: -48.3055, nome: 'Praia de Encantadas', cat: 'praia', desc: 'Mar calmo, ideal para mergulho raso. Onde ficam os golfinhos! Perto da Pousada Coração da Ilha.' },
  { lat: -25.4900, lng: -48.3180, nome: 'Praia de Fora', cat: 'praia', desc: 'Mar aberto com ondas. Preferida pelos surfistas. Vista para o oceano Atlântico.' },
  { lat: -25.5050, lng: -48.3220, nome: 'Praia do Miguel', cat: 'praia', desc: 'Tranquila, menos frequentada. Ideal para quem busca sossego.' },
  { lat: -25.4970, lng: -48.3040, nome: 'Praia de Nova Brasília', cat: 'praia', desc: 'Principal praia da vila de Nova Brasília. Ponto de chegada dos barcos.' },
  { lat: -25.5310, lng: -48.3040, nome: 'Cais de Encantadas', cat: 'barco', desc: 'Ponto de chegada/saída dos barcos em Encantadas. Saem de Pontal do Paraná.' },
  { lat: -25.4950, lng: -48.3110, nome: 'Cais de Nova Brasília', cat: 'barco', desc: 'Principal porto da ilha. Chegada dos barcos de Pontal do Paraná.' },
];

const catConfig: Record<Exclude<Category, 'all'>, { color: string; label: string; emoji: string }> = {
  pousada: { color: '#1A6B5A', label: 'Pousadas', emoji: '🏨' },
  atracao: { color: '#0D4F6C', label: 'Atrações', emoji: '🔵' },
  praia:   { color: '#E8C96B', label: 'Praias',   emoji: '🏖️' },
  barco:   { color: '#E07030', label: 'Embarque', emoji: '⛵' },
};

const catLabels: Record<Category, string> = {
  all:     'Todos',
  pousada: 'Pousadas',
  atracao: 'Atrações',
  praia:   'Praias',
  barco:   'Embarque',
};

function makeSvgIcon(color: string, size = 32, pulse = false): string {
  const s = pulse ? size + 8 : size;
  return `
    <svg width="${s}" height="${s + 6}" viewBox="0 0 ${s} ${s + 6}" xmlns="http://www.w3.org/2000/svg">
      ${pulse ? `<circle cx="${s / 2}" cy="${s / 2}" r="${s / 2}" fill="${color}" opacity="0.25"><animate attributeName="r" from="${s / 2}" to="${s}" dur="1.5s" repeatCount="indefinite"/><animate attributeName="opacity" from="0.25" to="0" dur="1.5s" repeatCount="indefinite"/></circle>` : ''}
      <circle cx="${s / 2}" cy="${s / 2}" r="${s / 2 - 2}" fill="${color}" stroke="white" stroke-width="2.5"/>
      <polygon points="${s / 2},${s + 2} ${s / 2 - 5},${s - 4} ${s / 2 + 5},${s - 4}" fill="${color}"/>
    </svg>
  `;
}

const MapaInterativo: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<unknown>(null);
  const markersRef = useRef<unknown[]>([]);
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [activePoint, setActivePoint] = useState<MapPoint | null>(null);
  const [leafletLoaded, setLeafletLoaded] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => setLeafletLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!leafletLoaded || !mapRef.current) return;
    const L = (window as unknown as { L: unknown }).L as {
      map: (el: HTMLDivElement, opts: object) => unknown;
      tileLayer: (url: string, opts: object) => { addTo: (m: unknown) => void };
      divIcon: (opts: object) => unknown;
      marker: (coords: [number, number], opts: object) => {
        addTo: (m: unknown) => unknown;
        bindPopup: (html: string, opts?: object) => unknown;
        on: (event: string, fn: () => void) => unknown;
        getLatLng: () => { lat: number; lng: number };
        _map?: unknown;
      };
    };

    if (leafletMap.current) return;

    const map = L.map(mapRef.current, {
      center: [-25.5100, -48.3100],
      zoom: 13,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '© OpenStreetMap © CARTO',
      maxZoom: 18,
    }).addTo(map);

    leafletMap.current = map;

    points.forEach((pt) => {
      const cfg = catConfig[pt.cat];
      const size = pt.destaque ? 38 : 28;
      const icon = L.divIcon({
        html: makeSvgIcon(cfg.color, size, pt.destaque),
        iconSize: [size, size + 6],
        iconAnchor: [size / 2, size + 6],
        popupAnchor: [0, -(size + 6)],
        className: '',
      });

      const popupHtml = `
        <div style="font-family:Inter,sans-serif;min-width:200px;max-width:260px">
          <div style="background:${cfg.color};color:white;padding:8px 12px;border-radius:8px 8px 0 0;font-weight:900;font-size:13px;line-height:1.3">
            ${cfg.emoji} ${pt.nome}
          </div>
          <div style="padding:10px 12px;background:#fff;border-radius:0 0 8px 8px">
            <p style="color:#444;font-size:12px;margin:0 0 10px;line-height:1.5">${pt.desc}</p>
            ${pt.link ? `<a href="${pt.link}" target="_blank" rel="noreferrer" style="display:inline-block;background:#1A6B5A;color:white;font-weight:900;font-size:11px;padding:6px 14px;border-radius:20px;text-decoration:none">Reservar via WhatsApp</a>` : ''}
          </div>
        </div>
      `;

      const marker = L.marker([pt.lat, pt.lng], { icon })
        .addTo(map)
        .bindPopup(popupHtml, { maxWidth: 280, className: 'ilha-popup' });

      marker.on('click', () => setActivePoint(pt));

      markersRef.current.push(marker);
    });
  }, [leafletLoaded]);

  const focusPousada = () => {
    const L = (window as unknown as { L: unknown }).L as {
      latLng: (lat: number, lng: number) => unknown;
    };
    const map = leafletMap.current as {
      setView: (coords: unknown, zoom: number, opts: object) => void;
    };
    if (!map || !L) return;
    const pousada = points.find((p) => p.destaque);
    if (!pousada) return;
    map.setView(L.latLng(pousada.lat, pousada.lng), 16, { animate: true });
    const marker = markersRef.current[0] as { openPopup: () => void };
    marker?.openPopup?.();
    setActivePoint(pousada);
  };

  const filteredPoints = activeFilter === 'all' ? points : points.filter((p) => p.cat === activeFilter);

  return (
    <section id="mapa" className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#E8C96B] text-xs font-black uppercase tracking-[0.3em]">Mapa Interativo</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-3">Explore a Ilha do Mel</h2>
          <p className="text-gray-400 max-w-lg mx-auto">Clique nos marcadores para descobrir cada cantinho do paraíso</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {(Object.keys(catLabels) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs font-black uppercase tracking-wider px-5 py-2 rounded-full border transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-[#1A6B5A] border-[#1A6B5A] text-white'
                  : 'border-white/20 text-gray-400 hover:border-white/40 hover:text-white'
              }`}
            >
              {cat !== 'all' && catConfig[cat as Exclude<Category, 'all'>].emoji + ' '}
              {catLabels[cat]}
            </button>
          ))}
          <button
            onClick={focusPousada}
            className="text-xs font-black uppercase tracking-wider px-5 py-2 rounded-full border border-[#E8C96B]/50 text-[#E8C96B] hover:bg-[#E8C96B] hover:text-[#1C1C1C] transition-all duration-200 flex items-center gap-2"
          >
            <Navigation size={12} />
            Ver a Pousada
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
              style={{ height: '520px' }}
              ref={mapRef}
            />
            {!leafletLoaded && (
              <div className="flex items-center justify-center h-[520px] bg-white/5 rounded-2xl border border-white/10">
                <div className="text-center">
                  <div className="w-10 h-10 border-2 border-[#1A6B5A] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-gray-400 text-sm">Carregando mapa…</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 max-h-[520px] overflow-y-auto pr-1 scrollbar-thin">
            {filteredPoints.map((pt, i) => {
              const cfg = catConfig[pt.cat];
              const isActive = activePoint?.nome === pt.nome;
              return (
                <div
                  key={i}
                  onClick={() => {
                    setActivePoint(pt);
                    const map = leafletMap.current as {
                      setView: (coords: unknown, zoom: number, opts: object) => void;
                    };
                    const L = (window as unknown as { L: unknown }).L as {
                      latLng: (lat: number, lng: number) => unknown;
                    };
                    if (map && L) {
                      map.setView(L.latLng(pt.lat, pt.lng), 15, { animate: true });
                    }
                  }}
                  className={`cursor-pointer rounded-xl p-4 border transition-all duration-200 ${
                    isActive
                      ? 'border-[#1A6B5A] bg-[#1A6B5A]/10'
                      : 'border-white/8 bg-white/4 hover:border-white/20 hover:bg-white/7'
                  } ${pt.destaque ? 'ring-1 ring-[#E8C96B]/30' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm"
                      style={{ background: cfg.color + '33', border: `1.5px solid ${cfg.color}` }}
                    >
                      {cfg.emoji}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-white text-sm leading-snug truncate">
                        {pt.nome}
                        {pt.destaque && <span className="ml-2 text-[#E8C96B] text-[10px] font-black">⭐ DESTAQUE</span>}
                      </div>
                      <div className="text-gray-400 text-xs mt-0.5 line-clamp-2 leading-relaxed">{pt.desc}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          {(Object.keys(catConfig) as Exclude<Category, 'all'>[]).map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: catConfig[cat].color }}
              />
              <span className="text-xs text-gray-400 font-bold">{catConfig[cat].label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapaInterativo;
