// Tour.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkedAlt, FaRegCalendarAlt, FaInfoCircle } from "react-icons/fa";
import tourImg1 from "./assets/tour1.jpeg"; // Replace with your own local images
import tourImg2 from "./assets/tour2.jpeg";
import tourImg3 from "./assets/tour3.jpeg";

export default function Tour() {
  // Initialize animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="tour"
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #fff5e6, #ffe0b2)",
      }}
    >
      <div className="container">
        {/* Heading */}
        <h2
          className="fw-bold text-center mb-5"
          style={{ fontSize: "2rem", color: "#ff9800" }}
          data-aos="fade-up"
        >
          🏝 Guided Surf & Beach Tours
        </h2>

        <div className="row align-items-center">
          {/* Left: Tour Info */}
          <div
            className="col-lg-6"
            data-aos="fade-right"
          >
            <h4 className="fw-bold mb-3">
              <FaMapMarkedAlt style={{ color: "#ff9800", marginRight: "8px" }} />
              Explore Cape 3 Points
            </h4>
            <p>
              Join our experienced local guides for a scenic tour around Cape 3 Points.
              Discover the beauty of Ghana’s southernmost tip while enjoying the beach,
              waves, and nature.
            </p>

            <h4 className="fw-bold mt-4 mb-3">
              <FaRegCalendarAlt style={{ color: "#ff9800", marginRight: "8px" }} />
              Tour Schedule
            </h4>
            <p>Daily tours available from <strong>9:00 AM - 6:00 PM</strong>.</p>

            <h4 className="fw-bold mt-4 mb-3">
              <FaInfoCircle style={{ color: "#ff9800", marginRight: "8px" }} />
              What's Included
            </h4>
            <ul>
              <li>Transportation to tour spots</li>
              <li>Surf lessons & board rental</li>
              <li>Local lunch and refreshments</li>
              <li>Photography package</li>
            </ul>
          </div>

          {/* Right: Tour Images */}
          <div
            className="col-lg-6"
            data-aos="zoom-in"
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "15px",
              }}
            >
              <img
                src={tourImg1}
                alt="Tour 1"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                }}
              />
              <img
                src={tourImg2}
                alt="Tour 2"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                }}
              />
              <img
                src={tourImg3}
                alt="Tour 3"
                style={{
                  gridColumn: "span 2",
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
