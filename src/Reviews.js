import React, { useState, useEffect } from "react";

const reviews = [
  {
    name: "Ama Boateng",
    rating: 5,
    text: "Great surf school! Friendly instructors and amazing experience.",
  },
  {
    name: "Kwame Mensah",
    rating: 4,
    text: "Good location and helpful staff. Highly recommend!",
  },
  {
    name: "Abena Owusu",
    rating: 5,
    text: "Loved the tours and camps. Perfect for beginners.",
  },
  {
    name: "Yaw Appiah",
    rating: 4,
    text: "Wonderful experience, very professional and welcoming.",
  },
  {
    name: "Esi Adjei",
    rating: 5,
    text: "The best surf lessons I've ever had! Highly recommend to everyone.",
  },
  {
    name: "Kojo Asante",
    rating: 3,
    text: "Good place but wish there were more beginner sessions.",
  },
  {
    name: "Akosua Frimpong",
    rating: 5,
    text: "Amazing instructors and beautiful location. I learned a lot!",
  },
  {
    name: "Nana Kofi",
    rating: 4,
    text: "Great staff and facilities. I will definitely come back.",
  },
  {
    name: "Mawuena Dankyi",
    rating: 5,
    text: "Perfect for family trips, very friendly and fun environment.",
  },
  {
    name: "Kwesi Boateng",
    rating: 4,
    text: "Enjoyed every moment here. Staff were very supportive.",
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2>What Our Customers Say</h2>
      <div style={{ fontStyle: "italic", margin: "20px 0" }}>
        “{reviews[current].text}”
      </div>
      <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
        — {reviews[current].name}
      </div>
      <div>{"⭐".repeat(reviews[current].rating)}</div>
    </div>
  );
};

export default Reviews;
