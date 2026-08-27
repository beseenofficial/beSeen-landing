import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__cta"><h2>Send the request<br />worth opening.</h2><a className="button button--dark" href="https://app.beseen.fi">Open BeSeen <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" /></svg></a></div>
      <div className="footer__bottom"><Logo /><nav><a href="#system">How it works</a><a href="#recipients">For recipients</a><a href="#network">Network</a></nav><small>Stellar · Soroban · Outcome-based messaging</small></div>
    </footer>
  );
}
