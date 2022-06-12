import React from 'react'
import styledComponents from 'styled-components'
import { Container } from '../../styles/Containerstyles'
import { device } from '../../../helpers'
export const Paragraph = styledComponents.p`
color: #fff;
padding: 20px 0px;
font-size: 16px;
@media ${device.tablet}{
    border-top: 5px solid #242424;
    text-align: center;
    padding-bottom: 0px;
    margin-bottom: 0px;
}
`

const FooterContent = () => {
    return (
        <Container>
            <Paragraph>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text
            </Paragraph>
        </Container>

    )
}

export default FooterContent
