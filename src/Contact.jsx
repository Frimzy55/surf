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
                <a href="https:wa.me/233256749130" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={30} color="#25D366" />
                </a>
                <a href="https://www.youtube.com/@EvansAbban-w9o" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={30} color="#FF0000" />
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
            <iframe
              title="Cape 3 Points Ecolodge Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3373648059114!2d-2.0918294258330886!3d4.747068741152465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfd8f44d2c2c8c9f%3A0x7eac8822b5c7711!2sEscape%203%20Points%20Ecolodge!5e0!3m2!1sen!2sgh!4v1690000000000!5m2!1sen!2sgh"
              width="100%"
              height="300"
              style={{
                border: 0,
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
