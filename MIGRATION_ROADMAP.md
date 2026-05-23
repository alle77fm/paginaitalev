# MIGRATION_ROADMAP.md

**Projeto:** italevsistemas.com — migração WordPress+Elementor → Next.js 14 (App Router, RSC, TS, Tailwind), GEO-first.
**Modelo de entidade:** Italev Sistemas = entidade-mãe (software house). Produtos/submarcas: É Pra Já Pedidos, PedeLev, futuros. Modelados como entidades relacionadas, não domínios isolados.
**Objetivo:** evoluir o domínio em entidade computável forte para IA Search, sem perder SEO, URLs, autoridade ou continuidade semântica.
**Como usar:** execute as fases EM ORDEM. Não avance sem bater o checkpoint da fase anterior. Cada fase separa o que é tarefa do Claude Code do que é tarefa sua (intransferível). Prompts prontos para colar no Claude Code estão em cada fase.

---

## Princípios que governam todo o roadmap

1. **Migração gradual e reversível.** O WordPress só é desligado depois do novo site validado e estável. Sempre há rollback.
2. **Slug parity como proteção primária de SEO.** URL idêntica = nada a transferir, nada a perder. Só há 301 onde a URL realmente muda.
3. **Conteúdo no HTML do servidor (retrieval-first).** Tudo que importa para IA precisa estar no HTML renderizado, não em JS client-side.
4. **Entidade antes de página.** A entidade Italev (e o grafo de produtos) é definida primeiro, em fonte única, e alimenta tudo.
5. **Validação humana entre fases.** Claude Code não faz cutover de DNS, backup ou leitura de Search Console. Essas são suas.
6. **Continuidade semântica.** Vocabulário central preservado e aprofundado, nunca trocado.

---

## Modelo de entidade (definir antes de qualquer código)

```
Italev Sistemas (Organization) ── entidade-mãe / software house
   │
   ├── É Pra Já Pedidos (SoftwareApplication / Product) ── produto
   ├── PedeLev (SoftwareApplication / Product) ── produto
   └── [futuros produtos]
```

No schema: a `Organization` Italev é o nó central. Cada produto é uma `SoftwareApplication` com `publisher`/`provider` apontando para a Italev (via `@id`). Isso constrói um **grafo de entidades** — a IA entende que os produtos pertencem à mesma casa, e a autoridade da mãe reforça os filhos e vice-versa.

URL do site reflete a hierarquia:
- `/` → Italev Sistemas (a software house)
- `/produtos/e-pra-ja-pedidos` → produto
- `/produtos/pedelev` → produto
- `/solucoes/...` → hubs semânticos por caso de uso (segmento/dor)

---

# FASE 0 — Auditoria e baseline (TAREFA SUA, antes de qualquer código)

**Objetivo:** ter um "antes" medível e um backup seguro. Sem isto, você migra no escuro.

### Tarefas suas (intransferíveis)
- [ ] **Google Search Console:** exportar lista de páginas indexadas, queries com cliques/impressões, posições médias. Salvar como baseline.
- [ ] **Crawl do site atual** (Screaming Frog free, até 500 URLs — sobra): exportar todas as URLs, titles, descriptions, status codes.
- [ ] **Backup completo do WordPress** (arquivos + banco). Guardar em local seguro. NÃO desligar nada.
- [ ] **Listar URLs reais** que existem hoje (confirmadas): `/`, `/servicos/`, `/sobre-nos/`, `/planos/`, `/contato/`, `/termos-de-uso`, `/politica-de-privacidade`, `/politica-de-cookies/`, `/termos-e-condicoes`. Confirmar se há outras (posts, categorias, anexos).
- [ ] **Checar trailing slash:** o WP usa `/servicos/` (com barra). Anotar o padrão para replicar.

### Checkpoint 0 (critério de conclusão)
✅ Baseline do GSC salvo · ✅ lista completa de URLs exportada · ✅ backup do WP feito e testado · ✅ padrão de trailing slash anotado.

**Não avance sem isto.** É a sua rede de segurança e seu termômetro pós-migração.

---

# FASE 1 — Fundação do projeto e entidade (Claude Code)

