import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AccessBanner } from './components/AccessBanner';
import { Benefits } from './components/Benefits';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Outcome } from './components/Outcome';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export function App() {
  const wrapper = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useGSAP((_, contextSafe) => {
    const media = gsap.matchMedia();

    media.add(
      '(prefers-reduced-motion: no-preference) and (pointer: fine)',
      () => {
        const smoother = ScrollSmoother.create({
          wrapper: wrapper.current,
          content: content.current,
          smooth: 0.9,
          smoothTouch: 0,
          normalizeScroll: false,
        });

        document.documentElement.classList.add('has-smooth-scroll');

        const scrollToAnchor = (event: MouseEvent) => {
          const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
          const targetId = link?.getAttribute('href');
          if (!targetId || targetId === '#') return;

          const target = document.querySelector(targetId);
          if (!target) return;

          event.preventDefault();
          smoother.scrollTo(target, true, 'top top');
          window.history.pushState(null, '', targetId);
        };
        const handleAnchorClick = contextSafe
          ? contextSafe(scrollToAnchor)
          : scrollToAnchor;

        wrapper.current?.addEventListener('click', handleAnchorClick);

        return () => {
          wrapper.current?.removeEventListener('click', handleAnchorClick);
          document.documentElement.classList.remove('has-smooth-scroll');
          smoother.kill();
        };
      },
    );

    return () => media.revert();
  }, { scope: wrapper });

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>
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
      </div>
    </div>
  );
}
