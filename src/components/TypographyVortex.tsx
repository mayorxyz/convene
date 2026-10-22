import { useEffect, useRef } from 'react';

const GLYPH_CHARS = [
  '{', '}', '[', ']', '<', '>', '/', '|', '+', '-', '=', '*', '&', '#', '@', '?', '!', '~',
  '0', '1', 'S', 'E', 'R', 'O', 'T', 'P', 'M', 'A', 'G', 'N', 'L',
];
const RING_COUNT = 7;
const BASE_GLYPHS_PER_RING = 18;

interface Glyph {
  char: string;
  ring: number;
  angle: number;
  baseOpacity: number;
  currentOpacity: number;
  dissolving: boolean;
  dissolveProgress: number;
  isBlue: boolean;
  size: number;
  dx: number;
  dy: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

interface Suction {
  active: boolean;
  x: number;
  y: number;
  start: number;
}

export interface TypographyVortexProps {
  speed?: number;
  opacity?: number;
  dissolveRadius?: number;
  particleAmount?: number;
  suctionDuration?: number;
  ringGrowth?: number;
}

export default function TypographyVortex({
  speed = 1.85,
  opacity = 1.0,
  dissolveRadius = 1.0,
  particleAmount = 1.0,
  suctionDuration = 1100,
  ringGrowth = 1.21,
}: TypographyVortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const propsRef = useRef({ speed, opacity, dissolveRadius, particleAmount, suctionDuration, ringGrowth });
  propsRef.current = { speed, opacity, dissolveRadius, particleAmount, suctionDuration, ringGrowth };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const glyphCache = new Map<string, HTMLCanvasElement>();
    
    // Read colors from CSS variables
    const getColors = () => {
      const styles = getComputedStyle(document.documentElement);
      return {
        glyph: styles.getPropertyValue('--color-vortex-glyph').trim() || 'rgba(255, 255, 255, 0.12)',
        glyphBright: styles.getPropertyValue('--color-vortex-glyph-bright').trim() || 'rgba(255, 255, 255, 0.35)',
        accentBlue: styles.getPropertyValue('--color-accent-blue').trim() || '#2F6BFF',
        particle: styles.getPropertyValue('--color-vortex-particle').trim() || 'rgba(255, 255, 255, 0.6)',
      };
    };
    
    let colors = getColors();

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      colors = getColors();
      glyphCache.clear(); // Clear cache to redraw with new colors
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const state = {
      glyphs: [] as Glyph[],
      particles: [] as Particle[],
      pointer: { x: -9999, y: -9999 },
      suction: { active: false, x: 0, y: 0, start: 0 } as Suction,
      time: 0,
      lastTime: performance.now(),
      running: true,
      width: 0,
      height: 0,
    };

    function getGlyphCanvas(char: string, size: number, color: string): HTMLCanvasElement {
      const key = `${char}-${size}-${color}`;
      const cached = glyphCache.get(key);
      if (cached) return cached;
      const c = document.createElement('canvas');
      const pad = size * 0.4;
      const w = size * 1.2 + pad * 2;
      const h = size * 1.4 + pad * 2;
      c.width = Math.ceil(w * dpr);
      c.height = Math.ceil(h * dpr);
      const cx = c.getContext('2d')!;
      cx.scale(dpr, dpr);
      cx.font = `500 ${size}px "JetBrains Mono", ui-monospace, monospace`;
      cx.fillStyle = color;
      cx.textAlign = 'center';
      cx.textBaseline = 'middle';
      cx.fillText(char, w / 2, h / 2);
      // Store logical size on canvas
      (c as any)._logicalWidth = w;
      (c as any)._logicalHeight = h;
      glyphCache.set(key, c);
      return c;
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      state.width = rect.width;
      state.height = rect.height;
      canvas!.width = Math.ceil(rect.width * dpr);
      canvas!.height = Math.ceil(rect.height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      glyphCache.clear();
      initGlyphs();
    }

    function initGlyphs() {
      const w = state.width;
      const h = state.height;
      const maxR = Math.min(w, h) * 0.48;
      state.glyphs = [];
      for (let r = 0; r < RING_COUNT; r++) {
        const count = BASE_GLYPHS_PER_RING + r * 5;
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2 + Math.random() * 0.1;
          const isBlue = Math.random() < 0.07;
          state.glyphs.push({
            char: GLYPH_CHARS[Math.floor(Math.random() * GLYPH_CHARS.length)],
            ring: r,
            angle,
            baseOpacity: 0.12 + Math.random() * 0.23,
            currentOpacity: 1,
            dissolving: false,
            dissolveProgress: 0,
            isBlue,
            size: 11 + Math.random() * 7,
            dx: 0,
            dy: 0,
          });
        }
      }
      state.particles = [];
    }

    resize();

    let rafId = 0;
    function animate(now: number) {
      if (!state.running) return;
      const p = propsRef.current;
      const dt = Math.min(now - state.lastTime, 50);
      state.lastTime = now;
      state.time += dt;

      const w = state.width;
      const h = state.height;
      if (w === 0 || h === 0) {
        rafId = requestAnimationFrame(animate);
        return;
      }
      const cx = w / 2;
      const cy = h / 2;
      const maxR = Math.min(w, h) * 0.48;

      ctx!.clearRect(0, 0, w, h);

      const dissolveR = p.dissolveRadius * 90;
      const dissolveRSq = dissolveR * dissolveR;

      // Update & draw glyphs
      for (let gi = 0; gi < state.glyphs.length; gi++) {
        const g = state.glyphs[gi];

        // Ring rotation (alternating direction)
        const dir = g.ring % 2 === 0 ? 1 : -1;
        const ringSpeed = p.speed * 0.00008 * dir * (1 + g.ring * 0.18);
        g.angle += ringSpeed * dt;

        // Ring radius with growth oscillation
        const baseRadius = (maxR / RING_COUNT) * (g.ring + 0.8);
        const growth = Math.sin(state.time * 0.00025 + g.ring * 0.9) * 12 * p.ringGrowth;
        const radius = baseRadius + growth;

        // Base position
        const baseX = cx + Math.cos(g.angle) * radius;
        const baseY = cy + Math.sin(g.angle) * radius;
        const x = baseX + g.dx;
        const y = baseY + g.dy;

        // Pointer dissolve check
        if (!g.dissolving) {
          const pdx = x - state.pointer.x;
          const pdy = y - state.pointer.y;
          const pDistSq = pdx * pdx + pdy * pdy;
          if (pDistSq < dissolveRSq) {
            g.dissolving = true;
            g.dissolveProgress = 0;
            // Emit particles
            const count = Math.max(1, Math.floor(4 * p.particleAmount));
            for (let pi = 0; pi < count; pi++) {
              const angle = Math.random() * Math.PI * 2;
              const speed = 0.5 + Math.random() * 1.5;
              state.particles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1,
                maxLife: 0.8 + Math.random() * 0.6,
                color: g.isBlue ? colors.accentBlue : colors.particle,
                size: 1 + Math.random() * 1.8,
              });
            }
          }
        }

        // Dissolve progression
        if (g.dissolving) {
          g.dissolveProgress += dt * 0.0018;
          if (g.dissolveProgress >= 1) {
            g.dissolving = false;
            g.dissolveProgress = 0;
            g.angle = Math.random() * Math.PI * 2;
            g.char = GLYPH_CHARS[Math.floor(Math.random() * GLYPH_CHARS.length)];
            g.baseOpacity = 0.12 + Math.random() * 0.23;
          }
        }

        // Suction force
        if (state.suction.active) {
          const elapsed = now - state.suction.start;
          if (elapsed < p.suctionDuration) {
            const progress = elapsed / p.suctionDuration;
            // Bell curve: peaks at middle
            const strength = Math.sin(progress * Math.PI) * 0.35;
            const sdx = state.suction.x - baseX;
            const sdy = state.suction.y - baseY;
            g.dx += sdx * strength * 0.015;
            g.dy += sdy * strength * 0.015;
          } else {
            state.suction.active = false;
          }
        }

        // Ease displacement back to zero
        g.dx *= 0.9;
        g.dy *= 0.9;

        // Compute draw opacity
        let drawAlpha = g.baseOpacity;
        if (g.dissolving) {
          drawAlpha *= 1 - g.dissolveProgress;
        }
        drawAlpha *= p.opacity;
        if (drawAlpha < 0.01) continue;

        const color = g.isBlue ? colors.accentBlue : colors.glyphBright;
        const glyphCanvas = getGlyphCanvas(g.char, g.size, color);
        const lw = (glyphCanvas as any)._logicalWidth;
        const lh = (glyphCanvas as any)._logicalHeight;

        ctx!.globalAlpha = drawAlpha;
        ctx!.drawImage(glyphCanvas, x - lw / 2, y - lh / 2, lw, lh);
      }

