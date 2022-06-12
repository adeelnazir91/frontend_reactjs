import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { device } from '../../helpers'
import MobileNavbar from './MobileNavbar'

export const Bars = styled.div`
vertical-align: middle;
padding-top: 20px;
display:none;
position: relative;
@media ${device.tablet}{
    display:block;
}

`
export const BurgerButton = styled.button`
background-color: transparent;
border: none;
color: #fff;
font-size: 18px;
vertical-align: middle;
`
export const Menuheading = styled.span`
padding-left: 10px;
vertical-align: middle;
`
const Burgermenu = () => {
    const [status, setState] = useState(false);

    const handleClick = () => {
        setState(prevStatus => !prevStatus);
    }

    return (
        <Bars>
            <BurgerButton type='button' onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} className="align-icon" />
                <Menuheading>Menu</Menuheading>
            </BurgerButton>
            <MobileNavbar
                isOpen={status}
                handleClick={handleClick}
            />
        </Bars>
    )
}

export default Burgermenu
