import React from "react";

const GoogleReviewsEmbed = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>What Our Customers Say</h2>
      <iframe
        title="Google Reviews"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.111042209807!2d-2.0815953!3d4.7507382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe7954730af6f31%3A0x69d235e94b161f0c!2sLoshe%27s%20Surf%20School%2C%20Camp%20and%20Tours!5e0!3m2!1sen!2sgh!4v1754749118384!5m2!1sen!2sgh"
        width="600"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleReviewsEmbed;
