interface DefinitionBlockProps {
  termo: string;
  definicao: string;
}

export default function DefinitionBlock({ termo, definicao }: DefinitionBlockProps) {
  return (
    <div
      className="rounded-2xl border border-[#4F7CFF]/20 px-6 py-5 shadow-[0_0_24px_rgba(79,124,255,0.08)]"
      style={{ background: 'rgba(79,124,255,0.05)' }}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-[#4F7CFF] mb-2">
        {termo}
      </p>
      <p className="text-base leading-relaxed text-[#F8FAFC]">{definicao}</p>
    </div>
  );
}
