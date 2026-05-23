/**
 * Dados da tabela comparativa: plataforma própria vs. marketplace.
 * Comissão do marketplace = [INSERIR] — validar com fonte datada antes de publicar.
 */

export interface LinhaComparativa {
  criterio: string;
  propria: string;
  marketplace: string;
}

export const comparativoPropriaVsMarketplace: LinhaComparativa[] = [
  {
    criterio: 'Comissão por venda',
    propria: '0% — 100% fica com o lojista',
    marketplace: '[INSERIR]% por pedido',
  },
  {
    criterio: 'Modelo de cobrança',
    propria: 'Assinatura mensal fixa',
    marketplace: 'Percentual variável sobre cada venda',
  },
  {
    criterio: 'Dados dos clientes',
    propria: 'Pertencem ao lojista',
    marketplace: 'Pertencem à plataforma',
  },
  {
    criterio: 'Identidade visual',
    propria: 'Marca e domínio próprios',
    marketplace: 'Marca da plataforma',
  },
  {
    criterio: 'Relacionamento com o cliente',
    propria: 'Direto via WhatsApp',
    marketplace: 'Mediado pela plataforma',
  },
  {
    criterio: 'Controle de promoções',
    propria: 'Total — o lojista define',
    marketplace: 'Limitado às regras da plataforma',
  },
  {
    criterio: 'Dependência externa',
    propria: 'Nenhuma',
    marketplace: 'Alta — regras podem mudar a qualquer momento',
  },
];
