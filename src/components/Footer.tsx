import { Link } from 'react-router-dom';
import { LogoMark } from './Nav';
import { ThemeSegmentedControl } from './ThemeSegmentedControl';

const footerLinks = [
  { label: 'Coordination', num: '01', to: '/how-it-works' },
  { label: 'How It Works', num: '02', to: '/how-it-works' },
  { label: 'Why Convene', num: '03', to: '/why-convene' },
  { label: 'Use Cases', num: '04', to: '/use-cases' },
];

const smallLinks = [
  { label: 'SECURITY', to: '/security' },
  { label: 'PRIVACY POLICY', to: '/privacy' },
  { label: 'TERMS OF USE', to: '/terms' },
  { label: 'RESOURCES', to: '/resources' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-hairline)] pt-16 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo + description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <LogoMark size={36} />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border border-[var(--color-accent-green)] flex items-center justify-center bg-[var(--color-base)]">
                  <span className="text-[5px] font-mono text-[var(--color-accent-green)]">✓</span>
                </div>
              </div>
              <span className="font-mono text-[10px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">SOC 2</span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Built for the next generation of engineering teams. Where human expertise defines direction and AI accelerates execution.
            </p>
          </div>

          {/* Column 2: Large links */}
          <div>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="flex items-center justify-between group"
                >
                  <span className="text-xl md:text-[28px] font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-blue)] transition-colors">
                    {link.label}
                  </span>
                  <span className="font-mono text-xs text-[var(--color-text-muted)]">{link.num}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Small links */}
          <div>
            <div className="space-y-3">
              {smallLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact + social */}
          <div>
            <div className="mb-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-2">For a Partnership:</p>
              <a href="mailto:jake@convene.ai" className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent-blue)] transition-colors">
                jake@convene.ai
              </a>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm">🇺🇸</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-text-muted)]">
                PROUDLY BUILT FOR ENGINEERS IN NYC
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://x.com/mayor_1_7" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[var(--color-hairline)] flex items-center justify-center hover:border-[var(--color-accent-blue)] transition-colors" aria-label="X (Twitter)">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-text-primary)">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/babalola-mayor-a819742a0/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[var(--color-hairline)] flex items-center justify-center hover:border-[var(--color-accent-blue)] transition-colors" aria-label="LinkedIn">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-text-primary)">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <ThemeSegmentedControl />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-hairline)] pt-6">
          <p className="font-mono text-[10px] text-[var(--color-text-muted)] text-center">
            © {new Date().getFullYear()} Convene, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
