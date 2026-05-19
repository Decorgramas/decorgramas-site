# Decor Gramas — Mapa Arquitetural do Site

> Documento estrutural para base do processo de modernização visual.
> **Escopo:** arquitetura, navegação, fluxos e SEO. Sem implementação.

---

## 1. Inventário de Páginas Atual

| # | URL pública | Arquivo | Tipo | Status |
|---|-------------|---------|------|--------|
| 1 | `/` | `index.html` | Home | ✅ Ativo |
| 2 | `/sobre` | `sobre.html` | Institucional | ✅ Ativo |
| 3 | `/projetos` | `projetos.html` | Portfólio | ✅ Ativo |
| 4 | `/servicos/grama-sintetica-jardim` | `servicos/...html` | Serviço | ✅ Ativo |
| 5 | `/servicos/grama-sintetica-decorativa` | `servicos/...html` | Serviço | ✅ Ativo |
| 6 | `/servicos/grama-sintetica-para-pets` | `servicos/...html` | Serviço | ✅ Ativo |
| 7 | `/servicos/grama-sintetica-para-piscina` | `servicos/...html` | Serviço | ✅ Ativo |
| 8 | `/servicos/grama-sintetica-para-varanda` | `servicos/...html` | Serviço | ✅ Ativo |
| 9 | `/servicos/playground-em-grama-sintetica` | `servicos/...html` | Serviço | ✅ Ativo |
| 10 | `/cidades/grama-sintetica-brusque` | `cidades/...html` | SEO Local | ✅ Ativo |
| 11 | `/cidades/grama-sintetica-itajai` | `cidades/...html` | SEO Local | ✅ Ativo |
| 12 | `/cidades/grama-sintetica-blumenau` | `cidades/...html` | SEO Local | ✅ Ativo |
| 13 | `/cidades/grama-sintetica-balneario-camboriu` | `cidades/...html` | SEO Local | ✅ Ativo |
| 14 | `/cidades/grama-sintetica-gaspar` | `cidades/...html` | SEO Local | ✅ Ativo |
| 15 | `/cidades/grama-sintetica-timbo` | `cidades/...html` | SEO Local | ✅ Ativo |
| 16 | `/cidades/grama-sintetica-pomerode` | `cidades/...html` | SEO Local | ✅ Ativo |
| 17 | `/cidades/grama-sintetica-itapema` | `cidades/...html` | SEO Local | ✅ Ativo |
| — | `/blog` | `blog/` | Blog SEO | 🔲 Não implementado |
| — | `/contato` | — | Conversão | 🔲 Não existe |
| — | `/orcamento` | — | Landing | 🔲 Não existe |
| — | `/404` | — | Erro | 🔲 Não existe |

**Total atual:** 17 páginas HTML ativas + blog/contato pendentes.

---

## 2. Hierarquia Macro (Árvore do Site)

```
decorgramas.com.br
│
├── /                          HOME
│   ├── #aplicacoes            ↳ âncora: seção de serviços
│   ├── #projetos              ↳ âncora: portfólio (preview)
│   ├── #avaliacoes            ↳ âncora: reviews Google
│   └── #cidades               ↳ âncora: cobertura regional
│
├── /sobre                     QUEM SOMOS
├── /projetos                  PORTFÓLIO COMPLETO
│
├── /servicos/                 SERVIÇOS (6 páginas)
│   ├── grama-sintetica-jardim
│   ├── grama-sintetica-decorativa
│   ├── grama-sintetica-para-pets
│   ├── grama-sintetica-para-piscina
│   ├── grama-sintetica-para-varanda
│   └── playground-em-grama-sintetica
│
├── /cidades/                  SEO LOCAL (8 páginas)
│   ├── grama-sintetica-brusque        ← sede
│   ├── grama-sintetica-itajai
│   ├── grama-sintetica-blumenau
│   ├── grama-sintetica-balneario-camboriu
│   ├── grama-sintetica-gaspar
│   ├── grama-sintetica-timbo
│   ├── grama-sintetica-pomerode
│   └── grama-sintetica-itapema
│
├── /blog/                     BLOG SEO (não implementado)
│   └── [artigos]
│
└── /sitemap.xml               SITEMAP
```

