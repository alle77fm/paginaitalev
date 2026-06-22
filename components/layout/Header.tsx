import Link from 'next/link';
import Image from 'next/image';
import { italev } from '@/lib/entities';

const navLinks = [
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#planos', label: 'Planos' },
  { href: '/duvidas-frequentes', label: 'Dúvidas' },
  { href: '/#contato', label: 'Contato' },
];

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-3 md:p-4">
      <div className="max-w-container mx-auto md:px-gutter relative flex w-full items-center justify-between rounded-full border border-white/10 bg-surface/40 px-3 py-3 backdrop-blur-xl glass-nav md:py-4">
        {/* Menu mobile */}
        <details className="group md:hidden">
          <summary
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/10 text-on-surface transition-colors hover:border-primary-container hover:text-primary-container [&::-webkit-details-marker]:hidden"
            aria-label="Abrir menu"
          >
            <svg className="h-5 w-5 group-open:hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg className="hidden h-5 w-5 group-open:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </summary>

          <div className="absolute left-0 right-0 top-[calc(100%+0.75rem)] rounded-2xl border border-white/10 bg-surface/95 p-3 shadow-[0_18px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:bg-white/5 hover:text-primary-container"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </details>

        {/* Logo */}
        <Link
          href="/"
          className="absolute left-1/2 flex -translate-x-1/2 items-center md:static md:translate-x-0"
          aria-label={`${italev.brandName} — página inicial`}
        >
          <Image
            src="/logo_it.png"
            alt={italev.brandName}
            width={916}
            height={272}
            priority
            className="h-8 w-auto md:h-9"
            sizes="(max-width: 768px) 120px, 140px"
          />
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
          href="/#planos"
          className="rounded-full bg-primary-container px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white transition-all orange-glow active:scale-95 hover:bg-primary-container/90 md:px-6 md:text-label-caps md:tracking-widest"
        >
          Ver planos
        </Link>
      </div>
    </nav>
  );
}
