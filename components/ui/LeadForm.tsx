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

const PLANOS = ['Start', 'Pro', 'Master', 'Ainda não sei'];

const INITIAL_FORM: FormData = {
  nome: '',
  comercio: '',
  cidade: '',
  whatsapp: '',
  segmento: '',
  plano: '',
};

const inputCls =
  'w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] transition-all focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00]';

const labelCls = 'block text-sm font-medium text-[#94A3B8] mb-1.5';

export default function LeadForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
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
    <div
      className="w-full max-w-md rounded-2xl border border-[#FF5A00]/20 p-8 shadow-[0_0_40px_rgba(79,124,255,0.08)]"
      style={{ background: 'rgba(7,11,20,0.7)', backdropFilter: 'blur(16px)' }}
    >
      <h2 className="font-sora text-2xl font-bold text-[#F8FAFC] mb-1.5">
        Quero uma demonstração
      </h2>
      <p className="text-[#94A3B8] text-sm mb-6">
        Deixe seus dados que um especialista entra em contato pelo WhatsApp.
      </p>

      {submitted ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 rounded-full bg-[#FF5A00]/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#FF5A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-[#F8FAFC] font-semibold">Recebemos seu contato!</p>
          <p className="text-[#94A3B8] text-sm mt-1">Redirecionando para WhatsApp...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="lf-nome" className={labelCls}>Nome</label>
            <input id="lf-nome" name="nome" type="text" required autoComplete="name"
              value={form.nome} onChange={handleChange} placeholder="Seu nome" className={inputCls} />
          </div>

          <div>
            <label htmlFor="lf-comercio" className={labelCls}>Nome do comércio</label>
            <input id="lf-comercio" name="comercio" type="text" required autoComplete="organization"
              value={form.comercio} onChange={handleChange} placeholder="Ex: Supermercado Silva" className={inputCls} />
          </div>

          <div>
            <label htmlFor="lf-cidade" className={labelCls}>Cidade</label>
            <input id="lf-cidade" name="cidade" type="text" required autoComplete="address-level2"
              value={form.cidade} onChange={handleChange} placeholder="Sua cidade" className={inputCls} />
          </div>

          <div>
            <label htmlFor="lf-whatsapp" className={labelCls}>WhatsApp</label>
            <input id="lf-whatsapp" name="whatsapp" type="tel" required autoComplete="tel"
              value={form.whatsapp} onChange={handleChange} placeholder="(00) 00000-0000" className={inputCls} />
          </div>

          <div>
            <label htmlFor="lf-segmento" className={labelCls}>Segmento</label>
            <select id="lf-segmento" name="segmento" required value={form.segmento}
              onChange={handleChange} className={inputCls}>
              <option value="">Selecione seu segmento</option>
              {SEGMENTOS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="lf-plano" className={labelCls}>Plano de interesse</label>
            <select id="lf-plano" name="plano" required value={form.plano}
              onChange={handleChange} className={inputCls}>
              <option value="">Selecione um plano</option>
              {PLANOS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#FF5A00] hover:bg-[#e04e00] py-3 font-semibold text-white text-sm shadow-[0_0_20px_rgba(255,90,0,0.35)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
          >
            Quero uma demonstração
          </button>
        </form>
      )}
    </div>
  );
}
