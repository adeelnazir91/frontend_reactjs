import React from 'react'
import styledComponents from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slideone from '../images/slider1.jpg'
import Slidetwo from '../images/slider2.jpg'
import Slidethree from '../images/slider3.jpg'
import { device } from '../../helpers';

export const Leftslider = styledComponents.div`
   width:70%;
   float:left;
   @media ${device.tablet} {
    width: 100%;
    float:none;
  }
`
export const Sliderinner = styledComponents.div`
 padding-right:20px;
 @media ${device.tablet} {
  padding-right:0px;
}
`

const Slider = () => {

  return (
    <Leftslider>
      <Sliderinner>
        <Carousel autoPlay interval="5000" showThumbs={false}>
          <div>
          <img src={Slideone} className='img-slide'/>

          </div>
          <div>
            <img src={Slidetwo} className='img-slide'/>
          </div>
          <div>
            <img src={Slidethree} className='img-slide'/>

          </div>
        </Carousel>
      </Sliderinner>
    </Leftslider>
  )
}

export default Slider
