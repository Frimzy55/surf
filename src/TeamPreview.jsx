// TeamPreview.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function TeamPreview() {
  const navigate = useNavigate();

  const firstMember = {
    name: "Evans Abban",
    role: "Head Surf Instructor",
    desc: "Over 10 years of surfing experience and passionate about teaching beginners and pros."
  };

  return (
    <section
      id="team"
      style={{
        padding: "60px 20px",
        background: "linear-gradient(135deg, #f0faff, #e0f7fa)",
        textAlign: "center"
      }}
    >
      <h2
        style={{
          color: "#4da3ff",
          fontWeight: "bold",
          marginBottom: "30px"
        }}
      >
        Meet Our Team
      </h2>

      {/* Single Preview Card */}
      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          padding: "20px",
          display: "inline-block",
          textAlign: "center",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          width: "250px"
        }}
      >
        <FaUserCircle size={60} color="#4da3ff" />
        <h4 style={{ fontWeight: "bold", marginTop: "10px" }}>
          {firstMember.name}
        </h4>
        <p style={{ color: "#4da3ff", fontWeight: "500" }}>
          {firstMember.role}
        </p>
        <p style={{ fontSize: "0.9rem", color: "#555" }}>{firstMember.desc}</p>
      </div>

      {/* View All Button */}
      <div>
        <button
          onClick={() => navigate("/team")}
          style={{
            backgroundColor: "#4da3ff",
            color: "#fff",
            padding: "10px 20px",
            marginTop: "20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          View All Team Members
        </button>
      </div>
    </section>
  );
}
