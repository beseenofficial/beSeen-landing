import { useState } from 'react';
import { AccessBanner } from './components/AccessBanner';
import { Benefits } from './components/Benefits';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Outcome } from './components/Outcome';
import { WaitlistModal } from './components/WaitlistModal';
import { useReveal } from './hooks/useReveal';

export function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  useReveal();

  return (
    <>
      <div className="page-shell">
        <div className="top-section">
          <Header />
          <Hero onJoin={() => setWaitlistOpen(true)} />
        </div>
        <main>
          <Outcome />
          <HowItWorks />
          <Benefits />
          <AccessBanner />
          <Faq />
        </main>
        <Footer onJoin={() => setWaitlistOpen(true)} />
      </div>
      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </>
  );
}
