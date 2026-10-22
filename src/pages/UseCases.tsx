import { Link, useParams } from 'react-router-dom';
import PageShell, { PageHero } from '../components/PageShell';
import { Reveal, Eyebrow, ChatMock, Timeline } from '../components/shared';
import { roleDetails, integrations } from '../lib/content';
import { getReadableTextColor } from '../lib/color';

const programTypes = [
  { title: 'Compliance programs', desc: 'SOC 2, ISO 27001, HIPAA readiness with automated evidence collection.' },
  { title: 'Platform migrations', desc: 'Legacy-to-modern migrations with dependency tracking and risk management.' },
  { title: 'Product launches', desc: 'Cross-functional launches with timeline alignment and stakeholder updates.' },
  { title: 'Incident follow-through', desc: 'Post-incident action items tracked to completion with ownership clarity.' },
  { title: 'Cross-team roadmaps', desc: 'Multi-team roadmaps kept in sync with live execution signals.' },
  { title: 'Vendor integrations', desc: 'Third-party integrations managed with clear milestones and blockers.' },
];

export function UseCasesIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="USE CASES"
        title="One system, every role in the program"
        paragraph="Convene adapts to how you work. Whether you manage engineers, products, programs, or the entire organization, you get a tailored view of what matters."
        outlinedWord="UC"
      />

      {/* Role cards */}
      <section className="py-20 md:py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="border-t border-[var(--color-hairline)]">
              {roleDetails.map((role) => (
                <Link
                  key={role.slug}
                  to={`/use-cases/${role.slug}`}
                  className="block group py-8 border-b border-[var(--color-hairline)] hover:bg-[var(--color-elevated)] transition-colors px-4 rounded-[6px]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                    <div className="md:col-span-1">
                      <span className="font-mono text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-blue)] transition-colors">→</span>
                    </div>
                    <div className="md:col-span-3">
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] break-words">{role.abbr}</div>
                    </div>
                    <div className="md:col-span-4">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-1">{role.label}</div>
                      <div className="text-sm font-semibold text-[var(--color-text-primary)]">{role.headline}</div>
                    </div>
                    <div className="md:col-span-4">
                      <p className="text-sm text-[var(--color-text-secondary)]">Explore how {role.abbr === 'Leadership' ? 'leaders' : `${role.abbr}s`} use Convene to coordinate programs at scale.</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* By program type */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>BY PROGRAM TYPE</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">Every kind of program</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {programTypes.map((pt) => (
                <div key={pt.title} className="crosshair-card p-5 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)]">
                  <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">{pt.title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal>
            <p className="text-xl md:text-2xl text-[var(--color-text-primary)] max-w-3xl mx-auto mb-10">
              Convene surfaces threads across your cross-functional tools to help your team have a shared program-native perspective.
            </p>
            <div className="flex items-center justify-center flex-wrap gap-5 md:gap-7">
              {integrations.map((int) => (
                <div key={int.name} className="flex flex-col items-center gap-1.5" title={int.name}>
                  <div
                    className="w-7 h-7 rounded-[6px] flex items-center justify-center text-[10px] font-bold"
                    style={{ backgroundColor: int.color, color: getReadableTextColor(int.color) }}
                  >
                    {int.name[0]}
                  </div>
                  <span className="text-[8px] text-[var(--color-text-muted)] font-mono">{int.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

export function UseCaseDetail() {
  const { role } = useParams<{ role: string }>();
  const detail = roleDetails.find((r) => r.slug === role);

  if (!detail) {
    return (
      <PageShell>
        <div className="py-32 text-center">
          <h1 className="text-2xl text-[var(--color-text-primary)]">Role not found</h1>
          <Link to="/use-cases" className="text-[var(--color-accent-blue)] mt-4 inline-block">Back to Use Cases</Link>
        </div>
      </PageShell>
    );
  }

  const currentIndex = roleDetails.findIndex((r) => r.slug === role);
  const prevRole = currentIndex > 0 ? roleDetails[currentIndex - 1] : null;
  const nextRole = currentIndex < roleDetails.length - 1 ? roleDetails[currentIndex + 1] : null;

  const weekPlan = detail.weekPlan.map((d) => ({ time: d.day, label: d.moment }));

  return (
    <PageShell>
      <PageHero
        eyebrow={detail.label}
        title={detail.headline}
        paragraph={`See how ${detail.abbr === 'Leadership' ? 'leadership' : detail.abbr + 's'} use Convene to stay aligned, make faster decisions, and coordinate programs at scale.`}
        outlinedWord={detail.abbr}
      />

      {/* A Week in the Role */}
      <section className="py-20 md:py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>A WEEK IN THE ROLE</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">What a week looks like</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Timeline stops={weekPlan} />
          </Reveal>
        </div>
      </section>

      {/* Ask Convene */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>ASK CONVENE</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">Sample conversations</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {detail.prompts.map((p, i) => (
                <div key={i} className="p-4 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)]">
                  <div className="mb-3 px-3 py-2 bg-[var(--color-accent-blue)]/10 rounded-lg text-xs text-[var(--color-text-primary)]">
                    {p.q}
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{p.a}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>OUTCOMES</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">Illustrative impact</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {detail.outcomes.map((o, i) => (
                <div key={i} className="crosshair-card p-8 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)] text-center">
                  <div className="text-4xl font-bold text-[var(--color-text-primary)] mb-2">{o.value}</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">{o.label}</div>
                </div>
              ))}
            </div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-text-muted)] text-center mt-4">
              ILLUSTRATIVE FIGURES FOR DEMONSTRATION
            </p>
          </Reveal>
        </div>
      </section>

      {/* Program View */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>PROGRAM VIEW</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">Your perspective, live</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="crosshair-card p-6 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-[var(--color-text-primary)]">{detail.abbr} Dashboard</span>
                <span className="px-2 py-0.5 text-[9px] font-mono bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)] rounded">Live</span>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="p-3 bg-[var(--color-surface-subtle)] rounded">
                  <div className="text-lg font-bold text-[var(--color-text-primary)]">5</div>
                  <div className="text-[9px] text-[var(--color-text-muted)] font-mono uppercase">Active Programs</div>
                </div>
                <div className="p-3 bg-[var(--color-surface-subtle)] rounded">
                  <div className="text-lg font-bold text-[var(--color-accent-green)]">3</div>
                  <div className="text-[9px] text-[var(--color-text-muted)] font-mono uppercase">On Track</div>
                </div>
                <div className="p-3 bg-[var(--color-surface-subtle)] rounded">
                  <div className="text-lg font-bold text-[var(--color-accent-orange)]">2</div>
                  <div className="text-[9px] text-[var(--color-text-muted)] font-mono uppercase">Need Attention</div>
                </div>
              </div>
              <div className="space-y-2">
                {['Replace Migration', 'SOC 2 Compliance', 'Zero Desktop Agent'].map((name, i) => (
                  <div key={name} className="flex items-center justify-between py-2 border-b border-[var(--color-hairline)] last:border-0">
                    <span className="text-xs text-[var(--color-text-primary)]">{name}</span>
                    <span className={`px-2 py-0.5 text-[8px] font-mono rounded ${
                      i === 0 ? 'bg-[var(--color-accent-orange)]/10 text-[var(--color-accent-orange)]' : 'bg-[var(--color-accent-green)]/10 text-[var(--color-accent-green)]'
                    }`}>
                      {i === 0 ? 'At risk' : 'On track'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>RELATED RESOURCES</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">Learn more</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "The TPM's guide to running agent-augmented programs", slug: 'tpm-guide-agent-augmented-programs', cat: 'Guides' },
                { title: 'A weekly program review that takes 15 minutes', slug: 'weekly-program-review-15-minutes', cat: 'Playbooks' },
                { title: 'Designing shared program memory', slug: 'designing-shared-program-memory', cat: 'Guides' },
              ].map((post) => (
                <Link key={post.slug} to={`/resources/${post.slug}`} className="p-5 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)] hover:border-[var(--color-accent-blue)]/30 transition-colors">
                  <span className="font-mono text-[9px] uppercase text-[var(--color-accent-blue)]">{post.cat}</span>
                  <h3 className="text-sm font-medium text-[var(--color-text-primary)] mt-2">{post.title}</h3>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="py-12 px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {prevRole ? (
            <Link to={`/use-cases/${prevRole.slug}`} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
              ← <span className="font-mono text-[10px] uppercase">{prevRole.abbr}</span>
            </Link>
          ) : <div />}
          {nextRole ? (
            <Link to={`/use-cases/${nextRole.slug}`} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
              <span className="font-mono text-[10px] uppercase">{nextRole.abbr}</span> →
            </Link>
          ) : <div />}
        </div>
      </section>
    </PageShell>
  );
}
