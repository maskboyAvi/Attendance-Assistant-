import React, { useEffect, useState } from 'react';
import "./Gallery.css";
import Footer from './Footer';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    const lists = document.querySelectorAll('.list');
    const items = document.querySelectorAll('.item');

    lists.forEach((list) => {
      list.addEventListener('click', function () {
        lists.forEach((list) => {
          list.classList.remove('active');
        });
        this.classList.add('active');

        const dataFilter = this.getAttribute('data-filter');
        setSelectedFilter(dataFilter);

        items.forEach((item) => {
          item.classList.remove('active');
          item.classList.add('hide');

          if (item.getAttribute('data-item') === dataFilter || dataFilter === 'all') {
            item.classList.remove('hide');
            item.classList.add('active');
          }
        });
      });
    });
  }, []);

  return (
    <div className="bdy">
      <div className="container">
        <h1 className="h-anime">PHOTO GALLERY</h1>
<<<<<<< HEAD
      </div>
      <section>
      <ul>
<li className="list active" data-filter="all">
            All
          </li>
          <li className="list" data-filter="AKS">
            Atharv Krishnarao Sawant
          </li>
          <li className="list" data-filter="ALD">
            Atharva Lalit Dudhe
          </li>
          <li className="list" data-filter="AK">
            Aviral Katiyar
          </li>
          <li className="list" data-filter="AG">
            Ayush Gupta
          </li>
          <li className="list" data-filter="AB">
            Akhilender bongawir
          </li>
          <li className="list" data-filter="CSN">
            Chitta Sri Naga Sankara Pavana Saketh Ram
          </li>
          <li className="list" data-filter="Vish">
            Vishal
          </li>
=======
    </div>
    <section>
        <ul>
            <li className="list active" data-filter="all">All</li>
            <li className="list" data-filter="AKS">Atharv Krishnarao Sawant</li>
            <li className="list" data-filter="ALD">Atharva Lalit Dudhe</li>
            <li className="list" data-filter="AK">Aviral Katiyar</li>
            <li className="list" data-filter="AG">Ayush Gupta</li>
            <li className="list" data-filter="AB">Akhilender Bongirwar</li>
            <li className="list" data-filter="CSN">Chitta Sri Naga Sankara Pavana Saketh Ram</li>
            <li className="list" data-filter="Vish">Vishal</li>
>>>>>>> 045557e436f3b7fa570f706b3870f6ccd8e8f27a
        </ul>

        <div className="Boys">
          <div className="pic item pic1" data-item="AKS">
            <img src="./Main/AKS.jpeg" alt="AKS" />
          </div>
          <div className="pic item pic2" data-item="ALD">
            <img src="./Main/Atharva.jpeg" alt="ALD" />
          </div>
          <div className="pic item pic3" data-item="AK">
            <img src="./Main/Aviral.jpeg" alt="AK" />
          </div>
          <div className="pic item pic4" data-item="AG">
            <img src="./Main/Ayush.jpeg" alt="AG" />
          </div>
          <div className="pic item pic5" data-item="AB">
            <img src="./Main/Akhil.jpeg" alt="AB" />
          </div>
          <div className="pic item pic6" data-item="CSN">
            <img src="./Main/CSNPSR.jpeg" alt="CSN" />
          </div>
          <div className="pic item pic7" data-item="Vish">
            <img src="./Main/Vishal.jpg" alt="Vish" />
          </div>
        </div>

        <div className="Boys">
          {selectedFilter === "all" && (
            <div className="h3-anime">College Fest PICS [EQUINOX 2023]</div>
          )}
          <div className="seperator"></div>
          <br></br>
          <div className="pic item fun pic7" data-item="">
            <img src="./Equinox\WhatsApp Image 2023-03-10 at 10.28.53 PM.jpeg" alt="Fun 7" />
          </div>
          <div className="pic item fun pic8" data-item="">
            <img src="./Equinox\WhatsApp Image 2023-03-10 at 10.28.54 PM (1).jpeg" alt="Fun 8" />
          </div>
          <div className="pic item fun pic9" data-item="">
            <img src="./Equinox/WhatsApp Image 2023-03-10 at 10.28.55 PM (1).jpeg" alt="Fun 9" />
          </div>
          <div className="pic item fun pic10" data-item="">
            <img src="./Equinox/WhatsApp Image 2023-03-10 at 10.28.55 PM.jpeg" alt="Fun 10" />
          </div>
          <div className="pic item fun pic11" data-item="">
            <img src="./Equinox/WhatsApp Image 2023-03-10 at 10.33.05 PM.jpeg" alt="Fun 11" />
          </div>
          <div className="pic item fun pic12" data-item="">
            <img src="./Equinox/WhatsApp Image 2023-03-10 at 10.31.12 PM (1).jpeg" alt="Fun 12" />
          </div>
          <div className="pic item fun pic13" data-item="">
            <img src="./Equinox/WhatsApp Image 2023-03-10 at 10.28.54 PM.jpeg" alt="Fun 13" />
          </div>
          <div className="pic item fun pic14" data-item="">
            <img src="./Equinox/WhatsApp Image 2023-03-10 at 10.32.35 PM.jpeg" alt="Fun 14" />
          </div>
          </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;
