import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//import { motion } from "framer-motion"; // Keep if you plan to animate other parts
import SurfHeading from "./SurfHeading"; // <-- New import

// Import your background images
import img1 from "./assets/image1.jpeg";
//import img2 from "./assets/image2.jpeg";
import img3 from "./assets/image3.jpeg";
import img4 from "./assets/image4.jpeg";
//import bb from "./assets/img1.jpg";
import img7 from "./assets/image11.jpeg";

// Import new sections
import WhySurfing from "./WhySurfing";
import BeginnerLessons from "./BeginnerLessons";
import EquipmentInfo from "./EquipmentInfo";

function Hello() {
  const images = [img1, img3, img4,img7];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // Scroll to WhySurfing section
  const scrollToSection = () => {
    const section = document.getElementById("why-surfing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Slideshow */}
      <div
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Crazy Animated Headings */}
        <SurfHeading />

        {/* Learn More Button */}
        <button
          onClick={scrollToSection}
          style={{
            marginTop: "20px",
            padding: "12px 28px",
            backgroundColor: "#ff9800",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e68900")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ff9800")}
        >
          Learn More
        </button>
      </div>

      {/* Imported Sections */}
      <div id="why-surfing">
        <WhySurfing />
      </div>
      <BeginnerLessons />
      <EquipmentInfo />
    </>
  );
}

export default Hello;
