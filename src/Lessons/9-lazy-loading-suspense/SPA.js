// For clearer results, in the browser devtools, in the network tab, make sure
// to throttle the network speed, and then hard reload (rightclick the refresh
// button to see that option), and observe the network traffic on navigation to
// the heavy component.

import React from 'react'

import {Routes, Route, NavLink} from 'react-router-dom';

import Simple from './Simple';
const LazyHeavy = React.lazy(() => import('./Heavy'));

const SPA = () => {
  return (
    <>
    <div className="navbar">
      <NavLink className='navbar__link' to='/'>Simple component</NavLink>
      <NavLink className='navbar__link' to='/heavy'>Heavy component</NavLink>
    </div>
    <Routes>
      <Route path='/' element={<Simple/>}/>
      <Route
        path='/heavy'
        element={
          <React.Suspense fallback='Loading...'>
            <LazyHeavy/>
          </React.Suspense>
        }
      />
    </Routes>
    </>
  )
}

export default SPA