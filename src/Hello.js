import { useState, useEffect, useMemo, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube, FaTripadvisor } from "react-icons/fa";

import SurfHeading from "./SurfHeading";

// Images
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

import "./Hello.css";

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
      {/* Hero Section */}
      <div
        id="hello"
        className="hero"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        <SurfHeading />

        <button
          onClick={scrollToSection}
          className="learn-more-btn"
        >
          Learn More
        </button>

        {/* Social Media */}
        <div className="social-container">
          <h5 className="fw-bold mb-3">Follow Us</h5>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/15jiiB1rGk/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={30} color="#4267B2" />
            </a>
            <a href="https://www.instagram.com/loshes_surf_school/profilecard/?igsh=cHVlY29rZjFxZXd0" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} color="#C13584" />
            </a>
            <a href="https://wa.me/233256749130" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} color="#25D366" />
            </a>
            <a href="https://www.youtube.com/@EvansAbban-w9o" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={30} color="#FF0000" />
            </a>
            <a href="https://www.tripadvisor.co.uk/Attraction_Review-g15228249-d27110371-Reviews-Loshe_s_Surf_Cape_Three_Points-Cape_Three_Points_Western_Region.html" target="_blank" rel="noopener noreferrer">
              <FaTripadvisor size={30} color="#34E0A1" />
            </a>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <section id="why-surfing" className="full-section">
        <WhySurfing />
      </section>
      <section className="full-section">
        <BeginnerLessons />
      </section>
      <section className="full-section">
        <EquipmentInfo />
      </section>
    </>
  );
}

export default Hello;