---

## 3. Navegação Atual — Header

### Desktop
```
[Logo]  |  Serviços ▾  |  Cidades  |  Projetos  |  Avaliações  |  Contato  |  📞 (47) 9…  |  [WhatsApp CTA]
```

**Dropdown "Serviços"** (6 links):
- 🌿 Grama Decorativa → `/servicos/grama-sintetica-decorativa`
- 🛝 Playground → `/servicos/playground-em-grama-sintetica`
- 🌱 Jardim → `/servicos/grama-sintetica-jardim`
- 🐾 Área Pet → `/servicos/grama-sintetica-para-pets`
- 🏠 Varanda & Sacada → `/servicos/grama-sintetica-para-varanda`
- 🏊 Área de Piscina → `/servicos/grama-sintetica-para-piscina`

**Âncoras diretas** (sem dropdown):
- "Cidades" → `#cidades` (home) ⚠️ *não leva a dropdown de cidades*
- "Projetos" → `#projetos` (home)
- "Avaliações" → `#avaliacoes` (home)
- "Contato" → `#contato` (implícito no footer)

### Mobile
Menu hambúrguer. Mesma estrutura do desktop (com dropdowns empilhados).

### Gaps de navegação identificados
| Gap | Impacto |
|-----|---------|
| "Cidades" é âncora, não dropdown — as 8 páginas de cidade ficam escondidas | SEO e UX |
| Não há link direto para `/sobre` no menu principal | Institucional |
| Sem link para `/blog` (planejado) | Conteúdo SEO |
| "Contato" vai para o footer — sem página `/contato` | Conversão |

---

## 4. Navegação Atual — Footer

**4 colunas:**

```
[Brand + Social]  |  Serviços (6)  |  Cidades (6)  |  Contato
```

| Coluna | Conteúdo |
|--------|----------|
| Brand | Logo, descrição, IG + YT + WA |
| Serviços | 6 links → `/servicos/...` |
| Cidades | 6 de 8 cidades (Timbó e Pomerode faltam) |
| Contato | Telefone, WhatsApp, Endereço, Horário |

**Rodapé:** © 2026 · Política de Privacidade · Termos de Uso · `/sitemap.xml`

**Gaps do footer:**
- Cidades: lista 6 de 8 (Timbó e Pomerode não estão)
- Sem link para `/sobre` e `/projetos`
- Política de Privacidade e Termos de Uso sem páginas reais

---

## 5. Anatomia das Páginas por Tipo

### 5.1 Home (`/`)

```
┌─────────────────────────────────────────────────────────┐
│ HEADER (transparent → scrolled)                         │
├─────────────────────────────────────────────────────────┤
│ HERO                                                    │
│   Eyebrow · H1 · Lead · [CTA WA] [Ver projetos]        │
│   Trust Strip (4 métricas) · Badges flutuantes          │
├─────────────────────────────────────────────────────────┤
│ MARQUEE — cidades em loop contínuo                      │
├─────────────────────────────────────────────────────────┤
│ PROBLEMA (section-bone)                                 │
│   H2 · Compare Slider (antes/depois) · 4 pain points   │
├─────────────────────────────────────────────────────────┤
│ BENEFÍCIOS (section-paper)                              │
│   H2 · Grid 6 cards numerados                          │
├─────────────────────────────────────────────────────────┤
│ APLICAÇÕES / SERVIÇOS (#aplicacoes, section-bone)       │
│   H2 · Grid masonry 6 cards (a1 destaque 8col × 2row)  │
├─────────────────────────────────────────────────────────┤
│ PORTFÓLIO (#projetos, section-paper)                    │
│   H2 · Compare Slider featured · 3 mini cards          │
│   [Ver todos os projetos →]                             │
├─────────────────────────────────────────────────────────┤
│ AUTORIDADE (section-dark)                               │
│   4 stats · 3 authority pillars                         │
├─────────────────────────────────────────────────────────┤
│ AVALIAÇÕES (#avaliacoes, section-bone)                  │
│   Google Score · 3 review cards                         │
├─────────────────────────────────────────────────────────┤
│ CIDADES (#cidades, section-paper)                       │
│   Mapa SVG interativo · Grid de cidades com links       │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                  │
└─────────────────────────────────────────────────────────┘
[WhatsApp Float Button — global]
```

