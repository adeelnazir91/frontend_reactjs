import { clear } from '@testing-library/user-event/dist/clear'
import React from 'react'
import styledComponents from 'styled-components'
import { Container } from '../styles/Containerstyles'
import { device } from '../../helpers'

export const Formcontainter = styledComponents.div`
border-top: 1px solid #f6f6f6;
padding: 20px 0px;
@media ${device.mobileL} {
    text-align:center;
    background-color: #fff;
   }
 `
export const Label = styledComponents.label`
 width: 22%;
 float: left;
 color: #bebebe;
 @media ${device.tablet} {
    width: 100%;
    float: none;
    padding-bottom: 15px;
    display: block;
   }
 `

export const Formfields = styledComponents.div`
 width: 24%;
 float: left;
 margin-right: 15px;
 display: inline-flex;
 `
export const Clearboth = styledComponents.div`
  clear:both
 `
export const Inputfield = styledComponents.input`
 background-color: #f1f1f1;
 width: 100%;
 margin-left: 5px;
 margin-right: 5px;
 padding: 8px 8px;
 border: 1px solid #ebebeb;
 border-radius: 5px;
 `


const Form = () => {
    return (
        <Formcontainter>
            <Container>
                <form>
                    <Label>Abonnez-vaus a notre newsletter</Label>
                    <Formfields>
                        <input type='text' name='Name' className='form-control mobile-view' placeholder='Enter Name' />
                    </Formfields>

                    <Formfields className='emailInput'>
                        <input type='email' name='email' className='form-control' placeholder='Enter email' />
                    </Formfields>

                    <Formfields className='submitBtn'>
                        <button type='button' className='btn' name='submit'>Submit</button>
                    </Formfields>
                    <Clearboth />
                </form>

            </Container>
        </Formcontainter>
    )
}

export default Form
