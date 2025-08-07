import React from "react";
import { FaArrowLeft, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BookSession() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
    id="book1"
     style={{ padding: "80px 20px", textAlign: "center" }}>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "transparent",
          border: "none",
          color: "#4da3ff",
          display: "flex",
          alignItems: "center",
          fontSize: "1rem",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        <FaArrowLeft style={{ marginRight: "8px" }} /> Back
      </button>

      {/* Title */}
      <h1 style={{ color: "#4da3ff" }}>Book a Session With Me</h1>
      <p style={{ maxWidth: "600px", margin: "20px auto", color: "#555" }}>
        Fill in your details below to request a private surf session. We’ll get back to you soon with confirmation.
      </p>

      {/* Contact Information */}
      <div
        style={{
          background: "#f0faff",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "30px",
          borderLeft: "5px solid #4da3ff",
          maxWidth: "400px",
          margin: "0 auto 30px",
          textAlign: "left",
        }}
      >
        <p><FaPhoneAlt style={{ marginRight: "8px" }} /> +233 25 674 9130</p>
        <p><FaEnvelope style={{ marginRight: "8px" }} /> loshesurfschool@gmail.com</p>
        <p><FaMapMarkerAlt style={{ marginRight: "8px" }} /> Cape 3 Points, Ecolodge, Ghana</p>
      </div>

      {/* Booking Form */}
      <form
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="tel" placeholder="Phone Number (optional)" />
        <input type="date" required />
        <textarea placeholder="Any message or request?" rows="4" />

        <button
          type="submit"
          style={{
            backgroundColor: "#4da3ff",
            color: "#fff",
            padding: "10px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
