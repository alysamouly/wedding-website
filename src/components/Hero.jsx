import './Hero.css';
import { COUPLE, VENUE, WEEKEND } from '../data/site';

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-media" />
      <div className="hero-inner">
        <p className="hero-kicker">{WEEKEND}</p>
        <h1 className="hero-title">
          Abbey <span className="script-font">&amp;</span> Aly
        </h1>
        <p className="hero-venue">
          {VENUE.name}
          <span className="hero-dot" aria-hidden="true">
            ·
          </span>
          Cairo, Egypt
        </p>

        <div className="hero-actions">
          <a className="btn btn--light" href="#stay">
            Where to stay
          </a>
          <a className="btn btn--light" href="#map">
            Explore the map
          </a>
        </div>
      </div>

      <a className="hero-scroll" href="#events" aria-label={`Scroll to the ${COUPLE} events`}>
        <span>Scroll</span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
