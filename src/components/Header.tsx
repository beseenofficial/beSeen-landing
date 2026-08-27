import { RocketLaunchIcon as RocketLaunch } from '@phosphor-icons/react/RocketLaunch';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="site-header">
      <Logo />
      <nav aria-label="Main navigation">
        <a href="#system">How it works</a>
        <a href="#recipients">For recipients</a>
        <a href="#network">Network</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a className="header-action" href="https://app.beseen.fi">
        <span>Launch app</span>
        <RocketLaunch aria-hidden="true" weight="bold" />
      </a>
    </header>
  );
}
