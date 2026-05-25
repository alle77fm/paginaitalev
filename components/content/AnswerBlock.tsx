interface AnswerBlockProps {
  heading: string;
  resposta: string;
  fato?: string;
  headingLevel?: 'h2' | 'h3';
}

export default function AnswerBlock({
  heading,
  resposta,
  fato,
  headingLevel: Tag = 'h2',
}: AnswerBlockProps) {
  return (
    <article
      className="rounded-2xl border border-white/[0.08] p-6 transition-all duration-300 hover:border-[#4F7CFF]/40 hover:shadow-[0_8px_32px_rgba(79,124,255,0.12)]"
      style={{ background: 'rgba(255,255,255,0.03)' }}
    >
      <Tag className="font-sora text-lg font-bold leading-snug text-[#F8FAFC] mb-3">
        {heading}
      </Tag>
      <p className="text-[#94A3B8] leading-relaxed">{resposta}</p>
      {fato && (
        <p className="mt-3 text-sm text-[#94A3B8] border-l-4 border-[#FF6600] pl-3 italic">
          {fato}
        </p>
      )}
    </article>
  );
}
