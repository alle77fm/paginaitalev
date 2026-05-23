import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { italev } from '@/lib/entities';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Política de privacidade',
  description: 'Política de privacidade da Italev Sistemas. Como coletamos, usamos e protegemos seus dados, em conformidade com a LGPD.',
  alternates: { canonical: `${italev.domain}/politica-de-privacidade` },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Italev Sistemas', url: italev.domain },
        { name: 'Política de privacidade', url: `${italev.domain}/politica-de-privacidade` },
      ])} />
      <Header />
      <main>
        <article className="mx-auto max-w-3xl px-4 py-14">
          <h1 className="font-space-grotesk text-3xl font-black text-gray-900 mb-6">Política de privacidade</h1>
          <p className="text-sm text-gray-500 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              A <strong>Italev Sistemas</strong> valoriza a privacidade dos seus usuários e está
              comprometida com a proteção de dados pessoais em conformidade com a{' '}
              <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>.
            </p>

            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">1. Dados coletados</h2>
            <p>
              Coletamos dados necessários para a prestação dos serviços contratados, incluindo:
              nome, e-mail, telefone/WhatsApp, dados do comércio e informações de uso da plataforma.
            </p>

            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">2. Finalidade do tratamento</h2>
            <p>
              Os dados são utilizados exclusivamente para: prestação dos serviços contratados,
              comunicação sobre o contrato, suporte técnico e melhoria contínua da plataforma.
              Não compartilhamos dados pessoais com terceiros para fins de marketing sem consentimento.
            </p>

            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">3. LGPD — Direitos do titular</h2>
            <p>Nos termos da LGPD, você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Confirmar a existência de tratamento de seus dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Solicitar informações sobre compartilhamento de dados</li>
            </ul>
            <p>
              Para exercer esses direitos, entre em contato:{' '}
              <a href={`mailto:${italev.email}`} className="text-[#FF5A00] hover:underline">{italev.email}</a>
            </p>

            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">4. Segurança dos dados</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger os dados pessoais contra
              acesso não autorizado, perda ou alteração indevida.
            </p>

            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">5. Retenção de dados</h2>
            <p>
              Os dados são mantidos pelo período necessário à prestação dos serviços e cumprimento
              de obrigações legais. Após o cancelamento do contrato, os dados são eliminados
              conforme os prazos previstos em lei.
            </p>

            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">6. Contato do encarregado (DPO)</h2>
            <p>
              Dúvidas ou solicitações sobre privacidade:{' '}
              <a href={`mailto:${italev.email}`} className="text-[#FF5A00] hover:underline">{italev.email}</a>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
