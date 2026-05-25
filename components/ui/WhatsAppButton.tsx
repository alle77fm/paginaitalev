'use client';

import { italev } from '@/lib/entities';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${italev.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com um especialista via WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        rounded-full border-2 border-[#4F7CFF]
        bg-[#070B14]/90 backdrop-blur-md
        px-5 py-3 text-sm font-semibold text-[#F8FAFC]
        shadow-lg shadow-[#6C8CFF]/20
        transition-all duration-200
        hover:shadow-[0_0_20px_rgba(108,140,255,0.4)]
        hover:border-[#6C8CFF]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]
      "
    >
      {/* Ícone WhatsApp */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 shrink-0"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      </svg>
      <span>Fale conosco</span>
    </a>
  );
}

