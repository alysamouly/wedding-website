import './Footer.css';
import RoomBlockButton from './RoomBlockButton';
import { VENUE, WEDDING_DATE } from '../data/site';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <h2 className="footer-logo script-font">Abbey &amp; Aly</h2>
        <p className="footer-message">We can’t wait to celebrate with you in Cairo.</p>

        <div className="footer-meta">
          <span>{WEDDING_DATE}</span>
          <span className="footer-sep" aria-hidden="true" />
          <span>{VENUE.name}</span>
        </div>

        <div className="footer-cta">
          <RoomBlockButton />
        </div>

        <nav className="footer-links" aria-label="Footer">
          <a href="#events">Events</a>
          <a href="#stay">Stay</a>
          <a href="#map">Explore</a>
          <a href="#faqs">FAQs</a>
          <a href="#top">Back to top</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
