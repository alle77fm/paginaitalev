import type { Metadata } from 'next';
import { Space_Grotesk, Inter, Sora } from 'next/font/google';
import './globals.css';
import { italev } from '@/lib/entities';
import {
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
} from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';
import Header from '@/components/layout/Header';
import FloatingButton from '@/components/ui/FloatingButton';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${sora.variable} ${inter.variable} dark`}
    >
      <body className="font-inter antialiased">
        {/* JSON-LD da entidade — presente em todas as páginas */}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={webSiteSchema()} />

        <Header />
        {children}
        <FloatingButton />
      </body>
    </html>
  );
}
