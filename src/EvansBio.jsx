import React from "react";
import { useNavigate } from "react-router-dom";
//import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import evansImg from "./assets/evans.jpeg";
import accreditationImg from "./assets/cert.jpeg";
import accreditationImg2 from "./assets/cert1.jpeg";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaTripadvisor } from "react-icons/fa";


export default function EvansBio() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          backgroundColor: "#4da3ff",
          color: "#fff",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      {/* Profile Image */}
      <img
        src={evansImg}
        alt="Evans Abban"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid #4da3ff",
          marginBottom: "15px",
        }}
      />

      {/* Name & Role */}
      <h2 style={{ color: "#4da3ff" }}>Evans Abban</h2>
      
      <p>
        <strong>Head Surf Instructor</strong>
      </p>
      

      {/* Bio */}
      <h3 style={{ marginTop: "30px", color: "#4da3ff" }}>
        A Certified Surf Instructor and Life Guard with over seven (7) years of surfing experience.
      </h3>
      <p>
        Evans Abban, also known as Loshe, is an experienced certified surf
        instructor and lifeguard with over 7 years of experience in the field.
        He is a passionate surfer and has dedicated his life to sharing his
        knowledge and expertise with others and the people of Cape 3 Points
        here in the Western Region of Ghana.
      </p>
      <p>
        In addition to his teaching and lifeguarding work, Loshe is also an avid
        surfer himself. With extensive training in water safety, rescue
        techniques, and CPR as a lifeguard, he has a keen eye for spotting
        potential hazards in the water, and he takes great care to ensure the
        safety of everyone around him. His combination of surfing expertise and
        lifeguard training makes him an invaluable asset to any surf school or
        beach community.
      </p>

      {/* Teaching Style */}
      <h3 style={{ marginTop: "30px", color: "#4da3ff" }}>
        Loshe's Surf Teaching Style and Expertise
      </h3>
      <p>
        As a surf instructor, Loshe has taught students of all levels, from
        beginners to advanced surfers. He has a patient and encouraging
        teaching style, helping his students to develop their skills while
        ensuring their safety in the water. He has a deep understanding of the
        ocean and its dynamics, which enables him to provide valuable insights
        into surfing techniques and strategies.
      </p>
      <p>
        Whether you're a beginner looking to catch your first wave or an
        experienced surfer looking to improve your skills, Loshe is the perfect
        guide to help you reach your goals.
      </p>

      {/* Professional Accreditation */}
      <h3 style={{ marginTop: "30px", color: "#4da3ff" }}>
        Professional Accreditation
      </h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "15px",
        }}
      >
        <img
          src={accreditationImg}
          alt="ISA Certification 1"
          style={{
            width: "48%",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
        <img
          src={accreditationImg2}
          alt="ISA Certification 2"
          style={{
            width: "48%",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
      </div>

      <p>
        Evans Abban is a surf instructor in Ghana who has completed training and
        earned certification from the International Surfing Association (ISA)
        at Level 1. He is dedicated to teaching safe and basic surfing skills to
        his students. With his knowledge and experience, Evans strives to
        provide a fun and positive learning experience for his students, both
        in and out of the water.
      </p>

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/booking")}
          style={{
            backgroundColor: "#ffb400",
            color: "#111",
            border: "none",
            padding: "10px 18px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
            marginRight: "10px",
          }}
        >
          Book a session with me →
        </button>
        
      </div>

       {/* Social Media */}
                  <div className="text-center">
                    <h5 className="fw-bold mb-3">Follow Us</h5>
                    <div className="d-flex justify-content-center gap-4">
                      <a href="https://www.facebook.com/share/15jiiB1rGk/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} color="#4267B2" />
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
                      <a
                        href="https://www.tripadvisor.co.uk/Attraction_Review-g15228249-d27110371-Reviews-Loshe_s_Surf_Cape_Three_Points-Cape_Three_Points_Western_Region.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTripadvisor size={30} color="#00AF87" />
                      </a>
                    </div>
                  </div>
      
    </div>
  );
}

                