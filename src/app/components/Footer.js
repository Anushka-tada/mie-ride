"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const handleUserApp = () => {
    window.open("https://apps.apple.com/ca/app/mie-ride/id6639612972");
  };

  const handleUserGoogle = () => {
    window.open("https://play.google.com/store/apps/details?id=com.app.mieride");
  };

  const handleDriverApp = () => {
    window.open("https://apps.apple.com/ca/app/mie-ride-driver/id6642649782");
  };

  const handleDriverGoogle = () => {
    window.open("https://play.google.com/store/apps/details?id=com.app.mieridedriver");
  };
  return (
    <>
      <div className="footer d-flex position-relative">
        <div className="row gx-0 px-0">
          <div className="col-lg-2 col-12 terms-outer">
            <h5>MIE RIDE</h5>
          <div className="terms">
          <p className="footer-p ">Terms & Conditions</p>
            <p className="footer-p">Privacy Policy</p>
            <p className="footer-p">Partner with Us</p>
            <p className="footer-p">Testimonials</p>
          </div>
          </div>

          <div className="col-lg-10 col-12">
            <div className="row d-flex footer-cards gap-0 justify-content-around me-md-0 me-4">
              <div className="col-6 ps-md-5 ">
                <div className="footer-card d-flex gap-sm-3 gap-1">
                <p>
                  Ready for smoother journeys? Download the Mie Ride app now and
                  experience transportation on your terms. A few tabs is all it
                  takes to book your next ride. Fast, reliable, and designed
                  with you in mind. Your next destination is waiting!
                </p>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img src="/assets/user-app.png" className="user-app-img" />

                  <div className="d-flex store-images">
                 
                      <img
                        src="/assets/app-store.png"
                        className="app-store-img "
                        onClick={handleUserApp}
                      />   
                      <img
                        src="/assets/google-pay.png"
                        className="google-img"
                        onClick={handleUserGoogle}
                      />
                
                  </div>
                </div>
                </div>
              </div>
               
              <div className="col-6 pe-md-5">
               <div className="footer-card d-flex gap-sm-3 gap-1">
               <p>
                  Join our growing team of drivers and turns your wheels into
                  opportunities! Download the Mie Ride driver app today and
                  start earning on your schedule. Set your hours, meet
                  intersting people, and become part of a community that moves
                  forward together.
                </p>
                <div className="d-flex flex-column align-items-center justify-content-center ">
                  <img src="/assets/driver-app.png" className="user-app-img" />

                  <div className="d-flex store-images">
                   
                      <img
                        src="/assets/app-store.png"
                        className="app-store-img"
                        onClick={handleDriverApp}
                      />
                  
                   
                      <img
                        src="/assets/google-pay.png"
                        className="google-img"
                        onClick={handleDriverGoogle}
                      />{" "}
                   
                  </div>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" d-flex  ">
          <div className="socialMediaDiv position-absolute ">
            <a href="https://www.instagram.com/mieride.ca/" target="blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png"
                alt="Logo"
                className="s-img"
              />
            </a>
            <a href="https://www.tiktok.com/@mieride.ca" target="blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3046/3046120.png"
                alt="Logo"
                className="s-img"
              />
            </a>

            <a href="https://www.youtube.com/@mieride_ca" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1077/1077046.png"
                alt="Logo"
                className="s-img"
              />
            </a>
            <a href="https://x.com/mieride_ca" target="blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png"
                alt="Logo"
                className="s-img"
              />
            </a>
            <a href="https://www.facebook.com/mieride/" target="blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/733/733603.png"
                alt="Logo"
                className="s-img"
              />
            </a>
            <a href="" target="blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png"
                alt="Logo"
                className="s-img"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
