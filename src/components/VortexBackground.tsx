import { lazy, Suspense, useEffect, useRef, useState } from 'react';

const TypographyVortex = lazy(() => import('./TypographyVortex'));

interface VortexBackgroundProps {
  opacity?: number;
}

function DotGridFallback() {
  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        background: `
          radial-gradient(circle, var(--color-crosshair) 1px, transparent 1px),
          linear-gradient(135deg, color-mix(in srgb, var(--color-accent-blue) 2%, transparent) 0%, transparent 50%)
        `,
        backgroundSize: '24px 24px, 100% 100%',
      }}
      aria-hidden="true"
    />
  );
}

export default function VortexBackground({ opacity = 1 }: VortexBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  // IntersectionObserver: load when within 200px of viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '200px',
        threshold: 0,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Check for reduced motion and small viewport
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const checkViewport = () => {
      setUseFallback(motionQuery.matches || window.innerWidth < 768);
    };

    checkViewport();
    motionQuery.addEventListener('change', checkViewport);
    window.addEventListener('resize', checkViewport);

    return () => {
      motionQuery.removeEventListener('change', checkViewport);
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-auto"
      aria-hidden="true"
    >
      {useFallback ? (
        <DotGridFallback />
      ) : isVisible ? (
        <Suspense fallback={<DotGridFallback />}>
          <TypographyVortex opacity={opacity} />
        </Suspense>
      ) : (
        <DotGridFallback />
      )}
    </div>
  );
}
