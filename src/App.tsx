import { AccessBanner } from './components/AccessBanner';
import { Benefits } from './components/Benefits';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Outcome } from './components/Outcome';

export function App() {
  return (
    <>
      <div className="page-shell">
        <div className="top-section">
          <Header />
          <Hero />
        </div>
        <main>
          <HowItWorks />
          <Outcome />
          <Benefits />
          <AccessBanner />
          <Faq />
        </main>
        <Footer />
      </div>
    </>
  );
}
