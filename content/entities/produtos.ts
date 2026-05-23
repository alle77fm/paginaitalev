/**
 * Dados de teaser dos produtos da Italev Sistemas.
 * Aparecem na landing como cards semânticos — SEM páginas completas agora.
 * Quando as páginas /produtos/[slug] existirem, estes dados alimentam o schema SoftwareApplication.
 */

export type ProdutoStatus = 'ativo' | 'em-breve';

export interface Produto {
  slug: string;
  nome: string;
  categoria: string;
  descricao: string;
  descricaoLonga: string;
  status: ProdutoStatus;
  tag: string;
}

export const produtos: Produto[] = [
  {
    slug: 'e-pra-ja-pedidos',
    nome: 'É Pra Já Pedidos',
    categoria: 'SaaS de catálogo digital e delivery',
    descricao:
      'Sistema de catálogo digital e pedidos online com PIX e WhatsApp, alternativa de loja própria aos marketplaces de delivery.',
    descricaoLonga:
      'É Pra Já Pedidos é um produto da Italev Sistemas: um sistema de catálogo digital e pedidos online com PIX e WhatsApp, alternativa de loja própria aos marketplaces de delivery. O lojista fica com 100% de cada venda — sem taxa por pedido.',
    status: 'ativo',
    tag: 'produto Italev',
  },
  {
    slug: 'pedelev',
    nome: 'PedeLev',
    categoria: 'SaaS de delivery próprio',
    descricao:
      'Aplicativo próprio de delivery para comércios locais com pedidos integrados ao WhatsApp e sem dependência de marketplaces.',
    descricaoLonga:
      'PedeLev é um produto da Italev Sistemas: um aplicativo de delivery próprio para comércios locais, com pedidos integrados ao WhatsApp. Permite ao comerciante operar sem depender de marketplaces externos.',
    status: 'ativo',
    tag: 'produto Italev',
  },
];
