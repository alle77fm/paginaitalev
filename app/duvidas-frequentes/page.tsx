import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import FaqAccordion from '@/components/content/FaqAccordion';
import { italev } from '@/lib/entities';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import { duvidasFrequentes } from '@/content/faq/duvidas-frequentes';

const demoMessage =
  'Olá! Gostaria de solicitar uma demonstração gratuita e conhecer como a Italev Sistemas pode ajudar meu negócio a vender mais online.';

const demoHref = `https://wa.me/${italev.whatsapp}?text=${encodeURIComponent(demoMessage)}`;

export const metadata: Metadata = {
  title: 'Dúvidas frequentes | Italev Sistemas',
  description:
    'Tire dúvidas sobre o aplicativo próprio da Italev Sistemas para comércios venderem online, receberem pedidos pelo WhatsApp, divulgarem ofertas e venderem sem comissão por pedido.',
  alternates: { canonical: `${italev.domain}/duvidas-frequentes` },
  openGraph: {
    title: 'Dúvidas frequentes | Italev Sistemas',
    description:
      'Entenda como funciona o aplicativo próprio da Italev Sistemas para comércios venderem online, receberem pedidos pelo WhatsApp e divulgarem ofertas.',
    url: `${italev.domain}/duvidas-frequentes`,
  },
};

export default function DuvidasFrequentesPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(duvidasFrequentes)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Italev Sistemas', url: italev.domain },
        { name: 'Dúvidas frequentes', url: `${italev.domain}/duvidas-frequentes` },
      ])} />

      <Header />

      <main className="relative pt-32 md:pt-40">
        <section className="max-w-container mx-auto px-margin-mobile md:px-gutter pb-section-gap-mobile md:pb-section-gap-desktop">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-label-caps text-primary-container mb-4 block uppercase tracking-widest">
              Dúvidas frequentes
            </span>
            <h1 className="text-headline-xl text-on-surface mb-5">
              Dúvidas frequentes sobre o aplicativo da Italev Sistemas
            </h1>
            <p className="text-on-secondary-container text-body-lg leading-relaxed">
              Entenda como funciona o aplicativo próprio para comércios venderem online, receberem pedidos pelo WhatsApp e divulgarem ofertas sem comissão por pedido.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={duvidasFrequentes} />
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-primary-container/20 bg-surface-container-low/80 p-6 text-center shadow-[0_12px_36px_rgba(0,0,0,0.22)]">
            <p className="mb-5 text-base font-semibold leading-relaxed text-on-surface">
              Quer entender qual configuração faz sentido para o seu comércio?
            </p>
            <a
              href={demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary-container px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_rgba(255,102,0,0.22)] transition-all active:scale-[0.98] md:w-auto md:hover:bg-primary-container/90"
            >
              Solicitar demonstração gratuita
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
