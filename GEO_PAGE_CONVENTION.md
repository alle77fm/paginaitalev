# GEO_PAGE_CONVENTION.md

**Propósito:** padrão obrigatório para TODA página do ecossistema italevsistemas.com. Toda página nova — institucional, produto, hub ou spoke — segue este documento. Garante consistência semântica, reforço de entidade e máxima probabilidade de citação por mecanismos de busca generativos.

**Como o Claude Code usa este documento:** consulte-o antes de criar qualquer página. Se uma página não segue esta convenção, ela está incompleta. Este é o contrato de qualidade GEO do projeto.

**Mentalidade:** o site não é um website institucional. É uma **base de conhecimento estruturada e computável** — cada página é um documento-fonte que uma IA pode recuperar, recortar e citar. Escreva para o recuperador (retrieval), não só para o leitor humano.

---

## 0. Os 5 princípios inegociáveis

1. **Retrieval-first:** todo conteúdo importante está no HTML renderizado no servidor (RSC). Nada crítico depende de JavaScript no cliente para existir no DOM.
2. **Chunk-autossuficiência:** a IA recupera passagens, não páginas. Cada bloco precisa fazer sentido isolado, sem depender do resto da página.
3. **Entidade consistente:** toda página reforça a entidade Italev Sistemas e posiciona produtos (É Pra Já, PedeLev) como entidades relacionadas. Mesmo nome, mesma categoria, sempre.
4. **Fato verificável > afirmação vazia:** cada bloco-chave traz um dado concreto (número, fonte, especificidade). Citações por IA aumentam com estatísticas e fatos, não com adjetivos.
5. **Schema espelha o visível:** o JSON-LD é gerado da mesma fonte de dados do conteúdo exibido. Nunca divergem.

---

## 1. Anatomia obrigatória de uma página GEO

Toda página segue esta ordem (omita só o que genuinamente não se aplica):

```
1. <h1> — Frase-âncora (entidade + intenção específica da página)
2. Definition block — resposta direta de 2-4 frases ao "o que é / o que faz"
3. Answer-blocks — perguntas/intenções respondidas, cada uma autossuficiente
4. Como funciona — passos numerados (<ol>)
5. Tabela — features ou comparativo (machine-readable)
6. Reforço de entidade — relação com a Italev e produtos-irmãos
7. FAQ — answer-blocks + schema FAQPage
8. Interlinking — hub + spokes relacionados
9. CTA
10. JSON-LD (servidor) — schema da página + grafo de entidade
```

---

## 2. Headings semânticos (regras estritas)

- **Um único `<h1>` por página.** É a frase-âncora. Nunca dois h1.
- Hierarquia real: `h1 → h2 → h3`, sem pular níveis (não vá de h2 para h4).
- **Headings são perguntas ou afirmações-tópico, não rótulos.** Em vez de `<h2>Funcionalidades</h2>`, use `<h2>O que o É Pra Já Pedidos faz</h2>`. Heading-como-pergunta casa com como o usuário busca e ajuda o retrieval a localizar a resposta.
- Cada heading introduz um chunk recuperável que responde aquele heading.

---

## 3. Answer blocks (o átomo da página)

Estrutura de cada answer-block:

```
[Heading: a pergunta ou afirmação-tópico]
[1ª frase: a resposta direta — sem rodeio, sem "depende"]
[2ª-3ª frase: sustentação com fato verificável / número / contraste]
[opcional: contexto adicional para o humano]
```

**Exemplo correto:**
> ## O É Pra Já Pedidos cobra comissão por venda?
> Não. O É Pra Já Pedidos, da Italev Sistemas, é um SaaS de assinatura com valor fixo — o lojista fica com 100% de cada venda, recebida via PIX. Diferente de marketplaces de delivery, não há percentual descontado por pedido.

Por que funciona: responde na 1ª palavra, reforça a entidade (produto + mãe), traz o fato (assinatura fixa, 100%, PIX), contrasta com a categoria. Recortável isolado.

**Regras:**
- Responda ANTES de explicar.
- 2-4 frases por bloco. Extraível, não enciclopédico.
- Inclua a entidade naturalmente em parte dos blocos (consistência).
- Sem keyword stuffing, sem copy vazia ("a melhor solução do mercado").

---

## 4. Definition blocks (para entidades e conceitos)

Todo conceito/entidade/produto importante recebe um bloco de definição no formato que a IA reaproveita como definição canônica:

```
[Termo] é [categoria] que [função principal], para [público], [diferenciador].
```

