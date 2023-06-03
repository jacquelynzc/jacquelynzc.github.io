import React from 'react';
import resume from './resume.pdf'

const PDFViewer = () => {
  return (
      <iframe className='resume' src={resume} height="100%" title="Resume" />
  );
};

export default PDFViewer;