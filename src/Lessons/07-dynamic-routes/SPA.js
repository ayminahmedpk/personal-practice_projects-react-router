import React from 'react'

import {Routes, Route} from 'react-router-dom';

import DynamicChild from './DynamicChild';


const SPA = () => {
  return (
    <>
    <Routes>
      {/* <Route path="*" element={<DynamicChild/>}></Route> */}
      {/* Above doesn't work, cause * can't pass :userId */}
      <Route index element={<DynamicChild/>}/> {/* Shows up on '/' */}
      <Route path="users">
        <Route index element={<DynamicChild/>}/> {/* Shows up on '/users' */}
        <Route path=':userId' element={<DynamicChild/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default SPA