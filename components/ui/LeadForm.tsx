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
  'Açougue',
  'Conveniência',
  'Restaurante',
  'Loja',
  'Outro',
];

const PLANOS = [
  'Start',
  'Pro',
  'Scale',
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

export default function LeadForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

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

    setSubmitted(true);
    setTimeout(() => {
      setForm(INITIAL_FORM);
      setSubmitted(false);
    }, 2000);
  }

  return (
    <div className="w-full max-w-md rounded-2xl border border-[#4F7CFF]/30 bg-[#070B14]/40 backdrop-blur-md p-8 shadow-lg shadow-[#6C8CFF]/10">
      <h2 className="font-space-grotesk text-2xl font-bold text-[#F8FAFC] mb-2">
        Quero uma demonstração
      </h2>
      <p className="text-[#94A3B8] text-sm mb-6">
        Deixe seus dados que um especialista entra em contato pelo WhatsApp.
      </p>

      {submitted ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-[#F8FAFC] font-semibold">Recebemos seu contato!</p>
          <p className="text-[#94A3B8] text-sm mt-1">Redirecionando para WhatsApp...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nome */}
          <div>
            <label htmlFor="lf-nome" className="block text-sm font-medium text-[#F8FAFC] mb-2">
              Nome
            </label>
            <input
              id="lf-nome"
              name="nome"
              type="text"
              required
              value={form.nome}
              onChange={handleChange}
              placeholder="Seu nome"
              className="w-full rounded-lg border border-[#4F7CFF]/20 bg-[#070B14]/50 px-4 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] transition-all focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF]"
            />
          </div>

          {/* Nome do comércio */}
          <div>
            <label htmlFor="lf-comercio" className="block text-sm font-medium text-[#F8FAFC] mb-2">
              Nome do comércio
            </label>
            <input
              id="lf-comercio"
              name="comercio"
              type="text"
              required
              value={form.comercio}
              onChange={handleChange}
              placeholder="Ex: Supermercado Silva"
              className="w-full rounded-lg border border-[#4F7CFF]/20 bg-[#070B14]/50 px-4 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] transition-all focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF]"
            />
          </div>

          {/* Cidade */}
          <div>
            <label htmlFor="lf-cidade" className="block text-sm font-medium text-[#F8FAFC] mb-2">
              Cidade
            </label>
            <input
              id="lf-cidade"
              name="cidade"
              type="text"
              required
              value={form.cidade}
              onChange={handleChange}
              placeholder="Sua cidade"
              className="w-full rounded-lg border border-[#4F7CFF]/20 bg-[#070B14]/50 px-4 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] transition-all focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF]"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label htmlFor="lf-whatsapp" className="block text-sm font-medium text-[#F8FAFC] mb-2">
              WhatsApp
            </label>
            <input
              id="lf-whatsapp"
              name="whatsapp"
              type="tel"
              required
              value={form.whatsapp}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className="w-full rounded-lg border border-[#4F7CFF]/20 bg-[#070B14]/50 px-4 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] transition-all focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF]"
            />
          </div>

          {/* Segmento */}
          <div>
            <label htmlFor="lf-segmento" className="block text-sm font-medium text-[#F8FAFC] mb-2">
              Segmento
            </label>
            <select
              id="lf-segmento"
              name="segmento"
              required
              value={form.segmento}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#4F7CFF]/20 bg-[#070B14]/50 px-4 py-2.5 text-sm text-[#F8FAFC] transition-all focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF]"
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
            <label htmlFor="lf-plano" className="block text-sm font-medium text-[#F8FAFC] mb-2">
              Plano de interesse
            </label>
            <select
              id="lf-plano"
              name="plano"
              required
              value={form.plano}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#4F7CFF]/20 bg-[#070B14]/50 px-4 py-2.5 text-sm text-[#F8FAFC] transition-all focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF]"
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
              w-full rounded-lg border border-[#4F7CFF]
              bg-[#4F7CFF] py-2.5 px-4
              font-semibold text-white text-sm
              shadow-lg shadow-[#4F7CFF]/30
              transition-all duration-200
              hover:shadow-[0_0_20px_rgba(79,124,255,0.5)]
              hover:border-[#6C8CFF]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]
            "
          >
            Quero uma demonstração
          </button>
        </form>
      )}
    </div>
  );
}

