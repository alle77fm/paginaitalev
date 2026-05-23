import Link from 'next/link';
import { italev } from '@/lib/entities';

const legalLinks = [
  { href: '/termos-de-uso', label: 'Termos de uso' },
  { href: '/politica-de-privacidade', label: 'Privacidade' },
  { href: '/politica-de-cookies', label: 'Cookies' },
  { href: '/termos-e-condicoes', label: 'Termos e condições' },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-black bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Identidade */}
          <div className="space-y-1">
            <p className="font-space-grotesk text-lg font-black">{italev.brandName}</p>
            <p className="text-sm text-gray-400">Soluções digitais para comércios</p>
            <p className="text-sm text-gray-400">Seg–Sex · 9h às 18h</p>
            <a
              href={`mailto:${italev.email}`}
              className="text-sm text-gray-400 hover:text-[#FF5A00] transition-colors"
            >
              {italev.email}
            </a>
          </div>

          {/* Redes sociais */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Redes sociais
            </p>
            <div className="flex flex-col gap-1">
              <a
                href={italev.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-[#FF5A00] transition-colors"
              >
                Instagram @italevsistemas
              </a>
              <a
                href={italev.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-[#FF5A00] transition-colors"
              >
                TikTok @italevsistemas
              </a>
            </div>
          </div>

          {/* Links legais */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Legal
            </p>
            <ul className="flex flex-col gap-1">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#FF5A00] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {italev.brandName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
