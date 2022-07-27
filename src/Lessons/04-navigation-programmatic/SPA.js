import React from 'react'

import {Routes, Route} from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home'
import About from './About'
import HiddenPage from './HiddenPage';
import DeeplyHiddenPage from './DeeplyHiddenPage';
import PageNotFound from './PageNotFound';

const SPA = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/hidden-page' element={<HiddenPage/>}/>
      <Route path='/deeply-hidden-page' element={<DeeplyHiddenPage/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}

export default SPA