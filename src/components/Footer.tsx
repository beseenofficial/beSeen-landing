import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer section section--blue">
      <div className="footer-cta" data-reveal>
        <p>Replies are optional.<br /><span>Refunds aren't.</span></p>
        <small>Join the private beta for creators and early users.</small>
        <a className="button button--light" href="https://app.beseen.fi">Launch App</a>
      </div>
      <div className="footer__bottom">
        <Logo />
        <small>Pay for the reply. Not the possibility.</small>
      </div>
    </footer>
  );
}
