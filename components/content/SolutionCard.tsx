/**
 * Card de solução — placeholder preparado para expansão futura.
 * RSC.
 */
interface SolutionCardProps {
  icone: string;
  titulo: string;
  descricao: string;
}

export default function SolutionCard({ icone, titulo, descricao }: SolutionCardProps) {
  return (
    <article className="rounded-xl border-2 border-black bg-white p-5 shadow-[4px_4px_0_#000] transition-all hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]">
      <span className="text-3xl" aria-hidden="true">{icone}</span>
      <h3 className="font-space-grotesk mt-3 text-base font-bold text-gray-900 leading-snug">
        {titulo}
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{descricao}</p>
    </article>
  );
}
