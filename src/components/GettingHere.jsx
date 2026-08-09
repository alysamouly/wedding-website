import './GettingHere.css';

const NOTES = [
  {
    title: 'By air',
    body: 'Cairo International Airport (CAI) is the way in. It is a major hub with direct flights from across Europe, the Gulf and North America.',
  },
  {
    title: 'From the airport',
    body: 'A hotel transfer or a pre-booked private driver is the smoothest arrival — roughly 45 to 60 minutes to the Nile, traffic depending.',
  },
  {
    title: 'Around the city',
    body: 'Use Uber or Careem over street taxis: safe, cheap and no negotiating. For a full day out, hiring a driver is well worth it.',
  },
];

const GettingHere = () => {
  return (
    <section id="travel" className="section getting-here">
      <div className="container split">
        <div className="split-media reveal">
          <img src="/images/IMG_0813.JPG" alt="Abbey and Aly by the Nile in Cairo" loading="lazy" />
        </div>

        <div className="getting-here-copy">
          <div className="section-head reveal">
            <span className="eyebrow">Travel</span>
            <h2 className="section-title">
              Getting <span className="script-font">Here</span>
            </h2>
          </div>

          <ol className="notes">
            {NOTES.map((note, i) => (
              <li key={note.title} className="note reveal" style={{ '--reveal-delay': `${i * 90}ms` }}>
                <span className="note-index">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="note-title">{note.title}</h3>
                  <p className="note-body">{note.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default GettingHere;
