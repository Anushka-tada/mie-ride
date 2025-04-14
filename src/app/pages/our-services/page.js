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
      <div className="servicepage">
        {/* navbar started */}
        <Navbar selectedItem="Our Services" navItems={navItems} />
        {/* navbar ended */}
        <div className="serviceMain ">
          <div className="journey-section">
            <h2 className="mb-0">Your Journey, Your Way</h2>
            <p className="mb-0">
              Travel smarter with Mie Ride's versatile transportation solutions.
              Whether you're commuting to work, planning a night out, or looking
              to earn as a driver, we've got you coverd!{" "}
            </p>
            <div className="book-btn d-flex justify-content-center align-items-center">
              <p className="mb-0">Book A Rider Now</p>
            </div>
          </div>

          <div className="core-services">
            <h1>Our Core Services</h1>
            <div className="row service-row">
              <div className="col-lg-8 col-12 position-relative d-flex">
                <img
                  src="/assets/curl2.png"
                  className=" position-absolute curl1"
                  height={157}
                ></img>
                <img
                  src="/assets/pp(2).png"
                  height={680}
                  className="mobile"
                ></img>
                <img
                  src="/assets/curl2.png"
                  className=" position-absolute curl2"
                  height={237}
                ></img>
                <div className="shared-ride position-absolute">
                  <div className="d-flex justify-content-between align-items-center h-box">
                    <h2 className="shared-ride-h mb-0">Shared Ride</h2>
                    <div className="elips"></div>
                  </div>
                  <p>
                    Save on travel costs while reducing your carbon footprint.
                    Share your journey with others heading in the same direction
                    and split the fare for significant savings. Simply indicate
                    how many seats you need, and we'll match you with compatible
                    riders. Enjoy the social aspect of carpooling while keeping
                    more money in your pocket. Download the Mie Ride app to
                    start sharing and saving today.
                  </p>
                </div>
                <div className="personal-ride position-absolute">
                  <div className="d-flex justify-content-between align-items-center h-box">
                    <h2 className="shared-ride-h mb-0">Personal Ride</h2>
                    <div className="elips"></div>
                  </div>
                  <p>
                    Travel in comfort and privacy by reserving an
                     entire vehicle for yourself and your companions.
                      Choose between our spacious 4-seater or
                       6-seater options based on your group size
                        (maximum 6 passengers). Perfect for business
                         trips or when you simply prefer your own space.
                          Download the Mie Ride app now to access exclusive
                           personal transport discounts.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <h1>What's Coming Soon</h1>
                <div>
                  <div className="cs-card">
                    <h4>Family Ride</h4>
                    <p className="mb-0">
                      Designed specifically for family outings and friend
                      gatherings, our Family Ride service ensures everyone
                      travels together comfortably. Our spacious vehicles
                      accommodate car seats, extra luggage, and all the
                      essentials for your family adventures. With fixed pricing
                      regardless of traffic conditions, you can budget your trip
                      with confidence. Download the Mie Ride app to be notified
                      when Family Ride launches.
                    </p>
                  </div>
                  <div className="cs-card">
                    <h4>Airport Transportation</h4>
                    <p className="mb-0">
                      Taking your driving test? Let us handle the transportation
                      stress. Book a reliable car for your test day by providing
                      your home address, selecting your test center location,
                      and indicating how many people will be accompanying you.
                      Arrive calm and confident with Mie Ride's punctual test
                      day service.
                    </p>
                  </div>
                  <div className="cs-card">
                    <h4>Airport Transportation</h4>
                    <p className="mb-0">
                      Seamless airport travel awaits. Select whether you're
                      heading to or from the airport using our simple dropdown
                      menu. Enter your address details, travel date, time, and
                      choose between our 4-seater or 6-seater vehicles depending
                      on your luggage and group size. Download the Mie Ride app
                      for flight tracking features and worry-free airport
                      transfers
                    </p>
                  </div>
                  <div className="cs-card">
                    <h4>Intercity Shared Route</h4>
                    <p className="mb-0">
                      Planning a longer journey? Enter your starting point and
                      destination, select your date and time preferences, and
                      specify whether your schedule is flexible. Indicate how
                      many seats you're offering to share, and Mie Ride will
                      match you with passengers heading your way. Download our
                      app to manage your intercity routes with ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="how-works">

          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
