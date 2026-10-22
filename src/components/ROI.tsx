import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { siteConfig } from '../lib/site';

function useCountUp(target: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

function StatBlock({ value, suffix, label }: { value: string; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center px-4 sm:px-6 py-4">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] font-mono">
        {value}{suffix && <span className="text-[var(--color-accent-blue)]">{suffix}</span>}
      </div>
      <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mt-2 max-w-[200px] mx-auto">{label}</div>
    </div>
  );
}

export default function ROI() {
  // Deterministic bar heights to preserve exact design while avoiding SSR hydration mismatch bugs
  const barHeights = [12, 16, 10, 20, 14, 18, 12, 22, 15, 19, 11, 16, 21, 13, 17, 10, 18, 14, 20, 12];

  return (
    <section className="py-16 md:py-[120px] px-4 sm:px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] leading-tight mb-8 sm:mb-12">
            Pays for itself<br />on day one
          </h2>
        </Reveal>

        {/* Stats strip */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-[var(--color-hairline)] rounded-[12px] overflow-hidden mb-12 sm:mb-16">
            <div className="border-b md:border-b-0 md:border-r border-[var(--color-hairline)]">
              <StatBlock value="8-FIGURE" label="PROGRAM MOTIVATIONS, OUT OF THE BOX" />
            </div>
            <div className="border-b md:border-b-0 md:border-r border-[var(--color-hairline)]">
              <StatBlock value="12+" suffix="hrs" label="COORDINATION AND REPORTING TIME RETURNED BETWEEN MANAGERS" />
            </div>
            <div>
              <StatBlock value="DAY 1" label="NO SETUP, WORKS ON EXISTING TOOLS" />
            </div>
          </div>
        </Reveal>

        {/* Visual composition */}
        <Reveal delay={0.2}>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-12 min-h-[auto] md:min-h-[300px]">
            {/* DO text */}
            <div className="relative text-center md:text-left">
              <div className="text-[clamp(70px,12vw,140px)] font-bold text-stroke leading-none select-none">DO</div>
              <div className="mt-2 flex flex-col items-center md:items-start">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-text-muted)]">START</span>
                <div className="flex gap-0.5 mt-1 justify-center md:justify-start">
                  {barHeights.map((h, i) => (
                    <div key={i} className="w-[2px] bg-[var(--color-surface-strong)]" style={{ height: `${h}px` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* 100% block */}
            <div className="relative">
              <div className="bg-[var(--color-accent-blue)] rounded-[12px] p-6 sm:p-8 md:p-12 text-center overflow-hidden">
                <div className="block md:absolute md:top-3 md:right-4 mb-3 md:mb-0 max-w-[150px] md:max-w-[150px]">
                  <p className="font-mono text-[8px] uppercase tracking-wider leading-[1.2] text-[var(--color-text-primary)]/60">
                    NO CODE, NO SETUP<br />WORKS ON EXISTING TOOLS
                  </p>
                </div>
                <div className="inline-flex items-baseline justify-center gap-0 text-4xl sm:text-5xl md:text-7xl font-bold text-[var(--color-text-primary)] leading-none">
                  <span>100</span>
                  <span className="text-[0.7em] leading-none">%</span>
                </div>
              </div>
            </div>

            {/* D1 text */}
            <div className="relative text-center md:text-right">
              <div className="text-[clamp(70px,12vw,140px)] font-bold text-stroke-blue leading-none select-none">D1</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            to={siteConfig.earlyAccessUrl}
            className="block w-full max-w-[600px] mx-auto px-7 py-4 bg-[var(--color-accent-blue)] text-white text-base font-semibold rounded-[6px] text-center hover:brightness-110 hover:-translate-y-px transition-all"
          >
            Get Early Access
          </Link>
        </Reveal>
      </div>
    </section>
  );
}