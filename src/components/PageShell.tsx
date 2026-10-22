import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Reveal, Eyebrow } from './shared';
import Nav from './Nav';
import Footer from './Footer';
import { siteConfig } from '../lib/site';

// Page Hero
export function PageHero({ eyebrow, title, paragraph, outlinedWord, background }: {
  eyebrow: string;
  title: string;
  paragraph: string;
  outlinedWord?: string;
  background?: ReactNode;
}) {
  return (
    <div className="relative py-20 md:py-32 px-6 overflow-hidden">
      {background}
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="flex-1">
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-[clamp(48px,6vw,96px)] font-bold tracking-[-0.03em] text-[var(--color-text-primary)] leading-tight mb-6">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-[640px] leading-relaxed mb-8">{paragraph}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex items-center gap-4 flex-wrap">
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
          {outlinedWord && (
            <div className="hidden lg:block shrink-0">
              <Reveal delay={0.2}>
                <span className="text-[clamp(80px,12vw,200px)] font-bold text-stroke-blue leading-none select-none opacity-40">
                  {outlinedWord}
                </span>
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// CTA Section (identical to home Section 9)
export function CTASection() {
  return (
    <section className="relative py-20 md:py-[120px] px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-accent-blue)]/5 to-transparent" />
      </div>
      <div className="relative max-w-[1200px] mx-auto text-center">
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

// Page Shell wrapper
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-base)] text-[var(--color-text-primary)] relative">
      <div className="fixed top-0 left-6 w-[1px] h-full bg-[var(--color-guide-line)] pointer-events-none z-0 hidden lg:block" />
      <div className="fixed top-0 right-6 w-[1px] h-full bg-[var(--color-guide-line)] pointer-events-none z-0 hidden lg:block" />
      <Nav />
      <main className="relative z-10">
        {children}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
