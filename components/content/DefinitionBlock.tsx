/**
 * Bloco de definição de entidade/conceito — formato canônico para citação por IA.
 * "[Termo] é [categoria] que [função], para [público], [diferenciador]."
 * RSC.
 */
interface DefinitionBlockProps {
  termo: string;
  definicao: string;
}

export default function DefinitionBlock({ termo, definicao }: DefinitionBlockProps) {
  return (
    <div className="rounded-xl border-2 border-black bg-gray-950 px-6 py-5 text-white shadow-[4px_4px_0_#FF5A00]">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5A00] mb-2">
        {termo}
      </p>
      <p className="text-base leading-relaxed text-gray-100">{definicao}</p>
    </div>
  );
}
