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
    <header className="sticky top-0 z-40 border-b-2 border-black bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / nome */}
        <Link
          href="/"
          className="font-space-grotesk text-lg font-black tracking-tight text-gray-900 hover:text-[#FF5A00] transition-colors"
          aria-label={`${italev.brandName} — página inicial`}
        >
          {italev.brandName}
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navegação principal" className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#FF5A00] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <Link
          href="/planos"
          className="
            hidden md:inline-flex
            items-center rounded-lg border-2 border-black
            bg-[#FF5A00] px-4 py-2
            text-sm font-semibold text-white
            shadow-[3px_3px_0_#000]
            transition-all duration-150
            hover:shadow-[1px_1px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]
            active:shadow-none
          "
        >
          Ver planos
        </Link>

        {/* Menu mobile (acessível via botão) */}
        <Link
          href="/planos"
          className="
            inline-flex md:hidden
            items-center rounded-lg border-2 border-black
            bg-[#FF5A00] px-3 py-1.5
            text-xs font-semibold text-white
            shadow-[2px_2px_0_#000]
          "
        >
          Ver planos
        </Link>
      </div>
    </header>
  );
}
