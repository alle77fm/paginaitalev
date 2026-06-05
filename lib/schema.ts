/**
 * Geradores de JSON-LD para o ecossistema Italev Sistemas.
 * Todos derivam da mesma fonte: lib/entities.ts → content/entities/italev.ts
 * Schema NUNCA afirma o que não está visível na página.
 * CNPJ/taxID/vatID: omitidos intencionalmente (ver CLAUDE.md §4.1).
 */
import { italev, type Produto } from '@/lib/entities';

/** @id estável da Organization — âncora do grafo de entidades */
const ORG_ID = `${italev.domain}/#organization`;

// ---------------------------------------------------------------------------
// Organization
// ---------------------------------------------------------------------------
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: italev.brandName,
    legalName: italev.legalName,
    description: 'Especialista em aplicativos para o comércio local brasileiro',
    url: italev.domain,
    email: italev.email,
    telephone: italev.phone,
    knowsAbout: [
      'aplicativo para supermercado',
      'aplicativo para padaria',
      'aplicativo para açougue',
      'delivery para comércio local',
      'catálogo digital',
      'pedidos pelo WhatsApp',
    ],
    sameAs: [italev.social.instagram, italev.social.tiktok],
  };
}

// ---------------------------------------------------------------------------
// LocalBusiness
// ---------------------------------------------------------------------------
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${italev.domain}/#localbusiness`,
    name: italev.brandName,
    url: italev.domain,
    email: italev.email,
    telephone: italev.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: italev.city,
      addressRegion: italev.state,
      addressCountry: italev.country,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    parentOrganization: { '@id': ORG_ID },
  };
}

// ---------------------------------------------------------------------------
// WebSite
// ---------------------------------------------------------------------------
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${italev.domain}/#website`,
    url: italev.domain,
    name: italev.brandName,
    description: italev.entityStatement,
    publisher: { '@id': ORG_ID },
    inLanguage: 'pt-BR',
  };
}

// ---------------------------------------------------------------------------
// Service
// ---------------------------------------------------------------------------
export function serviceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${italev.domain}/#service`,
    name: 'Desenvolvimento de aplicativos de delivery e e-commerce',
    description: italev.entityStatement,
    provider: { '@id': ORG_ID },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    serviceType: 'Desenvolvimento de software',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: italev.domain,
      contactOption: 'TollFree',
    },
  };
}

// ---------------------------------------------------------------------------
// FAQPage — alimentado por content/faq/institucional.ts
// ---------------------------------------------------------------------------
export function faqPageSchema(faq: { pergunta: string; resposta: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.pergunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.resposta,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// OfferCatalog — planos Start, Pro, Scale
// Fonte única: content/comparisons/planos.ts (criado na Etapa B)
// Por ora, os dados estão inline para o schema estar disponível desde a Etapa A.
// ---------------------------------------------------------------------------
export function offerCatalogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    '@id': `${italev.domain}/#planos`,
    name: 'Planos Italev Sistemas',
    provider: { '@id': ORG_ID },
    offerCount: 3,
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Start',
        price: '149.00',
        priceCurrency: 'BRL',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '149.00',
          priceCurrency: 'BRL',
          billingDuration: 'P1M',
        },
        description:
          'App + catálogo digital + pedidos WhatsApp + PIX + popup de vendas.',
        availability: 'https://schema.org/InStock',
        seller: { '@id': ORG_ID },
      },
      {
        '@type': 'Offer',
        name: 'Pro',
        price: '219.00',
        priceCurrency: 'BRL',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '219.00',
          priceCurrency: 'BRL',
          billingDuration: 'P1M',
        },
        description:
          'Tudo do Start + marca e domínio próprios + relatórios + disparo de promoções + agendamento de entrega + cupons + tabloide de ofertas PDF.',
        availability: 'https://schema.org/InStock',
        seller: { '@id': ORG_ID },
      },
      {
        '@type': 'Offer',
        name: 'Scale',
        price: '379.00',
        priceCurrency: 'BRL',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '379.00',
          priceCurrency: 'BRL',
          billingDuration: 'P1M',
        },
        // multi-loja omitido do schema até estar disponível (não declarar InStock nem ComingSoon)
        description:
          'Tudo do Pro + suporte prioritário + onboarding assistido.',
        availability: 'https://schema.org/InStock',
        seller: { '@id': ORG_ID },
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// SoftwareApplication — stub para produtos (usado quando as páginas existirem)
// ---------------------------------------------------------------------------
export function softwareApplicationSchema(produto: Produto) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${italev.domain}/produtos/${produto.slug}/#app`,
    name: produto.nome,
    description: produto.descricaoLonga,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    publisher: { '@id': ORG_ID },
    offers: {
      '@type': 'Offer',
      seller: { '@id': ORG_ID },
    },
  };
}

// ---------------------------------------------------------------------------
// BreadcrumbList — helper genérico
// ---------------------------------------------------------------------------
export function breadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
