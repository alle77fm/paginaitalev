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
            className="rounded-2xl border border-white/[0.08] p-5 transition-all duration-300 hover:border-[#4F7CFF]/40 hover:shadow-[0_8px_32px_rgba(79,124,255,0.12)]"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <blockquote>
              <p className="text-sm text-[#94A3B8] leading-relaxed">&ldquo;{d.texto}&rdquo;</p>
              <footer className="mt-4">
                <p className="font-sora font-bold text-[#F8FAFC] text-sm">{d.nome}</p>
                <p className="text-xs text-[#FF6600] font-medium">{d.comercio}</p>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
}
