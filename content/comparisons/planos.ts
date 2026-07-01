/** Fonte única dos planos Italev Sistemas para UI e schema. */
export interface RecursoPlano { nome: string; start: boolean; pro: boolean; master: boolean; }
export interface Plano {
  id: 'start' | 'pro' | 'master'; nome: string; preco: number; precoPrefixo?: string;
  implantacao: number; implantacaoPrefixo?: string; descricaoCurta: string;
  recursos: string[]; destaque: boolean; badgeTexto?: string; subTexto?: string; implantacaoGratisAnual: boolean;
}
export const planos: Plano[] = [
  { id: 'start', nome: 'Start', preco: 149, implantacao: 497, descricaoCurta: 'Para pequenos negócios que querem começar a vender online com catálogo próprio e pedidos pelo WhatsApp.', recursos: ['Catálogo online próprio', 'Pedidos direto no WhatsApp da loja', 'Pagamento via PIX', 'Popup de vendas e promoções'], destaque: false, implantacaoGratisAnual: true },
  { id: 'pro', nome: 'Pro', preco: 219, implantacao: 897, descricaoCurta: 'Para comércios que querem vender com mais organização, divulgar ofertas e profissionalizar o atendimento pelo WhatsApp.', recursos: ['Tudo do plano Start', 'Marca e domínio próprios', 'Relatórios e dashboard de vendas', 'Disparo de promoções', 'Agendamento de entrega', 'Cupons de desconto', 'Tabloide de ofertas em PDF'], destaque: true, badgeTexto: 'Mais recomendado', subTexto: 'Menos de R$7 por dia', implantacaoGratisAnual: true },
  { id: 'master', nome: 'Master', preco: 697, precoPrefixo: 'A partir de', implantacao: 1497, implantacaoPrefixo: 'A partir de', descricaoCurta: 'Para negócios com operação mais estruturada, maior volume de produtos ou necessidade de acompanhamento mais próximo.', recursos: ['Tudo do plano Pro', 'Suporte prioritário', 'Implantação mais assistida', 'Configuração avançada do catálogo', 'Orientação inicial mais próxima', 'Melhor acompanhamento nos primeiros dias'], destaque: false, implantacaoGratisAnual: true },
];
export const recursosComparativos: RecursoPlano[] = [
  { nome: 'Catálogo online próprio', start: true, pro: true, master: true },
  { nome: 'Pedidos pelo WhatsApp', start: true, pro: true, master: true },
  { nome: 'Pagamento PIX', start: true, pro: true, master: true },
  { nome: 'Popup de vendas', start: true, pro: true, master: true },
  { nome: 'Marca e domínio próprios', start: false, pro: true, master: true },
  { nome: 'Relatórios e dashboard', start: false, pro: true, master: true },
  { nome: 'Disparo de promoções', start: false, pro: true, master: true },
  { nome: 'Agendamento de entrega', start: false, pro: true, master: true },
  { nome: 'Cupons de desconto', start: false, pro: true, master: true },
  { nome: 'Tabloide de ofertas PDF', start: false, pro: true, master: true },
  { nome: 'Suporte prioritário', start: false, pro: false, master: true },
  { nome: 'Implantação mais assistida', start: false, pro: false, master: true },
  { nome: 'Configuração avançada do catálogo', start: false, pro: false, master: true },
  { nome: 'Acompanhamento inicial próximo', start: false, pro: false, master: true },
];
