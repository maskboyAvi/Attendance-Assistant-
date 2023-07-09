import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import tms from './home.module.css';

const Testimonials = () => {

  return (
    <section className={tms["testi-container"]}>
      <Swiper 
        navigation={true}
        modules={[Navigation]}
        className={tms["testimonial"]}>
        <SwiperSlide>
          <div className={tms["slide"]}>
            <img src="/testi1.png" alt="" className={tms["testi-image"]} />
            <p>
              Attendance Assistant has been a great help for me in maintaining my class' attendance. I teach around 5
              classes a day and it was really a hassle to maintain the attendance records of each student. Now it is
              just a one click job.
            </p>
            <i className={tms["bx bxs-quote-alt-left quote-icon"]}></i>
            <div className={tms["details"]}>
              <span className={tms["name"]}>Ankush Kushwaha</span>
              <span className={tms["job"]}>Teacher</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={tms["slide"]}>
            <img src="./testi2.png" alt="" className={tms["testi-image"]} />
            <p>
              My job includes numerous meetings with hundreds of people on a regular basis. But before starting every
              meeting I had to check who is not present manually. After I started using Attendance Assistant, it is super
              easy and non time consuming.
            </p>
            <i className={tms["bx bxs-quote-alt-left quote-icon"]}></i>
            <div className={tms["details"]}>
              <span className={tms["name"]}>Anurag Singh</span>
              <span className={tms["job"]}>Team Manager</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={tms["slide"]}>
            <img src="/testi3.png" alt="" className={tms["testi-image"]} />
            <p>
              Ever since I became a teacher, the most tedious and non sensical job was taking attendance in class
              manually. Attendance Assistant has made this a quick and easy one click job. So thankful to the creators.
            </p>
            <i className={tms["bx bxs-quote-alt-left quote-icon"]}></i>
            <div className={tms["details"]}>
              <span className={tms["name"]}>Akanksha Yadav</span>
              <span className={tms["job"]}>Teacher</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials
