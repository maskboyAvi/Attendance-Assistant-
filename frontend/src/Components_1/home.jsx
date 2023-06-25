import React from 'react'
import hme from "./home.module.css"
import Service from './Service';
import Testimonials from './Testimonials';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
        <Header />
    {/* HeroBegin */}
        <section className={hme['hero']}>
        <div className={hme["hero-text"]}>
            <h4>&#183; Attendance Assistant &#183;</h4>
            <h1>Taking Attendance Made Easy</h1>
            <p>
                Still calling out each student's name in class?<br/>
                You are just one click away.
            </p>
            <Link to='/portals' className={hme["btn-home"]}>Start Now</Link>
            {/* <Link to="" className={hme["btn-home">Start Now</Link>]} */}
        </div>
        <div className={hme["hero-pic"]}>
            <img src="./hero.png" alt="Hero_Image" />
        </div>
        </section>
        {/* HeroEnd */}
        {/* Service */}
        <section>
        <div className={hme["team-text"]}>
            <h4>&#183; Our Services &#183;</h4>
            <div className={hme["team-head"]}>Services We Offer </div>
            <p>Customer satisfaction is of the highest priority for us. We value our user's time and experience. We
                provide a variety of services related to class attendance at one place in a beautiful and simple way.
            </p>
        </div>
        <div className={hme["big-box"]}>
         <Service title="Single Click" desc="Taking attendance is possible with a single click of a button. You do not need to call names of
                        each person." icon="ri-window-2-line" />
            <Service title="Multiple Route" desc="Maintaining multiple classes by a single user is possible. User does not need to create multiple
                        accounts." icon="bx bxl-graphql" />
            <Service title="Github Support" desc="User can Import / export data from or to a github repository." flag="1" 
            flagUrl="https://github.com/maskboyAvi/Attendance-Assistant-" flagDesc="Go to GitHub" icon="bx bx-git-pull-request" />
            <Service title="Database" desc="Database for a separate class is maintained separately ensuring security and consistent database
                        management." flag="1" icon="bx bx-buildings"
            flagUrl="https://cloud.mongodb.com/v2/640a10ec4328ee356c183af8#/clusters" flagDesc="Go To MongoDB" />
            <Service title="Security" desc="Every user is authenticated via their username and password. Database is only accesssible to
                        authorised personel only." icon="ri-lock-2-line" />
             <Service title="Platform Support" desc="Attendance Assistant is supported and available freely across different platforms such as
                        android, ios or webpage." icon="bx bx-link" />   
        </div>
    </section>
    {/* Service End*/}
    {/* Choose US */}
    <section className={hme["about"]}>
        <div className={hme["about-text"]}>
            <h4>&#183; Why Choose Us &#183;</h4>
            <h2>Trusted By Clients <br />All Over India</h2>
            <p>
                We made a time consuming daily task just a click job.
                Now you can check who showed for a particular meeting or a class
                on a particular day without maintaining any paperwork.
            </p>
            <div className={hme["numbers"]}>
                <div className={hme["rownum"]}>
                    <div className={hme["num1"]}>01.</div>
                    <div className={hme["numtext"]}>
                        <h3>Latest Technology</h3>
                    </div>
                </div>
                <div className={hme["rownum"]}>
                    <div className={hme["num1"]}>02.</div>
                    <div className={hme["numtext"]}>
                        <h3>Unique Solutions</h3>
                    </div>
                </div>
                <div className={hme["rownum"]}>
                    <div className={hme["num1"]}>03.</div>
                    <div className={hme["numtext"]}>
                        <h3>Powerful Strategies</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className={hme["about-pic"]}>
            <img src="./chooseus.svg" alt="About" />
        </div>
    </section>
    {/* Testimonials Section */}
    <div className={hme["about-text","test"]}>
        <h4>&#183; Testimonials &#183;</h4>
    </div>
    <Testimonials />
    {/* Contact us  */}
    <section className={hme["contact"]} style={{backgroundImage:"url(/bgcontact.jpg)"}}>
        <div className={hme["contact-div"]}>
            <h2>Have a question?</h2>
            <Link to="/contact" className={hme["btn-home"]}>Let's talk</Link>
        </div>
    </section>
    {/* Footer */}
    <Footer />
    </>
  )
}

export default Home
//This is Home page actually 