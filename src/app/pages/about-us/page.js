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
      <div className="aboutpage">
        {/* navbar started */}
        <Navbar selectedItem="About Us" navItems={navItems} />
        {/* navbar ended */}
        <div className="aboutMain ">
          <div className=" d-flex justify-content-center">
            <h1 className="mb-0 about-h">ABOUT US</h1>
          </div>

          <div className="our-story">
            <h1>Our Story</h1>
            <p className="mb-0">
              Mie Ride was born in Ontario from a simple belief: travel should
              connect people, not just destinations. This Ontario-based ride
              service emerged when two friends confronted the same
              transportation frustrations you likely face every day. The idea
              sparked in 2023, after yet another overpriced airport trip and the
              familiar struggle of downtown parking. What if ride prices could
              remain consistent regardless of demand? What if drivers and
              passengers heading the same way could connect, sharing both the
              journey and the cost?Today, that vision has grown into Ontario's
              most transparent ride service – where prices stay fixed,
              communities grow stronger, and every shared journey helps reduce
              our environmental footprint
            </p>
          </div>

          <div className="founders">
            <div className=" row d-flex align-items-center justify-content-between">
              <div className="col-7">
                <h1>The Founders</h1>
                <p className="mb-0">
                  Sandeep Singh Sidhu and Jashanpreet Singh Sidhu have started
                  this joint venture when they watched ride prices spike during
                  peak hours once too often. After calculating the true cost of
                  unpredictable transportation on both personal budgets and
                  business planning, they sketched the initial concept for Mie
                  Ride. Their vision was straightforward: connect travellers
                  going the same direction, eliminate surge pricing, and solve
                  urban parking headaches throughout Ontario.
                 
                </p>
                <p   className="mb-0">
                They approached
                  transportation challenges from a user experience perspective.
                  Having navigated the frustrations of rising fares and complex
                  parking situations firsthand, they focused on building a
                  service that prioritizes reliability and simplicity. Their
                  contribution ensures that Mie Ride remains intuitive and
                  accessible for everyone, regardless of technical background.
                </p>
                <p  className="mb-0"> Together, they've created more than just another ride service
                  – they've built Ontario's first truly transparent
                  transportation network.</p>
              </div>
              <div className="col-md-4 col-5 d-flex justify-content-start">
                <img src="/assets/about-gif2.gif" alt="Animated GIF" height={385} ></img>
              </div>
            </div>
          </div>

          <div className="set-mie-apart">
            <h1>What Sets Mie Ride Apart</h1>
            <div className="row d-flex justify-content-center">
              <div className="col-md-4 col-5 mb-md-0 mb-4">
                <div className="apart-card left-apart-card  d-flex flex-column align-items-center justify-content-center text-center">
                     <img src="/assets/shopping.png"></img>
                     <h3>True Fixed Pricing</h3>
                     <p>When you book with Mie Ride, the price you see is the price you pay – period.
                       While other services increase rates during rush hour, rainy days, or special events,
                        Mie Ride maintains consistent pricing that respects your budget. No algorithms calculating
                         your \desperation, no surge pricing when you need a ride most.
                     </p>
                </div>
              </div>
              <div className="col-md-4 col-5  mb-md-0 mb-4">
                <div className="apart-card center-apart-card d-flex flex-column align-items-center justify-content-center text-center">
                     <img src="/assets/people.png"></img>
                     <h3>Community-Focused 
                     Ride Sharing</h3>
                     <p>Every Mie Ride journey connects people traveling similar routes, creating networks of riders 
                      and drivers throughout Ontario. These connections reduce individual transportation costs while
                       fostering community relationships that extend beyond single rides.</p>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="apart-card right-apart-card d-flex flex-column align-items-center justify-content-center text-center">
                     <img src="/assets/pointer-on-map.png"></img>
                     <h3>Ontario-Rooted Approach</h3>
                     <p>Mie Ride understands local transportation needs because the team lives and works in Ontario.
                       From downtown Toronto's parking challenges to suburban transit gaps, solutions are designed 
                       specifically for Ontario communities rather than applying generic approaches from distant headquarters</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mission-values-section">
            <h1>Our Mission and Values</h1>
            <p>
              Mie Ride believes transportation should enhance lives rather than
              complecate them. Every decison reflects three more commitments:
            </p>

            <div className="mision-values">
              <div className="mission">
                <h2>Price Transparency</h2>
                <p>
                  What you see is what you pay – every time, without exception.
                  Mie Ride has eliminated the unpredictability of surge pricing,
                  ensuring you can accurately budget for transportation needs.
                </p>
              </div>
              <div className="mission">
                <h2>Community Connection</h2>
                <p>
                  Beyond just providing rides, Mie Ride builds meaningful
                  connections between people with shared routes and
                  destinations. Every journey strengthens local networks
                  throughout Ontario communities.
                </p>
              </div>
              <div className="mission">
                <h2>Environmental Responsibility</h2>
                <p>
                  By connecting travelers heading in similar directions, Mie
                  Ride reduces the number of half-empty vehicles on Ontario
                  roads. This approach decreases emissions and traffic
                  congestion with every shared ride.
                </p>
              </div>
            </div>
          </div>

          <div className="join-journey">
               <h1>Join The Journey</h1>
               <p>Mie Ride isn't just transforming how people move throughout Ontario – it's changing the entire relationship between transportation, community, and environment. Experience a ride service that offers consistency when others are unpredictable, builds connections when others create isolation, and considers environmental impact when others focus solely on profit.
               </p>
               <p>Book your first fixed-price ride today and discover what transportation can be when it's designed for people, not algorithms.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
