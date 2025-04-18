import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    <div className="mainDiv ">
      <div className="homepage">
        {/* navbar started */}
        <Navbar navItems={navItems} selectedItem="Home" />
        {/* navbar ended */}
        <div className="homeMain">
          <h3>Welcome to</h3>
          <div className="d-flex justify-content-center mierideLogo">
            <img src="/assets/MieRide.png" alt="" className="mie-ride" />
          </div>
          <div className=" homeContent row d-flex justify-content-between">
            <div className="col-md-4 col-12 order-md-1 order-2">
              <p>
                Welcome to Mie Ride, your friendly neighborhood ride solution
                without the surge price surprises. We get it - life's expensive
                enough without wondering what your ride will cost. That's why we
                keep it simple with fixed prices you can count on. Need a ride
                to campus? Late for work? Airport dash? We've got you covered.
                We're real people connecting drivers and passangers going the
                same way, helping everyone save some cash while making Ontario's
                roads less crowded. Our drivers are your neighbors earning extra
                money on routes they already drive. No corporate feel, no
                robotes setting prices - just real solutions for real people.
                Come ride with us and join our growing community today!
              </p>
              <div className="d-flex flex-column align-items-md-start align-items-center">
                <h2>Download Now</h2>
                <div className="d-flex">
                  <a href="https://apps.apple.com/ca/app/mie-ride/id6639612972">
                    {" "}
                    <img
                      src="/assets/app-store.png"
                      className="app-store-img3"
                    />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.app.mieride">
                    {" "}
                    <img
                      src="/assets/google-pay.png"
                      className="google-img3"
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="herosectionImage col-md-7 col-12 order-md-2 order-1 d-flex justify-content-between ">
              <img src="/assets/mobile3.png" alt="" className="img-fluid" />
            </div>
            <div className="col-md-1 mt-auto d-md-flex justify-content-end d-none order-3">
              {/* <div className="socialMediaDiv">
                <a href="https://www.instagram.com/mieride.ca/" target="blank">
                  <img
                    src="/assets/instagram2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>
                <a href="https://www.tiktok.com/@mieride.ca" target="blank">
                  <img
                    src="/assets/tik-tok2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>

                <a href="https://www.youtube.com/@mieride_ca" target="_blank">
                  <img
                    src="/assets/youtube2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>
                <a href="https://x.com/mieride_ca" target="blank">
                  <img
                    src="/assets/twitter2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>
                <a href="https://www.facebook.com/mieride/" target="blank">
                  <img
                    src="/assets/facebook2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>
                <a href="" target="blank">
                  <img
                    src="/assets/linkedin2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>
              </div> */}
            </div>
          </div>
          <div className="row mt-md-5 mt-0 pt-md-5 pt-0 ">
            <div className="col-md-11 col-12 m-md-0 mx-0 mt-3 p-0 row ">
              <div className="col-4 mb-4">
                <div className="homeCardBox rider">
                  <h2>Shared Ride</h2>
                  <p>
                    Travel together, split costs reduse emissions-smart
                    community for budget-conscious travelers.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
              <div className="col-4 mb-4">
                <div className="homeCardBox ">
                  <h2>Personal Ride</h2>
                  <p>
                    Book your own private journey with fixed pricing and
                    personalized comfort.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
              <div className="col-4 mb-4 ">
                <div className="homeCardBox driver">
                  <h2>Driver Onboard</h2>
                  <p>
                    Join our team, set your schedule, earn consistently while
                    helping others commute.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-1 my-auto d-md-flex justify-content-end">
              <div className="d-flex  d-md-block justify-content-center">
                <div className=" miePayLogo d-flex justify-content-end align-items-end">
                  <a href="https://miepay.ca/" target="blank">
                    <img src="/assets/miepayLogo.jpeg" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* roadmap start */}
          <div className="roadmapMain " >
            <div style={{ height: "2px", background: "#646464" }}></div>
            <div
              className="d-flex justify-content-around mx-0 "
              style={{ position: "relative", top: "-11px" }}
            >
              <div
                className=""
                style={{
                  height: "20px",
                  width: "20px",
                  background: "#bbfc00",
                  borderRadius: "50%",
                  boxShadow: "0 0 5px #bbfc00, 0 0 10px #bbfc00, 0 0 15px #bbfc00"
                }}
              ></div>
              <div
                className=""
                style={{
                  height: "20px",
                  width: "20px",
                  background: "#bbfc00",
                  borderRadius: "50%",
                   boxShadow: "0 0 5px #bbfc00, 0 0 10px #bbfc00, 0 0 15px #bbfc00"
                }}
              ></div>
              <div
                className=""
                style={{
                  height: "20px",
                  width: "20px",
                  background: "#646464",
                  borderRadius: "50%",
                }}
              ></div>
              <div
                className=""
                style={{
                  height: "20px",
                  width: "20px",
                  background: "#646464",
                  borderRadius: "50%",
                }}
              ></div>
              <div
                className=""
                style={{
                  height: "20px",
                  width: "20px",
                  background: "#646464",
                  borderRadius: "50%",
                }}
              ></div>
              <div
                className=""
                style={{
                  height: "20px",
                  width: "20px",
                  background: "#646464",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            
            <div className="d-flex justify-content-around mx-lg-0 mx-0 roadMapKey">
              <div className="topCard" >
                <h6 className="text-center">Shared Ride</h6>
                <p className="text-center">(Live)</p>
              </div>
              <div className="bottomCard" >
                <h6 className="text-center">Private Ride</h6>
                <p className="text-center">(Live)</p>
              </div>
              <div className="topCard" >
                <h6 className="text-center">Family Ride</h6>
                <p className="text-center">(May 2025)</p>
              </div>
              <div className="bottomCard" >
                <h6 className="text-center">Drive Test</h6>
                <p className="text-center">(July 2025)</p>
              </div>
              <div className="topCard" >
                <h6 className="text-center">Airport Ride</h6>
                <p className="text-center">(Sept 2025)</p>
              </div>
              <div className="bottomCard" >
                <h6 className="text-center">Intercity Ride</h6>
                <p className="text-center">(Nov 2025)</p>
              </div>
            </div>
            <h1 className="roadmapText">ROADMAP</h1>
            <div
              className="d-flex justify-content-around mx-md-0 mx-0"
              style={{ position: "relative", top: "-11px" }}
            >
              <div
                className="topLineVerticle"
                
              ></div>
              <div
                className="bottomLineVerticle"
               
              ></div>
              <div
                className="topLineVerticle"
               
              ></div>
              <div
                className="bottomLineVerticle"
                
              ></div>
              <div
                className="topLineVerticle"
            
              ></div>
              <div
                className="bottomLineVerticle"
             
              ></div>
            </div>
          </div>
          {/* roadmap end */}
          <div className="faq-content ">
            <h1 className="mb-0">
              FAQ<span className="faq-s">s</span>{" "}
            </h1>
            <p className="">
              Get quick answers to common questions about booking, pricing,
              cancellation and using our services.
            </p>

            <div className="row mb-sm-4 mb-2 gx-0 faq-row">
              <div className="col-md-5 col-12 faq px-sm-4 px-3">
                <h5>Can I schedule rides in advance with Mie Ride?</h5>
                <p className="mb-0">
                  Yes, you can pre-book rides to ensure timely pickups,
                  especially for important appointments or airport transfers.​
                </p>
              </div>

              <div className="col-md-5 col-12 faq  px-sm-4 px-3">
                <h5>How does Mie Ride ensure my safety during trips?</h5>
                <p className="mb-0">
                  We offer in-app communication, live ride tracking, and driver
                  details, ensuring transparency and safety throughout your
                  journey.​
                </p>
              </div>
            </div>

            <div className="row  gx-0  d-flex  faq-row">
              <div className="col-md-5 col-12 faq px-sm-4 px-3">
                <h5>What should I do if I leave an item in the vehicle?</h5>
                <p className="mb-0">
                  Report the lost item through the app; we'll assist in
                  connecting you with the driver to retrieve your belongings.​
                </p>
              </div>

              <div className="col-md-5 col-12 faq px-sm-4 px-3">
                <h5>
                  Are there any loyalty rewards or referral benefits with Mie
                  Ride?
                </h5>
                <p className="mb-0">
                  Yes, refer friends to Mie Ride and earn rewards through our
                  referral program. Details are available within the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="copyright d-flex justify-content-center align-items-center">
        <p className="fw-bold text-white">© 2025 Mie Ride Inc.</p>
      </div>
    </div>
  );
}

export default page;
