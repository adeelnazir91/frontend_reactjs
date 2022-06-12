import React from 'react';
import { Container } from '../styles/Containerstyles';
import TopBanner from './TopBanner';
import TwoCol from './TwoCol';
import FourthCol from './FourthCol';
import OrangeBtn from './OrangeBtn';
import Form from './Form';
import BlueContent from './BlueContent';


const Wrapper = () => {
  return (
    <>
      <TopBanner />
      <TwoCol/>
      <FourthCol/>
      <OrangeBtn/>
      <Form/>
      <BlueContent/>
    </>

  )
}

export default Wrapper
