import React from 'react'
import styledComponents from 'styled-components'
import { device } from '../../helpers'

export const WhiteBox = styledComponents.div`
width: 30%;
float: right;
background-color: #fff;
display: inline-table;
border-radius: 5px;
text-align: center;

@media ${device.tablet} {
  width: 100%;
  float:none;
  margin-top: 20px;
}

`
export const Boxinner = styledComponents.div`
padding: 12px;
`
export const Card =styledComponents.div`
padding: 20px 10px;
border-radius: 5px;
margin-bottom: 15px;
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 0px 5px 0 rgb(0 0 0 / 12%);
`

const TopwhiteBox = () => {
  return (
    <WhiteBox>
      <Boxinner>
         <Card>
            <h3 className='heading'>Lorem Ipsum Lorem</h3>
            <p className='text-p'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
         </Card>

         <Card className='margin-none'>
            <h3 className='heading'>Lorem Ipsum Lorem</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
         </Card>

      </Boxinner>
    </WhiteBox>
  )
}

export default TopwhiteBox
