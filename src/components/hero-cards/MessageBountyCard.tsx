import { CurrencyCircleDollar } from '@phosphor-icons/react/CurrencyCircleDollar';
import './MessageBountyCard.css';

export function MessageBountyCard() {
  return (
    <article className="message-bounty-card">
      <div className="message-bounty-card__message">Could you review my pitch<br />and share one honest note?</div>
      <div className="message-bounty-card__details">
        <div className="message-bounty-card__value">
          <CurrencyCircleDollar weight="regular" />
          <strong>25 USDC<br />bounty</strong>
        </div>
        <div className="message-bounty-card__deadline">
          <span>Time to reply</span>
          <strong>1 day</strong>
        </div>
      </div>
    </article>
  );
}
