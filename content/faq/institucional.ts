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
    pergunta: 'Qual a diferença entre os planos Start, Pro e Growth?',
    resposta:
      'O plano Start (R$149/mês) inclui app, catálogo digital, pedidos via WhatsApp, PIX e popup de vendas. O Pro (R$219/mês) adiciona marca e domínio próprios, relatórios, disparo de promoções, agendamento de entrega, cupons e tabloide de ofertas em PDF. O Growth (R$379/mês) inclui tudo do Pro com suporte prioritário e onboarding assistido.',
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
      'No plano Pro e Growth, o aplicativo é entregue com a identidade visual e o domínio próprio do comércio — logo, nome e cores do estabelecimento. O cliente final vê a marca do lojista, não a da Italev.',
  },
  {
    id: 'suporte',
    pergunta: 'Como funciona o suporte da Italev Sistemas?',
    resposta:
      'O suporte é realizado de segunda a sexta, das 9h às 18h, via WhatsApp e e-mail. O plano Growth inclui suporte prioritário com tempo de resposta menor.',
  },
];
