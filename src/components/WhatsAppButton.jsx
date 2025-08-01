// WhatsAppButton.jsx
import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "+918055365757"; // Replace with your WhatsApp number
  const message = "Hi! I visited your website and would like to know more.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;
