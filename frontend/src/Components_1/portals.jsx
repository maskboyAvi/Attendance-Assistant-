import React from 'react';
import './portals.css';
import pstyles from './portals.module.css';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

function App() {
  return (
    <>
    <Header />
    <body className= {pstyles['p-body']}>
    <div className= {pstyles["p-sec"]}>
      <div>
        <p className= {pstyles["p-head"]}>Hello User</p>
      </div>
      <div className= {pstyles["p-separator"]}></div>
      <div className= {pstyles["p-sliders"]}>

      <Link to="/auth" href="./T_login.html" className= {pstyles["p-btn"]}>
        Teacher's Portal
        <span className= {pstyles['p-span']}>
          <IoIosArrowForward />
        </span>
      </Link>
      <br />
      <br />

      <Link to="/auth" className= {pstyles["p-btn"]}>
        Student's Portal
        <span className= {pstyles['p-span']}>
          <IoIosArrowForward />
        </span>
      </Link>
      <br />
      <br />

      <Link to="/auth" className= {pstyles["p-btn"]}>
        New User Sign Up
        <span className= {pstyles['p-span']}>
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
