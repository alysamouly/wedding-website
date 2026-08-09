import './Vibes.css';

const CLIPS = [
  { src: '/images/vibes1.mp4', handle: 'husseinmardini' },
  { src: '/images/vibes2.mp4', handle: 'nadam.ib' },
  { src: '/images/vibes3.mp4', handle: 'ahmedtema' },
];

const Vibes = () => {
  return (
    <section id="vibes" className="section vibes">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow eyebrow--center">A taste of it</span>
          <h2 className="section-title">
            Discover <span className="script-font">Cairo</span>
          </h2>
          <p className="lede">
            Our favourite films of the city, made by people who capture it better than we can
            describe it.
          </p>
        </div>

        <div className="vibes-grid">
          {CLIPS.map((clip, i) => (
            <figure key={clip.handle} className="clip reveal" style={{ '--reveal-delay': `${i * 90}ms` }}>
              <video src={`${clip.src}#t=0.001`} controls preload="metadata" playsInline />
              <figcaption>
                <a
                  href={`https://www.instagram.com/${clip.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{clip.handle}
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vibes;
