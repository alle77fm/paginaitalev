# CLAUDE.md — Especificação de Build: Landing Institucional Italev Sistemas

> **Para o Claude Code:** este é o documento-guia do projeto. Leia-o inteiro antes de escrever qualquer código. Ele define O QUE construir, COMO, e os limites do escopo atual. Acompanha dois documentos irmãos que são parte do contrato:
> - `GEO_PAGE_CONVENTION.md` — regras obrigatórias de toda página GEO. **Consulte antes de criar cada página.**
> - `MIGRATION_ROADMAP.md` — plano de migração faseado (contexto maior; esta landing é parte dele).

---

## 1. Objetivo e mentalidade

Construir a **landing page institucional da Italev Sistemas** — uma software house brasileira — como uma **entidade computável** preparada para busca baseada em IA (Google AI Overviews, Perplexity, ChatGPT Search, Gemini, retrieval semântico).

**Não é** uma landing de marketing bonita. **É** um documento-fonte estruturado que mecanismos generativos possam recuperar, recortar e citar. Construa pensando como arquiteto de informação e especialista em retrieval, não como designer de landing.

**Regra mental para cada bloco:** "qual trecho desta página uma IA recortaria para responder a pergunta X?" Se nenhum trecho responde X isoladamente, o bloco está incompleto.

---

## 2. Escopo — o que construir e o que NÃO construir

### Construir AGORA
- Landing institucional da Italev Sistemas (rota `/`).
- Páginas institucionais com slugs preservados: `/servicos`, `/sobre-nos`, `/contato`, `/planos`.
- Páginas legais com slugs preservados: `/termos-de-uso`, `/politica-de-privacidade`, `/politica-de-cookies`, `/termos-e-condicoes`.
- Fundação preparada para expansão (estrutura de pastas, entidade, schema, content) — ver seção 9.

### NÃO construir agora (fora de escopo)
- ❌ Dashboards, login, área logada, sistema interno.
- ❌ Páginas completas dos produtos (É Pra Já Pedidos, PedeLev) — só teaser na landing.
- ❌ Cadastro complexo / fluxos de autenticação.
- ❌ Backend dinâmico / Supabase (a landing é estática/SSG).

Os produtos aparecem na landing apenas como **teaser semântico** (seção 7 abaixo), com estrutura preparada para virarem páginas internas depois.

---

## 3. Modelo de entidade (a base de tudo)

```
Italev Sistemas (Organization, @id estável) ── entidade-mãe / software house
   ├── É Pra Já Pedidos (SoftwareApplication) ── produto [teaser agora]
   ├── PedeLev (SoftwareApplication) ── produto [teaser agora]
   └── [futuros produtos]
```

- A `Organization` Italev tem `@id` estável: `https://italevsistemas.com/#organization`.
- Produtos referenciam a mãe via `publisher: { "@id": ".../#organization" }` quando suas páginas existirem.
- **Consistência de entidade é lei:** nome, categoria e descrição da Italev são idênticos em metadata, schema, conteúdo visível e rodapé. Bate com Instagram (@italevsistemas), TikTok (@italevsistemas) e Google Business.

**Frase-âncora de entidade** (usar no definition block e variações pelo site):
> Italev Sistemas é uma software house que desenvolve aplicativos próprios de delivery e e-commerce para supermercados, restaurantes e comércios locais, com pedidos integrados ao WhatsApp e sem taxas sobre vendas.

**Hero headline (H1 da home):**
> "Transforme seu comércio em um app próprio e venda mais todos os dias"

**Hero subheadline:**
> "Catálogo digital, pedidos no WhatsApp, PIX, promoções automáticas e sua marca na mão do cliente."

**CTAs do hero:** `[ Ver planos ]` · `[ Ver funcionando ]` — o segundo aciona o modal do botão flutuante.

---

## 4. Dados reais da entidade (preenchidos — não usar [INSERIR] nestes)

```
brandName:    Italev Sistemas
legalName:    Italev Sistemas   ← SEM CNPJ, SEM taxID, SEM vatID (ver seção 4.1)
domain:       https://italevsistemas.com
email:        italevsistemas@gmail.com
phone:        +55 35 99749-3286
whatsapp:     5535997493286
city:         Itajubá
state:        MG
atendimento:  Segunda a sexta, 9h às 18h
instagram:    @italevsistemas
tiktok:       @italevsistemas
youtube:      MLpWrANjFbI   (ID do vídeo atual)
```

