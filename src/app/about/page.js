"use client";
import { useState, useRef, useEffect } from "react";

import { ibmPlexSans, poppins, heebo } from "@/app/font";
import Link from "next/link";
import Badge from "@/components/Badge";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Image from "next/image";
import { ArrowRight, Bold } from "lucide-react";
import React from "react";
import OurTeam from "@/components/OurTeam";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PrimaryButton from "@/components/PrimaryButton";
// import OrbitAnimation from "@/components/OrbitAnimation";

import { color } from "framer-motion";

export default function about() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const cardData = [
    {
      id: 1,
      title: "Integrity",
      description: "We do what’s right, even when it’s not easy",
      icon: "/Images/Icon-8.svg",
    },
    {
      id: 2,
      title: "Quality",
      description: "We exceed expectations, not just meet them",
      icon: "/Images/Icon-8.svg",
    },
    {
      id: 3,
      title: "Reliability",
      description: "We show up, deliver, and support",
      icon: "/Images/Icon-8.svg",
    },
    {
      id: 4,
      title: "Compliance",
      description: "NHS-aligned, CQC-compliant, ethically driven",
      icon: "/Images/Icon-8.svg",
    },
  ];
  return (

    <div className="bg-white w-full">
      {/* <div className="w-full lg:w-1/2 h-[1140px] flex justify-center items-center">
        <div className="flex items-center justify-center w-full h-full">
          {isMobile ? (
            <div className="w-full h-full">
              <img
                src="/Images/staticOrbitImage.png"
                alt="Homepage Image"
                className="w-full h-[300px] object-contain"
              />
            </div>
          ) : (
            <div>
              <OrbitAnimation />
            </div>
          )}
        </div>
      </div> */}
      <Navbar />
      <HeroSection
        badgeText="Trusted Care Solutions Since 2013"
        badgeTextColor="#5AA678"
        badgeColor="#A8D5BA26"
        badgeIcon="/Images/Care-solution.svg"
        NavyBlueHeading="About"
        subHeading="Us"
        description="We connect families with reliable, qualified caregivers and help care facilities build exceptional teams in south and east of england."
        primaryButtonText="Find a Caregiver"
        primaryButtonLink="/career"
        secondaryButtonText="Staff Your Facility"
        secondaryButtonLink="/career"
        heroImage="/Images/about-hero.png"
        heroImageAlt="Caregiver with patient"
      />
      <AboutSection
        badgeText="About us"
        badgeTextColor="#A8D5BA"
        badgeColor="#A8D5BA26"
        badgeIcon="/Images/About.svg"
        NavyBlueHeading="About"
        image="/Images/Left-img7.png"
        subHeading="Us?"
        description="Committed to Care. Built on Experience."
        description1="Care Direct Recruitment was founded with a clear mission: to support and strengthen the British healthcare workforce. With years of combined experience across our team — from senior managers to frontline carers — we’ve built an agency rooted in trust, accountability, and service."
        description2="Our focus is practical and people-first. We provide healthcare providers with dependable, RGN and RMN-qualified nurses and trained care workers who reflect the values that make British care exceptional: consistency, compassion, and professionalism."
        isAboutUsPage={true}
        cardData={cardData}
      />
      <section className="w-full bg-white p-4 sm:p-5 lg:p-6 ">
        <div
          className="container relative z-10 mx-auto px-4 min-h-[200px] sm:min-h-[250px] md:min-h-[280px] lg:h-[311.51px] my-6 sm:my-8 lg:my-10 rounded-[15px] py-6 sm:py-8 lg:py-10 text-white text-center"
          style={{
            backgroundImage: "url('/Images/Background-4.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2
            className={`${ibmPlexSans.className} text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold mb-3 sm:mb-4 mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[50px]`}
          >
            Why We Exist
          </h2>
          <p
            className={`${poppins.className} w-full sm:w-[90%] md:w-[80%] lg:w-[895px] mx-auto text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed text-white font-500s px-4 sm:px-6`}
          >
            We understand the pressures care providers face and the vital
            importance of having the right people in the right roles. Whether
            you're running a care home or looking after a loved one, we're here
            to ensure care is delivered with the highest standards.
          </p>
        </div>
      </section>
      <div className="hidden md:block absolute right-0 -top-28- transform -translate-y-1/2 z-0">
        <div className="w-[200px] h-[300px] sm:w-[250px] sm:h-[350px] md:w-[500px] md:h-[600px] relative mr-[-150px]   ">
          <Image
            src="/Images/Oval.svg"
            alt="Decorative oval"
            fill
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
              transform: "scaleX(-1)",
            }}
            priority={false}
          />
        </div>
      </div>

      <section className=" bg-white flex flex-col justify-start px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Left Text Section */}
          <div className="w-full flex flex-col py-6 sm:py-8 lg:py-12 justify-center mt-4 sm:mt-5 lg:mt-7">
            <div className="flex items-center gap-2 py-1 rounded-full mb-3 sm:mb-4">
              <Badge text="Choose us"
                textColor="#A8D5BA"
                badgeColor="#A8D5BA26" iconSrc="/Images/Choose-us.svg" />
            </div>
            <h1
              className={`${ibmPlexSans.className} text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold text-[#084B92] mb-2 leading-snug`}
            >
              A Growing <span className="text-[#03A9F4]"> Mission</span>
            </h1>
            <p
              className={`${poppins.className} text-sm sm:text-base lg:text-[18px] font-400 text-[#03A9F4] mb-2 leading-snug`}
            >
              Care Direct Recruitment — where care meets commitment.
            </p>
            <p
              className={`${poppins.className} text-[#888888] text-sm sm:text-base lg:text-[18px] mb-4 sm:mb-5 lg:mb-6 font-400 leading-relaxed sm:leading-[28px]`}
            >
              We're proud to serve communities across South East & East of
              England — and we're preparing to extend our reach to Ireland and
              Germany. As our team grows, our purpose remains the same: to
              deliver outstanding care through professional, properly supported
              people.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <PrimaryButton text="Contact Us" link="/contact" />
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full flex justify-center md:justify-end items-end mt-6 md:mt-0">
            <Image
              src="/Images/Right-img6.png"
              alt="Caregiver with patient"
              width={750}
              height={510.61}
              className="z-10 w-full max-w-[500px] md:max-w-none h-auto object-contain"
            />
          </div>
        </div>
      </section>
      <OurTeam className='my-10' />
      <Footer />
    </div>
  );
}
