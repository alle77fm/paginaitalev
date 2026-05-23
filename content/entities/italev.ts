/**
 * Fonte única de verdade sobre a entidade Italev Sistemas.
 * Metadata, schema, header, footer e blocos de entidade leem daqui.
 * NUNCA duplicar esses dados em outro arquivo.
 */
export const italev = {
  brandName: 'Italev Sistemas',
  /**
   * CNPJ/razão social formal ainda não registrado.
   * Usar apenas legalName — sem taxID, vatID ou campos fiscais.
   */
  legalName: 'Italev Sistemas',
  category: 'software house',
  entityStatement:
    'Italev Sistemas é uma software house que desenvolve aplicativos próprios de delivery e e-commerce para supermercados, restaurantes e comércios locais, com pedidos integrados ao WhatsApp e sem taxas sobre vendas.',
  domain: 'https://italevsistemas.com',
  email: 'italevsistemas@gmail.com',
  phone: '+55 35 99749-3286',
  whatsapp: '5535997493286',
  city: 'Itajubá',
  state: 'MG',
  country: 'BR',
  atendimento: 'Segunda a sexta, 9h às 18h',
  social: {
    instagram: 'https://www.instagram.com/italevsistemas',
    tiktok: 'https://www.tiktok.com/@italevsistemas',
  },
  youtube: {
    videoId: 'MLpWrANjFbI',
    url: 'https://www.youtube.com/watch?v=MLpWrANjFbI',
  },
} as const;
