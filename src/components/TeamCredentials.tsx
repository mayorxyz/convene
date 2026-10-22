import { Reveal, Eyebrow } from './Reveal';

export default function TeamCredentials() {
  const logos = ['Apple', 'AWS', 'TikTok', 'Google', 'box', 'Microsoft', 'UC Berkeley'];
  return (
    <section className="py-20 md:py-[120px] px-6 border-t border-b border-[var(--color-hairline)]">
      <div className="max-w-[1200px] mx-auto text-center">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-8">
            BUILT BY TEAM FROM:
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-14 opacity-50">
            {logos.map((logo) => (
              <span key={logo} className="text-base md:text-lg font-semibold text-[var(--color-text-secondary)] tracking-wide">
                {logo}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
