'use client';

/**
 * Botão genérico que aciona o modal de demonstração do FloatingButton
 * (montado no layout, presente em todas as páginas).
 * Mantém o RSC da página estático — só este botão é client.
 */
interface OpenDemoButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function OpenDemoButton({ children, className }: OpenDemoButtonProps) {
  function handleClick() {
    const btn = document.querySelector<HTMLButtonElement>(
      '[aria-label="Ver demonstração — abrir formulário de demonstração"]',
    );
    btn?.click();
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
