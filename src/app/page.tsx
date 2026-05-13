import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import CredibilityBar from '@/components/CredibilityBar';
import FounderProblem from '@/components/FounderProblem';
import BottleneckVsFreedom from '@/components/BottleneckVsFreedom';
import WhyStuck from '@/components/WhyStuck';
import Solution from '@/components/Solution';
import WhatWeBuild from '@/components/WhatWeBuild';
import WhyDifferent from '@/components/WhyDifferent';
import AuditCTA from '@/components/AuditCTA';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import ApplyEmbed from '@/components/ApplyEmbed';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CredibilityBar />
        <FounderProblem />
        <BottleneckVsFreedom />
        <WhyStuck />
        <Solution />
        <WhatWeBuild />
        <WhyDifferent />
        <AuditCTA />
        <FAQ />
        <FinalCTA />
        <ApplyEmbed />
      </main>
      <footer style={{
        background: 'var(--forest)',
        padding: '40px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px',
          color: 'var(--sage)',
          opacity: 0.7,
        }}>
          © {new Date().getFullYear()} Flywheelify. All rights reserved.
        </p>
      </footer>
    </>
  );
}
