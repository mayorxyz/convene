import { Link } from 'react-router-dom';
import PageShell, { PageHero } from '../components/PageShell';
import { Reveal, Eyebrow, StatBlock, StatusIcon } from '../components/shared';
import { comparisonRows, testimonials } from '../lib/content';
import { Database, Brain, Users, Shield } from 'lucide-react';

const pillars = [
  { icon: Database, num: '01/', title: 'Program-native, not ticket-native', desc: 'Convene thinks in programs: cross-functional bodies of work with shared goals, owners, and risks. Not isolated tickets in a backlog.' },
  { icon: Brain, num: '02/', title: 'Memory that stays current', desc: 'Program memory is maintained by agents that read signals from your tools. No stale docs, no manual updates, no drift.' },
  { icon: Users, num: '03/', title: 'Built for humans and agents', desc: 'Convene is the shared control plane where humans set direction and agents handle coordination. Both stay aligned automatically.' },
];

export default function WhyConvene() {
  return (
    <PageShell>
      <PageHero
        eyebrow="WHY CONVENE"
        title="Coordination is the new bottleneck"
        paragraph="Code is cheap. Alignment is not. Convene gives managers and leaders a live, trustworthy picture of every program."
        outlinedWord="WHY"
      />

      {/* Section A: Three pillars */}
      <section className="py-20 md:py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="border border-[var(--color-hairline)] rounded-[12px] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {pillars.map((p, i) => (
                  <div key={p.num} className={`p-8 ${i < 2 ? 'md:border-r border-b md:border-b-0' : ''} border-[var(--color-hairline)]`}>
                    <p.icon size={28} strokeWidth={1.2} className="text-[var(--color-text-secondary)] mb-4" />
                    <span className="font-mono text-[10px] text-[var(--color-accent-blue)]">{p.num}</span>
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mt-2 mb-3">{p.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section B: Comparison table */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>COMPARISON</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">How Convene compares</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-[var(--color-hairline)]">
                    <th className="text-left py-3 px-4 font-mono text-[10px] uppercase text-[var(--color-text-muted)]"></th>
                    <th className="text-center py-3 px-4 font-mono text-[10px] uppercase text-[var(--color-text-muted)]">Status meetings</th>
                    <th className="text-center py-3 px-4 font-mono text-[10px] uppercase text-[var(--color-text-muted)]">Spreadsheets</th>
                    <th className="text-center py-3 px-4 font-mono text-[10px] uppercase text-[var(--color-text-muted)]">Generic AI</th>
                    <th className="text-center py-3 px-4 font-mono text-[10px] uppercase text-[var(--color-accent-blue)] border-t-2 border-[var(--color-accent-blue)]">Convene</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-b border-[var(--color-hairline)]">
                      <td className="py-3 px-4 text-sm text-[var(--color-text-primary)]">{row.label}</td>
                      <td className="py-3 px-4 text-center"><StatusIcon value={row.meetings} /></td>
                      <td className="py-3 px-4 text-center"><StatusIcon value={row.spreadsheets} /></td>
                      <td className="py-3 px-4 text-center"><StatusIcon value={row.chat} /></td>
                      <td className="py-3 px-4 text-center border-l border-r border-[var(--color-accent-blue)]/10 bg-[var(--color-accent-blue)]/5"><StatusIcon value={row.convene} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section C: Stats */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border border-[var(--color-hairline)] bg-[var(--color-hairline)] rounded-[12px] overflow-hidden">
              <div className="bg-[var(--color-base)]">
                <StatBlock value="6 hrs" suffix="/week" label="COORDINATION TIME RETURNED PER MANAGER" />
              </div>
              <div className="bg-[var(--color-base)]">
                <StatBlock value="42%" label="FEWER STATUS MEETINGS" />
              </div>
              <div className="bg-[var(--color-base)]">
                <StatBlock value="3.1x" label="FASTER RISK DETECTION" />
              </div>
              <div className="bg-[var(--color-base)]">
                <StatBlock value="Day 1" label="TIME TO VALUE" />
              </div>
            </div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-text-muted)] text-center mt-4">
              ILLUSTRATIVE FIGURES FOR DEMONSTRATION
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section D: Before/After */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>BEFORE & AFTER</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">The difference is clarity</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Without Convene */}
              <div className="p-6 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-mono text-[var(--color-accent-red)] uppercase">Without Convene</span>
                </div>
                <div className="space-y-2">
                  <div className="px-3 py-2 bg-[var(--color-surface-subtle)] rounded flex items-center justify-between">
                    <span className="text-xs text-[var(--color-text-secondary)]">Thread: "When is the migration done?"</span>
                    <span className="px-1.5 py-0.5 text-[8px] bg-[var(--color-accent-red)]/10 text-[var(--color-accent-red)] rounded">3 conflicting dates</span>
                  </div>
                  <div className="px-3 py-2 bg-[var(--color-surface-subtle)] rounded flex items-center justify-between">
                    <span className="text-xs text-[var(--color-text-secondary)]">Doc: "Q4 Status"</span>
                    <span className="px-1.5 py-0.5 text-[8px] bg-[var(--color-accent-red)]/10 text-[var(--color-accent-red)] rounded">Last updated 2 weeks ago</span>
                  </div>
                  <div className="px-3 py-2 bg-[var(--color-surface-subtle)] rounded flex items-center justify-between">
                    <span className="text-xs text-[var(--color-text-secondary)]">Spreadsheet: "Risk Register"</span>
                    <span className="px-1.5 py-0.5 text-[8px] bg-[var(--color-accent-red)]/10 text-[var(--color-accent-red)] rounded">Owner unknown</span>
                  </div>
                  <div className="px-3 py-2 bg-[var(--color-surface-subtle)] rounded flex items-center justify-between">
                    <span className="text-xs text-[var(--color-text-secondary)]">Email: "Re: blockers"</span>
                    <span className="px-1.5 py-0.5 text-[8px] bg-[var(--color-accent-red)]/10 text-[var(--color-accent-red)] rounded">Unresolved</span>
                  </div>
                </div>
              </div>

              {/* With Convene */}
              <div className="p-6 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-accent-blue)]/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-mono text-[var(--color-accent-blue)] uppercase">With Convene</span>
                </div>
                <div className="p-4 bg-[var(--color-accent-blue)]/5 rounded-lg border border-[var(--color-accent-blue)]/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-[var(--color-text-primary)]">Replace Migration</span>
                    <span className="px-2 py-0.5 text-[9px] font-mono bg-[var(--color-accent-green)]/10 text-[var(--color-accent-green)] rounded">On track</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-green)]" />
                      <span className="text-xs text-[var(--color-text-secondary)]">Owner: David Chen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-green)]" />
                      <span className="text-xs text-[var(--color-text-secondary)]">Deadline: Nov 15 (confirmed)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-orange)]" />
                      <span className="text-xs text-[var(--color-text-secondary)]">Risk: InfoSec review timeline</span>
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-[var(--color-text-muted)] mt-3">One source of truth. Always current.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section E: Testimonials */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>TESTIMONIALS</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">What teams say</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonials.map((t, i) => (
                <div key={i} className="crosshair-card p-6 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)]">
                  <span className="font-mono text-[9px] uppercase text-[var(--color-text-muted)] mb-3 block">SAMPLE TESTIMONIAL</span>
                  <p className="text-sm text-[var(--color-text-primary)] leading-relaxed mb-4">"{t.quote}"</p>
                  <div>
                    <div className="text-xs font-medium text-[var(--color-text-primary)]">{t.name}</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">{t.role}, {t.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section F: Trust */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>TRUST</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">Enterprise-grade security</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 mb-8">
              {['SOC 2', 'SSO/SAML', 'Encryption at rest', 'Audit logs', 'Data residency options'].map((item) => (
                <div key={item} className="flex items-center gap-2 px-4 py-2 border border-[var(--color-hairline)] rounded-full">
                  <Shield size={12} className="text-[var(--color-accent-green)]" />
                  <span className="text-xs text-[var(--color-text-secondary)]">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/security" className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-accent-blue)] hover:text-[var(--color-text-primary)] transition-colors">
              Learn more about security →
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
