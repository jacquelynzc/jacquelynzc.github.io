import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./Home";
import ResumePage from "./ResumePage";
import ContactFormPage from "./ContactFormPage";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        ></link>
          <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactFormPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
