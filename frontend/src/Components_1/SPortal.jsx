import React from 'react';
import './SPortal.css';
import myImageS from '../Images/std.png';
import NavPortal from './Nav-Portal';
import Footer from './footer';

function SPortal() {


  function mypost() {
    const id = (document.getElementById("in1-s").value)
    const na = document.getElementById("in2-s").value
    console.log(id)
    console.log(na)



    fetch("http://localhost:8080/mark", {
      method: "POST",
      body: JSON.stringify({
        rollno: id,
        code: na
      }),
      headers: {
        'Accept': 'application/json',
        "Content-type": "application/json;",
      }
    });
  }

  return (
    <>
    <NavPortal />
    <div className='main-div-sportal'>
      <h1 id="std">Welcome to Student Portal</h1>

      <div class="row">
        <div id="al" class="col-6">
          <h2>Enter the RollNO.</h2>
          <input type="text" id="in1-s" />
          <h2>Submit Code </h2>


          <input type="text" id="in2-s" /> <br></br>
          <button id="btn-s" onClick={mypost}>Submit</button>
        </div>
        <div class="col-6">
          <img alt="stdu" src={myImageS} id='stdu' />

        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default SPortal;