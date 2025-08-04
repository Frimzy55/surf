// OurStory.jsx
import React, { useEffect } from "react";
import { FaWater, FaDumbbell, FaSmile, FaUsers } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhySurfing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cardData = [
    {
      icon: <FaWater size={40} color="#0d6efd" />,
      bg: "linear-gradient(135deg, #6dd5ed, #2193b0)",
      text: "You can't describe the rush of riding a wave—it's something you have to feel for yourself. Grab a board, hit the water, and experience the thrill!",
      delay: 0,
    },
    {
      icon: <FaDumbbell size={40} color="#ff4d6d" />,
      bg: "linear-gradient(135deg, #ff9a9e, #fecfef)",
      text: "Surfing boosts your strength, balance, and fitness—and beyond that, just being in the ocean does wonders for your health.",
      delay: 200,
    },
    {
      icon: <FaSmile size={40} color="#ffb400" />,
      bg: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
      text: "Surfing not only gets you fit but also builds your confidence. As you face challenges, you'll push your limits and grow stronger.",
      delay: 400,
    },
    {
      icon: <FaUsers size={40} color="#2ecc71" />,
      bg: "linear-gradient(135deg, #fddb92, #d1fdff)",
      text: "Make new friends and join the surfing community. Share the stoke, catch waves together, and have unforgettable fun!",
      delay: 600,
    },
  ];

  return (
    <section
      id=""
      style={{
        padding: "60px 20px",
        background: "#e0f7fa", // Light blue
        minHeight: "60vh",
      }}
    >
      <div className="container">
        <h2
          className="fw-bold mb-4 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          WHY SURFING? HERE ARE JUST A COUPLE OF REASONS!
        </h2>
        <div className="row justify-content-center">
          {cardData.map((card, index) => (
            <div
              className="col-md-3 col-sm-6 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={card.delay}
            >
              <div
                className="card shadow-lg h-100 border-0 text-center"
                style={{
                  borderRadius: "15px",
                  background: card.bg,
                  color: "black",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  padding: "20px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                <div className="mb-3">{card.icon}</div>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
