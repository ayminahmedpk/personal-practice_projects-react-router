import React from 'react'
import {useNavigate} from 'react-router-dom';

const DeeplyHiddenPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="component">Deeply Hidden page</div>
      <p>Note that back button will take you to About page, not Hidden page.</p>
      <p>This is because Hidden Page's navigation had replace set to 'true'.</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default DeeplyHiddenPage