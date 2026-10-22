import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal, Eyebrow } from './Reveal';
import { siteConfig } from '../lib/site';
import { LogoMark } from './Nav';

export default function CoordinationLayer() {
  return (
    <section className="py-16 md:py-[120px] px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Eyebrow & Main Title */}
        <Reveal>
          <Eyebrow>THE COORDINATION LAYER</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] leading-tight mb-8 sm:mb-10 max-w-3xl">
            A shared operating system for human-agent organizations
          </h2>
        </Reveal>

        {/* Descriptive Paragraphs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 mb-10 sm:mb-12">
          <Reveal delay={0.15}>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
              Every team is becoming a team of humans and agents. Convene acts as the shared control plane that keeps both aligned.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
              Instead of reconstructing context from scattered tools, Convene continuously maintains a live picture of organizational reality.
            </p>
          </Reveal>
        </div>

        {/* Lower Grid: Text CTA & Interactive Radar Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & CTA */}
          <Reveal delay={0.25}>
            <div>
              <div className="text-[clamp(36px,7vw,72px)] font-bold text-stroke leading-none mb-4 select-none">
                DEPT. OF<br />COORDINATION
              </div>
              <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-6">
                CALIBRATED FOR HIGH-VELOCITY WORK ENVIRONMENT
              </p>
              <Link
                to={siteConfig.demoUrl}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[var(--color-accent-blue)] text-white text-sm font-semibold rounded-[6px] hover:brightness-110 hover:-translate-y-px transition-all w-full sm:w-auto text-center"
              >
                Book a Demo
              </Link>
            </div>
          </Reveal>

          {/* Right Column: Animated Radar Widget */}
          <Reveal delay={0.3}>
            <div className="relative flex items-center justify-center p-6 sm:p-8 rounded-[12px] bg-[var(--color-elevated)] border border-[var(--color-hairline)] min-h-[320px] sm:min-h-[350px] overflow-hidden">
              {/* Rotating ring 1 */}
              <motion.div
                className="absolute w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full border border-[var(--color-hairline)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              {/* Rotating ring 2 */}
              <motion.div
                className="absolute w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full border border-[var(--color-hairline)]"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              />

              {/* Quadrant Labels */}
              <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-20">
                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-[var(--color-text-secondary)] whitespace-nowrap">
                  FOR LEADERSHIP
                </span>
              </div>
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20">
                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-[var(--color-text-secondary)] whitespace-nowrap">
                  FOR ENGINEERS
                </span>
              </div>
              <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20">
                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-[var(--color-text-secondary)]">
                  OPERATORS
                </span>
              </div>
              <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20">
                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-[var(--color-text-secondary)]">
                  MANAGERS
                </span>
              </div>

              {/* Animated scanning scope */}
              <motion.div
                className="absolute inset-0 pointer-events-none flex items-center justify-center"
                animate={{
                  x: [0, -40, 0, 40, 0, 40, 0, -40, 0],
                  y: [0, 0, -30, 0, 30, 0, -30, 0, 0],
                }}
                transition={{
                  duration: 18,
                  times: [0, 0.12, 0.24, 0.36, 0.48, 0.6, 0.72, 0.84, 1],
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Vertical scan line that travels with the scope */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[150px] sm:h-[180px] bg-[var(--color-accent-blue)] opacity-40" />
                <svg className="w-full h-full max-w-[280px] sm:max-w-[300px] aspect-square" viewBox="0 0 300 300" aria-hidden="true">
                  <line x1="150" y1="30" x2="150" y2="110" stroke="var(--color-crosshair)" strokeWidth="0.5" />
                  <line x1="150" y1="190" x2="150" y2="270" stroke="var(--color-crosshair)" strokeWidth="0.5" />
                  <line x1="30" y1="150" x2="110" y2="150" stroke="var(--color-crosshair)" strokeWidth="0.5" />
                  <line x1="190" y1="150" x2="270" y2="150" stroke="var(--color-crosshair)" strokeWidth="0.5" />
                  <circle cx="150" cy="30" r="3" fill="var(--color-stroke)" />
                  <circle cx="150" cy="270" r="3" fill="var(--color-stroke)" />
                  <circle cx="30" cy="150" r="3" fill="var(--color-stroke)" />
                  <circle cx="270" cy="150" r="3" fill="var(--color-stroke)" />

                  {/* Reticle that locks onto each quadrant */}
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="10"
                    fill="none"
                    stroke="var(--color-accent-blue)"
                    strokeWidth="0.8"
                    animate={{ r: [9, 14, 9], opacity: [0.55, 0.15, 0.55] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <circle cx="150" cy="150" r="1.5" fill="var(--color-accent-blue)" />
                </svg>

                {/* Logo stays at the center of the moving scope */}
                <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                  <LogoMark size={40} className="sm:w-[48px] sm:h-[48px]" />
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}