import { useState, useEffect, useMemo, useCallback } from "react"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube, FaTripadvisor } from "react-icons/fa";

import SurfHeading from "./SurfHeading";

// Background images
import img1 from "./assets/image1.jpeg";
import inter from "./assets/intermediate.jpeg";
import img3 from "./assets/image3.jpeg";
import img4 from "./assets/image4.jpeg";
import im9 from "./assets/ocean.jpeg";
import img7 from "./assets/image11.jpeg";
import n from "./assets/n.jpeg";
import ff from "./assets/ff.jpeg";
import adv from "./assets/advanced.jpeg";

// Sections
import WhySurfing from "./WhySurfing";
import BeginnerLessons from "./BeginnerLessons";
import EquipmentInfo from "./EquipmentInfo";

function Hello() {
  const images = useMemo(() => [adv, img1, img3, img4, img7, n, ff, inter, im9], []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const scrollToSection = useCallback(() => {
    const section = document.getElementById("why-surfing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div
        id="hello"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <SurfHeading />

        <button
          onClick={scrollToSection}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#e68900")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff9800")}
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
        >
          Learn More
        </button>

        {/* Social Media */}
        <div className="text-center" style={{ marginTop: "30px" }}>
          <h5 className="fw-bold mb-3">Follow Us</h5>
          <div className="d-flex justify-content-center gap-4">
            <a
              href="https://www.facebook.com/share/15jiiB1rGk/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={30} color="#4267B2" />
            </a>
            <a
              href="https://www.instagram.com/loshes_surf_school/profilecard/?igsh=cHVlY29rZjFxZXd0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} color="#C13584" />
            </a>
            <a
              href="https://wa.me/233256749130"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={30} color="#25D366" />
            </a>
            <a
              href="https://www.youtube.com/@EvansAbban-w9o"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={30} color="#FF0000" />
            </a>
            <a
              href="https://www.tripadvisor.co.uk/Attraction_Review-g15228249-d27110371-Reviews-Loshe_s_Surf_Cape_Three_Points-Cape_Three_Points_Western_Region.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTripadvisor size={30} color="#34E0A1" />
            </a>
          </div>
        </div>
      </div>

      {/* Page Sections */}
      <div id="why-surfing">
        <WhySurfing />
      </div>
      <BeginnerLessons />
      <EquipmentInfo />
    </>
  );
}

export default Hello;
