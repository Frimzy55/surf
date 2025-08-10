import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BookSession() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // success | error

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          message: "",
        });
        // Auto-hide after 3 seconds
        setTimeout(() => setStatus(null), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div id="book1" style={{ padding: "80px 20px", textAlign: "center" }}>
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

      {/* Contact Info */}
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
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number (optional)"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any message or request?"
          rows="4"
        />

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

        {/* Success/Error Popup */}
        {status === "success" && (
          <p
            style={{
              background: "#d4edda",
              color: "#155724",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "6px",
            }}
          >
            ✅ Your request has been sent successfully!
          </p>
        )}
        {status === "error" && (
          <p
            style={{
              background: "#f8d7da",
              color: "#721c24",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "6px",
            }}
          >
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
