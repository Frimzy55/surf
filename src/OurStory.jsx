// OurStory.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurStory() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      once: true, // run once
    });
  }, []);

  return (
    <section
      id="our-story"
      style={{
        padding: "60px 20px",
        background: "#fff",
        minHeight: "60vh",
      }}
    >
      <div className="container">
        <h2
          className="fw-bold mb-4 text-center"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          Our Story
        </h2>
        <div className="row justify-content-center">
          
          {/* Card 1 */}
          <div
            className="col-md-5 mb-4"
            data-aos="flip-left"
            data-aos-delay="200"
          >
            <div
              className="card shadow-lg h-100 border-0"
              style={{
                borderRadius: "15px",
                background: "linear-gradient(135deg, #d4f1f9, #a7d8f0)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(3deg) scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotate(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(0,0,0,0.1)";
              }}
            >
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">
                  How We Started
                </h5>
                <p className="card-text text-center">
                  Loshe's Surf School started with a dream  to bring the joy
                  and excitement of surfing to people from all walks of life.
                  From our humble beginnings on the sunny beaches of Ghana, we
                  have grown into a vibrant surf community welcoming beginners
                  and pros alike.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="col-md-5 mb-4"
            data-aos="flip-right"
            data-aos-delay="400"
          >
            <div
              className="card shadow-lg h-100 border-0"
              style={{
                borderRadius: "15px",
                background: "linear-gradient(135deg, #fddb92, #d1fdff)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(-3deg) scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotate(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(0,0,0,0.1)";
              }}
            >
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">
                  Our Mission
                </h5>
                <p className="card-text text-center">
                  Our mission is simple: to share our passion for the ocean,
                  teach people to ride the waves safely, and create
                  unforgettable memories. With a team of dedicated instructors
                  and a deep respect for the sea, we aim to inspire confidence,
                  courage, and a lifelong love for surfing.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
