import React, { useEffect, useRef, useState } from 'react';
import { Navigation } from 'lucide-react';
import { MAPS_LINK } from '../constants';

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

interface LeafletMarker {
  addTo: (map: unknown) => LeafletMarker;
  bindPopup: (html: string, options?: object) => LeafletMarker;
  on: (event: string, callback: () => void) => LeafletMarker;
}

const points: MapPoint[] = [
  { lat: -25.5285, lng: -48.3060, nome: 'Pousada Coração da Ilha', cat: 'pousada', desc: 'Pousada na Praia de Encantadas. Consulte fotos, capacidade e itens de cada acomodação. WhatsApp: (41) 99900-4808', link: 'https://wa.me/5541999004808', destaque: true },
  { lat: -25.4950, lng: -48.3100, nome: 'Pousada Praia do Farol', cat: 'pousada', desc: 'Consulte localização e informações diretamente com esta hospedagem.' },
  { lat: -25.4980, lng: -48.3080, nome: 'Astral da Ilha', cat: 'pousada', desc: 'Quartos temáticos e atmosfera zen. Ideal para casais.' },
  { lat: -25.5000, lng: -48.3050, nome: 'Pousada Marimar', cat: 'pousada', desc: 'Consulte acomodações e condições diretamente com esta hospedagem.' },
  { lat: -25.5350, lng: -48.3020, nome: 'Gruta das Encantadas', cat: 'atracao', desc: 'Atrativo da região de Encantadas. Verifique as condições de acesso e respeite a sinalização.' },
  { lat: -25.4860, lng: -48.3140, nome: 'Fortaleza Nossa Senhora dos Prazeres', cat: 'atracao', desc: 'Único monumento militar português na ilha. Construída em 1767. Vista panorâmica incrível.' },
  { lat: -25.4820, lng: -48.3020, nome: 'Farol das Conchas', cat: 'atracao', desc: 'Farol histórico de 1872. De lá você vê os dois lados da ilha ao mesmo tempo.' },
  { lat: -25.5100, lng: -48.3200, nome: 'Istmo da Ilha do Mel', cat: 'atracao', desc: 'Faixa estreita de terra da ilha. Respeite as áreas sinalizadas durante a visita.' },
  { lat: -25.5200, lng: -48.3150, nome: 'Trilha das Encantadas', cat: 'atracao', desc: 'Trilha ecológica pela Mata Atlântica preservada. Fauna e flora exuberantes.' },
  { lat: -25.5280, lng: -48.3055, nome: 'Praia de Encantadas', cat: 'praia', desc: 'Praia na região da Pousada Coração da Ilha. Observe as condições do mar e a sinalização antes de entrar na água.' },
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
  const [mapReady, setMapReady] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);

  useEffect(() => {
    let disposed = false;
    let styleReady = false;
    let scriptReady = false;
    const fail = () => { if (!disposed) setLoadError(true); };
    const timeout = window.setTimeout(fail, 20_000);
    const checkReady = () => {
      if (!disposed && styleReady && scriptReady) {
        window.clearTimeout(timeout);
        setLeafletLoaded(true);
      }
    };
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.onload = () => { styleReady = true; checkReady(); };
    link.onerror = fail;
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => { scriptReady = true; checkReady(); };
    script.onerror = fail;
    document.head.appendChild(script);

    return () => {
      disposed = true;
      window.clearTimeout(timeout);
      link.onload = link.onerror = null;
      script.onload = script.onerror = null;
      link.remove();
      script.remove();
    };
  }, [loadAttempt]);

  useEffect(() => {
    if (!leafletLoaded || !mapRef.current) return;
    const L = (window as unknown as { L: unknown }).L as {
      map: (el: HTMLDivElement, opts: object) => { remove: () => void };
      tileLayer: (url: string, opts: object) => { on: (event: string, callback: () => void) => void; addTo: (m: unknown) => void };
      divIcon: (opts: object) => unknown;
      marker: (coords: [number, number], opts: object) => LeafletMarker;
    };

    if (leafletMap.current) return;

    let disposed = false;
    let map: { remove: () => void } | null = null;
    const fail = () => { if (!disposed) setLoadError(true); };
    const timeout = window.setTimeout(fail, 20_000);
    try {
      map = L.map(mapRef.current, {
        center: [-25.5100, -48.3100],
        zoom: 13,
        scrollWheelZoom: false,
      });

      const tiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap © CARTO',
        maxZoom: 18,
      });
      tiles.on('load', () => {
        if (!disposed) {
          window.clearTimeout(timeout);
          setMapReady(true);
        }
      });
      tiles.on('tileerror', fail);
      tiles.addTo(map);

      leafletMap.current = map;

      points.forEach((pt) => {
        const cfg = catConfig[pt.cat];
        const size = pt.destaque ? 38 : 28;
        const icon = L.divIcon({
          html: makeSvgIcon(cfg.color, size, false),
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

        const marker = L.marker([pt.lat, pt.lng], { icon, title: pt.nome, alt: pt.nome })
          .addTo(map)
          .bindPopup(popupHtml, { maxWidth: 280, className: 'ilha-popup' });

        marker.on('click', () => setActivePoint(pt));

        markersRef.current.push(marker);
      });
    } catch {
      fail();
    }
    return () => {
      disposed = true;
      window.clearTimeout(timeout);
      map?.remove();
      leafletMap.current = null;
      markersRef.current = [];
    };
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
          <p className="text-gray-400 max-w-lg mx-auto">Mapa ilustrativo com posições aproximadas; não use os marcadores para orientar a chegada.</p>
        </div>

        <p className="text-center mb-6"><a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-lime underline">Abrir localização da pousada no Google Maps</a></p>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {(Object.keys(catLabels) as Category[]).map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={activeFilter === cat}
              aria-controls="map-results"
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
            type="button"
            disabled={!mapReady || loadError}
            onClick={focusPousada}
            className="text-xs font-black uppercase tracking-wider px-5 py-2 rounded-full border border-[#E8C96B]/50 text-[#E8C96B] hover:bg-[#E8C96B] hover:text-[#1C1C1C] transition-all duration-200 flex items-center gap-2"
          >
            <Navigation size={12} />
            Ver a Pousada
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-white/10" role="region" aria-label="Mapa ilustrativo da Ilha do Mel" aria-busy={!mapReady && !loadError}>
            <div
              className="shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
              style={{ height: '520px' }}
              ref={mapRef}
              inert={!mapReady || loadError}
              aria-hidden={!mapReady || loadError}
            />
            {(!mapReady || loadError) && (
              <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-[#0a1628] p-6">
                <div className="text-center">
                  {loadError ? (
                    <>
                      <p role="alert" className="text-gray-300 text-sm mb-4">Não foi possível carregar o mapa. A lista de lugares continua disponível.</p>
                      <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="block text-lime underline mb-4">Abrir localização da pousada no Google Maps</a>
                      <button type="button" onClick={() => {
                        setLeafletLoaded(false);
                        setMapReady(false);
                        setLoadError(false);
                        setLoadAttempt(attempt => attempt + 1);
                      }} className="text-white underline">Tentar carregar novamente</button>
                    </>
                  ) : (
                    <>
                      <div aria-hidden="true" className="w-10 h-10 border-2 border-[#1A6B5A] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                      <p role="status" className="text-gray-400 text-sm">Carregando mapa…</p>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          <div id="map-results" role="group" aria-label="Lugares na Ilha do Mel" className="flex flex-col gap-3 max-h-[520px] overflow-y-auto pr-1 scrollbar-thin">
            {filteredPoints.map((pt) => {
              const cfg = catConfig[pt.cat];
              const isActive = activePoint?.nome === pt.nome;
              return (
                <button
                  type="button"
                  aria-pressed={isActive}
                  key={pt.nome}
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
                  className={`text-left cursor-pointer rounded-xl p-4 border transition-all duration-200 ${
                    isActive
                      ? 'border-[#1A6B5A] bg-[#1A6B5A]/10'
                      : 'border-white/8 bg-white/4 hover:border-white/20 hover:bg-white/7'
                  } ${pt.destaque ? 'ring-1 ring-[#E8C96B]/30' : ''}`}
                >
                  <span className="flex items-start gap-3">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm"
                      style={{ background: cfg.color + '33', border: `1.5px solid ${cfg.color}` }}
                    >
                      {cfg.emoji}
                    </span>
                    <span className="block min-w-0">
                      <span className="block font-bold text-white text-sm leading-snug truncate">
                        {pt.nome}
                        {pt.destaque && <span className="ml-2 text-[#E8C96B] text-[10px] font-black">⭐ DESTAQUE</span>}
                      </span>
                      <span className="block text-gray-400 text-xs mt-0.5 line-clamp-2 leading-relaxed">{pt.desc}</span>
                    </span>
                  </span>
                </button>
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
