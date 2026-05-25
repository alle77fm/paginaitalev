interface SolutionCardProps {
  icone: string;
  titulo: string;
  descricao: string;
}

export default function SolutionCard({ icone, titulo, descricao }: SolutionCardProps) {
  return (
    <article
      className="rounded-2xl border border-white/[0.08] p-6 transition-all duration-300 hover:border-[#4F7CFF]/40 hover:shadow-[0_8px_32px_rgba(79,124,255,0.12)]"
      style={{ background: 'rgba(255,255,255,0.03)' }}
    >
      <span className="text-3xl" aria-hidden="true">{icone}</span>
      <h3 className="font-sora mt-3 text-base font-bold text-[#F8FAFC] leading-snug">
        {titulo}
      </h3>
      <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">{descricao}</p>
    </article>
  );
}
