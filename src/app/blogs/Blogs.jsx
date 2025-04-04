"use client"

import React from 'react'
import "./blog.css"
import { useState } from "react";

const Blogs = () => {
     const [menuOpen, setMenuOpen] = useState(false);
    
        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
        };
    return (
        <div>
            <div className="outer-div">

                <div className="blogspage">
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
                                <ul className="navbar-nav flex-wrap justify-content-center  p-3 rounded-5">
                                    <li className="nav-item text-uppercase">
                                        <a className="nav-link text-light" href="#">Home</a>
                                    </li>
                                    <li className="nav-item text-uppercase">
                                        <a className="nav-link text-light" href="#">About Us</a>
                                    </li>
                                    <li className="nav-item text-uppercase">
                                        <a className="nav-link text-light" href="#">Services</a>
                                    </li>
                                    <li className="nav-item text-uppercase">
                                        <a className="nav-link text-light" href="#">Benefits</a>
                                    </li>
                                    <li className="nav-item text-uppercase">
                                        <a className="nav-link text-light" href="#">Features</a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Blogs
