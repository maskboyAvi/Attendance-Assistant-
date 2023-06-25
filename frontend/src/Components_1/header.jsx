import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import hdr from './header.module.css';

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
        <nav className={hdr["navbar"]}>
          <div className={hdr["navbar-container"]}>
            <a href="/" className={hdr["navbar-logo"]}>
              <img src={logo} alt="Logo" className={hdr['navbar-logo-img']}/>
            </a>
            {isMobile ? (
              <>
                <nav className={hdr["nav"]} id="nav_menu">
                  <FiX className={hdr["header_close"]} id="close_menu" onClick={handleCloseMenu} />
                  <ul className={hdr["nav_list"]}>
                    <li className={hdr["nav_item"]}>
                      <Link to="/" className={hdr["nav_link","nav-active"]}>
                        Home
                      </Link>
                    </li>
                    <li className={hdr["nav_item"]}>
                      <Link to="/about" className={hdr["nav_link"]}>
                        About Us
                      </Link>
                    </li>
                    <li className={hdr["nav_item"]}>
                      <Link to="/gallery" className={hdr["nav_link"]}>
                        Gallery
                      </Link>
                    </li>
                    <li className={hdr["nav_item"]}>
                      <Link to="/contact" className={hdr["nav_link"]}>
                        Contact Us
                      </Link>
                    </li>
                    <li className={hdr["nav_item"]}>
                      <Link to="/portals" className={hdr["nav_link"]}>
                        Portals
                      </Link>
                    </li>
                  </ul>
                </nav>
                <FiMenu className={hdr["header_toggle"]} id="toggle_menu" onClick={handleToggleMenu} />
              </>
            ) : (
              <ul className={hdr["navbar-menu"]} id="nav_menu">
                <li className={hdr["navbar-item"]}>
                  <a href="/" className={hdr["navbar-link","nav-active"]} onClick={handleCloseMenu}>
                    Home
                  </a>
                </li>
                <li className={hdr["navbar-item"]}>
                  <a href="/about" className={hdr["navbar-link"]} onClick={handleCloseMenu}>
                    About Us
                  </a>
                </li>
                <li className={hdr["navbar-item"]}>
                  <a href="/gallery" className={hdr["navbar-link"]} onClick={handleCloseMenu}>
                    Gallery
                  </a>
                </li>
                <li className={hdr["navbar-item"]}>
                  <a href="/contact" className={hdr["navbar-link"]} onClick={handleCloseMenu}>
                    Contact Us
                  </a>
                </li>
                <li className={hdr["navbar-item"]}>
                  <a href="/portals" className={hdr["navbar-link"]} onClick={handleCloseMenu}>
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