### 4.1 Sobre CNPJ e razão social — regra crítica

A Italev **ainda não tem CNPJ nem razão social formal registrada**. Isso é OK para o estágio atual e não deve ser exposto no site.

- **No schema:** usar apenas `legalName: "Italev Sistemas"`. Omitir completamente `taxID`, `vatID` e qualquer campo fiscal.
- **No rodapé e em qualquer lugar visível:** zero menção a CNPJ, razão social ou situação societária.
- O site deve parecer profissional e maduro — a honestidade é não inventar, não é expor o estágio.

### 4.2 Dados ainda pendentes ([INSERIR])

NUNCA fabricar. Usar `[INSERIR]` e sinalizar ao humano:
- Taxa de setup única por plano.
- Desconto do plano anual.
- Faixa de comissão de marketplace nas tabelas comparativas — validar com fonte datada antes de publicar.
- Números de clientes/usuários — usar número real ou omitir; o site atual mostra "0+" placeholder.

---

## 5. Stack obrigatório

- Next.js 14+ (App Router), TypeScript estrito (sem `any`), Tailwind CSS.
- React Server Components por padrão. `"use client"` **só** em ilhas interativas isoladas: `FaqAccordion` e `FloatingButton`.
- Renderização server-first: SSG. Todo conteúdo no HTML do servidor.
- Mínimo JS possível. Sem libs pesadas de animação.
- `next.config.js`: `trailingSlash: false` (URLs indexadas estão sem barra final — preservar exatamente), imagens AVIF/WebP, `redirects()` vazio.
- Deploy: Vercel. Sem Supabase. Sem Cloudflare na frente por enquanto.

---

## 6. PRIORIDADE ABSOLUTA: Mobile-first

Toda decisão de UX, UI, semântica e performance é pensada **primeiro para mobile**, depois adaptada para desktop.

- Layout de coluna única, escaneável, otimizado para thumb navigation.
- Tipografia confortável para leitura em tela pequena; alto contraste.
- Blocos curtos e escaneáveis — nada de paredes de texto.
- Imagens responsivas via `next/image` (AVIF/WebP), `sizes` corretos.
- Fontes via `next/font` (Space Grotesk títulos + Inter texto) — sem FOUT, sem request externo.
- **Metas Core Web Vitals mobile:** LCP < 2.5s, CLS < 0.1, INP baixo.
- Vídeo YouTube (`MLpWrANjFbI`) via **facade**: thumbnail estático → carrega iframe só no clique.

**Evitar:** hero gigante vazio, excesso de animação/efeitos, layout poluído, blocos enormes, JS desnecessário, texto genérico.

---

## 7. Design

**Liberdade total** — não replicar o layout Elementor atual. Criar versão nova e moderna.

- Design system: neo-brutalista controlado — laranja `#FF5A00`, bordas marcadas, Space Grotesk + Inter.
- Transmitir tecnologia, autoridade, clareza, modernidade, robustez e confiança — sem exageros visuais.
- Não parecer template genérico de startup nem agência tradicional. Parecer plataforma tecnológica moderna.
- Priorizar legibilidade e velocidade sobre ornamento.

---

## 8. Arquitetura da landing — ordem das seções (app/page.tsx)

Cada seção é um **chunk recuperável e autossuficiente** (regra da `GEO_PAGE_CONVENTION.md`). Ordem:

1. **Hero** — `<h1>` = "Transforme seu comércio em um app próprio e venda mais todos os dias". Subheadline. CTAs `[ Ver planos ]` e `[ Ver funcionando ]`. Objetivo e escaneável.

2. **Entity Introduction Block** — definition block denso e citável com a frase-âncora da Italev. É o bloco que a IA mais cita. Coloque cedo.

3. **Problemas do mercado** — answer-blocks sobre dores reais: dependência de marketplaces, taxas elevadas, falta de automação, processos manuais, ausência de app próprio.

