import Link from 'next/link';
import { italev } from '@/lib/entities';

const navLinks = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre-nos', label: 'Sobre' },
  { href: '/planos', label: 'Planos' },
  { href: '/contato', label: 'Contato' },
];

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4">
      <div className="max-w-container mx-auto px-margin-mobile md:px-gutter w-full flex justify-between items-center py-4 bg-surface/40 backdrop-blur-xl rounded-full border border-white/10 glass-nav">
        {/* Logo */}
        <Link
          href="/"
          className="text-body-lg font-bold text-on-surface tracking-tight hover:text-primary-container transition-colors"
          aria-label={`${italev.brandName} — página inicial`}
        >
          {italev.brandName}
        </Link>

        {/* Nav desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-on-surface transition-colors text-label-caps uppercase tracking-widest"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/planos"
          className="bg-primary-container text-white px-6 py-2 rounded-full font-bold text-label-caps uppercase tracking-widest transition-all active:scale-95 hover:bg-primary-container/90 orange-glow"
        >
          Ver planos
        </Link>
      </div>
    </nav>
  );
}
