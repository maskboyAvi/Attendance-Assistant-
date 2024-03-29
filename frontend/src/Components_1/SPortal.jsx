import React, { useEffect, useState } from "react";
import SPortalCss from "./SPortal.module.css";
import NavPortal from "./Nav-Portal";
import Footer from "./footer";
import InputPort from "./InputPort";
import studImg from "../Images/SPortal_stud.png";
import inputCss from "./Input.module.css";

function SPortal() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if (jwt === "false") {
      alert("Please login");
      window.location.href = "/auth";
    }
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      console.log(latitude,longitude);
    })
  }, []);

  const [coordinates, setCoordinates] = useState(null);

  function mypost() {
    const id = document.getElementById("in1-s").value;
    const na = document.getElementById("in2-s").value;
    const email = document.getElementById("in3-s").value;
    // const latitude = null;
    // const longitude = null;

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       // const  latitude  = position.coords.latitude;
    //       // const  longitude  = position.coords.longitude;
    //       // // setCoordinates({ latitude, longitude });
    //       // setLatitut(latitude);
    //       // setLongi(longitude);
    //       // console.log(latitude)
    //       // console.log(longitude)
    //       console.log(position)
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // } else {
    //   console.log("Geolocation is not supported");
    // }


    fetch("http://localhost:8080/mark", {
      method: "POST",
      body: JSON.stringify({
        rollno: id,
        code: na,
        email: email,
        latitude: latitude,
        longitude: longitude,
      }),

      headers: {
        Accept: "application/json",
        "Content-type": "application/json;",
      },
    });
  }


  return (
    <>
      <NavPortal />
      <div className={SPortalCss["main-div-sportal"]}>
        <section className={SPortalCss["hero"]}>
          <div className={SPortalCss["hero-text"]}>
            <h4>&#183; Attendance Assistant &#183;</h4>
            <h1>Welcome to Student Portal</h1>
            <p>
              <strong>Never Miss a Beat</strong>
              <br /> Stay on Top of Your Attendance With our state-of-the-art
              student portal attendance system, we make attendance tracking a
              breeze. Say goodbye to traditional paper-based methods and embrace
              a seamless and efficient way to monitor your attendance record.
            </p>
          </div>
          <div className={SPortalCss["hero-pic"]}>
            <img src={studImg} alt="Hero_Image" />
          </div>
        </section>

        <section>
          <div className={SPortalCss["stud-content"]}>
            <h1 className={SPortalCss["stud-heading"]}>
              &#183; GIVE ATTENDANCE &#183;
            </h1>
            <form className={inputCss.form}>
              <span className={inputCss["input-span"]}>
                <label htmlFor="in1-s" className={inputCss.label}>
                  Enter RollNo:
                </label>
                <input type="text" name="rollNo" id="in1-s" />
              </span>
              <span className={inputCss["input-span"]}>
                <label htmlFor="in3-s" className={inputCss.label}>
                  Enter CourseId:
                </label>
                <input type="text" name="rollNo" id="in3-s" />
              </span>
              <span className={inputCss["input-span"]}>
                <label htmlFor="in2-s" className={inputCss.label}>
                  Enter Code:
                </label>
                <input type="text" name="code" id="in2-s" />
              </span>
              <span className={inputCss.span}>
                <a href="#">How to Get Code?</a>
              </span>
              <button
                className={inputCss.submit}
                onClick={mypost}
              >
                Submit
              </button>
              {/* <span className={inputCss.span}>
                Don't have an account? <a href="#">Sign up</a>
              </span> */}
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default SPortal;
