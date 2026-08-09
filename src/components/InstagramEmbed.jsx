import { useEffect } from 'react';

const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    // Load Instagram embed script if it doesn't exist
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', width: '100%', maxWidth: '540px' }}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: '0',
          width: '100%',
        }}
      >
      </blockquote>
    </div>
  );
};

export default InstagramEmbed;
