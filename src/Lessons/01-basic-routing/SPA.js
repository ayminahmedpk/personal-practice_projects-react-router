import React from 'react'

import {Routes, Route} from 'react-router-dom';

import Home from './Home'
import About from './About'
import PageNotFound from './PageNotFound';

const SPA = () => {
  return (
    <>
    <div className="">Consistent content - browse to / or /about</div>
    <Routes>
      <Route path='/'      element={<Home/>}        />
      <Route path='/about' element={<About/>}       />
      <Route path='*'      element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}

export default SPA