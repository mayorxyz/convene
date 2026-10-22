import { useState } from 'react';
import PageShell, { PageHero } from '../components/PageShell';
import { Reveal, Eyebrow, Accordion, ChatMock, Timeline } from '../components/shared';
import { faqs, dayWithConvene, integrations } from '../lib/content';
import { getReadableTextColor } from '../lib/color';
import { Check, Shield } from 'lucide-react';

function StepCard({ num, title, desc, children }: { num: string; title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start py-12 border-b border-[var(--color-hairline)] last:border-b-0">
      <div>
        <span className="font-mono text-sm text-[var(--color-accent-blue)]">{num}</span>
        <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mt-2 mb-3">{title}</h3>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">{desc}</p>
      </div>
      <div className="crosshair-card p-5 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)]">
        {children}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <PageShell>
      <PageHero
        eyebrow="HOW IT WORKS"
        title="From scattered tools to one live program view"
        paragraph="Convene connects to the tools your team already uses, builds a catalog of every program, and keeps shared state current without anyone writing status updates."
        outlinedWord="01-04"
      />

      {/* Section A: Four steps */}
      <section className="py-20 md:py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>THE PROCESS</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-12">Four steps to live programs</h2>
          </Reveal>

          <StepCard num="01/" title="CONNECT" desc="Connect your tools in minutes. Convene reads signals from Slack, Linear, GitHub, Jira, Zoom, and Notion without modifying anything.">
            <div className="space-y-2">
              {['Slack', 'Linear', 'GitHub', 'Jira', 'Zoom', 'Notion'].map((tool) => (
                <div key={tool} className="flex items-center justify-between py-2 border-b border-[var(--color-hairline)] last:border-0">
                  <span className="text-sm text-[var(--color-text-primary)]">{tool}</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[9px] font-mono bg-[var(--color-accent-green)]/10 text-[var(--color-accent-green)] rounded">Connected</span>
                    <span className="text-[9px] text-[var(--color-text-muted)]">2 min ago</span>
                  </div>
                </div>
              ))}
            </div>
          </StepCard>

          <StepCard num="02/" title="CATALOG" desc="Convene discovers your programs automatically. It reads signals across your tools and surfaces the work you are tracking.">
            <div className="space-y-2">
              {[
                { name: 'SOC 2 Type 2 Compliance', conf: 94 },
                { name: 'Zero Desktop Agent', conf: 87 },
                { name: 'Replace Migration', conf: 91 },
                { name: 'Linear Integration', conf: 96 },
                { name: 'Program Detection', conf: 82 },
              ].map((p) => (
                <div key={p.name} className="flex items-center justify-between py-2 border-b border-[var(--color-hairline)] last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[var(--color-text-primary)]">{p.name}</span>
                    <span className="text-[10px] font-mono text-[var(--color-accent-blue)]">{p.conf}%</span>
                  </div>
                  <div className="flex gap-1">
                    <button className="px-2 py-0.5 text-[8px] font-mono bg-[var(--color-accent-green)]/10 text-[var(--color-accent-green)] rounded">Approve</button>
                    <button className="px-2 py-0.5 text-[8px] font-mono bg-[var(--color-surface-subtle)] text-[var(--color-text-secondary)] rounded">Merge</button>
                    <button className="px-2 py-0.5 text-[8px] font-mono bg-[var(--color-surface-subtle)] text-[var(--color-text-secondary)] rounded">Ignore</button>
                  </div>
                </div>
              ))}
            </div>
          </StepCard>

          <StepCard num="03/" title="STATE" desc="Every program keeps shared memory. Decisions, risks, owners, and history stay current automatically as work moves.">
            <div>
              <div className="flex gap-2 mb-3">
                {['Decisions', 'Risks', 'Owners', 'History'].map((tab) => (
                  <span key={tab} className="px-2 py-1 text-[9px] font-mono border border-[var(--color-hairline)] rounded text-[var(--color-text-secondary)]">{tab}</span>
                ))}
              </div>
              <div className="space-y-2">
                <div className="px-3 py-2 bg-[var(--color-surface-subtle)] rounded text-xs text-[var(--color-text-secondary)]">
                  <span className="text-[var(--color-accent-orange)]">⚡</span> Risk raised from #eng-platform
                </div>
                <div className="px-3 py-2 bg-[var(--color-surface-subtle)] rounded text-xs text-[var(--color-text-secondary)]">
                  <span className="text-[var(--color-accent-blue)]">↻</span> Owner changed: Priya → Daniel
                </div>
                <div className="px-3 py-2 bg-[var(--color-surface-subtle)] rounded text-xs text-[var(--color-text-secondary)]">
                  <span className="text-[var(--color-accent-green)]">✓</span> Decision logged: API v3 descoped
                </div>
              </div>
            </div>
          </StepCard>

          <StepCard num="04/" title="AUTOMATE" desc="Query, update, and automate. Ask Convene anything, generate updates on cadence, and trust your roadmaps stay aligned.">
            <ChatMock prompts={[
              { q: 'What changed on Replace Migration this week?', a: 'Three changes: schema review completed (Oct 14), security audit started (Oct 15), and the timeline slipped by 1 week due to the InfoSec dependency. Owner: David Chen.' },
              { q: 'Generate the weekly report', a: 'Report ready. 5 active programs, 3 on track, 1 at risk, 1 blocked. Key decisions: 4 made. Top risks: schema delay, InfoSec timeline.' },
            ]} />
            <div className="mt-3 p-3 bg-[var(--color-accent-blue)]/5 rounded border border-[var(--color-accent-blue)]/10">
              <div className="text-[10px] font-mono text-[var(--color-accent-blue)] uppercase mb-1">Weekly auto digest</div>
              <div className="text-xs text-[var(--color-text-secondary)]">Mondays 9:00 → Slack #leadership</div>
            </div>
          </StepCard>
        </div>
      </section>

      {/* Section B: What Convene Reads */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>WHAT CONVENE READS</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-4">Signals, not noise</h2>
            <div className="flex items-center gap-2 mb-8">
              <Shield size={12} className="text-[var(--color-accent-green)]" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent-green)]">Read-only by default</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-[var(--color-hairline)] rounded-[12px] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 bg-[var(--color-surface-subtle)] px-4 py-2 border-b border-[var(--color-hairline)]">
                <span className="font-mono text-[10px] uppercase text-[var(--color-text-muted)]">Integration</span>
                <span className="font-mono text-[10px] uppercase text-[var(--color-text-muted)] hidden md:block">Signals Ingested</span>
                <span className="font-mono text-[10px] uppercase text-[var(--color-text-muted)] hidden md:block">Status</span>
              </div>
              {integrations.map((int) => (
                <div key={int.name} className="grid grid-cols-1 md:grid-cols-3 px-4 py-3 border-b border-[var(--color-hairline)] last:border-0 items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded flex items-center justify-center text-[8px] font-bold" style={{ backgroundColor: int.color, color: getReadableTextColor(int.color) }}>
                      {int.name[0]}
                    </div>
                    <span className="text-sm text-[var(--color-text-primary)]">{int.name}</span>
                  </div>
                  <span className="text-xs text-[var(--color-text-secondary)] mt-1 md:mt-0">{int.signals}</span>
                  <span className="text-[10px] font-mono text-[var(--color-accent-green)] mt-1 md:mt-0">Active</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section C: Who Sees What */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>WHO SEES WHAT</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">Per-program, per-role access</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { role: 'Leadership', items: ['Program summaries', 'Risk heatmaps', 'Decision logs', 'Quarterly rollups'] },
                { role: 'Managers', items: ['Full program state', 'Team activity', 'Blockers & risks', 'Agent outputs'] },
                { role: 'Engineers', items: ['Their programs', 'Relevant decisions', 'Assigned tasks', 'Status updates'] },
              ].map((r) => (
                <div key={r.role} className="crosshair-card p-5 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)]">
                  <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">{r.role}</h3>
                  <div className="space-y-2">
                    {r.items.map((item) => (
                      <div key={item} className="flex items-center justify-between">
                        <span className="text-xs text-[var(--color-text-secondary)]">{item}</span>
                        <div className="w-7 h-4 rounded-full bg-[var(--color-accent-blue)] flex items-center px-0.5">
                          <div className="w-3 h-3 rounded-full bg-[var(--color-text-primary)] translate-x-3" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-[var(--color-text-muted)] text-center">Per-program, per-role access. Nothing is shared until you approve it.</p>
          </Reveal>
        </div>
      </section>

      {/* Section D: A Day with Convene */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>A DAY WITH CONVENE</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">Coordination on autopilot</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Timeline stops={dayWithConvene} />
          </Reveal>
        </div>
      </section>

      {/* Section E: FAQ */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">Common questions</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
