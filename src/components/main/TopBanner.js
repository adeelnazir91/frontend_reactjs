import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import TopwhiteBox from './TopwhiteBox';
import { Container } from '../styles/Containerstyles';
import { device } from '../../helpers';



export const Banner = styled.div`
background-color: #00347a;
position: absolute;
width: 100%;
top: 62px;
padding: 65px 0px 40px 0px;

@media ${device.tablet} {
  position:relative;
  top:0px;
  width:auto;
  padding: 20px 0px 20px 0px;
}

`
export const Clearboth = styled.div`
 clear:both
`


const TopBanner = () => {
  return (

    <Banner className='banner'>
      <Container>
        <Slider />
        <TopwhiteBox />
        <Clearboth />
      </Container>
    </Banner>


  )
}

export default TopBanner
