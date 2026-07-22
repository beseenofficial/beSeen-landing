const steps = [
  { number: "01", title: "Access with Aura", copy: "Unlock direct messages and private broadcasts.", tone: "lilac" },
  { number: "02", title: "Attach a bounty", copy: "Choose what the message is worth, then send it.", tone: "lime" },
  { number: "03", title: "Escrow resolves it", copy: "Reply pays the creator. No reply returns 100%.", tone: "aqua" },
];

export function HowItWorks() {
  return (
    <section className="how section section--blue">
      <div className="section-heading" data-reveal>
        <p className="section-kicker">How beSeen works</p>
        <h2>Access. Bounty. Guaranteed resolution.</h2>
      </div>
      <div className="steps">
        {steps.map((step) => (
          <article className="step" key={step.number} data-reveal>
            <span className={`step__number step__number--${step.tone}`}>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
