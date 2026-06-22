import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import DefinitionBlock from '@/components/content/DefinitionBlock';
import Testimonials from '@/components/content/Testimonials';
import Card from '@/components/ui/Card';
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

const valores = [
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
];

export default function SobreNosPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Italev Sistemas', url: italev.domain },
        { name: 'Sobre nós', url: `${italev.domain}/sobre-nos` },
      ])} />

      <main>
        <PageHero
          title="Sobre a Italev Sistemas"
          subtitle="Software house brasileira especializada em apps de delivery e e-commerce para comércios locais."
          badge="Sobre nós"
        />

        {/* Definição + sobre */}
        <section aria-label="Sobre a Italev Sistemas" className="section">
          <div className="mx-auto max-w-3xl px-6 space-y-8">
            <DefinitionBlock
              termo="Italev Sistemas"
              definicao={italev.entityStatement}
            />
            <p className="text-[#94A3B8] leading-relaxed">
              A Italev Sistemas nasceu com um propósito claro: dar ao comerciante local o mesmo
              poder digital que grandes redes têm — com app próprio, marca própria e sem pagar
              comissão para plataformas de terceiros.
            </p>
            <p className="text-[#94A3B8] leading-relaxed">
              Com base em Itajubá-MG, a Italev atende comércios em todo o Brasil de forma remota.
              O onboarding, o suporte e as atualizações são realizados online, com atendimento de
              segunda a sexta, das 9h às 18h.
            </p>
            <p className="text-[#94A3B8] leading-relaxed">
              Os aplicativos desenvolvidos pela Italev colocam a marca do estabelecimento
              diretamente no celular do cliente — com catálogo digital, pedidos via WhatsApp,
              pagamento por PIX e ferramentas de promoção e fidelização.
            </p>
          </div>
        </section>

        {/* Nossa especialidade */}
        <section aria-label="Nossa especialidade" className="section">
          <div className="mx-auto max-w-3xl px-6 space-y-4">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#FF5A00]">
              Especialistas em aplicativos para o comércio local brasileiro
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#F8FAFC]">
              Nossa especialidade
            </h2>
            <p className="text-[#94A3B8] leading-relaxed">
              Somos especializados em criar aplicativos para o comércio local brasileiro,
              ajudando empresas a vender online, divulgar ofertas e fortalecer o
              relacionamento com seus clientes.
            </p>
          </div>
        </section>

        {/* Valores */}
        <section aria-label="O que nos move" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-10 text-center">
              Por que a Italev Sistemas existe
            </h2>
            <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              {valores.map((item) => (
                <Card key={item.titulo} as="article">
                  <h3 className="font-sora font-bold text-[#F8FAFC] mb-3">{item.titulo}</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{item.texto}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section aria-label="O que dizem nossos clientes" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-10 text-center">
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
