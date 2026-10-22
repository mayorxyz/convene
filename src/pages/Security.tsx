import { Link } from 'react-router-dom';
import PageShell, { PageHero } from '../components/PageShell';
import { Reveal, Eyebrow } from '../components/shared';
import { securityControls } from '../lib/content';
import { Shield, Lock, Key, Users, FileText, Clock, Eye, Server, CheckCircle } from 'lucide-react';

const icons = [Lock, Key, Users, Shield, FileText, Clock, Eye, Server, CheckCircle];

export default function Security() {
  return (
    <PageShell>
      <PageHero
        eyebrow="SECURITY"
        title="Built for teams that cannot afford leaks"
        paragraph="Enterprise-grade security from day one. SOC 2 certified, encrypted end-to-end, and designed for teams in regulated industries."
        outlinedWord="SEC"
      />

      {/* SOC 2 badge */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-[var(--color-accent-green)] mb-4">
              <div className="text-center">
                <Shield size={24} className="text-[var(--color-accent-green)] mx-auto" />
                <div className="font-mono text-[8px] text-[var(--color-accent-green)] mt-1">SOC 2</div>
              </div>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)]">SOC 2 Type 2 certified. Annual third-party audit.</p>
          </Reveal>
        </div>
      </section>

      {/* Controls grid */}
      <section className="py-20 md:py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>CONTROLS</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">Security controls</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {securityControls.map((control, i) => {
                const Icon = icons[i] || Shield;
                return (
                  <div key={control.title} className="crosshair-card p-5 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)]">
                    <Icon size={20} className="text-[var(--color-accent-blue)] mb-3" />
                    <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">{control.title}</h3>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{control.description}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Data flow diagram */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>DATA FLOW</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">How data moves</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="p-4 sm:p-8 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)] overflow-hidden">
              <div className="overflow-x-auto">
                <svg viewBox="0 0 800 200" className="w-full h-auto min-w-[640px]">
                  {/* Tools */}
                  <rect x="20" y="60" width="140" height="80" rx="8" fill="var(--color-surface-subtle)" stroke="var(--color-hairline)" strokeWidth="1.5" />
                  <text x="90" y="107" fill="var(--color-text-primary)" fontSize="17" textAnchor="middle" fontFamily="Inter">Your Tools</text>

                  {/* Arrow */}
                  <line x1="170" y1="100" x2="260" y2="100" stroke="var(--color-accent-blue)" strokeWidth="1.5" strokeDasharray="4" />
                  <polygon points="258,96 268,100 258,104" fill="var(--color-accent-blue)" />

                  {/* Ingestion */}
                  <rect x="270" y="60" width="140" height="80" rx="8" fill="var(--color-accent-blue)" fillOpacity="0.05" stroke="var(--color-accent-blue)" strokeWidth="1.5" />
                  <text x="340" y="94" fill="var(--color-accent-blue)" fontSize="14" textAnchor="middle" fontFamily="JetBrains Mono">CONVENE</text>
                  <text x="340" y="118" fill="var(--color-text-primary)" fontSize="15" textAnchor="middle" fontFamily="Inter">Ingestion</text>

                  {/* Arrow */}
                  <line x1="420" y1="100" x2="510" y2="100" stroke="var(--color-accent-blue)" strokeWidth="1.5" strokeDasharray="4" />
                  <polygon points="508,96 518,100 508,104" fill="var(--color-accent-blue)" />

                  {/* Memory */}
                  <rect x="520" y="60" width="140" height="80" rx="8" fill="var(--color-accent-green)" fillOpacity="0.05" stroke="var(--color-accent-green)" strokeWidth="1.5" />
                  <text x="590" y="107" fill="var(--color-text-primary)" fontSize="16" textAnchor="middle" fontFamily="Inter">Program Memory</text>

                  {/* Arrow */}
                  <line x1="670" y1="100" x2="720" y2="100" stroke="var(--color-accent-green)" strokeWidth="1.5" strokeDasharray="4" />
                  <polygon points="718,96 728,100 718,104" fill="var(--color-accent-green)" />

                  {/* Team */}
                  <rect x="730" y="60" width="50" height="80" rx="8" fill="var(--color-surface-subtle)" stroke="var(--color-hairline)" strokeWidth="1.5" />
                  <text x="755" y="106" fill="var(--color-text-primary)" fontSize="13" textAnchor="middle" fontFamily="Inter">Team</text>

                  {/* Labels */}
                  <text x="215" y="142" fill="var(--color-text-muted)" fontSize="12" textAnchor="middle" fontFamily="JetBrains Mono">READ-ONLY</text>
                  <text x="465" y="142" fill="var(--color-text-muted)" fontSize="12" textAnchor="middle" fontFamily="JetBrains Mono">ENCRYPTED</text>
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Report vulnerability */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="p-8 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)] text-center">
              <Shield size={32} className="text-[var(--color-accent-blue)] mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3">REPORT A VULNERABILITY</h2>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto">
                If you discover a security vulnerability, please report it responsibly. We take all reports seriously and will respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:security@convene.ai" className="text-sm text-[var(--color-accent-blue)] hover:text-[var(--color-text-primary)] transition-colors">
                  security@convene.ai
                </a>
                <button className="px-6 py-2.5 bg-[var(--color-elevated)] border border-[var(--color-hairline)] text-[var(--color-text-primary)] text-sm font-medium rounded-[6px] hover:bg-[var(--color-card)] transition-colors">
                  Request security packet
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
