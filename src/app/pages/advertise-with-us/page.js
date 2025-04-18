"use client";
import React, { useState, useEffect } from "react";
import {
  getBlogCategoryListServ,
  getBlogListServ,
} from "../../services/blog.services";
import { Image_Base_Url } from "../../utils/api_base_url_configration";
import Navbar from "../../components/Navbar";
function page() {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/",
    },
    {
      name: "Our Services",
      path: "/",
    },
    {
      name: "Why Mie Ride",
      path: "/",
    },
    {
      name: "Testimonials",
      path: "/",
    },
    {
      name: "Blogs",
      path: "/",
    },
    {
      name: "Advertise With Us",
      path: "/",
    },
    {
      name: "Partner With Us",
      path: "/",
    },
    {
      name: "Contact Us",
      path: "/",
    },
  ];

  return (
    <div className="mainDiv">
      <div className="partnerpage">
        {/* navbar started */}
        <Navbar selectedItem="Advertise With Us" navItems={navItems} />
        {/* navbar ended */}
        <div className="partnerMain ">
          <div className=" d-flex justify-content-center">
            <h1 className="mb-0 about-h">PARTNER WITH MIE RIDE</h1>
          </div>

          <div className="lets-grow">
              <h1>
              Let's grow together and transform transportation for your organization
              </h1>
              <p>Looking for a transportation solution that truly understands what your business or institution needs? We've built our partnership program from the ground up based on what real organizations told us they wanted. No cookie-cutter approaches here - just practical, reliable transportation that solves problems and creates opportunities.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
