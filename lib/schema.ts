/**
 * Geradores de JSON-LD para o ecossistema Italev Sistemas.
 * Todos derivam da mesma fonte: lib/entities.ts → content/entities/italev.ts
 * Schema NUNCA afirma o que não está visível na página.
 * CNPJ/taxID/vatID: omitidos intencionalmente (ver CLAUDE.md §4.1).
 */
import { italev, type Produto } from '@/lib/entities';
import { planos } from '@/content/comparisons/planos';

/** @id estável da Organization — �ncora do grafo de entidades */
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
    description: italev.entityStatement,
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
// OfferCatalog — planos Start, Pro e Master
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
    offerCount: planos.length,
    itemListElement: planos.map((plano) => ({
      '@type': 'Offer',
      name: plano.nome,
      price: plano.preco.toFixed(2),
      priceCurrency: 'BRL',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: plano.preco.toFixed(2),
        priceCurrency: 'BRL',
        billingDuration: 'P1M',
      },
      description: `${plano.descricaoCurta} Implantação ${plano.implantacaoPrefixo ? 'a partir de ' : 'única de '}R${plano.implantacao.toLocaleString('pt-BR')}.`,
      availability: 'https://schema.org/InStock',
      seller: { '@id': ORG_ID },
    })),
  };
}

// ---------------------------------------------------------------------------
// SoftwareApplication
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
