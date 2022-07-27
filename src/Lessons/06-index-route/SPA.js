import React from 'react'

import {Routes, Route} from 'react-router-dom';

import Parent from './Parent';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import GrandchildOne from './GrandchildOne';
import GrandchildTwo from './GrandchildTwo';
import IndexedChild from './IndexedChild';

const SPA = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Parent/>}>
        <Route index element={<IndexedChild/>}/>
        <Route path='child-one' element={<ChildOne/>}/>
        <Route path='child-two' element={<ChildTwo/>}>
          <Route path='grandchild-one' element={<GrandchildOne/>}/>
          <Route path='grandchild-two' element={<GrandchildTwo/>}/>
        </Route>
        <Route path='indexed-child' element={<IndexedChild/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default SPA