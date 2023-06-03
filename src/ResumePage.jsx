import React from 'react';
import Navbar from './Navbar';
import PDFViewer from './PDFViewer';


const ResumePage = () => {
  return (
    <>
      <Navbar />
      <div className="resume">
        <PDFViewer />
      </div>
    </>
  );
};

export default ResumePage;
