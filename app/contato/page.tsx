import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import PageHero from '@/components/layout/PageHero';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
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
  const waMsg = encodeURIComponent(
    'Olá! Gostaria de solicitar uma demonstração gratuita e conhecer como a Italev Sistemas pode ajudar meu negócio a vender mais online. Qual é o próximo passo?',
  );

  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Italev Sistemas', url: italev.domain },
        { name: 'Contato', url: `${italev.domain}/contato` },
      ])} />

      <Navbar />

      <main>
        <PageHero
          title="Fale com a equipe da Italev Sistemas"
          subtitle="Tire dúvidas sobre planos, funcionamento e como ter seu app próprio. Respondemos de segunda a sexta, das 9h às 18h."
          badge="Contato"
        />

        <section aria-label="Contato com a Italev Sistemas" className="section">
          <div className="mx-auto max-w-3xl px-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* WhatsApp */}
              <Card as="article">
                <h2 className="font-sora font-bold text-[#F8FAFC] mb-1">WhatsApp</h2>
                <p className="text-sm text-[#94A3B8] mb-5">Resposta mais rápida — canal preferencial.</p>
                <Button
                  variant="whatsapp"
                  href={`https://wa.me/${italev.whatsapp}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.057 23.25a.75.75 0 0 0 .916.916l5.398-1.475A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.723 9.723 0 0 1-4.964-1.362l-.356-.212-3.695 1.009 1.01-3.695-.212-.356A9.723 9.723 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                  Abrir WhatsApp
                </Button>
                <p className="mt-3 text-xs text-[#64748B]">{italev.phone}</p>
              </Card>

              {/* E-mail */}
              <Card as="article">
                <h2 className="font-sora font-bold text-[#F8FAFC] mb-1">E-mail</h2>
                <p className="text-sm text-[#94A3B8] mb-5">Para assuntos mais detalhados.</p>
                <Button
                  variant="outline"
                  href={`mailto:${italev.email}`}
                >
                  Enviar e-mail
                </Button>
                <p className="mt-3 text-xs text-[#64748B]">{italev.email}</p>
              </Card>

              {/* Horário */}
              <Card as="article" className="sm:col-span-2">
                <h2 className="font-sora font-bold text-[#F8FAFC] mb-1">Horário de atendimento</h2>
                <p className="text-[#94A3B8]">{italev.atendimento}</p>
                <p className="mt-1 text-sm text-[#64748B]">
                  Mensagens fora do horário são respondidas no próximo dia útil.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
