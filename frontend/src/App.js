// import './App.css';
import React from 'react';
import Home from './Components_1/home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from './Components_1/about';
import AboutUs1 from './Components_1/aboutUs';
import Contact from './Components_1/contact';
import Gallery from './Components_1/gallery';
import SPortal from './Components_1/SPortal';
import TPortal from './Components_1/TPortal';

function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about1" element={<AboutUs1 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/student-portal" element={<SPortal/>} />
          <Route path="/teacher-portal" element={<TPortal/>} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Default fallback route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
