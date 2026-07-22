export function AccessBanner() {
  return (
    <section className="access section section--blue">
      <div className="aura-card" data-reveal>
        <div className="aura-card__copy">
          <span className="aura-card__eyebrow">Early support matters</span>
          <h2>Support early. Be remembered.</h2>
          <p>
            Earlier Aura mints start lower on the curve. Original supporters receive a permanent OG
            mark, visible whenever they message the creator.
          </p>
          <strong>Aura can be traded. OG status cannot.</strong>
        </div>

        <div className="aura-card__visual">
          <img
            className="aura-expansion"
            src="/assets/aura-expansion-flat.png"
            alt=""
            aria-hidden="true"
          />

          <article className="og-card" aria-label="Original supporter identity">
            <div className="og-card__header">
              <span className="og-card__mark">OG</span>
              <span className="og-card__label">Original supporter</span>
            </div>
            <div className="og-card__rule" />
            <strong>Aura #012</strong>
            <span>Since launch</span>
            <p>Visible in creator messages</p>
          </article>
        </div>
      </div>
    </section>
  );
}
