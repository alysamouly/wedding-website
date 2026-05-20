import React from 'react';
import './FAQs.css';

const FAQs = () => {
  return (
    <section id="faqs" className="faqs-section">
      <div className="container">
        <h2 className="section-title text-center">FAQs</h2>
        
        <div className="faqs-grid">
          <div className="faq-item">
            <h3>What is the dress code?</h3>
            <p>Formal attire. Please note our ceremony will be outside, so please dress accordingly. There is no traditional clothing expected at this wedding.</p>
          </div>
          
          <div className="faq-item">
            <h3>Are children allowed?</h3>
            <p>While we love your little ones, this will be an adults-only celebration. No children allowed.</p>
          </div>
          
          <div className="faq-item">
            <h3>What will the weather be like?</h3>
            <p>Early May in Cairo is gorgeous! You can expect warm, beautiful days (around 85°F / 29°C) and very comfortable evenings (around 60°F / 16°C). It is perfect weather for our outdoor evening ceremony.</p>
          </div>
          
          <div className="faq-item">
            <h3>How do I get around in Egypt?</h3>
            <p>We highly recommend hiring a driver for your stay in Cairo; it is affordable and will make getting around much easier. Some drivers are also licensed tour guides and can help with showing you around. Alternatively, Uber and Careem are great, reliable options.</p>
          </div>
          
          <div className="faq-item">
            <h3>Do I need a visa?</h3>
            <p>Yes, visas are required for Canadian citizens. You can purchase one on arrival at the Cairo airport.</p>
          </div>
          
          <div className="faq-item">
            <h3>I still have questions, what can I do?</h3>
            <p>Please feel free to reach out to Abbey or Aly if you have any additional questions!</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FAQs;
