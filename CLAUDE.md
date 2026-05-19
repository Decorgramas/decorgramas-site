# Decor Gramas — Contexto do Projeto

## Sobre o projeto
Site institucional estático da **Decor Gramas**, empresa de venda e instalação de grama sintética premium no Vale do Itajaí (SC). Tecnologia: HTML/CSS/JS puro. Sem build, sem framework. Deploy direto do diretório raiz em servidor Apache (`.htaccess`).

**Domínio:** `https://decorgramas.com.br` (sem www — configurado no .htaccess)

## Empresa
- **Produto:** Venda e instalação de grama sintética premium
- **Público:** Proprietários de imóveis e construtoras na região de Brusque, Itajaí e Blumenau
- **Contato:** (47) 99234-5341 · WhatsApp: wa.me/5547992345341
- **Endereço:** R. João Lucio Torrezani, 80, Santa Rita — Brusque, SC
- **Horário:** Seg–Sex 8h–18h · Sáb 8h–12h

## Identidade Visual
- **Paleta:** verde escuro `#0F2A20`, bege `#F7F4ED`, verde claro `#A8C9B5`
- **Tipografia:** Fraunces (display/títulos) + Inter Tight (corpo/UI) — via Google Fonts
- **Tom:** premium, confiável, próximo — não corporativo

---

## Estrutura de Arquivos (Fase 1 — implementada 2026-05-15)

```
Site Decor gramas/
├── .htaccess               — URLs limpas, HTTPS, cache, segurança (Apache)
├── .gitignore
├── CLAUDE.md               — este arquivo
├── README.md
├── index.html              — página principal (home)
├── robots.txt
├── sitemap.xml             — URLs sem .html
│
├── assets/
│   ├── css/
│   │   ├── main.css        — design system completo (tokens, componentes, layout)
│   │   ├── animations.css  — @keyframes e classes .reveal / .reveal-stagger
│   │   └── responsive.css  — @media queries (1100px, 768px, reduced-motion)
│   ├── js/
│   │   ├── main.js         — header scroll, menu mobile, FAQ accordion
│   │   └── animations.js   — IntersectionObserver scroll reveal
│   ├── img/
│   │   ├── hero/           — hero.webp (2 MB — candidato a otimização)
│   │   ├── logo/           — wordmark.png, wordmark-compact.png, wordmark-light.png, etc.
│   │   ├── servicos/       — imagens de serviços (a adicionar)
│   │   ├── cidades/        — imagens de cidades (a adicionar)
│   │   └── projetos/       — fotos de projetos realizados (a adicionar)
│   ├── icons/              — favicons (16, 32, 48, 96, 192, 512px + .ico)
│   └── videos/             — vídeos (a adicionar)
│
├── servicos/               — 6 páginas de serviço
│   ├── grama-sintetica-jardim.html
│   ├── grama-sintetica-decorativa.html
│   ├── grama-sintetica-para-pets.html
│   ├── grama-sintetica-para-piscina.html
│   ├── grama-sintetica-para-varanda.html
│   └── playground-em-grama-sintetica.html
│
├── cidades/                — páginas de cidades (a criar — Fase 2)
├── projetos/               — portfólio de projetos (a criar — Fase 2)
└── blog/                   — blog SEO (a criar — Fase 3)
```

---

## URLs Limpas (configuradas no .htaccess)

O `.htaccess` remove `.html` automaticamente via 301 permanente e serve o arquivo interno:

| URL pública                                       | Arquivo físico                              |
|---------------------------------------------------|---------------------------------------------|
| `decorgramas.com.br/`                             | `index.html`                                |
| `decorgramas.com.br/servicos/grama-sintetica-jardim` | `servicos/grama-sintetica-jardim.html` |
| `decorgramas.com.br/cidades/blumenau`             | `cidades/blumenau.html`                     |

**Regra:** nunca usar `.html` em `<a href>`, canonical, sitemap ou schema.

---

## Referências de Caminho nos HTMLs

- `index.html` → `assets/css/main.css`, `assets/js/main.js`, `assets/img/logo/...`, `assets/icons/...`
- `servicos/*.html` → `../assets/css/main.css`, `../assets/js/main.js`, `../assets/img/logo/...`
- Links internos usam URLs absolutas `/servicos/nome` ou `/` (nunca `../index.html`)

---

## CSS — Design System

### main.css
Tokens CSS em `:root`, reset, tipografia, botões, header, menu mobile, page-hero, breadcrumb, sections, feature blocks, benefits grid, process steps, project cards, FAQ, CTA final, footer, WhatsApp float.

