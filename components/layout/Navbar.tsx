'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { italev } from '@/lib/entities';

const navLinks = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre-nos', label: 'Sobre' },
  { href: '/planos', label: 'Planos' },
  { href: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4"
        aria-label="Navegação principal"
      >
        <div
          className={`w-full max-w-[1180px] flex items-center justify-between px-6 py-4 rounded-[18px] border border-white/10 transition-all duration-300 ${
            scrolled
              ? 'bg-white/10 backdrop-blur-2xl shadow-[0_4px_32px_rgba(79,124,255,0.18)]'
              : 'bg-white/5 backdrop-blur-xl shadow-[0_4px_24px_rgba(79,124,255,0.10)]'
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-sora text-[#F8FAFC] font-bold text-lg tracking-tight hover:text-[#4F7CFF] transition-colors"
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
                className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`https://wa.me/${italev.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale conosco pelo WhatsApp"
              className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.057 23.25a.75.75 0 0 0 .916.916l5.398-1.475A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.723 9.723 0 0 1-4.964-1.362l-.356-.212-3.695 1.009 1.01-3.695-.212-.356A9.723 9.723 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
            </a>
            <Link
              href="/planos"
              className="bg-[#4F7CFF] hover:bg-[#6C8CFF] text-white px-5 py-2 rounded-[10px] text-sm font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(79,124,255,0.3)]"
            >
              Ver Planos
            </Link>
          </div>

          {/* Hamburger mobile */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#94A3B8] hover:text-[#F8FAFC] transition-colors p-1"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: 'rgba(7, 11, 20, 0.97)', backdropFilter: 'blur(20px)' }}
        >
          <Link
            href="/"
            className="font-sora text-2xl font-bold text-[#F8FAFC] mb-4"
            onClick={() => setMobileOpen(false)}
          >
            {italev.brandName}
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xl text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/planos"
            className="mt-4 bg-[#4F7CFF] hover:bg-[#6C8CFF] text-white px-8 py-3 rounded-[10px] text-base font-semibold transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Ver Planos
          </Link>
          <a
            href={`https://wa.me/${italev.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
