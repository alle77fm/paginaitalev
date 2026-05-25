import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { italev } from '@/lib/entities';
import {
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
} from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Italev Sistemas — App de delivery e e-commerce para comércios locais',
    template: '%s | Italev Sistemas',
  },
  description: italev.entityStatement,
  metadataBase: new URL(italev.domain),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    siteName: italev.brandName,
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  /**
   * Staging: noindex ativo.
   * Remover antes do cutover de DNS (ver MIGRATION_ROADMAP.md Fase 5).
   */
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} dark`}
    >
      <body className="font-inter antialiased bg-surface text-on-surface">
        {/* JSON-LD da entidade — presente em todas as páginas */}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={webSiteSchema()} />

        {children}

        {/* Botão flutuante "Ver funcionando" — presente em todas as páginas */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
