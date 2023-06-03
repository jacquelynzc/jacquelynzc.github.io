import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaAddressCard } from "react-icons/fa";
import Navbar from "./Navbar.jsx";
import profileImage from "./profilee.png";
import "./App.css";
import Tools from './Tools.jsx'
import Footer from "./Footer.jsx";
import Contact from './JacquelynCaputo.vcf'

const Home = () => {

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
                <a href="mailto:JaxquelynCaputo@gmail.com">
        <FaEnvelope /> 
      </a>
      <a href={Contact}>
        <FaAddressCard />
      </a>
              </div>
          </div>
        </div>

        <div className="header">
          <h1>Welcome! <br />I'm Jacquelyn Caputo, <br />a full-stack developer</h1>
        </div>
      </div>
      <div>
      <Tools />
      <div className="footer">
      <Footer />
      </div>
      </div>
    </>
  );
};

export default Home;