**Objetivo:** projeto Next.js novo, em staging com `noindex`, com a entidade definida em fonte única. Nenhuma página visual ainda.

### Tarefa sua antes do prompt
- [ ] Reunir os dados reais da entidade: razão social, CNPJ, endereço (Itajubá-MG já confirmado), telefone ((35) 99749-3286 confirmado), e-mail, redes (Instagram @italevsistemas, TikTok @italevsistemas confirmados). Onde faltar, marque para preencher.

### PROMPT — Fase 1
```
Modelo: Sonnet (Thinking)

Contexto: novo projeto Next.js 14 (App Router) + TypeScript + Tailwind para
italevsistemas.com. Italev Sistemas é uma software house (entidade-mãe). Produtos:
"É Pra Já Pedidos" e "PedeLev" (submarcas). Esta é uma plataforma GEO-first:
todo conteúdo é renderizado no servidor (RSC, sem "use client"), presente no HTML.

Tarefa (apenas fundação, sem páginas visuais):
1. Inicializar projeto Next.js 14 App Router + TS + Tailwind, se ainda não existir.
2. Configurar next.config.js: trailingSlash: true (igual ao WP atual), formatos de
   imagem (AVIF, WebP), e um array redirects() VAZIO por enquanto (placeholder).
3. Criar content/entity.ts TIPADO com:
   - A entidade Italev Sistemas (nome, descrição-âncora, categoria, endereço,
     telefone, email, redes sociais, url).
   - Um array de produtos (É Pra Já Pedidos, PedeLev) com {slug, nome, categoria,
     descrição, statusEntidade}. Deixar [INSERIR] onde eu preciso completar dados.
   - A frase-âncora de entidade da Italev (uma frase densa que define o que a
     software house faz, para quem, e o diferenciador).
4. Criar lib/schema.ts com geradores JSON-LD:
   - organizationSchema() — Italev como Organization, com @id estável.
   - Geradores stub para SoftwareApplication (produto) e FAQPage (preencher depois).
   Usar @id para permitir o grafo de entidades (produtos referenciam a Organization).
5. Configurar app/layout.tsx: next/font (Space Grotesk + Inter), metadata base a
   partir de entity.ts, e injetar o JSON-LD de Organization no servidor.
6. Configurar app/robots.ts para BLOQUEAR indexação (staging) e app/sitemap.ts stub.

Restrições:
- TypeScript estrito, sem any. Nada de "use client" nesta fase.
- Não inventar dados — usar [INSERIR] onde faltar (CNPJ, email, etc.).
- Deploy em staging na Vercel com noindex garantido.

Após concluir, faça commit e push para o GitHub (branch main). Deploy automático
via Vercel em URL de staging. CONFIRME que robots bloqueia indexação no staging.
```

### Checkpoint 1
✅ Projeto roda em staging · ✅ `content/entity.ts` existe e é a fonte única · ✅ schema Organization válido no Rich Results Test · ✅ staging com `noindex` confirmado (verificar o header/meta).

---

# FASE 2 — Páginas institucionais (slugs preservados) (Claude Code)

**Objetivo:** recriar as páginas que JÁ existem, com slugs idênticos, conteúdo reescrito para GEO seguindo a GEO_PAGE_CONVENTION.md.

