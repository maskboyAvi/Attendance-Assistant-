import React, { useState } from "react";
import "./Auth.css";
import "bootstrap/dist/css/bootstrap.min.css";
import astyles from "./Auth.module.css";
import axios from "axios";
import bcrypt from "bcryptjs";
import Header from "./header";
import Footer from "./footer";
export default function (props) {
  sessionStorage.setItem("jwt", "false");
  let [authMode, setAuthMode] = useState("signin");
  let [details, setDetails] = useState({
    name: "",
    rollNo: "",
    email: "",
    profession: "",
    password: "",
    confirmPassword: "",
  });
  let { name, rollNo, email, profession, password, confirmPassword } = details;

  let [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
    profession: "",
  });

  const handleSignin = (e) => {
    e.preventDefault();
    if (
      signinDetails.email &&
      signinDetails.password &&
      signinDetails.profession
    ) {
      if (signinDetails.profession === "Student") {
        axios
          .post("http://localhost:8080/authenticate", {
            email: signinDetails.email,
            password: signinDetails.password,
          })
          .then((res) => {
            console.log(res.data);
            sessionStorage.setItem("jwt", res.data.jwtToken);
            window.location.href = "/student-portal";
            alert("Login Successful");
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (signinDetails.profession === "Teacher") {
        axios
          .post("http://localhost:8080/authenticateTeacher", {
            email: signinDetails.email,
            password: signinDetails.password,
          })
          .then((res) => {
            console.log(res.data);
            sessionStorage.setItem("jwt", res.data.jwtToken);
            window.location.href = "/teacher-portal";
            alert("Login Successful");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const handleSigninChange = (e) => {
    setSigninDetails({ ...signinDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === "signup") {
      if (
        password === confirmPassword &&
        name &&
        rollNo &&
        email &&
        profession &&
        password &&
        confirmPassword
      ) {
        const hashedPassword = bcrypt.hashSync(password, 10);

        if (profession === "Student") {
          axios
            .post("http://localhost:8080/signup", {
              name,
              profession,
              email,
              password: hashedPassword,
              rollNo,
            })
            .then((res) => {
              console.log(res.data, res.status);
              setAuthMode("signin");
              alert("Account Created Successfully");
            })
            .catch((err) => {
              console.log(err);
            });
        } else if (profession === "Teacher") {
          axios
            .post("http://localhost:8080/signupTeacher", {
              name,
              email,
              password: hashedPassword,
              profession,
              rollNo,
            })
            .then((res) => {
              console.log(res.data);
              setAuthMode("signin");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } else {
        console.log("Error");
      }
    } else {
      console.log("Sign In");
    }
  };
  // get all the details from signup form and set it to details state
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <>
        <Header />
        <div className={astyles["Auth-form-container"]}>
          <form className={astyles["Auth-form"]}>
            <div className={astyles["Auth-form-content"]}>
              <h3 className={astyles["Auth-form-title"]}>Sign In</h3>

              <div className="form-group mt-3 mb-3">
                <label>Email address</label>
                <input
                  onChange={handleSigninChange}
                  name="email"
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3 mb-3">
                <label>Password</label>
                <input
                  onChange={handleSigninChange}
                  name="password"
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="form-group mt-3 mb-3">
                <label>Profession</label>
                <select
                  className="form-control mt-1"
                  name="profession"
                  id="profession"
                  onChange={handleSigninChange}
                  style={{ backgroundColor: "#ded6d660" }}
                >
                  <option
                    value=""
                    style={{ color: "gray", backgroundColor: "#ded6d660" }}
                  >
                    -- Select Profession
                  </option>
                  <option value="Teacher">Teacher</option>
                  <option value="Student">Student</option>
                </select>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  type="submit"
                  className="btn-1 btn-primary mx-auto"
                  onClick={handleSignin}
                >
                  Sign In
                </button>
              </div>
              <div className={`text-center ${astyles["text-not"]}`}>
                Not registered yet?{" "}
                <button
                  className={astyles["link-primary"]}
                  onClick={changeAuthMode}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className={astyles["Auth-form-container"]}>
        <form className={astyles["Auth-form"]}>
          <div className={astyles["Auth-form-content"]}>
            <h3 className={astyles["Auth-form-title"]}>Sign Up</h3>

            <div className="form-group mt-3 mb-3">
              <label>Full Name</label>
              <input
                onChange={handleChange}
                name="name"
                type="text"
                className="form-control mt-1"
                placeholder="Eg. Maskboy Avi"
                style={{color:"black"}}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Roll Number</label>
              <input
                onChange={handleChange}
                name="rollNo"
                type="text"
                className="form-control mt-1"
                placeholder="roll no here"
                style={{color:"black"}}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Profession</label>
              <select
                className="form-control mt-1"
                name="profession"
                id="profession"
                onChange={handleChange}
                style={{ backgroundColor: "#ded6d660" }}
              >
                <option value="" style={{ color: "gray" }}>
                 -- Select Profession
                </option>
                <option value="Teacher" style={{ color: "gray" }}>
                  Teacher
                </option>
                <option value="Student" style={{ color: "gray" }}>
                  Student
                </option>
              </select>
            </div>
            <div className="form-group mt-3 mb-3">
              <label>Password</label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            <div className="form-group mt-3 mb-3">
              <label>Confirm Password</label>
              <input
                onChange={handleChange}
                name="confirmPassword"
                type="password"
                className="form-control mt-1"
                placeholder="Confirm Password"
              />
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
              <button
                type="submit"
                className="btn-1 btn-primary mx-auto"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
            <div className={`text-center ${astyles["text-not"]}`}>
              Already registered?{" "}
              <span
                className={astyles["link-primary"]}
                onClick={changeAuthMode}
              >
                Sign In
              </span>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
