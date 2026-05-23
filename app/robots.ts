import type { MetadataRoute } from 'next';

/**
 * Staging: bloqueia indexação de todo o site.
 * Remover o disallow '/' e habilitar o sitemap antes do cutover de DNS.
 * Ver MIGRATION_ROADMAP.md — Fase 5.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    // sitemap: 'https://italevsistemas.com/sitemap.xml', // ← descomentar no cutover
  };
}
