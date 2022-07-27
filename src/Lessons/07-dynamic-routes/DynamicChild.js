import React from 'react'

import {useNavigate, useParams} from 'react-router-dom';

const DynamicChild = () => {
  const navigate= useNavigate();
  const {userId} = useParams();
  return (
    <>
      <input type="text" className='input'/>
      <button
        onClick={() => navigate(`/users/${document.querySelector('.input').value}`)}
      >
        View details
      </button>
      <p>Showing details for user: "{userId}"</p>
    </>
  )
}

export default DynamicChild