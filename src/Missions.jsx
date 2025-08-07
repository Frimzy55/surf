import React, { useEffect } from "react";
import "./Mission.css";

export default function Missions() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  return (
    <section id="mission" className="mission-section">
      <div className="container">
        <h2 className="mission-title text-center" style={{ color: "#4da3ff" }}>
          Our Vision
        </h2>

        <div className="card mission-card p-4 mt-4 shadow-sm rounded" style={{ backgroundColor: "#f9f9f9" }}>
          <p className="mission-text mb-3">
            At Loshe's Surf School, Camp and Tours, our mission is to empower individuals of all ages and backgrounds to discover their inner strength, confidence, and peace through surfing, adventure, and holistic wellness practices.
          </p>
          <p className="mission-text mb-3">
            We believe in creating a nurturing environment where people can grow physically, mentally, and spiritually by connecting with nature and the ocean. Our surf school doesn’t just teach surfing — it builds character, resilience, and community.
          </p>
          <p className="mission-text mb-0">
            Our vision is to become a leading surf education and adventure tourism center in West Africa, recognized globally for our inclusive culture, safety-first approach, and passion for sharing the joy of surfing and coastal living.
          </p>
        </div>

        {/* Dot Loader */}
        <div className="dot-loader mt-4">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
