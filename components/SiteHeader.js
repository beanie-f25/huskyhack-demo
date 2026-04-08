import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="nav-bar">
        <div className="brand-row">
          <div className="brand-icon">hub</div>
          <span className="brand-title">HuskyHack</span>
        </div>
        <div className="nav-links">
          <a href="#Showcase">Showcase</a>
          <a href="#Mission">Our Mission</a>
          <a href="#Community">Stories</a>
          <a href="#Connect">Connect</a>
        </div>
        <Link className="primary-button" href="/join-us">
          Join Us
        </Link>
      </nav>
    </header>
  );
}
