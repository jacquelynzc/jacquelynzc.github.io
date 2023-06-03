import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    return (
        <nav className="navbar">
            <div className="hamburger-menu">
                <HamburgerMenu
                    isOpen={isMenuOpen}
                    menuClicked={handleMenuToggle}
                    width={15}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color="white"
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </div>
            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/resume">Resume</Link>
                </div>
                <div>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar