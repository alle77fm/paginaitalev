import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
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

      <Header />

      <main>
        <section aria-label="Serviços da Italev Sistemas" className="border-b-2 border-black bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h1 className="font-space-grotesk text-4xl font-black text-gray-900 mb-6 md:text-5xl text-balance">
              O que a Italev Sistemas desenvolve para o seu comércio
            </h1>
            <div className="max-w-3xl">
              <DefinitionBlock
                termo="Italev Sistemas"
                definicao={italev.entityStatement}
              />
            </div>
          </div>
        </section>

        <section aria-label="Soluções disponíveis" className="border-b-2 border-black bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-space-grotesk text-2xl font-black text-gray-900 mb-2">
              Soluções desenvolvidas pela Italev Sistemas
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl">
              Cada solução é desenvolvida sob a marca do comércio — sem dependência de marketplace.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {solucoes.map((s) => (
                <SolutionCard key={s.id} icone={s.icone} titulo={s.titulo} descricao={s.descricao} />
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Como a Italev entrega os projetos" className="border-b-2 border-black bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-space-grotesk text-2xl font-black text-gray-900 mb-8">
              Como a Italev Sistemas entrega cada projeto
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 max-w-3xl">
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
                resposta="Nos planos Pro e Growth, o aplicativo é entregue com a marca, as cores e o domínio do estabelecimento. O cliente final vê a marca do comércio — não a da Italev."
                headingLevel="h3"
              />
            </div>
          </div>
        </section>

        <section aria-label="Comece agora" className="bg-gray-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-14 text-center">
            <h2 className="font-space-grotesk text-2xl font-black mb-4">
              Pronto para ter seu app próprio?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Conheça os planos e comece com a Italev Sistemas hoje.
            </p>
            <Link
              href="/planos"
              className="inline-flex items-center rounded-lg border-2 border-black bg-[#FF5A00] px-6 py-3 font-bold text-white shadow-[4px_4px_0_#000] transition-all hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Ver planos e preços
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
