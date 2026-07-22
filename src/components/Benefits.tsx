const benefits = [
  { label: "For users", line: "Choose the value of your request.", strong: "Never lose money to silence.", color: "blue" },
  { label: "For creators", line: "A paid inbox ranked by real value.", strong: "No calls, schedules, or obligation.", color: "coral" },
];

export function Benefits() {
  return (
    <section className="benefits section section--white">
      <div className="section-heading" data-reveal>
        <p className="section-kicker">Built for better attention</p>
        <h2>Less noise. Clearer value.</h2>
      </div>
      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <article className="benefit" key={benefit.label} data-reveal>
            <span className={`benefit__line benefit__line--${benefit.color}`} />
            <div>
              <h3>{benefit.label}</h3>
              <p>{benefit.line}</p>
              <strong>{benefit.strong}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
