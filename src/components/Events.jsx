import './Events.css';
import { VENUE } from '../data/site';

const EVENTS = [
  {
    day: 'Saturday',
    date: 'May 2',
    name: 'Welcome Dinner',
    detail: 'More details soon',
  },
  {
    day: 'Sunday',
    date: 'May 3',
    name: 'The Wedding',
    detail: VENUE.fullName,
    note: 'Indoor/outdoor ceremony, formal attire',
    featured: true,
  },
  {
    day: 'Monday',
    date: 'May 4',
    name: 'Farewell Brunch',
    detail: 'More details soon',
  },
];

const Events = () => {
  return (
    <section id="events" className="section section--paper events">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow eyebrow--center">Three days in Cairo</span>
          <h2 className="section-title">
            The <span className="script-font">Weekend</span>
          </h2>
          <p className="lede">
            We are making a weekend of it. Here is the shape of things — timings and finer details
            will land here closer to the day.
          </p>
        </div>

        <ol className="events-grid">
          {EVENTS.map((event, i) => (
            <li
              key={event.name}
              className={`event reveal ${event.featured ? 'event--featured' : ''}`}
              style={{ '--reveal-delay': `${i * 90}ms` }}
            >
              <span className="event-day">{event.day}</span>
              <h3 className="event-date script-font">{event.date}</h3>
              <h4 className="event-name">{event.name}</h4>
              <p className="event-detail">{event.detail}</p>
              {event.note && <p className="event-note">{event.note}</p>}
              {event.featured && (
                <a className="link-arrow event-link" href="#map">
                  Find it on the map
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
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Events;
