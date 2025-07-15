"use client";
import React, { useEffect, useRef, useState } from "react";

const SNOWFLAKE_COUNT = 10;
const ICONS = ["/Icons/sun.svg", "/Icons/umbrella.svg"];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

const FallingIcons = () => {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);
  const animationsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolling state to true immediately
      setIsScrolling(true);

      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set timeout to resume animation after scrolling stops
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // Resume animation 150ms after scrolling stops
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  // Effect to pause/resume animations based on scroll state
  useEffect(() => {
    animationsRef.current.forEach((animation) => {
      if (animation && animation.playState !== "finished") {
        if (isScrolling) {
          animation.pause();
        } else {
          animation.play();
        }
      }
    });
  }, [isScrolling]);

  useEffect(() => {
    const flakes = [];
    const animations = [];
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

      // Create animation
      const animation = flake.animate(combinedKeyframes, {
        duration: fallDuration,
        delay: randomBetween(0, 4000),
        iterations: Infinity,
        easing: "ease-in-out",
      });

      // Store animation reference
      animations.push(animation);

      container.appendChild(flake);
      flakes.push(flake);
    }

    // Store animations in ref for pause/resume control
    animationsRef.current = animations;

    // Cleanup on unmount
    return () => {
      // Cancel all animations
      animations.forEach((animation) => {
        if (animation) {
          animation.cancel();
        }
      });
      // Remove DOM elements
      flakes.forEach((f) => f.remove());
      // Clear animations ref
      animationsRef.current = [];
    };
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
