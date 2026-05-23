/**
 * Depoimentos reais — APENAS os 3 confirmados.
 * Não inventar nem adicionar sem dado real verificado.
 * RSC.
 */

const depoimentos = [
  {
    id: 'carlos-mendes',
    nome: 'Carlos Mendes',
    comercio: 'Supermercado Ideal',
    texto:
      'Com o app da Italev, meus clientes pedem direto pelo celular sem precisar ligar. As vendas online cresceram e eu não pago comissão em nenhum pedido.',
  },
  {
    id: 'luciana-ferreira',
    nome: 'Luciana Ferreira',
    comercio: 'Açougue Bom Corte',
    texto:
      'Antes eu anotava tudo no papel. Hoje os pedidos chegam organizados no WhatsApp e o catálogo está sempre atualizado. Ficou muito mais fácil de gerenciar.',
  },
  {
    id: 'thiago-costa',
    nome: 'Thiago Costa',
    comercio: 'Lanchonete Sabor da Vila',
    texto:
      'Minha lanchonete tem app próprio com minha marca. Os clientes adoraram e o movimento aumentou. A Italev cuidou de tudo — foi mais rápido do que eu esperava.',
  },
];

export default function Testimonials() {
  return (
    <section aria-label="Depoimentos de clientes">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {depoimentos.map((d) => (
          <li
            key={d.id}
            className="rounded-xl border-2 border-black bg-white p-5 shadow-[4px_4px_0_#000]"
          >
            <blockquote>
              <p className="text-sm text-gray-700 leading-relaxed">&ldquo;{d.texto}&rdquo;</p>
              <footer className="mt-4">
                <p className="font-space-grotesk font-bold text-gray-900 text-sm">{d.nome}</p>
                <p className="text-xs text-[#FF5A00] font-medium">{d.comercio}</p>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
}
