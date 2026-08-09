import { useState } from 'react';
import './FAQs.css';

const FAQ_ITEMS = [
  {
    q: 'What is the dress code?',
    a: 'Formal attire. The celebration is part indoors and part outdoors, so dress with that in mind. There is no traditional clothing expected at this wedding.',
  },
  {
    q: 'Are children allowed?',
    a: 'While we love your little ones, this will be an adults-only celebration.',
  },
  {
    q: 'What will the weather be like?',
    a: 'Early May in Cairo is gorgeous. Expect warm days (around 85°F / 29°C) and very comfortable evenings (around 60°F / 16°C) — perfect for an evening that moves between indoors and out.',
  },
  {
    q: 'How do I get around in Egypt?',
    a: 'We highly recommend hiring a driver for your stay in Cairo; it is affordable and makes everything easier, and some drivers are licensed guides who can show you around. Uber and Careem are reliable alternatives.',
  },
  {
    q: 'Do I need a visa?',
    a: 'Yes, visas are required for Canadian citizens. You can purchase one on arrival at Cairo airport.',
  },
  {
    q: 'I still have questions, what can I do?',
    a: 'Please reach out to Abbey or Aly directly — we are happy to help with anything.',
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="section faqs">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow eyebrow--center">Good to know</span>
          <h2 className="section-title">
            Common <span className="script-font">Questions</span>
          </h2>
        </div>

        <div className="faq-list reveal">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className={`faq ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq-q"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
