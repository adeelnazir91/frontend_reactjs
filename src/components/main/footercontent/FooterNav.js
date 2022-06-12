import React from 'react'
import styledComponents from 'styled-components'
import { Container } from '../../styles/Containerstyles'
import { device } from '../../../helpers'

export const Ul = styledComponents.ul`
margin: 0px;
padding: 0px;
list-style-type: none;
`

export const Li = styledComponents.li`
display: inline-block;
width: 15%;
@media ${device.tablet}{
 width: 33%;
 padding-bottom: 30px;
 text-align: center;
}
`

export const Linkref = styledComponents.a`
color: #fff;
padding: 5px 15px;
text-decoration: none;
`

const FooterNav = () => {
    return (
        <Container>
            <Ul>
                <Li>
                    <Linkref href='#'>Link 1</Linkref>
                </Li>
                <Li>
                    <Linkref href='#'>Link 2</Linkref>
                </Li>
                <Li>
                    <Linkref href='#'>Link 3</Linkref>
                </Li>
                <Li>
                    <Linkref href='#'>Link 4</Linkref>
                </Li>
                <Li>
                    <Linkref href='#'>Link 5</Linkref>
                </Li>
                <Li>
                    <Linkref href='#'>Link 6</Linkref>
                </Li>

            </Ul>
        </Container>

    )
}

export default FooterNav
