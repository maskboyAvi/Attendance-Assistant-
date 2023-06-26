import React from 'react';
import './TPortal.css';
import myImageT from '../Images/teach.png';
import NavPortal from './Nav-Portal';
import Footer from './footer';
import TableComponent from './Table';

function TPortal() {

  function create() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 6) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    document.getElementById("code-T").innerHTML = result;
  }

  const end = () => {
    fetch("http://localhost:8080/newday", {
      method: 'POST',
    })
      .then(response => response.text())
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log('Error:', error);
      });

  }

  const ata = () => {
    document.getElementById("atte").innerHTML = "RollNo of Present Student : "
    fetch("http://localhost:8080/check")
      .then(response => response.json())
      .then(result => document.getElementById("atte").innerHTML += result)
      .catch(error => console.log('error', error));
  }
  return (
    <>
      <NavPortal />
      <div className='main-div-tportal'>
        <h1 id="std">Welcome to Teacher  Portal</h1>

        <div id="al" class="row">
          <div class="col-6" >
            <h1 style={{ marginBottom: "-1rem", marginLeft: "1rem" }}>Create Code </h1>
            <button id="btn-t" onClick={create}>Create</button>
            <button onClick={end} id="btn-2-t">Start Time</button>
            <p id="code-T" style={{ marginLeft: "1rem" }}> </p>
          </div>
          <div>
            <img src={myImageT} alt="tec" id="tec" />
          </div>

        </div>
        <button onClick={ata} id="btn-2-t">Check Attendance</button>
        <div id="atte">

        </div>
        <div>
          <TableComponent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TPortal;