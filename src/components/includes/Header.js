import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/Containerstyles';
import { device } from '../../helpers';
import Navbar from '../mainnavigation/Navbar';
import MobileNavbar from '../mainnavigation/MobileNavbar';
import Logo from './Logo';

export const HeaderTop = styled.div`
border-top: 5px solid #5a5a5a;
@media ${device.tablet}{
    background-color: #162840;
}
`
export const Cleardiv = styled.div`
  clear:both 
`

const Header = () => {
    return (
        <HeaderTop>
            <Container>
                <Logo/>
                <Navbar/>
                <Cleardiv/>
            </Container>
        </HeaderTop>

    )
}

export default Header
