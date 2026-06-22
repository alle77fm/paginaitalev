interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-16 text-center overflow-hidden">
      {/* Glow escuro/laranja difuso */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,90,0,0.08) 0%, rgba(7,8,10,0) 70%)',
        }}
      />
      <div className="relative z-10 max-w-[760px] mx-auto px-6">
        {badge && (
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-[#FF5A00]/30 bg-[#FF5A00]/10 text-[#FF5A00] text-sm font-semibold">
            {badge}
          </span>
        )}
        <h1 className="font-sora text-4xl md:text-6xl font-bold text-[#F8FAFC] mb-6 text-balance leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
