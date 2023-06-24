import React from "react";
import "./about.css";

import Header from "./header";
import Footer from "./footer";
import ClgLogo from "../Images/Final_Logo_IIITL.png";

function AboutUs() {
  return (
    <>
    <Header />
    <div className="section">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <h3>
              We are just a group of friends trying to make our teacher's life
              easier.
            </h3>
            <p>
              We are students belonging to Indian Institute of Information
              Technology, Lucknow, who've come together to build this Attendance
              taking website to make it easier for our teachers to take the
              attendance of the students. Not only will this only take a few
              seconds instead of 10-20 minutes, but it will also avoid the
              chance of there being any false attendance being registered (NO
              PROXY). This is an honest effort by all of the brilliant members
              on this team to achieve the above-mentioned goal. Please click the
              below button to learn more about the members of this team.
            </p>
            <div className="button">
              <a href="./about1">Learn More</a>
            </div>
          </div>
          <div className="social">
            <a href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="image-section-logo">
        <img src={ClgLogo} alt="IIITL Logo" />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default AboutUs;