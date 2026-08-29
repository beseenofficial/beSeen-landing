import { CaretRight } from '@phosphor-icons/react/CaretRight';
import { Gift } from '@phosphor-icons/react/Gift';
import './InboxBountyCard.css';

export function InboxBountyCard() {
  return (
    <article className="inbox-bounty-card">
      <img className="inbox-bounty-card__avatar" src="/assets/interface/maya-chen-avatar-192.png" alt="" draggable={false} />
      <div className="inbox-bounty-card__copy">
        <div className="inbox-bounty-card__name"><strong>Maya Chen</strong><time>9:41 AM</time></div>
        <div className="inbox-bounty-card__subject"><span>Short film concept + storyboard</span><i /></div>
        <div className="inbox-bounty-card__notice">
          <span className="inbox-bounty-card__gift"><Gift weight="bold" /></span>
          <span><strong>Bounty attached</strong><small>Deadline 23 Aug, 18:00</small></span>
          <CaretRight weight="bold" />
        </div>
      </div>
    </article>
  );
}
