import React, { useState, useEffect, useCallback } from 'react';
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

  const openModal = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  };

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, []);

  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title text-center">Cairo <span className="script-font">Memories</span></h2>
        <p className="gallery-subtitle">Here are some photos from our trip to Cairo!</p>
        
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <img src={`/images/${img}`} alt={`Cairo memory ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <button className="modal-close" onClick={closeModal}>&times;</button>
          <button className="modal-nav prev" onClick={prevImage}>&#10094;</button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={`/images/${images[selectedIndex]}`} alt="Expanded Cairo memory" />
          </div>
          <button className="modal-nav next" onClick={nextImage}>&#10095;</button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
