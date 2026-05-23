import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { italev } from '@/lib/entities';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Termos de uso',
  description: 'Termos de uso da Italev Sistemas. Leia as condições para utilização dos serviços e aplicativos desenvolvidos pela Italev Sistemas.',
  alternates: { canonical: `${italev.domain}/termos-de-uso` },
};

export default function TermosDeUsoPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Italev Sistemas', url: italev.domain },
        { name: 'Termos de uso', url: `${italev.domain}/termos-de-uso` },
      ])} />
      <Header />
      <main>
        <article className="mx-auto max-w-3xl px-4 py-14">
          <h1 className="font-space-grotesk text-3xl font-black text-gray-900 mb-6">Termos de uso</h1>
          <p className="text-sm text-gray-500 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p>
              Ao contratar os serviços da <strong>Italev Sistemas</strong> ou utilizar qualquer
              aplicativo desenvolvido por ela, você concorda com os presentes Termos de Uso. Leia
              com atenção antes de prosseguir.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">1. Sobre a Italev Sistemas</h2>
            <p>
              Italev Sistemas é uma software house brasileira que desenvolve aplicativos próprios
              de delivery e e-commerce para supermercados, restaurantes e comércios locais. O
              contato pode ser feito pelo e-mail{' '}
              <a href={`mailto:${italev.email}`} className="text-[#FF5A00] hover:underline">{italev.email}</a>.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">2. Serviços prestados</h2>
            <p>
              A Italev Sistemas oferece plataforma SaaS de delivery commerce, catálogo digital e
              pedidos integrados ao WhatsApp. O serviço é prestado mediante assinatura mensal,
              conforme plano contratado.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">3. Responsabilidades do contratante</h2>
            <p>
              O contratante é responsável pela veracidade das informações cadastradas, pelo
              gerenciamento do catálogo de produtos e preços, e pelo atendimento aos clientes
              finais. A Italev Sistemas não se responsabiliza por transações realizadas entre o
              lojista e seus clientes.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">4. Propriedade intelectual</h2>
            <p>
              A plataforma e os sistemas desenvolvidos pela Italev Sistemas são de sua propriedade
              intelectual. O contratante recebe licença de uso durante a vigência do contrato.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">5. Cancelamento</h2>
            <p>
              O contrato pode ser cancelado a qualquer momento, com aviso prévio conforme condições
              do plano contratado. Não há fidelidade obrigatória nos planos mensais.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">6. Alterações</h2>
            <p>
              Estes termos podem ser atualizados. O contratante será notificado por e-mail em caso
              de alterações relevantes.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">7. Contato</h2>
            <p>
              Dúvidas sobre estes termos: <a href={`mailto:${italev.email}`} className="text-[#FF5A00] hover:underline">{italev.email}</a>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
