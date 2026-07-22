export function EscrowDemo() {
  return (
    <div className="escrow-demo" aria-label="A bounty-backed message example" data-reveal>
      <article className="message-card">
        <div className="card-row card-row--top">
          <span className="eyebrow">Message request</span>
          <span className="status-pill">Aura active</span>
        </div>
        <p className="recipient">To Maya R.</p>
        <p className="message-copy">Could you review my pitch<br />and share one honest note?</p>
        <div className="bounty-row">
          <span className="micro-label">Bounty</span>
          <span className="bounty-value"><strong>$250</strong><small>Attached</small></span>
        </div>
      </article>

      <article className="escrow-card">
        <div className="card-row">
          <span className="eyebrow eyebrow--aqua">Escrow active</span>
          <span className="deadline-pill">24h deadline</span>
        </div>
        <h3>$250 locked until the deadline</h3>
        <div className="resolution-row"><strong>Reply</strong><span>Creator gets paid</span></div>
        <div className="resolution-row"><strong>No reply</strong><span>You get 100% back</span></div>
      </article>
    </div>
  );
}
