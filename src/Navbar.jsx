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
                    width={22}
                    height={15}
                    strokeWidth={2.4}
                    rotate={0}
                    color="black"
                    borderRadius={0}
                    animationDuration={0.75}
                />
            </div>
            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <div>
                    <Link className='navbar-link' to="/">Home</Link>
                </div>
                <div>
                    <Link className='navbar-link'  to="/resume">Resume</Link>
                </div>
                <div>
                    <Link className='navbar-link'  to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar