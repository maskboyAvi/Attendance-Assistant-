import React from 'react';
import './portals.css';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

function App() {
  return (
    <>
    <Header />
    <body className='p-body'>
    <div className="p-sec">
      <div>
        <p className="p-head">Hello User</p>
      </div>
      <div className="p-separator"></div>
      <div className="p-sliders">
      <a href="./T_login.html" className="p-btn">
        Teacher's Portal
        <span className='p-span'>
          <IoIosArrowForward />
        </span>
      </a>
      <br />
      <br />
      <Link to="/" className="p-btn">
        Student's Portal
        <span className='p-span'>
          <IoIosArrowForward />
        </span>
      </Link>
      <br />
      <br />
      <Link to="/" className="p-btn">
        New User Sign Up
        <span className='p-span'>
          <IoIosArrowForward />
        </span>
      </Link>
      </div>
    </div>
    </body>
    <Footer />
    </>
  );
}

export default App;
