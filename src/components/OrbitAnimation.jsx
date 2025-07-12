import React, { useEffect, useRef, useState } from "react";

const OrbitAnimation = () => {
  const [scrollAngle, setScrollAngle] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = (window.scrollY || window.pageYOffset) * 0.1;
      setScrollAngle(scrollY % 360);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const orbitConfig = [
    {
      radius: 250,
      icons: [
        {
          src: "/Icons/home.svg",
          angle: -25,
          size: { width: 200, height: 200 },
          position: { x: 120, y: 100 },
        },
        {
          src: "/Icons/people.svg",
          angle: 200,
          size: { width: 200, height: 200 },
          position: { x: -420, y: -250 },
        },
        {
          src: "/Icons/heartbeat.svg",
          angle: 170,
          size: { width: 200, height: 200 },
          position: { x: 230, y: -500 },
        },
        {
          src: "/Icons/stethoscope.svg",
          angle: 270,
          size: { width: 200, height: 200 },
          position: { x: -100, y: -300 },
        },
      ],
    },
    {
      radius: 320,
      icons: [
        {
          src: "/Icons/signals.svg",
          angle: 30,
          size: { width: 200, height: 200 },
          position: { x: 350, y: 300 },
        },
        {
          src: "/Icons/heart.svg",
          angle: 0,
          size: { width: 200, height: 200 },
          position: { x: -100, y: 470 },
        },
        {
          src: "/Icons/beaker.svg",
          angle: 240,
          size: { width: 200, height: 200 },
          position: { x: -100, y: -100 },
        },
      ],
    },
  ];

  return (
    <div className="relative w-[400px] h-[400px] mx-auto">
      {/* Central Image */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 z-10">
        <img
          src="/Images/7reasontoworkwithus.png"
          alt="Caregiver with elderly"
          className="w-full h-full object-contain rounded-full"
        />
      </div>
      {/* Orbit Rings */}
      {orbitConfig.map((orbit, idx) => (
        <div
          key={`ring-${idx}`}
          className="absolute rounded-full border border-gray-200"
          style={{
            width: `${orbit.radius * 2}px`,
            height: `${orbit.radius * 2}px`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      {/* Orbiting Icons */}
      {orbitConfig.map((orbit, orbitIdx) => (
        <div
          key={`orbit-${orbitIdx}`}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            transform: `rotate(${scrollAngle}deg)`,
          }}
        >
          {orbit.icons.map((icon, iconIdx) => (
            <div
              key={`icon-${orbitIdx}-${iconIdx}`}
              className="absolute top-1/2 left-1/2"
              style={{
                width: icon.size?.width || 32,
                height: icon.size?.height || 32,
                transform: `\n                  rotate(${icon.angle}deg) \n                  translateY(-${orbit.radius}px)\n                  translate(${icon.position.x}px, ${icon.position.y}px)\n                `,
                transformOrigin: `0 -${orbit.radius}px`,
              }}
            >
              <img
                src={icon.src}
                alt={`orbit-icon-${iconIdx}`}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrbitAnimation;
