import React from 'react';
import './GettingHere.css';

const GettingHere = () => {
  return (
    <section id="travel-stay" className="getting-here-section">
      <div className="container getting-here-container">
        
        <div className="getting-here-image">
          <img src="/images/IMG_0813.JPG" alt="Couple by the Nile" />
        </div>
        
        <div className="getting-here-content">
          <h2 className="section-title">Getting <span className="script-font">Here</span></h2>
          
          <div className="info-block">
            <h3>• By Air</h3>
            <p>Cairo International Airport is the primary point of entry. It is a major hub and receives flights from all over the world.</p>
          </div>
          
          <div className="info-block">
            <h3>• Local Transport</h3>
            <p>For getting around, we highly recommend using Uber or Careem over standard taxis. It is safe, affordable, and very convenient. Hotel transfers or hiring a private driver are the most recommended options for seamless travel from the airport to your hotel.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default GettingHere;
