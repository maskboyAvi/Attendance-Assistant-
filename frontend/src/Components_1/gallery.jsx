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
        <div className="container-gly">
        <h1 className="h-anime-gly">PHOTO GALLERY</h1>
        <section className='section-gly'>
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
              Akhilender Bongirwar
            </li>
            <li
              className={`list ${activeFilter === 'CSN' ? 'active' : ''}`}
              onClick={() => this.handleFilterClick('CSN')}
              data-filter="CSN"
            >
              Chitta Sri Naga Sankara Pavana Saketh Ram
            </li>
          </ul>
          <div className="Boys-gly Boys-upper-gly">
            <div
              className={`pic-gly item-gly pic1-gly ${
                activeFilter === 'AKS' || activeFilter === 'all' ? 'active' : 'hide-gly'
              }`}
              data-item="AKS"
            >
              <img src={AKS} alt="Pic 1" />
            </div>
            <div
              className={`pic-gly item-gly pic2-gly ${
                activeFilter === 'ALD' || activeFilter === 'all' ? 'active' : 'hide-gly'
              }`}
              data-item="ALD"
            >
              <img src={ALD} alt="Pic 2" />
            </div>
            <div
              className={`pic-gly item-gly pic3-gly ${
                activeFilter === 'AK' || activeFilter === 'all' ? 'active' : 'hide-gly'
              }`}
              data-item="AK"
            >
              <img src={AK} alt="Pic 3" />
            </div>
            <div
              className={`pic-gly item-gly pic4-gly ${
                activeFilter === 'AG' || activeFilter === 'all' ? 'active' : 'hide-gly'
              }`}
              data-item="AG"
            >
              <img src={AG} alt="Pic 4" />
            </div>
            <div
              className={`pic-gly item-gly pic5-gly ${
                activeFilter === 'AB' || activeFilter === 'all' ? 'active' : 'hide-gly'
              }`}
              data-item="AB"
            >
              <img src={AB} alt="Pic 5" />
            </div>
            <div
              className={`pic-gly item-gly pic6-gly ${
                activeFilter === 'CSN' || activeFilter === 'all' ? 'active' : 'hide-gly'
              }`}
              data-item="CSN"
            >
              <img src={CSN} alt="Pic 6" />
            </div>
          </div>
          <div className="Boys-gly">
            <div className="h3-anime-gly">College Fest PICS [EQUINOX 2023]</div>
            <div className="seperator-gly"></div>
            <br />
            <div
              className={`pic-gly item-gly fun-gly pic7-gly ${
                activeFilter === 'all' ? 'active' : 'hide-gly'
              }`}
              data-item=""
            >
              <img src={Pic7} alt="Pic 7" />
            </div>
            <div
              className={`pic-gly item-gly fun-gly pic8-gly ${
                activeFilter === 'all' ? 'active' : 'hide-gly'
              }`}
              data-item=""
            >
              <img src={Pic8} alt="Pic 8" />
            </div>
            <div
              className={`pic-gly item-gly fun-gly pic9-gly ${
                activeFilter === 'all' ? 'active' : 'hide-gly'
              }`}
              data-item=""
            >
              <img src={Pic9} alt="Pic 9" />
            </div>
            <div
              className={`pic-gly item-gly fun-gly pic10-gly ${
                activeFilter === 'all' ? 'active' : 'hide-gly'
              }`}
              data-item=""
            >
              <img src={Pic10} alt="Pic 10" />
            </div>
            <div
              className={`pic-gly item-gly fun-gly pic11-gly ${
                activeFilter === 'all' ? 'active' : 'hide-gly'
              }`}
              data-item=""
            >
              <img src={Pic11} alt="Pic 11" />
            </div>
            <div
              className={`pic-gly item-gly fun-gly pic12-gly ${
                activeFilter === 'all' ? 'active' : 'hide-gly'
              }`}
              data-item=""
            >
              <img src={Pic12} alt="Pic 12" />
            </div>
            <div
              className={`pic-gly item-gly fun-gly pic13-gly ${
                activeFilter === 'all' ? 'active' : 'hide-gly'
              }`}
              data-item=""
            >
              <img src={Pic13} alt="Pic 13" />
            </div>
            <div
              className={`pic-gly item-gly fun-gly pic14-gly ${
                activeFilter === 'all' ? 'active' : 'hide-gly'
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
