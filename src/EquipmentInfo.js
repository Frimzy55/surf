import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function EquipmentInfo() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="container my-5" data-aos="fade-up">
      <h2
        className="fw-bold text-center mb-4"
        style={{ fontSize: "2rem", color: "#4da3ff" }}
      >
        Do You Provide The Equipment?
      </h2>

      <div
        className="card border-0 shadow-lg p-4 mx-auto"
        style={{
          maxWidth: "700px",
          borderRadius: "20px",
          background: "linear-gradient(135deg, #5ad7fa, #a4d6f0ff)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0px 8px 25px rgba(0,0,0,0.25)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.15)";
        }}
      >
        <p style={{ fontSize: "1.05rem", color: "#333" }}>
          We provide everything you need for your surf lesson, including a
          variety of foam boards, full wetsuits, lockers, toilets, and changing
          facilities  all conveniently located at our shop.
        </p>
        <p style={{ fontSize: "1.05rem", color: "#333" }}>
          Your safety is our top priority, and lessons may be cancelled at short
          notice if conditions are too dangerous to head out into the water.
        </p>
      </div>
    </div>
  );
}

export default EquipmentInfo;
