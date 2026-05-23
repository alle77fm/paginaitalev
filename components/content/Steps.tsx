/**
 * Passos numerados — RSC, HTML semântico com <ol>.
 */
interface Passo {
  numero: number;
  titulo: string;
  descricao: string;
}

export default function Steps({ passos }: { passos: Passo[] }) {
  return (
    <ol className="space-y-6">
      {passos.map((passo) => (
        <li key={passo.numero} className="flex gap-4">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-[#FF5A00] font-space-grotesk text-sm font-black text-white shadow-[2px_2px_0_#000]"
          >
            {passo.numero}
          </span>
          <div className="pt-1">
            <h3 className="font-space-grotesk text-base font-bold text-gray-900 leading-snug">
              {passo.titulo}
            </h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">{passo.descricao}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
