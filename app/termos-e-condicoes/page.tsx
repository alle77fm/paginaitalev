import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { italev } from '@/lib/entities';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Termos e condições',
  description: 'Termos e condições gerais da Italev Sistemas para contratação de planos e uso dos serviços.',
  alternates: { canonical: `${italev.domain}/termos-e-condicoes` },
};

export default function TermosECondicoesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Italev Sistemas', url: italev.domain },
        { name: 'Termos e condições', url: `${italev.domain}/termos-e-condicoes` },
      ])} />
      <Header />
      <main>
        <article className="mx-auto max-w-3xl px-4 py-14">
          <h1 className="font-space-grotesk text-3xl font-black text-gray-900 mb-6">Termos e condições</h1>
          <p className="text-sm text-gray-500 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Estes Termos e Condições Gerais regem a relação entre a <strong>Italev Sistemas</strong>{' '}
              e os contratantes dos seus planos de serviço.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">1. Contratação</h2>
            <p>
              A contratação dos planos da Italev Sistemas (Start, Pro ou Growth) é feita mediante
              adesão ao plano escolhido e pagamento da primeira mensalidade. A confirmação do
              contrato é enviada por e-mail.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">2. Pagamento</h2>
            <p>
              O pagamento é mensal, via PIX ou boleto. O não pagamento dentro do prazo pode
              resultar na suspensão temporária do serviço.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">3. Prazo de entrega</h2>
            <p>
              O aplicativo é entregue em até 15 dias úteis após o início do onboarding e o
              fornecimento de todas as informações necessárias pelo contratante.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">4. Suporte</h2>
            <p>
              O suporte técnico está disponível de segunda a sexta, das 9h às 18h, pelo WhatsApp e
              e-mail <a href={`mailto:${italev.email}`} className="text-[#FF5A00] hover:underline">{italev.email}</a>.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">5. Cancelamento</h2>
            <p>
              O contratante pode cancelar o plano mensal a qualquer momento, sem multa, com aviso
              prévio de 30 dias. O plano anual segue condições específicas acordadas no momento
              da contratação.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">6. Limitação de responsabilidade</h2>
            <p>
              A Italev Sistemas não se responsabiliza por instabilidades de serviços de terceiros
              (WhatsApp, PIX, provedores de internet) fora do seu controle.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">7. Foro</h2>
            <p>
              Fica eleito o foro da comarca de Itajubá-MG para dirimir quaisquer controvérsias
              decorrentes destes termos.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
