import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { siteConfig } from '../lib/site';
import VortexBackground from './VortexBackground';

export default function FinalCTA() {
  return (
    <section id="resources" className="relative py-20 md:py-[120px] px-6 overflow-hidden">
      {/* Vortex background */}
      <VortexBackground opacity={1} />

      {/* Radial gradient overlay for text contrast */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, var(--color-overlay-strong) 0%, var(--color-overlay-mid) 40%, transparent 75%)`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] leading-tight mb-6">
            Move faster<br />without drift
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto mb-10">
            Bring live coordination, shared program memory, and agentic execution into one system.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to={siteConfig.demoUrl}
              className="px-7 py-3.5 bg-[var(--color-accent-blue)] text-white text-sm font-semibold rounded-[6px] hover:brightness-110 hover:-translate-y-px transition-all"
            >
              Book a Demo
            </Link>
            <Link
              to={siteConfig.signinUrl}
              className="px-7 py-3.5 bg-[var(--color-elevated)] border border-[var(--color-hairline)] text-[var(--color-text-primary)] text-sm font-semibold rounded-[6px] hover:bg-[var(--color-card)] transition-all"
            >
              Sign In
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
