import React, { useEffect, useState } from "react";
import SPortalCss from "./SPortal.module.css";
import myImageT from "../Images/teach.png";
import NavPortal from "./Nav-Portal";
import Footer from "./footer";
import TableComponent from "./Table";

import studImg from "../Images/SPortal_stud.png";
import inputCss from "./Input.module.css";
function TPortal() {
  const [code1, setCode] = useState("");
  const [roll, setRoll] = useState("");
  let [details, setDetails] = useState({
    code: "",
    rollNo: "",
  });
  let { code, rollNo } = details;
  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if (jwt === "false") {
      alert("Please login");
      window.location.href = "/auth";
    }
  }, []);

  const handleSignin = (e) => {
    e.preventDefault();
    console.log(code);
    console.log(rollNo);
  };

  function create() {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 6) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    console.log(result);
    setCode(result);
    // document.getElementById("code-T").innerHTML = result;
    var inputElement = document.getElementById("code-T");
    inputElement.disabled = false; // Remove the disabled attribute temporarily

    inputElement.value = result; // Update the value
    inputElement.disabled = true; // Reapply the disabled attribute
  }

  const end = () => {
    const jwt = sessionStorage.getItem("jwt");

    fetch("http://localhost:8080/addcode", {
      method: "POST",
      body: JSON.stringify({
        rollno: roll,
        code: code1,
      }),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json;",
      },
    });
  };

  const ata = () => {
    document.getElementById("atte").innerHTML = "RollNo of Present Student : ";
    fetch("http://localhost:8080/check")
      .then((response) => response.json())
      .then((result) => (document.getElementById("atte").innerHTML += result))
      .catch((error) => console.log("error", error));
  };

  const resetFunc = () => {
    console.log("Set Null value in db");
  };
  const divStyle = {
    color: "white",
  };
  return (
    <>
      <NavPortal />
      <div className="main-div-tportal">
        <div className={SPortalCss["main-div-tportal"]}>
          <section className={SPortalCss["hero"]}>
            <div className={SPortalCss["hero-text"]}>
              <h4>&#183; Attendance Assistant &#183;</h4>
              <h1>Welcome to Teacher Portal</h1>
              <p>
                <strong>Never Miss a Beat</strong>
                <br /> Stay on Top of Your Attendance With our state-of-the-art
                student portal attendance system, we make attendance tracking a
                breeze. Say goodbye to traditional paper-based methods and
                embrace a seamless and efficient way to monitor your attendance
                record.
              </p>
            </div>
            <div className={SPortalCss["hero-pic"]}>
              <img src={studImg} alt="Hero_Image" />
            </div>
          </section>

          <section>
            <div className={SPortalCss["stud-content"]}>
              <h1 className={SPortalCss["stud-heading"]}>
                &#183; TAKE ATTENDANCE &#183;
              </h1>
              <form class={inputCss.form}>
                <div className={SPortalCss['courseid-inp']}>
                  <span className={inputCss["input-span"]}>
                    <label htmlFor="in1-s" className={inputCss.label}>
                      Enter CourseId:
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setRoll(e.target.value);
                      }}
                      name="rollNo"
                      id="in1-s"
                      placeholder="course id"
                      className={`${inputCss["courseid-inp"]} text-center`}
                    />
                  </span>
                </div>
                <div className={SPortalCss["btn-manage-sp"]}>
                  <button
                    className={inputCss.submit}
                    onClick={create}
                    type="button"
                    style={{ marginRight:"10px"}}
                  >
                    Create Code
                  </button>
                  <span class={inputCss["input-span"]}>
                    <input
                      type="text"
                      name="code"
                      id="code-T"
                      placeholder="Secret Code"
                      value={code1}
                      className="text-center"
                      disabled
                      style={divStyle}
                    />
                  </span>
                </div>
                <button class={inputCss.submit2} onClick={end} type="button">
                  Start Attendance
                </button>
                <button
                  class={inputCss.submit3}
                  onClick={resetFunc}
                  type="button"
                >
                  Stop Attendance
                </button>
                <div id="atte"></div>
                <div>
                  <TableComponent />
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TPortal;
