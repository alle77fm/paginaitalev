import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import PricingCards from '@/components/ui/PricingCards';
import { italev } from '@/lib/entities';
import { serviceSchema, faqPageSchema } from '@/lib/schema';
import { faqInstitucional } from '@/content/faq/institucional';

export const metadata: Metadata = {
  title: 'App de delivery e e-commerce para comércios locais | Italev Sistemas',
  description:
    'Italev Sistemas desenvolve aplicativos próprios de delivery e e-commerce para supermercados, restaurantes e comércios locais. Pedidos no WhatsApp, PIX, sem comissão por venda.',
  alternates: { canonical: italev.domain },
  openGraph: {
    title: 'Italev Sistemas — App de delivery próprio para seu comércio',
    description:
      'Venda online com app e catálogo próprios. Sem marketplace, sem comissão. Pedidos no WhatsApp e PIX.',
    url: italev.domain,
  },
};

// Estatísticas
const stats = [
  { value: '+27%', label: 'Aumento médio nas vendas' },
  { value: '-35%', label: 'Redução nos custos com taxas' },
  { value: '+1.200', label: 'Apps entregues com sucesso' },
  { value: '+98%', label: 'Satisfação dos clientes' },
];

// Benefícios
const beneficios = [
  {
    icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    title: 'Autonomia total',
    descricao: 'Seus dados, seus clientes, suas regras. Nada de depender de algoritmos de terceiros.',
  },
  {
    icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.375m-1.5-5.625v.75c0 .414.336.75.75.75h.75m-6-1.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008z',
    title: 'Fim da comissão',
    descricao: 'Chega de perder até 27% em taxas. Com a Italev, 100% do que é seu, fica com você.',
  },
  {
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z',
    title: 'Marca própria',
    descricao: 'Seu app com sua identidade, no celular do seu cliente. Gere reconhecimento e recorrência.',
  },
  {
    icon: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    title: 'Vendas inteligentes',
    descricao: 'Cupons, ofertas e campanhas automáticas para vender mais, sem depender de sorte.',
  },
  {
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    title: 'Estrutura que cresce',
    descricao: 'Do pequeno ao grande, nossa plataforma escala com você. Sem travar, sem complicar.',
  },
  {
    icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
    title: 'Atendimento VIP',
    descricao: 'Comunique-se melhor, acompanhe pedidos e fidelize clientes com facilidade.',
  },
];

// Processo
const processo = [
  {
    numero: '01',
    titulo: 'Conversamos',
    descricao: 'Entendemos seu negócio e seus objetivos para desenhar a melhor estratégia.',
  },
  {
    numero: '02',
    titulo: 'Criamos seu app',
    descricao: 'Desenvolvemos seu aplicativo com sua identidade visual e todas as funções necessárias.',
  },
  {
    numero: '03',
    titulo: 'Você começa a vender',
    descricao: 'Divulgamos, recebemos pedidos e aumentamos suas vendas desde o primeiro dia.',
  },
];


