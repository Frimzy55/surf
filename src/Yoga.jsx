// Yoga.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Yoga.css";

// Local images
import yoga1 from "./assets/yoga1.jpeg";
import yoga2 from "./assets/yoga2.jpeg";
import yoga3 from "./assets/yoga3.jpeg";
import yog from "./assets/yog.jpeg";
import yoga from "./assets/yoga.jpeg";
import yoga11 from "./assets/yoga11.jpeg";
//import natural from "./assets/natural.jpeg";

export default function Yoga() {
  const navigate = useNavigate();

  // All yoga images (local + online)
  const allImages = [
    
    yoga11,
    yog,
    yoga1,
    yoga2,
    yoga3,
    yoga
    
  ];

  const [images, setImages] = useState(allImages);
  const [fadeIndex, setFadeIndex] = useState(null); // Which image is fading
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random index to change
      const randomIndex = Math.floor(Math.random() * images.length);
      setFadeIndex(randomIndex); // Start fade-out

      // After fade-out, change the image
      setTimeout(() => {
        const newImage =
          allImages[Math.floor(Math.random() * allImages.length)];
        setImages((prev) =>
          prev.map((img, idx) => (idx === randomIndex ? newImage : img))
        );
        setFadeIndex(null); // Start fade-in
      }, 500); // Match fade-out time
    }, 1000);

    return () => clearInterval(interval);
  }, );

  return (
    <section id="yoga" className="yoga-section">
      <div className="container text-center">
        <h2 className="yoga-title">Yoga by the Beach</h2>
        <p className="yoga-description">
          Experience the perfect harmony of body, mind, and ocean. Our beach
          yoga sessions combine gentle stretches, deep breathing, and the
          calming sound of waves — perfect for surfers and non-surfers alike.
        </p>

        <div className="yoga-images">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Yoga ${i + 1}`}
              onClick={() => setLightboxImage(src)}
              className={fadeIndex === i ? "fade-out" : "fade-in"}
            />
          ))}
        </div>

        <button className="btn btn-warning mt-4">Book a Yoga Session</button>

        <button
          className="btn btn-outline-dark mt-3 ms-2"
          onClick={() => navigate("/yoga-with-serap")}
        >
          Yoga with Serap
        </button>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Yoga large" />
        </div>
      )}
    </section>
  );
}