### animations.css
`@keyframes` (fadeUp, fadeIn, pulse, ripple, floatBtn) + classes `.reveal` e `.reveal-stagger` ativadas pelo IntersectionObserver no `animations.js`.

### responsive.css
`@media (max-width: 1100px)`, `@media (max-width: 768px)`, `@media (prefers-reduced-motion: reduce)`.

**Estilos específicos de cada página** ficam em `<style>` inline no próprio HTML (ex: `.hero`, `.specs-strip`).

---

## JS

### main.js
Header scroll → classe `.scrolled`. Menu mobile toggle. FAQ accordion (um item aberto por vez).

### animations.js
`IntersectionObserver` → adiciona `.visible` nos elementos `.reveal` e `.reveal-stagger`.

**JS específico de página** (ex: compare slider da home) fica em `<script>` inline no HTML.

---

## SEO Técnico (Fase 1 entregue)

- **Canonical:** `<link rel="canonical">` em todas as páginas
- **Robots:** `<meta name="robots" content="index, follow">` em todas as páginas
- **Open Graph:** title, description, type, url, image, locale, site_name
- **Twitter Cards:** `summary_large_image`
- **Schema JSON-LD (index.html):** `Organization`, `LocalBusiness`, `WebSite`
- **sitemap.xml:** URLs limpas sem `.html`, seções cidades/blog comentadas (ativar ao publicar)
- **robots.txt:** bloqueia assets (css/js), permite `/assets/img/`
- **Preload:** `hero.webp` com `fetchpriority="high"`, `<link rel="preconnect">` para Google Fonts
- **JS defer:** `main.js` e `animations.js` carregam com `defer`

### Placeholders de Analytics (comentados no index.html)
- **Google Analytics 4:** substituir `G-XXXXXXXXXX` pelo ID real
- **Meta Pixel:** substituir `XXXXXXXXXXXXXXXX` pelo ID real
- **Google Search Console:** verificar via DNS TXT (não requer código no HTML)

---

## .htaccess — Funcionalidades

| Recurso               | Comportamento                                           |
|-----------------------|---------------------------------------------------------|
| HTTPS                 | Redireciona HTTP → HTTPS (301)                          |
| www removal           | Remove www → sem www (301)                              |
| URLs limpas           | Remove `.html` das URLs (301) e serve internamente      |
| Compressão            | GZIP/Deflate em HTML, CSS, JS, SVG, fontes              |
| Cache images/fonts    | 1 ano, imutável                                         |
| Cache CSS/JS          | 1 ano, imutável (versionar URL com ?v= ao atualizar)    |
| Cache HTML            | 1 hora, must-revalidate                                 |
| Segurança             | X-Frame-Options, X-Content-Type, XSS, HSTS, Referrer   |
| Proteção hotlink      | Bloqueia uso das imagens por domínios externos          |
| Directory listing     | `Options -Indexes` (desabilitado)                       |

---

## Roadmap de Fases

### Fase 1 ✅ (2026-05-15) — Fundação técnica
Estrutura profissional, SEO técnico, URLs limpas, .htaccess, CSS/JS organizados, canonical, schema.

### Fase 2 — Expansão de conteúdo
- Páginas de cidades (Brusque, Itajaí, Blumenau, etc.) em `cidades/`
- Portfólio de projetos com fotos reais em `projetos/`
- Página `/sobre` com história e equipe
- Imagens reais em `assets/img/servicos/` e `assets/img/projetos/`
- Otimizar `hero.webp` (2 MB → < 300 KB)
- Configurar GA4 e Meta Pixel

### Fase 3 — Blog e SEO de conteúdo
- Blog em `blog/` com artigos sobre grama sintética
- Schema `Article` e `BlogPosting`
- Link building interno entre serviços, cidades e blog

### Fase 4 — Performance avançada
- Service Worker / PWA básico
- Critical CSS inline
- Lazy loading de componentes pesados
- WebP para todas as imagens com fallback

---

## Notas Importantes

- `hero.webp` tem **2 MB** — prioridade alta para otimização antes de lançar
- O CTA de WhatsApp usa o número `5547992345341` — buscar por `wa.me` para atualizar
- CNPJ no footer está placeholder: `XX.XXX.XXX/0001-XX` — atualizar antes do lançamento
- O `.htaccess` só funciona em Apache — para Nginx, criar equivalente em `nginx.conf`
