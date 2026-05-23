/**
 * Card de plano de preços.
 * O plano Pro tem destaque visual obrigatório: badge, borda #FF5A00, posição central.
 * RSC.
 */
import type { Plano } from '@/content/comparisons/planos';

interface PricingCardProps {
  plano: Plano;
}

export default function PricingCard({ plano }: PricingCardProps) {
  const isPro = plano.destaque;

  return (
    <article
      className={`relative flex flex-col rounded-xl border-2 p-6 shadow-[4px_4px_0_#000] transition-all ${
        isPro
          ? 'border-[#FF5A00] bg-white scale-100 md:scale-105 z-10'
          : 'border-black bg-white'
      }`}
      aria-label={`Plano ${plano.nome}`}
    >
      {/* Badge destaque */}
      {plano.badgeTexto && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-block rounded-full border-2 border-black bg-[#FF5A00] px-4 py-1 text-xs font-black text-white shadow-[2px_2px_0_#000] whitespace-nowrap">
            {plano.badgeTexto}
          </span>
        </div>
      )}

      {/* Nome e preço */}
      <div className="mb-4 mt-2">
        <h3 className="font-space-grotesk text-xl font-black text-gray-900">{plano.nome}</h3>
        <div className="mt-2 flex items-end gap-1">
          <span className="font-space-grotesk text-4xl font-black text-gray-900">
            R${plano.preco}
          </span>
          <span className="mb-1 text-sm text-gray-500">/mês</span>
        </div>
        {plano.subTexto && (
          <p className="mt-1 text-xs font-semibold text-[#FF5A00]">{plano.subTexto}</p>
        )}
        <p className="mt-2 text-sm text-gray-600">{plano.descricaoCurta}</p>
      </div>

      {/* Setup e anual */}
      <div className="mb-4 space-y-0.5 text-xs text-gray-500">
        <p>+ Taxa de setup: {plano.setupLabel}</p>
        <p>Plano anual com desconto: {plano.anualLabel}</p>
      </div>

      {/* Recursos */}
      <ul className="mb-6 flex-1 space-y-2" role="list">
        {plano.recursos.map((recurso) => (
          <li key={recurso} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="mt-0.5 shrink-0 text-[#FF5A00]" aria-hidden="true">✓</span>
            {recurso}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={`https://wa.me/5535997493286?text=${encodeURIComponent(`Olá, tenho interesse no plano ${plano.nome} da Italev Sistemas.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full rounded-lg border-2 border-black py-3 text-center text-sm font-bold shadow-[3px_3px_0_#000] transition-all duration-150 hover:shadow-[1px_1px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none ${
          isPro ? 'bg-[#FF5A00] text-white' : 'bg-white text-gray-900'
        }`}
      >
        {isPro ? 'Escolher plano Pro' : `Escolher plano ${plano.nome}`}
      </a>
    </article>
  );
}
