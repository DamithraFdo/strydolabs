'use client'
import React, { useEffect } from "react";

const SnowEffect: React.FC = () => {
  useEffect(() => {
    const createSnowFlake = () => {
      const snowFlake = document.createElement("div");
      snowFlake.className = "snowflake";
      snowFlake.style.left = `${Math.random() * 100}vw`;
      snowFlake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Between 2s and 5s, Damithra Edit here
      snowFlake.style.opacity = Math.random().toString();
      snowFlake.style.fontSize = `${Math.random() * 10 + 10}px`; // Between 10px and 20px

      snowFlake.innerText = "❄️";
      document.body.appendChild(snowFlake);

      setTimeout(() => {
        snowFlake.remove();
      }, 5000);
    };

    const interval = setInterval(createSnowFlake, 50);
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default SnowEffect;