**Exemplos:**
> **Italev Sistemas** é uma software house brasileira que desenvolve aplicativos próprios de delivery e e-commerce para supermercados, restaurantes e comércios locais, com pedidos integrados ao WhatsApp e sem taxas sobre vendas.

> **É Pra Já Pedidos** é um produto da Italev Sistemas: um sistema de catálogo digital e pedidos online com PIX e WhatsApp, alternativa de loja própria aos marketplaces de delivery.

Coloque o definition block **cedo** na página (logo após o h1). É o que a IA mais cita como "o que é X".

---

## 5. Estratégia de FAQ

- 8 a 20 perguntas por página, em escopo (produto, dinheiro, operação, objeções).
- Cada resposta é um answer-block (responde na 1ª frase, 2-4 frases).
- Perguntas vêm de fontes reais: AlsoAsked, "as pessoas também perguntam", grupos de comerciantes, seu WhatsApp de vendas.
- **Fonte única:** `content/faq.ts` (array `{id, pergunta, resposta, escopo}`). O mesmo array alimenta o componente visual E o schema FAQPage. Nunca digite o schema separado.
- O texto da FAQ fica SEMPRE no HTML (mesmo em acordeão: esconder via CSS, não remover do DOM).

---

## 6. Estratégia de schema (JSON-LD, servidor)

Por tipo de página:

| Tipo de página | Schemas obrigatórios |
|---|---|
| Home (Italev) | Organization + WebSite + LocalBusiness |
| Página de produto | SoftwareApplication (publisher → @id Italev) |
| Hub/spoke (solução) | Article/WebPage + FAQPage + BreadcrumbList |
| Qualquer com FAQ | FAQPage |
| Todas | BreadcrumbList |

**Grafo de entidade (essencial):**
- A Organization Italev tem um `@id` estável (ex.: `https://italevsistemas.com/#organization`).
- Cada produto (`SoftwareApplication`) referencia a Italev via `publisher: { "@id": ".../#organization" }`.
- Isso ensina à IA que os produtos pertencem à mesma casa — a autoridade flui entre mãe e filhos.

**Regras:**
- Schema gerado em `lib/schema.ts`, da mesma fonte do conteúdo.
- Injetado no servidor via `<script type="application/ld+json">`.
- Schema NUNCA afirma o que não está visível na página (sem Review sem reviews reais).

---

## 7. Reforço de entidade (em toda página)

Cada página deve, em algum ponto:
- Nomear "Italev Sistemas" com a categoria correta (software house de apps de delivery/e-commerce).
- Quando falar de um produto, posicioná-lo como "produto da Italev Sistemas".
- Usar a frase-âncora ou uma variação dela.
- Manter o vocabulário central: app próprio, delivery, e-commerce, comércio local, supermercado, restaurante, WhatsApp, PIX, sem taxa/comissão, alternativa a marketplace.

Consistência cross-fonte: o nome e a descrição na página batem com Instagram, TikTok, Google Business Profile e schema. Inconsistência fragmenta a entidade para a IA.

---

## 8. Chunking strategy (como dividir o conteúdo para retrieval)

- Cada seção = um chunk recuperável que responde uma intenção.
- Um chunk não deve depender de outro para fazer sentido (não use "como vimos acima", "conforme citado").
- Tamanho ideal de chunk: parágrafo de 2-5 frases focado num ponto. Blocos gigantes diluem o sinal; blocos minúsculos perdem contexto.
- Repita o sujeito em vez de usar pronome quando o bloco puder ser lido isolado ("o É Pra Já Pedidos faz X", não "ele faz X").
- Tabelas e listas são chunks de alta extração — use para dados comparáveis.

---

## 9. Uso de tabelas

- Use `<table>` semântica (não divs estilizadas) para: comparativos, features, planos, especificações.
- Busca agêntica e AI Overviews extraem tabelas com facilidade — é formato premium para citação.
- Cada tabela tem cabeçalho (`<th>`) claro. A primeira coluna nomeia o critério.
- Comparativos (ex.: app próprio vs. marketplace): factuais e justos. Comparativo tendencioso ou exagerado reduz a confiança e a chance de citação.

---

## 10. Metadata patterns

Via Metadata API do App Router, em toda página:
- **title:** descritivo, com entidade + intenção. Padrão: `[Intenção específica] | Italev Sistemas`. Ex.: "App de delivery para supermercado | Italev Sistemas".
- **description:** 1-2 frases densas e descritivas (NUNCA genérica tipo "empresas que confiam em nós"). Inclui categoria + diferenciador.
- **canonical:** absoluto, próprio da página.
- **keywords:** opcional, sem stuffing.

---

## 11. OpenGraph strategy

