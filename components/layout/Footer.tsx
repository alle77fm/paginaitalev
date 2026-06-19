import Link from 'next/link';
import Image from 'next/image';
import { italev } from '@/lib/entities';

const legalLinks = [
  { href: '/termos-de-uso', label: 'Termos de uso' },
  { href: '/politica-de-privacidade', label: 'Privacidade' },
  { href: '/politica-de-cookies', label: 'Cookies' },
  { href: '/termos-e-condicoes', label: 'Termos e condições' },
];

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre-nos', label: 'Sobre nós' },
  { href: '/planos', label: 'Planos' },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-section-gap-mobile border-t border-white/5">
      <div className="max-w-container mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {/* Identidade */}
        <div>
          <Image
            src="/logo_it.png"
            alt={italev.brandName}
            width={916}
            height={272}
            className="mb-6 h-9 w-auto"
            sizes="150px"
          />
          <p className="text-on-secondary-container text-body-md mb-8">
            Transformando o comércio local com tecnologia, autonomia e suporte de verdade.
          </p>
          <div className="flex gap-3">
            <a
              href={italev.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-primary-container hover:border-primary-container transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={italev.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-primary-container hover:border-primary-container transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
              </svg>
            </a>
            <a
              href={`mailto:${italev.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-primary-container hover:border-primary-container transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navegação */}
        <div>
          <span className="text-label-caps font-bold text-on-surface mb-6 block uppercase tracking-widest">
            Navegação
          </span>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-on-secondary-container hover:text-primary-container transition-colors text-body-md"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <span className="text-label-caps font-bold text-on-surface mb-6 block uppercase tracking-widest">
            Legal
          </span>
          <ul className="space-y-4">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-on-secondary-container hover:text-primary-container transition-colors text-body-md"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <span className="text-label-caps font-bold text-on-surface mb-6 block uppercase tracking-widest">
            Contato
          </span>
          <ul className="space-y-4">
            <li className="text-on-secondary-container flex gap-2 items-center">
              <svg className="w-4 h-4 text-primary-container flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.27.36-.66.25-1.01-.37-1.12-.57-2.32-.57-3.57 0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
              </svg>
              {italev.phone}
            </li>
            <li className="text-on-secondary-container flex gap-2 items-center">
              <svg className="w-4 h-4 text-primary-container flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              <a href={`https://wa.me/${italev.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary-container transition-colors">
                Fale pelo WhatsApp
              </a>
            </li>
            <li className="text-on-secondary-container flex gap-2 items-center">
              <svg className="w-4 h-4 text-primary-container flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
              <a href={`mailto:${italev.email}`} className="hover:text-primary-container transition-colors break-all">
                {italev.email}
              </a>
            </li>
            <li className="text-on-secondary-container flex gap-2 items-center">
              <svg className="w-4 h-4 text-primary-container flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {italev.city} - {italev.state}
            </li>
          </ul>
        </div>
      </div>

      {/* Bloco institucional — reforço de entidade para busca/IA */}
      <div className="max-w-container mx-auto px-margin-mobile md:px-gutter mt-16 pt-8 border-t border-white/5">
        <p className="text-on-secondary-container text-body-md max-w-4xl">
          A Italev Sistemas é especialista em aplicativos para o comércio local
          brasileiro. Desenvolvemos soluções para supermercados, açougues, padarias,
          lanchonetes, cafeterias e pequenos negócios que desejam vender online,
          divulgar promoções e receber pedidos diretamente pelo WhatsApp.
        </p>
      </div>

      {/* Bottom bar */}
      <div className="max-w-container mx-auto px-margin-mobile md:px-gutter mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-on-secondary-container text-body-md">
          © {new Date().getFullYear()} {italev.brandName}. Todos os direitos reservados.
        </span>
        <div className="flex gap-6">
          <Link href="/politica-de-privacidade" className="text-on-secondary-container hover:text-primary-container transition-colors text-body-md">
            Privacidade
          </Link>
          <Link href="/termos-de-uso" className="text-on-secondary-container hover:text-primary-container transition-colors text-body-md">
            Termos
          </Link>
          <Link href="/contato" className="text-on-secondary-container hover:text-primary-container transition-colors text-body-md">
            Suporte
          </Link>
        </div>
      </div>
    </footer>
  );
}
