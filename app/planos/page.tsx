import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import PageHero from '@/components/layout/PageHero';
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

      <Navbar />

      <main>
        <PageHero
          title="Planos e preços da Italev Sistemas"
          subtitle="Assinatura mensal fixa — sem comissão por venda. Você fica com 100% de cada pedido recebido via PIX."
          badge="Planos"
        />

        {/* Cards dos planos */}
        <section aria-label="Comparativo de planos" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-3 md:items-start">
              {planos.map((plano) => (
                <PricingCard key={plano.id} plano={plano} />
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-[#64748B]">
              Todos os planos incluem suporte de segunda a sexta, 9h às 18h.
              Dúvidas?{' '}
              <a href={`mailto:${italev.email}`} className="text-[#4F7CFF] hover:underline">
                {italev.email}
              </a>
            </p>
          </div>
        </section>

        {/* Tabela de recursos */}
        <section aria-label="Tabela comparativa de recursos por plano" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-10">
              <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-3">
                O que está incluído em cada plano
              </h2>
              <p className="text-[#94A3B8]">
                Comparativo completo de recursos entre os planos Start, Pro e Scale.
              </p>
            </div>
            <div
              className="overflow-x-auto rounded-2xl border border-white/[0.08]"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr
                    className="border-b border-white/[0.08]"
                    style={{ background: 'rgba(79,124,255,0.08)' }}
                  >
                    <th scope="col" className="px-4 py-3 text-left font-sora font-bold text-[#F8FAFC]">Recurso</th>
                    <th scope="col" className="px-4 py-3 text-center font-sora font-bold text-[#F8FAFC]">Start</th>
                    <th scope="col" className="px-4 py-3 text-center font-sora font-bold text-[#4F7CFF]">Pro ⭐</th>
                    <th scope="col" className="px-4 py-3 text-center font-sora font-bold text-[#F8FAFC]">Scale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05]">
                  {recursosComparativos.map((r) => (
                    <tr
                      key={r.nome}
                      className="transition-colors"
                      style={{ ['&:hover' as string]: { background: 'rgba(79,124,255,0.05)' } }}
                    >
                      <td className="px-4 py-3 font-medium text-[#F8FAFC]">{r.nome}</td>
                      <td className="px-4 py-3 text-center">{r.start ? <span className="text-[#4F7CFF] font-bold">✓</span> : <span className="text-[#334155]">–</span>}</td>
                      <td className="px-4 py-3 text-center">{r.pro ? <span className="text-[#4F7CFF] font-bold">✓</span> : <span className="text-[#334155]">–</span>}</td>
                      <td className="px-4 py-3 text-center">{r.scale ? <span className="text-[#4F7CFF] font-bold">✓</span> : <span className="text-[#334155]">–</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-label="Dúvidas frequentes sobre os planos" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-10 text-center">
              Dúvidas frequentes sobre os planos
            </h2>
            <div className="max-w-3xl mx-auto">
              <FaqAccordion items={faqPlanos} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
