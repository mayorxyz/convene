import { useState } from 'react';
import PageShell, { PageHero } from '../components/PageShell';
import { Reveal, Eyebrow, FormField, SelectField } from '../components/shared';
import VortexBackground from '../components/VortexBackground';

const roleOptions = [
  { value: 'em', label: 'Engineering Manager' },
  { value: 'pm', label: 'Product Manager' },
  { value: 'tpm', label: 'Technical Program Manager' },
  { value: 'leadership', label: 'Leadership' },
  { value: 'other', label: 'Other' },
];

export default function EarlyAccess() {
  const [form, setForm] = useState({ email: '', company: '', role: '', notify: false });
  const [submitted, setSubmitted] = useState(false);
  const [code] = useState(() => 'SR-' + Math.random().toString(36).substring(2, 8).toUpperCase());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.email && form.email.includes('@')) {
      setSubmitted(true);
    }
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="EARLY ACCESS"
        title="Be first to run your programs on Convene"
        paragraph="Join the early access program. Get priority onboarding, founding pricing, and a direct line to our team."
        outlinedWord="EA"
        background={
          <>
            <VortexBackground opacity={0.6} />
            <div
              className="absolute inset-0 z-[5] pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, var(--color-overlay-strong) 0%, var(--color-overlay-mid) 40%, transparent 75%)`,
              }}
              aria-hidden="true"
            />
          </>
        }
      />

      <section className="py-12 px-6">
        <div className="max-w-[600px] mx-auto">
          <Reveal>
            {submitted ? (
              <div className="p-8 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-accent-green)]/20 text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent-green)]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">You're on the list</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">We will reach out when it is your turn.</p>
                <div className="font-mono text-sm text-[var(--color-accent-blue)]">Confirmation: {code}</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)]">
                <FormField label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@company.com" required />
                <FormField label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} placeholder="Acme Inc" />
                <SelectField label="Role" value={form.role} onChange={(v) => setForm({ ...form, role: v })} options={roleOptions} />

                <label className="flex items-center gap-3 mb-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.notify}
                    onChange={(e) => setForm({ ...form, notify: e.target.checked })}
                    className="w-4 h-4 rounded border-[var(--color-hairline)] bg-transparent text-[var(--color-accent-blue)] focus:ring-[var(--color-accent-blue)]"
                  />
                  <span className="text-sm text-[var(--color-text-secondary)]">Notify me about product updates</span>
                </label>

                <button type="submit" className="w-full px-7 py-3.5 bg-[var(--color-accent-blue)] text-white text-sm font-semibold rounded-[6px] hover:brightness-110 hover:-translate-y-px transition-all">
                  Get Early Access
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Priority onboarding', desc: 'Get set up first with dedicated support from our team.' },
                { title: 'Founding pricing', desc: 'Lock in early access pricing before general availability.' },
                { title: 'Direct line to the team', desc: 'Feedback goes directly to product. Shape the roadmap.' },
              ].map((b) => (
                <div key={b.title} className="crosshair-card p-6 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)]">
                  <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">{b.title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
