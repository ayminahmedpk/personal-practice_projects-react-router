import React from 'react'

import {Outlet} from 'react-router-dom';

import ChildNavBar from './ChildNavBar';

const ChildTwo = () => {
  return (
    <div className="component">
      <p>Child Two</p>
      <ChildNavBar/>
      <Outlet/>
    </div>
  )
}

export default ChildTwo