4. **Soluções** — cards semânticos: delivery commerce, catálogo digital, automação comercial, IA aplicada a negócios. Preparados para expansão futura.

5. **Como funciona** — passos numerados (`<ol>`): metodologia, implantação, integração, personalização, escalabilidade.

6. **Benefícios** — autonomia, redução de taxas, aumento de vendas próprias, retenção de clientes. Cada benefício com fato/consequência concreta, não adjetivo solto.

7. **Ecossistema de produtos (teaser)** — É Pra Já Pedidos e PedeLev como cards "produto Italev" com uma linha de definição. Sem páginas próprias agora.

8. **Tabelas comparativas** — `<table>` semânticas: app próprio vs. marketplace. Factuais e justas. Comissão = `[INSERIR]` até validar fonte.

9. **FAQ massiva** — 12+ perguntas em answer-blocks. Fonte única em `content/faq/institucional.ts`, alimentando UI + schema FAQPage. Texto sempre no HTML.

10. **Prova social** — depoimentos REAIS: Carlos Mendes/Supermercado Ideal, Luciana Ferreira/Açougue Bom Corte, Thiago Costa/Lanchonete Sabor da Vila. + "app pronto em até 15 dias úteis". **Não inventar mais nada.**

11. **Footer** — conforme seção 11 deste documento.

---

## 9. Planos (página /planos e seção na home)

Nomenclatura nova — não usar os nomes antigos (Básico/Pró/Super Pró).

| Plano | Preço | Destaques |
|-------|-------|-----------|
| **Start** | R$149/mês | App + catálogo + WhatsApp + PIX + popup de vendas |
| **Pro** ⭐ | R$219/mês | Tudo do Start + marca/domínio próprios + relatórios/dashboard + disparo de promoções + agendamento de entrega + cupons + tabloide de ofertas (PDF) |
| **Growth** | R$379/mês | Tudo do Pro + suporte prioritário + onboarding assistido + multi-loja |

**Regras de apresentação:**
- **Pro** = destaque visual obrigatório: badge "Mais escolhido", borda `#FF5A00`, posição central, texto "Recomendado para a maioria dos comércios", reforço psicológico "Menos de R$7 por dia".
- **Growth** = parecer expansão premium, não "suporte extra".
- Cada plano exibe: "+ taxa de setup única `[INSERIR]`" e "ou plano anual com desconto `[INSERIR]`".
- Multi-loja no Growth: marcar "em breve" se não estiver pronto.
- **Não declarar "em breve" como disponível no schema.**

**Fonte única:** `content/comparisons/planos.ts` → alimenta UI + schema `Offer/OfferCatalog`.

---

## 10. Componente obrigatório — Botão Flutuante "Ver funcionando"

**Client Component** (`"use client"`). Presente em **todas as páginas**, incluindo as legais (instanciar no `layout.tsx`).

**Visual:** canto inferior direito, fixo, premium, discreto, mobile-first, animação suave.

**Fluxo:**
1. Clique no botão → abre modal.
2. Modal contém formulário com campos: Nome · Nome do comércio · Cidade · WhatsApp · Segmento · Plano de interesse.
3. Botão final: "Receber atendimento".
4. Ao enviar: abre `wa.me/5535997493286?text=...` com mensagem preenchida automaticamente e URL-encoded corretamente:

```
Olá, quero uma demonstração da Italev
Nome: [preenchido]
Comércio: [preenchido]
Cidade: [preenchido]
WhatsApp: [preenchido]
Segmento: [preenchido]
Plano de interesse: [preenchido]
```

**Atenção ao URL-encoding:** usar `encodeURIComponent()` no texto completo. Testar com caracteres especiais antes de considerar pronto.

---

## 11. Footer

Exibir apenas:
- Italev Sistemas
- Soluções digitais para comércios
- Seg–Sex · 9h às 18h
- italevsistemas@gmail.com
- Redes: Instagram (@italevsistemas), TikTok (@italevsistemas)
- Links legais (termos, privacidade, cookies)

**Não incluir:** endereço físico, CNPJ, razão social, placeholders, "em regularização" ou qualquer referência a estágio societário.

---

## 12. Schema markup (JSON-LD, servidor)

