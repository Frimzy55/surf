import React from "react";
import { useNavigate } from "react-router-dom";
import johnImg from "./assets/member2.jpeg";

export default function JohnBio() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "auto" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          backgroundColor: "#4da3ff",
          color: "#fff",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <img
        src={johnImg}
        alt="Samuel Armanfo"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid #4da3ff",
          marginBottom: "15px",
        }}
      />

      <h2 style={{ color: "#4da3ff" }}>Samuel Armanfo</h2>
      <p><strong>Surf Equipment Manager</strong></p>

      <p>
        Samuel Armanfo oversees all surf equipment, ensuring boards and safety gear
        are in top condition. His dedication to equipment safety and quality
        ensures every surfer can enjoy their lesson with the best gear available.
      </p>
    </div>
  );
}
