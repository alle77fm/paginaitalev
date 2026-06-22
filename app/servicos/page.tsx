import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import DefinitionBlock from '@/components/content/DefinitionBlock';
import AnswerBlock from '@/components/content/AnswerBlock';
import SolutionCard from '@/components/content/SolutionCard';
import { italev } from '@/lib/entities';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';
import { solucoes } from '@/content/answer-blocks/mercado';

export const metadata: Metadata = {
  title: 'Serviços — Desenvolvimento de apps de delivery e e-commerce',
  description:
    'A Italev Sistemas desenvolve aplicativos próprios de delivery, catálogo digital e e-commerce para supermercados, restaurantes e comércios locais. Conheça os serviços.',
  alternates: { canonical: `${italev.domain}/servicos` },
  openGraph: {
    title: 'Serviços da Italev Sistemas — Apps de delivery e e-commerce',
    description: 'Software house especializada em apps próprios para comércios locais. Sem comissão por venda.',
    url: `${italev.domain}/servicos`,
  },
};

export default function ServicosPage() {
  return (
    <>
      <JsonLd data={serviceSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Italev Sistemas', url: italev.domain },
        { name: 'Serviços', url: `${italev.domain}/servicos` },
      ])} />

      <main>
        <PageHero
          title="O que a Italev Sistemas desenvolve para o seu comércio"
          subtitle="Aplicativos próprios de delivery, catálogo digital e e-commerce — sem dependência de marketplace."
          badge="Serviços"
        />

        {/* Definição da entidade */}
        <section aria-label="Definição — Italev Sistemas" className="section">
          <div className="mx-auto max-w-3xl px-6">
            <DefinitionBlock
              termo="Italev Sistemas"
              definicao={italev.entityStatement}
            />
            <p className="mt-6 text-[#94A3B8] leading-relaxed">
              Como especialistas em aplicativos para o comércio local brasileiro, a Italev
              Sistemas desenvolve desde o aplicativo para supermercado até o aplicativo para
              padaria e o aplicativo para açougue, além de soluções de aplicativo para
              delivery. Cada projeto inclui um catálogo digital próprio e vendas pelo
              WhatsApp, para que o comércio receba pedidos online com a sua marca, sem
              depender de marketplaces.
            </p>
          </div>
        </section>

        {/* Soluções */}
        <section aria-label="Soluções disponíveis" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
                Soluções desenvolvidas pela Italev Sistemas
              </h2>
              <p className="text-[#94A3B8] max-w-2xl mx-auto">
                Cada solução é desenvolvida sob a marca do comércio — sem dependência de marketplace.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {solucoes.map((s) => (
                <SolutionCard key={s.id} icone={s.icone} titulo={s.titulo} descricao={s.descricao} />
              ))}
            </div>
          </div>
        </section>

        {/* Como entrega */}
        <section aria-label="Como a Italev entrega os projetos" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-10 text-center">
              Como a Italev Sistemas entrega cada projeto
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
              <AnswerBlock
                heading="App pronto em até 15 dias úteis"
                resposta="A Italev Sistemas cuida de toda a configuração: catálogo, identidade visual, domínio e integração com WhatsApp. O comerciante não precisa de conhecimento técnico — apenas fornece as informações do negócio."
                fato="Entrega rápida sem abrir mão da personalização da marca."
                headingLevel="h3"
              />
              <AnswerBlock
                heading="Suporte técnico incluso na assinatura"
                resposta="Todos os planos incluem suporte de segunda a sexta, das 9h às 18h. A equipe da Italev Sistemas atende por WhatsApp e e-mail para resolver dúvidas e ajustes no sistema."
                fato="Sem custo adicional de suporte — está incluído na assinatura mensal."
                headingLevel="h3"
              />
              <AnswerBlock
                heading="Atualizações e manutenção automáticas"
                resposta="A plataforma da Italev Sistemas é SaaS — o comerciante não precisa gerenciar servidores, hospedagem ou atualizações. Tudo é mantido pela Italev como parte do serviço."
                fato="Infraestrutura gerenciada = zero preocupação técnica para o lojista."
                headingLevel="h3"
              />
              <AnswerBlock
                heading="Identidade visual e domínio próprios"
                resposta="Nos planos Pro e Scale, o aplicativo é entregue com a marca, as cores e o domínio do estabelecimento. O cliente final vê a marca do comércio — não a da Italev."
                headingLevel="h3"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Comece agora" className="section">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div
              className="rounded-[40px] border border-[#FF5A00]/20 p-12 md:p-16"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,90,0,0.06) 0%, rgba(255,255,255,0.02) 100%)',
              }}
            >
              <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
                Pronto para ter seu app próprio?
              </h2>
              <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
                Conheça os planos e comece com a Italev Sistemas hoje.
              </p>
              <Link
                href="/planos"
                className="inline-flex items-center justify-center bg-[#FF5A00] hover:bg-[#e04e00] text-white px-8 py-4 rounded-[10px] font-semibold transition-all duration-200 shadow-[0_0_24px_rgba(255,90,0,0.35)]"
              >
                Ver planos e preços
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
