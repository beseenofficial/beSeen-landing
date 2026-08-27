import { PaperPlaneTiltIcon as PaperPlaneTilt } from '@phosphor-icons/react/PaperPlaneTilt';
import { HeroProductCards } from './hero-cards/HeroProductCards';

export function Hero() {
  return (
    <section className="hero" id="top">
      <img
        className="hero__background"
        src="/assets/interface/hero-gradient.png"
        alt=""
        aria-hidden="true"
      />
      <HeroProductCards />
      <div className="hero__content">
        <h1>
          <span className="hero__title-line">Make your request</span>
          <span className="hero__title-line hero__title-line--accent">
            worth opening.
          </span>
        </h1>
        <p>
          Reach high-demand people with a real message and a clear incentive. A
          reply pays the recipient. No reply returns the bounty to you.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="https://app.beseen.fi">
            <span>Send a request</span>
            <PaperPlaneTilt aria-hidden="true" weight="fill" />
          </a>
          <a
            href="https://app.beseen.fi/discover"
            className="link"
            style={{ textDecoration: 'none' }}
          >
            Discover People
          </a>
        </div>
      </div>
      <div className="hero__flow" aria-label="BeSeen product flow">
        <span>Request</span>
        <i />
        <span>Bounty</span>
        <i />
        <span>Escrow</span>
        <i />
        <span>Outcome</span>
        <i />
        <span>Payout / Refund</span>
      </div>
    </section>
  );
}
