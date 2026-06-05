import { planos } from '@/content/comparisons/planos';
import { italev } from '@/lib/entities';

interface PricingCardsProps {
  /** home → "Escolher Plano" linka para /planos; planos → abre WhatsApp */
  cta?: 'page' | 'whatsapp';
}

export default function PricingCards({ cta = 'whatsapp' }: PricingCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {planos.map((plano) => {
        const isPro = plano.destaque;
        const waLink = `https://wa.me/${italev.whatsapp}?text=${encodeURIComponent(
          `Olá! Tenho interesse no plano ${plano.nome} e gostaria de solicitar uma demonstração gratuita.`,
        )}`;

        return (
          <div
            key={plano.id}
            className={`p-10 rounded-[32px] flex flex-col relative transition-all duration-300 ${
              isPro
                ? 'border-2 border-[#FF5A00] shadow-[0_0_48px_rgba(255,90,0,0.15)] md:scale-105 z-10'
                : 'border border-white/[0.08] hover:border-[#FF5A00]/30 hover:shadow-[0_0_24px_rgba(255,90,0,0.08)]'
            }`}
            style={{
              background: isPro
                ? 'linear-gradient(135deg, rgba(255,90,0,0.08) 0%, rgba(255,255,255,0.03) 100%)'
                : 'rgba(255,255,255,0.03)',
            }}
          >
            {/* Badge */}
            {plano.badgeTexto && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-block rounded-full bg-[#FF5A00] px-4 py-1 text-xs font-black text-white whitespace-nowrap shadow-[0_0_16px_rgba(255,90,0,0.4)]">
                  {plano.badgeTexto}
                </span>
              </div>
            )}

            {/* Nome e preço */}
            <div className="mb-2 mt-2">
              <h3 className="font-sora text-xl font-black text-[#F8FAFC]">{plano.nome}</h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="font-sora text-4xl font-black text-[#F8FAFC]">
                  R${plano.preco}
                </span>
                <span className="mb-1 text-sm text-[#94A3B8]">/mês</span>
              </div>
              {plano.subTexto && (
                <p className="mt-1 text-xs font-semibold text-[#FF5A00]">{plano.subTexto}</p>
              )}
              <p className="mt-2 text-sm text-[#94A3B8]">{plano.descricaoCurta}</p>
            </div>

            {/* Divisor */}
            <div className="my-6 border-t border-white/[0.08]" />

            {/* Recursos */}
            <ul className="space-y-3 mb-10 flex-grow" role="list">
              {plano.recursos.map((recurso) => (
                <li key={recurso} className="flex items-start gap-3 text-sm text-[#F8FAFC]">
                  <span className="text-[#FF5A00] font-bold flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                  <span>{recurso}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            {cta === 'whatsapp' ? (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 rounded-xl text-center font-bold text-sm transition-all duration-200 ${
                  isPro
                    ? 'bg-[#FF5A00] hover:bg-[#e04e00] text-white shadow-[0_0_20px_rgba(255,90,0,0.35)]'
                    : 'border border-white/20 text-[#F8FAFC] hover:border-[#FF5A00] hover:bg-[rgba(255,90,0,0.08)]'
                }`}
              >
                💬 Solicitar demonstração gratuita
              </a>
            ) : (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 rounded-xl text-center font-bold text-sm transition-all duration-200 ${
                  isPro
                    ? 'bg-[#FF5A00] hover:bg-[#e04e00] text-white shadow-[0_0_20px_rgba(255,90,0,0.35)]'
                    : 'border border-white/20 text-[#F8FAFC] hover:border-[#FF5A00] hover:bg-[rgba(255,90,0,0.08)]'
                }`}
              >
                💬 Solicitar demonstração gratuita
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}
