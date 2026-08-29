import { ArrowRight } from '@phosphor-icons/react';
import { ConnectedHub } from './ConnectedHub';
import { DecorativeVideo } from './DecorativeVideo';
import { EscrowDemo } from './EscrowDemo';

function MessageStepsVideo() {
  return (
    <div className="product-video product-video--handoff">
      <DecorativeVideo
        aria-label="BeSeen message flow: compose a request, add a bounty, and send it"
        autoPlay
        deferUntilNearViewport
        loop
        muted
        playsInline
        preload="none"
      >
        <source src="/videos/beseen-message-steps.webm" type="video/webm" />
        Your browser cannot play this video.{' '}
        <a href="/videos/beseen-message-steps-web.webm">
          Download the BeSeen message flow video.
        </a>
      </DecorativeVideo>
    </div>
  );
}

function OutcomeStatusVideo() {
  return (
    <div className="product-video product-video--outcome">
      <DecorativeVideo
        aria-label="BeSeen bounty status changing between escrow, payout, and refund"
        autoPlay
        deferUntilNearViewport
        loop
        muted
        playsInline
        preload="none"
      >
        <source
          src="/videos/beseen-bounty-status-loop-alpha.webm"
          type="video/webm"
        />
        Your browser cannot play this video.{' '}
        <a href="/videos/beseen-bounty-status-loop-alpha.webm">
          Download the bounty status video.
        </a>
      </DecorativeVideo>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="system section" id="system">
      <div className="system__heading">
        <h2>
          One product.
          <br />
          Every state of the request.
        </h2>
        <p>
          Messenger, bounty, escrow, payout and refund work as one continuous
          system.
        </p>
      </div>
      <div className="bento-grid">
        <article className="feature-card feature-card--wide feature-card--messenger">
          <div className="feature-card__copy">
            <h3>Start with a real message.</h3>
            <p>
              Choose the person, explain the context and make a clear request.
            </p>
          </div>
          <EscrowDemo />
        </article>
        <article className="feature-card feature-card--bounty">
          <div className="feature-card__copy">
            <h3>Put value behind the ask.</h3>
            <p>The bounty is locked when you send—not spent.</p>
          </div>
          <div className="bounty-visual">
            <img src="/assets/interface/bounty-ripple.svg" alt="" draggable={false} />
            <strong>25</strong>
            <span>USDC</span>
            <small>Available bounty</small>
          </div>
        </article>
        <article className="feature-card feature-card--video-one">
          <div className="feature-card__copy">
            <h3>Show the handoff, once.</h3>
            <p>
              Use a short real-product capture instead of synthetic UI motion.
            </p>
          </div>
          <MessageStepsVideo />
        </article>
        <article className="feature-card feature-card--wide feature-card--escrow">
          <div className="feature-card__copy">
            <h3>The outcome has rules.</h3>
            <p>Soroban holds the bounty until a valid reply or the deadline.</p>
          </div>
          <OutcomeStatusVideo />
        </article>
        <article className="feature-card feature-card--aura">
          <div className="feature-card__copy">
            <h3>Access with history.</h3>
            <p>Aura connects early supporters and high-demand recipients.</p>
          </div>
          <ConnectedHub />
          <a className="aura-discover" href="https://app.beseen.fi/discover">
            <span>Discover people</span>
            <ArrowRight aria-hidden="true" weight="bold" />
          </a>
        </article>
        <article className="feature-card feature-card--resolution">
          <div className="feature-card__copy">
            <h3>Reply or refund.</h3>
            <p>
              Recipients stay free to ignore. Senders never pay for silence.
            </p>
          </div>
          <div className="resolution-visual">
            <span>
              <i>Reply</i>
              <strong>Recipient paid</strong>
            </span>
            <span>
              <i>No reply</i>
              <strong>100% returned</strong>
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
