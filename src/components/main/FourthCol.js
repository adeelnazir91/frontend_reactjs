import React from 'react'
import styledComponents from 'styled-components'
import { Container } from '../styles/Containerstyles'
import Imagethumbnail from '../images/placeholder_600x400.svg'
import { device } from '../../helpers'

export const FourCol = styledComponents.div`
 padding-top: 20px;
 `
export const Colone = styledComponents.div`
   margin-right: 29px;
   border-radius: 5px;
   width: 23%;
   float:left;
   background-color: #fff;
   box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 0px 5px 0 rgb(0 0 0 / 12%);

   @media ${device.tablet} {
    width: 100%;
    margin-right: 0px;
    float:none;
    margin-bottom: 15px;
  }



 `
export const Boxinner = styledComponents.div`
padding: 12px 15px;
text-align: center;

 `
 export const Clearboth = styledComponents.div`
  clear:both;
 `
 export const Heading = styledComponents.h2`
 margin-top: 0px;
 margin-bottom: 3px;
 text-transform: uppercase;
 font-size: 20px;
 `

 export const Headingthree = styledComponents.h2`
 margin-top: 0px;
 font-weight: 500;
 text-transform: uppercase;
 `

 export const ButtonLink = styledComponents.a`
 text-decoration: none;
 padding: 10px 15px;
 text-transform: uppercase;
 border-radius: 5px;
 margin-top: 20px;
 color: #fff;
 background-color: #166ba7;
 width: 100%;
 max-width: 165px;
 display: inline-table;
 position: relative;
 border-bottom: 2px solid #0f5492;
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

const FourthCol = () => {
    return (
        <Container>
            <FourCol>
                <h1 className='mobile-view'>Lorem Ipsum Lorem</h1>
                <Colone>
                    <Boxinner>
                        <Heading>Lorem Ipsum</Heading>
                        <Headingthree>Example text</Headingthree>
                        <img src={Imagethumbnail} className="img"/>
                        <ButtonLink href='#'>Lorem Ipsum <Arrowsign>{">"}</Arrowsign></ButtonLink>
                    </Boxinner>
                </Colone>
                <Colone>
                    <Boxinner>
                        <Heading>Lorem Ipsum</Heading>
                        <Headingthree>Example text</Headingthree>
                        <img src={Imagethumbnail} className="img"/>
                        <ButtonLink href='#'>Lorem Ipsum <Arrowsign>{">"}</Arrowsign></ButtonLink>
                    </Boxinner>
                </Colone>
                <Colone>
                    <Boxinner>
                        <Heading>Lorem Ipsum</Heading>
                        <Headingthree>Example text</Headingthree>
                        <img src={Imagethumbnail} className="img"/>
                        <ButtonLink href='#'>Lorem Ipsum <Arrowsign>{">"}</Arrowsign></ButtonLink>
                    </Boxinner>
                </Colone>

                <Colone className='marginRight'>
                    <Boxinner>
                        <Heading>Lorem Ipsum</Heading>
                        <Headingthree>Example text</Headingthree>
                        <img src={Imagethumbnail} className="img"/>
                        <ButtonLink href='#'>Lorem Ipsum <Arrowsign>{">"}</Arrowsign></ButtonLink>
                    </Boxinner>
                </Colone>
                <Clearboth/>
            </FourCol>

      
        </Container>
    )
}

export default FourthCol
