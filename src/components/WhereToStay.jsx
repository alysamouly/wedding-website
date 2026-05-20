import React from 'react';
import './WhereToStay.css';

const WhereToStay = () => {
  return (
    <section className="where-to-stay-section">
      <div className="container where-to-stay-container">
        
        <div className="where-to-stay-content">
          <h2 className="section-title">Where to <span className="script-font">Stay</span></h2>
          
          <div className="info-block">
            <h3>• Sofitel Cairo Downtown Nile</h3>
            <p>Our venue. Room block information for our guests at the Sofitel will be provided at a later date. Please check back here soon.</p>
          </div>
          
          <div className="info-block">
            <h3>• Fairmont Nile City</h3>
            <p>Another fantastic option for your stay, offering beautiful views and exceptional service right on the Nile.</p>
          </div>
          
          <div className="info-block">
            <h3>• Ramses Hilton</h3>
            <p>An excellent option for your stay in Cairo, offering great views and amenities.</p>
          </div>
          
          <div className="info-block">
            <h3>• Cairo Marriott Hotel</h3>
            <p>A beautiful historic hotel option located on the Gezira Island.</p>
          </div>
          
          <div className="info-block">
            <h3>• Nile Ritz-Carlton</h3>
            <p>A wonderful luxury option located right on the Nile.</p>
          </div>
        </div>

        <div className="where-to-stay-image">
          <img src="/images/1D1718A7-7B1F-4107-9DD2-0E45D4EBBA43.jpg" alt="Cairo skyline" />
        </div>
        
      </div>
    </section>
  );
};

export default WhereToStay;