### 5.2 Páginas de Serviço (template único, 6 instâncias)

```
┌─────────────────────────────────────────────────────────┐
│ HEADER (transparent)                                    │
├─────────────────────────────────────────────────────────┤
│ PAGE-HERO                                               │
│   Breadcrumb: Início › Serviços › [Nome]                │
│   Eyebrow · H1 · Lead                                   │
│   [CTA WA] [Ver vantagens ↓]                            │
│   Sidebar: "Ideal para" (5 bullets) + Specs Strip (4)   │
├─────────────────────────────────────────────────────────┤
│ FEATURE BLOCKS (section-bone) — 2 blocos alternados     │
│   Imagem + Título + Eyebrow + 4 bullets cada            │
├─────────────────────────────────────────────────────────┤
│ BENEFÍCIOS (#beneficios, section-bone)                  │
│   Grid 6 cards numerados (específicos do serviço)       │
├─────────────────────────────────────────────────────────┤
│ PROCESSO (section-dark)                                 │
│   4 steps: Visita → Orçamento → Preparação → Instalação │
├─────────────────────────────────────────────────────────┤
│ PROJETOS REALIZADOS (section-paper)                     │
│   3 mini cards com localização e área                   │
│   [→ Ver portfólio completo]                            │
├─────────────────────────────────────────────────────────┤
│ FAQ (section-bone) — 6 perguntas específicas do serviço │
├─────────────────────────────────────────────────────────┤
│ CTA FINAL                                               │
│   H2 · [Orçamento WhatsApp] · Disponibilidade           │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                  │
└─────────────────────────────────────────────────────────┘
```

### 5.3 Páginas de Cidade (template único, 8 instâncias)

```
┌─────────────────────────────────────────────────────────┐
│ HEADER (transparent)                                    │
├─────────────────────────────────────────────────────────┤
│ PAGE-HERO                                               │
│   Breadcrumb: Início › Cidades › [Cidade]               │
│   City Badge (📍 sede / região) · Eyebrow · H1 · Lead   │
│   [CTA WA] [Ver serviços ↓]                             │
│   Sidebar: "Atendemos em [Cidade]" (6 bullets)          │
├─────────────────────────────────────────────────────────┤
│ POR QUE NOS ESCOLHER (section-bone)                     │
│   Diferenciais locais · Grid 6 cards numerados          │
├─────────────────────────────────────────────────────────┤
│ SERVIÇOS DISPONÍVEIS (#servicos, section-paper)         │
│   Grid 3×2 — 6 cards de serviço com links              │
├─────────────────────────────────────────────────────────┤
│ FAQ (section-dark) — 5 perguntas locais                 │
├─────────────────────────────────────────────────────────┤
│ CTA FINAL                                               │
│   H2 · [Orçamento WhatsApp] · Disponibilidade           │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                  │
└─────────────────────────────────────────────────────────┘
```

### 5.4 Sobre (`/sobre`)

```
PAGE-HERO → STATS (4 números) → HISTÓRIA (feature block) →
VALORES (6 cards) → EQUIPE (3 cards) → CTA FINAL → FOOTER
```

### 5.5 Projetos (`/projetos`)

```
PAGE-HERO → FILTROS (7 categorias) + MASONRY (8 cards) →
CTA STRIP → FOOTER
```

