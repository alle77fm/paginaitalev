/**
 * Fonte única dos planos Italev Sistemas.
 * Alimenta a página /planos (UI) e o schema OfferCatalog.
 * [INSERIR] = taxa de setup e desconto anual (aguardando dado real).
 */

export interface RecursoPlano {
  nome: string;
  start: boolean;
  pro: boolean;
  scale: boolean;
}

export interface Plano {
  id: 'start' | 'pro' | 'scale';
  nome: string;
  preco: number; // mensal em BRL
  setupLabel: string; // '[INSERIR]' até ter dado real
  anualLabel: string; // '[INSERIR]' até ter dado real
  descricaoCurta: string;
  recursos: string[];
  destaque: boolean;
  badgeTexto?: string;
  subTexto?: string;
}

export const planos: Plano[] = [
  {
    id: 'start',
    nome: 'Start',
    preco: 149,
    setupLabel: '[INSERIR]',
    anualLabel: '[INSERIR]',
    descricaoCurta: 'Para começar a vender online com app e catálogo próprios.',
    recursos: [
      'Aplicativo próprio de delivery',
      'Catálogo digital com fotos e preços',
      'Pedidos integrados ao WhatsApp',
      'Pagamento via PIX',
      'Popup de vendas e promoções',
    ],
    destaque: false,
  },
  {
    id: 'pro',
    nome: 'Pro',
    preco: 219,
    setupLabel: '[INSERIR]',
    anualLabel: '[INSERIR]',
    descricaoCurta: 'Recomendado para a maioria dos comércios.',
    recursos: [
      'Tudo do plano Start',
      'Marca e domínio próprios',
      'Relatórios e dashboard de vendas',
      'Disparo de promoções automáticas',
      'Agendamento de entrega',
      'Cupons de desconto',
      'Tabloide de ofertas em PDF',
    ],
    destaque: true,
    badgeTexto: 'Mais escolhido',
    subTexto: 'Menos de R$7 por dia',
  },
  {
    id: 'scale',
    nome: 'Scale',
    preco: 379,
    setupLabel: '[INSERIR]',
    anualLabel: '[INSERIR]',
    descricaoCurta: 'Controle total para operações que querem crescer',
    recursos: [
      'Tudo do plano Pro',
      'Suporte prioritário',
      'Onboarding assistido',
      'Multi-loja (em breve)',
    ],
    destaque: false,
  },
];

export const recursosComparativos: RecursoPlano[] = [
  { nome: 'Aplicativo próprio', start: true, pro: true, scale: true },
  { nome: 'Catálogo digital', start: true, pro: true, scale: true },
  { nome: 'Pedidos via WhatsApp', start: true, pro: true, scale: true },
  { nome: 'Pagamento PIX', start: true, pro: true, scale: true },
  { nome: 'Popup de vendas', start: true, pro: true, scale: true },
  { nome: 'Marca e domínio próprios', start: false, pro: true, scale: true },
  { nome: 'Relatórios e dashboard', start: false, pro: true, scale: true },
  { nome: 'Disparo de promoções', start: false, pro: true, scale: true },
  { nome: 'Agendamento de entrega', start: false, pro: true, scale: true },
  { nome: 'Cupons de desconto', start: false, pro: true, scale: true },
  { nome: 'Tabloide de ofertas PDF', start: false, pro: true, scale: true },
  { nome: 'Suporte prioritário', start: false, pro: false, scale: true },
  { nome: 'Onboarding assistido', start: false, pro: false, scale: true },
];
