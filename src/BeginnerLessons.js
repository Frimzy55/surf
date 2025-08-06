// BeginnerLessons.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BeginnerLessons.css";

export default function BeginnerLessons() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="beginner"
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #f0faff, #e0f7fa)",
      }}
    >
      <div className="container">
        <h2
          className="fw-bold text-center mb-5"
          data-aos="fade-up"
          style={{ fontSize: "2rem", color: "#4da3ff" }}
        >
          What Do The Beginner / Group Surf Lessons Consist Of?
        </h2>

        <div
          className="beginner-text"
          data-aos="fade-up"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "left",
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            borderLeft: "5px solid #4da3ff",
          }}
        >
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            During the session, we'll break down the steps to learning to surf,
            making it as simple and enjoyable as possible. Our experienced
            instructors will begin on the beach, covering the essentials like
            surf safety, understanding your board, catching waves, and mastering
            the 'pop-up'. Once you're ready, we'll get you in the water to ride
            your first waves! By the end of the lesson, you'll have a
            personalized improvement plan, giving you a clear path to continue
            building your surfing skills with confidence.
          </p>

          <p style={{ color: "#555", lineHeight: "1.6" }}>
            With a smaller instructor-to-student ratio, we can provide more
            one-on-one attention and direct feedback, allowing your surfing
            skills to progress faster than in larger group lessons.
          </p>

          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Loshe's Surf School is an accredited Surfing Ghana registered
            school. All of our coaches are well trained and ISA (International
            Surfing Association) surf certified instructors.
          </p>

         
        </div>
      </div>
    </section>
  );
}
