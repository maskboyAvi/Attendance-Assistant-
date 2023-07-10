import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Nav-Portal.css';
import navstyle from './Nav-portal.module.css'
import PhotoUpload from './PhotoUpload';
import logo from "../Images/logo.png"
// import logo from '../Images/logo.png'

var ssitem=sessionStorage.getItem("email");


const NavPortal = () => {
    
    
    const  myFunction = ()=> {
        document.getElementById("myDropdown").classList.toggle("show");
       
    };

    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn-portal')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains(navstyle['show'])) {
                    openDropdown.classList.remove(navstyle['show']);
                }
            }
        }
    }

    const [imageData, setImageData] = useState('');

    const handleImageFetch = () => {
      axios.get(`http://localhost:8080/fileresource/download/${ssitem}`, {responseType: 'arraybuffer' })
        .then(response => {
          const base64Image = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ''
            )
          );
          setImageData(`data:image/jpeg;base64,${base64Image}`);
        })
        .catch(error => {
          console.log('Error fetching image:', error);
        });
    };

    
    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 900);
        };

        checkIsMobile();

        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const handleToggleMenu = () => {
        const navMenu = document.getElementById('nav_menu');
        navMenu.classList.toggle(navstyle['show']);
    };

    const handleCloseMenu = () => {
        const navMenu = document.getElementById('nav_menu');
        navMenu.classList.remove(navstyle['show']);
    };

    return (
        <>
            <header>
                <nav className={navstyle["navbar"]}>
                    <div className={navstyle["navbar-container"]}>
                        <a href="/" className={navstyle["navbar-logo"]}>
                            <img src={logo} alt="Logo" className={navstyle['navbar-logo-img']} />
                        </a>
                        {isMobile ? (
                            <>
                                <nav className={navstyle["nav"]} id="nav_menu">
                                    <FiX className={navstyle["header_close"]} id="close_menu" onClick={handleCloseMenu} />
                                    <ul className={navstyle["nav_list"]}>
                                        <li className={navstyle["nav_item"]}>
                                            <Link  to="/" className={`${navstyle["nav_link nav-active"]} text-white`}>
                                                Home
                                            </Link>
                                        </li>
                                        <li className={navstyle["nav_item"]}>
                                            <Link to="/about" className={navstyle["nav_link"]}>
                                                About Us
                                            </Link>
                                        </li>
                                        <li className={navstyle["nav_item"]}>
                                            <Link to="/gallery" className="nav_link">
                                                Gallery
                                            </Link>
                                        </li>
                                        <li className={navstyle["nav_item"]}>
                                            <Link to="/contact" className="nav_link">
                                                Contact Us
                                            </Link>
                                        </li>

                                    </ul>
                                </nav>
                                <FiMenu className={navstyle["header_toggle"]} id="toggle_menu" onClick={handleToggleMenu} />
                            </>
                        ) : (
                            <ul className={navstyle["navbar-menu"]} id="nav_menu">
                                <li className={navstyle["navbar-item"]}>
                                    <a href="/" className={navstyle["navbar-link nav-active"]} onClick={handleCloseMenu}>
                                        Home
                                    </a>
                                </li>
                                <li className={navstyle["navbar-item"]}>
                                    <a href="/about" className={navstyle["navbar-link"]} onClick={handleCloseMenu}>
                                        About Us
                                    </a>
                                </li>
                                <li className={navstyle["navbar-item"]}>
                                    <a href="/gallery" className={navstyle["navbar-link"]} onClick={handleCloseMenu}>
                                        Gallery
                                    </a>
                                </li>
                                <li className={navstyle["navbar-item"]}>
                                    <a href="/contact" className={navstyle["navbar-link"]} onClick={handleCloseMenu}>
                                        Contact Us
                                    </a>
                                </li>
                                <li className={navstyle["navbar-item"]}>
                                    <div class={navstyle["dropdown"]}>
                                        <a onClick={()=>{
                                            myFunction();
                                            handleImageFetch();
                                        }}  className={navstyle["dropbtn-portal"]}>Account</a>
                                        <div id="myDropdown" class="dropdown-content">
                                            <img src={imageData} alt="accimg" id="accimg" />
                                            <p className={navstyle["accname"]}>{ssitem}</p>
                                            <a id='log-Portal' href='/photoupload'>Edit Profile</a>
                                            <button id='log'>LogOut</button>
                                        </div>
                                    </div>

                                </li>
                            </ul>

                        )}
                    </div>
                </nav>
            </header>
        </>
    );
};

export default  NavPortal;