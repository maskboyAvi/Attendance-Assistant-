import React from 'react';
import ftr from './footer.module.css';

const Footer = () => {
  return (
    <footer className={ftr["footer"]}>
      <div className={ftr["foot-con"]}>
        <div className={ftr["row"]}>
          <div className={ftr["footer-col"]}>
            <h4>Company</h4>
            <ul>
              <li><a href="./aboutus1.html">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
          <div className={ftr["footer-col"]}>
            <h4>Get Help</h4>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="./Contact_us.html">Contact Us</a></li>
              <li><a href="#">Reviews</a></li>
            </ul>
          </div>
          <div className={ftr["footer-col"]}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="./Home.html">Home</a></li>
              <li><a href="./Portal.html">Portals</a></li>
              <li><a href="./gallery.html">Gallery</a></li>
            </ul>
          </div>
          <div className={ftr["footer-col"]}>
            <h4>Follow Us</h4>
            <div className={ftr["svg-wrap"]}>
              <a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="60.734" height="60.733" viewBox="0 0 60.734 60.733"><path d="M57.378 0H3.352C1.502 0 0 1.5 0 3.354V57.38c0 1.852 1.502 3.353 3.352 3.353h29.086v-23.52h-7.914v-9.166h7.914v-6.76c0-7.843 4.79-12.116 11.787-12.116 3.355 0 6.222.25 7.07.36v8.198l-4.865.003c-3.798 0-4.527 1.808-4.527 4.464v5.852h9.047l-1.183 9.166h-7.865v23.52h15.42c1.852 0 3.352-1.5 3.352-3.353V3.354C60.73 1.5 59.23 0 57.378 0zM35.706 22.93c-2.253 0-4.086-1.833-4.086-4.085 0-2.253 1.833-4.086 4.086-4.086 2.252 0 4.085 1.833 4.085 4.086 0 2.252-1.833 4.085-4.085 4.085zm8.283 19.125h-8.283V30.258h8.283zm0 0" fill="#fff" /></svg></a>
              <a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="56.693" height="56.693" viewBox="0 0 56.693 56.693"><path d="M56.693 27.54c0-1.85-.143-3.672-.426-5.457.292-.436.547-.924.754-1.457a10.057 10.057 0 0 1-.36 3.15 10.066 10.066 0 0 1-9.82 7.762c-.97.008-1.94-.12-2.888-.375.43 1.402 1.668 3.36 3.735 4.83a10.12 10.12 0 0 1-4.573-2.883v.117c0 3.064.864 5.91 2.886 8.3-1.5.16-3.028.057-4.525-.378a28.402 28.402 0 0 0 15.462 4.522c18.448 0 28.57-15.274 28.57-28.57l-.035-1.302A20.25 20.25 0 0 0 56.693 27.54zm0 0" fill="#fff" /></svg></a>
              <a href="#" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="56.693" height="56.693" viewBox="0 0 56.693 56.693"><path d="M56.693 27.54c0-1.85-.143-3.672-.426-5.457.292-.436.547-.924.754-1.457a10.057 10.057 0 0 1-.36 3.15 10.066 10.066 0 0 1-9.82 7.762c-.97.008-1.94-.12-2.888-.375.43 1.402 1.668 3.36 3.735 4.83a10.12 10.12 0 0 1-4.573-2.883v.117c0 3.064.864 5.91 2.886 8.3-1.5.16-3.028.057-4.525-.378a28.402 28.402 0 0 0 15.462 4.522c18.448 0 28.57-15.274 28.57-28.57l-.035-1.302A20.25 20.25 0 0 0 56.693 27.54zm0 0" fill="#fff" /></svg></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;