import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import "./Intermediate.css";
import intermediateLessonImg from "./assets/im9.jpeg";

export default function Intermediate() {
  const navigate = useNavigate();

  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="intermediate"
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #f0faff, #f5d797ff)",
      }}
    >
      <div className="container">
        <h2
          className="fw-bold text-center mb-5"
          data-aos="fade-down"
          data-aos-delay="100"
          style={{ fontSize: "2rem", color: "#4da3ff" }}
        >
          Intermediate Lessons
        </h2>

        {/* Side-by-side layout */}
        <div className="intermediate-wrapper">
          {/* Image */}
          <div className="intermediate-img-container" data-aos="zoom-in-up">
            <img
              src={intermediateLessonImg}
              alt="Intermediate surf lesson"
              className="intermediate-img"
            />
          </div>

          {/* Text */}
          <div
            className="intermediate-text"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h4 style={{ color: "#4da3ff", fontWeight: "bold" }}>
              Are you ready to take your surfing skills to the next level?
            </h4>
            <p style={{ color: "#555", marginTop: "10px" }}>
              My intermediate surf lessons cover essential techniques like duck
              diving, bottom turning, and generating speed, along with
              surf-specific fitness training, to help you build strength and
              endurance in the water. Join me today and experience the thrill of
              riding waves like a pro!
            </p>

            <ul style={{ color: "#555", marginLeft: "20px" }}>
              <li>
                A Quick Review of Basics: Safety, pop-up, and
                setting goals for intermediate skills.
              </li>
              <li>
                Ocean Safety and Advanced Awareness: Learn to
                identify and navigate rips, currents, and wave energy zones with
                greater precision.
              </li>
              <li>
                Surf Warm-up and Stretching: Tailored exercises
                to improve flexibility, strength, and stamina for longer surf
                sessions.
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
              Book an Intermediate Lesson →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
