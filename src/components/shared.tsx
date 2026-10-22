import { useState, useRef, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ChevronDown, Check, Minus, Eye, EyeOff } from 'lucide-react';

// Reveal animation wrapper
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Eyebrow label
export function Eyebrow({ children, color = 'blue' }: { children: ReactNode; color?: 'blue' | 'muted' }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className={`w-2 h-2 ${color === 'blue' ? 'bg-[var(--color-accent-blue)]' : 'bg-[var(--color-text-muted)]'}`} />
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-accent-blue)]">{children}</span>
    </div>
  );
}

// Count-up stat
export function StatBlock({ value, suffix, label }: { value: string; suffix?: string; label: string }) {
  return (
    <div className="text-center px-4 py-4">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] font-mono whitespace-nowrap">
        {value}{suffix && <span className="text-[var(--color-accent-blue)]">{suffix}</span>}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mt-2 max-w-[200px] mx-auto">{label}</div>
    </div>
  );
}

// Chip component
export function Chip({ children, active = false, onClick }: { children: ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-[11px] font-mono rounded-full border transition-all ${
        active
          ? 'bg-[var(--color-accent-blue)] border-[var(--color-accent-blue)] text-white'
          : 'border-[var(--color-hairline)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-blue)] hover:text-[var(--color-text-primary)]'
      }`}
    >
      {children}
    </button>
  );
}

// Form field
export function FormField({ label, type = 'text', value, onChange, error, placeholder, required }: {
  label: string; type?: string; value: string; onChange: (v: string) => void; error?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">{label}{required && <span className="text-[var(--color-accent-red)] ml-1">*</span>}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-3 py-2.5 bg-[var(--color-card)] border rounded-[6px] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors ${
          error ? 'border-[var(--color-accent-red)]' : 'border-[var(--color-hairline)]'
        }`}
      />
      {error && <p className="text-xs text-[var(--color-accent-red)] mt-1">{error}</p>}
    </div>
  );
}

// Select field
export function SelectField({ label, value, onChange, options, required }: {
  label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[]; required?: boolean;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">{label}{required && <span className="text-[var(--color-accent-red)] ml-1">*</span>}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 bg-[var(--color-card)] border border-[var(--color-hairline)] rounded-[6px] text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors appearance-none"
      >
        <option value="" className="bg-[var(--color-elevated)]">Select...</option>
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-[var(--color-elevated)]">{o.label}</option>
        ))}
      </select>
    </div>
  );
}

// Textarea field
export function TextAreaField({ label, value, onChange, placeholder, rows = 4 }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-3 py-2.5 bg-[var(--color-card)] border border-[var(--color-hairline)] rounded-[6px] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors resize-none"
      />
    </div>
  );
}

// Accordion
export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="border border-[var(--color-hairline)] rounded-[12px] overflow-hidden">
      {items.map((item, i) => (
        <div key={i} className="border-b border-[var(--color-hairline)] last:border-b-0">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[var(--color-surface-subtle)] transition-colors"
            aria-expanded={openIndex === i}
          >
            <span className="text-sm font-medium text-[var(--color-text-primary)] pr-4">{item.q}</span>
            <ChevronDown size={16} className={`text-[var(--color-text-muted)] shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// Chat mock
export function ChatMock({ prompts }: { prompts: { q: string; a: string }[] }) {
  const [activePrompt, setActivePrompt] = useState(0);
  return (
    <div className="bg-[var(--color-card)] rounded-[8px] p-4 border border-[var(--color-hairline)]">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-4 h-4 rounded bg-[var(--color-accent-blue)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[var(--color-text-primary)] rounded-sm" />
        </div>
        <span className="text-[10px] font-medium text-[var(--color-text-primary)]">Ask Convene</span>
      </div>
      <div className="mb-3 px-3 py-2 bg-[var(--color-accent-blue)]/10 rounded-lg text-xs text-[var(--color-text-primary)]">
        {prompts[activePrompt].q}
      </div>
      <div className="px-3 py-2 bg-[var(--color-surface-subtle)] rounded-lg mb-3">
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{prompts[activePrompt].a}</p>
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {prompts.map((p, i) => (
          <button
            key={i}
            onClick={() => setActivePrompt(i)}
            className={`px-2 py-1 text-[9px] font-mono rounded border transition-all ${
              i === activePrompt ? 'border-[var(--color-accent-blue)] text-[var(--color-accent-blue)]' : 'border-[var(--color-hairline)] text-[var(--color-text-muted)] hover:border-[var(--color-hairline)]'
            }`}
          >
            {p.q.slice(0, 30)}...
          </button>
        ))}
      </div>
    </div>
  );
}

// Timeline
export function Timeline({ stops }: { stops: { time: string; label: string }[] }) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {stops.map((stop, i) => (
        <div key={i} className="flex-1 relative">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent-blue)]" />
            <span className="font-mono text-[10px] text-[var(--color-accent-blue)] uppercase">{stop.time}</span>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{stop.label}</p>
          {i < stops.length - 1 && (
            <div className="hidden md:block absolute top-1 right-0 w-4 h-[1px] bg-[var(--color-hairline)]" />
          )}
        </div>
      ))}
    </div>
  );
}

// Password field with toggle
export function PasswordField({ label, value, onChange, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="mb-4">
      <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">{label}</label>
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2.5 bg-[var(--color-card)] border border-[var(--color-hairline)] rounded-[6px] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors pr-10"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
          aria-label={show ? 'Hide password' : 'Show password'}
        >
          {show ? <EyeOff size={14} /> : <Eye size={14} />}
        </button>
      </div>
    </div>
  );
}

// Scroll to top on route change
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Check/Dash icon
export function StatusIcon({ value }: { value: string }) {
  if (value === '✓') return <Check size={14} className="text-[var(--color-accent-green)]" />;
  if (value === '—') return <Minus size={14} className="text-[var(--color-text-muted)]" />;
  return <span className="text-xs text-[var(--color-text-secondary)]">{value}</span>;
}

// Section divider
export function SectionDivider() {
  return <div className="border-t border-[var(--color-hairline)] my-0" />;
}
