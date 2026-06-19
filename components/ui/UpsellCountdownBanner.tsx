'use client';

import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'italev-upsell-countdown-deadline';
const COUNTDOWN_DURATION_MS = 72 * 60 * 60 * 1000;

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(deadline: number): TimeLeft {
  const remaining = Math.max(0, deadline - Date.now());

  return {
    hours: Math.floor(remaining / (60 * 60 * 1000)),
    minutes: Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000)),
    seconds: Math.floor((remaining % (60 * 1000)) / 1000),
  };
}

function formatUnit(value: number): string {
  return String(value).padStart(2, '0');
}

export default function UpsellCountdownBanner() {
  const [mounted, setMounted] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);

    const storedDeadline = window.localStorage.getItem(STORAGE_KEY);
    const parsedDeadline = storedDeadline ? Number(storedDeadline) : Number.NaN;
    const hasStoredDeadline = Number.isFinite(parsedDeadline);
    const deadline = hasStoredDeadline
      ? parsedDeadline
      : Date.now() + COUNTDOWN_DURATION_MS;

    if (!hasStoredDeadline) {
      window.localStorage.setItem(STORAGE_KEY, String(deadline));
    }

    const updateCountdown = () => {
      setTimeLeft(getTimeLeft(deadline));
      const expired = deadline <= Date.now();
      setIsExpired(expired);

      if (expired) {
        window.clearInterval(interval);
      }
    };

    const interval = window.setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => window.clearInterval(interval);
  }, []);

  const units = useMemo(
    () => [
      { label: 'HORAS', value: mounted ? formatUnit(timeLeft.hours) : '--' },
      { label: 'MIN', value: mounted ? formatUnit(timeLeft.minutes) : '--' },
      { label: 'SEG', value: mounted ? formatUnit(timeLeft.seconds) : '--' },
    ],
    [mounted, timeLeft],
  );

  return (
    <aside className="relative z-10 pt-20 md:pt-[88px]" aria-label="Condição especial para novos comércios">
      <div className="bg-[#063d2f] px-margin-mobile py-1 text-center text-xs font-semibold leading-snug text-emerald-50 sm:py-1.5 sm:text-[13px]">
        <span className="sm:hidden">✅ Demonstração gratuita para comércios locais 👇</span>
        <span className="hidden sm:inline">
          ✅ Demonstração gratuita disponível para comércios locais — veja como vender online sem comissão por pedido 👇
        </span>
      </div>

      <div className="border-y border-red-500/20 bg-[linear-gradient(135deg,#180303_0%,#3a0706_38%,#6f120c_72%,#b32614_115%)] px-margin-mobile py-3 shadow-[0_14px_40px_rgba(179,38,20,0.14)] md:py-4">
        <div className="mx-auto flex max-w-container flex-col items-center gap-2.5 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-primary-container md:text-[11px]">
            ⚠️ CONDIÇÃO ESPECIAL PARA NOVOS COMÉRCIOS EXPIRA EM:
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-3" aria-live="polite">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="min-w-[68px] rounded-lg border border-orange-500/35 bg-[linear-gradient(180deg,#9a1a10_0%,#5b0b08_100%)] px-2.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_24px_rgba(0,0,0,0.22)] sm:min-w-[86px] sm:px-4"
              >
                <span className="block font-sora text-2xl font-black leading-none text-white sm:text-3xl">
                  {unit.value}
                </span>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.16em] text-on-secondary-container">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <p className="max-w-xl text-xs font-semibold leading-relaxed text-on-surface-variant md:text-sm">
            {mounted && isExpired
              ? 'Prazo encerrado — fale conosco para verificar disponibilidade de implantação.'
              : '⚡ Solicite sua demonstração enquanto a agenda de implantação está aberta.'}
          </p>
        </div>
      </div>
    </aside>
  );
}
