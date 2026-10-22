import { useState } from 'react';
import PageShell, { PageHero } from '../components/PageShell';
import { Reveal, Eyebrow, FormField, SelectField, TextAreaField, Chip } from '../components/shared';
import { integrations } from '../lib/content';
import { Link } from 'react-router-dom';

const roleOptions = [
  { value: 'em', label: 'Engineering Manager' },
  { value: 'pm', label: 'Product Manager' },
  { value: 'tpm', label: 'Technical Program Manager' },
  { value: 'leadership', label: 'Leadership' },
  { value: 'other', label: 'Other' },
];

const teamSizeOptions = [
  { value: '1-10', label: '1-10' },
  { value: '11-50', label: '11-50' },
  { value: '51-200', label: '51-200' },
  { value: '201-500', label: '201-500' },
  { value: '500+', label: '500+' },
];

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

export default function Demo() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', role: '', teamSize: '', tools: [] as string[], description: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !form.email.includes('@')) errs.email = 'Valid email is required';
    if (!form.company.trim()) errs.company = 'Company is required';
    if (!form.role) errs.role = 'Please select a role';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const toggleTool = (tool: string) => {
    setForm((prev) => ({
      ...prev,
      tools: prev.tools.includes(tool) ? prev.tools.filter((t) => t !== tool) : [...prev.tools, tool],
    }));
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="BOOK A DEMO"
        title="See your programs in one live view"
        paragraph="Schedule a 30-minute walkthrough with our team. We will show you how Convene works on your tools, your programs, and your team."
        outlinedWord="DEMO"
      />

      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div>
            <Reveal>
              {submitted ? (
                <div className="p-8 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-accent-green)]/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent-green)]/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Request received</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">We will reply within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)]">
                  <FormField label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} error={errors.name} placeholder="Jane Smith" required />
                  <FormField label="Work email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} error={errors.email} placeholder="jane@company.com" required />
                  <FormField label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} error={errors.company} placeholder="Acme Inc" required />
                  <SelectField label="Role" value={form.role} onChange={(v) => setForm({ ...form, role: v })} options={roleOptions} required />
                  <SelectField label="Team size" value={form.teamSize} onChange={(v) => setForm({ ...form, teamSize: v })} options={teamSizeOptions} />

                  <div className="mb-4">
                    <label className="block text-sm text-[var(--color-text-secondary)] mb-2">Tools you use</label>
                    <div className="flex flex-wrap gap-2">
                      {integrations.map((tool) => (
                        <Chip key={tool.name} active={form.tools.includes(tool.name)} onClick={() => toggleTool(tool.name)}>
                          {tool.name}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  <TextAreaField label="What do you want to coordinate?" value={form.description} onChange={(v) => setForm({ ...form, description: v })} placeholder="Tell us about your programs, teams, and goals..." />

                  <button type="submit" className="w-full px-7 py-3.5 bg-[var(--color-accent-blue)] text-white text-sm font-semibold rounded-[6px] hover:brightness-110 hover:-translate-y-px transition-all">
                    Book a Demo
                  </button>
                  <p className="text-[10px] text-[var(--color-text-muted)] text-center mt-3">
                    By submitting, you agree to our <Link to="/privacy" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">Privacy Policy</Link>.
                  </p>
                </form>
              )}
            </Reveal>
          </div>

          {/* Right: Info */}
          <div>
            <Reveal delay={0.1}>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">WHAT TO EXPECT</h3>
                <div className="space-y-4">
                  {[
                    '30-minute walkthrough on your tools',
                    'Live program catalog from your data',
                    'Q&A on security and access',
                    'Rollout plan for your team',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="font-mono text-[10px] text-[var(--color-accent-blue)] shrink-0">0{i + 1}/</span>
                      <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar mock */}
              <div className="p-5 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)] mb-8">
                <div className="text-xs font-mono text-[var(--color-text-muted)] uppercase mb-3">Available times — Tomorrow</div>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`px-3 py-2 text-xs rounded-[6px] border transition-all ${
                        selectedSlot === slot
                          ? 'bg-[var(--color-accent-blue)] border-[var(--color-accent-blue)] text-white'
                          : 'border-[var(--color-hairline)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-blue)]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="p-5 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)]">
                <span className="font-mono text-[9px] uppercase text-[var(--color-text-muted)] mb-2 block">SAMPLE TESTIMONIAL</span>
                <p className="text-sm text-[var(--color-text-primary)] italic leading-relaxed mb-3">"The demo showed us exactly what we needed. Within a week, we had our first program running on Convene."</p>
                <div className="text-xs text-[var(--color-text-muted)]">— Engineering Director, Sample Corp</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
