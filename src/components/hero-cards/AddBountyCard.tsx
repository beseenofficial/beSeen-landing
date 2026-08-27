import { Check } from '@phosphor-icons/react/Check';
import { Clock } from '@phosphor-icons/react/Clock';
import { CurrencyCircleDollar } from '@phosphor-icons/react/CurrencyCircleDollar';
import { Gift } from '@phosphor-icons/react/Gift';
import './AddBountyCard.css';

export function AddBountyCard() {
  return (
    <article className="add-bounty-card">
      <header className="add-bounty-card__header">
        <span><Gift weight="regular" /><strong>Add bounty</strong></span>
        <b><CurrencyCircleDollar weight="regular" />USDC</b>
      </header>
      <div className="add-bounty-card__row">
        <span className="add-bounty-card__label">Amount</span>
        <div className="add-bounty-card__choices">
          <span>5</span><span>10</span><span className="is-selected"><Check weight="bold" />25</span>
        </div>
      </div>
      <div className="add-bounty-card__row">
        <span className="add-bounty-card__label add-bounty-card__label--icon"><Clock weight="regular" />Reply in</span>
        <div className="add-bounty-card__choices">
          <span>1h</span><span className="is-selected"><Check weight="bold" />1d</span><span>1w</span>
        </div>
      </div>
      <div className="add-bounty-card__action"><CurrencyCircleDollar weight="regular" />Attach 25 USDC</div>
    </article>
  );
}
