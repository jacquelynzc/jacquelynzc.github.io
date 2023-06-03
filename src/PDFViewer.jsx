import React from 'react';
import resume from './Resume.pdf'

const PDFViewer = () => {
  return (
      <iframe className='resume' src={resume} title="Resume" />
  );
};

export default PDFViewer;