import React, { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GiSurfBoard } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Importing three local images
import surfboardsImage1 from "./assets/surf1.jpeg";
import surfboardsImage2 from "./assets/surf2.jpeg";
import surfboardsImage3 from "./assets/aa.jpeg";

export default function Rentals() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  };

  return (
    <section
      id="rentals"
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #e0f7fa, #b3ecff)",
      }}
    >
      <div className="container">
        {/* Heading */}
        <h2
          className="fw-bold text-center mb-5"
          data-aos="fade-up"
          style={{ fontSize: "2rem", color: "#0d6efd" }}
        >
          🏄 Rentals
        </h2>

        <div className="row align-items-center">
          {/* Left: Images Grid */}
          <div
            className="col-md-6 mb-4 mb-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "15px",
              }}
            >
              <img src={surfboardsImage1} alt="Surfboards" style={imageStyle} />
              <img
                src={surfboardsImage2}
                alt="Surfing"
                style={imageStyle}
                data-aos="fade-up"
                data-aos-delay="400"
              />
              <img
  src={surfboardsImage3}
  alt="Different surfboard"
  style={{
    ...imageStyle,
    gridColumn: "span 2", // Makes last image wider
    height: "450px", // ✅ Increased height
    objectFit: "cover", // ✅ Keeps proportions and fills space
    borderRadius: "12px" // Optional for nicer look
  }}
  data-aos="fade-up"
  data-aos-delay="600"
/>

            </div>
          </div>

          {/* Right: Content */}
          <div
            className="col-md-6 text-dark"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h3 className="fw-bold mb-4">
              <GiSurfBoard style={{ color: "#0d6efd", marginRight: "8px" }} />
              Wide Range of Boards for All Skill Levels
            </h3>

            <p>
              Loshe offers a wide range of boards to suit all skill levels and
              preferences  from high‑performance shortboards for experienced
              surfers to longboards for beginners and those looking for a relaxed
              ride.
            </p>

            <p>
              Our boards are top‑of‑the‑line and always in excellent condition,
              so you can focus on catching the perfect wave without any worries.
            </p>

            <p>
              We offer flexible rental options and competitive prices to suit
              your needs.
            </p>

            {/* View Prices Button */}
            <button
              onClick={() => navigate("/rental-prices")}
              style={{
                backgroundColor: "#0d6efd",
                color: "#fff",
                padding: "12px 24px",
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                marginTop: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                transition: "background 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#0b5ed7")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#0d6efd")
              }
            >
              View Rental Prices
            </button>

            {/* Contact Box */}
            <div
              style={{
                background: "#fff",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                display: "inline-block",
                marginTop: "20px",
              }}
            >
              <p className="mb-1 fw-bold">
                <FaPhoneAlt style={{ color: "#28a745", marginRight: "8px" }} />
                For Enquiries:
              </p>
              <p className="mb-0">(+233) 256749130</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
