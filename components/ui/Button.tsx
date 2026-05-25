import Link from 'next/link';

type Variant = 'primary' | 'outline' | 'whatsapp';

interface ButtonProps {
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-[#4F7CFF] hover:bg-[#6C8CFF] text-white shadow-[0_0_20px_rgba(79,124,255,0.3)] hover:shadow-[0_0_28px_rgba(79,124,255,0.5)]',
  outline:
    'bg-transparent border border-white/20 text-[#F8FAFC] hover:border-[#4F7CFF] hover:bg-[rgba(79,124,255,0.08)]',
  whatsapp:
    'bg-[#25D366] hover:bg-[#1fb855] text-white shadow-[0_0_20px_rgba(37,211,102,0.3)]',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 font-semibold text-sm transition-all duration-200';

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  type = 'button',
  ariaLabel,
  ...rest
}: ButtonProps) {
  const cls = `${base} ${variantStyles[variant]} ${className}`;

  if (href && (href.startsWith('http') || href.startsWith('https'))) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel} {...rest}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
