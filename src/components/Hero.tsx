import { Link } from 'react-router-dom';
import { LogoMark } from './Nav';
import DashboardMock from './DashboardMock';
import LogoRow from './LogoRow';
import { Reveal } from './shared';
import { siteConfig } from '../lib/site';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top Center Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] lg:w-[900px] h-[350px] sm:h-[500px] bg-gradient-to-b from-[var(--color-accent-blue)] to-transparent opacity-[0.12] blur-[90px] sm:blur-[140px] rounded-full" />
        
        {/* Secondary subtle side accent */}
        <div className="absolute top-1/3 left-1/2 -translate-x-[120%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[var(--color-accent-blue)] opacity-[0.05] blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Optional Announcement Pill */}
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 sm:mb-8 text-xs sm:text-sm font-medium rounded-full bg-[var(--color-elevated)] border border-[var(--color-hairline)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-blue)]/40 transition-colors shadow-sm cursor-pointer">
            <span className="flex h-2 w-2 rounded-full bg-[var(--color-accent-blue)] animate-pulse" />
            <span className="text-[var(--color-text-primary)] font-semibold">New Feature</span>
            <span className="text-[var(--color-text-secondary)] hidden xs:inline">• Explore our updated dashboard</span>
            <svg className="w-3.5 h-3.5 text-[var(--color-text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Reveal>

        {/* Brand & Main Headline */}
        <Reveal delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-6">
            <div className="p-2 sm:p-2.5 rounded-2xl bg-[var(--color-elevated)] border border-[var(--color-hairline)] shadow-sm shrink-0">
              <LogoMark size={52} className="hidden sm:block" />
            </div>

            <h1 className="text-[clamp(2.25rem,6.5vw,5rem)] font-extrabold tracking-tight text-[var(--color-text-primary)] leading-[1.08] max-w-4xl">
              {siteConfig.heroWordmark}
            </h1>
          </div>
        </Reveal>

        {/* Tagline / Value Proposition */}
        <Reveal delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
            {siteConfig.tagline}
          </p>
        </Reveal>

        {/* Action CTAs */}
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto mb-12 sm:mb-16">
            <Link
              to={siteConfig.demoUrl}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--color-accent-blue)] text-white text-sm font-semibold rounded-xl shadow-lg shadow-[var(--color-accent-blue)]/20 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Book a Demo</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              to={siteConfig.signinUrl}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-elevated)] border border-[var(--color-hairline)] text-[var(--color-text-primary)] text-sm font-semibold rounded-xl hover:bg-[var(--color-card)] hover:border-[var(--color-text-secondary)]/30 active:scale-[0.99] transition-all duration-200 shadow-sm"
            >
              Sign In
            </Link>
          </div>
        </Reveal>

        {/* Social Proof Bar */}
        <Reveal delay={0.4}>
          <div className="pt-4 pb-8 sm:pb-12 border-y border-[var(--color-hairline)]/60 mb-12 sm:mb-16">
            <LogoRow
              caption="PROUDLY SERVING INDUSTRY LEADER:"
              logos={['dialpad', 'PLASIV', 'qpob', 'KDVO+', 'verso']}
            />
          </div>
        </Reveal>

        {/* Dashboard Mockup Container with Glass Frame */}
        <Reveal delay={0.5}>
          <div className="relative group mx-auto w-full max-w-[1000px]">
            {/* Soft backdrop glow around preview */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent-blue)]/20 to-purple-600/20 rounded-2xl sm:rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />

            {/* Dashboard Mock Container */}
            <div className="relative rounded-xl sm:rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-elevated)]/80 backdrop-blur-md shadow-2xl overflow-hidden">
              {/* Window Header Dots */}
              <div className="px-3 py-2 sm:px-4 sm:py-3 bg-[var(--color-card)]/50 border-b border-[var(--color-hairline)] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[11px] font-mono text-[var(--color-text-secondary)] opacity-60">
                  app.{siteConfig.heroWordmark?.toLowerCase().replace(/\s+/g, '') || 'dashboard'}.com
                </div>
                <div className="w-12" /> {/* Spacer for centering */}
              </div>

              {/* Dashboard Content */}
              <div className="p-1.5 sm:p-3 lg:p-4 overflow-x-auto">
                <DashboardMock />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}