import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navbar from "./Navbar.jsx";
import profileImage from "./profilee.png";
import "./App.css";
import Tools from './Tools.jsx'
import Footer from "./Footer.jsx";

const Home = () => {
  // const [isDiamondOpen, setIsDiamondOpen] = useState(false);
  // const [isMouseOverLinks, setIsMouseOverLinks] = useState(false);

  // const handleDiamondHover = () => {
  //   setIsDiamondOpen(true);
  // };

  // const handleDiamondLeave = () => {
  //   setIsMouseOverLinks(false);
  //   setTimeout(() => {
  //     setIsDiamondOpen(false);
  //   }, 2000); // Timeout delay in milliseconds
  // };

  // useEffect(() => {
  //   let timeoutId;

  //   if (isMouseOverLinks) {
  //     clearTimeout(timeoutId);
  //   } else if (isDiamondOpen) {
  //     timeoutId = setTimeout(() => {
  //       setIsDiamondOpen(false);
  //     }, 2000); // Timeout delay in milliseconds
  //   }

  //   return () => clearTimeout(timeoutId);
  // }, [isMouseOverLinks, isDiamondOpen]);

  return (
    <>
      <div className="Home">
        <Navbar />
        <div className="main-content">
          <div className="circle-container">
            <div
              className='circle-image'
            >
              <img src={profileImage} alt="Jacquelyn" />
            </div>
            <div className="social-links">
                <a
                  href="https://github.com/jacquelynzc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/jacquelyncaputo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
          </div>
        </div>

        <div className="header">
          <h1>Welcome! <br />I'm Jacquelyn Caputo, <br />a full-stack developer</h1>
        </div>
      </div>
      <Tools />
      <Footer />
    </>
  );
};

export default Home;
