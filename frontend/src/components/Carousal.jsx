import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Ensure you import Carousel CSS
import one from '../images/one.jpg';
import two from '../images/two.jpg';
import three from '../images/three.jpeg';
import four from '../images/four.jpg';
import five from '../images/five.jpg';

const Carousal = () => {
  const images = [one, two, three, four, five];

  return (
    <div style={{ maxWidth: '1300px',height:'80%', margin: '0 auto' }}>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={true}
        showIndicators={true}
        dynamicHeight={false}
      >
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`} style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousal;
