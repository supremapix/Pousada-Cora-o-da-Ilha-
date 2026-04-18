export function navigate(href: string, setPage: (p: string) => void) {
  if (href.startsWith('http') || href.startsWith('//')) {
    window.open(href, '_blank', 'noopener noreferrer');
    return;
  }
  const [path, hash] = href.split('#');
  const targetPath = path || '/';
  if (targetPath !== window.location.pathname) {
    window.history.pushState({}, '', targetPath + (hash ? '#' + hash : ''));
    setPage(targetPath.replace(/\/$/, '') || '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (hash) {
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
