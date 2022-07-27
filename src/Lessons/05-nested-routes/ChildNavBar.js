import React from 'react'

import {NavLink} from 'react-router-dom';

const ChildNavBar = () => {
  return (
    <div className="navbar">
      <NavLink className='navbar__link' to='grandchild-one'>Grandchild 1</NavLink>
      <NavLink className='navbar__link' to='grandchild-two'>Grandchild 2</NavLink>
    </div>
  )
}

export default ChildNavBar