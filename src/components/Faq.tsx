import { useState } from 'react';

const questions = [
  ['Does BeSeen guarantee a reply?', 'No. A recipient always decides whether to respond. BeSeen guarantees the financial outcome, not attention.'],
  ['What happens if nobody replies?', 'The escrow deadline expires and the full bounty returns to the sender automatically.'],
  ['When can a recipient claim the bounty?', 'After sending a valid reply before the deadline.'],
  ['What role does Aura play?', 'Aura shapes access and supporter history inside the wider BeSeen product system.'],
];

export function Faq() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((current) => current.includes(index)
      ? current.filter((item) => item !== index)
      : [...current, index]);
  };

  return (
    <section className="faq section" id="faq">
      <div className="faq__heading"><h2>Before you send.</h2><p>The rules are simple on purpose.</p></div>
      <div className="faq__list">
        {questions.map(([question, answer], index) => {
          const isOpen = openItems.includes(index);
          const questionId = `faq-question-${index}`;
          const answerId = `faq-answer-${index}`;

          return (
            <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={question}>
              <h3>
                <button id={questionId} type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => toggleItem(index)}>
                  <span>{question}</span>
                  <span className="faq-item__icon" aria-hidden="true">+</span>
                </button>
              </h3>
              <div className="faq-item__answer" id={answerId} role="region" aria-labelledby={questionId} aria-hidden={!isOpen}>
                <div><p>{answer}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