---

## 6. Inventário de CTAs

| Tipo | Texto | Destino | Ocorre em |
|------|-------|---------|-----------|
| Primário | "Solicitar Orçamento no WhatsApp" | wa.me/... | Home hero |
| Primário | "Orçamento no WhatsApp" | wa.me/...?text= | Todas as páginas |
| Primário | "Orçamento em [Cidade] no WhatsApp" | wa.me/...?text= | Páginas de cidade |
| Secundário | "Ver projetos" | `#projetos` | Home hero |
| Secundário | "Ver vantagens" | `#beneficios` | Pages de serviço |
| Secundário | "Ver serviços" | `#servicos` | Pages de cidade |
| Link | "Ver todos os projetos" | `/projetos` | Home + serviços |
| Link | "Ver todas as avaliações no Google" | Google (externo) | Home |
| Float | Botão WhatsApp flutuante | wa.me/... | Global (todas) |
| Telefone | "(47) 99234-5341" | tel:+5547992345341 | Header + footer |

**Padrão de mensagem WhatsApp pré-preenchida:**
- Home: genérico
- Serviço: `"Olá! Gostaria de um orçamento para [serviço]."`
- Cidade: `"Olá! Gostaria de um orçamento em [cidade]."`

---

## 7. Estrutura de SEO Atual

### Padrão de meta tags (todas as páginas)
```html
<title>[Keyword Principal] | Decor Gramas</title>
<meta name="description" content="...">
<link rel="canonical" href="https://decorgramas.com.br/[url]">
<meta name="robots" content="index, follow">
<!-- Open Graph + Twitter Card -->
<!-- Schema JSON-LD -->
```

### Schema JSON-LD por tipo de página

| Página | Schemas implementados |
|--------|-----------------------|
| Home | `Organization` + `LocalBusiness` + `WebSite` |
| Sobre | `LocalBusiness` + `BreadcrumbList` |
| Projetos | `LocalBusiness` + `BreadcrumbList` |
| Serviços | `LocalBusiness` (implícito) |
| Cidades | `LocalBusiness` (com `areaServed: City`) + `BreadcrumbList` |

### Gaps de SEO identificados
| Gap | Prioridade |
|-----|------------|
| Serviços sem `BreadcrumbList` schema | Alta |
| Serviços sem `Service` schema | Média |
| Projetos sem `ImageObject` schema | Média |
| Sem `FAQPage` schema (FAQ existe nas páginas) | Alta |
| Sem `Review`/`AggregateRating` schema (reviews existem) | Alta |
| Blog não implementado — maior oportunidade de conteúdo SEO | Alta |
| Porto Belo e Navegantes (no marquee) sem páginas | Média |

### Sitemap prioridades atuais
```
1.0  /
0.9  /servicos/* (6 URLs)
0.85 /cidades/brusque, itajai, blumenau, balneario-camboriu
0.80 /cidades/gaspar, timbo, pomerode, itapema
0.80 /projetos
0.70 /sobre
—    /blog (comentado)
```

---

## 8. Fluxo de Navegação do Usuário

### Fluxo 1 — Usuário orgânico por serviço
```
Google ["grama sintética para jardim"] 
  → /servicos/grama-sintetica-jardim
    → Lê benefícios e vê projetos
      → Clica CTA WhatsApp (conversão)
        ou
      → Navega para /projetos
        → Clica CTA WhatsApp (conversão)
```

### Fluxo 2 — Usuário orgânico por cidade
```
Google ["grama sintética em Blumenau"]
  → /cidades/grama-sintetica-blumenau
    → Vê serviços disponíveis
      → Clica em serviço específico → /servicos/...
        → Clica CTA WhatsApp (conversão)
          ou
      → Clica CTA WhatsApp direto (conversão)
```

