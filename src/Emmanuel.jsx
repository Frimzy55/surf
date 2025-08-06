import React from "react";
import { useNavigate } from "react-router-dom";
import maryImg from "./assets/member1.jpeg";

export default function MaryBio() {
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
        src={maryImg}
        alt="Emmanuel Armstrong"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid #4da3ff",
          marginBottom: "15px",
        }}
      />

      <h2 style={{ color: "#4da3ff" }}>Emmanuel Armstrong</h2>
      <p><strong>Yoga & Wellness Coach</strong></p>

      <p>
        Emmanuel Armstrong specializes in holistic wellness, combining yoga, breathing
        exercises, and meditation to help clients achieve both physical and mental
        balance. She has trained in multiple countries and brings an international
        approach to wellness.
      </p>
    </div>
  );
}
