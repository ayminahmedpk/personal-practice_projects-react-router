import React from 'react'

import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className='navbar__link' to='/'>Home</Link>
      <Link className='navbar__link' to='/about'>About</Link>
    </div>
  )
}

export default NavBar