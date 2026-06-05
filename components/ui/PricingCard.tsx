import type { Plano } from '@/content/comparisons/planos';

interface PricingCardProps {
  plano: Plano;
}

export default function PricingCard({ plano }: PricingCardProps) {
  const isPro = plano.destaque;

  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
        isPro
          ? 'border-[#4F7CFF] shadow-[0_0_40px_rgba(79,124,255,0.2)] scale-100 md:scale-105 z-10'
          : 'border-white/[0.08] hover:border-[#4F7CFF]/40 hover:shadow-[0_8px_32px_rgba(79,124,255,0.12)]'
      }`}
      style={{
        background: isPro
          ? 'linear-gradient(135deg, rgba(79,124,255,0.12) 0%, rgba(255,255,255,0.04) 100%)'
          : 'rgba(255,255,255,0.03)',
      }}
      aria-label={`Plano ${plano.nome}`}
    >
      {/* Badge destaque */}
      {plano.badgeTexto && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-block rounded-full border border-[#4F7CFF]/40 bg-[#4F7CFF] px-4 py-1 text-xs font-black text-white shadow-[0_0_16px_rgba(79,124,255,0.4)] whitespace-nowrap">
            {plano.badgeTexto}
          </span>
        </div>
      )}

      {/* Nome e preço */}
      <div className="mb-4 mt-2">
        <h3 className="font-sora text-xl font-black text-[#F8FAFC]">{plano.nome}</h3>
        <div className="mt-2 flex items-end gap-1">
          <span className="font-sora text-4xl font-black text-[#F8FAFC]">
            R${plano.preco}
          </span>
          <span className="mb-1 text-sm text-[#64748B]">/mês</span>
        </div>
        {plano.subTexto && (
          <p className="mt-1 text-xs font-semibold text-[#4F7CFF]">{plano.subTexto}</p>
        )}
        <p className="mt-2 text-sm text-[#94A3B8]">{plano.descricaoCurta}</p>
      </div>

      {/* Recursos */}
      <ul className="mb-6 flex-1 space-y-2" role="list">
        {plano.recursos.map((recurso) => (
          <li key={recurso} className="flex items-start gap-2 text-sm text-[#94A3B8]">
            <span
              className={`mt-0.5 shrink-0 font-bold ${isPro ? 'text-[#4F7CFF]' : 'text-[#FF6600]'}`}
              aria-hidden="true"
            >
              ✓
            </span>
            {recurso}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={`https://wa.me/5535997493286?text=${encodeURIComponent(`Olá! Tenho interesse no plano ${plano.nome} e gostaria de solicitar uma demonstração gratuita.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full rounded-[10px] py-3 text-center text-sm font-bold transition-all duration-200 ${
          isPro
            ? 'bg-[#4F7CFF] hover:bg-[#6C8CFF] text-white shadow-[0_0_20px_rgba(79,124,255,0.3)]'
            : 'border border-white/20 text-[#F8FAFC] hover:border-[#4F7CFF] hover:bg-[rgba(79,124,255,0.08)]'
        }`}
      >
        💬 Solicitar demonstração gratuita
      </a>
    </article>
  );
}