      // Update & draw particles
      ctx!.globalAlpha = 1;
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const pt = state.particles[i];
        pt.life -= dt * 0.001 / pt.maxLife;
        if (pt.life <= 0) {
          state.particles.splice(i, 1);
          continue;
        }

        // Suction on particles
        if (state.suction.active) {
          const sdx = state.suction.x - pt.x;
          const sdy = state.suction.y - pt.y;
          pt.vx += sdx * 0.0015;
          pt.vy += sdy * 0.0015;
        }

        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.vx *= 0.97;
        pt.vy *= 0.97;

        const alpha = pt.life * p.opacity;
        ctx!.globalAlpha = alpha;
        ctx!.fillStyle = pt.color;
        ctx!.beginPath();
        ctx!.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;

      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);

    // Event handlers
    function onPointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      state.pointer.x = e.clientX - rect.left;
      state.pointer.y = e.clientY - rect.top;
    }
    function onPointerLeave() {
      state.pointer.x = -9999;
      state.pointer.y = -9999;
    }
    function onClick(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      state.suction.active = true;
      state.suction.x = e.clientX - rect.left;
      state.suction.y = e.clientY - rect.top;
      state.suction.start = performance.now();
    }
    function onResize() {
      resize();
    }

    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerleave', onPointerLeave);
    canvas.addEventListener('click', onClick);
    window.addEventListener('resize', onResize);

    return () => {
      state.running = false;
      cancelAnimationFrame(rafId);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      canvas.removeEventListener('click', onClick);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      glyphCache.clear();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block"
      style={{ background: 'transparent' }}
      aria-hidden="true"
    />
  );
}
