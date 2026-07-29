import { EscrowDemo } from './EscrowDemo';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__copy" data-reveal>
        <p className="section-kicker">Outcome-based creator attention</p>
        <h1>
          Pay creators
          <br />
          for replies.
          <span>
            Guaranteed,
            <br />
            or refunded.
          </span>
        </h1>
        <p className="hero__description">
          Aura unlocks access. Attach a bounty to your message. If they reply,
          they earn it. If they do not, every cent comes back automatically.
        </p>
        <div className="hero__actions">
          <a
            className="button button--primary"
            href="https://app.beseen.fi"
          >
            Launch App
          </a>
          <div className="hero__network">
            <span>Built on</span>
            <img src="/assets/Stellar Logo Final Black RGB.png" alt="Stellar" />
          </div>
        </div>
      </div>
      <EscrowDemo />
    </section>
  );
}
