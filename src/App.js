import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ResumePage from './ResumePage';
import ContactFormPage from './ContactFormPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactFormPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
