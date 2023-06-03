import React from 'react';
import Navbar from './Navbar';
import PDFViewer from './PDFViewer';
import Footer from './Footer.jsx'

const ResumePage = () => {
  return (
    <>
      <Navbar />
      <div className="resume">
        <PDFViewer />
        <Footer />
      </div>
    </>
  );
};

export default ResumePage;
