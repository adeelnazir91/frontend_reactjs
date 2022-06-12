import React from 'react'
import styledComponents from 'styled-components'
import { Container } from '../styles/Containerstyles'
import { device } from '../../helpers'

export const ButtonInner = styledComponents.div`
text-align: center;
padding: 35px 0px 60px 0px;
@media ${device.tablet} {
    padding: 5px 0px 18px 0px;
   }
 
`
export const Orangebtn = styledComponents.a`

text-decoration: none;
padding: 10px 15px;
text-transform: uppercase;
border-radius: 5px;
margin-top: 20px;
color: #fff;
background-color: #ed811e;
width: 100%;
max-width: 200px;
display: inline-table;
position: relative;
border-bottom: 2px solid #dd7514;
@media ${device.tablet} {
margin-top:0px;
padding: 10px 0px;
max-width:100%;
}
`
export const Arrowsign = styledComponents.span`
text-align: right;
display: inline-table;
align-items: initial;
position: absolute;
right: 8px;
top: 6px;
font-size: 20px;

`

const OrangeBtn = () => {
    return (
        <Container>
            <ButtonInner>
            <Orangebtn href='#'>Lorem Ipsum <Arrowsign>{">"}</Arrowsign></Orangebtn>
            </ButtonInner>
        </Container>
    )
}

export default OrangeBtn
