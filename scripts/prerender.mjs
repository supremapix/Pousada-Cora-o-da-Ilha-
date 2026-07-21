/**
 * Prerender estático pós-build (100% local, sem dependências de terceiros).
 *
 * Para cada rota conhecida, gera um dist/<rota>/index.html com o <head>
 * (title, meta description, canonical, Open Graph, Twitter e JSON-LD) já
 * preenchido e, no blog, com o conteúdo do artigo embutido no #root.
 * Assim, Google e LLMs recebem os sinais de SEO e o texto sem executar JS,
 * enquanto a SPA React continua assumindo o controle no cliente.
 *
 * Usa o esbuild (já presente como dependência do Vite) para transpilar o
 * manifesto de rotas em TypeScript no momento do build.
 */
import { build } from 'esbuild';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

async function loadRoutes() {
  const tmpFile = path.join(os.tmpdir(), `routes-${Date.now()}.mjs`);
  await build({
    entryPoints: [path.join(__dirname, 'routes.ts')],
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile: tmpFile,
    logLevel: 'silent',
  });
  const mod = await import(pathToFileURL(tmpFile).href);
  fs.rmSync(tmpFile, { force: true });
  return mod.getRoutes();
}

/** JSON-LD seguro: evita quebrar o </script> com conteúdo malicioso/acentos. */
const jsonLdScript = (obj) =>
  `<script type="application/ld+json" data-managed-jsonld="true">${JSON.stringify(obj).replace(
    /</g,
    '\\u003c'
  )}</script>`;

const escAttr = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function buildHead(route) {
  const meta = [
    `<title>${escText(route.title)}</title>`,
    `<meta name="description" content="${escAttr(route.description)}" />`,
    `<link rel="canonical" href="${escAttr(route.canonical)}" />`,
    `<meta property="og:title" content="${escAttr(route.title)}" />`,
    `<meta property="og:description" content="${escAttr(route.description)}" />`,
    `<meta property="og:image" content="${escAttr(route.ogImage)}" />`,
    `<meta property="og:url" content="${escAttr(route.canonical)}" />`,
    `<meta property="og:type" content="${route.ogType}" />`,
    `<meta property="og:site_name" content="Pousada Coração da Ilha" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escAttr(route.title)}" />`,
    `<meta name="twitter:description" content="${escAttr(route.description)}" />`,
    `<meta name="twitter:image" content="${escAttr(route.ogImage)}" />`,
  ];
  const jsonLd = (route.jsonLd || []).map(jsonLdScript);
  return [...meta, ...jsonLd].join('\n    ');
}

/** Remove as tags de SEO já presentes no shell para evitar duplicidade. */
function stripManagedHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name=["']description["'][^>]*>/gi, '')
    .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '')
    .replace(/<meta\s+property=["']og:[^"']*["'][^>]*>/gi, '')
    .replace(/<meta\s+name=["']twitter:[^"']*["'][^>]*>/gi, '')
    .replace(/<script[^>]*data-managed-jsonld=["']true["'][^>]*>[\s\S]*?<\/script>/gi, '');
}

function renderRoute(shell, route) {
  let html = stripManagedHead(shell);
  html = html.replace(/<\/head>/i, `    ${buildHead(route)}\n  </head>`);
  if (route.bodyHtml) {
    html = html.replace(
      /<div id="root">\s*<\/div>/i,
      `<div id="root">${route.bodyHtml}</div>`
    );
  }
  return html;
}

function writeRoute(route, html) {
  const target =
    route.path === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.path, 'index.html');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html, 'utf8');
  return path.relative(distDir, target);
}

async function main() {
  const shellPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(shellPath)) {
    console.error('[prerender] dist/index.html não encontrado. Rode "vite build" antes.');
    process.exit(1);
  }
  const shell = fs.readFileSync(shellPath, 'utf8');
  const routes = await loadRoutes();

  let count = 0;
  for (const route of routes) {
    const html = renderRoute(shell, route);
    const rel = writeRoute(route, html);
    count += 1;
    console.log(`[prerender] ${route.path} -> ${rel}`);
  }
  console.log(`[prerender] ${count} rotas pré-renderizadas.`);
}

main().catch((err) => {
  console.error('[prerender] falhou:', err);
  process.exit(1);
});
