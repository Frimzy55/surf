// YogaWithSerap.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function YogaWithSerap() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

   React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8f9fa, #ffe9b3)",
        minHeight: "100vh",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
      }}
    >
      <div
        data-aos="fade-up"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "16px",
          padding: "40px",
          maxWidth: "900px",
          width: "100%",
          lineHeight: "1.8",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
          position: "relative"
        }}
      >
        {/* Back Arrow */}
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            color: "#0d6efd",
            cursor: "pointer",
            position: "absolute",
            top: "20px",
            left: "20px",
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <FaArrowLeft /> 
        </button>

        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#0d6efd",
            fontWeight: "bold"
          }}
        >
          Yoga with Serap  Healing Through Movement & Breath
        </h1>

        <p>
          For over 20 years, I have been on a path of mindfulness and meditation,
          guided by the wisdom of teachers such as Merle Heynen (Switzerland).
          This journey naturally led me to yoga  a practice that deeply connects
          body, mind, and soul.
        </p>

        <p>
          I completed my 200-hour Yoga Teacher Training in Hawaii with the
          renowned California-based teacher Shai Segre, where I
          built a strong foundation in alignment, anatomy, and the art of holding
          space for transformation.
        </p>

        <p>My curiosity for healing practices inspired me to explore deeper:</p>
        <ul
          style={{
            textAlign: "left",
            margin: "20px auto",
            maxWidth: "700px",
            paddingLeft: "20px"
          }}
        >
          <li>
            50 hours Yin Yoga & Breathwork and 50 hours Yin Yoga & Fascia with
             Fran Gottschild – exploring the science and art of
            releasing tension stored deep in the body.
          </li>
          <li>
            50 hours Kundalini Yoga with Gobinde Yoga Zürich –
            unlocking energy, nervous system balance, and clarity through kriyas,
            mantra, and breathwork.
          </li>
        </ul>

        <p>
          Today, my classes focus on Yin Yoga and therapeutic{" "}
          Hatha Yoga, infused with elements of{" "}
          Kundalini Yoga and breathwork. Every session is an
          invitation to slow down, release, and reconnect – offering space to
          breathe deeply, regulate the nervous system, and feel safe in your body
          again.
        </p>

        <p>
          Yoga with me is not about performance or perfection – it’s about coming
          home to yourself.
        </p>

        <p
          style={{
            fontStyle: "italic",
            textAlign: "center",
            marginTop: "30px",
            fontSize: "1.2rem",
            color: "#444"
          }}
        >
          Come as you are – leave lighter, calmer, and more connected.
        </p>
      </div>
    </div>
  );
}
