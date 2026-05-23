import type { Metadata } from 'next';
import Link from 'next/link';
import HeroVerFuncionandoBtn from '@/components/ui/HeroVerFuncionandoBtn';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import DefinitionBlock from '@/components/content/DefinitionBlock';
import AnswerBlock from '@/components/content/AnswerBlock';
import SolutionCard from '@/components/content/SolutionCard';
import Steps from '@/components/content/Steps';
import ProductTeaser from '@/components/content/ProductTeaser';
import ComparisonTable from '@/components/content/ComparisonTable';
import FaqAccordion from '@/components/content/FaqAccordion';
import Testimonials from '@/components/content/Testimonials';
import YouTubeFacade from '@/components/content/YouTubeFacade';
import { italev, produtos } from '@/lib/entities';
import { serviceSchema, faqPageSchema } from '@/lib/schema';
import { faqInstitucional } from '@/content/faq/institucional';
import {
  doresMercado,
  solucoes,
  beneficios,
  comoFunciona,
} from '@/content/answer-blocks/mercado';
import { comparativoPropriaVsMarketplace } from '@/content/comparisons/propria-vs-marketplace';

export const metadata: Metadata = {
  title: 'App de delivery e e-commerce para comércios locais | Italev Sistemas',
  description:
    'Italev Sistemas desenvolve aplicativos próprios de delivery e e-commerce para supermercados, restaurantes e comércios locais. Pedidos no WhatsApp, PIX, sem comissão por venda.',
  alternates: { canonical: italev.domain },
  openGraph: {
    title: 'Italev Sistemas — App de delivery próprio para seu comércio',
    description:
      'Venda online com app e catálogo próprios. Sem marketplace, sem comissão. Pedidos no WhatsApp e PIX.',
    url: italev.domain,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceSchema()} />
      <JsonLd data={faqPageSchema(faqInstitucional)} />

      <Header />

      <main>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          aria-label="Apresentação da Italev Sistemas"
          className="border-b-2 border-black bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <span className="inline-block mb-4 rounded-full border-2 border-black bg-[#FF5A00] px-4 py-1 text-xs font-black text-white shadow-[2px_2px_0_#000]">
                Software house brasileira
              </span>
              <h1 className="font-space-grotesk text-4xl font-black leading-tight text-gray-900 md:text-5xl lg:text-6xl text-balance">
                Transforme seu comércio em um app próprio e venda mais todos os dias
              </h1>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
                Catálogo digital, pedidos no WhatsApp, PIX, promoções automáticas e sua marca na mão do cliente.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/planos"
                  className="inline-flex items-center rounded-lg border-2 border-black bg-[#FF5A00] px-6 py-3 font-bold text-white shadow-[4px_4px_0_#000] transition-all duration-150 hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none"
                >
                  Ver planos
                </Link>
                {/* "Ver funcionando" — Client Component isolado que aciona o FloatingButton */}
                <HeroVerFuncionandoBtn />
              </div>
              <p className="mt-5 text-sm text-gray-500">
                App pronto em até 15 dias úteis · Sem taxa por pedido · Suporte incluído
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. ENTITY INTRODUCTION ──────────────────────────────────────── */}
        <section
          aria-label="O que é a Italev Sistemas"
          className="border-b-2 border-black bg-gray-50"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-space-grotesk text-2xl font-black text-gray-900 mb-6">
              O que é a Italev Sistemas
            </h2>
            <div className="max-w-3xl space-y-5">
              <DefinitionBlock
                termo="Italev Sistemas"
                definicao={italev.entityStatement}
              />
              <p className="text-gray-600 leading-relaxed">
                Fundada em Itajubá-MG, a Italev Sistemas atende supermercados, restaurantes,
                açougues, padarias e outros comércios locais que desejam vender online com
                identidade própria — sem depender de marketplaces que cobram comissão por pedido
                e retêm os dados dos clientes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Os aplicativos desenvolvidos pela Italev integram catálogo digital, pagamento via
                PIX, pedidos automatizados pelo WhatsApp e ferramentas de promoção — tudo sob a
                marca do próprio estabelecimento.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. DORES DO MERCADO ─────────────────────────────────────────── */}
        <section
          aria-label="Problemas que a Italev Sistemas resolve"
          className="border-b-2 border-black bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-space-grotesk text-2xl font-black text-gray-900 mb-2">
              Por que comércios locais perdem dinheiro vendendo por marketplace
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl">
              Cada um destes problemas tem solução com um app próprio da Italev Sistemas.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {doresMercado.map((bloco) => (
                <AnswerBlock
                  key={bloco.id}
                  heading={bloco.heading}
                  resposta={bloco.resposta}
                  fato={bloco.fato}
                  headingLevel="h3"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. SOLUÇÕES ─────────────────────────────────────────────────── */}
        <section
          aria-label="Soluções da Italev Sistemas"
          className="border-b-2 border-black bg-gray-50"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-space-grotesk text-2xl font-black text-gray-900 mb-2">
              O que a Italev Sistemas desenvolve para o seu comércio
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl">
              Cada solução é pensada para comércios locais que querem crescer com tecnologia própria.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {solucoes.map((s) => (
                <SolutionCard
                  key={s.id}
                  icone={s.icone}
                  titulo={s.titulo}
                  descricao={s.descricao}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. COMO FUNCIONA ────────────────────────────────────────────── */}
        <section
          aria-label="Como funciona a Italev Sistemas"
          className="border-b-2 border-black bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-space-grotesk text-2xl font-black text-gray-900 mb-2">
              Como funciona: do contrato ao app no ar
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl">
              Cinco passos. A equipe da Italev cuida de toda a parte técnica.
            </p>
            <div className="max-w-3xl">
              <Steps passos={comoFunciona} />
            </div>
          </div>
        </section>

        {/* ── 6. BENEFÍCIOS ───────────────────────────────────────────────── */}
        <section
          aria-label="Benefícios de ter um app próprio com a Italev"
          className="border-b-2 border-black bg-gray-50"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-space-grotesk text-2xl font-black text-gray-900 mb-2">
              O que muda quando você tem um app próprio
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl">
              Cada benefício tem uma consequência concreta para o faturamento e a autonomia do negócio.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {beneficios.map((b) => (
                <AnswerBlock
                  key={b.id}
                  heading={b.heading}
                  resposta={b.resposta}
                  fato={b.fato}
                  headingLevel="h3"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. ECOSSISTEMA (TEASER) ─────────────────────────────────────── */}
        <section
          aria-label="Produtos do ecossistema Italev Sistemas"
          className="border-b-2 border-black bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-space-grotesk text-2xl font-black text-gray-900 mb-2">
              Ecossistema de produtos Italev Sistemas
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl">
              A Italev Sistemas desenvolve aplicativos próprios para diferentes perfis de comércio local.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 max-w-2xl">
              {produtos.map((p) => (
                <ProductTeaser
                  key={p.slug}
                  nome={p.nome}
                  categoria={p.categoria}
                  descricao={p.descricao}
                  tag={p.tag}
                  status={p.status}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. TABELA COMPARATIVA ───────────────────────────────────────── */}
        <section
          aria-label="Comparativo app próprio vs marketplace"
          className="border-b-2 border-black bg-gray-50"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-space-grotesk text-2xl font-black text-gray-900 mb-2">
              App próprio com a Italev vs. vender por marketplace
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl">
              Uma comparação factual entre os dois modelos de venda online para comércios locais.
            </p>
            <ComparisonTable linhas={comparativoPropriaVsMarketplace} />
            <p className="mt-3 text-xs text-gray-400">
              * Comissão de marketplace: dado a ser validado com fonte datada antes de publicar. [INSERIR]
            </p>
          </div>
        </section>

        {/* ── 9. FAQ ──────────────────────────────────────────────────────── */}
        <section
          aria-label="Perguntas frequentes sobre a Italev Sistemas"
          className="border-b-2 border-black bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-space-grotesk text-2xl font-black text-gray-900 mb-2">
              Perguntas frequentes sobre a Italev Sistemas
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl">
              Dúvidas sobre planos, funcionamento, integração e como começar.
            </p>
            <div className="max-w-3xl">
              <FaqAccordion items={faqInstitucional} />
            </div>
          </div>
        </section>

        {/* ── 10. PROVA SOCIAL ────────────────────────────────────────────── */}
        <section
          aria-label="Depoimentos de clientes da Italev Sistemas"
          className="border-b-2 border-black bg-gray-50"
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-space-grotesk text-2xl font-black text-gray-900 mb-2">
              Comércios que já vendem com app próprio da Italev
            </h2>
            <p className="text-gray-500 mb-8">
              App pronto em até 15 dias úteis — veja o que dizem os clientes.
            </p>
            <Testimonials />
          </div>
        </section>

        {/* ── 11. CTA FINAL ───────────────────────────────────────────────── */}
        <section
          aria-label="Comece agora com a Italev Sistemas"
          className="bg-gray-950 text-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 text-center">
            <h2 className="font-space-grotesk text-3xl font-black leading-tight md:text-4xl text-balance">
              Pronto para ter seu app próprio e vender sem pagar comissão?
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Fale com a equipe da Italev Sistemas. Atendimento de segunda a sexta, das 9h às 18h.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/planos"
                className="inline-flex items-center rounded-lg border-2 border-black bg-[#FF5A00] px-6 py-3 font-bold text-white shadow-[4px_4px_0_#000] transition-all duration-150 hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none"
              >
                Ver planos e preços
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-all duration-150 hover:bg-white hover:text-gray-900"
              >
                Falar com a equipe
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
