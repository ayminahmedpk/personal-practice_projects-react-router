import React from 'react'

import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink className='navbar__link' to='/'>Home</NavLink>
      <NavLink className='navbar__link' to='/about'>About</NavLink>
    </div>
  )
}

export default NavBar