// BeginnerLessons.jsx
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import "./BeginnerLessons.css";

import beginnerLessonImg from "./assets/beginner.jpeg";

export default function BeginnerLessons() {
  const navigate = useNavigate();

  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="beginner1"
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #f0faff, #e0f7fa)",
      }}
    >
      <div className="container">
        <h2
          className="fw-bold text-center mb-5"
          data-aos="fade-down"
          data-aos-delay="100"
          style={{ fontSize: "2rem", color: "#4da3ff" }}
        >
          Beginner Lessons
        </h2>

        <div
          className="beginner-wrapper"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Image with animation */}
          <img
            src={beginnerLessonImg}
            alt="Beginner surf lesson"
            className="beginner-img"
            data-aos="zoom-in-up"
            data-aos-delay="200"
            style={{
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              transform: "scale(1)",
              transition: "transform 0.4s ease-in-out",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />

          {/* Text with animation */}
          <div
            className="beginner-text"
            style={{ maxWidth: "600px" }}
            data-aos="flip-left"
            data-aos-delay="300"
          >
            <h4 style={{ color: "#4da3ff", fontWeight: "bold" }}>
              Let’s help you catch your first wave!
            </h4>
            <p style={{ color: "#555", marginTop: "10px" }}>
              Learning to surf can be challenging for beginners, as it requires
              developing skills such as paddling, balance, and wave reading.
              However, with the right instruction, equipment, and practice,
              anyone can overcome these challenges and experience the thrill of
              catching and riding waves. I'm glad to be your guide!
            </p>

            <ul style={{ color: "#555", marginLeft: "20px" }}>
              <li>
                Introduction to Surfing Basics: An introduction
                to surfing, its history, and essential equipment.
              </li>
              <li>
                Ocean Awareness and Safety: Covering how to read
                waves, rips, and tides, and staying safe in the water.
              </li>
              <li>
                Surf Warm-Up and Stretching: Exercises to
                prepare your body for surfing and prevent injuries.
              </li>
              <li>
                The Pop-Up and Stance: Step-by-step techniques
                for getting up on the board and finding balance.
              </li>
              <li>
                Paddling and Wave Catching: How to paddle
                effectively and position yourself to catch a wave.
              </li>
            </ul>

            <button
              onClick={() => navigate("/beginner-booking")}
              className="crazy-btn"
            >
              Book a Beginner Lesson →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}      