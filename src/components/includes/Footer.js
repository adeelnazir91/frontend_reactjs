import React from 'react'
import styledComponents from 'styled-components'
import FooterNav from '../main/footercontent/FooterNav'
import FooterContent from '../main/footercontent/FooterContent'

export const Footercontent = styledComponents.footer`
background-color: #222222;
border-top: 5px solid #00bedb;
padding: 25px 0px;
`

const Footer = () => {
  return (
    <Footercontent>
      <FooterNav />
      <FooterContent />
    </Footercontent>
  )
}

export default Footer
