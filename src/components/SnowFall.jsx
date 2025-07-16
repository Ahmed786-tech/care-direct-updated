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
  const [isVisible, setIsVisible] = useState(true);
  const scrollTimeout = useRef(null);
  const animationsRef = useRef([]);
  const activeFlakes = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    if (!isVisible) {
      return null;
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

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

  const createFlake = () => {
    const container = containerRef.current;
    if (!container) return;

    const flake = document.createElement("div");
    const iconSrc = ICONS[Math.floor(Math.random() * ICONS.length)];

    // Style & size
    flake.style.position = "absolute";
    flake.style.left = `${randomBetween(0, 100)}vw`;
    flake.style.top = `${randomBetween(-100, -10)}px`; // Start well above screen
    flake.style.opacity = "0.5";
    flake.style.pointerEvents = "none";
    flake.style.zIndex = "9999";
    const size = randomBetween(24, 40);
    flake.style.width = flake.style.height = `${size}px`;

    // Render the SVG image
    flake.innerHTML = `<img src="${iconSrc}" alt="" style="width:100%;height:100%;display:block;" />`;

    // Random movement parameters
    const driftX = randomBetween(-40, 40);
    const driftY = window.innerHeight + 200; // Fall below screen
    const swayAmplitude = randomBetween(10, 40);
    const fallDuration = randomBetween(7000, 12000);

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
      iterations: 1, // Only run once per flake
      easing: "ease-in-out",
    });

    // Store references
    animationsRef.current.push(animation);
    activeFlakes.current.push(flake);

    // Remove flake when animation finishes
    animation.addEventListener("finish", () => {
      if (flake.parentNode) {
        flake.remove();
      }
      // Clean up references
      const flakeIndex = activeFlakes.current.indexOf(flake);
      if (flakeIndex > -1) {
        activeFlakes.current.splice(flakeIndex, 1);
      }
      const animIndex = animationsRef.current.indexOf(animation);
      if (animIndex > -1) {
        animationsRef.current.splice(animIndex, 1);
      }
    });

    container.appendChild(flake);
  };

  useEffect(() => {
    // Create initial flakes
    for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
      setTimeout(() => createFlake(), randomBetween(0, 4000));
    }

    // Stop animation after 5 seconds
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);

      // Cancel all animations
      animationsRef.current.forEach((animation) => {
        if (animation) {
          animation.cancel();
        }
      });

      // Remove all DOM elements
      activeFlakes.current.forEach((flake) => {
        if (flake.parentNode) {
          flake.remove();
        }
      });

      // Clear references
      animationsRef.current = [];
      activeFlakes.current = [];
    }, 15000); // Hide after 15 seconds

    // Cleanup on unmount
    return () => {
      clearTimeout(hideTimeout);

      // Cancel all animations
      animationsRef.current.forEach((animation) => {
        if (animation) {
          animation.cancel();
        }
      });

      // Remove DOM elements
      activeFlakes.current.forEach((flake) => {
        if (flake.parentNode) {
          flake.remove();
        }
      });

      // Clear references
      animationsRef.current = [];
      activeFlakes.current = [];
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
