# Pousada Coração da Ilha

Site React + Vite em português, com pré-renderização estática de todas as páginas.

## Desenvolvimento e verificação

- `npm ci`
- `npm run dev`
- `npm run build`
- `npm run check`

Não requer chave de IA ou segredo no cliente. O build gera páginas HTML, metadados, JSON-LD e sitemap a partir da mesma fonte usada na navegação.

## Conteúdo

`data/blogPosts.ts` reúne os artigos editoriais e os guias de cidades em `data/travelGuides.ts`. Os 151 guias descrevem corredores de planejamento, não rotas com trânsito ao vivo nem serviços de transporte garantidos. Atualize fontes e datas ao rever serviços. Não publique tarifas ou horários sem confirmação atual.

`utils/blogSeo.ts` e `utils/pageSeo.ts` são as fontes dos metadados; `scripts/routes.ts` gera a lista de rotas. Ícones mantêm a identidade da pousada, com ICO, PNG 96px, Apple touch e manifest Android. O conjunto segue recomendações aplicáveis do RealFaviconGenerator sem representar uma certificação do serviço.

## Publicação

O projeto Vercel ligado ao repositório usa `npm run build` e a pasta `dist`. Verifique `npm run check` antes de publicar. `vercel.json` preserva URLs limpas e a página 404 estática.
