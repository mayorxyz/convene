import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageShell, { PageHero } from '../components/PageShell';
import { Reveal, Eyebrow, Chip } from '../components/shared';
import { posts, changelog, glossary } from '../lib/content';

const categories = ['All', 'Guides', 'Playbooks', 'Product', 'Security', 'Changelog'] as const;

export function ResourcesIndex() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState('');

  const filteredPosts = activeFilter === 'All' ? posts : posts.filter((p) => p.category === activeFilter);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setEmailError('Please enter a valid email');
      return;
    }
    setEmailError('');
    setSubscribed(true);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="RESOURCES"
        title="Playbooks for coordinating humans and agents"
        paragraph="Guides, playbooks, and product updates to help your team run programs with clarity, speed, and trust."
        outlinedWord="RES"
      />

      {/* Featured post */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Link to={`/resources/${posts[0].slug}`} className="block grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)] hover:border-[var(--color-accent-blue)]/30 transition-colors">
              {/* Abstract dot-grid SVG */}
              <div className="aspect-video lg:aspect-auto bg-[var(--color-elevated)] rounded-[8px] flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 300 200" className="w-full h-full">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <circle key={i} cx={20 + (i % 10) * 30} cy={20 + Math.floor(i / 10) * 35} r={2 + Math.random() * 3} fill={i % 5 === 0 ? 'var(--color-accent-blue)' : 'var(--color-surface-muted)'} opacity={0.3 + Math.random() * 0.7} />
                  ))}
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-mono text-[10px] uppercase text-[var(--color-accent-blue)] mb-2">FEATURED · {posts[0].category}</span>
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)] mb-3">{posts[0].title}</h2>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">{posts[0].excerpt}</p>
                <div className="flex items-center gap-3 font-mono text-[10px] text-[var(--color-text-muted)]">
                  <span>{posts[0].readTime} min read</span>
                  <span>·</span>
                  <span>{posts[0].date}</span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <Chip key={cat} active={activeFilter === cat} onClick={() => setActiveFilter(cat)}>{cat}</Chip>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link to={`/resources/${post.slug}`} className="block p-5 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)] hover:border-[var(--color-accent-blue)]/30 transition-colors h-full">
                  <span className="font-mono text-[9px] uppercase text-[var(--color-accent-blue)]">{post.category}</span>
                  <h3 className="text-sm font-medium text-[var(--color-text-primary)] mt-2 mb-2">{post.title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center gap-3 font-mono text-[9px] text-[var(--color-text-muted)]">
                    <span>{post.readTime} min</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>CHANGELOG</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">What's new</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4">
              {changelog.map((entry) => (
                <div key={entry.version} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-3 border-b border-[var(--color-hairline)]">
                  <span className="font-mono text-[10px] text-[var(--color-text-muted)] shrink-0 w-24">{entry.date}</span>
                  <span className="px-2 py-0.5 text-[9px] font-mono bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)] rounded shrink-0 w-16 text-center">{entry.version}</span>
                  <span className="text-sm text-[var(--color-text-secondary)]">{entry.summary}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Glossary */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>GLOSSARY</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">Key terms</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {glossary.map((term) => (
                <div key={term.term} className="py-3 border-b border-[var(--color-hairline)]">
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">{term.term}</span>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">{term.definition}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Docs Quick Links */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <Eyebrow>DOCS QUICK LINKS</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-8">Get started</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Getting started', 'Integrations', 'Permissions', 'API'].map((doc) => (
                <div key={doc} className="crosshair-card p-5 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)] hover:border-[var(--color-accent-blue)]/30 transition-colors cursor-pointer">
                  <h3 className="text-sm font-medium text-[var(--color-text-primary)]">{doc}</h3>
                  <p className="text-[10px] text-[var(--color-text-muted)] mt-1 font-mono uppercase">Documentation →</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-[120px] px-6 border-t border-[var(--color-hairline)]">
        <div className="max-w-[600px] mx-auto text-center">
          <Reveal>
            <Eyebrow>NEWSLETTER</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] mb-4">Stay in the loop</h2>
            <p className="text-sm text-[var(--color-text-secondary)] mb-6">Get the latest playbooks, product updates, and coordination insights.</p>
          </Reveal>
          <Reveal delay={0.1}>
            {subscribed ? (
              <div className="p-6 bg-[var(--color-accent-green)]/5 border border-[var(--color-accent-green)]/20 rounded-[12px]">
                <p className="text-sm text-[var(--color-accent-green)]">✓ Subscribed! Check your inbox for confirmation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                    placeholder="you@company.com"
                    className={`w-full px-4 py-3 bg-[var(--color-surface-subtle)] border rounded-[6px] text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-blue)] ${emailError ? 'border-[var(--color-accent-red)]' : 'border-[var(--color-hairline)]'}`}
                  />
                  {emailError && <p className="text-xs text-[var(--color-accent-red)] mt-1 text-left">{emailError}</p>}
                </div>
                <button type="submit" className="px-6 py-3 bg-[var(--color-accent-blue)] text-white text-sm font-semibold rounded-[6px] hover:brightness-110 transition-all shrink-0">
                  Subscribe
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

export function ResourceArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageShell>
        <div className="py-32 text-center">
          <h1 className="text-2xl text-[var(--color-text-primary)]">Article not found</h1>
          <Link to="/resources" className="text-[var(--color-accent-blue)] mt-4 inline-block">Back to Resources</Link>
        </div>
      </PageShell>
    );
  }

  // Extract headings for TOC
  const sections = post.content.split('\n## ').filter(Boolean);
  const headings = sections.map((s) => s.split('\n')[0]);

  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <PageShell>
      <article className="py-20 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sticky TOC */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <div className="font-mono text-[10px] uppercase text-[var(--color-text-muted)] mb-3">Contents</div>
                <nav className="space-y-2">
                  {headings.map((h, i) => (
                    <a key={i} href={`#section-${i}`} className="block text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors leading-relaxed">
                      {h}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article content */}
            <div className="lg:col-span-9">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] uppercase text-[var(--color-accent-blue)]">{post.category}</span>
                <span className="font-mono text-[10px] text-[var(--color-text-muted)]">{post.readTime} min read</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-[48px] font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] leading-tight mb-4">
                {post.title}
              </h1>

              <div className="flex items-center gap-3 mb-8 text-sm text-[var(--color-text-muted)]">
                <span>By {post.author}</span>
                <span>·</span>
                <span>{post.date}</span>
              </div>

              <div className="prose-custom">
                {sections.map((section, i) => {
                  const lines = section.split('\n');
                  const heading = lines[0];
                  const body = lines.slice(1).join('\n').trim();
                  const isPullQuote = body.includes('> "');

                  return (
                    <div key={i} id={`section-${i}`} className="mb-8">
                      <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">{heading}</h2>
                      {body.split('\n\n').map((para, j) => {
                        if (para.startsWith('> "')) {
                          return (
                            <blockquote key={j} className="border-l-2 border-[var(--color-accent-blue)] pl-4 my-4 italic text-[var(--color-text-secondary)]">
                              {para.replace('> ', '')}
                            </blockquote>
                          );
                        }
                        return <p key={j} className="text-[var(--color-text-secondary)] leading-relaxed mb-3">{para}</p>;
                      })}
                    </div>
                  );
                })}
              </div>

              {/* Figure */}
              <div className="my-8 p-6 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)]">
                <div className="aspect-[2/1] bg-[var(--color-elevated)] rounded-[8px] flex items-center justify-center mb-3">
                  <svg viewBox="0 0 400 200" className="w-full h-full p-2 sm:p-6 md:p-8">
                    <rect x="50" y="30" width="120" height="60" rx="4" fill="var(--color-accent-blue)" fillOpacity="0.1" stroke="var(--color-accent-blue)" strokeWidth="1" />
                    <rect x="230" y="30" width="120" height="60" rx="4" fill="var(--color-accent-green)" fillOpacity="0.1" stroke="var(--color-accent-green)" strokeWidth="1" />
                    <rect x="140" y="120" width="120" height="60" rx="4" fill="var(--color-accent-orange)" fillOpacity="0.1" stroke="var(--color-accent-orange)" strokeWidth="1" />
                    <line x1="110" y1="90" x2="200" y2="120" stroke="var(--color-stroke)" strokeWidth="1" />
                    <line x1="290" y1="90" x2="200" y2="120" stroke="var(--color-stroke)" strokeWidth="1" />
                    <text x="110" y="65" fill="var(--color-text-primary)" fontSize="14" textAnchor="middle">Program</text>
                    <text x="290" y="65" fill="var(--color-text-primary)" fontSize="14" textAnchor="middle">Agents</text>
                    <text x="200" y="155" fill="var(--color-text-primary)" fontSize="14" textAnchor="middle">Team</text>
                  </svg>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] text-center font-mono uppercase">Fig 1. Program coordination flow: tools feed agents, agents maintain state, team makes decisions.</p>
              </div>

              {/* Share row */}
              <div className="flex items-center gap-4 py-6 border-t border-[var(--color-hairline)]">
                <span className="font-mono text-[10px] uppercase text-[var(--color-text-muted)]">Share:</span>
                <button className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">X</button>
                <button className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">LinkedIn</button>
                <button className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">Copy link</button>
              </div>

              {/* Related posts */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Related</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedPosts.map((rp) => (
                    <Link key={rp.slug} to={`/resources/${rp.slug}`} className="p-4 bg-[var(--color-card)] rounded-[12px] border border-[var(--color-hairline)] hover:border-[var(--color-accent-blue)]/30 transition-colors">
                      <span className="font-mono text-[9px] uppercase text-[var(--color-accent-blue)]">{rp.category}</span>
                      <h4 className="text-xs font-medium text-[var(--color-text-primary)] mt-1">{rp.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
