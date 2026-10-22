import { Reveal, Eyebrow } from './Reveal';

const items = [
  {
    step: '01',
    title: 'Connect everything',
    body: 'Connect Slack, Linear, GitHub, Jira, Zoom, Notion, and your roadmaps. Convene starts ingesting right away.',
    // Custom inline sharp SVG icon
    iconSvg: (
      <svg className="w-6 h-6 text-[var(--color-accent-blue)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h6v6H4V4zM14 4h6v6h-6V4zM4 14h6v6H4v-6zM14 14h6v6h-6v-6z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Convene builds a catalog of all programs',
    body: 'It reads signals across your tools and surfaces the work you are tracking. You review, refine, and decide what is shared.',
    iconSvg: (
      <svg className="w-6 h-6 text-[var(--color-accent-blue)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <rect x="10" y="10" width="4" height="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Each program gets shared state & memory',
    body: 'Decisions, risks, owners, history, and activity stay current automatically as work moves.',
    iconSvg: (
      <svg className="w-6 h-6 text-[var(--color-accent-blue)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="5" width="14" height="14" />
        <path d="M9 1h6M9 23h6M1 9v6M23 9v6" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Unlock program-level automations',
    body: 'Query any program, generate updates on cadence, and trust your roadmaps stay aligned.',
    iconSvg: (
      <svg className="w-6 h-6 text-[var(--color-accent-blue)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6v20h12V8l-4-6z" />
        <path d="M14 2v6h6M10 12h4M10 16h4" />
      </svg>
    ),
  },
];

export default function Solution() {
  return (
    <section id="why-convene" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-8 md:mb-12">
            <Eyebrow color="blue">SOLUTION</Eyebrow>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] leading-tight mt-2">
              Get people and agents on the same program
            </h2>
          </div>
        </Reveal>

        {/* Grid Container with Sharp Edges */}
        <Reveal delay={0.1}>
          <div className="border border-[var(--color-hairline)] bg-[var(--color-hairline)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px rounded-none overflow-hidden">
            {items.map((item) => (
              <div
                key={item.title}
                className="bg-[var(--color-elevated)] p-5 sm:p-6 flex flex-col justify-between hover:bg-[var(--color-card)] transition-colors duration-200"
              >
                <div>
                  {/* Icon & Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 border border-[var(--color-hairline)] bg-[var(--color-card)] rounded-none">
                      {item.iconSvg}
                    </div>
                    <span className="font-mono text-xs font-bold text-[var(--color-text-muted)] tracking-wider">
                      [{item.step}]
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}