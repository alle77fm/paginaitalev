import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import PricingCards from '@/components/ui/PricingCards';
import FaqAccordion from '@/components/content/FaqAccordion';
import { italev } from '@/lib/entities';
import { serviceSchema, faqPageSchema } from '@/lib/schema';
import { duvidasFrequentesHome } from '@/content/faq/duvidas-frequentes';

export const metadata: Metadata = {
  title: 'App de delivery e e-commerce para comércios locais | Italev Sistemas',
  description:
    'Tenha seu próprio app de delivery para vender sem pagar comissão por pedido. A Italev Sistemas cria aplicativos de delivery e e-commerce como alternativa ao iFood.',
  alternates: { canonical: italev.domain },
  openGraph: {
    title: 'Italev Sistemas — App de delivery próprio para seu comércio',
    description:
      'Venda online com app próprio, marca própria e controle dos clientes. Uma alternativa ao iFood para supermercados, restaurantes, açougues e conveniências.',
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
    title: 'Venda sem intermediários',
    descricao: 'Receba pedidos diretamente dos seus clientes e tenha mais controle sobre suas vendas.',
  },
  {
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z',
    title: 'Sua marca em destaque',
    descricao: 'Seu cliente compra no seu aplicativo, fortalecendo o reconhecimento da sua empresa.',
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
    title: 'WhatsApp integrado',
    descricao: 'Receba pedidos organizados diretamente no WhatsApp da empresa.',
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

// Nichos atendidos
const nichos = [
  'Supermercados',
  'Padarias',
  'Açougues',
  'Lanchonetes',
  'Marmitarias',
  'Cafeterias',
  'Hortifrutis',
  'Pet Shops',
  'Distribuidoras',
  'Lojas de roupas',
];

// Fluxo do pedido (como funciona o app para o cliente final)
const fluxoPedido = [
  'O cliente acessa seu catálogo online',
  'Escolhe os produtos',
  'Finaliza o pedido',
  'O pedido chega diretamente no WhatsApp da empresa',
  'Você confirma a venda e realiza a entrega',
];

const demoMessage =
  'Olá! Gostaria de solicitar uma demonstração gratuita e conhecer como a Italev Sistemas pode ajudar meu negócio a vender mais online.';

const demoHref = `https://wa.me/${italev.whatsapp}?text=${encodeURIComponent(demoMessage)}`;

function DemoCta({ className = '' }: { className?: string }) {
  return (
    <div className={`px-margin-mobile md:px-gutter ${className}`}>
      <div className="mx-auto max-w-2xl rounded-2xl border border-primary-container/20 bg-surface-container-low/80 p-4 text-center shadow-[0_12px_36px_rgba(0,0,0,0.22)] md:grid md:max-w-[680px] md:grid-cols-[1fr_auto] md:items-center md:gap-5 md:p-5 md:text-left">
        <p className="mb-3 text-sm font-semibold leading-snug text-on-surface md:mb-0 md:max-w-[340px] md:text-base md:leading-6">
          Pronto para vender online sem pagar comissão por pedido?
        </p>
        <a
          href={demoHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-primary-container px-5 py-3 text-sm font-bold text-white shadow-[0_10px_28px_rgba(255,102,0,0.22)] transition-all active:scale-[0.98] md:w-auto md:px-6 md:py-3 md:text-sm md:hover:bg-primary-container/90"
        >
          Solicitar demonstração gratuita
        </a>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceSchema()} />
      <JsonLd data={faqPageSchema(duvidasFrequentesHome)} />

      <Header />

      <main className="relative pt-0">
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative mb-section-gap-mobile min-h-[800px] w-full overflow-hidden border-b border-white/5 bg-[#030304] pt-32 md:mb-section-gap-desktop md:min-h-[720px] md:pt-40 lg:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(255,90,0,0.22),transparent_30%),radial-gradient(circle_at_24%_92%,rgba(255,90,0,0.08),transparent_34%),linear-gradient(135deg,#030304_0%,#050505_48%,#0d0603_100%)]" aria-hidden="true" />
          <div className="absolute inset-y-0 right-0 hidden w-[68%] bg-[radial-gradient(circle_at_48%_44%,rgba(255,90,0,0.18),transparent_36%)] md:block" aria-hidden="true" />

          <Image
            src="/gina-mobile.png"
            alt="Gina, assistente virtual comercial da Italev Sistemas"
            width={1122}
            height={1402}
            priority
            sizes="100vw"
            className="absolute inset-x-0 bottom-0 z-0 h-[470px] w-full object-cover object-[52%_0%] md:hidden"
          />
          <Image
            src="/gina-desktop.png"
            alt="Gina, assistente virtual comercial da Italev Sistemas"
            width={1672}
            height={941}
            priority
            sizes="64vw"
            className="absolute bottom-0 right-[-4%] z-0 hidden h-full w-[72%] object-cover object-[44%_50%] md:block"
          />

          <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,#030304_0%,rgba(3,3,4,0.72)_24%,rgba(3,3,4,0.08)_58%,#030304_100%)] md:bg-[linear-gradient(90deg,#030304_0%,#030304_34%,rgba(3,3,4,0.78)_48%,rgba(3,3,4,0.16)_66%,rgba(3,3,4,0.72)_100%)]" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 z-10 h-64 bg-gradient-to-t from-[#030304] via-[#030304]/80 to-transparent" aria-hidden="true" />
          <div className="absolute left-0 top-0 z-10 hidden h-full w-2/3 bg-[linear-gradient(90deg,#030304_0%,rgba(3,3,4,0.94)_52%,transparent_100%)] md:block" aria-hidden="true" />

          <div className="relative z-20 mx-auto flex min-h-[800px] max-w-[1440px] flex-col px-margin-mobile pb-[350px] md:min-h-[720px] md:justify-center md:px-gutter md:pb-28">
            <div className="max-w-[660px] text-center md:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-container/40 bg-black/35 px-4 py-2 text-primary-container backdrop-blur-sm">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
                <span className="text-[11px] font-black uppercase tracking-[0.15em] md:text-xs">
                  APP PARA COMÉRCIO LOCAL
                </span>
              </div>

              <h1 className="mb-6 font-sora font-black leading-[1.08] tracking-tight text-on-surface text-balance">
                <span className="block text-3xl sm:text-4xl md:hidden">
                  Criamos o app do seu comércio <br />
                  <span className="text-primary-container">para vender online</span>
                  <span className="mt-2 block text-primary-container">sem pagar comissão por pedido.</span>
                </span>
                <span className="hidden text-[44px] leading-[1.06] md:block lg:text-[54px] xl:text-[60px]">
                  Criamos o app do seu comércio <br />
                  <span className="text-primary-container">para vender online</span> <br />
                  <span className="text-primary-container">sem pagar comissão por pedido.</span>
                </span>
              </h1>

              <p className="mx-auto mb-8 max-w-[560px] text-base leading-relaxed text-on-secondary-container text-balance sm:text-lg md:mx-0 md:text-xl">
                Receba pedidos pelo WhatsApp, divulgue ofertas e fortaleça sua marca com um aplicativo próprio.
              </p>

              <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                <a
                  href={demoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-primary-container px-6 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(255,90,0,0.22)] transition-all hover:bg-primary-container/90 active:scale-[0.98] sm:text-base md:min-w-[280px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.057 23.25a.75.75 0 0 0 .916.916l5.398-1.475A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.723 9.723 0 0 1-4.964-1.362l-.356-.212-3.695 1.009 1.01-3.695-.212-.356A9.723 9.723 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                  Solicitar demonstração gratuita
                </a>
                <Link
                  href="/contato"
                  className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/10 active:scale-[0.98] sm:text-base md:min-w-[200px]"
                >
                  <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 5.5v13l10-6.5-10-6.5Z" />
                  </svg>
                  Ver como funciona
                </Link>
              </div>

              <div className="mt-12 hidden w-full max-w-[560px] grid-cols-3 overflow-hidden rounded-2xl border border-white/5 bg-black/25 backdrop-blur-sm md:grid">
                {[
                  { label: 'Pedidos pelo WhatsApp', icon: 'M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.511 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z' },
                  { label: 'Sem taxa por pedido', icon: 'M12 6v12m-3-3.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.219 12.768 11 12 11c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182 1.106-.879 2.9-.879 4.006 0l.415.33' },
                  { label: 'Mais lucro e autonomia', icon: 'M3 17l6-6 4 4 7-7m0 0h-5m5 0v5' },
                ].map((item, index) => (
                  <div key={item.label} className={index > 0 ? 'flex items-center gap-3 border-l border-white/5 px-4 py-4' : 'flex items-center gap-3 px-4 py-4'}>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary-container/60 text-primary-container">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </span>
                    <span className="text-xs font-semibold leading-snug text-on-surface">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>
        {/* ── SOLUÇÕES PARA O COMÉRCIO LOCAL (nichos) ───────── */}
        <section
          aria-label="Soluções para o comércio local"
          className="max-w-container mx-auto px-margin-mobile md:px-gutter mb-section-gap-mobile md:mb-section-gap-desktop"
        >
          <div className="text-center mb-12">
            <span className="text-label-caps text-primary-container mb-4 block uppercase tracking-widest">
              Especialistas em aplicativos para o comércio local brasileiro
            </span>
            <h2 className="text-headline-xl text-on-surface mb-4">
              Soluções para o comércio local
            </h2>
            <p className="text-on-secondary-container text-body-lg max-w-2xl mx-auto">
              A Italev Sistemas desenvolve aplicativos para empresas que desejam vender
              online, divulgar promoções e receber pedidos de forma simples.
            </p>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {nichos.map((nicho) => (
              <li
                key={nicho}
                className="flex flex-col items-center gap-3 bg-surface-container-low p-6 rounded-2xl ghost-border text-center"
              >
                <span className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                  </svg>
                </span>
                <span className="text-body-md text-on-surface font-medium">{nicho}</span>
              </li>
            ))}
          </ul>

          <p className="text-on-secondary-container text-body-lg text-center mt-10 max-w-3xl mx-auto">
            Ideal para supermercados, açougues, padarias, lanchonetes, marmitarias,
            cafeterias e pequenos negócios que desejam vender online e fidelizar clientes.
          </p>
        </section>

        {/* ── SEU NEGÓCIO SE ENCAIXA? ───────────────────────── */}
        <section
          aria-label="Seu negócio se encaixa?"
          className="max-w-container mx-auto px-margin-mobile md:px-gutter mb-section-gap-mobile md:mb-section-gap-desktop"
        >
          <div className="bg-surface-container-low rounded-2xl ghost-border p-8 md:p-12 max-w-3xl mx-auto text-center">
            <h2 className="text-headline-xl text-on-surface mb-4">
              Seu negócio se encaixa?
            </h2>
            <p className="text-on-secondary-container text-body-lg leading-relaxed">
              Nossa plataforma foi desenvolvida para atender diferentes tipos de comércio
              local. Seja um supermercado, açougue, padaria, lanchonete, cafeteria ou
              loja especializada, o aplicativo pode ser adaptado para a realidade da sua
              operação.
            </p>
          </div>
        </section>

        {/* ── COMO FUNCIONA UM APP PRÓPRIO (fluxo do pedido) ── */}
        <section
          aria-label="Como funciona um aplicativo próprio para comércio local"
          className="max-w-container mx-auto px-margin-mobile md:px-gutter mb-section-gap-mobile md:mb-section-gap-desktop"
        >
          <div className="text-center mb-12">
            <h2 className="text-headline-xl text-on-surface mb-4">
              Como funciona um aplicativo próprio para comércio local?
            </h2>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {fluxoPedido.map((passo, i) => (
              <li
                key={i}
                className="bg-surface-container-low p-6 rounded-2xl ghost-border flex flex-col gap-3"
              >
                <span className="w-9 h-9 rounded-full bg-primary-container text-white font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-body-md text-on-surface">{passo}</span>
              </li>
            ))}
          </ol>

          <p className="text-on-secondary-container text-body-lg text-center mt-10 max-w-3xl mx-auto">
            Esse processo reduz os atritos da compra, deixa o atendimento mais ágil e
            facilita a fidelização dos clientes — que voltam a comprar direto com você,
            sem intermediários.
          </p>
        </section>

        <DemoCta className="-mt-10 mb-section-gap-mobile md:-mt-16 md:mb-section-gap-desktop" />

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

        <DemoCta className="-mt-8 mb-section-gap-mobile md:-mt-24 md:mb-section-gap-desktop" />

        {/* ── COMPARATIVO ───────────────────────────────────── */}
        <section
          aria-label="Comparativo: app próprio vs marketplaces"
          className="max-w-container mx-auto px-margin-mobile md:px-gutter mb-section-gap-mobile md:mb-section-gap-desktop"
        >
          <div className="text-center mb-12">
            <h2 className="text-headline-xl text-on-surface mb-4">
              Seu aplicativo vs marketplaces
            </h2>
          </div>

          {(() => {
            const rows = [
              { recurso: 'Sua marca', app: '✅ Sim', ifood: '❌ Não' },
              { recurso: 'Clientes próprios', app: '✅ Sim', ifood: '❌ Não' },
              { recurso: 'Promoções personalizadas', app: '✅ Sim', ifood: '⚠️ Limitado' },
              { recurso: 'Comissão por pedido', app: '✅ Não cobra', ifood: '❌ Cobra' },
              { recurso: 'Controle do negócio', app: '✅ Total', ifood: '⚠️ Parcial' },
              { recurso: 'Pagamento via PIX direto', app: '✅ Sim', ifood: '❌ Não' },
            ];
            return (
              <div className="rounded-2xl ghost-border overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}
              >
                {/* Desktop: tabela tradicional */}
                <div className="hidden md:block">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="px-6 py-4 text-on-secondary-container text-body-md font-semibold">Recurso</th>
                        <th className="px-6 py-4 text-primary-container text-body-md font-semibold">Seu aplicativo</th>
                        <th className="px-6 py-4 text-on-secondary-container text-body-md font-semibold">iFood</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                          <td className="px-6 py-4 text-on-surface text-body-md">{row.recurso}</td>
                          <td className="px-6 py-4 text-on-surface text-body-md">{row.app}</td>
                          <td className="px-6 py-4 text-on-secondary-container text-body-md">{row.ifood}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile: cards empilhados */}
                <div className="md:hidden divide-y divide-white/10">
                  {rows.map((row, i) => (
                    <div key={i} className={`px-4 py-4 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                      <p className="text-on-surface font-semibold text-sm mb-3">{row.recurso}</p>
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-primary-container w-28 shrink-0">Seu aplicativo</span>
                          <span className="text-on-surface text-sm">{row.app}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-on-secondary-container w-28 shrink-0">iFood</span>
                          <span className="text-on-secondary-container text-sm">{row.ifood}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="px-6 py-6 border-t border-white/10 text-on-secondary-container text-body-md leading-relaxed">
                  Com um aplicativo próprio, você recebe os pedidos diretamente dos seus clientes,
                  sem pagar comissão para marketplaces. O cadastro dos clientes fica com você,
                  a marca é a sua e o pagamento cai direto na sua conta via PIX — uma alternativa
                  real ao iFood para comércios locais que querem mais autonomia.
                </p>
              </div>
            );
          })()}
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
          <PricingCards cta="whatsapp" />
        </section>

        <DemoCta className="-mt-8 mb-section-gap-mobile md:-mt-24 md:mb-section-gap-desktop" />

        {/* ── DÚVIDAS FREQUENTES ───────────────────────────── */}
        <section
          aria-label="Dúvidas frequentes sobre o aplicativo próprio da Italev Sistemas"
          className="max-w-container mx-auto px-margin-mobile md:px-gutter mb-section-gap-mobile md:mb-section-gap-desktop"
        >
          <div className="mx-auto max-w-3xl text-center mb-10">
            <span className="text-label-caps text-primary-container mb-4 block uppercase tracking-widest">
              Dúvidas frequentes
            </span>
            <h2 className="text-headline-xl text-on-surface mb-4">
              Dúvidas frequentes
            </h2>
            <p className="text-on-secondary-container text-body-lg">
              Veja as principais dúvidas de lojistas sobre o aplicativo próprio da Italev Sistemas.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={duvidasFrequentesHome} />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/duvidas-frequentes"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition-all hover:border-primary-container hover:bg-primary-container/10"
            >
              Ver todas as dúvidas frequentes
            </Link>
          </div>
        </section>
        {/* ── CTA FINAL ─────────────────────────────────────── */}
        <section className="max-w-container mx-auto px-margin-mobile md:px-gutter pb-section-gap-mobile md:pb-section-gap-desktop">
          <div className="bg-gradient-to-br from-primary-container to-[#b34700] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
                Pronto para transformar seu comércio?
              </h2>
              <p className="text-base md:text-lg mb-8 max-w-xl mx-auto opacity-90">
                App próprio, sua marca, sem taxas. Dê o próximo passo hoje.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/planos"
                  className="bg-white text-primary-container px-7 py-3 rounded-xl font-bold text-base hover:scale-105 transition-all shadow-xl"
                >
                  Quero começar agora
                </Link>
                <a
                  href={`https://wa.me/${italev.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-7 py-3 rounded-xl font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2"
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

        <DemoCta className="-mt-10 mb-24 md:-mt-24 md:mb-32" />
      </main>

      <Footer />
    </>
  );
}
