import React, { useState, useEffect, useContext } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

import logo from '../Images/logo.png';

const NavigationContext = React.createContext();

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

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
    setIsMobile((prevIsMobile) => !prevIsMobile);
  };

  return (
    <NavigationContext.Provider value={location.pathname}>
      <header>
        <nav className="navbar">
          <div className="navbar-container">
            <a href="/" className="navbar-logo">
              <img src={logo} alt="Logo" className="navbar-logo-img" />
            </a>
            {isMobile ? (
              <>
                <nav className="nav" id="nav_menu">
                  <FiX className="header_close" id="close_menu" onClick={handleToggleMenu} />
                  <ul className="nav_list">
                    <NavItem to="/" label="Home" />
                    <NavItem to="/about" label="About Us" />
                    <NavItem to="/gallery" label="Gallery" />
                    <NavItem to="/contact" label="Contact Us" />
                    <NavItem to="/portals" label="Portals" />
                  </ul>
                </nav>
                <FiMenu className="header_toggle" id="toggle_menu" onClick={handleToggleMenu} />
              </>
            ) : (
              <ul className="navbar-menu" id="nav_menu">
                <NavItem to="/" label="Home" />
                <NavItem to="/about" label="About Us" />
                <NavItem to="/gallery" label="Gallery" />
                <NavItem to="/contact" label="Contact Us" />
                <NavItem to="/portals" label="Portals" />
              </ul>
            )}
          </div>
        </nav>
      </header>
    </NavigationContext.Provider>
  );
};

const NavItem = ({ to, label }) => {
  const currentPath = useContext(NavigationContext);

  return (
    <li className="navbar-item">
      <Link
        to={to}
        className={`navbar-link ${currentPath === to ? 'nav-active' : ''}`}
      >
        {label}
      </Link>
    </li>
  );
};

export default Header;
  