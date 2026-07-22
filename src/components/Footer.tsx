import { Logo } from "./Logo";

type FooterProps = {
  onJoin: () => void;
};

export function Footer({ onJoin }: FooterProps) {
  return (
    <footer className="footer section section--blue">
      <div className="footer-cta" data-reveal>
        <p>Replies are optional.<br /><span>Refunds aren't.</span></p>
        <small>Join the private beta for creators and early users.</small>
        <button className="button button--light" type="button" onClick={onJoin}>Join Waitlist</button>
      </div>
      <div className="footer__bottom">
        <Logo />
        <small>Pay for the reply. Not the possibility.</small>
      </div>
    </footer>
  );
}
