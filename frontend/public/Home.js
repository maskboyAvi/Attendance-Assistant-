import React from 'react'
import { Link } from "react-router-dom";
import './Home.css'
import Service from './Service';
const Home = () => {
  return (
    <>
    {/* HerBegin */}
        <section className='hero'>
        <div class="hero-text">
            <h4>&#183; Attendance Assistant &#183;</h4>
            <h1>Taking Attendance Made Easy</h1>
            <p>
                Still calling out each student's name in class?<br/>
                You are just one click away.
            </p>
            <a href="./Portal.html" class="btn">Start Now</a>
            {/* <Link to="" className="btn">Start Now</Link> */}
        </div>
        <div class="hero-pic">
            <img src="./hero.png" alt="Hero_Image" />
        </div>
        </section>
        {/* HeroEnd */}
        {/* Service */}
        <section>
        <div class="team-text ">
            <h4>&#183; Our Services &#183;</h4>
            <div class="team-head">Services We Offer </div>
            <p>Customer satisfaction is of the highest priority for us. We value our user's time and experience. We
                provide a variety of services related to class attendance at one place in a beautiful and simple way.
            </p>
        </div>
        <div class="big-box">
         <Service title="Single Click" desc="Taking attendance is possible with a single click of a button. You do not need to call names of
                        each person." icon="ri-window-2-line" />
            {/* <div class="small-box">
                <div class="service-icon">
                    <i class="ri-window-2-line"></i>
                </div>
                <div>
                    <h3 class="service-title">Single Click</h3>
                    <p class="service-text">
                        Taking attendance is possible with a single click of a button. You do not need to call names of
                        each person.
                    </p>
                </div>
            </div> */}
            {/* <div class="small-box">
                <div class="service-icon">
                    <i class='bx bxl-graphql'></i>
                </div>
                <div>
                    <h3 class="service-title">Multiple Route</h3>
                    <p class="service-text">
                        Maintaining multiple classes by a single user is possible. User does not need to create multiple
                        accounts.
                    </p>
                </div>
                </div> */}
            <Service title="Multiple Route" desc="Maintaining multiple classes by a single user is possible. User does not need to create multiple
                        accounts." icon="bx bxl-graphql" />
            {/* <div class="small-box">
                <div class="service-icon">
                    <i class='bx bx-git-pull-request'></i>
                </div>
                <div>
                    <h3 class="service-title">Github Support</h3>
                    <p class="service-text">
                        User can Import / export data from or to a github repository.
                    </p>
                </div>
                <a class="read-more" href="https://github.com/maskboyAvi/Attendance-Assistant-" target="_blank">Go to GitHub
                    <span class="arrow">
                        <i class="ri-arrow-right-line"></i>
                    </span></a>
            </div> */}
            <Service title="Github Support" desc="User can Import / export data from or to a github repository." flag="1" 
            flagUrl="https://github.com/maskboyAvi/Attendance-Assistant-" flagDesc="Go to GitHub" icon="bx bx-git-pull-request" />
            <Service title="Database" desc="Database for a separate class is maintained separately ensuring security and consistent database
                        management." flag="1" icon="bx bx-buildings"
            flagUrl="https://cloud.mongodb.com/v2/640a10ec4328ee356c183af8#/clusters" flagDesc="Go To MongoDB" />
            {/* <div class="small-box">
                <div class="service-icon">
                    <i class='bx bx-buildings'></i>
                </div>
                <div>
                    <h3 class="service-title">Database</h3>
                    <p class="service-text">
                        Database for a separate class is maintained separately ensuring security and consistent database
                        management.
                    </p>
                </div><a class="read-more" href="https://cloud.mongodb.com/v2/640a10ec4328ee356c183af8#/clusters" target="_blank">Go To MongoDB
                    <span class="arrow">
                        <i class="ri-arrow-right-line"></i>
                    </span></a>
            </div> */}
            <Service title="Security" desc="Every user is authenticated via their username and password. Database is only accesssible to
                        authorised personel only." icon="ri-lock-2-line" />
            {/* <div class="small-box">
                <div class="service-icon">
                    <i class="ri-lock-2-line"></i>
                </div>
                <div>
                    <h3 class="service-title">Security</h3>
                    <p class="service-text">
                        Every user is authenticated via their username and password. Database is only accesssible to
                        authorised personel only.
                    </p>
                </div>
                </div> */}
             <Service title="Platform Support" desc="Attendance Assistant is supported and available freely across different platforms such as
                        android, ios or webpage." icon="bx bx-link" />   
            {/* <div class="small-box">
                <div class="service-icon">
                    <i class='bx bx-link'></i>
                </div>
                <div>
                    <h3 class="service-title">Platform Support</h3>
                    <p class="service-text">
                        Attendance Assistant is supported and available freely across different platforms such as
                        android, ios or webpage.
                    </p>
                </div>
                </div> */}
        </div>
    </section>
    {/* Service End*/}
    {/* Choose US */}
    <section className="about">
        <div className="about-text">
            <h4>&#183; Why Choose Us &#183;</h4>
            <h2>Trusted By Clients <br />All Over India</h2>
            <p>
                We made a time consuming daily task just a click job.
                Now you can check who showed for a particular meeting or a class
                on a particular day without maintaining any paperwork.
            </p>
            <div className="numbers">
                <div className="rownum">
                    <div className="num1">01.</div>
                    <div className="numtext">
                        <h3>Latest Technology</h3>
                    </div>
                </div>
                <div className="rownum">
                    <div className="num1">02.</div>
                    <div className="numtext">
                        <h3>Unique Solutions</h3>
                    </div>
                </div>
                <div className="rownum">
                    <div className="num1">03.</div>
                    <div className="numtext">
                        <h3>Powerful Strategies</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-pic">
            <img src="./chooseus.svg" alt="About" />
        </div>
    </section>
    {/* Testimonials Section */}
    <div className="about-text test">
        <h4>&#183; Testimonials &#183;</h4>
    </div>
    <section className="testi-container">
        <div className="testimonial mySwiper">
            <div className="testi-content swiper-wrapper">
                <div className="slide swiper-slide">
                    <img src="/images/testi1.png" alt="" className="testi-image" />
                    <p>Attendance Assistant has been a great help for me in maintaining my class' attendance. I teach around 5 classes a day and it was really a hassle to maintain the attendance records of each student. Now it is just a one click job.</p>

                    <i className='bx bxs-quote-alt-left quote-icon'></i>

                    <div className="details">
                        <span className="name">Ankush Kushwaha</span>
                        <span className="job">Teacher</span>
                    </div>
                </div>
                <div className="slide swiper-slide">
                    <img src="/images/testi2.png" alt="" className="testi-image" />
                    <p>My job includes numerous meetings with hundreds of people on a regular basis. But before starting every meeting I had to check who is not present manually. After I started using Attendance Assistant, it is super easy and non time consuming.</p>

                    <i className='bx bxs-quote-alt-left quote-icon'></i>

                    <div className="details">
                        <span className="name">Anurag Singh</span>
                        <span className="job">Team Manager</span>
                    </div>
                </div>
                <div className="slide swiper-slide">
                    <img src="/images/testi3.png" alt="" class="testi-image" />
                    <p>Ever since I became a teacher, the most tedious and non sensical job was taking attendance in class manually. Attendance Assistant has made this a quick and easy one click job. So thankful to the creators.</p>

                    <i className='bx bxs-quote-alt-left quote-icon'></i>

                    <div className="details">
                        <span className="name">Manroop Kaur</span>
                        <span className="job">Teacher</span>
                    </div>
                </div>
            </div>
            <div className="nav-hide">
                <div className="swiper-button-next"></div>
            </div>
            <div className="nav-hide">
                <div className="swiper-button-prev"></div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </section>
    {/* Contact us  */}
    <section className="contact" style={{backgroundImage:"url(/bgcontact.jpg)"}}>
        <div className="contact-div">
            <h2>Have a question?</h2>
            <a href="./Contact_us.html" className="btn talk">Let's talk</a>
        </div>
    </section>
    </>
  )
}

export default Home
// This is page after login what we get....
// Like if (teacher) <TPortal />
// else <SPortal />