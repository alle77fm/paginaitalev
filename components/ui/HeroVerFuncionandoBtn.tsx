'use client';

/**
 * Botão "Ver funcionando" do hero.
 * Client Component isolado para acionar o FloatingButton sem poluir o RSC da home.
 */
export default function HeroVerFuncionandoBtn() {
  function handleClick() {
    const btn = document.querySelector<HTMLButtonElement>(
      '[aria-label="Ver demonstração — abrir formulário de demonstração"]',
    );
    btn?.click();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center rounded-lg border-2 border-black bg-white px-6 py-3 font-bold text-gray-900 shadow-[4px_4px_0_#000] transition-all duration-150 hover:shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none"
    >
      Ver funcionando
    </button>
  );
}
