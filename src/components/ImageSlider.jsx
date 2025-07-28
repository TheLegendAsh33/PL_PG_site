import React, { useState, useEffect, useRef } from 'react';
import '../style/ImageSlider.css'; // Import the CSS file
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import s5 from '../assets/s5.png';
import s6 from '../assets/s6.png';

const images = [s1, s2, s3, s4, s5, s6,];

const ImageSlider = () => {
    const [index, setIndex] = useState(0);
    const slideRef = useRef(null);
    const totalImages = images.length;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => prev + 1);
      }, 4000);
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      // When we reach the cloned slide (index === totalImages)
      if (index === totalImages) {
        // Disable transition, reset to index 0
        setTimeout(() => {
          if (slideRef.current) {
            slideRef.current.style.transition = 'none';
            setIndex(0);
            slideRef.current.style.transform = `translateX(0%)`;
          }
        }, 500); // Wait for current transition to finish
      } else {
        if (slideRef.current) {
          slideRef.current.style.transition = 'transform 0.8s ease-in-out';
          slideRef.current.style.transform = `translateX(-${index * 100}%)`;
        }
      }
    }, [index, totalImages]);
  
    const handleDotClick = (dotIndex) => {
      setIndex(dotIndex);
    };
  
    return (
      <div className="slider-container">
        <div className="slider-wrapper" ref={slideRef}>
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`Slide ${idx}`} className="slide-image" />
          ))}
          {/* Clone the first slide at the end */}
          <img src={images[0]} alt="Cloned Slide" className="slide-image" />
        </div>
  
        <div className="dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${index % totalImages === idx ? 'active' : ''}`}
              onClick={() => handleDotClick(idx)}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageSlider;
  