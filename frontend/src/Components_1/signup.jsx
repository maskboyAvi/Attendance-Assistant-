import React, { useState } from 'react';
import './signup.css'
import {Link} from "react-router-dom"

function Signup() {
  const [Name, setName] = useState('');
  const [RollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [agreeLicense, setAgreeLicense] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'Name') {
      setName(value);
    } else if (name === 'RollNumber') {
      setRollNumber(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'profession') {
      setProfession(value);
    } else if (name === 'agreeLicense') {
      setAgreeLicense(event.target.checked);
    }
  };

  console.log(profession)

  const handleSubmit = (event) => {
    event.preventDefault();
    // if the fields are not filled alert invalid
    if (!Name || !RollNumber || !password || !confirmPassword || !email || !profession || !agreeLicense) {
      alert('Invalid Input');
    }
    else if (password !== confirmPassword) {
      alert('Passwords do not match');
    }
    else {
      alert(`Hello ${Name} ${RollNumber} ${email} ${profession} ${agreeLicense}`);
    }
  };

  return (
    <div className='sign-in-div'>
    <form onSubmit={handleSubmit} className='signup-form'>
      <h1 className='h1-signup'>Sign Up</h1>
      <p className='h1-signup'>Welcome to Sunmade!</p>
      <p className='h1-signup'>Sign up to join our company</p>
      <div className='div-signup'>
        <label htmlFor="name" className='sign-in-label'>First Name:</label>
        <input className="sign-in-input"
          type="text"
          name="Name"
          id="name"
          value={Name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='div-signup'>
        <label htmlFor='profession' className='sign-in-label'>
            Select profession
        </label>
        <select id="profession" 
        name="profession" className="sign-in-input" style={{"color":'gray'}}>
            <option value ="" style={{"color":'gray'}}> ---Choose Profession--- </option>  
            <option value="Teacher" style={{"color":'gray'}}> Teacher </option>  
            <option value="Student" style={{"color":'gray'}}> Student </option>  
            </select>
      </div>
      <div className='div-signup'>
        <label htmlFor="RollNumber" className='sign-in-label'>Roll Number:</label>
        <input className="sign-in-input"
          type="text"
          name="RollNumber"
          id="RollNumber"
          value={RollNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='div-signup'>
        <label htmlFor="email" className='sign-in-label'>Email:</label>
        <input className="sign-in-input"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='div-signup'>
        <label htmlFor="password" className='sign-in-label'>Password:</label>
        <input className="sign-in-input"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='div-signup'>
        <label htmlFor="confirm_password" className='sign-in-label'>Confirm Password:</label>
        <input className="sign-in-input"
          type="password"
          name="confirmPassword"
          id="confirm_password"
          value={confirmPassword}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className='div-signup'>
        <label htmlFor="license" className='sign-in-label'>
          Read and agree to our license/terms?
          <input className="sign-in-input"
            type="checkbox"
            name="agreeLicense"
            id="license"
            checked={agreeLicense}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <Link to="/portals" className='div-signup'>
        <input className="sign-in-input" type="submit" value="Sign Up"  />
      </Link>
    </form>
    </div>
  );
}

export default Signup;