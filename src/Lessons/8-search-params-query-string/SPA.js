import React from 'react'

import {useSearchParams} from 'react-router-dom';

const SPA = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = searchParams.get('filters') === 'true' ? true : false;
  
  const toggleFilters = () => {
    filters ? setSearchParams({}) : setSearchParams({filters: 'true'});
  }
  
  return (
    <>
    <button onClick={toggleFilters}>Toggle filters</button>
    {/* Conditionally render based on searchParams */}
    <p>Filters are {filters ? 'on' : 'off' }</p>
    </>
  )
}

export default SPA