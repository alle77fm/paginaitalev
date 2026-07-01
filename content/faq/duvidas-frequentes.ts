export interface DuvidaFrequenteItem { id: string; pergunta: string; resposta: string; }

export const duvidasFrequentes: DuvidaFrequenteItem[] = [
  { id: 'o-que-a-italev-faz', pergunta: 'O que a Italev Sistemas faz?', resposta: 'A Italev Sistemas monta um catálogo online com a identidade do comércio para divulgar ofertas e receber pedidos diretamente no WhatsApp da loja, sem comissão por pedido.' },
  { id: 'tipo-de-comercio', pergunta: 'Para que tipo de comércio a solução serve?', resposta: 'A solução é feita para mercados, padarias, açougues, hortifrutis, restaurantes, pizzarias, lanchonetes, pet shops, lojas e outros negócios locais.' },
  { id: 'como-cliente-faz-pedido', pergunta: 'Como o cliente faz um pedido?', resposta: 'O cliente acessa o catálogo, escolhe os produtos e envia o pedido diretamente para o WhatsApp do comércio. O lojista recebe os itens organizados e continua o atendimento pelo próprio número.' },
  { id: 'comissao-por-pedido', pergunta: 'A Italev cobra comissão por pedido?', resposta: 'Não. A Italev trabalha com mensalidade fixa. Os pedidos vão direto para o WhatsApp da loja, sem cobrança de comissão por venda.' },
  { id: 'custo-implantacao', pergunta: 'Existe custo de implantação?', resposta: 'Sim. A implantação é cobrada uma única vez e varia conforme o plano escolhido. O plano Start tem implantação de R$497, o Pro de R$897 e o Master tem implantação a partir de R$1.497.' },
  { id: 'ia-inclusa', pergunta: 'O atendente virtual com IA está incluso nos planos?', resposta: 'Não necessariamente. O atendente virtual para WhatsApp é uma solução complementar que pode ser contratada separadamente ou combinada com o catálogo online.' },
  { id: 'precisa-entender-tecnologia', pergunta: 'Preciso entender de tecnologia para usar?', resposta: 'Não. A proposta da Italev é entregar uma solução simples para o comércio local, com implantação assistida e orientação inicial de uso.' },
  { id: 'formas-de-pagamento', pergunta: 'Quais formas de pagamento posso oferecer?', resposta: 'A loja pode combinar PIX, dinheiro, cartão na entrega ou pagamento no balcão conforme sua operação. A disponibilidade de integrações específicas depende da configuração contratada.' },
  { id: 'substitui-marketplaces', pergunta: 'Preciso abandonar os marketplaces?', resposta: 'Não. O catálogo próprio pode funcionar junto com marketplaces, criando um canal direto em que a loja mantém sua marca, o relacionamento com o cliente e não paga comissão por pedido à Italev.' },
  { id: 'cadastro-de-produtos', pergunta: 'Como funciona o cadastro de produtos?', resposta: 'A implantação inclui o cadastro estrutural e a configuração inicial da loja. O nível de apoio varia conforme o plano e a complexidade do catálogo.' },
  { id: 'divulgar-ofertas', pergunta: 'Posso divulgar ofertas no catálogo?', resposta: 'Sim. O catálogo organiza produtos e ofertas em uma página profissional que pode ser compartilhada pelo WhatsApp, redes sociais e outros canais.' },
  { id: 'funciona-no-celular', pergunta: 'O catálogo funciona no celular?', resposta: 'Sim. O catálogo é responsivo e funciona no navegador do celular, tablet ou computador, sem exigir instalação para o cliente.' },
  { id: 'atendimento-brasil', pergunta: 'A Italev atende em todo o Brasil?', resposta: 'Sim. A Italev Sistemas atende negócios locais em todo o Brasil de forma online, com demonstração, implantação e orientação de uso.' },
  { id: 'quanto-custa-aplicativo-proprio', pergunta: 'Quanto custa ter um catálogo online próprio?', resposta: 'O plano Start custa R$149 por mês e implantação única de R$497; o Pro custa R$219 por mês e implantação de R$897; o Master parte de R$697 por mês e implantação a partir de R$1.497.' },
  { id: 'serve-para-minha-loja', pergunta: 'Como saber se a solução serve para minha loja?', resposta: 'Solicite uma demonstração. A Italev avalia o tipo de comércio, o catálogo, a rotina de pedidos e o nível de acompanhamento necessário.' },
];

export const duvidasFrequentesHomeIds = ['o-que-a-italev-faz','como-cliente-faz-pedido','comissao-por-pedido','custo-implantacao','ia-inclusa','precisa-entender-tecnologia'] as const;
export const duvidasFrequentesHome = duvidasFrequentes.filter((item) => duvidasFrequentesHomeIds.includes(item.id as (typeof duvidasFrequentesHomeIds)[number]));
