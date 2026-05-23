import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import DefinitionBlock from '@/components/content/DefinitionBlock';
import Testimonials from '@/components/content/Testimonials';
import { italev } from '@/lib/entities';
import { organizationSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Sobre a Italev Sistemas — Software house de apps para comércios locais',
  description:
    'Italev Sistemas é uma software house brasileira com sede em Itajubá-MG. Desenvolve aplicativos próprios de delivery e e-commerce para supermercados, restaurantes e comércios locais.',
  alternates: { canonical: `${italev.domain}/sobre-nos` },
  openGraph: {
    title: 'Sobre a Italev Sistemas',
    description: 'Software house brasileira de apps de delivery e e-commerce para comércios locais.',
    url: `${italev.domain}/sobre-nos`,
  },
};

export default function SobreNosPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Italev Sistemas', url: italev.domain },
        { name: 'Sobre nós', url: `${italev.domain}/sobre-nos` },
      ])} />

      <Header />

      <main>
        <section aria-label="Sobre a Italev Sistemas" className="border-b-2 border-black bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h1 className="font-space-grotesk text-4xl font-black text-gray-900 mb-6 md:text-5xl text-balance">
              Sobre a Italev Sistemas
            </h1>
            <div className="max-w-3xl space-y-5">
              <DefinitionBlock
                termo="Italev Sistemas"
                definicao={italev.entityStatement}
              />
              <p className="text-gray-600 leading-relaxed">
                A Italev Sistemas nasceu com um propósito claro: dar ao comerciante local o mesmo
                poder digital que grandes redes têm — com app próprio, marca própria e sem pagar
                comissão para plataformas de terceiros.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Com base em Itajubá-MG, a Italev atende comércios em todo o Brasil de forma remota.
                O onboarding, o suporte e as atualizações são realizados online, com atendimento de
                segunda a sexta, das 9h às 18h.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Os aplicativos desenvolvidos pela Italev colocam a marca do estabelecimento
                diretamente no celular do cliente — com catálogo digital, pedidos via WhatsApp,
                pagamento por PIX e ferramentas de promoção e fidelização.
              </p>
            </div>
          </div>
        </section>

        <section aria-label="O que nos move" className="border-b-2 border-black bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-space-grotesk text-2xl font-black text-gray-900 mb-8">
              Por que a Italev Sistemas existe
            </h2>
            <div className="grid gap-6 md:grid-cols-3 max-w-4xl">
              {[
                {
                  titulo: 'Autonomia para o comerciante',
                  texto: 'Acreditamos que o comerciante local não deveria depender de marketplace para vender online. Com app próprio, ele controla os dados, os clientes e o crescimento do negócio.',
                },
                {
                  titulo: 'Tecnologia acessível',
                  texto: 'Tecnologia de ponta não é exclusividade de grandes redes. A Italev entrega em até 15 dias um app completo, com identidade visual e domínio próprios, por uma assinatura mensal fixa.',
                },
                {
                  titulo: 'Zero comissão por venda',
                  texto: 'O modelo de assinatura fixa garante que 100% de cada venda fique com o lojista — sem percentual descontado por pedido, independentemente do volume de vendas.',
                },
              ].map((item) => (
                <article key={item.titulo} className="rounded-xl border-2 border-black bg-white p-5 shadow-[4px_4px_0_#000]">
                  <h3 className="font-space-grotesk font-bold text-gray-900 mb-2">{item.titulo}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="O que dizem nossos clientes" className="border-b-2 border-black bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-space-grotesk text-2xl font-black text-gray-900 mb-8">
              O que dizem os comércios que usam a Italev
            </h2>
            <Testimonials />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
