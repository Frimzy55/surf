import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import surfboard images from assets
import surf1 from "./assets/bbb.jpg";
import surf2 from "./assets/b.jpg"; // 👈 Make sure this exists in assets

export default function RentalPrices() {
  const navigate = useNavigate();

  // Local surfboard images
  const surfImages = [surf1, surf2];

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #fff8e1, #ffe9b3)", // Yellow background
        minHeight: "100vh",
      }}
    >
      <div className="container text-dark">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            color: "#0d6efd",
            fontSize: "1.1rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          <FaArrowLeft style={{ marginRight: "8px" }} /> Back
        </button>

        {/* Heading */}
        <h2 className="fw-bold mb-4 text-center">🏄 Rental Prices</h2>

        {/* Surfboard Images Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "15px",
            marginBottom: "30px",
          }}
        >
          {surfImages.map((src, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <img
                src={src}
                alt={`Surfboard ${index + 1}`}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Price Box */}
        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "20px",
            maxWidth: "500px",
            margin: "0 auto",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          }}
        >
          <h4 className="fw-bold mb-3">Surfing Boards</h4>
          <p>1 hour → GH₵80</p>
          <p>2 hours → GH₵160</p>
          <p>Full day → GH₵300</p>

          <hr />

          <h4 className="fw-bold mb-3">Body Boards</h4>
          <p>1 hour → GH₵50</p>
          <p>2 hours → GH₵100</p>
          <p>Full day → GH₵150</p>
        </div>
      </div>
    </section>
  );
}
