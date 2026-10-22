import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal, Eyebrow } from './Reveal';
import { siteConfig } from '../lib/site';

/* ==================== MOCK GRAPHICS ==================== */

function ProgramMemoryMock() {
  return (
    <div className="bg-[var(--color-elevated)] rounded-md p-3 sm:p-4 border border-[var(--color-hairline)] flex-1 flex flex-col justify-between">
      <div>
        <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase mb-1.5">Program Readme</div>
        <div className="text-xs text-[var(--color-text-primary)] font-semibold mb-2">Q3 Infrastructure Migration</div>
        
        <div className="space-y-1 mb-3">
          <div className="text-[10px] text-[var(--color-text-secondary)]">Owner: Sarah K.</div>
          <div className="text-[10px] text-[var(--color-text-secondary)]">Status: Active</div>
          <div className="text-[10px] text-[var(--color-text-secondary)]">Deadline: Sep 30</div>
        </div>

        <p className="text-[10px] text-[var(--color-text-muted)] leading-relaxed mb-3">
          Migrating 12 services from legacy infra to new platform with zero downtime.
        </p>
      </div>

      <div>
        <div className="text-[9px] font-mono text-[var(--color-text-muted)] uppercase mb-1.5">Connected Agents</div>
        <div className="flex flex-wrap gap-1 mb-2">
          <span className="px-1.5 py-0.5 text-[8px] font-medium bg-[var(--color-accent-blue)]/15 text-[var(--color-accent-blue)] rounded">Linear</span>
          <span className="px-1.5 py-0.5 text-[8px] font-medium bg-[var(--color-accent-green)]/15 text-[var(--color-accent-green)] rounded">Slack</span>
          <span className="px-1.5 py-0.5 text-[8px] font-medium bg-[var(--color-accent-orange)]/15 text-[var(--color-accent-orange)] rounded">GitHub</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-green)]" />
            <span className="text-[9px] text-[var(--color-text-secondary)]">deploy-bot</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-green)]" />
            <span className="text-[9px] text-[var(--color-text-secondary)]">pr-reviewer</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-orange)]" />
            <span className="text-[9px] text-[var(--color-text-secondary)]">standup-agent</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoopsTriggersMock() {
  return (
    <div className="bg-[var(--color-elevated)] rounded-md p-3 sm:p-4 border border-[var(--color-hairline)] space-y-3 flex-1 flex flex-col justify-between">
      <div>
        <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase mb-1.5">Weekly auto digest</div>
        <div className="flex gap-1">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d) => (
            <div key={d} className="flex-1 h-5 bg-[var(--color-accent-blue)]/10 rounded text-[8px] font-mono text-[var(--color-accent-blue)] flex items-center justify-center">
              {d}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase mb-1">Test Case</div>
        <div className="w-full h-2 bg-[var(--color-surface-muted)] rounded-full overflow-hidden">
          <div className="h-full w-[72%] bg-[var(--color-accent-blue)] rounded-full" />
        </div>
        <div className="text-[8px] text-[var(--color-text-muted)] mt-1 font-mono">72% complete</div>
      </div>

      <div>
        <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase mb-1.5">Launch readiness</div>
        <div className="space-y-1.5">
          {['API stable', 'Docs updated', 'Perf tests pass'].map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full flex items-center justify-center text-[7px] font-bold ${
                i < 2 
                  ? 'bg-[var(--color-accent-green)]/20 text-[var(--color-accent-green)]' 
                  : 'bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]'
              }`}>
                ✓
              </div>
              <span className="text-[9px] text-[var(--color-text-secondary)] font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CollaborationMock() {
  return (
    <div className="bg-[var(--color-elevated)] rounded-md p-3 sm:p-4 border border-[var(--color-hairline)] flex-1 flex flex-col justify-between">
      <div>
        <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase mb-3">Connected Agents</div>
        <div className="space-y-2">
          {[
            { name: 'Code Reviewer', active: true },
            { name: 'Sprint Planner', active: true },
            { name: 'Incident Bot', active: false },
            { name: 'Release Manager', active: true },
          ].map((agent) => (
            <div key={agent.name} className="flex items-center justify-between py-1.5 border-b border-[var(--color-hairline)] last:border-b-0">
              <span className="text-[10px] text-[var(--color-text-primary)] font-medium">{agent.name}</span>
              <div className={`w-7 h-4 rounded-full flex items-center px-0.5 transition-colors ${
                agent.active ? 'bg-[var(--color-accent-blue)]' : 'bg-[var(--color-surface-muted)]'
              }`}>
                <div className={`w-3 h-3 rounded-full bg-[var(--color-elevated)] transition-transform shadow-xs ${
                  agent.active ? 'translate-x-3' : 'translate-x-0'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsMock() {
  return (
    <div className="bg-[var(--color-elevated)] rounded-md p-3 sm:p-4 border border-[var(--color-hairline)] flex-1 flex flex-col justify-between">
      <div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="text-center p-1.5 bg-[var(--color-card)] border border-[var(--color-hairline)] rounded">
            <div className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">28%</div>
            <div className="text-[8px] text-[var(--color-text-muted)] font-mono uppercase">Velocity</div>
          </div>
          <div className="text-center p-1.5 bg-[var(--color-card)] border border-[var(--color-hairline)] rounded">
            <div className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">9/12</div>
            <div className="text-[8px] text-[var(--color-text-muted)] font-mono uppercase">On Track</div>
          </div>
          <div className="text-center p-1.5 bg-[var(--color-card)] border border-[var(--color-hairline)] rounded">
            <div className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">74%</div>
            <div className="text-[8px] text-[var(--color-text-muted)] font-mono uppercase">Health</div>
          </div>
        </div>

        <div className="space-y-2">
          {[
            { label: 'Risk / escalation', value: 85, color: 'var(--color-accent-red)' },
            { label: 'Feature delivery', value: 62, color: 'var(--color-accent-blue)' },
            { label: 'Bug fixes & issues', value: 45, color: 'var(--color-accent-orange)' },
            { label: 'Support & Reviews', value: 78, color: 'var(--color-accent-green)' },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-2">
              <span className="text-[8px] text-[var(--color-text-secondary)] w-24 shrink-0 truncate">{row.label}</span>
              <div className="flex-1 h-1.5 bg-[var(--color-surface-muted)] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${row.value}%`, backgroundColor: row.color }} />
              </div>
              <span className="text-[8px] font-mono font-medium" style={{ color: row.color }}>+{row.value - 50}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==================== FEATURE ITEMS ==================== */

const features = [
  { num: '01/', label: 'PROGRAM MEMORY', title: 'Shared program state and memory', Mock: ProgramMemoryMock },
  { num: '02/', label: 'LOOPS AND TRIGGERS', title: 'Prompt-based triggers and widgets', Mock: LoopsTriggersMock },
  { num: '03/', label: 'COLLABORATION', title: 'Collaborative multi-modal controls', Mock: CollaborationMock },
  { num: '04/', label: 'PROGRAM ANALYTICS', title: 'Large-scale temporal reasoning', Mock: AnalyticsMock },
];

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 4;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 4;
    setTilt({ x: y * -1, y: x });
  };

  return (
    <motion.div
      className="crosshair-card p-5 sm:p-6 bg-[var(--color-card)] rounded-xl border border-[var(--color-hairline)] flex flex-col justify-between h-full shadow-sm hover:border-[var(--color-accent-blue)]/30 transition-colors"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {/* Dynamic Graphic Mock Component */}
      <div className="flex-1 flex flex-col mb-4 min-h-[200px]">
        <feature.Mock />
      </div>

      {/* Title & Metadata */}
      <div className="pt-2 border-t border-[var(--color-hairline)]/50">
        <span className="font-mono text-[10px] text-[var(--color-text-muted)] font-semibold">{feature.num}</span>
        <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent-blue)] mt-0.5 font-bold">
          {feature.label}
        </div>
        <h3 className="text-sm sm:text-base font-semibold text-[var(--color-text-primary)] mt-1 leading-snug">
          {feature.title}
        </h3>
      </div>
    </motion.div>
  );
}

/* ==================== MAIN SECTION ==================== */

export default function CoreFeatures() {
  return (
    <section className="py-12 sm:py-20 md:py-[120px] px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 sm:mb-12 gap-4 lg:gap-6">
          <div>
            <Reveal>
              <Eyebrow>CORE FEATURES</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] leading-tight mt-1">
                The four systems behind<br className="hidden sm:inline" /> every program
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] max-w-md lg:text-right leading-relaxed">
              Memory holds the state. Loops drive the work. Controls keep agents in line. Analytics show it all at scale.
            </p>
          </Reveal>
        </div>

        {/* 2x2 Feature Grid with Uniform Card Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 auto-rows-fr">
          {features.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.1} className="h-full">
              <FeatureCard feature={f} />
            </Reveal>
          ))}
        </div>

        {/* Footer Banner */}
         <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-[clamp(80px,12vw,160px)] font-bold text-stroke-blue leading-none select-none">
              SR-2
            </div>
            <div className="text-center">
              <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                REPORT [FINISHED]: ACTIVE / SEE HOW CONVENE WORKS EVERY / PROGRAM CURRENT
              </p>
            </div>
            <Link
              to={siteConfig.demoUrl}
              className="flex items-center gap-2 px-6 py-3 border border-[var(--color-hairline)] rounded-[6px] text-sm font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-surface-subtle)] transition-all"
            >
              Book a Demo <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
