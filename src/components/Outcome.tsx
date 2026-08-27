export function Outcome() {
  return (
    <section className="outcome section">
      <div className="outcome__heading"><h2>Attention stays optional.<br />Settlement does not.</h2><p>The recipient decides whether to respond. The contract decides what happens to the bounty.</p></div>
      <div className="outcome__cards">
        <article className="outcome-card outcome-card--payout">
          <div className="outcome-card__copy">
            <h3>Reply received.<br />Release the bounty.</h3>
            <p>A valid reply makes the attached bounty ready to claim for the recipient.</p>
          </div>
          <div className="outcome-card__footer">
            <strong>Payout</strong>
          </div>
        </article>
        <article className="outcome-card outcome-card--refund">
          <div className="outcome-card__copy">
            <h3>Deadline reached.<br />Return every unit.</h3>
            <p>No reply marks the offer expired and returns the full bounty automatically.</p>
          </div>
          <div className="outcome-card__footer">
            <strong>Refund</strong>
          </div>
        </article>
      </div>
    </section>
  );
}
