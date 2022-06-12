import React from 'react'
import styledComponents from 'styled-components'
import { Container } from '../styles/Containerstyles'
export const Bluepanel = styledComponents.div`
background-color: #166ba7;
padding:20px 0px;
`
export const Paragraph = styledComponents.p`
  color:#fff;
`

const BlueContent = () => {
  return (
    <Bluepanel>
       <Container>
           <Paragraph>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br></br>alteration in some form, by injected humour.</Paragraph>
       </Container>
    </Bluepanel>
  )
}

export default BlueContent
