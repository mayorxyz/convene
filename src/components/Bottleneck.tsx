import { motion } from 'framer-motion';
import { Reveal, Eyebrow } from './Reveal';

export default function Bottleneck() {
  return (
    <section id="how-it-works" className="py-16 md:py-[120px] px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text Content */}
        <div>
          <Reveal>
            <Eyebrow>THE BOTTLENECK CHANGED</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] leading-tight mb-6">
              Staying aligned is time-consuming and expensive
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-lg mb-6">
              Engineering organizations are producing more code, decisions, and moving parts than ever before. The bottleneck is no longer writing software—it&apos;s maintaining shared context.
            </p>
          </Reveal>

          {/* Metric Highlights */}
          <Reveal delay={0.3}>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--color-hairline)] max-w-md">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] font-mono">10x</div>
                <div className="text-xs text-[var(--color-text-secondary)] mt-1">Code Produced</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[var(--color-accent-orange)] font-mono">100%</div>
                <div className="text-xs text-[var(--color-text-secondary)] mt-1">Alignment Needed</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Dynamic SVG Animation */}
        <Reveal delay={0.2}>
          <div className="relative p-6 sm:p-8 rounded-2xl bg-[var(--color-elevated)] border border-[var(--color-hairline)] overflow-hidden shadow-2xl min-h-[380px] sm:min-h-[440px] flex flex-col justify-between">
            {/* Top Status Header */}
            <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[var(--color-hairline)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent-blue)] animate-ping" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-primary)] font-semibold">
                  ALIGNMENT TOPOLOGY
                </span>
              </div>
              <span className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase">
                REAL-TIME SYNC
              </span>
            </div>

            {/* SVG Visual Canvas */}
            <div className="relative w-full h-[250px] sm:h-[300px] my-auto">
              <svg 
                className="w-full h-full overflow-visible" 
                viewBox="0 0 500 300" 
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Glowing Filter Effects */}
                  <filter id="glow-blue" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="glow-orange" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  {/* Gradient Paths */}
                  <linearGradient id="stream-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-accent-blue)" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="var(--color-accent-blue)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="var(--color-accent-blue)" stopOpacity="0.2" />
                  </linearGradient>

                  <linearGradient id="stream-orange" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-accent-orange)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="var(--color-accent-orange)" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Radar Ripple Animation on Central Node */}
                <motion.circle
                  cx="250" cy="150" r="30"
                  fill="none" stroke="var(--color-accent-blue)" strokeWidth="1"
                  animate={{ r: [20, 75, 20], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="250" cy="150" r="50"
                  fill="none" stroke="var(--color-accent-orange)" strokeWidth="0.8"
                  animate={{ r: [35, 95, 35], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                />

                {/* Connecting Curved Vector Paths */}
                {/* Path 1: Top Left to Center */}
                <path id="path-1" d="M 90 70 C 160 70, 180 150, 250 150" fill="none" stroke="url(#stream-blue)" strokeWidth="2" />
                
                {/* Path 2: Bottom Left to Center */}
                <path id="path-2" d="M 90 230 C 160 230, 180 150, 250 150" fill="none" stroke="url(#stream-orange)" strokeWidth="2" />

                {/* Path 3: Center to Main Output Right */}
                <path id="path-3" d="M 250 150 C 320 150, 350 150, 410 150" fill="none" stroke="var(--color-accent-blue)" strokeWidth="2.5" strokeDasharray="4 4" />

                {/* Animated Data Packets Flowing Along Curved Paths */}
                <circle r="4" fill="var(--color-accent-blue)" filter="url(#glow-blue)">
                  <animateMotion path="M 90 70 C 160 70, 180 150, 250 150" dur="2s" repeatCount="indefinite" />
                </circle>

                <circle r="4" fill="var(--color-accent-orange)" filter="url(#glow-orange)">
                  <animateMotion path="M 90 230 C 160 230, 180 150, 250 150" dur="2.6s" repeatCount="indefinite" />
                </circle>

                <circle r="5" fill="var(--color-text-primary)" filter="url(#glow-blue)">
                  <animateMotion path="M 250 150 C 320 150, 350 150, 410 150" dur="1.8s" repeatCount="indefinite" />
                </circle>

                {/* Node 01: AI Input (Top Left) */}
                <g className="cursor-pointer">
                  <circle cx="90" cy="70" r="16" fill="var(--color-card)" stroke="var(--color-accent-blue)" strokeWidth="1.5" />
                  <motion.circle 
                    cx="90" cy="70" r="6" fill="var(--color-accent-blue)"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <text x="90" y="40" textAnchor="middle" fill="var(--color-text-muted)" fontSize="10" fontFamily="monospace">
                    AI OUTPUT
                  </text>
                </g>

                {/* Node 02: Human Sync (Bottom Left) */}
                <g className="cursor-pointer">
                  <circle cx="90" cy="230" r="16" fill="var(--color-card)" stroke="var(--color-accent-orange)" strokeWidth="1.5" />
                  <motion.circle 
                    cx="90" cy="230" r="6" fill="var(--color-accent-orange)"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2.3, repeat: Infinity, delay: 0.5 }}
                  />
                  <text x="90" y="265" textAnchor="middle" fill="var(--color-text-muted)" fontSize="10" fontFamily="monospace">
                    HUMAN SYNC
                  </text>
                </g>

                {/* Central Engine Hub (Center) */}
                <g className="cursor-pointer">
                  <circle cx="250" cy="150" r="24" fill="var(--color-elevated)" stroke="var(--color-hairline)" strokeWidth="2" />
                  <motion.circle 
                    cx="250" cy="150" r="12" fill="var(--color-accent-blue)" filter="url(#glow-blue)"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <text x="250" y="190" textAnchor="middle" fill="var(--color-text-primary)" fontSize="10" fontWeight="bold" fontFamily="monospace">
                    CONVENE ENGINE
                  </text>
                </g>

                {/* Node 03: Aligned Execution (Right) */}
                <g className="cursor-pointer">
                  <circle cx="410" cy="150" r="18" fill="var(--color-card)" stroke="var(--color-text-primary)" strokeWidth="2" />
                  <motion.circle 
                    cx="410" cy="150" r="7" fill="var(--color-text-primary)"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                  <text x="410" y="185" textAnchor="middle" fill="var(--color-text-primary)" fontSize="10" fontWeight="bold" fontFamily="monospace">
                    ALIGNED TEAM
                  </text>
                </g>
              </svg>
            </div>

            {/* Bottom Legend */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[var(--color-hairline)] text-[10px] font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent-blue)]" />
                <span className="text-[var(--color-text-muted)]">01 AI SPEED</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent-orange)]" />
                <span className="text-[var(--color-text-muted)]">02 HUMAN CONTEXT</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-text-primary)]" />
                <span className="text-[var(--color-text-muted)]">03 SYNCHRONIZED</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}