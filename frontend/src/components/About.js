import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="section-abt1">
        <div className="container-abt1">
            <div className="content-section-abt1">
             <div className="title-abt1">
                <h1>About Us</h1>
             </div>
             <div className="content-abt1">
                We are just a group of friends trying to make our teacher's life easier. 
                <p>We are students belonging to Indian Institute of Information Technology, Lucknow, who've come together to build this Attendance taking website to make it easier for our teachers to take the attendance of the students. Not only will this only take a fews seconds instead of 10-20 minutes, but it will also avoid the chance of there being any false attendance being registered (NO PROXY). This is an honest effort by all of the brilliant members on this team to achieve the above mentioned goal. Please click the below button to learn more about the members of this team.</p>
                <div className="button-abt1">
                    <a href="./aboutus2.html">Learn More</a>
                </div>
             </div>
        </div>
        </div>
        <div className="image-section-abt1">
            <img src="./Final_Logo_IIITL.png" alt="IITL" />
        </div>
    </div>
  )
}

export default About