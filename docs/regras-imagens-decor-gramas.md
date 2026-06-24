# Regra Permanente de Uso de Imagens — Decor Gramas

## Regra obrigatória

Todas as imagens utilizadas no site Decor Gramas devem ser extraídas **prioritariamente** da pasta oficial de projetos reais da empresa:

```
C:\Users\alceu\Documents\Decor Gramas\projetos
```

Essa regra vale para **todas as áreas do site**, atuais e futuras:

- Home
- Páginas de serviços
- Páginas de cidades
- Blog
- Projetos
- Página de contato
- Página sobre
- Banners, cards, heroes e seções internas
- Novas páginas futuras

## Proibido

- Imagens genéricas
- Imagens de banco de imagens (Unsplash, Pexels, stock etc.)
- Placeholders
- Imagens aleatórias
- Fotos sem relação direta com a Decor Gramas

## Processo ao adicionar uma nova imagem

1. Escolher imagem real compatível com o conteúdo da página em `C:\Users\alceu\Documents\Decor Gramas\projetos\`.
2. Copiar a imagem para `Site Decor gramas/assets/img/projetos/`.
3. Renomear com nome SEO-friendly: `{tipo}-{aplicação}-{cidade}.webp`.
4. Converter para WebP.
5. Otimizar o peso do arquivo.
6. Adicionar `alt` descritivo.
7. Adicionar `title` na imagem.
8. Estruturar por cidade quando possível.
9. Usar `ImageObject` (JSON-LD) quando aplicável.
10. Garantir responsividade e `loading="lazy"`.

### Exemplos de nomenclatura

```
grama-sintetica-jardim-brusque.webp
playground-grama-sintetica-colegio-consul-brusque.webp
grama-sintetica-varanda-itajai.webp
area-piscina-grama-sintetica-balneario-camboriu.webp
mini-campo-grama-sintetica-condominio.webp
```

## Regra de uso das pastas "Antes"

Sempre que a estrutura de uma pasta de projeto seguir o padrão `Projeto X / Antes / Depois` (ou `Antes / Final`), as imagens da subpasta **Antes** **não podem ser usadas automaticamente** em:

- Home
- Cards
- Heroes
- Projetos
- Blog
- Páginas de cidade
- Landing pages
- SEO local

### Uso permitido das imagens da pasta "Antes"

Imagens da pasta "Antes" só podem ser usadas quando houver solicitação explícita para:

- Comparativo Antes e Depois
- Estudo de caso
- Página de projeto específico
- Demonstração de transformação
- Artigo técnico explicando o processo

Nesses casos, a imagem "Antes" deve sempre aparecer emparelhada e claramente identificada (rótulo "Antes"/"Depois") junto da imagem "Depois" correspondente — nunca isolada.

### Prioridade de seleção

Ao escolher imagens para qualquer página do site, seguir esta ordem de prioridade:

1. **Prioridade 1**: Depois / Final / Concluído / Resultado Final
2. **Prioridade 2**: Imagens gerais de projetos concluídos
3. **Prioridade 3**: Imagens de execução somente quando o conteúdo exigir demonstração técnica
4. **Prioridade 4**: Imagens da pasta "Antes" apenas mediante solicitação explícita

## Registro centralizado

Toda imagem real catalogada deve ser adicionada a `assets/img/registry.json`, que mantém a lista de imagens disponíveis (fonte, alt, cidade, categoria, dimensões e peso). Antes de inserir uma imagem nova em qualquer página, consultar esse registry para verificar se já existe uma foto real adequada.

## Resultado esperado

Garantir que o site utilize exclusivamente imagens reais da Decor Gramas, fortalecendo credibilidade, SEO local, posicionamento no Google Imagens e taxa de conversão.
