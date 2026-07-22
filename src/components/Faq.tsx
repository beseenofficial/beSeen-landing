const questions = [
  {
    number: '01',
    question: 'Does Aura guarantee a reply?',
    answer:
      'No. It unlocks paid messages and private broadcasts. The creator remains free to respond or ignore.',
  },
  {
    number: '02',
    question: 'What if the creator never replies?',
    answer:
      'When the deadline expires, the full bounty returns to the user automatically.',
  },
  {
    number: '03',
    question: 'When does the creator get paid?',
    answer:
      'Only after replying before the deadline. Escrow then releases the bounty to the creator.',
  },
  {
    number: '04',
    question: 'Can Aura be transferred?',
    answer:
      'Yes. Aura can be bought, sold, and transferred, with creator royalties on secondary sales.',
  },
];

export function Faq() {
  return (
    <section className="faq section section--white" id="faq">
      <div className="faq__intro" data-reveal>
        <p className="section-kicker">FAQ</p>
        <h2>
          Questions,
          <br />
          answered.
        </h2>
        <p>The essentials—before you join the private beta.</p>
      </div>
      <div className="faq__grid">
        {questions.map((item) => (
          <article className="faq-item" key={item.number} data-reveal>
            <h3 className="faq-item__question">
              <span>{item.number}</span>
              {item.question}
            </h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
