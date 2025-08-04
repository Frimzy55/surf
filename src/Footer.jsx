import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
        fontSize: "14px",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Loshe's Surf School | Designed & Developed
        by <span style={{ color: "#0dcaf0", fontWeight: "bold" }}>Your Name</span>
      </p>
    </footer>
  );
}
