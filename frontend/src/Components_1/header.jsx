import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './header.css';

import logo from '../Images/logo.png'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleToggleMenu = () => {
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.toggle('show');
  };

  const handleCloseMenu = () => {
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show');
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-container">
            <a href="/" className="navbar-logo">
              <img src={logo} alt="Logo" className='navbar-logo-img'/>
            </a>
            {isMobile ? (
              <>
                <nav className="nav" id="nav_menu">
                  <FiX className="header_close" id="close_menu" onClick={handleCloseMenu} />
                  <ul className="nav_list">
                    <li className="nav_item">
                      <Link to="/" className="nav_link nav-active">
                        Home
                      </Link>
                    </li>
                    <li className="nav_item">
                      <Link to="/about" className="nav_link">
                        About Us
                      </Link>
                    </li>
                    <li className="nav_item">
                      <Link to="/gallery" className="nav_link">
                        Gallery
                      </Link>
                    </li>
                    <li className="nav_item">
                      <Link to="/contact" className="nav_link">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav_item">
                      <Link to="/portals" className="nav_link">
                        Portals
                      </Link>
                    </li>
                  </ul>
                </nav>
                <FiMenu className="header_toggle" id="toggle_menu" onClick={handleToggleMenu} />
              </>
            ) : (
              <ul className="navbar-menu" id="nav_menu">
                <li className="navbar-item">
                  <a href="/" className="navbar-link nav-active" onClick={handleCloseMenu}>
                    Home
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/about" className="navbar-link" onClick={handleCloseMenu}>
                    About Us
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/gallery" className="navbar-link" onClick={handleCloseMenu}>
                    Gallery
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/contact" className="navbar-link" onClick={handleCloseMenu}>
                    Contact Us
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="/portals" className="navbar-link" onClick={handleCloseMenu}>
                    Portals
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
