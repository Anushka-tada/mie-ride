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
      <div className="whyChooseMrpage">
        {/* navbar started */}
        <Navbar selectedItem="Why Mie Ride" navItems={navItems} />
        {/* navbar ended */}
        <div className="whyChooseMrMain ">
          <div className=" d-flex justify-content-center">
            <h1 className="mb-0 about-h">WHY CHOOSE A MIE RIDE?</h1>
          </div>

          <div className="why-reasons d-flex">
            <div className="reasons-column1 d-flex flex-column ">
              <div className="reason reason1 position-relative">
                <div className="img1-outer">
                <img src="/assets/people.jpg" className="img-fluid img1" />
                </div>
                <div className="position-absolute reason-text1">
                  <h1>We Put People First</h1>
                  <p>
                    Mie Ride was born in Ontario from a simple belief: travel
                    should connect people, not just destinations. This
                    Ontario-based ride service emerged when two friends
                    confronted the same transportation frustrations you likely
                    face every day. The idea sparked in 2023, after yet another
                    overpriced airport trip and the familiar struggle of
                    downtown parking. What if ride prices could remain
                    consistent regardless of demand? What if drivers and
                    passengers heading the same way could connect, sharing both
                    the journey and the cost?Today, that vision has grown into
                    Ontario's most transparent ride service – where prices stay
                    fixed, communities grow stronger, and every shared journey
                    helps reduce our environmental footprint
                  </p>
                </div>
              </div>
              <div className="reason reason1 position-relative">
              <div className="img1-outer">
                <img src="/assets/flexible.jpg" className="img-fluid" />
                </div>
                <div className="position-absolute reason-text1">
                  <h1>Flexibility That Fits Real Life</h1>
                  <p>
                    Life rarely follows a perfectly straight line. Add multiple
                    stops to your journey, schedule return trips in one booking,
                    or modify your plans as needed. Drivers can set availability
                    for up to five cities and choose when they want to work -
                    because we believe transportation should adapt to your life,
                    not the other way around.
                  </p>
                </div>
              </div>
              <div className="reason reason1 position-relative">
              <div className="img1-outer">
                <img src="/assets/commnity.jpg" className="img-fluid" />
                </div>
                <div className="position-absolute reason-text2">
                  <h1>Building Community Through Transportation</h1>
                  <p>
                 Every ride is an opportunity to connect. Our rating system helps maintain quality and 
                 build trust between passengers and drivers. Share routes to make transportation more
                 efficient and affordable. Together we're creating a more connected, efficient way to move 
                 through our communities.
                  </p>
                </div>
              </div>
              <div className="reason4 position-relative">
                <div className=" reason-text4">
                  <h1 >Streamlined Experience</h1>
                  <p> From our intuitive booking process to our hassle-free payment system, we've eliminated unnecessary complications.
                   Book rides with a few taps, manage your schedule in one place, and enjoy transportation that simply works the way
                    it should </p>
                </div>
              </div>
            </div>
            <div className="reasons-column2 d-flex flex-column  ">
              <div className="reason reason5  position-relative d-flex flex-column  align-items-center">
                <img src="/assets/predict2.jpg" className="img-fluid" />
                <div className="position-absolute reason-text5 text-center">
                  <h1>Predictability You Can Count On</h1>
                  <p>
                    No one likes surprises when it comes to transportation.
                    That's why we've created a system with fixed pricing that
                    stays the same regardless of traffic or weather conditions.
                    Book in advance, know what you'll pay, and plan your budget
                    accordingly. For drivers, this means consistent earnings
                    without the frustration of fluctuating fares
                  </p>
                </div>
              </div>
              <div className="reason4 position-relative">
                <div className=" reason-text4">
                  <h1>Complete Transparency</h1>
                  <p>
                  We believe in honest, clear information at every step. Passengers receive comprehensive details about their driver and 
                  vehicle before the ride begins. Drivers see daily earnings right on their home screen and receive automatic weekly payments.
                   No hidden fees, no complicated algorithms, just straightforward service.
                  </p>
                </div>
              </div>
              <div className="reason4 position-relative reason6">
                <div className=" reason-text4">
                  <h1>Your Security Matters</h1>
                  <p>
                  Our personal information stays protected with our secure in-app communication tools. Passengers and drivers
                   connect without sharing private phone numbers. Our verification system ensures everyone on the platform meets
                    our standards, while our 24/7 support team stands ready to assist with any concerns that arise during a journey.
                  </p>
                </div>
              </div>
              <div className="reason reason1 position-relative d-flex flex-column  align-items-center">
              <div className="img1-outer">
                <img src="/assets/money.jpg" className="img-fluid " />
                </div>
                <div className="position-absolute reason-text5 text-center">
                  <h1>A Platform That Rewards Quality</h1>
                  <p>
                  Great service deserves recognition. Drivers build their reputation through visible ratings that help attract more bookings.
                   Passengers enjoy consistent, reliable service from drivers who care about their experience. Everyone benefits from a system
                    designed to value and encourage excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="plan-journey">
            <h1>Plan Your Journey At your Terms</h1>
            <p>Whether you're looking for reliable transportation or building your earning potential,
               Mie Ride provides the tools and transparency you need to succeed.</p>
               <h1>
                Transportation that respects your choices.
               </h1>
               <div>
                <h2 className="download-btn">Download Now</h2> 
                <div className="d-flex">
                 <a href="https://apps.apple.com/ca/app/mie-ride/id6639612972"> <img src="/assets/app-store.png" className="app-store-img3"/></a>
                 <a href="https://play.google.com/store/apps/details?id=com.app.mieride"> <img src="/assets/google-pay.png" className="google-img3"/> </a>             
                  </div>       
               </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
