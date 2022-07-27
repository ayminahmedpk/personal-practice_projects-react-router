import React from 'react'
import {useNavigate} from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="component">About Component</div>
    <button onClick={() => navigate('/hidden-page')}>Navigate using hooks</button>
    </>
  )
}

export default About;