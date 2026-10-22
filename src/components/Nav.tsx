import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../lib/site';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

/* ==================== LOGO MARKS ==================== */

export function LogoMark({ size = 56, className }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 56 56" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`shrink-0 ${className || ''}`}
    >
      <circle cx="28" cy="28" r="26" stroke="var(--color-text-primary)" strokeWidth="1.5" fill="none" />
      <line x1="18" y1="5" x2="18" y2="51" stroke="var(--color-text-primary)" strokeWidth="1" opacity="0.6" />
      <line x1="22" y1="3" x2="22" y2="53" stroke="var(--color-text-primary)" strokeWidth="1" opacity="0.75" />
      <line x1="26" y1="2" x2="26" y2="54" stroke="var(--color-text-primary)" strokeWidth="1" opacity="0.9" />
      <line x1="30" y1="2" x2="30" y2="54" stroke="var(--color-text-primary)" strokeWidth="1" />
      <line x1="34" y1="3" x2="34" y2="53" stroke="var(--color-text-primary)" strokeWidth="1" opacity="0.9" />
      <line x1="38" y1="5" x2="38" y2="51" stroke="var(--color-text-primary)" strokeWidth="1" opacity="0.75" />
    </svg>
  );
}

export function LogoMarkSmall({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 28 28" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`shrink-0 ${className || ''}`}
    >
      <circle cx="14" cy="14" r="12" stroke="var(--color-text-primary)" strokeWidth="1" fill="none" />
      <line x1="9" y1="3" x2="9" y2="25" stroke="var(--color-text-primary)" strokeWidth="0.8" opacity="0.6" />
      <line x1="12" y1="2.5" x2="12" y2="25.5" stroke="var(--color-text-primary)" strokeWidth="0.8" opacity="0.8" />
      <line x1="15" y1="2" x2="15" y2="26" stroke="var(--color-text-primary)" strokeWidth="0.8" />
      <line x1="18" y1="2.5" x2="18" y2="25.5" stroke="var(--color-text-primary)" strokeWidth="0.8" opacity="0.8" />
      <line x1="21" y1="3" x2="21" y2="25" stroke="var(--color-text-primary)" strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}

/* ==================== MAIN NAV COMPONENT ==================== */

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Why Convene', to: '/why-convene' },
    { label: 'Use Cases', to: '/use-cases' },
    { label: 'Resources', to: '/resources' },
  ];

  const isActive = (to: string) =>
    location.pathname === to || location.pathname.startsWith(`${to}/`);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Floating Header Bar */}
      <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] sm:w-[calc(100%-48px)] max-w-[1200px]">
        <nav className="flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-[var(--color-overlay)]/85 backdrop-blur-md border border-[var(--color-hairline)] shadow-lg shadow-black/5 transition-all">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Convene home">
            <LogoMarkSmall size={26} className="group-hover:scale-105 transition-transform" />
            <span className="font-mono text-sm font-semibold tracking-wide text-[var(--color-text-primary)]">
              convene
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={handleNavClick}
                  className={`relative font-mono text-xs uppercase tracking-wider transition-colors py-1 ${
                    active
                      ? 'text-[var(--color-text-primary)] font-bold'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent-blue)] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3.5">
            <ThemeToggle />
            <Link
              to={siteConfig.signinUrl}
              className="font-mono text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors px-2 py-1"
            >
              Sign In
            </Link>
            <Link
              to={siteConfig.demoUrl}
              className="px-4 py-2 bg-[var(--color-accent-blue)] text-white text-xs font-semibold rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-sm"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg text-[var(--color-text-primary)] hover:bg-[var(--color-elevated)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Animated Full Screen Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[var(--color-base)]/98 backdrop-blur-xl flex flex-col justify-between px-6 pt-24 pb-8 overflow-y-auto md:hidden"
          >
            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-4 my-auto">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-2">
                NAVIGATION
              </span>
              {navLinks.map((link, i) => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={handleNavClick}
                    className={`flex items-center justify-between py-3 border-b border-[var(--color-hairline)] font-mono text-lg uppercase tracking-wider transition-colors ${
                      active ? 'text-[var(--color-accent-blue)] font-bold' : 'text-[var(--color-text-primary)]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[var(--color-text-muted)] font-normal">0{i + 1}/</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Action CTAs */}
            <div className="flex flex-col gap-3 pt-6 border-t border-[var(--color-hairline)]">
              <Link
                to={siteConfig.signinUrl}
                onClick={() => setMobileOpen(false)}
                className="w-full min-h-[46px] flex items-center justify-center font-mono text-sm text-[var(--color-text-primary)] bg-[var(--color-elevated)] border border-[var(--color-hairline)] rounded-xl hover:bg-[var(--color-card)] transition-colors"
              >
                Sign In
              </Link>
              <Link
                to={siteConfig.demoUrl}
                onClick={() => setMobileOpen(false)}
                className="w-full min-h-[46px] flex items-center justify-center font-mono text-sm font-semibold text-white bg-[var(--color-accent-blue)] rounded-xl shadow-md active:scale-[0.99] transition-transform"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}