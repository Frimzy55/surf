import React, { useEffect } from "react";
import { GiWaveSurfer, GiSurfBoard, GiIsland, GiLifeBuoy } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhySurfing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cardData = [
    {
      icon: <GiWaveSurfer size={60} color="#00d4ff" />,
      title: "Ride the Waves",
      text: "Feel the ultimate rush of surfing as you ride waves and connect with the ocean like never before.",
      delay: 0,
    },
    {
      icon: <GiSurfBoard size={60} color="#ff9800" />,
      title: "Build Strength",
      text: "Improve balance, build strength, and enhance coordination — surfing is a fun full-body workout.",
      delay: 200,
    },
    {
      icon: <GiIsland size={60} color="#4caf50" />,
      title: "Relax in Nature",
      text: "Experience pure relaxation in tropical settings — the beach is your natural stress reliever.",
      delay: 400,
    },
    {
      icon: <GiLifeBuoy size={60} color="#f44336" />,
      title: "Join the Community",
      text: "Join a supportive surf community where friendships are made and adventures are shared.",
      delay: 600,
    },
  ];

  return (
    <section
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px",
        position: "relative",
      }}
    >
      {/* Dark overlay for text readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
        }}
      ></div>

      <div className="container position-relative">
        <h2
          className="fw-bold mb-5 text-center text-white"
          data-aos="fade-up"
        >
          WHY SURFING? HERE ARE JUST A COUPLE OF REASONS!
        </h2>

        <div className="row justify-content-center">
          {cardData.map((card, index) => (
            <div
              className="col-md-5 col-lg-3 col-sm-6 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={card.delay}
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  padding: "25px",
                  color: "white",
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div className="mb-3">{card.icon}</div>
                <h5 className="fw-bold">{card.title}</h5>
                <p style={{ fontSize: "0.95rem" }}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <svg
        style={{
          position: "absolute",
          bottom: "-1px",
          left: 0,
          width: "100%",
          height: "80px",
        }}
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,213.3C672,181,768,139,864,138.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192V320H0Z"
        ></path>
      </svg>
    </section>
  );
}
