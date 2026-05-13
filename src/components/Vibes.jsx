import React from 'react';

const Vibes = () => {
  return (
    <section id="vibes" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <h2 className="section-title text-center">Discover <span className="script-font">Cairo</span></h2>
        <p className="text-center" style={{ marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          Our favourite content to show off the beauty of Cairo.
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <video 
              src="/images/vibes1.mp4#t=0.001" 
              controls 
              preload="metadata"
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '0.5rem' }} 
            />
            <a href="https://www.instagram.com/husseinmardini" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none' }}>
              @husseinmardini
            </a>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'calc(50% - 1rem)' }}>
            <video 
              src="/images/vibes2.mp4#t=0.001" 
              controls 
              preload="metadata"
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '0.5rem' }} 
            />
            <a href="https://www.instagram.com/nadam.ib" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none' }}>
              @nadam.ib
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'calc(50% - 1rem)' }}>
            <video 
              src="/images/vibes3.mp4#t=0.001" 
              controls 
              preload="metadata"
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '0.5rem' }} 
            />
            <a href="https://www.instagram.com/ahmedtema" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none' }}>
              @ahmedtema
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vibes;