### Fluxo 3 — Usuário direto / referência
```
Acessa decorgramas.com.br (home)
  → Role a página (problema → benefícios → serviços)
    → Clica card de serviço → /servicos/...
      → Clica CTA WhatsApp (conversão)
        ou
    → Clica "Ver projetos" → /projetos
      → Clica CTA WhatsApp (conversão)
        ou
    → Clica cidade no mapa → /cidades/...
      → Clica CTA WhatsApp (conversão)
```

### Fluxo 4 — Usuário institucional / B2B
```
Home → "Sobre" (via footer ou busca)
  → /sobre
    → Lê história e valores
      → Clica CTA WhatsApp (conversão)
```

---

## 9. Análise de Linking Interno Atual

### Páginas bem linkadas (recebem links de vários lugares)
| Página | Links recebidos de |
|--------|--------------------|
| `/servicos/grama-sintetica-jardim` | Home (card a1), nav dropdown, footer, todas as cidades |
| `/projetos` | Home (CTA "ver todos"), todas as páginas de serviço |
| `/cidades/grama-sintetica-brusque` | Home (#cidades), footer |

### Gaps de linking interno
| Gap | Impacto SEO |
|-----|-------------|
| Páginas de serviço não linkam entre si ("veja também outros serviços") | Médio |
| Páginas de cidade não linkam para outras cidades | Médio |
| Páginas de cidade não linkam para projetos realizados naquela cidade | Alto |
| Home não linka diretamente para `/sobre` no body | Baixo |
| Footer lista só 6 de 8 cidades | Baixo |

---

## 10. Recomendações Arquiteturais

### 10.1 Menu principal recomendado

```
[Logo]  |  Serviços ▾  |  Cidades ▾  |  Projetos  |  Sobre  |  📞  |  [Orçamento]
```

**Dropdown "Serviços"** (mantém atual):
- 6 serviços com ícones

**Dropdown "Cidades" (novo):**
```
Principais              Outras regiões
──────────────────      ──────────────
📍 Brusque (sede)        Gaspar
   Itajaí                Timbó
   Blumenau              Pomerode
   Balneário Camboriú    Itapema
```

### 10.2 Estrutura recomendada para `/contato`

```
PAGE-HERO (contato)
  └─ H1: "Fale com a Decor Gramas"

BLOCO PRINCIPAL (2 colunas)
  ├─ Coluna esquerda: informações de contato
  │    · WhatsApp (CTA primário)
  │    · Telefone
  │    · Endereço + mapa embed
  │    · Horário de atendimento
  └─ Coluna direita: formulário simplificado
       · Nome
       · Telefone/WhatsApp
       · Cidade
       · Serviço de interesse (select)
       · Mensagem
       · [Enviar pelo WhatsApp] → monta link wa.me/?text=

CIDADES QUE ATENDEMOS
  └─ Grid compacto de 8 cidades com links
```

### 10.3 Estrutura recomendada para `/orcamento` (landing page)

```
HERO FOCADO (sem header de navegação)
  └─ H1: "Orçamento de Grama Sintética — Resposta em até 1 hora"

FORMULÁRIO CENTRAL (único CTA)
  · Nome / Cidade / Serviço / Área estimada / WhatsApp
  · [Solicitar Orçamento Grátis]

TRUST STRIP (3 items abaixo do formulário)
  · ✓ Sem compromisso
  · ✓ Resposta em até 1 hora
  · ✓ Visita técnica gratuita

PROVAS SOCIAIS (mínimo, não distrair)
  · Rating Google + 3 mini depoimentos
```

### 10.4 Estrutura recomendada para páginas de Blog

```
URL padrão: /blog/[slug-do-artigo]

TEMPLATE DE ARTIGO
  ├─ PAGE-HERO (compacto)
  │    · Categoria · H1 · Lead · Autor + Data · Tempo de leitura
  ├─ CONTEÚDO (article)
  │    · H2/H3 estruturados para featured snippets
  │    · CTA intermediário (após 3o parágrafo)
  │    · Imagens com alt otimizado
  ├─ CTA FINAL (mesmo das páginas de serviço)
  ├─ ARTIGOS RELACIONADOS (3 cards)
  └─ FOOTER

SCHEMA: Article + BreadcrumbList + FAQPage (se tiver FAQ)
```

**Temas prioritários para blog (SEO):**
```
/blog/quanto-custa-grama-sintetica          ← alta busca
/blog/grama-sintetica-x-natural             ← comparativo
/blog/como-instalar-grama-sintetica         ← how-to
/blog/grama-sintetica-para-pets             ← serviço
/blog/manutencao-grama-sintetica            ← FAQ
/blog/grama-sintetica-vale-a-pena           ← conversão
```

### 10.5 Expansão de cidades — próximas a criar

Cidades mencionadas no marquee mas sem página:
| Cidade | URL futura |
|--------|-----------|
| Porto Belo | `/cidades/grama-sintetica-porto-belo` |
| Navegantes | `/cidades/grama-sintetica-navegantes` |

Cidades de alto volume na região sem cobertura:
| Cidade | Potencial |
|--------|-----------|
| Florianópolis | Alto |
| Joinville | Alto |
| Jaraguá do Sul | Médio |
| Camboriú (cidade) | Médio |

### 10.6 Cross-linking recomendado entre serviço + cidade

Cada página de serviço deve conter no final:
```
"Atendemos [Serviço] em toda a região"
  → Grid compacto: Brusque · Itajaí · Blumenau · Balneário Camboriú · + 4
```

Cada página de cidade deve conter (já existe, manter):
```
"Todos os nossos serviços em [Cidade]"
  → Grid 3×2 de serviços
```

---

## 11. Sitemap Recomendado (estado futuro)

```xml
<!-- PRIORIDADE 1.0 -->
/

<!-- PRIORIDADE 0.9 — Conversão -->
/orcamento
/contato

<!-- PRIORIDADE 0.9 — Serviços -->
/servicos/grama-sintetica-jardim
/servicos/grama-sintetica-decorativa
/servicos/grama-sintetica-para-pets
/servicos/grama-sintetica-para-piscina
/servicos/grama-sintetica-para-varanda
/servicos/playground-em-grama-sintetica

<!-- PRIORIDADE 0.85 — Cidades principais -->
/cidades/grama-sintetica-brusque
/cidades/grama-sintetica-itajai
/cidades/grama-sintetica-blumenau
/cidades/grama-sintetica-balneario-camboriu

<!-- PRIORIDADE 0.80 — Cidades secundárias -->
/cidades/grama-sintetica-gaspar
/cidades/grama-sintetica-timbo
/cidades/grama-sintetica-pomerode
/cidades/grama-sintetica-itapema
/cidades/grama-sintetica-porto-belo     (a criar)
/cidades/grama-sintetica-navegantes     (a criar)

<!-- PRIORIDADE 0.80 — Portfólio + Institucional -->
/projetos
/sobre

<!-- PRIORIDADE 0.7 — Blog -->
/blog
/blog/[artigos]
```

---

## 12. Resumo de Dados Globais

| Item | Valor atual |
|------|-------------|
| Total de páginas | 17 HTML |
| Serviços mapeados | 6 |
| Cidades com página | 8 |
| CTAs de conversão | WhatsApp (100%) — sem formulário |
| Telefone | (47) 99234-5341 |
| WhatsApp | 5547992345341 |
| Horário | Seg–Sex 8h–18h · Sáb 8h–12h |
| Endereço | R. João Lucio Torrezani, 80 · Santa Rita — Brusque, SC |
| Schema implementado | Organization, LocalBusiness, WebSite, BreadcrumbList |
| Analytics | GA4 + Meta Pixel (placeholders — não ativados) |
| Domínio | decorgramas.com.br |
| Deploy | Vercel (github.com/Decorgramas/decorgramas-site) |
