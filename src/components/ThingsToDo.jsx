import React from 'react';
import './ThingsToDo.css';

const ThingsToDo = () => {
  return (
    <section id="things-to-do" className="things-to-do-section">
      <div className="container">
        <h2 className="section-title text-center">Things to <span className="script-font">Do</span></h2>
        
        <div className="things-grid">
          <div className="things-column">
            <h3 className="column-title">In Cairo</h3>
            <ul className="things-list">
              <li>The Pyramids of Giza</li>
              <li>Grand Egyptian Museum</li>
              <li>Ibn Tulun Mosque</li>
              <li>Gayer Anderson Museum</li>
              <li>Khan El Khalili Market</li>
              <li>Fustat Market</li>
              <li>Coptic Corner</li>
              <li>Zamalek</li>
              <li>Malls in New Cairo</li>
              <li className="and-more">And so much more!</li>
            </ul>
          </div>
          
          <div className="things-image">
            <img src="/images/7B603546-0E00-40C1-B625-9BE8937B9344.jpg" alt="Exploring Egypt" />
          </div>

          <div className="things-column">
            <h3 className="column-title">Rest of Egypt</h3>
            <div className="region">
              <h4>North</h4>
              <p>Alexandria and the Mediterranean</p>
            </div>
            <div className="region">
              <h4>East</h4>
              <p>Sharm el Sheikh, Dahab, and the Red Sea</p>
            </div>
            <div className="region">
              <h4>South</h4>
              <p>Luxor and Aswan - Pharaonic Temples and Tombs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThingsToDo;
