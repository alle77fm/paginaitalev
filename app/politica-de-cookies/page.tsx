import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { italev } from '@/lib/entities';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Política de cookies',
  description: 'Política de cookies da Italev Sistemas. Saiba quais cookies utilizamos e como gerenciá-los.',
  alternates: { canonical: `${italev.domain}/politica-de-cookies` },
};

export default function PoliticaDeCookiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Italev Sistemas', url: italev.domain },
        { name: 'Política de cookies', url: `${italev.domain}/politica-de-cookies` },
      ])} />
      <Header />
      <main>
        <article className="mx-auto max-w-3xl px-4 py-14">
          <h1 className="font-space-grotesk text-3xl font-black text-gray-900 mb-6">Política de cookies</h1>
          <p className="text-sm text-gray-500 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Esta política explica como a <strong>Italev Sistemas</strong> utiliza cookies e
              tecnologias similares no site italevsistemas.com.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">1. O que são cookies</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo ao acessar um
              site. Eles permitem que o site reconheça seu navegador e lembre preferências.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">2. Cookies que utilizamos</h2>
            <p>
              Utilizamos apenas cookies essenciais para o funcionamento do site. Não utilizamos
              cookies de rastreamento de terceiros para publicidade comportamental.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">3. Como gerenciar cookies</h2>
            <p>
              Você pode desativar cookies nas configurações do seu navegador. A desativação de
              cookies essenciais pode afetar o funcionamento de algumas funcionalidades do site.
            </p>
            <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mt-8">4. Contato</h2>
            <p>
              Dúvidas:{' '}
              <a href={`mailto:${italev.email}`} className="text-[#FF5A00] hover:underline">{italev.email}</a>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
