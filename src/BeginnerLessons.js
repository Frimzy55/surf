import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function BeginnerLessons() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="container my-5" data-aos="fade-up">
      <h2 className="fw-bold mb-3 text-center">
        What Do The Beginner / Group Surf Lessons Consist Of?
      </h2>
      <div
        className="card shadow-sm border-0 p-4"
        style={{
          borderRadius: "15px",
          background: "linear-gradient(135deg, #d4f1f9, #a7d8f0)", // Light blue gradient
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
        <p>
          During the session, we'll break down the steps to learning to surf, making it as simple and enjoyable as possible.
          Our experienced instructors will begin on the beach, covering the essentials like surf safety, understanding your board, catching waves,
          and mastering the 'pop-up'. Once you're ready, we'll get you in the water to ride your first waves! By the end of the lesson,
          you'll have a personalized improvement plan, giving you a clear path to continue building your surfing skills with confidence.
        </p>
        <p>
          With a smaller instructor-to-student ratio, we can provide more one-on-one attention and direct feedback, allowing your surfing skills
          to progress faster than in larger group lessons.
        </p>
        <p>
          Loshe's Surf School is an accredited Surfing Ghana registered school.
          All of our coaches are well-trained and ISA (International Surfing Association) surf certified instructors.
        </p>
      </div>
    </div>
  );
}

export default BeginnerLessons;
