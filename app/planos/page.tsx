import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import PricingCard from '@/components/ui/PricingCard';
import FaqAccordion from '@/components/content/FaqAccordion';
import { italev } from '@/lib/entities';
import { offerCatalogSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema';
import { planos, recursosComparativos } from '@/content/comparisons/planos';
import { faqInstitucional } from '@/content/faq/institucional';

const faqPlanos = faqInstitucional.filter((f) =>
  ['diferenca-planos', 'cobra-comissao', 'tem-fidelidade', 'quanto-tempo-app-pronto', 'precisa-saber-programar', 'suporte'].includes(f.id),
);


export const metadata: Metadata = {
  title: 'Planos e preços — Start, Pro e Scale',
  description:
    'Conheça os planos da Italev Sistemas: Start R$149/mês, Pro R$219/mês e Scale R$379/mês. Assinatura fixa, sem comissão por venda. App de delivery e e-commerce próprio para seu comércio.',
  alternates: { canonical: `${italev.domain}/planos` },
  openGraph: {
    title: 'Planos Italev Sistemas — Start, Pro e Scale',
    description: 'Assinatura fixa, sem comissão. App próprio com catálogo digital, WhatsApp e PIX.',
    url: `${italev.domain}/planos`,
  },
};

export default function PlanosPage() {
  return (
    <>
      <JsonLd data={offerCatalogSchema()} />
      <JsonLd data={faqPageSchema(faqPlanos)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Italev Sistemas', url: italev.domain },
        { name: 'Planos', url: `${italev.domain}/planos` },
      ])} />

      <Header />

      <main>
        {/* Hero da página */}
        <section aria-label="Planos da Italev Sistemas" className="border-b-2 border-black bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 text-center">
            <h1 className="font-space-grotesk text-4xl font-black text-gray-900 md:text-5xl text-balance">
              Planos e preços da Italev Sistemas
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Assinatura mensal fixa — sem comissão por venda. Você fica com 100% de cada pedido recebido via PIX.
            </p>
          </div>
        </section>

        {/* Cards dos planos */}
        <section aria-label="Comparativo de planos" className="border-b-2 border-black bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="grid gap-6 md:grid-cols-3 md:items-start">
              {planos.map((plano) => (
                <PricingCard key={plano.id} plano={plano} />
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-gray-500">
              Todos os planos incluem suporte de segunda a sexta, 9h às 18h.
              Dúvidas? <a href={`mailto:${italev.email}`} className="text-[#FF5A00] hover:underline">{italev.email}</a>
            </p>
          </div>
        </section>

        {/* Tabela de recursos */}
        <section aria-label="Tabela comparativa de recursos por plano" className="border-b-2 border-black bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-space-grotesk text-2xl font-black text-gray-900 mb-2">
              O que está incluído em cada plano
            </h2>
            <p className="text-gray-500 mb-8">
              Comparativo completo de recursos entre os planos Start, Pro e Scale.
            </p>
            <div className="overflow-x-auto rounded-xl border-2 border-black shadow-[4px_4px_0_#000]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-black bg-gray-950 text-white">
                    <th scope="col" className="px-4 py-3 text-left font-space-grotesk font-bold">Recurso</th>
                    <th scope="col" className="px-4 py-3 text-center font-space-grotesk font-bold">Start</th>
                    <th scope="col" className="px-4 py-3 text-center font-space-grotesk font-bold text-[#FF5A00]">Pro ⭐</th>
                    <th scope="col" className="px-4 py-3 text-center font-space-grotesk font-bold">Scale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {recursosComparativos.map((r) => (
                    <tr key={r.nome} className="hover:bg-orange-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-800">{r.nome}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{r.start ? <span className="text-green-600 font-bold">✓</span> : <span className="text-gray-300">–</span>}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{r.pro ? <span className="text-[#FF5A00] font-bold">✓</span> : <span className="text-gray-300">–</span>}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{r.scale ? <span className="text-green-600 font-bold">✓</span> : <span className="text-gray-300">–</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ de planos */}
        <section aria-label="Dúvidas frequentes sobre os planos" className="border-b-2 border-black bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-space-grotesk text-2xl font-black text-gray-900 mb-8">
              Dúvidas frequentes sobre os planos
            </h2>
            <div className="max-w-3xl">
              <FaqAccordion items={faqPlanos} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
