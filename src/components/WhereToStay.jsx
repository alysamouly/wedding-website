import './WhereToStay.css';
import RoomBlockButton from './RoomBlockButton';
import { ROOM_BLOCK, VENUE } from '../data/site';
import { PLACES, directionsUrl } from '../data/places';

const HOTELS = PLACES.filter((place) => place.map === 'cairo' && place.category === 'stay');

const WhereToStay = () => {
  return (
    <section id="stay" className="section section--paper stay">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Accommodation</span>
          <h2 className="section-title">
            Where to <span className="script-font">Stay</span>
          </h2>
          <p className="lede">
            Almost everything worth doing sits along the Nile, so we would stay on the water. The
            easiest option is the wedding hotel itself.
          </p>
        </div>

        <div className="stay-feature reveal">
          <div className="stay-feature-media">
            <img
              src="/images/fairmont-nile-city.jpg"
              alt="The Fairmont Nile City lit up above the Nile at dusk"
              loading="lazy"
            />
          </div>

          <div className="stay-feature-card">
            <span className="tag tag--venue">Our venue</span>
            <h3 className="stay-feature-title">{VENUE.fullName}</h3>
            <p className="stay-feature-address">{VENUE.address}</p>
            <p className="stay-feature-blurb">{ROOM_BLOCK.blurb}</p>

            <div className="stay-feature-actions">
              <RoomBlockButton />
              <a
                className="btn btn--ghost"
                href={directionsUrl(VENUE.coords)}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="stay-alts">
          <p className="stay-alts-label reveal">Other hotels we like nearby</p>
          <ul className="hotel-grid">
            {HOTELS.map((hotel, i) => (
              <li
                key={hotel.id}
                className="hotel reveal"
                style={{ '--reveal-delay': `${i * 70}ms` }}
              >
                <h4 className="hotel-name">{hotel.name}</h4>
                <span className="hotel-meta">{hotel.meta}</span>
                <p className="hotel-blurb">{hotel.blurb}</p>
                <a
                  className="link-arrow hotel-link"
                  href={directionsUrl(hotel.coords)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Map
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
                    <path
                      d="M0 4h12M9 1l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhereToStay;
