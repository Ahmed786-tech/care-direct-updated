"use client";
import { ibmPlexSans, poppins, heebo } from "@/app/font";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Badge from "@/components/Badge";
import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "../../components/AboutSection";
import WhatWeProvideServices from "../../components/WhatWeProvideServices";
import WhyTheyChoose from "../../components/WhyTheyChoose";
import GettingStartedinServices from "../../components/GettingStartedinServices";
import Faqs from "../../components/Faqs";

export default function page() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const services = [
    {
      title: "Care Homes",
      description: "Full-time and relief staffing for care homes",
      image: "/Images/Card-img10.png",
    },
    {
      title: "Assistance",
      description: "Medication administration and mobility assistance",
      image: "/Images/Card-img12.png",
    },
    {
      title: "Daily Routine",
      description: "Dementia, mental health, and palliative care experience",
      image: "/Images/Card-img13.png",
    },
    {
      title: "Personal",
      description: "Personal hygiene and nutritional support",
      image: "/Images/Card-img14.png",
    },
    {
      title: "Personal",
      description: "Personal hygiene and nutritional support",
      image: "/Images/Card-img14.png",
    },
  ];
  const faqs = [
    {
      question: "What types of care services do you offer?",
      answer:
        "We provide a wide range of care services, including in-home care for elderly individuals, live-in carers, respite care, dementia care, palliative care, and more. We also supply staff to care homes, nursing homes, and residential care facilities.",
    },
    {
      question: "How do I know if a carer is right for my needs?",
      answer:
        "We carefully match carers to your specific needs, preferences, and personality. We also offer a trial period and regular check-ins to ensure satisfaction.",
    },
    {
      question: "Can I request a carer for a specific schedule or shift?",
      answer:
        "Yes, we offer flexible scheduling and work with you to accommodate specific days, times, and routines that suit your lifestyle.",
    },
    {
      question: "What qualifications do your carers have?",
      answer:
        "All our carers are fully vetted, DBS-checked, and trained to meet professional care standards. Many hold NVQ qualifications or equivalent experience.",
    },
    {
      question: "How do you ensure the quality of care?",
      answer:
        "We regularly supervise carers, obtain feedback from clients, and follow CQC guidance. Our recruitment and training processes ensure consistent quality.",
    },
    {
      question: "Can I change my carer if needed?",
      answer:
        "Yes, your satisfaction is our priority. If you wish to change your carer for any reason, we will promptly arrange a suitable replacement.",
    },
  ];
  const centerContent = {
    labelText:
      "Our step-by-step process ensures families can access residential care with ease:",
    image: "/Images/Middle-card.png",
    imageAlt: "Nurses",
  };
  const stepsData = [
    {
      number: "01",
      icon: "/Icons/Residential-1.svg",
      description: "We assess your service and understand staffing pressures",
    },
    {
      number: "02",
      icon: "/Icons/Residential-2.svg",
      description: "We shortlist candidates suited to your needs and culture",
    },
    {
      number: "03",
      icon: "/Icons/Residential-3.svg",
      description: "Our staff are briefed and supported before arrival",
    },
    {
      number: "04",
      icon: "/Icons/Residential-4.svg",
      description: "We continue to monitor performance and adapt as needed",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <HeroSection
        badgeText="Trusted Care Solutions Since 2013"
        badgeIcon="\Images\healthcare-covid19-coronavirus-hand-hearth.svg"
        NavyBlueHeading="Residential"
        subHeading="Care"
        description="Round-the-Clock Support, Delivered with Dignity."
        primaryButtonText="Find a Caregiver"
        primaryButtonLink="/career"
        secondaryButtonText="Staff Your Facility"
        secondaryButtonLink="/career"
        heroImage="/Images/residential-hero.png"
        heroImageAlt="Caregiver with patient"
      />
      <AboutSection
        badgeText="Residential Care"
        badgeIcon="/Images/Residential.svg"
        NavyBlueHeading="What"
        subHeading="We Do"
        image="/Images/Left-img13.png"
        description={false}
        description1="Our Residential Care service supports care homes and nursing facilities with highly trained professionals who deliver safe, consistent, and compassionate care. We provide qualified, DBS-cleared, and RGN and RMN-ready staff who integrate smoothly with your existing team — helping your service stay compliant and confidently staffed."
        description2="Whether you need short-term relief or long-term placement, we make sure every shift is filled by someone who's not just prepared, but the right fit."
        isAboutUsPage={false}
      />
      <WhatWeProvideServices
        badgeText="Workers"
        badgeIcon="/Images/Workers.svg"
        services={services}
        title="What We Provide"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
      <div className="absolute right-0  transform   -translate-y-1/2 pointer-events-none ">
        <div
          className="w-[200px] h-[300px] sm:w-[250px] sm:h-[350px] md:w-[846px] md:h-[846px] opacity-100 z-0"
          style={{
            backgroundImage: 'url("/images/Oval.svg?height=400&width=400")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            marginRight: "-300px",
            transform: "scaleX(-1)", // Pulls it slightly to the right edge
          }}
        />
      </div>
      <WhyTheyChoose
        badgeText="Choose Us"
        badgeIcon="/Images/Care.svg"
        navyBlueHeading="Why Providers"
        subHeading="Choose Us"
        image="/Images/Care-h.png"
        buttonText="Start Your Journey With Us"
        items={[
          {
            id: 1,
            description: "All staff are CQC-compliant and trained to NHS",
            icon: "/Images/Icon-9.svg",
          },
          {
            id: 2,
            description: "We mastandards RGN and RMN-qualified nurses available where neededtch carers by values and skills, not just availability",
            icon: "/Images/Icon-10.svg",
          },
          {
            id: 3,
            description: "Rotas built for consistency — not gaps",
            icon: "/Images/Icon-11.svg",
          },
          {
            id: 4,
            description: "Face-to-face onboarding and regular supervision",
            icon: "/Images/Icon-12.svg",
          },
          {
            id: 5,
            description: "Fast fulfilment with long-term reliability",
            icon: "/Images/Icon-11.svg",
          },
        ]}
      />
      <GettingStartedinServices
        badgeText="Get Started"
        badgeIcon="/Images/Starting.svg"
        buttonText="Contact Us"
        buttonLink="/contact"
        navyBlueHeading="How It"
        subHeading="Works"
        centerContent={centerContent}
        stepsData={stepsData}
      />
      <Faqs
        badgeText="FAQ's"
        badgeIcon="/Images/sec.svg"
        buttonText="Subscribe"
        buttonLink="/contact"
        navyBlueHeading="Learn About Us"
        subHeading="From The FAQ!"
        descriptionText="The following are some of the most frequently asked questions and doubts. This FAQ will provide you with a better understanding of our services and the scope of our service."
        image="/Images/staffing-faq.png"
        faqs={faqs}
      />

      <Footer />
    </div>
  );
}