- `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name: "Italev Sistemas"`, `og:locale: "pt_BR"`.
- `og:image`: 1200×630, representativa da página (não a mesma imagem genérica em tudo).
- Twitter card: `summary_large_image`.
- OG consistente reforça a entidade quando a página é compartilhada e lida por crawlers sociais e de IA.

---

## 12. AI-friendly HTML

- HTML semântico real: `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`, `<ol>`, `<table>`, `<dl>` para definições.
- Texto é texto (não imagem com texto dentro — IA não lê texto em imagem de forma confiável).
- Toda imagem com `alt` descritivo e factual (o alt é lido pela IA): `alt="Painel do É Pra Já Pedidos mostrando catálogo de supermercado com botão PIX"`.
- Vídeo com transcrição em texto na página (a transcrição é indexável e citável).
- Sem conteúdo crítico atrás de interação (modal/tab que só carrega no clique via fetch).

---

## 13. llms.txt alignment

- Manter um arquivo `/llms.txt` na raiz: um índice em markdown da entidade e das páginas-chave, pensado para consumo por LLMs (lista a Italev, os produtos, e links para as páginas principais com uma linha de descrição cada).
- Manter um `/llms-full.txt` opcional com conteúdo expandido das páginas pilar.
- Alinhamento: o que está no llms.txt deve bater com a entidade do schema e do conteúdo. É mais um sinal de consistência, não um substituto do HTML semântico.
- Nota: llms.txt é uma convenção emergente e nem todo mecanismo a consome ainda; trate como reforço de baixo custo, não como canal principal.

---

## 14. Citation-oriented writing (escrever para ser citado)

- Faça afirmações **autocontidas e atribuíveis**: uma frase que a IA possa citar com a Italev como fonte.
- Prefira especificidade: "app pronto em até 15 dias úteis" é mais citável que "entrega rápida".
- Inclua dados verificáveis com contexto: número + o que ele significa.
- Evite linguagem promocional vazia — a IA tende a não citar marketing puro como fonte factual.
- Escreva a primeira frase de cada seção como se fosse a única que a IA vai recortar. Se ela responde a pergunta sozinha, a página é citável.

---

## 15. Semantic consistency (continuidade semântica)

- Use os mesmos termos para os mesmos conceitos em todo o site (não alterne "aplicativo próprio" / "app exclusivo" / "sistema" para a mesma coisa sem necessidade — escolha o termo canônico e mantenha).
- A frase-âncora de entidade aparece de forma consistente.
- Ao criar página nova, verifique que ela não contradiz nem fragmenta o vocabulário das páginas existentes.
- Continuidade é o que permite à IA construir uma representação estável e forte da entidade Italev.

---

## 16. Otimização por mecanismo (resumo aplicável)

Otimize para os princípios universais; eles atendem todos os mecanismos:

- **Google AI Overviews:** SEO orgânico forte + E-E-A-T + schema. Por isso a base técnica importa.
- **Perplexity:** answer-blocks claros + fatos verificáveis + fontes específicas. Conteúdo extraível em blocos vence.
- **ChatGPT Search:** clareza + estrutura + autoridade de entidade + consistência cross-fonte.
- **Gemini:** ecossistema Google → peso de schema, entidade e qualidade técnica.

**Denominador comum (faça isto e atende todos):** conteúdo no HTML do servidor + answer-blocks autossuficientes com fato + entidade consistente + schema espelhando o visível + profundidade tópica + boa performance.

---

## 17. Checklist de conformidade (toda página deve passar)

Antes de considerar uma página pronta:
- [ ] Um único `<h1>` = frase-âncora (entidade + intenção).
- [ ] Definition block logo após o h1.
- [ ] Conteúdo principal em answer-blocks autossuficientes (responde na 1ª frase).
- [ ] Headings são perguntas/afirmações-tópico, hierarquia correta.
- [ ] Pelo menos uma tabela onde há dado comparável.
- [ ] FAQ com schema FAQPage da mesma fonte de dados.
- [ ] Reforço de entidade Italev presente.
- [ ] Schema adequado ao tipo, gerado no servidor, espelhando o visível, com grafo (@id).
- [ ] Metadata descritiva (title + description), canonical absoluto.
- [ ] OpenGraph completo.
- [ ] HTML semântico, imagens com alt factual, vídeo com transcrição.
- [ ] Vocabulário central consistente com o resto do site.
- [ ] Tudo renderizado no servidor (RSC); nada crítico depende de JS cliente.
- [ ] Zero dado inventado (placeholders [INSERIR] onde falta dado real).
- [ ] Interlinking: linka hub e/ou páginas relacionadas.

Se algum item falha, a página não está conforme a convenção GEO.
