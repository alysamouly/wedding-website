import { useEffect, useState } from 'react';
import './Header.css';

const NAV = [
  { href: '#events', label: 'Events' },
  { href: '#travel', label: 'Travel' },
  { href: '#stay', label: 'Stay' },
  { href: '#map', label: 'Explore' },
  { href: '#vibes', label: 'Cairo' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faqs', label: 'FAQs' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight whichever section is sitting across the middle of the viewport.
  useEffect(() => {
    const sections = NAV.map(({ href }) => document.querySelector(href)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    const onKeyDown = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : ''} ${isMenuOpen ? 'is-open' : ''}`}>
      <div className="header-inner">
        <a className="logo" href="#top" aria-label="Abbey and Aly — back to top">
          <span>A</span>
          <span className="logo-amp script-font">&amp;</span>
          <span>A</span>
        </a>

        <nav className="nav" aria-label="Primary">
          {NAV.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={activeId === href ? 'is-active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className={`menu-btn ${isMenuOpen ? 'is-open' : ''}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`menu-panel ${isMenuOpen ? 'is-open' : ''}`} aria-hidden={!isMenuOpen}>
        <nav aria-label="Mobile">
          {NAV.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              style={{ transitionDelay: isMenuOpen ? `${80 + i * 40}ms` : '0ms' }}
              onClick={() => setIsMenuOpen(false)}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
