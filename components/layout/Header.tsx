'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { italev } from '@/lib/entities';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre-nos', label: 'Sobre' },
  { href: '/planos', label: 'Planos' },
  { href: '/duvidas-frequentes', label: 'Dúvidas' },
  { href: '/contato', label: 'Contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-2 md:p-4">
      <div className="max-w-container mx-auto md:px-gutter relative flex w-full items-center justify-between rounded-full border border-white/10 bg-surface/40 px-3 py-2 backdrop-blur-xl glass-nav md:py-4">

        {/* Logo — LEFT */}
        <Link
          href="/"
          className="shrink-0"
          aria-label={`${italev.brandName} — página inicial`}
        >
          <Image
            src="/logo_it.png"
            alt={italev.brandName}
            width={916}
            height={272}
            priority
            className="h-[41px] w-auto md:h-9"
            sizes="(max-width: 768px) 140px, 140px"
          />
        </Link>

        {/* Nav desktop — hidden on mobile */}
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

        {/* RIGHT: Ver planos + Hambúrguer (mobile) / Ver planos só (desktop) */}
        <div className="flex items-center gap-2">
          <Link
            href="/planos"
            className="rounded-full border border-primary-container/70 bg-transparent px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary-container transition-all hover:bg-primary-container/10 active:scale-95 md:px-5 md:py-2 md:text-label-caps md:tracking-widest"
          >
            Ver planos
          </Link>

          {/* Hambúrguer — mobile only */}
          <button
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 text-on-surface transition-colors hover:border-primary-container hover:text-primary-container md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Dropdown mobile */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+0.75rem)] rounded-2xl border border-white/10 bg-surface/95 p-3 shadow-[0_18px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:bg-white/5 hover:text-primary-container"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