export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceSchema()} />
      <JsonLd data={faqPageSchema(faqInstitucional)} />

      <Header />

      <main className="relative pt-32">
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-margin-mobile md:px-gutter mb-section-gap-mobile md:mb-section-gap-desktop relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] ambient-glow pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
            <div className="z-10">
              <div className="flex items-center gap-2 mb-6 text-primary-container">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
                <span className="text-label-caps uppercase tracking-widest">
                  Transforme seu comércio
                </span>
              </div>
              <h1 className="text-display-lg-mobile md:text-display-lg mb-6 text-on-surface text-balance">
                Seu comércio com app próprio
                <br />
                <span className="text-primary-container">para vender mais,</span>
                <br />
                sem depender do iFood
              </h1>
              <p className="text-body-lg text-on-secondary-container mb-10 max-w-lg">
                Tenha o seu próprio aplicativo para vender mais, fidelizar clientes e
                aumentar sua lucratividade sem depender de taxas abusivas de terceiros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/planos"
                  className="inline-flex items-center justify-center bg-primary-container text-white px-8 py-4 rounded-xl font-bold text-body-md orange-glow transition-all"
                >
                  Quero meu app agora
                </Link>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-body-md hover:bg-white/5 transition-all"
                >
                  Ver como funciona
                </Link>
              </div>
            </div>
            <div className="relative mt-12 md:mt-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary-container/10 blur-[100px] rounded-full" />
              <Image
                src="/img_phone.png"
                alt="App próprio de delivery da Italev Sistemas rodando em smartphone — catálogo digital com pedidos via WhatsApp e PIX"
                width={420}
                height={560}
                priority
                sizes="(max-width: 768px) 80vw, 420px"
                className="relative z-10 w-full max-w-[320px] md:max-w-[420px] h-auto"
              />
            </div>
          </div>
        </section>

        {/* ── STATS ─────────────────────────────────────────── */}
        <section className="bg-surface-container-lowest py-20 mb-section-gap-mobile md:mb-section-gap-desktop">
          <div className="max-w-container mx-auto px-margin-mobile md:px-gutter grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-display-lg-mobile md:text-headline-xl text-primary-container mb-2">
                  {stat.value}
                </span>
                <span className="text-label-caps uppercase tracking-widest text-on-secondary-container">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── BENEFÍCIOS BENTO GRID ─────────────────────────── */}
        <section className="max-w-container mx-auto px-margin-mobile md:px-gutter mb-section-gap-mobile md:mb-section-gap-desktop">
          <div className="text-center mb-16">
            <h2 className="text-headline-xl text-on-surface mb-4">
              O que muda com seu app próprio
            </h2>
            <p className="text-on-secondary-container text-body-lg">
              Mais autonomia, profissionalismo e resultado para o seu negócio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((b, i) => (
              <div
                key={i}
                className="bg-surface-container-low p-8 rounded-2xl ghost-border hover:bg-surface-container transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-6 text-primary-container group-hover:bg-primary-container group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                  </svg>
                </div>
                <h3 className="text-headline-lg mb-4 text-on-surface">{b.title}</h3>
                <p className="text-on-secondary-container">{b.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCESSO ──────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-margin-mobile md:px-gutter mb-section-gap-mobile md:mb-section-gap-desktop">
          <div className="bg-surface-container-high rounded-[40px] p-8 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full ambient-glow opacity-20 pointer-events-none" />
            <h2 className="text-headline-xl text-on-surface mb-16 text-center">
              Como funciona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
              {processo.map((p, i) => (
                <div key={i} className="text-center">
                  <div className="text-primary-container text-[80px] font-bold opacity-10 leading-none mb-[-40px]">
                    {p.numero}
                  </div>
                  <h3 className="text-headline-lg mb-4 text-on-surface">{p.titulo}</h3>
                  <p className="text-on-secondary-container">{p.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ───────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-margin-mobile md:px-gutter mb-section-gap-mobile md:mb-section-gap-desktop">
          <div className="text-center mb-16">
            <span className="text-label-caps text-primary-container mb-4 block uppercase tracking-widest">
              Nossos Planos
            </span>
            <h2 className="text-headline-xl text-on-surface">
              Escolha o plano ideal para seu momento
            </h2>
          </div>
          <PricingCards cta="page" />
        </section>

        {/* ── CTA FINAL ─────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-margin-mobile md:px-gutter pb-section-gap-mobile md:pb-section-gap-desktop">
          <div className="bg-gradient-to-br from-primary-container to-[#b34700] rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-headline-xl md:text-display-lg mb-8 text-balance">
                Pronto para transformar
                <br />
                seu comércio?
              </h2>
              <p className="text-body-lg mb-12 max-w-2xl mx-auto opacity-90">
                Dê o próximo passo e leve seu negócio para o próximo nível com um app
                que é só seu. Sem taxas, sem amarras, só lucro.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/planos"
                  className="bg-white text-primary-container px-10 py-5 rounded-2xl font-bold text-body-lg hover:scale-105 transition-all shadow-xl"
                >
                  Quero começar agora
                </Link>
                <a
                  href={`https://wa.me/${italev.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-body-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
