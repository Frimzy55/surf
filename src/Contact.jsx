// Contact.jsx
import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaUsers } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "60px 20px",
        background: "#f9f9f9",
        minHeight: "60vh",
      }}
    >
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">Contact Us</h2>
        <p className="mb-5 text-center">
          Have questions or want to book a surf lesson?  
          We'd love to hear from you!
        </p>

        {/* Contact Info */}
        <div className="row text-center mb-5">
          <div className="col-md-3 mb-4">
            <FaMapMarkerAlt size={30} color="#ff9800" />
            <h5 className="mt-2">Address</h5>
            <p>Loshe's Surf School, Beach Road, Koforidua, Ghana</p>
          </div>

          <div className="col-md-3 mb-4">
            <FaEnvelope size={30} color="#ff9800" />
            <h5 className="mt-2">Email</h5>
            <p>info@loshessurf.com</p>
          </div>

          <div className="col-md-3 mb-4">
            <FaPhoneAlt size={30} color="#ff9800" />
            <h5 className="mt-2">Phone</h5>
            <p>+233 24 123 4567</p>
          </div>

          <div className="col-md-3 mb-4">
            <FaUsers size={30} color="#ff9800" />
            <h5 className="mt-2">Staff</h5>
            <p>15 friendly surf coaches and guides</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
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
      </div>
    </section>
  );
}
