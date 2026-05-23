/**
 * Tabela comparativa responsiva.
 * No desktop: tabela tradicional. No mobile: cards empilhados.
 */
interface LinhaComparativa {
  criterio: string;
  propria: string;
  marketplace: string;
}

interface ComparisonTableProps {
  linhas: LinhaComparativa[];
  labelPropria?: string;
  labelMarketplace?: string;
}

export default function ComparisonTable({
  linhas,
  labelPropria = 'App próprio (Italev)',
  labelMarketplace = 'Marketplace',
}: ComparisonTableProps) {
  return (
    <>
      {/* Desktop: Tabela tradicional */}
      <div className="hidden md:block overflow-x-auto rounded-xl border-2 border-black shadow-[4px_4px_0_#000]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-black bg-gray-950 text-white">
              <th scope="col" className="px-4 py-3 text-left font-space-grotesk font-bold">
                Critério
              </th>
              <th scope="col" className="px-4 py-3 text-left font-space-grotesk font-bold text-[#FF5A00]">
                {labelPropria}
              </th>
              <th scope="col" className="px-4 py-3 text-left font-space-grotesk font-bold text-gray-400">
                {labelMarketplace}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {linhas.map((linha, i) => (
              <tr key={i} className="hover:bg-orange-50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-800">{linha.criterio}</td>
                <td className="px-4 py-3 text-gray-700">{linha.propria}</td>
                <td className="px-4 py-3 text-gray-500">{linha.marketplace}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: Dois cards lado a lado */}
      <div className="md:hidden space-y-4">
        {/* Headers dos cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border-2 border-black bg-gray-950 p-3 text-center">
            <h3 className="font-space-grotesk font-bold text-[#FF5A00] text-sm">
              {labelPropria}
            </h3>
          </div>
          <div className="rounded-lg border-2 border-black bg-gray-100 p-3 text-center">
            <h3 className="font-space-grotesk font-bold text-gray-600 text-sm">
              {labelMarketplace}
            </h3>
          </div>
        </div>

        {/* Linhas de comparação */}
        {linhas.map((linha, i) => (
          <div key={i} className="space-y-2">
            {/* Critério em toda a largura */}
            <div className="bg-white border-l-4 border-[#FF5A00] pl-3 py-2">
              <p className="font-space-grotesk font-bold text-gray-900 text-sm">
                {linha.criterio}
              </p>
            </div>

            {/* Dois cards lado a lado */}
            <div className="grid grid-cols-2 gap-3">
              {/* App próprio */}
              <div className="rounded-lg border-2 border-[#FF5A00] bg-orange-50 p-3">
                <div className="flex gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs text-gray-700 leading-snug flex-1">
                    {linha.propria}
                  </p>
                </div>
              </div>

              {/* Marketplace */}
              <div className="rounded-lg border-2 border-gray-300 bg-gray-50 p-3">
                <div className="flex gap-2">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs text-gray-600 leading-snug flex-1">
                    {linha.marketplace}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
