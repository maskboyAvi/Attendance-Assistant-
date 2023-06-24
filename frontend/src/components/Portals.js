import React from 'react'
import './Portals.css'
import Nav from './Nav'
import Footer from './Footer'

const Portals = () => {
  return (
    <>
    {/* <Nav/> */}
    <div className='bdy-p'>
      <div className="sec-p">
      <div><p className="head-p">Hello User</p></div>
      <div className="separator-p"></div>
      <a href="./T_login.html" target="_blank" className="btn-p">Teacher's Portal
        <span><ion-icon name="arrow-forward-outline"></ion-icon></span></a>
      <br/><br/>
      <a href="./S_login.html" target="_blank" className="btn-p">Student's Portal<span><ion-icon name="arrow-forward-outline"></ion-icon></span></a>
      <br/><br/>
      <a href="./Signup.html" target="_blank" className="btn-p">New User Sign Up<span><ion-icon name="arrow-forward-outline"></ion-icon></span></a>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Portals
//In this page all the the portals will be there 