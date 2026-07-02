import { planos } from '@/content/comparisons/planos';
import { italev } from '@/lib/entities';

interface PricingCardsProps { cta?: 'page' | 'whatsapp'; }

export default function PricingCards({ cta = 'whatsapp' }: PricingCardsProps) {
  return (
    <div data-cta={cta}>
      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
        {planos.map((plano) => {
          const isPro = plano.destaque;
          const waLink = `https://wa.me/${italev.whatsapp}?text=${encodeURIComponent(plano.mensagemWhatsapp)}`;
          return (
            <article key={plano.id} aria-label={`Plano ${plano.nome}`} className={`relative flex flex-col rounded-[28px] p-6 transition-all duration-300 sm:p-8 lg:p-9 ${isPro ? 'z-10 border-2 border-[#FF5A00] shadow-[0_0_48px_rgba(255,90,0,0.15)] md:-translate-y-2' : 'border border-white/[0.08] hover:border-[#FF5A00]/30'}`} style={{ background: isPro ? 'linear-gradient(135deg, rgba(255,90,0,0.08) 0%, rgba(255,255,255,0.03) 100%)' : 'rgba(255,255,255,0.03)' }}>
              {plano.badgeTexto && <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#FF5A00] px-4 py-1 text-xs font-black text-white shadow-[0_0_16px_rgba(255,90,0,0.4)]">{plano.badgeTexto}</span>}
              <div className="mb-2 mt-2">
                <h3 className="font-sora text-xl font-black text-[#F8FAFC]">{plano.nome}</h3>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-1">
                  {plano.precoPrefixo && <span className="text-sm font-bold text-[#F8FAFC]">{plano.precoPrefixo}</span>}
                  <span className="font-sora text-3xl font-black text-[#F8FAFC] sm:text-4xl">R${plano.preco}</span>
                  <span className="text-sm text-[#94A3B8]">/mês</span>
                </div>
                {plano.subTexto && <p className="mt-1 text-xs font-semibold text-[#FF5A00]">{plano.subTexto}</p>}
                <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">{plano.descricaoCurta}</p>
                <div className="mt-4 flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-center">
                  <p className="text-sm font-semibold leading-snug text-[#F8FAFC]">{plano.implantacaoLabel}: {plano.implantacaoPrefixo && 'a partir de '}R${plano.implantacao.toLocaleString('pt-BR')}</p>
                  {plano.implantacaoGratisAnual && <p className="text-xs font-bold text-emerald-300">Grátis no plano anual</p>}
                </div>
              </div>
              <div className="my-6 border-t border-white/[0.08]" />
              <ul className="mb-8 flex-grow space-y-3" role="list">{plano.recursos.map((recurso) => <li key={recurso} className="flex items-start gap-3 text-sm text-[#F8FAFC]"><span className="mt-0.5 shrink-0 font-bold text-[#FF5A00]" aria-hidden="true">✓</span><span>{recurso}</span></li>)}</ul>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className={`block w-full rounded-xl py-4 text-center text-sm font-bold transition-all ${isPro ? 'bg-[#FF5A00] text-white shadow-[0_0_20px_rgba(255,90,0,0.35)] hover:bg-[#e04e00]' : 'border border-white/20 text-[#F8FAFC] hover:border-[#FF5A00] hover:bg-[rgba(255,90,0,0.08)]'}`}>{plano.ctaTexto}</a>
            </article>
          );
        })}
      </div>
      <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[#CBD5E1]">A implantação única é cobrada apenas no plano mensal. No plano anual, a criação e configuração inicial da loja ficam grátis.</p>
    </div>
  );
}
