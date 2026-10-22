import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogoMark } from '../components/Nav';
import { FormField, PasswordField } from '../components/shared';
import { siteConfig } from '../lib/site';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toast, setToast] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToast('Demo environment: sign-in is disabled.');
    setTimeout(() => setToast(''), 4000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-base)] text-[var(--color-text-primary)] grid grid-cols-1 lg:grid-cols-2">
      {/* Toast */}
      {toast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-[var(--color-accent-red)] text-white text-sm rounded-[6px] shadow-lg">
          {toast}
        </div>
      )}

      {/* Left: Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-[400px]">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <LogoMark size={32} />
            <span className="font-mono text-sm font-medium text-[var(--color-text-primary)]">convene</span>
          </Link>

          <h1 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">Sign in to Convene</h1>

          {/* OAuth buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-[var(--color-elevated)] border border-[var(--color-hairline)] rounded-[6px] text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-card)] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-[var(--color-elevated)] border border-[var(--color-hairline)] rounded-[6px] text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-card)] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#00A4EF"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/></svg>
              Continue with Microsoft
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-[var(--color-elevated)] border border-[var(--color-hairline)] rounded-[6px] text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-card)] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-primary)" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Continue with SSO
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-[1px] bg-[var(--color-surface-muted)]" />
            <span className="font-mono text-[10px] uppercase text-[var(--color-text-muted)]">OR</span>
            <div className="flex-1 h-[1px] bg-[var(--color-surface-muted)]" />
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit}>
            <FormField label="Email" type="email" value={email} onChange={setEmail} placeholder="you@company.com" />
            <PasswordField label="Password" value={password} onChange={setPassword} placeholder="••••••••" />

            <div className="flex items-center justify-between mb-6">
              <div />
              <a href="#" className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">Forgot password?</a>
            </div>

            <button type="submit" className="w-full px-7 py-3.5 bg-[var(--color-accent-blue)] text-white text-sm font-semibold rounded-[6px] hover:brightness-110 hover:-translate-y-px transition-all">
              Sign In
            </button>
          </form>

          <p className="text-xs text-[var(--color-text-muted)] text-center mt-6">
            No account? <Link to={siteConfig.demoUrl} className="text-[var(--color-accent-blue)] hover:text-[var(--color-text-primary)] transition-colors">Book a demo</Link>
          </p>
        </div>
      </div>

      {/* Right: Dark panel */}
      <div className="hidden lg:flex items-center justify-center p-12 bg-[var(--color-elevated)] relative overflow-hidden">
        {/* Rotating ring */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full border border-[var(--color-hairline)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full border border-[var(--color-hairline)]"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative text-center">
          <LogoMark size={64} />
          <p className="text-lg text-[var(--color-text-secondary)] mt-8 max-w-[300px] leading-relaxed italic">
            "Where human expertise defines direction and AI accelerates execution."
          </p>
        </div>
      </div>
    </div>
  );
}
