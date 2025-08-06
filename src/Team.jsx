import React from "react";
import { useNavigate } from "react-router-dom";

// ✅ Import your images
import evansImg from "./assets/evans.jpeg";
import maryImg from "./assets/member1.jpeg";
import johnImg from "./assets/member2.jpeg";

export default function Team() {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Evans Abban",
      role: "Head Surf Instructor",
      img: evansImg,
      shortDesc: "Over 10 years of surfing experience...",
      link: "/bio/evans",
    },
    {
      name: "Emmanuel Armstrong",
      role: "Yoga & Wellness Coach",
      img: maryImg,
      shortDesc: "Certified yoga instructor with 8+ years...",
      link: "/bio/mary",
    },
    {
      name: "Samuel Armanfo",
      role: "Surf Equipment Manager",
      img: johnImg,
      shortDesc: "Ensures high-quality surfboards...",
      link: "/bio/john",
    },
  ];

  return (
    <section
    id="team"
     style={{ padding: "80px 20px" }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-5" style={{ color: "#4da3ff" }}>
          Meet Our Team
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {teamMembers.map((member, index) => (
            <div key={index} style={{ background: "#fff", borderRadius: "15px", padding: "20px", textAlign: "center" }}>
              <img
                src={member.img}
                alt={member.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  marginBottom: "15px",
                  border: "3px solid #4da3ff",
                }}
              />
              <h4>{member.name}</h4>
              <p style={{ color: "#4da3ff" }}>{member.role}</p>
              <p>{member.shortDesc}</p>

              <button
                onClick={() => navigate(member.link)}
                style={{
                  backgroundColor: "#4da3ff",
                  color: "#fff",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                View Bio →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
