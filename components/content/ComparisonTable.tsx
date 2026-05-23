/**
 * Tabela comparativa semântica — machine-readable.
 * RSC. Usa <table> real, não divs estilizadas.
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
    <div className="overflow-x-auto rounded-xl border-2 border-black shadow-[4px_4px_0_#000]">
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
  );
}
