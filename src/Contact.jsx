import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaTripadvisor,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("https://getform.io/f/adrdywma", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  // Automatically hide popup after 3 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" style={{ padding: "60px 20px", background: "#f9f9f9" }}>
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">Contact Us</h2>
        <p className="mb-5 text-center">
          Have questions or want to book a surf lesson? We'd love to hear from you!
        </p>

        <div className="row align-items-start">
          {/* Contact Info */}
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

            {/* Social Links */}
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

          {/* Contact Form */}
          <div className="col-lg-6">
            <form
              onSubmit={handleSubmit}
              className="mb-4"
              style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left" }}
            >
              <div className="mb-3">
                <label className="form-label fw-bold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                  required
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
        </div>
      </div>

      {/* Floating Notification */}
      {status && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            padding: "15px 20px",
            backgroundColor: status === "success" ? "#4CAF50" : "#F44336",
            color: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            zIndex: 1000,
            animation: "fadeInOut 3s ease"
          }}
        >
          {status === "success"
            ? "✅ Your message has been sent successfully!"
            : "❌ Something went wrong. Please try again."}
        </div>
      )}

      {/* Popup Animation */}
      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(-10px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; }
            100% { opacity: 0; transform: translateY(-10px); }
          }
        `}
      </style>
    </section>
  );
}
