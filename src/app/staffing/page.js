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
import WhyTheyChoose from "../../components/WhyTheyChoose";
import WhatWeProvideServices from "../../components/WhatWeProvideServices";
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
      title: "Staff Placement",
      description: "Temporary and long-term care staff placement",
      image: "/Images/Card-img10.png",
    },
    {
      title: "RGN & RMN",
      description: "RGN and RMN and clinical roles filled quickly and reliably",
      image: "/Images/Card-img12.png",
    },
    {
      title: "Daily Routine",
      description:
        "Dementia, mental health, palliative, and complex needs experience",
      image: "/Images/Card-img13.png",
    },
    {
      title: "Availability",
      description: "24/7 availability for urgent staffing requests",
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
    image: "/Images/MiddleCard-2.png",
    imageAlt: "Nurses",
  };
  const stepsData = [
    {
      number: "01",
      icon: "/Icons/Residential-1.svg",
      description: "Share your staffing needs — short or long term",
    },
    {
      number: "02",
      icon: "/Icons/Residential-2.svg",
      description: "We send hand-picked, pre-cleared candidates",
    },
    {
      number: "03",
      icon: "/Icons/Residential-3.svg",
      description: "Carers arrive briefed, uniformed, and ready to support",
    },
    {
      number: "04",
      icon: "/Icons/Residential-4.svg",
      description:
        "You receive follow-up, scheduling support, and quality checks",
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
        badgeTextColor="#5AA678"
        badgeColor="#A8D5BA26"
        badgeIcon="/Images/Care-solution.svg"
        NavyBlueHeading="Staffing"
        subHeading="Solutions"
        description="Bridging the gaps with qualitative workforce."
        primaryButtonText="Find a Caregiver"
        primaryButtonLink="/career"
        secondaryButtonText="Staff Your Facility"
        secondaryButtonLink="/career"
        heroImage="/Images/staffing-hero.png"
        heroImageAlt="Caregiver with patient"
      />
      <AboutSection
        badgeText="Staffing Solutions"
        badgeTextColor="#A8D5BA"
        badgeColor="#A8D5BA26"
        badgeIcon="/Images/Residential.svg"
        NavyBlueHeading="What"
        subHeading="We Do"
        image="/Images/Care-2.png"
        description={false}
        description1="Our staffing services help care homes, supported living environments, and community healthcare providers stay fully staffed and compliant — without the last-minute stress. We specialise in placing RGN and RMN-qualified nurses, experienced carers, and support workers who are trained, DBS-checked, and ready to integrate seamlessly."
        description2="We understand the operational pressures you face, and our process is built to relieve them — not add to them."
        isAboutUsPage={false}
      />
      <WhatWeProvideServices
        badgeText="Workers"
        badgeTextColor="#FFFFFF"
        badgeColor="#A8D5BA26"
        badgeIcon="/Images/Workers.svg"
        services={services}
        title="What We Offer"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
      <WhyTheyChoose

        badgeText="Care"
        badgeTextColor="#A8D5BA"
        badgeColor="#A8D5BA26"

        badgeIcon="/Images/Care.svg"
        navyBlueHeading="What Sets"
        subHeading="Us Apart"
        image="/Images/Alt.png"
        buttonText="Nursing and other professionals"
        items={[
          {
            id: 1,
            description: "NHS ethical recruiter and REC member",
            icon: "/Images/Icon-9.svg",
          },
          {
            id: 2,
            description:
              "Staff trained in safeguarding, clinical protocols, and CQC frameworks",
            icon: "/Images/Icon-10.svg",
          },
          {
            id: 3,
            description:
              "Matching based on skills, culture, and communication style",
            icon: "/Images/Icon-11.svg",
          },
          {
            id: 4,
            description: "Ongoing support and performance monitoring",
            icon: "/Images/Icon-12.svg",
          },
          {
            id: 5,
            description: "No last-minute surprises — just Reliable Coverage",
            icon: "/Images/Icon-11.svg",
          },
        ]}
      />

      <GettingStartedinServices

        badgeText="Starting"
        badgeTextColor="#A8D5BA"
        badgeColor="#A8D5BA26"
        badgeIcon="/Images/Starting.svg"
        buttonText="Contact Us"
        buttonLink="/contact"
        navyBlueHeading="Our"
        subHeading="Process"
        centerContent={centerContent}
        stepsData={stepsData}
      />
      <Faqs
        badgeText="FAQ's"
        badgeTextColor="#A8D5BA"
        badgeColor="#A8D5BA26"
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
