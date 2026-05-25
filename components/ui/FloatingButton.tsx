'use client';

import { useState } from 'react';
import { italev } from '@/lib/entities';

interface FormData {
  nome: string;
  comercio: string;
  cidade: string;
  whatsapp: string;
  segmento: string;
  plano: string;
}

const SEGMENTOS = [
  'Supermercado',
  'Restaurante / Lanchonete',
  'Açougue',
  'Padaria',
  'Farmácia',
  'Pet shop',
  'Outro',
];

const PLANOS = [
  'Start — R$149/mês',
  'Pro — R$219/mês',
  'Scale — R$379/mês',
  'Ainda não sei',
];

const INITIAL_FORM: FormData = {
  nome: '',
  comercio: '',
  cidade: '',
  whatsapp: '',
  segmento: '',
  plano: '',
};

export default function FloatingButton() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const msg = [
      'Olá, quero uma demonstração da Italev',
      `Nome: ${form.nome}`,
      `Comércio: ${form.comercio}`,
      `Cidade: ${form.cidade}`,
      `WhatsApp: ${form.whatsapp}`,
      `Segmento: ${form.segmento}`,
      `Plano de interesse: ${form.plano}`,
    ].join('\n');

    window.open(
      `https://wa.me/${italev.whatsapp}?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer',
    );

    setOpen(false);
    setForm(INITIAL_FORM);
  }

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) setOpen(false);
  }

  return (
    <>
      {/* ── Botão flutuante ── */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ver demonstração — abrir formulário de demonstração"
        className="
          fixed bottom-6 right-6 z-50
          flex items-center gap-2
          rounded-full border-2 border-black
          bg-[#FF5A00] px-5 py-3
          text-sm font-semibold text-white
          shadow-[3px_3px_0_#000]
          transition-all duration-150
          hover:shadow-[1px_1px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]
          active:shadow-none active:translate-x-[3px] active:translate-y-[3px]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2
        "
      >
        {/* Ícone WhatsApp simples */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4 shrink-0"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.057 23.25a.75.75 0 0 0 .916.916l5.398-1.475A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.723 9.723 0 0 1-4.964-1.362l-.356-.212-3.695 1.009 1.01-3.695-.212-.356A9.723 9.723 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
        </svg>
        <span>Ver demonstração</span>
      </button>

      {/* ── Modal ── */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
          onClick={handleBackdropClick}
        >
          <div className="w-full max-w-md rounded-2xl border-2 border-black bg-white shadow-[6px_6px_0_#000]">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-black px-6 py-4">
              <h2
                id="modal-title"
                className="font-space-grotesk text-lg font-bold leading-tight"
              >
                Quero ver funcionando
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 px-6 py-5">
              {/* Nome */}
              <div>
                <label htmlFor="fb-nome" className="mb-1 block text-sm font-medium text-gray-800">
                  Nome
                </label>
                <input
                  id="fb-nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full rounded-lg border-2 border-black px-3 py-2 text-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:ring-offset-1"
                />
              </div>

              {/* Comércio */}
              <div>
                <label htmlFor="fb-comercio" className="mb-1 block text-sm font-medium text-gray-800">
                  Nome do comércio
                </label>
                <input
                  id="fb-comercio"
                  name="comercio"
                  type="text"
                  required
                  autoComplete="organization"
                  value={form.comercio}
                  onChange={handleChange}
                  placeholder="Ex: Supermercado Silva"
                  className="w-full rounded-lg border-2 border-black px-3 py-2 text-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:ring-offset-1"
                />
              </div>

              {/* Cidade */}
              <div>
                <label htmlFor="fb-cidade" className="mb-1 block text-sm font-medium text-gray-800">
                  Cidade
                </label>
                <input
                  id="fb-cidade"
                  name="cidade"
                  type="text"
                  required
                  autoComplete="address-level2"
                  value={form.cidade}
                  onChange={handleChange}
                  placeholder="Sua cidade"
                  className="w-full rounded-lg border-2 border-black px-3 py-2 text-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:ring-offset-1"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="fb-whatsapp" className="mb-1 block text-sm font-medium text-gray-800">
                  WhatsApp
                </label>
                <input
                  id="fb-whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-lg border-2 border-black px-3 py-2 text-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:ring-offset-1"
                />
              </div>

              {/* Segmento */}
              <div>
                <label htmlFor="fb-segmento" className="mb-1 block text-sm font-medium text-gray-800">
                  Segmento
                </label>
                <select
                  id="fb-segmento"
                  name="segmento"
                  required
                  value={form.segmento}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-black px-3 py-2 text-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:ring-offset-1"
                >
                  <option value="">Selecione seu segmento</option>
                  {SEGMENTOS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Plano */}
              <div>
                <label htmlFor="fb-plano" className="mb-1 block text-sm font-medium text-gray-800">
                  Plano de interesse
                </label>
                <select
                  id="fb-plano"
                  name="plano"
                  required
                  value={form.plano}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-black px-3 py-2 text-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:ring-offset-1"
                >
                  <option value="">Selecione um plano</option>
                  {PLANOS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  mt-2 w-full rounded-lg border-2 border-black
                  bg-[#FF5A00] py-3
                  font-semibold text-white
                  shadow-[3px_3px_0_#000]
                  transition-all duration-150
                  hover:shadow-[1px_1px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]
                  active:shadow-none active:translate-x-[3px] active:translate-y-[3px]
                "
              >
                Receber atendimento via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
