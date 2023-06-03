import React from 'react';
import Resume from './Resume1.png'
import Navbar from './Navbar.jsx'

const ResumePage = () => {
    return (
      <>
      <Navbar />
      <div className="resume">
        <img src={Resume} alt='Resume'></img>
      </div>
      </>
    );
  };
  
  export default ResumePage;
  