### PROMPT — Fase 2
```
Modelo: Sonnet (Thinking)

Contexto: continuação da migração GEO da Italev Sistemas. Fundação e entity.ts já
existem. Agora recriar as páginas institucionais que já existiam no WordPress,
PRESERVANDO os slugs idênticos para não quebrar SEO. Seguir TODAS as regras do
documento GEO_PAGE_CONVENTION.md (anatomia, answer-blocks, headings semânticos,
schema, reforço de entidade).

Tarefa: criar como Server Components, com slugs IDÊNTICOS aos do WP:
- app/page.tsx — Home da Italev Sistemas (a software house). H1 = frase-âncora de
  entidade. Apresenta a Italev e lista os produtos (É Pra Já, PedeLev) como cards
  que linkam para /produtos/[slug]. NÃO é landing de um produto só — é a casa.
- app/servicos/page.tsx
- app/sobre-nos/page.tsx
- app/planos/page.tsx
- app/contato/page.tsx
- app/termos-de-uso/page.tsx
- app/politica-de-privacidade/page.tsx (com seção LGPD)
- app/politica-de-cookies/page.tsx
- app/termos-e-condicoes/page.tsx

Para cada página: metadata própria (title e description DESCRITIVOS — corrigir a
description genérica "Empresas que confiam em nós" do site atual), canonical
absoluto, e schema adequado. Reaproveitar os depoimentos reais que já existem no
site atual (Carlos Mendes/Supermercado Ideal, Luciana Ferreira/Açougue Bom Corte,
Thiago Costa/Lanchonete Sabor da Vila) — esses são reais, podem ficar.

Restrições:
- Slugs IDÊNTICOS ao WP (incluindo trailing slash conforme next.config).
- Design system: neo-brutalista, laranja #FF5A00, Space Grotesk + Inter.
- Tudo RSC. HTML semântico. next/image para imagens (converter PNGs para WebP/AVIF).
- Seguir GEO_PAGE_CONVENTION.md em cada página.
- Vídeo do YouTube: usar facade leve (thumbnail → iframe só no clique).

Após concluir, faça commit e push (branch main). Deploy staging (ainda noindex).
```

### Checkpoint 2
✅ Todas as páginas antigas recriadas com slug idêntico · ✅ titles/descriptions únicos e descritivos · ✅ canonical correto em cada uma · ✅ depoimentos reais preservados · ✅ nenhum conteúdo semântico central perdido (comparar com baseline da Fase 0).

---

# FASE 3 — Grafo de produtos e hubs semânticos (Claude Code)

**Objetivo:** construir as páginas de produto (entidades relacionadas) e os hubs semânticos (topical authority). É aqui que o site vira plataforma semântica.

### PROMPT — Fase 3
```
Modelo: Sonnet (Thinking)

Contexto: migração GEO da Italev Sistemas. Páginas institucionais prontas. Agora
construir o grafo de produtos e os hubs semânticos (topical authority). Seguir
GEO_PAGE_CONVENTION.md rigorosamente.

Tarefa:
1. Páginas de produto (entidades relacionadas à Italev):
   - app/produtos/e-pra-ja-pedidos/page.tsx
   - app/produtos/pedelev/page.tsx
   Cada uma: H1-âncora do produto, definition block (o que é), answer-blocks,
   passos numerados, tabela de features, FAQ específica + schema SoftwareApplication
   com publisher apontando para o @id da Organization Italev (grafo de entidades).
2. Hub semântico pilar + spokes (topical authority por caso de uso):
   - app/solucoes/page.tsx — hub pilar ("apps de delivery/e-commerce para comércios")
   - app/solucoes/supermercado/page.tsx
   - app/solucoes/restaurante/page.tsx
   - app/solucoes/acougue/page.tsx
   - app/solucoes/alternativa-ifood/page.tsx
   - app/solucoes/pedidos-whatsapp/page.tsx
   Cada spoke: anatomia completa da GEO_PAGE_CONVENTION, linkando de volta ao hub e
   a spokes irmãos (interlinking denso = topical authority).
3. Conteúdo das FAQs e comparativos em content/ como fonte única (faq.ts por escopo,
   comparison.ts), consumidos tanto pela UI quanto pelo schema.
4. Atualizar app/sitemap.ts com TODAS as novas URLs.

Restrições:
- Onde faltar dado real (preço, número de clientes), usar [INSERIR] — não inventar.
- Schema de produto referencia a Organization por @id (grafo).
- Interlinking: todo spoke linka hub + irmãos; hub linka todos os spokes.
- Tudo RSC, retrieval-first, seguindo a convenção.

Após concluir, faça commit e push (branch main). Deploy staging (ainda noindex).
```

### Checkpoint 3
✅ Páginas de produto com schema referenciando a Organization (grafo válido) · ✅ hub + spokes com interlinking denso · ✅ sitemap atualizado · ✅ cada página segue a anatomia da convenção · ✅ nenhum dado inventado (placeholders onde falta).

---

# FASE 4 — Redirects e SEO técnico (Claude Code + sua validação)

**Objetivo:** garantir que nenhuma URL antiga quebre e fechar o SEO técnico.

