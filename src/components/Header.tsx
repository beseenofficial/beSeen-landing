import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="site-header" data-reveal>
      <Logo />
      <span className="beta-label">Private beta · beseen.fi</span>
    </header>
  );
}
