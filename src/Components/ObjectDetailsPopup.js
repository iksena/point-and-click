import React from 'react';
import './ObjectDetailsPopup.css';
import { Carousel } from '@mantine/carousel';
import { Text, Modal, Image } from '@mantine/core';

const ImageCarousels = ({ images }) =>{
  return (
    <Carousel height={400} slideGap="xs">
      {images.map((image, index) => (
        <Carousel.Slide key={index} align="center">
          <Image 
            src={image} 
            style={{ width: '250px', height: '100%', objectFit: 'contain' }}
            alt={`Slide ${index}`} 
            fallbackSrc="https://placehold.co/250x200?text=Gambarnya+ilang"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

const ObjectDetailsPopup = ({ object, onClose, opened }) => {
  const { details, name } = object;
  const { text, type, images } = details;

  return (
    <Modal opened={opened} onClose={onClose} title={name} ta="center" centered>
        {type === 'images' && <ImageCarousels images={images}/>}
        <Text ta="center">{text}</Text>
    </Modal>
  );
};

export default ObjectDetailsPopup;