### Tarefa sua antes do prompt
- [ ] Da lista de URLs da Fase 0, identificar quais MUDARAM de slug (se houver). Páginas com slug preservado não precisam de redirect.
- [ ] Listar URLs técnicas do WP que somem (`/wp-admin`, feeds RSS, `/?p=N`, anexos) para tratamento.

### PROMPT — Fase 4
```
Modelo: Sonnet

Contexto: migração GEO da Italev. Fechar redirects e SEO técnico antes do cutover.

Tarefa:
1. Em next.config.js, preencher redirects() com 301 (permanent: true) para CADA URL
   antiga que mudou de caminho, mapeada 1:1 para a nova URL equivalente. NUNCA
   redirecionar tudo para a home. [Vou fornecer o mapa de URLs que mudaram.]
2. URLs técnicas do WordPress que não existem mais (/wp-admin, /feed, /?p=N,
   /wp-content antigos): 301 para a página relevante, ou deixar 404/410 se realmente
   não têm equivalente. [Vou indicar quais.]
3. Revisar TODAS as páginas: um único h1 por página, hierarquia h2/h3 correta,
   canonical absoluto, alt descritivo em toda imagem.
4. Finalizar app/sitemap.ts (todas as URLs indexáveis, com lastModified) e
   app/robots.ts (PRONTO para produção, mas ainda bloqueado enquanto em staging —
   deixar comentado o disallow para eu remover no cutover).
5. Validar que SoftwareApplication, Organization, LocalBusiness e FAQPage estão
   todos presentes e válidos.

Restrições:
- Redirect 1:1, permanente, sem cadeia (sem redirect que aponta para outro redirect).
- Não habilitar indexação ainda — isso é feito no cutover (Fase 5).

Após concluir, faça commit e push (branch main). Deploy staging.
```

### Checkpoint 4 (validação SUA, crítica)
- [ ] Crawl do staging: **zero links quebrados, zero redirect em cadeia**.
- [ ] Rich Results Test: Organization, LocalBusiness, SoftwareApplication, FAQPage validam.
- [ ] PageSpeed/Lighthouse mobile: LCP < 2.5s, CLS < 0.1, INP bom. **Verde.**
- [ ] Cada URL antiga (da Fase 0) ou tem slug idêntico, ou tem 301 testado apontando para o lugar certo.
- [ ] Cobertura de metadados nova ≥ antiga em toda página.

✅ Só avance para o cutover quando TODOS os itens acima passarem.

---

# FASE 5 — Cutover (TAREFA SUA — Claude Code não faz isto)

**Objetivo:** virar o domínio para o novo site com segurança.

### Tarefas suas (intransferíveis)
- [ ] Escolher janela de **baixo tráfego** (madrugada/fim de semana).
- [ ] Apontar `italevsistemas.com` para a Vercel (trocar DNS no registrador). Começar **só com Vercel**, sem Cloudflare na frente (evita redirect loop/SSL mal configurado).
- [ ] Remover o `noindex`/disallow do site novo (ativar indexação em produção).
- [ ] Confirmar que os 301 estão ativos em produção.
- [ ] Aguardar propagação de DNS (24–48h).
- [ ] **NÃO desligar o WordPress.** Apenas tirá-lo do domínio. Manter no ar/backup como rollback.

### Checkpoint 5
✅ Domínio resolve para o novo site · ✅ indexação ativada · ✅ 301 respondendo em produção (testar 3-4 URLs antigas manualmente) · ✅ HTTPS válido · ✅ WP preservado como rollback.

---

# FASE 6 — Monitoramento pós-cutover (TAREFA SUA — 2 a 4 semanas)

**Objetivo:** confirmar que a autoridade foi preservada e corrigir rápido qualquer regressão.

### Tarefas suas
- [ ] Submeter o novo `sitemap.xml` no Google Search Console.
- [ ] **Diariamente nas 2 primeiras semanas:** checar GSC para erros de cobertura, 404s, páginas desindexadas.
- [ ] Corrigir imediatamente qualquer 404 relevante (adicionar o 301 que faltou → pedir patch ao Claude Code).
- [ ] Comparar tráfego orgânico vs. baseline da Fase 0. **Flutuação é normal nas primeiras semanas.** Se não estabilizar em ~4 semanas, há problema de redirect/indexação.
- [ ] Verificar manualmente em ChatGPT/Perplexity/Google se a entidade Italev e os produtos começam a aparecer (citação leva semanas — não no dia 1).

