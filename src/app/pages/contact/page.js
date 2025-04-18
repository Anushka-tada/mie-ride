"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { submitContactQuery } from "../../services/contact.services";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "@/app/components/Navbar";

function Page() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/" },
    { name: "Our Services", path: "/" },
    { name: "Why Mie Ride", path: "/" },
    { name: "Testimonials", path: "/" },
    { name: "Blogs", path: "/" },
    { name: "Advertise With Us", path: "/" },
    { name: "Partner With Us", path: "/" },
    { name: "Contact Us", path: "/" },
  ];

  const formik = useFormik({
    initialValues: {
      first_name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await submitContactQuery(values);
        toast.success("Message sent successfully!");
        resetForm();
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong. Please try again.");
      }
    },
  });

  return (
    <div className="mainDiv">
      <div className="homepage">
        {/* navbar started */}
        <Navbar selectedItem="Contact Us" navItems={navItems} />
        {/* navbar ended */}
        <div className="contactMain">
          <div className="row contactHeaderRow">
            <div className="col-md-3 col-12">
              <h5>Contact Us</h5>
              <h3>GET IN TOUCH</h3>
            </div>
            <div className="col-md-3 col-6 my-auto">
              <div className="contactBox shadow">
                <div>
                  <div className="d-flex justify-content-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/535/535188.png" />
                  </div>
                  <p>Our Address</p>
                  <h4>Toronto, On</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 my-auto">
              <div className="contactBox shadow">
                <div>
                  <div className="d-flex justify-content-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/2099/2099199.png" />
                  </div>
                  <p>Email Us</p>
                  <h4>info@mieride.ca</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 my-auto mx-auto">
              <div className="contactBox shadow">
                <div>
                  <div className="d-flex justify-content-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/3059/3059446.png" />
                  </div>
                  <p>Call Us</p>
                  <h4>+1 (416) 827-0039</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-2">
              <form onSubmit={formik.handleSubmit} className="contactForm">
                <div>
                  <input
                    placeholder="Your Name"
                    name="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.first_name && formik.errors.first_name && (
                    <small className="text-danger">
                      {formik.errors.first_name}
                    </small>
                  )}
                </div>
                <div>
                  <input
                    placeholder="Your Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <small className="text-danger">{formik.errors.email}</small>
                  )}
                </div>
                <div>
                  <input
                    placeholder="Subject"
                    name="subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <small className="text-danger">
                      {formik.errors.subject}
                    </small>
                  )}
                </div>
                <div>
                  <input
                    placeholder="Message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <small className="text-danger">
                      {formik.errors.message}
                    </small>
                  )}
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 order-md-2 order-1 m-auto d-flex justify-content-center">
              <div className="contactMessageDiv">
                <h5>Have any Query</h5>
                <h3>CONTACT US</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deserunt, cumque! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Deserunt, cumque!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Page;
