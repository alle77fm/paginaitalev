interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: 'div' | 'article' | 'li';
}

export default function Card({ children, className = '', hover = true, as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={`rounded-2xl border border-white/[0.08] backdrop-blur-md p-7 transition-all duration-300 ${
        hover
          ? 'hover:border-[#4F7CFF]/40 hover:shadow-[0_8px_32px_rgba(79,124,255,0.12)]'
          : ''
      } ${className}`}
      style={{ background: 'rgba(255,255,255,0.03)' }}
    >
      {children}
    </Tag>
  );
}
