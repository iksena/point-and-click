import React from 'react';
import './ObjectDetailsPopup.css';
import { Carousel } from '@mantine/carousel';

const ImageCarousels = ({ images }) =>{
  return (
    <Carousel withIndicators height={200}>
      {images.map((image, index) => (
        <Carousel.Slide key={index}>
          <img 
            src={image} 
            alt={`Slide ${index}`} 
            style={{ width: '250px', height: '100%', objectFit: 'contain' }}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

const ObjectDetailsPopup = ({ details, onClose, objectName }) => {
  const { text, type, images } = details;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>{objectName}</h3>
        {type === 'images' && <ImageCarousels images={images} />}
        <p>{text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ObjectDetailsPopup;