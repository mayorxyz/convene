import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-base)] text-[var(--color-text-primary)] relative">
      <div className="fixed top-0 left-6 w-[1px] h-full bg-[var(--color-guide-line)] pointer-events-none z-0 hidden lg:block" />
      <div className="fixed top-0 right-6 w-[1px] h-full bg-[var(--color-guide-line)] pointer-events-none z-0 hidden lg:block" />
      <Nav />
      <main className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center">
          <div className="text-[clamp(100px,20vw,250px)] font-bold text-stroke-blue leading-none select-none opacity-40 mb-4">
            404
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-4">Page not found</h1>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block px-7 py-3.5 bg-[var(--color-accent-blue)] text-white text-sm font-semibold rounded-[6px] hover:brightness-110 hover:-translate-y-px transition-all"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