Gerar em `lib/schema.ts`, da mesma fonte de `content/entities/italev.ts`, injetado no servidor.

| Schema | Onde | Observações |
|--------|------|-------------|
| `Organization` | layout | `@id` estável, `legalName`, contato, `sameAs`. **Sem `taxID`, `vatID`, CNPJ.** |
| `LocalBusiness` | layout | Itajubá-MG, telefone, horário Seg-Sex 9h-18h |
| `WebSite` | layout | + SearchAction opcional |
| `Service` | home | Serviço de desenvolvimento de apps |
| `FAQPage` | home + /planos | Da mesma fonte `content/faq/` |
| `OfferCatalog` / `Offer` | /planos | 3 planos Start/Pro/Growth. Sem "em breve" como disponível. |
| `SoftwareApplication` | stub | Produtos referenciando Organization por `@id` |
| `BreadcrumbList` | todas | |

**Regra:** schema **espelha o visível**. Nada de `Review` sem reviews reais. Nada que não esteja na página.

---

## 13. Arquitetura de pastas

```
app/
  layout.tsx                  # next/font, metadata base, JSON-LD, FloatingButton
  page.tsx                    # landing institucional Italev (RSC)
  robots.ts                   # BLOQUEAR indexação em staging
  sitemap.ts                  # todas as URLs indexáveis
  planos/page.tsx
  servicos/page.tsx
  sobre-nos/page.tsx
  contato/page.tsx
  termos-de-uso/page.tsx
  politica-de-privacidade/page.tsx
  politica-de-cookies/page.tsx
  termos-e-condicoes/page.tsx

  # FUTURO — criar pasta stub, sem páginas completas:
  produtos/                   # e-pra-ja-pedidos/, pedelev/
  solucoes/                   # hubs semânticos / spokes

content/
  entities/
    italev.ts                 # entidade-mãe (fonte única)
    produtos.ts               # É Pra Já, PedeLev (dados de teaser)
  faq/
    institucional.ts          # FAQ da landing (fonte única → UI + schema)
  comparisons/
    propria-vs-marketplace.ts # linhas das tabelas comparativas
    planos.ts                 # tabela Start/Pro/Growth (→ UI + schema Offer)
  answer-blocks/
    mercado.ts                # dores, soluções, benefícios como blocos reutilizáveis

lib/
  entities.ts                 # agrega content/entities → consumido por schema, meta, UI
  schema.ts                   # geradores JSON-LD

components/
  layout/
    Header.tsx                # RSC
    Footer.tsx                # RSC
  seo/
    JsonLd.tsx                # injeta JSON-LD no servidor
  ui/
    FloatingButton.tsx        # "use client" — modal + formulário + wa.me
    PricingCard.tsx           # card de plano com destaque no Pro
  content/
    AnswerBlock.tsx
    DefinitionBlock.tsx
    Faq.tsx                   # RSC: texto sempre no HTML
    FaqAccordion.tsx          # "use client": só abre/fecha
    ComparisonTable.tsx       # <table> semântica
    Steps.tsx                 # <ol> passos numerados
    SolutionCard.tsx
    ProductTeaser.tsx
    YouTubeFacade.tsx         # facade leve (thumbnail → iframe no clique)
    Testimonials.tsx          # depoimentos reais

public/
  llms.txt                    # índice da entidade + páginas-chave p/ LLMs
```

**Princípio:** conteúdo é dado (`content/`), separado da apresentação (`components/`). Schema deriva da mesma fonte do conteúdo. Editar texto nunca exige mexer em JSX.

---

## 14. Processo de build — duas etapas com pausa obrigatória

### Etapa A — Fundação
1. Inicializar Next.js 14 App Router + TS estrito + Tailwind.
2. `next.config.js`: `trailingSlash: false`, AVIF/WebP, `redirects()` vazio.
3. `content/entities/italev.ts` — fonte única com dados da seção 4 (sem CNPJ/taxID).
4. `content/entities/produtos.ts` — É Pra Já e PedeLev (dados de teaser).
5. `lib/schema.ts` — geradores Organization, LocalBusiness, WebSite, Service, FAQPage, OfferCatalog. `@id` estável. Sem campos fiscais.
6. `app/layout.tsx` — next/font (Space Grotesk + Inter), metadata base, JSON-LD no servidor, `FloatingButton` instanciado aqui.
7. `app/robots.ts` — bloquear indexação (staging).
8. `app/sitemap.ts` — todas as URLs.
9. `public/llms.txt` — alinhado à entidade.
10. `components/ui/FloatingButton.tsx` — modal, formulário, wa.me com URL-encoding correto.

