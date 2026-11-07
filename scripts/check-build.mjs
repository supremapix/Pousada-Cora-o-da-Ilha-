import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
const root = path.resolve('dist');
const dataFile = path.resolve(`.check-data-${Date.now()}.mjs`);
let posts;
try {
 await build({ entryPoints: ['data/blogPosts.ts'], outfile: dataFile, bundle: true, format: 'esm', platform: 'node', logLevel: 'silent' });
 posts = (await import(pathToFileURL(dataFile).href)).BLOG_POSTS;
} finally { fs.rmSync(dataFile, { force: true }); }
const cities = posts.filter(post => post.travel);
assert.equal(cities.length, 151, 'Exactly 151 city guides');
assert.equal(new Set(cities.map(post => `${post.travel.city}-${post.travel.state}`)).size, 151, 'Unique cities');
assert.equal(new Set(posts.map(post => post.slug)).size, posts.length, 'Unique slugs');
assert.equal(new Set(cities.map(post => post.content.map(block => block.text || block.items?.join(' ')).join(' '))).size, 151, 'Distinct article bodies');
for (const post of cities) {
 assert(post.sources?.length >= 2, `${post.slug}: sources`);
 assert(post.content.some(block => block.type === 'h2'), `${post.slug}: sections`);
 assert(post.content.map(block => block.text || block.items?.join(' ')).join(' ').includes(post.travel.city), `${post.slug}: local content`);
 assert(post.faq.length >= 2, `${post.slug}: useful FAQs`);
 for (const source of post.sources) assert(source.url.startsWith('https://'), 'HTTPS source link');
 for (const slug of post.related) assert(posts.some(other => other.slug === slug), `${post.slug}: related ${slug}`);
}
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(urls.length, posts.length + 8);
assert.equal(new Set(urls).size, urls.length);
const blogIndex = fs.readFileSync(path.join(root, 'blog/index.html'), 'utf8');
const siteMap = fs.readFileSync(path.join(root, 'mapa-do-site/index.html'), 'utf8');
for (const post of posts) {
 assert(blogIndex.includes(`href="/blog/${post.slug}"`), `Blog link: ${post.slug}`);
 assert(siteMap.includes(`href="/blog/${post.slug}"`), `HTML sitemap link: ${post.slug}`);
}
const titles = new Set();
const descriptions = new Set();
const pages = new Map(urls.map(url => [new URL(url).pathname, fs.readFileSync(path.join(root, new URL(url).pathname, 'index.html'), 'utf8')]));
for (const url of urls) {
 const pathname = new URL(url).pathname;
 const html = pages.get(pathname);
 const canonical = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)];
 assert.equal(canonical.length, 1, url); assert.equal(canonical[0][1], url);
 assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `${url}: H1`);
 assert.equal([...html.matchAll(/<main(?:\s|>)/g)].length, 1, `${url}: main`);
 const title = html.match(/<title>(.*?)<\/title>/)[1]; assert(!titles.has(title), `${url}: title`); titles.add(title);
 const description = html.match(/<meta name="description" content="([^"]*)"/)[1]; assert(!descriptions.has(description), `${url}: description`); descriptions.add(description);
 assert(html.includes('Suprema Sites Express')); assert(html.includes('site-actions-right'));
 assert(html.includes('/images/og-pousada.jpg')); assert(!html.includes('cdn.tailwindcss.com'));
 assert(!html.includes('EventScheduled')); assert(!html.includes('SearchAction'));
 assert(html.includes('href="#conteudo"')); assert(html.includes('id="conteudo"'));
 const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
 assert.equal(new Set(ids).size, ids.length, `${url}: duplicate IDs`);
 for (const match of html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)) JSON.parse(match[1]);
 for (const match of html.matchAll(/(?:src|href)="(\/(?:images|assets)\/[^"?#]+)"/g)) assert(fs.existsSync(path.join(root, decodeURIComponent(match[1]).replaceAll('&amp;', '&'))), `${url}: missing ${match[1]}`);
 for (const match of html.matchAll(/<img\b[^>]*>/g)) assert(/\balt="[^"]*"/.test(match[0]), `${url}: missing image alt`);
 for (const match of html.matchAll(/href="((?:\/|#)[^"?]*)"/g)) {
  const [href, hash] = match[1].split('#');
  if (path.extname(href)) continue;
  const targetPath = href || pathname;
  assert(pages.has(targetPath), `${url}: broken internal link ${href}`);
  if (hash) assert(pages.get(targetPath).includes(`id="${hash}"`), `${url}: broken anchor ${match[1]}`);
 }
 for (const file of ['favicon.ico', 'favicon-96x96.png', 'apple-touch-icon.png', 'site.webmanifest']) assert(html.includes(`/${file}`), `${url}: icon link ${file}`);
}
assert(fs.existsSync(path.join(root, '404.html')));
assert(fs.readFileSync(path.join(root, '404.html'), 'utf8').includes('noindex'));
for (const file of ['favicon.ico', 'favicon-16x16.png', 'favicon-32x32.png', 'favicon-96x96.png', 'apple-touch-icon.png', 'android-chrome-192x192.png', 'android-chrome-512x512.png', 'site.webmanifest']) assert(fs.existsSync(path.join(root, file)));
for (const icon of JSON.parse(fs.readFileSync(path.join(root, 'site.webmanifest'), 'utf8')).icons) assert(fs.existsSync(path.join(root, icon.src)));
console.log(`PASS: ${urls.length} static pages, ${cities.length} unique city guides, all blog/sitemap links, one main/H1/self-canonical each, unique titles/descriptions, IDs, anchors, image alts/assets, JSON-LD, sources, icons and 404.`);
