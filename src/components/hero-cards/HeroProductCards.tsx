import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { AddBountyCard } from './AddBountyCard';
import { InboxBountyCard } from './InboxBountyCard';
import { MessageBountyCard } from './MessageBountyCard';
import './HeroProductCards.css';

gsap.registerPlugin(useGSAP);

export function HeroProductCards() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add(
      {
        desktop: '(min-width: 1440px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { desktop, reduceMotion } = context.conditions as { desktop: boolean; reduceMotion: boolean };
        const cards = gsap.utils.toArray<HTMLElement>('[data-hero-product-card]');

        if (!desktop || reduceMotion) {
          gsap.set(cards, { clearProps: 'transform' });
          return;
        }

        gsap.fromTo(
          cards,
          { y: 10, scale: 0.98 },
          { y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' },
        );

        cards.forEach((card, index) => {
          gsap.to(card, {
            y: index % 2 === 0 ? -7 : 6,
            rotation: index % 2 === 0 ? -0.7 : 0.7,
            duration: 4.8 + index * 0.45,
            delay: 1 + index * 0.12,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        });
      },
    );

    return () => media.revert();
  }, { scope: root });

  return (
    <div className="hero-product-cards" ref={root} aria-hidden="true">
      <div className="hero-product-cards__item hero-product-cards__item--add" data-hero-product-card><AddBountyCard /></div>
      <div className="hero-product-cards__item hero-product-cards__item--message" data-hero-product-card><MessageBountyCard /></div>
      <div className="hero-product-cards__item hero-product-cards__item--inbox" data-hero-product-card><InboxBountyCard /></div>
    </div>
  );
}
