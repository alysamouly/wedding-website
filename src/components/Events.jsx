import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <section id="events" className="events-section">
      <div className="container">
        <h2 className="section-title text-center">Events</h2>
        <p className="section-subtitle text-center">Celebrate with us</p>
        
        <div className="events-grid">
          <div className="event-card">
            <h3 className="event-date">May 2nd</h3>
            <h4 className="event-name">Welcome Dinner</h4>
            <p className="event-details">More details soon</p>
          </div>
          
          <div className="event-card featured">
            <h3 className="event-date">May 3rd</h3>
            <h4 className="event-name">The Wedding</h4>
            <p className="event-details">Sofitel Cairo Downtown Nile</p>
          </div>
          
          <div className="event-card">
            <h3 className="event-date">May 4th</h3>
            <h4 className="event-name">Farewell Brunch</h4>
            <p className="event-details">More details soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
