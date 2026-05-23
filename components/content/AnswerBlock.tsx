/**
 * Átomo de conteúdo GEO — responde uma pergunta/intenção isoladamente.
 * RSC. Texto sempre no HTML do servidor.
 */
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
    <article className="border-2 border-black rounded-xl p-6 bg-white shadow-[4px_4px_0_#000]">
      <Tag className="font-space-grotesk text-lg font-bold leading-snug text-gray-900 mb-3">
        {heading}
      </Tag>
      <p className="text-gray-700 leading-relaxed">{resposta}</p>
      {fato && (
        <p className="mt-3 text-sm text-gray-500 border-l-4 border-[#FF5A00] pl-3 italic">
          {fato}
        </p>
      )}
    </article>
  );
}
