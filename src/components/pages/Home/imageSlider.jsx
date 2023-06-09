import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';
import image1 from '../../../assets/gallery/carousel1.webp';
import image2 from '../../../assets/gallery/carousel2.webp';
import image3 from '../../../assets/gallery/carousel3.webp';
import React from 'react'
  
const ImageSlider = ({images}) => {
  
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: false,
    autoplay: true,
  autoplaySpeed: 5000,
    arrows: false
   
  };
  return (
    <>
    <div className="carousel">
    </div>
      <div className="imgslider">
        <Slider {...settings}>
          <div>
            <img src={image1} alt="1" />
          </div>
          <div>
            <img src={image2} alt="2" />
          </div>
          <div>
            <img src={image3} alt="2" />
          </div>
        </Slider>
      </div>
          </>
  )
}
export default ImageSlider;
