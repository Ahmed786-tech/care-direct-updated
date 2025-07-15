"use client";
import React, { useEffect, useRef } from "react";

const SNOWFLAKE_COUNT = 10;
const ICONS = ["/Icons/sun.svg", "/Icons/umbrella.svg"];

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const FallingIcons: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const flakes: HTMLDivElement[] = [];
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
      const flake = document.createElement("div");
      const iconSrc = ICONS[Math.floor(Math.random() * ICONS.length)];

      // Style & size
      flake.style.position = "absolute";
      flake.style.left = `${randomBetween(0, 100)}vw`;
      flake.style.top = `${randomBetween(-10, 0)}vh`;
      flake.style.opacity = "0.5"; // 50% transparent
      flake.style.pointerEvents = "none";
      flake.style.zIndex = "9999";
      const size = randomBetween(24, 40);
      flake.style.width = flake.style.height = `${size}px`;

      // Render the SVG image
      flake.innerHTML = `<img src="${iconSrc}" alt="" style="width:100%;height:100%;display:block;" />`;

      // Random movement parameters
      const driftX = randomBetween(-40, 40); // px left/right
      const driftY = window.innerHeight + size + randomBetween(0, 100); // px down
      const swayAmplitude = randomBetween(10, 40); // px
      const swayDuration = randomBetween(2000, 4000); // ms
      const fallDuration = randomBetween(7000, 12000); // ms

      // Combined keyframes for falling and swaying
      const combinedKeyframes = [
        {
          transform: `translate(${driftX * 0.0}px, 0px)`,
          opacity: 0.5,
        },
        {
          transform: `translate(${driftX * 0.25 + swayAmplitude}px, ${
            driftY * 0.25
          }px)`,
          opacity: 0.5,
        },
        {
          transform: `translate(${driftX * 0.5 - swayAmplitude}px, ${
            driftY * 0.5
          }px)`,
          opacity: 0.5,
        },
        {
          transform: `translate(${driftX * 0.75 + swayAmplitude}px, ${
            driftY * 0.75
          }px)`,
          opacity: 0.5,
        },
        {
          transform: `translate(${driftX}px, ${driftY}px)`,
          opacity: 0.5,
        },
      ];

      // Animate with combined falling and swaying movement
      flake.animate(combinedKeyframes, {
        duration: fallDuration,
        delay: randomBetween(0, 4000),
        iterations: Infinity,
        easing: "ease-in-out",
      });

      container.appendChild(flake);
      flakes.push(flake);
    }

    // Cleanup on unmount
    return () => flakes.forEach((f) => f.remove());
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
      aria-hidden="true"
    />
  );
};

export default FallingIcons;
