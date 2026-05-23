/**
 * Card de teaser de produto do ecossistema Italev.
 * Preparado para virar link para /produtos/[slug] quando as páginas existirem.
 * RSC.
 */
interface ProductTeaserProps {
  nome: string;
  categoria: string;
  descricao: string;
  tag: string;
  status: 'ativo' | 'em-breve';
}

export default function ProductTeaser({
  nome,
  categoria,
  descricao,
  tag,
  status,
}: ProductTeaserProps) {
  return (
    <article className="rounded-xl border-2 border-black bg-white p-5 shadow-[4px_4px_0_#000]">
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className="inline-block rounded-full border border-gray-200 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
          {tag}
        </span>
        {status === 'em-breve' && (
          <span className="inline-block rounded-full bg-amber-100 border border-amber-300 px-2.5 py-0.5 text-xs font-medium text-amber-700">
            Em breve
          </span>
        )}
      </div>
      <h3 className="font-space-grotesk text-base font-bold text-gray-900 leading-snug">
        {nome}
      </h3>
      <p className="mt-0.5 text-xs font-medium text-[#FF5A00]">{categoria}</p>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{descricao}</p>
    </article>
  );
}
