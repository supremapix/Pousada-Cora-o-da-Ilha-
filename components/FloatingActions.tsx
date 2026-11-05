import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, Phone, MessageCircle, Share2, Copy, X } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../constants';
import { DEFAULT_OG_IMAGE, SITE_URL } from '../utils/seo';

export const SHARE_MESSAGES = [
  'Conheça a Pousada Coração da Ilha, em Encantadas, na Ilha do Mel.',
  'Planejando a Ilha do Mel? Veja as acomodações da Coração da Ilha.',
  'Uma opção de hospedagem à beira-mar em Encantadas para sua próxima viagem.',
  'Compartilhe com quem vai viajar com você: Pousada Coração da Ilha.',
  'Veja fotos das suítes e do chalé antes de escolher sua hospedagem.',
  'Para organizar a viagem à Ilha do Mel, comece pela escolha da pousada.',
  'Confira os canais de reserva direta da Pousada Coração da Ilha.',
  'Ilha do Mel em família: consulte a capacidade e as condições de cada quarto.',
  'Uma viagem a dois começa com a escolha da acomodação em Encantadas.',
  'Salve esta pousada para consultar disponibilidade nas suas datas.',
  'Da travessia ao descanso: planeje sua estadia em Encantadas.',
  'Conheça a localização da Coração da Ilha na Praia de Encantadas.',
  'Explore o guia da Ilha do Mel e organize seus passeios com tempo.',
  'Consulte a pousada para combinar datas, hóspedes e acomodação.',
  'Leve esta ideia de viagem para o grupo: Ilha do Mel e Coração da Ilha.',
];

export default function FloatingActions({ page }: { page: string }) {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(false);
  const [message, setMessage] = useState(0);
  const [status, setStatus] = useState('');
  const [title, setTitle] = useState('Pousada Coração da Ilha');
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const url = `${SITE_URL}${page}`;
  const text = SHARE_MESSAGES[message];
  const enc = encodeURIComponent;
  useEffect(() => {
    const scroll = () => setTop(window.scrollY > 300);
    scroll(); window.addEventListener('scroll', scroll, { passive: true });
    return () => window.removeEventListener('scroll', scroll);
  }, []);
  useEffect(() => {
    if (open || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setMessage(i => (i + 1) % SHARE_MESSAGES.length), 15000);
    return () => window.clearInterval(timer);
  }, [open]);
  useEffect(() => { setOpen(false); setStatus(''); }, [page]);
  useEffect(() => { if (open) { setTitle(document.title); panel.current?.focus(); } }, [open]);
  const close = () => { setOpen(false); trigger.current?.focus(); };
  const copy = async (value: string) => {
    try { await navigator.clipboard.writeText(value); setStatus('Copiado!'); }
    catch { setStatus('Não foi possível copiar. Selecione o texto abaixo e copie manualmente.'); }
  };
  const links = [
    ['WhatsApp', `https://wa.me/?text=${enc(text + ' ' + url)}`],
    ['Facebook', `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`],
    ['X / Twitter', `https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}`],
    ['Pinterest', `https://pinterest.com/pin/create/button/?url=${enc(url)}&media=${enc(DEFAULT_OG_IMAGE)}&description=${enc(title + ' — ' + text)}`],
    ['LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`],
    ['Threads', `https://www.threads.net/intent/post?text=${enc(text + ' ' + url)}`],
  ];
  return <>
    <div className="site-actions-left" onKeyDown={e => { if (e.key === 'Escape') close(); }}>
      {open && <div ref={panel} tabIndex={-1} className="share-panel" id="share-panel" role="region" aria-label="Compartilhar esta página">
        <button className="share-close" onClick={close} aria-label="Fechar compartilhamento"><X size={20} /></button>
        <h2>Compartilhar esta página</h2><p>{text}</p>
        <div className="share-links">{links.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noopener noreferrer">{name}</a>)}</div>
        <button onClick={() => copy(url)}><Copy size={16} /> Copiar link</button>
        <button onClick={() => copy(`${text}\n${url}`)}><Copy size={16} /> Copiar mensagem</button>
        <p role="status">{status}</p>
        {status.startsWith('Não') && <textarea aria-label="Mensagem para copiar" readOnly value={`${text}\n${url}`} />}
      </div>}
      <button ref={trigger} className="float-action" aria-label="Compartilhar" aria-expanded={open} aria-controls="share-panel" onClick={() => setOpen(v => !v)}><Share2 size={22} /></button>
    </div>
    <div className="site-actions-right">
      {top && <button className="float-action" aria-label="Voltar ao topo" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}><ArrowUp size={22} /></button>}
      <a className="float-action" href={`tel:${PHONE_NUMBER}`} aria-label="Ligar para (41) 3426-9043"><Phone size={22} /></a>
      <a className="float-action whatsapp-action" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${enc('Olá! Gostaria de consultar disponibilidade na Pousada Coração da Ilha.')}`} target="_blank" rel="noopener noreferrer" aria-label="Consultar reservas no WhatsApp"><MessageCircle size={24} /></a>
    </div>
  </>;
}
