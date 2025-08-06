import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import "./Advanced.css"; // Reuse same CSS for layout
import advancedLessonImg from "./assets/advanced.jpeg"; // Replace with your image

export default function Advanced() {
  const navigate = useNavigate();

  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="advanced"
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #fff5f5, #ffe4e1)",
      }}
    >
      <div className="container">
        <h2
          className="fw-bold text-center mb-5"
          data-aos="fade-down"
          style={{ fontSize: "2rem", color: "#ff4d4d" }}
        >
          Advanced Lessons
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
          {/* Text */}
          <div
            className="advanced-text"
            style={{ flex: "1", minWidth: "300px" }}
            data-aos="fade-right"
          >
            <h4 style={{ color: "#ff4d4d", fontWeight: "bold" }}>
              Let’s help you refine your technique and achieve your surfing goals.
            </h4>
            <p style={{ color: "#555", marginTop: "10px" }}>
              Join us today and experience the thrill of pushing your limits and
              taking your surfing to new heights!
            </p>

            <ul style={{ color: "#555", marginLeft: "20px" }}>
              <li>
                Performance Goal Setting: Assessing current skill
                level, setting performance goals, and identifying areas for improvement.
              </li>
              <li>
                Advanced Ocean Knowledge: Reading the lineup,
                anticipating wave behavior, and understanding peak dynamics and tides.
              </li>
              <li>
                Advanced Conditioning and Warm-Up: Targeted
                exercises for strength, flexibility, and endurance specific to
                high-performance surfing.
              </li>
              <li>
                Wave Positioning and Timing: Perfecting positioning
                for late take-offs, advanced paddling techniques, and wave domination
                strategies.
              </li>
              <li>
                Progressive Maneuvers: Learning and refining
                advanced techniques, such as carving turns, cutbacks, re-entries,
                floaters, snap turns, and aerial basics (for advanced surfers aiming
                to perform tricks).
              </li>
            </ul>

           

            <button
              onClick={() => navigate("/advanced-booking")}
              className="crazy-btn"
            >
              Book an Advanced Lesson →
            </button>
          </div>

          {/* Image */}
          <div
            className="advanced-img-container"
            style={{ flex: "1", minWidth: "300px" }}
            data-aos="zoom-in-up"
          >
            <img
              src={advancedLessonImg}
              alt="Advanced surf coaching"
              className="advanced-img"
              style={{
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
