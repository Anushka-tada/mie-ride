"use client"

import React from 'react'
import "./home.css"
import { useState } from "react";

const Home = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="outer-div ">

                <div className="homepage position-relative ">
                    <div className="navbar navbar-expand-lg   ">
                        <div className="container ">
                            {/* Brand Logo */}
                            <div className="brand-logo me-3">
                                <img src="/assets/logo.png" alt="Logo" className="logo" />
                            </div>

                            {/* Navbar Toggler */}
                            <button
                                className="navbar-toggler"
                                type="button"
                                onClick={toggleMenu}
                                aria-expanded={menuOpen}
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            {/* Navbar Collapse */}
                            <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
                                <ul className="navbar-nav flex-wrap justify-content-center gap-3 p-3 rounded-5">
                                    <li className="nav-item text-uppercase">
                                        <a className="nav-link text-light" href="#">Home</a>
                                    </li>
                                    <li className="nav-item text-uppercase">
                                        <a className="nav-link text-light" href="#">About Us</a>
                                    </li>
                                    <li className="nav-item text-uppercase">
                                        <a className="nav-link text-light" href="#">Our Services</a>
                                    </li>
                                    <li className="nav-item text-uppercase">
                                        <a className="nav-link text-light" href="#">Why Mie Ride</a>
                                    </li>
                                    <li className="nav-item text-uppercase">
                                        <a className="nav-link text-light" href="#">Testimonials</a>
                                    </li>
                                    <li className="nav-item text-uppercase">
                                        <a className="nav-link text-light" href="#">Blogs</a>
                                    </li>
                                    <li className="nav-item text-uppercase">
                                        <a className="nav-link text-light" href="#">Advertise With Us</a>
                                    </li>
                                    <li className="nav-item text-uppercase">
                                        <a className="nav-link text-light" href="#">Partner With Us</a>
                                    </li>
                                    <li className="nav-item text-uppercase">
                                        <a className="nav-link text-light" href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* herosection */}

                    <div className="herosection text-center position-relative">
                        <h1 className=' text-uppercase welcome-h '>Welcome To</h1>
                        <div>
                            <img src="/assets/MieRide.png" alt="" className='mie-ride' />
                        </div>

                        <div className='herosection-inner d-flex flex-wrap flex-lg-nowrap flex-row gap-5 justify-content-around'>
                            <div className="herosection-text ">
                                <p className='herosection-para'>Welcome to Mie Ride, your friendly neighborhood ride solution without the surge price surprises.
                                    We get it - life's expensive enough without wondering what your ride will cost.
                                    That's why we keep it simple  with fixed prices you can count on. Need a ride to campus?
                                    Late for work? Airport dash? We've got you covered. We're real people connecting drivers and passangers going the same
                                    way, helping everyone save some cash while making Ontario's roads less crowded. Our drivers are your
                                    neighbors earning extra money on routes they already drive. No corporate feel, no robotes setting
                                    prices - just real solutions for real people. Come ride with us and join our growing community today!
                                </p>
                                <div className="register-btn d-flex align-items-center justify-content-center">
                                    <p className=' fw-bold text-dark m-0'>Register Now</p>
                                </div>
                            </div>


                            <div className="herosection-image">
                                <img src="/assets/mobile3.png" alt="" className='mobiles' />
                            </div>


                        </div>

                        <div className="home-social-media position-absolute">
                            <ul className='social-media-inner d-flex flex-column gap-2 ms-10'>
                                <li>  <img src="/assets/instagram2.png" alt="Logo" className='s-img' /></li>
                                <li> <img src="/assets/tik-tok2.png" alt="Logo" className='s-img' /></li>
                                <li>  <img src="/assets/youtube2.png" alt="Logo" className='s-img' /></li>
                                <li> <img src="/assets/twitter2.png" alt="Logo" className='s-img' /></li>
                                <li>  <img src="/assets/facebook2.png" alt="Logo" className='s-img' /></li>
                                <li> <img src="/assets/linkedin2.png" alt="Logo" className='s-img' /></li>
                            </ul>
                        </div>


                    </div>

                    <div className="rides  d-flex flex-wrap gap-5 justify-content-center">
                        <div className="ride p-3 d-flex flex-column gap-3 py-5 justify-content-center">
                            <h2 className='ride-h'>Shared ride</h2>
                            <p className='ride-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, cumque!</p>
                            <div className="read-btn d-flex align-items-center justify-content-center">
                                <p className=' fw-bold text-dark m-0 '>Read More</p>
                            </div>
                        </div>

                        <div className="ride p-3 d-flex flex-column gap-3 py-5 justify-content-center">
                            <h2 className='ride-h'>Personal ride</h2>
                            <p className='ride-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, cumque!</p>
                            <div className="read-btn d-flex align-items-center justify-content-center">
                                <p className=' fw-bold text-dark m-0 '>Read More</p>
                            </div>
                        </div>

                        <div className="ride p-3 d-flex flex-column gap-3 py-5 justify-content-center">
                            <h2 className='ride-h'>Driver onboard</h2>
                            <p className='ride-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, cumque!</p>
                            <div className="read-btn d-flex align-items-center justify-content-center">
                                <p className=' fw-bold text-dark m-0 '>Read More</p>
                            </div>


                        </div>


                    </div>

                    <div className='d-flex flex-column gap-4 position-absolute end-image'>
                        <div className="miepayimg d-flex justify-content-center align-items-center text-center">
                            <p className='text-dark m-0'>MIE PAY</p>
                        </div>
                        <div className="robot-img">
                            <img src="/assets/robot.png" alt="" />
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Home
