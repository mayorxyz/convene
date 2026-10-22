import { Link } from 'react-router-dom';
import { Reveal, Eyebrow } from './Reveal';
import { siteConfig } from '../lib/site';

const cases = [
  {
    num: '01/',
    abbr: 'EM',
    sublabel: 'ENGINEERING MANAGER',
    title: 'Understand the reality without chasing updates.',
    desc: 'See what is moving across teams, where execution is slipping, and what needs attention next. Stay close to delivery, risk, and team health through a shared view of the work.',
  },
  {
    num: '02/',
    abbr: 'PM',
    sublabel: 'PRODUCT MANAGER',
    title: 'Keep decisions, timelines, and execution aligned.',
    desc: 'Connect roadmap shifts, decisions, ownership, and delivery progress in one place. Keep teams aligned as priorities move and product direction tied to execution.',
  },
  {
    num: '03/',
    abbr: 'TPM',
    sublabel: 'TECHNICAL PROGRAM MANAGER',
    title: 'Delegate coordination. Scale your impact.',
    desc: 'Architect and drive agent-augmented programs and reusable program procedures.',
  },
  {
    num: '04/',
    abbr: 'Leadership',
    sublabel: 'ENGINEERING AND EXECUTIVE',
    title: 'Gain unprecedented program visibility.',
    desc: 'Get a clearer view of momentum, blockers, coordination gaps, and operational risk. Turn fragmented updates into a live picture of program health for faster decisions.',
  },
];

const integrations = [
  'Slack', 'Google', 'Docs', 'Sheets', 'Meet', 'Zoom', 'GitHub', 'Linear', 'Jira', 'Notion', 'Figma', 'Salesforce', 'Confluence', 'Teams'
];

const integrationColors: Record<string, string> = {
  Slack: '#4A154B',
  Google: '#4285F4',
  Docs: '#4285F4',
  Sheets: '#0F9D58',
  Meet: '#00897B',
  Zoom: '#2D8CFF',
  GitHub: '#8B949E',
  Linear: '#5E6AD2',
  Jira: '#0052CC',
  Notion: '#8B949E',
  Figma: '#F24E1E',
  Salesforce: '#00A1E0',
  Confluence: '#172B4D',
  Teams: '#6264A7',
};

export default function UseCases() {
  return (
    <section id="use-cases" className="py-16 md:py-[120px] px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <Eyebrow>BUILT FOR TECHNICAL MANAGERS</Eyebrow>
        </Reveal>

        {/* Giant heading with decorative vertical title */}
        <Reveal delay={0.1}>
          <div className="relative mb-10 sm:mb-16">
            <h2 className="text-[clamp(32px,8vw,100px)] font-extrabold tracking-[-0.03em] text-[var(--color-text-primary)] leading-[0.95] max-w-4xl">
              AI-native<br />Coordination
            </h2>
            {/* Vertical CASES text on large screens */}
            <div className="absolute right-0 top-0 bottom-0 hidden lg:flex items-center pointer-events-none opacity-20">
              <span className="text-[clamp(48px,8vw,100px)] font-bold text-stroke leading-none select-none [writing-mode:vertical-rl] rotate-180">
                CASES
              </span>
            </div>
          </div>
        </Reveal>

        {/* Use case rows */}
        <div className="border-t border-[var(--color-hairline)]">
          {cases.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.08}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-5 md:py-8 border-b border-[var(--color-hairline)] px-3 sm:px-4 rounded-[6px] hover:bg-[var(--color-elevated)] transition-colors cursor-default">
                {/* Number & Abbreviation Header on Mobile */}
                <div className="md:col-span-1 flex items-center justify-between md:block">
                  <span className="font-mono text-xs sm:text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-blue)] transition-colors">
                    {c.num}
                  </span>
                  <div className="md:hidden text-lg font-bold text-[var(--color-text-primary)]">
                    {c.abbr}
                  </div>
                </div>

                {/* Abbreviation (Desktop) */}
                <div className="hidden md:block md:col-span-3">
                  <div className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] whitespace-nowrap">
                    {c.abbr}
                  </div>
                </div>

                {/* Sublabel & Main Title */}
                <div className="md:col-span-4">
                  <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                    {c.sublabel}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-[var(--color-text-primary)] leading-snug">
                    {c.title}
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-4 mt-1 md:mt-0">
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Book a Demo button */}
        <Reveal delay={0.3}>
          <Link
            to={siteConfig.demoUrl}
            className="block w-full max-w-md mx-auto mt-8 sm:mt-10 px-7 py-4 bg-[var(--color-accent-blue)] text-white text-sm sm:text-base font-semibold rounded-[6px] text-center hover:brightness-110 hover:-translate-y-px transition-all shadow-md active:scale-[0.99]"
          >
            Book a Demo
          </Link>
        </Reveal>

        {/* Bottom paragraph and integrations */}
        <Reveal delay={0.4}>
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-base sm:text-xl md:text-2xl text-[var(--color-text-primary)] max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal">
              Convene surfaces threads across your cross-functional tools to help your team have a shared program-native perspective.
            </p>

            <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6">
              {integrations.map((name) => {
                const color = integrationColors[name] || '#8B949E';
                return (
                  <div key={name} className="flex flex-col items-center gap-1.5 group cursor-pointer" title={name}>
                    <div
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-[8px] flex items-center justify-center text-xs font-bold border border-[var(--color-hairline)] group-hover:scale-110 transition-transform shadow-xs"
                      style={{ 
                        backgroundColor: `${color}1A`, 
                        color: color 
                      }}
                    >
                      {name[0]}
                    </div>
                    <span className="text-[9px] text-[var(--color-text-muted)] font-mono group-hover:text-[var(--color-text-primary)] transition-colors">
                      {name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}