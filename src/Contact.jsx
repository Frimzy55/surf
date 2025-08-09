import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
//import { FaTripadvisor } from "react-icons/fa6"; // Import Tripadvisor icon
import { FaTripadvisor } from "react-icons/fa";


export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "60px 20px",
        background: "#f9f9f9",
      }}
    >
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">Contact Us</h2>
        <p className="mb-5 text-center">
          Have questions or want to book a surf lesson? We'd love to hear from you!
        </p>

        <div className="row align-items-start">
          {/* Contact Info & Socials */}
          <div className="col-lg-6 mb-5">
            <div className="row text-center mb-4">
              <div className="col-md-6 mb-4">
                <FaMapMarkerAlt size={30} color="#ff9800" />
                <h5 className="mt-2">Address</h5>
                <p>Cape 3 Point, Ecolodge, Western Region, Ghana</p>
              </div>

              <div className="col-md-6 mb-4">
                <FaPhoneAlt size={30} color="#ff9800" />
                <h5 className="mt-2">Phone</h5>
                <p>(+233) 256749130</p>
              </div>

              <div className="col-md-6 mb-4">
                <FaEnvelope size={30} color="#ff9800" />
                <h5 className="mt-2">Email</h5>
                <p>abbanevans100@gmail.com</p>
              </div>

              <div className="col-md-6 mb-4">
                <FaClock size={30} color="#ff9800" />
                <h5 className="mt-2">Hours</h5>
                <p>Mon - Sun / 9:00 AM - 6:00 PM (GMT+)</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h5 className="fw-bold mb-3">Follow Us</h5>
              <div className="d-flex justify-content-center gap-4">
                <a href="https://www.facebook.com/share/15jiiB1rGk/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={30} color="#4267B2" />
                </a>
                <a href="https://www.instagram.com/loshes_surf_school/profilecard/?igsh=cHVlY29rZjFxZXd0" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} color="#C13584" />
                </a>
                <a href="https://wa.me/233256749130" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={30} color="#25D366" />
                </a>
                <a href="https://www.youtube.com/@EvansAbban-w9o" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={30} color="#FF0000" />
                </a>
                <a
                  href="https://www.tripadvisor.co.uk/Attraction_Review-g15228249-d27110371-Reviews-Loshe_s_Surf_Cape_Three_Points-Cape_Three_Points_Western_Region.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTripadvisor size={30} color="#00AF87" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="col-lg-6">
            <form
              className="mb-4"
              style={{
                maxWidth: "500px",
                margin: "0 auto",
                textAlign: "left",
              }}
            >
              <div className="mb-3">
                <label className="form-label fw-bold">Name</label>
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{ backgroundColor: "#ff9800", border: "none" }}
              >
                Send Message
              </button>
            </form>

            {/* Google Map */}
            
          </div>
        </div>
      </div>
    </section>
  );
}
