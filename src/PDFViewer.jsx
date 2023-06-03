import React from 'react';
import resume from './resume.pdf'

const PDFViewer = () => {
  return (
      <embed className='resume' src={resume} title="Resume" />
  );
};

export default PDFViewer;