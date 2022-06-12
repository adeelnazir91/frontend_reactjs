import React from 'react'
import styledComponents from 'styled-components';
import NaviBars from './Burgermenu';
import { device } from '../../helpers'

export const List = styledComponents.ul`
list-style: none;
padding: 0px;
margin: 0px;
display: block;
text-align: right;
vertical-align: middle;
margin-top: 12px;
@media ${device.tablet} {
   display:none;
   }
`

export const Listitem = styledComponents.li`
display: inline;
`

export const Link = styledComponents.a`
padding: 5px 15px;
text-decoration: none;
vertical-align: middle;
font-size: 16px;
margin-left: 15px;

`

export const Navigation = styledComponents.nav`
width: 80%;
float: right;

@media ${device.tablet} {
   float:left;
   width: 30%;
   display: inline-flex;
  }
  
`

const Navbar = () => {

    return (
        <>

            <NaviBars />
            <Navigation>
                
                <List>
                    <Listitem>
                        <Link href="#">Lorem Ipsum</Link>
                    </Listitem>
                    <Listitem>
                        <Link href="#" className='linkBtn'>Lorem Ipsum</Link>
                    </Listitem>
                    <Listitem>
                        <Link href="#" className='linkBtn'>Lorem Ipsum</Link>
                    </Listitem>
                </List>

            </Navigation>

        </>
    )
}

export default Navbar
