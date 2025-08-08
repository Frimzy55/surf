import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        color: " #96adc7ee",
        padding: "20px 0",
        textAlign: "center",
        fontSize: "14px",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()}  | Designed & Developed
        by <span style={{ color: "#89d8e7be", fontWeight: "light" }}>Frimz Denver</span>
      </p>
      <p>+233 552424591</p>
    </footer>
  );
}
