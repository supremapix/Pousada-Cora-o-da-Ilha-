import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve('dist');
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
assert.equal(urls.length,18);
const blogIndex=fs.readFileSync(path.join(root,'blog/index.html'),'utf8');
for(const url of urls.filter(url=>new URL(url).pathname.startsWith('/blog/'))) assert(blogIndex.includes(`href="${new URL(url).pathname}"`),`Missing blog link: ${url}`);
const titles=new Set();
for(const url of urls){
 const pathname=new URL(url).pathname;
 const html=fs.readFileSync(path.join(root,pathname,'index.html'),'utf8');
 const canonical=[...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)];
 assert.equal(canonical.length,1,url);assert.equal(canonical[0][1],url);
 assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length,1,url);
 const title=html.match(/<title>(.*?)<\/title>/)[1];assert(!titles.has(title));titles.add(title);
 assert(html.includes('Suprema Sites Express'));assert(html.includes('site-actions-right'));
 assert(html.includes('/images/og-pousada.jpg'));assert(!html.includes('cdn.tailwindcss.com'));
 assert(!html.includes('EventScheduled'));assert(!html.includes('SearchAction'));
 for(const match of html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)) JSON.parse(match[1]);
 for(const match of html.matchAll(/(?:src|href)="(\/(?:images|assets)\/[^"?#]+)"/g)) assert(fs.existsSync(path.join(root,decodeURIComponent(match[1]).replaceAll('&amp;','&'))),`${url}: missing ${match[1]}`);
 for(const match of html.matchAll(/href="(\/[^"?#]*)/g)) {
  const href=match[1];if(path.extname(href))continue;
  assert(fs.existsSync(path.join(root,href,'index.html')),`${url}: broken internal link ${href}`);
 }
}
assert(fs.existsSync(path.join(root,'404.html')));
for(const file of ['favicon.ico','favicon-16x16.png','favicon-32x32.png','apple-touch-icon.png','android-chrome-192x192.png','android-chrome-512x512.png','site.webmanifest']) assert(fs.existsSync(path.join(root,file)));
console.log('PASS: 18 static pages; unique titles; one H1/self-canonical each; internal links; images; JSON-LD; sharing image; icons; 404.');
