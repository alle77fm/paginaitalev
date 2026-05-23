'use client';

import { useState } from 'react';
import type { FaqItem } from '@/content/faq/institucional';

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [aberto, setAberto] = useState<string | null>(null);

  return (
    <dl className="space-y-3">
      {items.map((item) => {
        const isOpen = aberto === item.id;
        return (
          <div
            key={item.id}
            className="rounded-xl border-2 border-black bg-white shadow-[3px_3px_0_#000] overflow-hidden"
          >
            <dt>
              <button
                type="button"
                onClick={() => setAberto(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-${item.id}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-space-grotesk text-sm font-bold text-gray-900 leading-snug">
                  {item.pergunta}
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-[#FF5A00] transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                </span>
              </button>
            </dt>
            {/* Texto sempre no DOM — visibilidade via CSS, não remoção */}
            <dd
              id={`faq-${item.id}`}
              className={`px-5 text-sm text-gray-600 leading-relaxed transition-all duration-200 ${
                isOpen ? 'pb-5 max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              {item.resposta}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
