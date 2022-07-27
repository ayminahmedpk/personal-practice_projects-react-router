import React from 'react'

import {Outlet} from 'react-router-dom';

import NavBar from './NavBar';

const Parent = (props) => {
  return (
    <>
    <div className='component'>
      <p>Parent</p>
      <NavBar></NavBar>
      <Outlet/>
    </div>
    </>
  )
}

export default Parent;