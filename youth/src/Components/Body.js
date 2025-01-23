import React, { useState, useEffect } from 'react';

import image1 from '../utils/background1.jpg';
import image2 from '../utils/background2.jpg';
import image3 from '../utils/background3.jpg';
import image4 from '../utils/background4.jpg';

const ImageCarousel = () => {
  const images = [
    {
      src: image1,
      alt: 'Image 1',
      description: 'This is the first image with a beautiful description about spirituality.',
    },
    {
      src: image2,
      alt: 'Image 2',
      description: 'This is the second image, conveying peace and tranquility.',
    },
    {
      src: image3,
      alt: 'Image 3',
      description: 'The third image represents the essence of enlightenment.',
    },
    {
      src: image4,
      alt: 'Image 4',
      description: 'A serene and calming view that inspires harmony within.',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-image-container">
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className="carousel-image"
        />
        <div className="carousel-description">
          <p>{images[currentImageIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