**⛔ PARAR aqui e mostrar ao humano antes de prosseguir:**
- `content/entities/italev.ts`
- `lib/schema.ts`
- `components/ui/FloatingButton.tsx`

### Etapa B — Páginas (só após aprovação da Etapa A)
- Fontes únicas: `content/faq/institucional.ts`, `content/comparisons/planos.ts`, `content/answer-blocks/mercado.ts`.
- `app/page.tsx` — 11 seções na ordem da seção 8.
- `app/planos/page.tsx` — 3 planos com ancoragem, tabela comparativa, schema Offer.
- `app/servicos/page.tsx`, `app/sobre-nos/page.tsx`, `app/contato/page.tsx` — recriar moderno, slug idêntico, conteúdo GEO.
- Páginas legais — slugs idênticos; privacidade com seção LGPD.

---

## 15. Regras universais (toda página)

- Um único `<h1>` por página; hierarquia de headings correta (sem pular níveis).
- Headings são perguntas/afirmações-tópico, não rótulos.
- Answer-blocks: responde na 1ª frase + fato verificável (2-4 frases).
- Definition block logo após o `<h1>`.
- Descriptions únicas e descritivas em cada página (corrigir as genéricas do WP).
- HTML semântico: `<main>`, `<section>`, `<article>`, `<ol>`, `<table>`, `<dl>`.
- `next/image` para todas as imagens (AVIF/WebP), `alt` factual e descritivo.
- Vídeo YouTube via facade (thumbnail → iframe no clique).
- Todo conteúdo no HTML do servidor — nada crítico depende de JS cliente.
- `"use client"` apenas em `FaqAccordion` e `FloatingButton`.
- Zero dado inventado — manter `[INSERIR]` onde falta dado real.
- Apenas os 3 depoimentos reais (Carlos Mendes, Luciana Ferreira, Thiago Costa).
- Nunca mencionar CNPJ, taxID, razão social formal ou estágio societário.

---

## 16. Checklist de aceite (a landing está pronta quando)

- [ ] `/` renderiza no servidor; todo conteúdo aparece no HTML cru (testar com JS desligado).
- [ ] Um único `<h1>` = headline do hero; hierarquia de headings correta.
- [ ] Entity introduction (definition block) presente e citável logo após o `<h1>`.
- [ ] Todas as 11 seções da seção 8 presentes, cada uma autossuficiente.
- [ ] FAQ com 12+ perguntas, answer-blocks, schema FAQPage da mesma fonte.
- [ ] Tabelas comparativas semânticas (`<table>`).
- [ ] Teaser de produtos (É Pra Já, PedeLev) sem páginas completas.
- [ ] Planos Start/Pro/Growth com ancoragem correta e Pro em destaque.
- [ ] Schema Organization (sem campos fiscais) + LocalBusiness + WebSite + Service + FAQPage + OfferCatalog válidos no Rich Results Test.
- [ ] `content/entities/italev.ts` é fonte única; sem dados duplicados/divergentes.
- [ ] Mobile-first: Lighthouse mobile verde (LCP < 2.5s, CLS < 0.1).
- [ ] `trailingSlash: false` — URLs sem barra final em todas as rotas.
- [ ] Slugs preservados idênticos: `/servicos`, `/sobre-nos`, `/contato`, `/planos` + legais.
- [ ] `FloatingButton` presente em todas as páginas; wa.me URL-encoded corretamente.
- [ ] `llms.txt` na raiz, consistente com o schema.
- [ ] Zero dado inventado; `[INSERIR]` onde falta dado real.
- [ ] Nenhuma menção a CNPJ, taxID ou razão social no site ou no schema.
- [ ] Depoimentos reais preservados; nada fabricado.
- [ ] Staging com `noindex` confirmado (não indexar antes do cutover).