### Checkpoint 6
✅ Rankings estáveis ou em alta vs. baseline · ✅ zero 404 relevante pendente · ✅ todas as páginas indexadas no GSC · ✅ Core Web Vitals verdes em produção.

---

# FASE 7 — Desligamento do WordPress (TAREFA SUA)

**Objetivo:** remover o WP só quando for seguro.

### Tarefas suas
- [ ] Confirmar **4–6 semanas estáveis** após o cutover (Checkpoint 6 batido por semanas, não dias).
- [ ] Arquivar backup final do WordPress (guardar offline).
- [ ] Desligar a instância WordPress / cancelar hospedagem antiga.
- [ ] Remover plugins/credenciais antigas.

### Checkpoint 7
✅ Site Next.js estável há semanas · ✅ backup arquivado · ✅ WP desligado · ✅ migração concluída.

---

# Preenchimento dos [INSERIR] (TAREFA SUA, contínua)

Dados reais que só você tem e que precisam substituir placeholders antes da produção:
- [ ] Razão social + CNPJ da Italev (para LocalBusiness/Organization).
- [ ] E-mail de contato oficial.
- [ ] Preço dos planos / se há plano grátis.
- [ ] Tempo real de entrega do app ("até 15 dias úteis" já aparece no site — usar).
- [ ] Números reais (clientes, usuários) — o site atual mostra "0+" placeholder; usar número real ou omitir, **nunca inventar**.
- [ ] Faixa de comissão de marketplace nos comparativos — **validar com fonte datada** antes de publicar (me peça a pesquisa).

---

# Matriz de responsabilidade (quem faz o quê)

| Tarefa | Claude Code | Você |
|---|---|---|
| Auditoria GSC + baseline | | ✅ |
| Backup WordPress | | ✅ |
| Código (páginas, schema, redirects) | ✅ | |
| Definir dados reais / preencher [INSERIR] | | ✅ |
| Validação de crawl/schema/CWV | ✅ gera, você confere | ✅ |
| Troca de DNS / cutover | | ✅ |
| Remover noindex em produção | | ✅ |
| Monitorar GSC pós-cutover | | ✅ |
| Patch de 404/redirect que faltou | ✅ | aciona |
| Desligar WordPress | | ✅ |

---

# Riscos e mitigação

| Risco | Mitigação |
|---|---|
| Staging indexado pelo Google | robots disallow + noindex no staging; remover só no cutover |
| URL antiga quebra → perde ranking | slug parity + mapa 301 testado em crawl antes do go-live |
| Perda de conteúdo semântico | preservar vocabulário central; reescrever para aprofundar, não trocar |
| Inconsistência de entidade | content/entity.ts fonte única; alinhar redes sociais e Google Business |
| Schema divergente do visível | schema gerado da mesma fonte de dados do conteúdo |
| Grafo de produtos quebrado | @id estável na Organization; produtos referenciam por @id |
| Regressão de performance | Lighthouse verde em staging obrigatório antes do cutover |
| Cloudflare+Vercel mal configurado | começar só com Vercel; Cloudflare depois, com cuidado |
| Desligar WP cedo demais | esperar 4-6 semanas estáveis; manter backup |
| Dado inventado vira passivo | política [INSERIR]; nunca fabricar número/prova |

---

# Ordem de execução (resumo de uma linha)

Fase 0 (você: auditoria+backup) → Fase 1 (CC: fundação+entidade) → Fase 2 (CC: páginas institucionais, slug parity) → Fase 3 (CC: grafo de produtos + hubs semânticos) → Fase 4 (CC: redirects+SEO técnico) → **validar tudo** → Fase 5 (você: cutover DNS) → Fase 6 (você: monitorar 2-4 semanas) → Fase 7 (você: desligar WP).

**Regra de ouro:** nunca pule um checkpoint. A migração quebra exatamente onde alguém pula a validação.
