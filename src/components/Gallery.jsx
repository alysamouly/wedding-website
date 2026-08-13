import { useCallback, useEffect, useState } from 'react';
import './Gallery.css';

const images = [
  '200324F1-B762-432D-9D09-AB04F8E10626.jpg',
  '400B6AF8-683D-4B4F-B557-AD3EEB47066D.jpg',
  '5501F718-694D-4C37-8DF8-CBC30C992084.jpg',
  '6B386FF2-9FBB-4E7C-B012-F0EE1D017F3F.jpg',
  '70D0C1BE-4711-423D-B710-BC1951996AC2.jpg',
  '771434CC-74D8-4CC3-B7FC-511B63983A31.jpg',
  '90BEA772-A0B7-4DEC-8D7C-5485C963FA49.jpg',
  '9755EDDF-C733-41D1-BF95-E2589FCF3701.jpg',
  'A68120C7-E3C1-4691-819C-49A4CA4B4275.jpg',
  'A72296CC-8F79-4825-995E-75C316560F7F.jpg',
  'FA1F229D-1223-4519-8142-5CB7E1BC6BAF.jpg',
  'IMG_0658.jpg',
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const isOpen = selectedIndex !== null;

  const closeModal = useCallback(() => setSelectedIndex(null), []);

  const step = useCallback((delta) => {
    setSelectedIndex((i) => (i + delta + images.length) % images.length);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, step, closeModal]);

  return (
    <section id="gallery" className="section section--paper gallery">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <h2 className="section-title">
            Cairo <span className="script-font">Memories</span>
          </h2>
          <p className="lede">A few photos from our last trip, and a preview of what to expect.</p>
        </div>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <button
              key={img}
              className="gallery-item reveal"
              style={{ '--reveal-delay': `${(index % 4) * 70}ms` }}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Open photo ${index + 1} of ${images.length}`}
            >
              <img src={`/images/${img}`} alt={`Cairo memory ${index + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeModal}>
          <button className="lightbox-close" onClick={closeModal} aria-label="Close">
            &times;
          </button>

          <button
            className="lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
          >
            &#8249;
          </button>

          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={`/images/${images[selectedIndex]}`} alt={`Cairo memory ${selectedIndex + 1}`} />
            <figcaption>
              {selectedIndex + 1} / {images.length}
            </figcaption>
          </figure>

          <button
            className="lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
