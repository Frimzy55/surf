import { motion } from "framer-motion";
import React from "react";

export default function SurfHeading() {
  return (
    <div className="text-center">
      {/* Main Heading - Neon Glow + Float */}
      <motion.h1
        className="fw-bold"
        style={{
          textShadow: "0 0 10px #00e5ff, 0 0 20px #00e5ff, 0 0 40px #00e5ff",
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: [1, 1.05, 1],
          y: [0, -8, 0, 8, 0], // smooth wave float
          opacity: 1,
          color: ["#00e5ff", "#ffea00", "#ff007f", "#00e5ff"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        Learn to Surf
      </motion.h1>

      {/* Sub Heading - Static text */}
      <h1
        className="fw-bold"
        style={{
          textShadow: "0 0 5px #00aeffff, 0 0 15px #39c3e6ff, 0 0 30px #24a3f8ff",
          color: "#fff",
        }}
      >
        Loshe's Surf School, Camp and Tours
      </h1>
    </div>
  );
}
