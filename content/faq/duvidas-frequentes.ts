export interface DuvidaFrequenteItem {
  id: string;
  pergunta: string;
  resposta: string;
}

export const duvidasFrequentes: DuvidaFrequenteItem[] = [
  {
    id: 'o-que-a-italev-faz',
    pergunta: 'O que a Italev Sistemas faz?',
    resposta:
      'A Italev Sistemas cria aplicativos próprios para comércios venderem online de forma simples. A solução é ideal para mercados, padarias, açougues, lanchonetes, restaurantes, lojas e outros negócios que querem receber pedidos pelo WhatsApp, divulgar ofertas e vender mais sem depender apenas de marketplaces.',
  },
  {
    id: 'tipo-de-comercio',
    pergunta: 'Para que tipo de comércio esse aplicativo serve?',
    resposta:
      'O aplicativo serve para comércios locais que vendem produtos ou recebem pedidos, como mercados, mercearias, padarias, açougues, hortifrutis, restaurantes, pizzarias, lanchonetes, lojas de roupas, lojas de presentes e prestadores de serviços. A ideia é ajudar o cliente a ver produtos, ofertas e fazer pedidos de forma prática.',
  },
  {
    id: 'como-cliente-faz-pedido',
    pergunta: 'Como o cliente faz um pedido pelo aplicativo?',
    resposta:
      'O cliente acessa o aplicativo da loja, escolhe os produtos ou serviços, monta o pedido e envia diretamente para o WhatsApp do comércio. Assim, o lojista continua atendendo de forma familiar, mas com uma vitrine online mais organizada e profissional.',
  },
  {
    id: 'comissao-por-pedido',
    pergunta: 'Preciso pagar comissão por cada pedido?',
    resposta:
      'Não. O aplicativo próprio da Italev não cobra comissão por pedido. O lojista paga um custo de montagem da loja e uma mensalidade para manutenção, atualizações e suporte conforme o plano contratado.',
  },
  {
    id: 'formas-de-pagamento',
    pergunta: 'Quais formas de pagamento posso oferecer?',
    resposta:
      'A loja pode combinar as formas de pagamento de acordo com sua operação. É possível trabalhar com Pix, dinheiro, cartão na entrega, pagamento no balcão ou outras formas que façam sentido para o comércio. Integrações com pagamentos online podem depender do plano, da configuração e dos serviços disponíveis.',
  },
  {
    id: 'substitui-ifood-marketplaces',
    pergunta: 'O aplicativo substitui o iFood ou outros marketplaces?',
    resposta:
      'O aplicativo próprio não precisa substituir totalmente os marketplaces. Ele funciona como um canal de venda próprio, onde o comércio divulga sua marca, atende seus clientes diretamente e evita pagar comissão por cada pedido. Muitos lojistas podem usar os dois caminhos, mas fortalecendo cada vez mais o canal próprio.',
  },
  {
    id: 'precisa-entender-tecnologia',
    pergunta: 'Eu preciso entender de tecnologia para usar?',
    resposta:
      'Não. A proposta da Italev é entregar uma solução simples para o lojista usar no dia a dia. O comércio recebe uma estrutura pronta para divulgar produtos, ofertas e pedidos, sem precisar entender de programação ou termos técnicos.',
  },
  {
    id: 'cadastro-de-produtos',
    pergunta: 'A Italev cadastra os produtos da minha loja?',
    resposta:
      'Isso depende do plano ou da contratação combinada. Em alguns casos, o lojista pode cadastrar seus próprios produtos. Em outros, pode contratar apoio para configuração inicial, montagem da loja ou organização das informações. O ideal é solicitar uma demonstração para entender a melhor opção para o seu negócio.',
  },
  {
    id: 'divulgar-ofertas',
    pergunta: 'Posso divulgar ofertas no aplicativo?',
    resposta:
      'Sim. O aplicativo pode ser usado para divulgar produtos, promoções e ofertas da loja. Isso ajuda o comércio a organizar melhor a comunicação com os clientes e facilita a divulgação pelo WhatsApp, redes sociais e outros canais.',
  },
  {
    id: 'funciona-no-celular',
    pergunta: 'O aplicativo funciona no celular?',
    resposta:
      'Sim. O aplicativo é feito para funcionar bem no celular, porque a maioria dos clientes acessa lojas, cardápios e ofertas pelo smartphone. O objetivo é facilitar a compra e o contato direto entre cliente e comércio.',
  },
  {
    id: 'atendimento-itajuba-brasil',
    pergunta: 'A Italev atende apenas Itajubá e região?',
    resposta:
      'A Italev Sistemas atende comércios em Itajubá, Minas Gerais e também em outras regiões do Brasil. O atendimento pode ser feito online, com demonstração e orientação para entender a necessidade de cada negócio.',
  },
  {
    id: 'quanto-custa-aplicativo-proprio',
    pergunta: 'Quanto custa para ter um aplicativo próprio?',
    resposta:
      'O investimento é formado por um custo inicial de montagem da loja e uma mensalidade para manter o aplicativo funcionando, atualizado e com suporte conforme o plano escolhido. O valor pode variar de acordo com os recursos necessários, volume da operação e nível de personalização.',
  },
  {
    id: 'serve-para-minha-loja',
    pergunta: 'Como faço para saber se serve para minha loja?',
    resposta:
      'Você pode solicitar uma demonstração gratuita. A Italev analisa o tipo de comércio, como os pedidos são feitos hoje e quais recursos podem ajudar sua loja a vender melhor online.',
  },
];

export const duvidasFrequentesHomeIds = [
  'o-que-a-italev-faz',
  'tipo-de-comercio',
  'como-cliente-faz-pedido',
  'comissao-por-pedido',
  'serve-para-minha-loja',
  'quanto-custa-aplicativo-proprio',
] as const;

export const duvidasFrequentesHome = duvidasFrequentes.filter((item) =>
  duvidasFrequentesHomeIds.includes(item.id as (typeof duvidasFrequentesHomeIds)[number]),
);
