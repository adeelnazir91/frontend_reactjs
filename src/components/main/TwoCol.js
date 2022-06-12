import React from 'react'
import styledComponents from 'styled-components'
import { Container } from '../styles/Containerstyles'
import { device } from '../../helpers'
export const Colcontent = styledComponents.div`
position: relative;

@media ${device.laptop} {
    padding-top: 465px;
  }
`
export const Boxinner = styledComponents.div`
padding: 20px 40px;
text-align: center;
`

export const LeftCol = styledComponents.div`
    margin-right: 15px;
    width: 48%;
    border-radius:5px;
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

export const RighttCol = styledComponents.div`
    margin-left: 15px;
    width: 48%;
    border-radius: 5px;
    float:right;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 0px 5px 0 rgb(0 0 0 / 12%);

    @media ${device.tablet} {
      width: 100%;
      margin-left:0px;
      float:none;
    }
`
export const Clearboth = styledComponents.div`
 clear:both;
`
export const ButtonLink = styledComponents.a`
display: inline-block;
color: #fff;
background-color: #166ba7;
text-decoration: none;
padding: 10px 70px;
text-transform: uppercase;
border-radius: 5px;
margin-top: 20px;
border-bottom: 2px solid #0f5492;
`

const TwoCol = () => {
    return (
        <Container>
            <Colcontent>
                <LeftCol>
                    <Boxinner>
                        <h1>Lorem Ipsum Lorem</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <ButtonLink href='#'>Lorem Ipsum</ButtonLink>
                    </Boxinner>
                </LeftCol>
                <RighttCol>
                    <Boxinner>
                        <h1>Lorem Ipsum Lorem</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <ButtonLink href='#'>Lorem Ipsum</ButtonLink>
                    </Boxinner>
                </RighttCol>
                <Clearboth />
            </Colcontent>
        </Container>
    )
}

export default TwoCol
