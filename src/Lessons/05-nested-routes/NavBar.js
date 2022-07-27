import React from 'react'

import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink className='navbar__link' to='/child-one'>Child 1</NavLink>
      <NavLink className='navbar__link' to='/child-two'>Child 2</NavLink>
    </div>
  )
}

export default NavBar