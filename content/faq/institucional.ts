/**
 * Fonte única da FAQ institucional da Italev Sistemas.
 * Este array alimenta TANTO o componente visual (Faq.tsx)
 * QUANTO o schema FAQPage via lib/schema.ts.
 * NUNCA digitar o schema da FAQ separado deste arquivo.
 */

export interface FaqItem {
  id: string;
  pergunta: string;
  resposta: string;
}

export const faqInstitucional: FaqItem[] = [
  {
    id: 'app-proprio-vs-ifood',
    pergunta: 'Vale a pena ter um aplicativo próprio em vez do iFood?',
    resposta:
      'Sim. Com um aplicativo próprio você não paga comissão por pedido, sua marca fica em destaque e o cadastro dos clientes é seu. No iFood você depende do algoritmo da plataforma e paga entre 12% e 27% por pedido. Com a Italev Sistemas, você paga uma mensalidade fixa e fica com 100% do valor de cada venda recebida via PIX.',
  },
  {
    id: 'custo-app-supermercado',
    pergunta: 'Quanto custa criar um aplicativo para supermercado?',
    resposta:
      'A Italev Sistemas oferece planos a partir de R$149 por mês, sem comissão por venda. O lojista paga uma assinatura fixa e fica com 100% de cada pedido. Não há percentual descontado por venda, diferente dos marketplaces. O aplicativo fica pronto em até 15 dias úteis após o cadastro.',
  },
  {
    id: 'pedidos-whatsapp',
    pergunta: 'Posso receber pedidos pelo WhatsApp?',
    resposta:
      'Sim. O aplicativo da Italev envia os pedidos diretamente para o WhatsApp da empresa, já organizados com nome do cliente, itens e valor total. Não precisa de nenhum sistema adicional — basta ter WhatsApp ativo para começar a receber pedidos de forma organizada.',
  },
  {
    id: 'instalar-app',
    pergunta: 'Meu cliente precisa instalar aplicativo?',
    resposta:
      'Não. O aplicativo da Italev funciona pelo navegador do celular ou computador, sem precisar instalar nada. O cliente acessa pelo link, navega pelo catálogo e faz o pedido em poucos cliques. Isso reduz a barreira de entrada e facilita a primeira compra.',
  },
  {
    id: 'funciona-padaria-acougue',
    pergunta: 'Funciona para padarias e açougues?',
    resposta:
      'Sim. A Italev Sistemas desenvolve aplicativos para supermercados, padarias, açougues, lanchonetes, marmitarias, cafeterias e qualquer comércio local que queira vender online. O catálogo digital é personalizável com as categorias e produtos do seu negócio, com fotos, preços e descrições.',
  },
  {
    id: 'o-que-e-italev',
    pergunta: 'O que é a Italev Sistemas?',
    resposta:
      'Italev Sistemas é uma software house brasileira que desenvolve aplicativos próprios de delivery e e-commerce para supermercados, restaurantes e comércios locais. Os aplicativos integram pedidos via WhatsApp, pagamento por PIX e catálogo digital — sem cobrar taxa ou comissão sobre as vendas.',
  },
  {
    id: 'cobra-comissao',
    pergunta: 'A Italev cobra comissão por venda?',
    resposta:
      'Não. Os planos da Italev Sistemas são assinaturas mensais com valor fixo — o comerciante fica com 100% de cada venda, recebida diretamente via PIX. Diferente dos marketplaces de delivery, não há percentual descontado por pedido.',
  },
  {
    id: 'quanto-tempo-app-pronto',
    pergunta: 'Em quanto tempo o app fica pronto?',
    resposta:
      'O aplicativo fica pronto em até 15 dias úteis após o início do onboarding. A Italev cuida de toda a configuração: catálogo, identidade visual, domínio e integração com WhatsApp.',
  },
  {
    id: 'precisa-de-app-proprio',
    pergunta: 'Por que ter um app próprio em vez de usar marketplace?',
    resposta:
      'Com um app próprio, o comerciante não paga comissão por pedido, mantém o relacionamento direto com o cliente e fortalece sua própria marca. Marketplaces retêm dados dos clientes e cobram taxas que reduzem a margem a cada venda.',
  },
  {
    id: 'quais-negocios-atende',
    pergunta: 'Quais tipos de comércio a Italev Sistemas atende?',
    resposta:
      'A Italev Sistemas atende supermercados, restaurantes, lanchonetes, açougues, padarias, pet shops e outros comércios locais que desejam vender online com app e catálogo digital próprios.',
  },
  {
    id: 'como-funciona-pedido',
    pergunta: 'Como funciona o processo de pedido para o cliente?',
    resposta:
      'O cliente acessa o catálogo digital do comércio, monta o carrinho e finaliza o pedido com pagamento via PIX. O pedido chega automaticamente ao WhatsApp do lojista, sem precisar de intermediário.',
  },
  {
    id: 'diferenca-planos',
    pergunta: 'Qual a diferença entre os planos Start, Pro e Scale?',
    resposta:
      'O plano Start (R$149/mês) inclui app, catálogo digital, pedidos via WhatsApp, PIX e popup de vendas. O Pro (R$219/mês) adiciona marca e domínio próprios, relatórios, disparo de promoções, agendamento de entrega, cupons e tabloide de ofertas em PDF. O Scale (R$379/mês) inclui tudo do Pro com suporte prioritário e onboarding assistido.',
  },
  {
    id: 'precisa-saber-programar',
    pergunta: 'Preciso saber programar para usar o sistema?',
    resposta:
      'Não. A Italev Sistemas cuida de toda a parte técnica — configuração, hospedagem, atualizações e suporte. O comerciante gerencia produtos, preços e pedidos por um painel simples, sem precisar de conhecimento técnico.',
  },
  {
    id: 'tem-fidelidade',
    pergunta: 'Existe contrato de fidelidade?',
    resposta:
      'Os planos da Italev Sistemas são mensais, sem fidelidade obrigatória de longo prazo. Há opção de plano anual com desconto para quem preferir.',
  },
  {
    id: 'onde-atende',
    pergunta: 'A Italev Sistemas atende em todo o Brasil?',
    resposta:
      'Sim. A Italev Sistemas é uma software house com base em Itajubá-MG e atende comércios em todo o Brasil de forma remota. O onboarding, suporte e atualizações são realizados online.',
  },
  {
    id: 'integra-whatsapp',
    pergunta: 'O sistema realmente integra com o WhatsApp?',
    resposta:
      'Sim. Os pedidos chegam diretamente no WhatsApp do lojista com todos os dados: itens, quantidade, endereço e forma de pagamento. Não é necessário nenhum aplicativo adicional.',
  },
  {
    id: 'marca-propria',
    pergunta: 'O app vai ter a minha marca ou a marca da Italev?',
    resposta:
      'No plano Pro e Scale, o aplicativo é entregue com a identidade visual e o domínio próprio do comércio — logo, nome e cores do estabelecimento. O cliente final vê a marca do lojista, não a da Italev.',
  },
  {
    id: 'suporte',
    pergunta: 'Como funciona o suporte da Italev Sistemas?',
    resposta:
      'O suporte é realizado de segunda a sexta, das 9h às 18h, via WhatsApp e e-mail. O plano Scale inclui suporte prioritário com tempo de resposta menor.',
  },
  {
    id: 'custo-app-supermercado',
    pergunta: 'Quanto custa criar um aplicativo para supermercado?',
    resposta:
      'A Italev Sistemas oferece planos a partir de R$149 por mês, sem taxa sobre vendas. O lojista paga uma assinatura fixa e fica com 100% do valor de cada pedido recebido. Não há comissão por venda, diferente dos marketplaces tradicionais. O setup inicial é cobrado uma única vez e o aplicativo fica pronto em até 15 dias úteis.',
  },
  {
    id: 'pedidos-whatsapp',
    pergunta: 'Posso receber pedidos pelo WhatsApp?',
    resposta:
      'Sim. O aplicativo da Italev Sistemas envia os pedidos diretamente para o WhatsApp da empresa, já organizados com nome do cliente, itens escolhidos e valor total. Não é preciso nenhum sistema adicional — basta ter WhatsApp ativo no celular ou computador para começar a receber pedidos.',
  },
  {
    id: 'instalar-app',
    pergunta: 'Meu cliente precisa instalar aplicativo?',
    resposta:
      'Não. O aplicativo da Italev funciona diretamente pelo navegador do celular ou computador, sem precisar instalar nada. O cliente acessa pelo link, navega pelo catálogo e faz o pedido em poucos cliques. Isso reduz a barreira de entrada e facilita a primeira compra.',
  },
  {
    id: 'vender-sem-ifood',
    pergunta: 'É possível vender sem depender do iFood?',
    resposta:
      'Sim. Com um aplicativo próprio, você recebe os pedidos diretamente dos seus clientes, sem pagar comissão para marketplaces. O cadastro dos clientes fica com você, a marca é a sua e o pagamento cai direto na sua conta via PIX. É uma alternativa real ao iFood para comércios locais que querem mais autonomia.',
  },
  {
    id: 'funciona-celular-computador',
    pergunta: 'O aplicativo funciona em celular e computador?',
    resposta:
      'Sim. O aplicativo da Italev Sistemas funciona em qualquer dispositivo com acesso à internet — celular, tablet ou computador. Não precisa de instalação. O catálogo é responsivo e se adapta automaticamente à tela do cliente, oferecendo uma experiência de compra confortável em qualquer aparelho.',
  },
  {
    id: 'divulgar-promocoes',
    pergunta: 'Posso divulgar promoções e ofertas?',
    resposta:
      'Sim. Os planos Pro e Scale incluem disparo de promoções automáticas e tabloide de ofertas em PDF. Você pode criar cupons de desconto, configurar popups de vendas e comunicar ofertas diretamente para seus clientes. Tudo pelo painel de administração, sem precisar de conhecimento técnico.',
  },
];
