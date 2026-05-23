/**
 * Answer-blocks reutilizáveis: dores do mercado, soluções e benefícios.
 * Cada bloco é autossuficiente — faz sentido lido isolado.
 */

export interface AnswerBlock {
  id: string;
  heading: string;
  resposta: string;
  fato?: string;
}

// ── Dores do mercado ────────────────────────────────────────────────────────
export const doresMercado: AnswerBlock[] = [
  {
    id: 'dependencia-marketplace',
    heading: 'Dependência de marketplaces tira a autonomia do comerciante',
    resposta:
      'Quem vende apenas por plataformas como iFood ou Rappi não controla os dados dos próprios clientes, não define as regras de promoção e paga comissão em cada pedido.',
    fato:
      'Quando a plataforma muda as regras ou aumenta a taxa, o lojista não tem para onde ir — a base de clientes pertence ao marketplace.',
  },
  {
    id: 'taxas-elevadas',
    heading: 'Taxas de marketplace reduzem a margem a cada venda',
    resposta:
      'Plataformas de delivery cobram percentual sobre cada pedido, além de taxas de cadastro e impulsionamento. O resultado é uma margem menor do que a venda presencial.',
    fato:
      'Com um app próprio de assinatura fixa, o comerciante paga o mesmo valor independentemente do volume de vendas — e fica com 100% de cada pedido.',
  },
  {
    id: 'falta-automacao',
    heading: 'Processos manuais travam o crescimento do comércio',
    resposta:
      'Anotar pedidos por mensagem de texto, controlar estoque em papel e disparar promoções manualmente consomem tempo e geram erros. Automação resolve isso.',
    fato:
      'Com catálogo digital, disparo automático de promoções e pedidos estruturados via WhatsApp, o comerciante ganha tempo para focar no negócio.',
  },
  {
    id: 'sem-app-proprio',
    heading: 'Sem app próprio, o comerciante não tem presença digital real',
    resposta:
      'Estar apenas em marketplace não é presença digital — é ser mais um item numa lista. Um app próprio coloca a marca do comércio direto no celular do cliente.',
    fato:
      'Clientes que têm o app do comércio instalado tendem a comprar com mais frequência e fidelidade do que clientes captados por plataformas de terceiros.',
  },
  {
    id: 'vendas-descentralizadas',
    heading: 'Vendas descentralizadas dificultam o controle do negócio',
    resposta:
      'Quando pedidos chegam por WhatsApp pessoal, Instagram, telefone e marketplace ao mesmo tempo, é impossível ter visão clara de faturamento, ticket médio e produtos mais vendidos.',
    fato:
      'Um sistema centralizado reúne todos os pedidos, gera relatórios automáticos e dá ao comerciante dados reais para tomar decisões.',
  },
];

// ── Soluções ────────────────────────────────────────────────────────────────
export interface SolucaoCard {
  id: string;
  titulo: string;
  descricao: string;
  icone: string; // emoji ou nome de ícone
}

export const solucoes: SolucaoCard[] = [
  {
    id: 'delivery-commerce',
    titulo: 'Delivery commerce próprio',
    descricao:
      'App de delivery com catálogo digital, carrinho, PIX e pedidos direto no WhatsApp — sem marketplace, sem comissão por venda.',
    icone: '🛒',
  },
  {
    id: 'catalogo-digital',
    titulo: 'Catálogo digital profissional',
    descricao:
      'Vitrine online com fotos, descrições e preços sempre atualizados. O cliente navega, escolhe e pede sem sair do celular.',
    icone: '📱',
  },
  {
    id: 'automacao-comercial',
    titulo: 'Automação comercial',
    descricao:
      'Disparo de promoções, cupons de desconto, agendamento de entrega e tabloide de ofertas em PDF — tudo automatizado.',
    icone: '⚡',
  },
  {
    id: 'ia-negocios',
    titulo: 'IA aplicada a negócios locais',
    descricao:
      'Recursos de inteligência aplicada para sugestão de produtos, análise de vendas e personalização de ofertas para o perfil de cada cliente.',
    icone: '🤖',
  },
];

// ── Benefícios ───────────────────────────────────────────────────────────────
export const beneficios: AnswerBlock[] = [
  {
    id: 'autonomia',
    heading: 'Autonomia total sobre vendas e clientes',
    resposta:
      'Com app próprio, os dados dos clientes pertencem ao lojista — não a uma plataforma. O comerciante decide preço, promoção e como se comunicar com cada cliente.',
    fato: 'Sem dependência de terceiros para acessar sua própria base de clientes.',
  },
  {
    id: 'reducao-taxas',
    heading: 'Fim da comissão por pedido',
    resposta:
      'A assinatura mensal fixa substitui o percentual variável do marketplace. O comerciante paga o mesmo valor e fica com 100% de cada venda recebida via PIX.',
    fato: 'Quanto maior o volume de vendas, maior o ganho em relação ao modelo de comissão.',
  },
  {
    id: 'fortalecimento-marca',
    heading: 'Marca do comércio no celular do cliente',
    resposta:
      'O app com identidade visual e domínio próprios coloca o nome e a logo do estabelecimento diretamente na tela inicial do smartphone do cliente.',
    fato: 'Marca própria gera reconhecimento e preferência — o cliente volta diretamente, sem passar pelo marketplace.',
  },
  {
    id: 'aumento-vendas',
    heading: 'Mais vendas com promoções automáticas',
    resposta:
      'Cupons, tabloides em PDF e disparo automático de promoções aumentam a frequência de compra sem exigir esforço manual do lojista.',
    fato: 'Promoções segmentadas e automatizadas têm maior taxa de conversão do que anúncios genéricos em plataformas.',
  },
  {
    id: 'escalabilidade',
    heading: 'Estrutura que cresce com o negócio',
    resposta:
      'A plataforma da Italev Sistemas é SaaS — o comerciante não precisa investir em infraestrutura. À medida que o volume cresce, o sistema escala sem custo adicional.',
    fato: 'App pronto em até 15 dias úteis, com suporte técnico incluso na assinatura.',
  },
];

// ── Como funciona (passos) ───────────────────────────────────────────────────
export interface Passo {
  numero: number;
  titulo: string;
  descricao: string;
}

export const comoFunciona: Passo[] = [
  {
    numero: 1,
    titulo: 'Escolha o plano ideal para o seu comércio',
    descricao:
      'Start, Pro ou Growth — cada plano tem recursos pensados para o estágio do negócio. O plano pode ser trocado a qualquer momento.',
  },
  {
    numero: 2,
    titulo: 'Onboarding com a equipe Italev',
    descricao:
      'Nossa equipe configura o catálogo, identidade visual, domínio e integração com WhatsApp. Você só precisa fornecer as informações do negócio.',
  },
  {
    numero: 3,
    titulo: 'App no ar em até 15 dias úteis',
    descricao:
      'O aplicativo é entregue pronto para receber pedidos — com catálogo, PIX e WhatsApp configurados. Sem necessidade de conhecimento técnico.',
  },
  {
    numero: 4,
    titulo: 'Pedidos chegam direto no WhatsApp',
    descricao:
      'Cada pedido feito pelo cliente chega automaticamente no WhatsApp do lojista com todos os detalhes: itens, valor, endereço e forma de pagamento.',
  },
  {
    numero: 5,
    titulo: 'Gerencie e cresça com dados reais',
    descricao:
      'Acompanhe vendas, ticket médio e produtos mais pedidos no dashboard. Use os dados para disparar promoções e fidelizar clientes.',
  },
];
