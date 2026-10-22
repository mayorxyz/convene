import { motion } from 'framer-motion';
import { MessageSquare, Send, ChevronDown } from 'lucide-react';

export default function DashboardMock() {
  return (
    <div className="w-full max-w-[960px] mx-auto mt-8 sm:mt-10 lg:mt-12 rounded-[16px] border border-[var(--color-hairline)] bg-[var(--color-elevated)] overflow-hidden shadow-[0_0_60px_var(--color-shadow)]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-2 sm:px-5 sm:py-3 border-b border-[var(--color-hairline)]">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-[var(--color-accent-blue)] flex items-center justify-center">
            <div className="w-2 h-2 bg-[var(--color-text-primary)] rounded-sm" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-[var(--color-text-primary)]">Active Programs</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden sm:inline-block px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-secondary)] border border-[var(--color-hairline)] rounded-full">Who sees what</span>
          <div className="flex -space-x-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--color-accent-blue)] border-2 border-[var(--color-elevated)]" />
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--color-accent-green)] border-2 border-[var(--color-elevated)]" />
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--color-accent-orange)] border-2 border-[var(--color-elevated)]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Left: Program table */}
        <div className="flex-1 min-w-0 p-2 sm:p-3 lg:p-4 border-r border-[var(--color-hairline)]">
          <div className="text-[10px] sm:text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider mb-2 sm:mb-3">Program</div>
          {/* Date columns */}
          <div className="flex items-center mb-1.5 sm:mb-2 ml-[120px] sm:ml-[180px]">
            {['Aug 19', 'Aug 20', 'Aug 21', 'Aug 22', 'Aug 23'].map((d, i) => (
              <div key={d} className={`flex-1 text-center text-[8px] sm:text-[10px] font-mono py-1 ${i === 0 ? 'text-[var(--color-accent-blue)] bg-[var(--color-accent-blue)]/10 rounded' : 'text-[var(--color-text-muted)]'}`}>
                {d}
              </div>
            ))}
          </div>
          {/* Rows */}
          {[
            { name: 'SOC 2 Type 2 Compliance', desc: 'Annual audit preparation', status: 'On track', statusColor: 'var(--color-accent-green)', bar: 'bg-[var(--color-accent-green)]', width: '80%' },
            { name: 'Zero Desktop Agent', desc: 'Desktop automation rollout', status: 'At risk', statusColor: 'var(--color-accent-orange)', bar: 'bg-[var(--color-accent-orange)]', width: '60%' },
            { name: 'Program Detection', desc: 'Auto-detect running programs', status: 'On track', statusColor: 'var(--color-accent-green)', bar: 'bg-[var(--color-accent-green)]', width: '70%' },
            { name: 'Federal ID to Replace Migration', desc: 'Legacy system migration', status: 'Blocked', statusColor: 'var(--color-accent-red)', bar: 'bg-[var(--color-accent-red)]', width: '40%' },
            { name: 'Linear Integration', desc: 'Connect Linear to Convene', status: 'On track', statusColor: 'var(--color-accent-green)', bar: 'bg-[var(--color-accent-blue)]', width: '90%' },
          ].map((row) => (
            <div key={row.name} className="flex items-center py-2 sm:py-2.5 border-t border-[var(--color-hairline)]">
              <div className="w-[120px] sm:w-[180px] flex items-center gap-1.5 sm:gap-2 shrink-0">
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: row.statusColor }}
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div>
                  <div className="text-[10px] sm:text-xs text-[var(--color-text-primary)] font-medium leading-tight">{row.name}</div>
                  <div className="hidden sm:block text-[10px] text-[var(--color-text-muted)]">{row.desc}</div>
                </div>
              </div>
              <div className="flex-1 min-w-0 flex items-center ml-1.5 sm:ml-2">
                <div className="flex-1 h-1.5 bg-[var(--color-surface-subtle)] rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${row.bar}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: row.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
                <span
                  className="hidden sm:inline-block ml-3 px-2 py-0.5 text-[9px] font-mono uppercase rounded"
                  style={{ color: row.statusColor, backgroundColor: `${row.statusColor}15` }}
                >
                  {row.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Ask Convene chat */}
        <div className="hidden md:flex w-full lg:w-[280px] p-3 lg:p-4 flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MessageSquare size={14} className="text-[var(--color-accent-blue)]" />
              <span className="text-xs font-medium text-[var(--color-text-primary)]">Ask Convene</span>
            </div>
            <span className="px-2 py-0.5 text-[9px] font-mono bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)] rounded">Slack</span>
          </div>
          {/* User message */}
          <div className="mb-3 px-3 py-2 bg-[var(--color-accent-blue)]/10 rounded-lg text-xs text-[var(--color-text-primary)]">
            What's blocking the Federal ID migration?
          </div>
          {/* Assistant reply */}
          <div className="mb-3 px-3 py-2 bg-[var(--color-surface-subtle)] rounded-lg">
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              The migration is blocked due to unapproved schema changes in the legacy database. Owner: @david.chen
            </p>
            <button className="flex items-center gap-1 mt-2 text-[10px] font-mono text-[var(--color-accent-blue)]">
              <ChevronDown size={10} /> Show reasoning
            </button>
          </div>
          {/* Citation */}
          <div className="px-3 py-2 border border-[var(--color-hairline)] rounded-lg mb-3">
            <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase mb-1">Source</div>
            <div className="text-xs text-[var(--color-text-primary)]">Replace Migration</div>
            <div className="text-[10px] text-[var(--color-text-secondary)] mt-1">3 signals · Updated 2h ago</div>
          </div>
          <p className="text-[10px] text-[var(--color-text-muted)] mt-auto">Convene analyzes context across your tools to provide answers.</p>
        </div>
      </div>

      {/* Bottom: Suggestions and input */}
      <div className="border-t border-[var(--color-hairline)] px-2 py-2 sm:px-4 sm:py-3">
        <div className="hidden sm:flex flex-wrap gap-2 mb-3">
          {['What are my top priorities this week?', 'Show me my stalled work', 'Draft the weekly update'].map((s) => (
            <button key={s} className="px-3 py-1.5 text-[10px] font-mono text-[var(--color-text-secondary)] border border-[var(--color-hairline)] rounded-full hover:border-[var(--color-accent-blue)] hover:text-[var(--color-text-primary)] transition-colors">
              {s}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask Convene anything"
            className="flex-1 px-3 py-2 bg-[var(--color-surface-subtle)] border border-[var(--color-hairline)] rounded-[6px] text-xs text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-blue)]"
            aria-label="Ask Convene anything"
          />
          <button className="p-2 bg-[var(--color-accent-blue)] rounded-[6px] hover:brightness-110 transition-all" aria-label="Send">
            <Send size={14} className="text-[var(--color-text-primary)]" />
          </button>
        </div>
      </div>
    </div>
  );
}
