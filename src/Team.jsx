import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Team.css";

// Import images
import surfTeachingImg from "./assets/image6.jpg";
import accreditationImg from "./assets/cert.jpeg";

export default function Team() {
  const [showAll, setShowAll] = useState(false);
  const [expandedMember, setExpandedMember] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const teamMembers = [
    {
      name: "Evans Abban",
      role: "Head Surf Instructor",
      shortDesc:
        "Over 10 years of surfing experience and passionate about teaching beginners and pros.",
      bio: `Evans Abban, also known as Loshe, is an experienced certified surf instructor and lifeguard with over 7 years of experience in the field. He is a passionate surfer and has dedicated his life to sharing his knowledge and expertise with others and the people of Cape 3 Points here in the Western Region of Ghana.

In addition to his teaching and lifeguarding work, Loshe is also an avid surfer himself. With extensive training in water safety, rescue techniques, and CPR as a lifeguard, he has a keen eye for spotting potential hazards in the water, and he takes great care to ensure the safety of everyone around him. His combination of surfing expertise and lifeguard training makes him an invaluable asset to any surf school or beach community.`,
      teachingStyle: `As a surf instructor, Loshe has taught students of all levels, from beginners to advanced surfers. He has a patient and encouraging teaching style, helping his students to develop their skills while ensuring their safety in the water. He has a deep understanding of the ocean and its dynamics, which enables him to provide valuable insights into surfing techniques and strategies.

Whether you're a beginner looking to catch your first wave or an experienced surfer looking to improve your skills, Loshe is the perfect guide to help you reach your goals.`,
      accreditation: `Evans Abban is a surf instructor in Ghana who has completed training and earned certification from the International Surfing Association (ISA) at Level 1. He is dedicated to teaching safe and basic surfing skills to his students. With his knowledge and experience, Evans strives to provide a fun and positive learning experience for his students, both in and out of the water.`
    }
  ];

  const displayedMembers = showAll ? teamMembers : [teamMembers[0]];

  return (
    <section
      id="team"
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #f0faff, #e0f7fa)"
      }}
    >
      <div className="container">
        <h2
          className="fw-bold text-center mb-5"
          data-aos="fade-up"
          style={{ fontSize: "2rem", color: "#4da3ff" }}
        >
          Meet Our Team
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px"
          }}
        >
          {displayedMembers.map((member, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "15px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
              }}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <FaUserCircle
                size={60}
                color="#4da3ff"
                style={{ marginBottom: "10px" }}
              />
              <h4 style={{ fontWeight: "bold", marginBottom: "5px" }}>
                {member.name}
              </h4>
              <p style={{ color: "#4da3ff", fontWeight: "500" }}>
                {member.role}
              </p>

              {member.name === "Evans Abban" &&
              expandedMember === "Evans Abban" ? (
                <>
                  {/* Bio Section */}
                  <div
                    style={{
                      background: "#f0faff",
                      padding: "15px",
                      borderRadius: "10px",
                      textAlign: "left",
                      marginBottom: "15px",
                      borderLeft: "5px solid #4da3ff"
                    }}
                  >
                    <h5 style={{ color: "#4da3ff", fontWeight: "bold" }}>
                      A Certified Surf Instructor and Life Guard with over seven (7) years of surfing experience
                    </h5>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#555",
                        whiteSpace: "pre-line",
                        marginTop: "10px"
                      }}
                    >
                      {member.bio}
                    </p>
                  </div>

                  {/* Teaching Style Section */}
                  <div
                    style={{
                      background: "#f0faff",
                      padding: "15px",
                      borderRadius: "10px",
                      marginBottom: "15px",
                      borderLeft: "5px solid #4da3ff",
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "20px"
                    }}
                  >
                    <img
                      src={surfTeachingImg}
                      alt="Loshe teaching surf lessons"
                      style={{
                        flex: "1 1 250px",
                        borderRadius: "10px",
                        objectFit: "cover",
                        maxWidth: "400px"
                      }}
                    />
                    <div style={{ flex: "2 1 300px" }}>
                      <h5 style={{ color: "#4da3ff", fontWeight: "bold" }}>
                        Loshe's Surf Teaching Style & Expertise
                      </h5>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "#555",
                          whiteSpace: "pre-line",
                          marginTop: "10px"
                        }}
                      >
                        {member.teachingStyle}
                      </p>
                    </div>
                  </div>

                  {/* Accreditation Section */}
                  <div
                    style={{
                      background: "#f0faff",
                      padding: "15px",
                      borderRadius: "10px",
                      marginBottom: "15px",
                      borderLeft: "5px solid #4da3ff",
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "20px"
                    }}
                  >
                    <img
                      src={accreditationImg}
                      alt="Evans Abban ISA Certification"
                      style={{
                        flex: "1 1 250px",
                        borderRadius: "10px",
                        objectFit: "cover",
                        maxWidth: "400px"
                      }}
                    />
                    <div style={{ flex: "2 1 300px" }}>
                      <h5 style={{ color: "#4da3ff", fontWeight: "bold" }}>
                        Professional Accreditation
                      </h5>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "#555",
                          whiteSpace: "pre-line",
                          marginTop: "10px"
                        }}
                      >
                        {member.accreditation}
                      </p>
                    </div>
                  </div>

                  {/* Book button */}
                  <button
                    style={{
                      backgroundColor: "#4da3ff",
                      color: "#fff",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "bold"
                    }}
                  >
                    Book a Session with Me →
                  </button>
                </>
              ) : (
                <>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#555",
                      textAlign: "left",
                      marginBottom: "10px"
                    }}
                  >
                    {member.shortDesc}
                  </p>
                  <button
                    style={{
                      background: "transparent",
                      color: "#4da3ff",
                      border: "1px solid #4da3ff",
                      padding: "5px 12px",
                      borderRadius: "6px",
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                      cursor: "pointer"
                    }}
                    onClick={() => {
                      setShowAll(true);
                      setExpandedMember("Evans Abban");
                    }}
                  >
                    Read More →
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Collapse button */}
        {showAll && (
          <div className="text-center mt-4">
            <button
              onClick={() => {
                setShowAll(false);
                setExpandedMember(null);
              }}
              style={{
                backgroundColor: "#4da3ff",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "0.9rem",
                fontWeight: "bold"
              }}
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
