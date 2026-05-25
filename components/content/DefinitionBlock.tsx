interface DefinitionBlockProps {
  termo: string;
  definicao: string;
}

export default function DefinitionBlock({ termo, definicao }: DefinitionBlockProps) {
  return (
    <div
      className="rounded-2xl border border-[#FF5A00]/20 px-6 py-5 shadow-[0_0_24px_rgba(255,90,0,0.08)]"
      style={{ background: 'rgba(255,90,0,0.05)' }}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5A00] mb-2">
        {termo}
      </p>
      <p className="text-base leading-relaxed text-[#F8FAFC]">{definicao}</p>
    </div>
  );
}
