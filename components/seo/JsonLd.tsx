/**
 * Injeta JSON-LD no servidor via <script type="application/ld+json">.
 * RSC — sem "use client". Conteúdo renderizado no HTML do servidor.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
