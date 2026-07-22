import { EscrowDemo } from "./EscrowDemo";

type HeroProps = {
  onJoin: () => void;
};

export function Hero({ onJoin }: HeroProps) {
  return (
    <section className="hero" id="top">
      <div className="hero__copy" data-reveal>
        <p className="section-kicker">Outcome-based creator attention</p>
        <h1>Pay creators<br />for replies.<span>Guaranteed,<br />or refunded.</span></h1>
        <p className="hero__description">Aura unlocks access. Attach a bounty to your message. If they reply, they earn it. If they do not, every cent comes back automatically.</p>
        <div className="hero__actions">
          <button className="button button--primary" type="button" onClick={onJoin}>Join Waitlist</button>
          <small>Escrowed on Stellar · resolved by Soroban.</small>
        </div>
      </div>
      <EscrowDemo />
    </section>
  );
}
