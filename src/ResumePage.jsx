import React from 'react';
import Resume1 from './Resume1.png'
import Navbar from './Navbar.jsx'

const ResumePage = () => {
    return (
      <>
      <Navbar />
      <div className="resume">
        <img src={Resume1}></img>
      </div>
      </>
    );
  };
  
  export default ResumePage;
  