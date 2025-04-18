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
              Let's grow together and transform transportation for your
              organization
            </h1>
            <p>
              Looking for a transportation solution that truly understands what
              your business or institution needs? We've built our partnership
              program from the ground up based on what real organizations told
              us they wanted. No cookie-cutter approaches here - just practical,
              reliable transportation that solves problems and creates
              opportunities.
            </p>
          </div>

          <div className="work-with">
            <h1>Who we work with</h1>
            <div className="workwith-cards">
              {/* first row */}

              <div className="row  d-flex justify-content-center">
                <div className="col-4 position-relative ">
                  <div className="workwith-card d-flex flex-column align-items-center position-relative">
                    <div className="workwith-img d-flex justify-content-center align-items-center position-absolute ">
                      <img src="/assets/briefcase.png" />
                    </div>
                    <h3>Buisnesses and Corporations</h3>
                    <ul>
                      <li className="mb-0">
                        Dependable, punctual transportation for your employees
                        at all hours
                      </li>
                      <li className="mb-0">
                        {" "}
                        Streamlined corporate accounts with detailed monthly
                        billing and expense tracking
                      </li>
                      <li className="mb-0">
                        {" "}
                        Executive transportation for VIP clients and important
                        meetings
                      </li>
                      <li className="mb-0">
                        Hassle-free airport pickup and dropoff service for your
                        business
                      </li>
                      <li className="mb-0"> travelers</li>
                      <li className="mb-0"> Cost-effective alternative to</li>
                      <li className="mb-0">
                        maintaining and insuring a company vehicle fleet
                      </li>
                      <li className="mb-0">
                        {" "}
                        Late-night safe rides home for employees working
                        overtime
                      </li>
                      <li className="mb-0">
                        {" "}
                        Special event transportation coordination for company
                        functions
                      </li>
                      <li className="mb-0">
                        Custom branded booking experience for your team members
                      </li>
                    </ul>
                  </div>
                  <div className="white-border position-absolute"></div>
                </div>
                <div className="col-4 position-relative">
                  <div className="workwith-card d-flex flex-column align-items-center position-relative">
                    <div className="workwith-img d-flex justify-content-center align-items-center position-absolute">
                      <img src="/assets/warehouse.png" />
                    </div>
                    <h3>Retail and Shopping Centers</h3>
                    <ul>
                      <li className="mb-0">Convenient customer pickup and</li>
                      <li className="mb-0">
                        {" "}
                        delivery options to enhance shopping experience
                      </li>
                      <li className="mb-0">
                        {" "}
                        Staff transportation solutions for early morning and
                        late evening shifts
                      </li>
                      <li className="mb-0">
                        Package delivery partnerships for same-day local
                        deliveries
                      </li>
                      <li className="mb-0">
                        Transportation options for customers without vehicles
                      </li>
                      <li className="mb-0">
                        {" "}
                        Special shopping event transportation coordination
                      </li>
                      <li className="mb-0">
                        {" "}
                        Mall employee ride programs to reduce parking congestion
                      </li>
                      <li className="mb-0">
                        {" "}
                        Store-to-store transfer services for merchandise and
                        staff
                      </li>
                    </ul>
                  </div>
                  <div className="white-border position-absolute"></div>
                </div>
                <div className="col-4 position-relative">
                  <div className="workwith-card d-flex flex-column align-items-center position-relative">
                    <div className="workwith-img d-flex justify-content-center align-items-center position-absolute">
                      <img src="/assets/shop.png" />
                    </div>
                    <h3>Warehouses & Distribution Centers</h3>
                    <ul>
                      <li className="mb-0">
                        Reliable staff transportation for early morning, evening
                        and overnight shifts
                      </li>
                      <li className="mb-0">
                        {" "}
                        Transportation solutions for seasonal and temporary
                        workers
                      </li>
                      <li className="mb-0">
                        {" "}
                        Reduced parking congestion at your facility during shift
                        changes
                      </li>
                      <li className="mb-0">
                        Emergency transportation for critical staff during
                        weather events
                      </li>
                      <li className="mb-0">
                        Backup transportation for mechanical breakdowns and
                        vehicle issues
                      </li>
                      <li className="mb-0">
                        {" "}
                        Ride coordination for multiple employees from similar
                        locations
                      </li>
                      <li className="mb-0">
                        {" "}
                        Cross-facility staff transportation for multi-location
                        operations
                      </li>
                    </ul>
                  </div>
                  <div className="white-border position-absolute"></div>
                </div>
              </div>

              {/* second row */}

              <div className="row  d-flex justify-content-center">
                <div className="col-4 position-relative ">
                  <div className="workwith-card d-flex flex-column align-items-center position-relative">
                    <div className="workwith-img d-flex justify-content-center align-items-center position-absolute ">
                      <img src="/assets/healthcare.png" />
                    </div>
                    <h3>Healthcare Facilities</h3>
                    <ul>
                      <li className="mb-0">
                        Patient transportation to and from
                      </li>
                      <li className="mb-0"> appointments with reminder</li>
                      <li className="mb-0"> notifications</li>
                      <li className="mb-0">
                        Reliable staff rides during early
                      </li>
                      <li className="mb-0">
                        morning and late-night shift changes
                      </li>
                      <li className="mb-0">
                        {" "}
                        On-call transportation for medical
                      </li>
                      <li className="mb-0">professionals during emergencies</li>
                      <li className="mb-0"> Comfortable transportation for</li>
                      <li className="mb-0"> families visiting patients</li>
                      <li className="mb-0">
                        Scheduled transportation for regular treatment
                        appointments
                      </li>
                      <li className="mb-0">
                        {" "}
                        Medical courier services for urgent sample delivery
                      </li>
                      <li className="mb-0">
                        {" "}
                        Transportation for discharged patients returning home
                      </li>
                      <li className="mb-0">
                        Staff ride programs to reduce parking issues at medical
                        facilities
                      </li>
                    </ul>
                  </div>
                  <div className="white-border position-absolute"></div>
                </div>
                <div className="col-4 position-relative">
                  <div className="workwith-card d-flex flex-column align-items-center position-relative">
                    <div className="workwith-img d-flex justify-content-center align-items-center position-absolute">
                      <img src="/assets/presentation.png" />
                    </div>
                    <h3>Educational Institutions</h3>
                    <ul>
                      <li className="mb-0">
                        Safe, monitored transportation for
                      </li>
                      <li className="mb-0">
                        {" "}
                        students between housing and campus
                      </li>
                      <li className="mb-0">
                        {" "}
                        Faculty and staff transportation
                      </li>
                      <li className="mb-0">programs with dedicated service</li>
                      <li className="mb-0">
                        Flexible campus shuttle alternatives with expanded reach
                      </li>
                      <li className="mb-0">
                        {" "}
                        Reliable transportation for visiting
                      </li>
                      <li className="mb-0"> lecturers, speakers and guests</li>
                      <li className="mb-0"> Special event and sports game</li>
                      <li className="mb-0">transportation services</li>
                      <li className="mb-0">
                        Field trip and off-campus study transportation options
                      </li>
                      <li className="mb-0">
                        {" "}
                        International student airport pickup and orientation
                        services
                      </li>
                      <li className="mb-0">
                        {" "}
                        Late-night safe ride programs for
                      </li>
                      <li className="mb-0"> students studying after hours</li>
                    </ul>
                  </div>
                  <div className="white-border position-absolute"></div>
                </div>
                <div className="col-4 position-relative">
                  <div className="workwith-card d-flex flex-column align-items-center position-relative">
                    <div className="workwith-img d-flex justify-content-center align-items-center position-absolute">
                      <img src="/assets/hotel.png" />
                    </div>
                    <h3>Hotels and Hospitality Buisness</h3>
                    <ul>
                      <li className="mb-0">
                        Guest transportation to local attractions for enjoyable
                        exploration without navigation worries
                      </li>
                      <li className="mb-0">
                        {" "}
                        Airport pickup and drop-off services adjusting to flight
                        changes and delays
                      </li>
                      <li className="mb-0">
                        {" "}
                        Staff transportation for all shifts
                      </li>
                      <li className="mb-0">
                        ensuring reliable attendance around the clock
                      </li>
                      <li className="mb-0">Special event shuttle services</li>
                      <li className="mb-0">
                        {" "}
                        coordinating seamless movement for weddings and
                        conferences
                      </li>
                      <li className="mb-0">
                        {" "}
                        Reliable transportation for restaurant and bar patrons
                        promoting safety and satisfaction
                      </li>
                    </ul>
                  </div>
                  <div className="white-border position-absolute"></div>
                </div>
              </div>

              {/* third row */}

              <div className="row  d-flex justify-content-center">
                <div className="col-4 position-relative ">
                  <div className="workwith-card d-flex flex-column align-items-center position-relative">
                    <div className="workwith-img d-flex justify-content-center align-items-center position-absolute ">
                      <img src="/assets/stadium.png" />
                    </div>
                    <h3>Sports Arenas and Entertainment Facilities</h3>
                    <ul>
                      <li className="mb-0">
                        Event staff transportation for game days ensuring
                        punctual arrival despite traffic
                      </li>
                      <li className="mb-0">
                        Fan transportation options reducing venue congestion and
                        simplifying attendee experience
                      </li>
                      <li className="mb-0">
                        VIP guest pickup and drop-off services enhancing premium
                        customer experiences
                      </li>
                      <li className="mb-0">
                        Post-event transportation when public transit is
                        unavailable during late hours
                      </li>
                      <li className="mb-0">
                        Multi-venue transportation for tournaments coordinating
                        complex movement between locations
                      </li>
                    </ul>
                  </div>
                  <div className="white-border position-absolute"></div>
                </div>
                <div className="col-4 position-relative">
                  <div className="workwith-card d-flex flex-column align-items-center position-relative">
                    <div className="workwith-img d-flex justify-content-center align-items-center position-absolute">
                      <img src="/assets/temple.png" />
                    </div>
                    <h3>Religious Organizations</h3>
                    <ul>
                      <li className="mb-0">Convenient customer pickup and</li>
                      <li className="mb-0">
                        {" "}
                        delivery options to enhance shopping experience
                      </li>
                      <li className="mb-0">
                        {" "}
                        Staff transportation solutions for early morning and
                        late evening shifts
                      </li>
                      <li className="mb-0">
                        Package delivery partnerships for same-day local
                        deliveries
                      </li>
                      <li className="mb-0">
                        Transportation options for customers without vehicles
                      </li>
                      <li className="mb-0">
                        {" "}
                        Special shopping event transportation coordination
                      </li>
                      <li className="mb-0">
                        {" "}
                        Mall employee ride programs to reduce parking congestion
                      </li>
                      <li className="mb-0">
                        {" "}
                        Store-to-store transfer services for merchandise and
                        staff
                      </li>
                    </ul>
                  </div>
                  <div className="white-border position-absolute"></div>
                </div>
                <div className="col-4 position-relative">
                  <div className="workwith-card d-flex flex-column align-items-center position-relative">
                    <div className="workwith-img d-flex justify-content-center align-items-center position-absolute">
                      <img src="/assets/blockchain.png" />
                    </div>
                    <h3>Technology campuses</h3>
                    <ul>
                      <li className="mb-0">
                        Employee shuttle service between buildings maximizing
                        productive time during workdays
                      </li>
                      <li className="mb-0">
                        Late-night transportation for extended work hours
                        supporting dedicated team members
                      </li>
                      <li className="mb-0">
                        Visitor transportation between campus locations creating
                        positive impressions for guests
                      </li>
                      <li className="mb-0">
                        Recruitment candidate pickup and tours enhancing the
                        hiring and interview process
                      </li>
                      <li className="mb-0">
                        Lunch run and errand services keeping productive
                        employees focused on important work
                      </li>
                    </ul>
                  </div>
                  <div className="white-border position-absolute"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="partnership-program">
            <h1>Why Choose Our partnership program?</h1>
            <div className="partnership-cards d-flex justify-content-center flex-wrap">
              <div className="partnership-card d-flex flex-column align-items-center">
                <img src="/assets/shield.png" />
                <h2> Rock Solid Reliability When it Matters Most</h2>
                <p className="mb-0">
                  When your business depends on people getting where they need
                  to be, you can't afford disappointments. Our drivers show up
                  when promised - every single time - with our industry-leading
                  on-time performance record. We build in buffer time to account
                  for traffic, weather, and unexpected situations, so your
                  transportation needs are always covered
                </p>
              </div>

              <div className="partnership-card d-flex flex-column align-items-center">
                <img src="/assets/idea.png" />
                <h2>Solutions Built Around Your Specific Needs</h2>
                <p className="mb-0">
                  We start by listening. Tell us about your transportation
                  challenges, budget constraints, scheduling needs, and goals.
                  Then we'll design a custom program that addresses your exact
                  situation rather than forcing you into a predetermined
                  package. Your transportation challenges are unique - your
                  solution should be too.
                </p>
              </div>

              <div className="partnership-card d-flex flex-column align-items-center">
                <img src="/assets/support.png" />
                <h2>Personal Support From People Who Know Your Business</h2>
                <p className="mb-0">
                  As a partner, you'll work with a dedicated account manager who
                  takes the time to understand your organization. Need to adjust
                  your transportation schedule? Have a billing question? Want to
                  add a new service location? Your account manager is just a
                  call or message away, giving you direct access without endless
                  hold times or explaining your situation repeatedly
                </p>
              </div>

              <div className="partnership-card d-flex flex-column align-items-center">
                <img src="/assets/receipt.png" />
                <h2>Crystal-Clear Billing With No Surprises</h2>
                <p className="mb-0">
                  Our partnership billing is straightforward and transparent.
                  Receive consolidated monthly statements with detailed
                  breakdowns by department, cost center, or whatever categories
                  make sense for your accounting. Track usage patterns,
                  anticipate expenses, and easily reconcile transportation costs
                  with our comprehensive reporting tools.
                </p>
              </div>

              <div className="partnership-card d-flex flex-column align-items-center">
                <img src="/assets/currency.png" />
                <h2>Value That Makes Financial Sense</h2>
                <p className="mb-0">
                  Our partnership rates deliver significant savings compared to
                  standard ride prices - especially for regular users. The more
                  you use our service, the more you save. Plus, you'll eliminate
                  hidden costs associated with alternatives like maintaining a
                  company fleet, paying for parking, or managing travel
                  reimbursements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
