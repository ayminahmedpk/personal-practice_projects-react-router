import React from 'react'
import {useNavigate} from 'react-router-dom';

const HiddenPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="component">Hidden page</div>
      <button
        onClick={() => navigate('/deeply-hidden-page', {replace: true})}
      >
        Go deeper
      </button>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default HiddenPage