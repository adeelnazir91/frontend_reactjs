import React from 'react'
import styledComponents from 'styled-components';
import { device } from '../../helpers'

export const List = styledComponents.ul`
list-style: none;
margin: 0px;
display: block;
text-align:left;
vertical-align: middle;
margin-top: 12px;
padding: 5px 15px;
z-index: 10000;
position: relative;
background-color: #fff;
position: absolute;
right: 0px;
left: 0px;
`
export const Listitem = styledComponents.li`
display: block;
margin-bottom: 10px;
`
export const Link = styledComponents.a`
padding: 5px 15px;
text-decoration: none;
vertical-align: middle;
font-size: 16px;
`
const MobileNavbar = ({ handleClick, isOpen }) => {
  return (
    <>
      {isOpen && (
        <List handleClick={handleClick} status={isOpen}>
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
      )}
    </>
  )
}

export default MobileNavbar
