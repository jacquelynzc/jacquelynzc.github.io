import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import './App.css';
import contactQR from './jcQR.png'
import Footer from './Footer.jsx'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailSubmission = () => {
    const subject = encodeURIComponent('Contact Form Submission from ${name}');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const mailtoLink = `mailto:jaxquelyncaputo@gmail.com?subject=${subject}&body=${body}`;

    window.open(mailtoLink);
  };

  return (
    <>
      <Navbar />
      <div className='qrcode'>
        <img className='qr' src={contactQR} alt='QR code to save contact'></img>
        </div>
        <h3 className="contacth2">Inbox Me</h3>
      <div className="contact">
        <div className="contactForm">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="message"></label>
          <textarea
            id="message"
            placeholder="Write your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="button" onClick={handleEmailSubmission}>
          Submit
        </button>
      </div>
      <div className='footer'>
      <Footer />
      </div>
    </>
  );
};

export default ContactForm;
