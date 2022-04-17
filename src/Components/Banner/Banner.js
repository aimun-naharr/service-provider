import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerOne  from '../../images/bannerOne.jpg';
import bannerTwo  from '../../images/bannerTwo.jpg';
import bannerThree  from '../../images/bannerThree.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
  <Carousel.Item>
    <img className='w-100' src={bannerOne} alt='banner'></img>
    <Carousel.Caption>
      <h1 className='red-color font-fajila'>Hey this is Margeret</h1>
      <p className='red-color'>I'm here to get you in shape</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className='w-100' src={bannerTwo} alt='banner'></img>

   
  </Carousel.Item>
  <Carousel.Item>
  <img className='w-100' src={bannerThree} alt='banner'></img>

    
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;