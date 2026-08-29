import { ArrowsLeftRight, LockKey } from '@phosphor-icons/react';

export function AccessBanner() {
  return (
    <section className="network section" id="network">
      <div className="network__heading"><h2>Built for real settlement.</h2><p>BeSeen uses Stellar for value transfer and Soroban for escrow logic.</p></div>
      <div className="network__body">
        <div className="network__item network__item--stellar">
          <img src="/assets/Stellar Logo Final Black RGB.png" alt="Stellar" draggable={false} />
        </div>
        <span aria-hidden="true" />
        <div className="network__item">
          <span className="network__icon" aria-hidden="true"><LockKey size={25} weight="bold" /></span>
          <strong>Soroban escrow</strong>
        </div>
        <span aria-hidden="true" />
        <div className="network__item">
          <span className="network__icon network__icon--transfer" aria-hidden="true"><ArrowsLeftRight size={25} weight="bold" /></span>
          <b>Payout or refund</b>
        </div>
      </div>
    </section>
  );
}
