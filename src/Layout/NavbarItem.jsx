import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarItem(props) {
  return (
    <Link to={`${props.link}`}>{props.label}</Link>
  )
}