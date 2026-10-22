# Convene — TPM Agents

Marketing website for Convene, an AI program-coordination product.

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS v4
- React Router v6 (client-side routing)
- Framer Motion (scroll/reveal animations)
- lucide-react (icons)
- Inter + JetBrains Mono fonts (Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

## Build

```bash
npm run build
```

Output is in `dist/`.

## Type Checking

```bash
npm run typecheck
```

## Links


## Route Map

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, features, use cases |
| `/how-it-works` | How It Works | 4-step process, integrations, FAQ |
| `/why-convene` | Why Convene | Pillars, comparison, stats, testimonials |
| `/use-cases` | Use Cases Index | Role overview, program types |
| `/use-cases/em` | Engineering Manager | EM-specific workflows |
| `/use-cases/pm` | Product Manager | PM-specific workflows |
| `/use-cases/tpm` | Technical Program Manager | TPM-specific workflows |
| `/use-cases/leadership` | Leadership | Executive-specific workflows |
| `/resources` | Resources | Blog, changelog, glossary, docs |
| `/resources/[slug]` | Article | Individual blog post |
| `/demo` | Book a Demo | Demo request form |
| `/early-access` | Early Access | Early access signup |
| `/signin` | Sign In | Authentication page |
| `/security` | Security | Security controls, data flow |
| `/privacy` | Privacy Policy | Full privacy policy |
| `/terms` | Terms of Use | Full terms of service |
| `*` | 404 | Not found page |

## Project Structure

```
src/
├── App.tsx                    # Router setup
├── main.tsx                   # Entry point
├── index.css                  # Tailwind theme + global styles
├── lib/
│   ├── site.ts               # Brand config (names, URLs)
│   └── content.ts            # All mock data (typed)
├── pages/
│   ├── Home.tsx              # Home page
│   ├── HowItWorks.tsx        # /how-it-works
│   ├── WhyConvene.tsx        # /why-convene
│   ├── UseCases.tsx          # /use-cases + /use-cases/:role
│   ├── Resources.tsx         # /resources + /resources/:slug
│   ├── Demo.tsx              # /demo
│   ├── EarlyAccess.tsx       # /early-access
│   ├── SignIn.tsx            # /signin
│   ├── Security.tsx          # /security
│   ├── Legal.tsx             # /privacy + /terms
│   └── NotFound.tsx          # 404
└── components/
    ├── Nav.tsx                # Navigation + logo mark
    ├── Footer.tsx             # Footer
    ├── Hero.tsx               # Hero section
    ├── DashboardMock.tsx      # Product dashboard UI
    ├── LogoRow.tsx            # Logo row
    ├── TeamCredentials.tsx    # Team section
    ├── Bottleneck.tsx         # Bottleneck section
    ├── Solution.tsx           # Solution section
    ├── CoreFeatures.tsx       # Feature cards
    ├── ROI.tsx                # ROI section
    ├── CoordinationLayer.tsx  # Coordination layer
    ├── UseCases.tsx           # Use cases (home)
    ├── FinalCTA.tsx           # Final CTA
    ├── PageShell.tsx          # Shared page template
    ├── shared.tsx             # Reusable components
    └── Reveal.tsx             # Re-export for compat
```

## Design Tokens

| Token | Value |
|-------|-------|
| Background base | `#141414` |
| Elevated surface | `#1c1c1c` |
| Card surface | `#202020` |
| Accent blue | `#2F6BFF` |
| Accent orange | `#FF7A1A` |
| Accent red | `#E5484D` |
| Accent green | `#3DD68C` |
| Text primary | `#FFFFFF` |
| Text secondary | `#9A9A9A` |
| Text muted | `#6B6B6B` |

## Theming

The site supports both light and dark themes with automatic system preference detection.

### Theme System

- **ThemeProvider**: React context that manages theme state (`light`, `dark`, or `system`)
- **Theme Toggle**: Located in the navigation bar (desktop and mobile)
- **Keyboard Shortcut**: Press `T` to toggle between light and dark themes
- **Persistence**: Theme preference is saved to `localStorage`
- **No Flash**: Inline script in `index.html` applies theme before first paint

### CSS Variables

All colors are defined as CSS custom properties in `src/index.css`:

```css
:root {
  /* Dark theme (default) */
  --color-base: #141414;
  --color-elevated: #1c1c1c;
  --color-card: #202020;
  --color-hairline: rgba(255, 255, 255, 0.08);
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #9A9A9A;
  --color-text-muted: #6B6B6B;
  --color-accent-blue: #2F6BFF;
  /* ... more variables */
}

:root[data-theme="light"] {
  /* Light theme overrides */
  --color-base: #F8F8F6;
  --color-elevated: #FFFFFF;
  --color-card: #F1F1EE;
  --color-hairline: rgba(0, 0, 0, 0.10);
  --color-text-primary: #111111;
  /* ... more variables */
}
```

### Using Theme Variables

In components, use CSS variables instead of hard-coded colors:

```tsx
// ✅ Good - uses CSS variables
<div className="bg-[var(--color-base)] text-[var(--color-text-primary)]">

// ❌ Bad - hard-coded colors
<div className="bg-[#141414] text-white">
```

### Adding a New Color

1. Add the CSS variable to both `:root` and `:root[data-theme="light"]` in `src/index.css`
2. Use the variable in components with `var(--color-your-new-color)`
3. Ensure sufficient contrast in both themes (WCAG AA: 4.5:1 for text)

### Changing the Default Theme

Edit `src/components/ThemeProvider.tsx`:

```tsx
const [theme, setThemeState] = useState<Theme>(() => {
  if (typeof window === 'undefined') return 'dark'; // Change to 'light' or 'system'
  return (localStorage.getItem('theme') as Theme) || 'system'; // Change default
});
```

### Theme Components

- **ThemeToggle**: Sun/moon icon button in navigation
- **ThemeSegmentedControl**: Light/Dark/System selector in footer
- **ThemeProvider**: Context provider wrapping the app
- **useTheme**: Hook to access theme state and controls

### Canvas/SVG Theming

For canvas elements (like TypographyVortex), read computed CSS variables:

```tsx
const styles = getComputedStyle(document.documentElement);
const color = styles.getPropertyValue('--color-accent-blue').trim();
```

The TypographyVortex component automatically updates when the theme changes via MutationObserver.

## Accessibility

- Semantic HTML throughout
- Alt text on all images
- Focus rings (2px blue offset) on interactive elements
- Keyboard-navigable navigation
- Respects `prefers-reduced-motion`
- ARIA labels on icon buttons
- Scroll to top on route change

## SEO

- Per-page metadata (title, description)
- Open Graph tags
- sitemap.xml generated
- robots.txt configured
- SVG favicon from logo mark
