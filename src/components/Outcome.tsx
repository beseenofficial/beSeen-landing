export function Outcome() {
  return (
    <section className="outcome section section--white">
      <div className="outcome__intro" data-reveal>
        <p className="section-kicker">One message · one guaranteed resolution</p>
        <h2>Reply or refund.</h2>
        <p>Creators choose whether to respond.<br />Escrow guarantees what happens next.</p>
      </div>
      <article className="outcome-card outcome-card--paid" data-reveal>
        <span className="micro-label">Reply received</span>
        <h3>Creator gets paid</h3>
        <p>The bounty is released<br />from escrow.</p>
      </article>
      <article className="outcome-card outcome-card--refund" data-reveal>
        <span className="micro-label">No reply</span>
        <strong className="refund-value">100% back</strong>
        <p>Every cent returns automatically<br />when the deadline expires.</p>
        <small>Automatic · executed by smart contract</small>
        <span className="progress-rule" aria-hidden="true" />
      </article>
    </section>
  );
}
