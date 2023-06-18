import React, { useState } from 'react'
import './Nav.css'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <div className="logo">
        <a href="./Home.html">
          <img src="./logo.png" alt="Company Logo" style={{ height: '70px' }} />
        
        </a>
      </div>
      <nav className={`nav ${showMenu ? 'show' : ''}`}>
        <ion-icon name="close-outline" className="header_close" id="close_menu" onClick={closeMenu}></ion-icon>
        <ul className="nav_list">
          <li className="nav_item">
            <a href="./Home.html" className="nav_link nav-active">
              Home
            </a>
          </li>
          <li className="nav_item">
            <a href="./aboutus1.html" className="nav_link">
              About Us
            </a>
          </li>
          <li className="nav_item">
            <a href="./gallery.html" className="nav_link">
              Gallery
            </a>
          </li>
          <li className="nav_item">
            <a href="./Contact_us.html" className="nav_link">
              Contact Us
            </a>
          </li>
          <li className="nav_item">
            <a href="./Portal.html" className="nav_link">
              Portals
            </a>
          </li>
        </ul>
      </nav>
      <ion-icon
        name="menu-outline"
        className="header_toggle"
        id="toggle_menu"
        onClick={toggleMenu}
        style={{ display: showMenu ? 'none' : 'inline' }}
      ></ion-icon>
    </header>
  );
}

export default Nav