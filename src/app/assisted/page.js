"use client";
import { ibmPlexSans, poppins, heebo } from "@/app/font";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatWeProvideServices from "@/components/WhatWeProvideServices";
import WhyTheyChoose from "../../components/WhyTheyChoose";
import GettingStartedinServices from "@/components/GettingStartedinServices";
import Faqs from "@/components/Faqs";

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
      title: "Support",
      description: "Support with personal care and hygiene",
      image: "/Images/Card-img10.png",
    },
    {
      title: "Assistance",
      description: "Medication reminders and mobility assistance",
      image: "/Images/Card-img12.png",
    },
    {
      title: "Daily Routine",
      description: "Meal preparation and daily routines",
      image: "/Images/Card-img13.png",
    },
    {
      title: "Emotional Support",
      description: "Companionship and emotional support",
      image: "/Images/Card-img14.png",
    },

  ];
  const cardData = [
    {
      id: 1,
      description: "Care is built around the person — not the schedule",
      icon: "/Images/Icon-9.svg",
    },
    {
      id: 2,
      description:
        "We match carers by values and skills, not just availability",
      icon: "/Images/Icon-10.svg",
    },
    {
      id: 3,
      description:
        "RGN and RMN-qualified professionals where clinical input is required.",
      icon: "/Images/Icon-11.svg",
    },
    // {
    //   id: 4,
    //   description: "Open communication with families and case managers.",
    //   icon: "/Icons/medical-team-2.svg",
    // },
    {
      id: 4,
      description: "Fully aligned with CQC standards and NHS guidance",
      icon: "/Images/Icon-12.svg",
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
    labelText: "Simple steps to arrange assisted living services",
    image: "/Images/Middle-card.png",
    imageAlt: "Nurses",
  };
  const stepsData = [
    {
      number: "01",
      icon: "/Images/Icon-13.svg",
      description: "We Speak With You To Understand Needs And Routines",
    },
    {
      number: "02",
      icon: "/Images/Icon-14.svg",
      description:
        "You're Matched With A Carer Who Suits Your Family's Preference",
    },
    {
      number: "03",
      icon: "/Images/Icon-15.svg",
      description: "A Bespoke Care Plan Is Created And Agreed Upon",
    },
    {
      number: "04",
      icon: "/Images/Icon-16.svg",
      description: "Care Begins With Regular Reviews And Open Dialogue",
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
        badgeTextColor="#7FB996"
        badgeColor="#A8D5BA26"
        badgeIcon="/Images/Care-solution.svg"
        NavyBlueHeading="Domiciliary"
        subHeading="Care"
        description="Support at Home, Delivered with Respect."
        primaryButtonText="Find a Caregiver"
        primaryButtonLink="/career"
        secondaryButtonText="Staff Your Facility"
        secondaryButtonLink="/career"
        heroImage="/Images/assisted-hero.png"
        heroImageAlt="Caregiver with patient"
      />
      <AboutSection
        badgeText="Domiciliary Care"
        badgeTextColor="#A8D5BA"
        badgeColor="#A8D5BA26"
        badgeIcon="/Images/Assisted-li.svg"
        NavyBlueHeading="What"
        subHeading="We Do"
        image="/Images/Left-img11.png"
        description={false}
        description1="Our Domiciliary Care services help individuals maintain independence while receiving the care and support they need at home. Whether short-term or ongoing, our service is designed around real lives, practical needs, and consistent delivery."
        description2="We work closely with families and healthcare teams to build tailored care plans that adapt as needs evolve. From daily routines to complex support, every service is delivered by carers who are DBS-checked, professionally trained, and committed to doing things properly."
        isAboutUsPage={false}
        cardData={cardData}
      />

      <WhatWeProvideServices
        badgeText="Workers"
        badgeTextColor="#FFFFFF"
        badgeColor="#A8D5BA26"
        badgeIcon="/Images/Workers.svg"
        services={services}
        title="What We Provide"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
      <div className="hidden md:block absolute right-0 -top-28- transform -translate-y-1/5 z-0">
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
      <WhyTheyChoose
        badgeText="Choose Us"
        badgeTextColor="#A8D5BA"
        badgeColor="#A8D5BA26"
        badgeIcon="/Images/Care.svg"
        navyBlueHeading="Why Families Choose"
        subHeading="Care Direct"
        image="/Images/Right-img11.png"
        items={cardData}
        showButton={false}
      />
      <GettingStartedinServices
        badgeText="Get Started"
        badgeTextColor="#A8D5BA"
        badgeColor="#A8D5BA26"
        badgeIcon="/Images/Starting.svg"
        buttonText="Contact Us"
        buttonLink="/contact"
        navyBlueHeading="Getting Started"
        subHeading="Is Easy"
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
