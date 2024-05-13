import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import images from "./Images/images";
import './Style/BannerCarousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
  const length = images.length;

  // Duplicate the first image and append it to the end, and vice versa
  const carouselImages = [...images, ...images.slice(0, length - 1)];

  return (
    <div className="banner">
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        className='banner'
      >
        {carouselImages.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </Carousel>
      <div className='gradient-overlay' />
    </div>
  );
}

export default Banner;