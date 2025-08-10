import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BeginnerBooking() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://getform.io/f/adrdywma", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        e.target.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div style={{ padding: "80px 20px", textAlign: "center" }}>
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
      <h1 style={{ color: "#4da3ff" }}>Book Your Lesson</h1>
      <p style={{ maxWidth: "600px", margin: "20px auto", color: "#555" }}>
        Fill in your details below and we’ll confirm your booking as soon as
        possible.
      </p>

      {/* Booking Hours Info */}
      <div
        style={{
          background: "#f0faff",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
          borderLeft: "5px solid #4da3ff",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <p>
          <strong>Booking Hours:</strong>
        </p>
        <p>Mon - Sun: 9:00am - 6:00pm</p>
        <p>📞 +233 25 674 9130</p>
        <p>📍 Cape 3 Point, Ecolodge</p>
      </div>

      {/* Booking Form */}
      {success && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          ✅ Your booking has been sent successfully!
        </p>
      )}
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
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="date" name="date" required />
        <button
          type="submit"
          style={{
            backgroundColor: "#4da3ff",
            color: "#fff",
            padding: "10px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
