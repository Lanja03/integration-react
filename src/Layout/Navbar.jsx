import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar(props) {
  return (
    <div className='navbar'>
      {props.items.map((item) =>
        <NavbarItem label={item.label} link={item.link} key={item.label} />)}
    </div>
  )
}
