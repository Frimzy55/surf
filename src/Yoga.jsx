// Yoga.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Yoga.css";

// Import images from your local assets folder
import yoga1 from "./assets/yoga1.jpeg";
import yoga2 from "./assets/yoga2.jpeg";
import yoga3 from "./assets/yoga3.jpeg";

export default function Yoga() {
  const navigate = useNavigate();

  const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    yoga1,
    yoga2,
    yoga3
  ];

  return (
    <section id="yoga" className="yoga-section">
      <div className="container text-center">
        <h2 className="yoga-title">Yoga by the Beach</h2>
        <p className="yoga-description">
          Experience the perfect harmony of body, mind, and ocean. Our beach yoga
          sessions combine gentle stretches, deep breathing, and the calming
          sound of waves — perfect for surfers and non-surfers alike.
        </p>

        <div className="yoga-images">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Yoga ${i + 1}`} style={{ "--i": i }} />
          ))}
        </div>

        {/* Primary booking button */}
        <button className="btn btn-warning mt-4">
          Book a Yoga Session
        </button>

        {/* Secondary "Yoga with Serap" button */}
        <button
  className="btn btn-outline-dark mt-3 ms-2"
  onClick={() => navigate("/yoga-with-serap")}
>
  Yoga with Serap
</button>
      </div>
    </section>
  );
}
