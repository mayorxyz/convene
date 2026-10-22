export default function LogoRow({ logos, caption }: { logos: string[]; caption?: string }) {
  return (
    <div className="mt-12">
      {caption && (
        <div className="text-center font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-6">
          {caption}
        </div>
      )}
      <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12 opacity-60">
        {logos.map((logo) => (
          <span key={logo} className="text-sm md:text-base font-medium text-[var(--color-text-secondary)] tracking-wide">
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}
