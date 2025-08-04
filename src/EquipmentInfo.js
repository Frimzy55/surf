import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSuitcaseRolling } from "react-icons/fa"; // Icon for equipment

function EquipmentInfo() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="container my-5" data-aos="fade-up">
      <h2 className="fw-bold mb-3 text-center">
        Do You Provide The Equipment?
      </h2>
      <div
        className="card shadow-sm border-0 p-4 text-center"
        style={{
          borderRadius: "15px",
          background: "linear-gradient(135deg, #d4f1f9, #a7d8f0)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0px 6px 20px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0px 3px 10px rgba(0,0,0,0.1)";
        }}
      >
        <div className="mb-3">
          <FaSuitcaseRolling size={50} className="text-primary" />
        </div>
        <p>
          We provide everything you need for your surf lesson, including a variety of foam boards,
          full wetsuits, lockers, toilets, and changing facilities—all conveniently located at our shop.
        </p>
        <p>
          Your safety is our top priority, and lessons may be cancelled at short notice if conditions
          are too dangerous to head out into the water.
        </p>
      </div>
    </div>
  );
}

export default EquipmentInfo;
