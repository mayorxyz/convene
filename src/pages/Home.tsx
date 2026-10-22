import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TeamCredentials from '../components/TeamCredentials';
import Bottleneck from '../components/Bottleneck';
import Solution from '../components/Solution';
import CoreFeatures from '../components/CoreFeatures';
import ROI from '../components/ROI';
import CoordinationLayer from '../components/CoordinationLayer';
import UseCases from '../components/UseCases';
import FinalCTA from '../components/FinalCTA';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Reveal } from '../components/shared';

function ExploreLink({ to, label }: { to: string; label: string }) {
  return (
    <Reveal>
      <div className="max-w-[1200px] mx-auto px-6 pt-6">
        <Link
          to={to}
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-accent-blue)] hover:text-[var(--color-text-primary)] transition-colors"
        >
          {label} →
        </Link>
      </div>
    </Reveal>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-base)] text-[var(--color-text-primary)] relative">
      <div className="fixed top-0 left-6 w-[1px] h-full bg-[var(--color-guide-line)] pointer-events-none z-0 hidden lg:block" />
      <div className="fixed top-0 right-6 w-[1px] h-full bg-[var(--color-guide-line)] pointer-events-none z-0 hidden lg:block" />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <TeamCredentials />
        <Bottleneck />
        <ExploreLink to="/how-it-works" label="EXPLORE HOW IT WORKS" />
        <Solution />
        <ExploreLink to="/why-convene" label="EXPLORE WHY CONVENE" />
        <CoreFeatures />
        <ROI />
        <CoordinationLayer />
        <UseCases />
        <ExploreLink to="/use-cases" label="EXPLORE USE CASES" />
        <FinalCTA />
        <ExploreLink to="/resources" label="EXPLORE RESOURCES" />
      </main>
      <Footer />
    </div>
  );
}
