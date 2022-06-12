import React from 'react'
import styledComponents from 'styled-components'
import logo from '../images/logo.png'
import { device } from '../../helpers'
export const NavbarBrand = styledComponents.div`
width: 20%;
float: left;
display: inline-flex;
z-index:1000;

@media ${device.tablet} {
    float:right;
    width: 20%;
    margin-right: 120px;
  }

`

const Logo = () => {
  return (
    <NavbarBrand>
      <img src={logo} className="logo" alt="logo" />
    </NavbarBrand>
  )
}

export default Logo
