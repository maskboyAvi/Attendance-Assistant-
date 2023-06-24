import React, { Component } from 'react';
import './gallery.css';
import Header from './header';
import Footer from './footer';

import AKS from '../Images/Main/AKS.jpeg';
import ALD from '../Images/Main/Atharva.jpeg';
import AK from '../Images/Main/Aviral.jpeg';
import AG from '../Images/Main/Ayush.jpeg';
import AB from '../Images/Main/Akhil.jpeg';
import CSN from '../Images/Main/CSNPSR.jpeg';
import Pic7 from '../Images/Equinox/WhatsApp Image 2023-03-10 at 10.28.53 PM.jpeg';
import Pic8 from '../Images/Equinox/WhatsApp Image 2023-03-10 at 10.28.54 PM (1).jpeg';
import Pic9 from '../Images/Equinox/WhatsApp Image 2023-03-10 at 10.28.55 PM (1).jpeg';
import Pic10 from '../Images/Equinox/WhatsApp Image 2023-03-10 at 10.28.55 PM.jpeg';
import Pic11 from '../Images/Equinox/WhatsApp Image 2023-03-10 at 10.33.05 PM.jpeg';
import Pic12 from '../Images/Equinox/WhatsApp Image 2023-03-10 at 10.31.12 PM (1).jpeg';
import Pic13 from '../Images/Equinox/WhatsApp Image 2023-03-10 at 10.28.54 PM.jpeg';
import Pic14 from '../Images/Equinox/WhatsApp Image 2023-03-10 at 10.32.35 PM.jpeg';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: 'all',
    };
  }

  handleFilterClick = (filter) => {
    this.setState({ activeFilter: filter });
  };

  render() {
    const { activeFilter } = this.state;

    return (
      <>
        <Header />
        <div className="container">
        <h1 className="h-anime">PHOTO GALLERY</h1>
        <section>
          <ul>
            <li
              className={`list ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => this.handleFilterClick('all')}
              data-filter="all"
            >
              All
            </li>
            <li
              className={`list ${activeFilter === 'AKS' ? 'active' : ''}`}
              onClick={() => this.handleFilterClick('AKS')}
              data-filter="AKS"
            >
              Atharv Krishnarao Sawant
            </li>
            <li
              className={`list ${activeFilter === 'ALD' ? 'active' : ''}`}
              onClick={() => this.handleFilterClick('ALD')}
              data-filter="ALD"
            >
              Atharva Lalit Dudhe
            </li>
            <li
              className={`list ${activeFilter === 'AK' ? 'active' : ''}`}
              onClick={() => this.handleFilterClick('AK')}
              data-filter="AK"
            >
              Aviral Katiyar
            </li>
            <li
              className={`list ${activeFilter === 'AG' ? 'active' : ''}`}
              onClick={() => this.handleFilterClick('AG')}
              data-filter="AG"
            >
              Ayush Gupta
            </li>
            <li
              className={`list ${activeFilter === 'AB' ? 'active' : ''}`}
              onClick={() => this.handleFilterClick('AB')}
              data-filter="AB"
            >
              Akhilender bongawir
            </li>
            <li
              className={`list ${activeFilter === 'CSN' ? 'active' : ''}`}
              onClick={() => this.handleFilterClick('CSN')}
              data-filter="CSN"
            >
              Chitta Sri Naga Sankara Pavana Saketh Ram
            </li>
          </ul>
          <div className="Boys Boys-upper">
            <div
              className={`pic item pic1 ${
                activeFilter === 'AKS' || activeFilter === 'all' ? 'active' : 'hide'
              }`}
              data-item="AKS"
            >
              <img src={AKS} alt="Pic 1" />
            </div>
            <div
              className={`pic item pic2 ${
                activeFilter === 'ALD' || activeFilter === 'all' ? 'active' : 'hide'
              }`}
              data-item="ALD"
            >
              <img src={ALD} alt="Pic 2" />
            </div>
            <div
              className={`pic item pic3 ${
                activeFilter === 'AK' || activeFilter === 'all' ? 'active' : 'hide'
              }`}
              data-item="AK"
            >
              <img src={AK} alt="Pic 3" />
            </div>
            <div
              className={`pic item pic4 ${
                activeFilter === 'AG' || activeFilter === 'all' ? 'active' : 'hide'
              }`}
              data-item="AG"
            >
              <img src={AG} alt="Pic 4" />
            </div>
            <div
              className={`pic item pic5 ${
                activeFilter === 'AB' || activeFilter === 'all' ? 'active' : 'hide'
              }`}
              data-item="AB"
            >
              <img src={AB} alt="Pic 5" />
            </div>
            <div
              className={`pic item pic6 ${
                activeFilter === 'CSN' || activeFilter === 'all' ? 'active' : 'hide'
              }`}
              data-item="CSN"
            >
              <img src={CSN} alt="Pic 6" />
            </div>
          </div>
          <div className="Boys">
            <div className="h3-anime">College Fest PICS [EQUINOX 2023]</div>
            <div className="seperator"></div>
            <br />
            <div
              className={`pic item fun pic7 ${
                activeFilter === 'all' ? 'active' : 'hide'
              }`}
              data-item=""
            >
              <img src={Pic7} alt="Pic 7" />
            </div>
            <div
              className={`pic item fun pic8 ${
                activeFilter === 'all' ? 'active' : 'hide'
              }`}
              data-item=""
            >
              <img src={Pic8} alt="Pic 8" />
            </div>
            <div
              className={`pic item fun pic9 ${
                activeFilter === 'all' ? 'active' : 'hide'
              }`}
              data-item=""
            >
              <img src={Pic9} alt="Pic 9" />
            </div>
            <div
              className={`pic item fun pic10 ${
                activeFilter === 'all' ? 'active' : 'hide'
              }`}
              data-item=""
            >
              <img src={Pic10} alt="Pic 10" />
            </div>
            <div
              className={`pic item fun pic11 ${
                activeFilter === 'all' ? 'active' : 'hide'
              }`}
              data-item=""
            >
              <img src={Pic11} alt="Pic 11" />
            </div>
            <div
              className={`pic item fun pic12 ${
                activeFilter === 'all' ? 'active' : 'hide'
              }`}
              data-item=""
            >
              <img src={Pic12} alt="Pic 12" />
            </div>
            <div
              className={`pic item fun pic13 ${
                activeFilter === 'all' ? 'active' : 'hide'
              }`}
              data-item=""
            >
              <img src={Pic13} alt="Pic 13" />
            </div>
            <div
              className={`pic item fun pic14 ${
                activeFilter === 'all' ? 'active' : 'hide'
              }`}
              data-item=""
            >
              <img src={Pic14} alt="Pic 14" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
      </>
    );
  }
}

export default PhotoGallery;
