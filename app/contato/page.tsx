import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { italev } from '@/lib/entities';
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contato — Fale com a Italev Sistemas',
  description:
    'Entre em contato com a Italev Sistemas. Atendimento de segunda a sexta, das 9h às 18h, via WhatsApp e e-mail. Tire dúvidas sobre planos e funcionamento.',
  alternates: { canonical: `${italev.domain}/contato` },
  openGraph: {
    title: 'Contato — Italev Sistemas',
    description: 'Fale com nossa equipe. Segunda a sexta, 9h às 18h.',
    url: `${italev.domain}/contato`,
  },
};

export default function ContatoPage() {
  const waMsg = encodeURIComponent('Olá, gostaria de saber mais sobre os planos da Italev Sistemas.');

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Italev Sistemas', url: italev.domain },
        { name: 'Contato', url: `${italev.domain}/contato` },
      ])} />

      <Header />

      <main>
        <section aria-label="Contato com a Italev Sistemas" className="border-b-2 border-black bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h1 className="font-space-grotesk text-4xl font-black text-gray-900 mb-4 md:text-5xl text-balance">
              Fale com a equipe da Italev Sistemas
            </h1>
            <p className="text-gray-600 max-w-xl mb-10">
              Tire dúvidas sobre planos, funcionamento e como ter seu app próprio. Respondemos de
              segunda a sexta, das 9h às 18h.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 max-w-2xl">
              {/* WhatsApp */}
              <article className="rounded-xl border-2 border-black bg-white p-6 shadow-[4px_4px_0_#000]">
                <h2 className="font-space-grotesk font-bold text-gray-900 mb-1">WhatsApp</h2>
                <p className="text-sm text-gray-500 mb-4">Resposta mais rápida — canal preferencial.</p>
                <a
                  href={`https://wa.me/${italev.whatsapp}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-[#FF5A00] px-5 py-2.5 text-sm font-bold text-white shadow-[3px_3px_0_#000] transition-all hover:shadow-[1px_1px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  Abrir WhatsApp
                </a>
                <p className="mt-3 text-xs text-gray-400">{italev.phone}</p>
              </article>

              {/* E-mail */}
              <article className="rounded-xl border-2 border-black bg-white p-6 shadow-[4px_4px_0_#000]">
                <h2 className="font-space-grotesk font-bold text-gray-900 mb-1">E-mail</h2>
                <p className="text-sm text-gray-500 mb-4">Para assuntos mais detalhados.</p>
                <a
                  href={`mailto:${italev.email}`}
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-white px-5 py-2.5 text-sm font-bold text-gray-900 shadow-[3px_3px_0_#000] transition-all hover:shadow-[1px_1px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  Enviar e-mail
                </a>
                <p className="mt-3 text-xs text-gray-400">{italev.email}</p>
              </article>

              {/* Horário */}
              <article className="rounded-xl border-2 border-black bg-gray-50 p-6 sm:col-span-2">
                <h2 className="font-space-grotesk font-bold text-gray-900 mb-1">Horário de atendimento</h2>
                <p className="text-gray-700">{italev.atendimento}</p>
                <p className="mt-1 text-sm text-gray-500">
                  Mensagens fora do horário são respondidas no próximo dia útil.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
