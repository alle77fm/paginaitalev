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

      {/* Mobile: Cards responsivos */}
      <div className="md:hidden space-y-4">
        {linhas.map((linha, i) => (
          <div
            key={i}
            className="rounded-lg border-2 border-black bg-white p-4 shadow-[2px_2px_0_#000]"
          >
            <h3 className="font-space-grotesk font-bold text-gray-900 mb-3">
              {linha.criterio}
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-[#FF5A00] mb-1">
                  {labelPropria}
                </p>
                <p className="text-sm text-gray-700">
                  {linha.propria}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-1">
                  {labelMarketplace}
                </p>
                <p className="text-sm text-gray-600">
                  {linha.marketplace}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
