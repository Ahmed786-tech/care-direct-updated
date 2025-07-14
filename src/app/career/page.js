"use client";
import {
  ibmPlexSans,
  poppins,
  heebo,
  andika,
  roboto,
  figtree,
} from "@/app/font";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ArrowRight, CheckCircle, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Badge from "@/components/Badge";
import React from "react";
import HeroSection from "@/components/HeroSection";
import GettingStartedinServices from "@/components/GettingStartedinServices";
import JobsForm from "@/components/JobsForm";
import AboutSection from "../../components/AboutSection";

export default function page() {
  const benefits = [
    "Weekly pay at competitive rates",
    "Free accredited training, including NHS-aligned CPD",
    "Rotas planned weekly",
    "Help with travel or relocation (where applicable)",
    "Professional supervision and ongoing guidance",
    "Career progression routes to senior roles",
    "Be part of a respected, NHS-compliant agency",
  ];
  const jobOpenings = [
    {
      title: "RGN and RMN Nurses (Registered Nursing Members)",
      link: "/jobs",
      details: (
        <div className="border border-[#D4D4D4] bg-white p-8 rounded-[20px]">
          <div className="flex items-center gap-[10px] bg-[#A8D5BA26] h-[37px] px-6 rounded-[20px] w-fit mb-8">
            <p
              className={`${ibmPlexSans.className} text-[#309689] text-[18px] font-medium`}
            >
              Latest Opening
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-100 pb-8">
            <div className="flex items-start gap-6">
              <div className="bg-blue-50 p-3 rounded-xl">
                <img
                  src="/Images/Logo-3.png"
                  alt="Job Icon"
                  className="w-14 h-14"
                />
              </div>
              <div>
                <h3
                  className={`${andika.className} text-[32px] font-bold text-[#03A9F4] mb-2`}
                >
                  RGN and RMN Nurses
                </h3>
                <p
                  className={`${figtree.className} font-bold text-[#7A7878] text-[16px] flex items-center gap-2`}
                >
                  Reports to:{" "}
                  <span className="text-[16px] font-normal text-[#7A7878]">
                    Care Home Manager
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className={`${figtree.className} lg:col-span-2 space-y-8`}>
            <div className="bg-white rounded-xl">
              <h4 className="text-[24px] font-semibold text-[#6F6F6F] mb-4">
                About the Role
              </h4>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Join our team of dedicated nursing professionals providing
                expert care in residential and nursing home settings. This role
                offers the opportunity to utilize your clinical expertise while
                leading and mentoring care teams.
              </p>
            </div>

            <div>
              <h4 className="text-[24px] font-semibold text-[#6F6F6F] mb-4">
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {[
                  "Provide clinical leadership and nursing care",
                  "Manage medication administration",
                  "Develop and monitor care plans",
                  "Supervise and mentor care staff",
                  "Maintain accurate clinical records",
                  "Liaise with healthcare professionals",
                  "Ensure compliance with CQC standards",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <i className="fa-solid fa-check text-[#03A9F4] mt-1"></i>{" "}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Senior Care Workers",
      link: "/jobs",
      details: (
        <div className="border border-[#D4D4D4] bg-white p-8 rounded-[20px]">
          <div className="flex items-center gap-[10px] bg-[#A8D5BA26] h-[37px] px-6 rounded-[20px] w-fit mb-8">
            <p
              className={`${ibmPlexSans.className} text-[#309689] text-[18px] font-medium`}
            >
              Latest Opening
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-100 pb-8">
            <div className="flex items-start gap-6">
              <div className="bg-blue-50 p-3 rounded-xl">
                <img
                  src="/Images/Logo-3.png"
                  alt="Job Icon"
                  className="w-14 h-14"
                />
              </div>
              <div>
                <h3
                  className={`${andika.className} text-[32px] font-bold text-[#03A9F4] mb-2`}
                >
                  Senior Care Worker
                </h3>
                <p
                  className={`${figtree.className} text-[#7A7878] font-bold text-[16px] flex items-center gap-2`}
                >
                  Reports to:{" "}
                  <span className="text-[16px] font-normal text-[#7A7878]">
                    Care Manager
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className={`${figtree.className} lg:col-span-2 space-y-8`}>
            <div className="bg-white rounded-xl">
              <h4 className="text-[24px] font-semibold text-[#6F6F6F] mb-4">
                About the Role
              </h4>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Take the next step in your care career. As a Senior Care Worker,
                you'll lead by example, mentor junior staff, and ensure the
                highest standards of care delivery while maintaining a
                supportive and positive environment.
              </p>
            </div>

            <div>
              <h4 className="text-[24px] font-semibold text-[#6F6F6F] mb-4">
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {[
                  "Lead and supervise care team members",
                  "Ensure high-quality care delivery",
                  "Monitor and update care plans",
                  "Mentor and support junior staff",
                  "Maintain accurate care records",
                  "Coordinate with healthcare professionals",
                  "Handle complex care needs",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <i className="fa-solid fa-check text-[#03A9F4] mt-1"></i>{" "}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Community Care Workers",
      link: "/jobs",
      details: (
        <div className="border border-[#D4D4D4] bg-white p-8 rounded-[20px]">
          <div className="flex items-center gap-[10px] bg-[#A8D5BA26] h-[37px] px-6 rounded-[20px] w-fit mb-8">
            <p
              className={`${ibmPlexSans.className} text-[#309689] text-[18px] font-medium`}
            >
              Latest Opening
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-100 pb-8">
            <div className="flex items-start gap-6">
              <div className="bg-blue-50 p-3 rounded-xl">
                <img
                  src="/Images/Logo-3.png"
                  alt="Job Icon"
                  className="w-14 h-14"
                />
              </div>
              <div>
                <h3
                  className={`${andika.className} text-[32px] font-bold text-[#03A9F4] mb-2`}
                >
                  Community Care Worker
                </h3>
                <p
                  className={`${figtree.className} text-[#7A7878] font-bold text-[16px] flex items-center gap-2`}
                >
                  Reports to:{" "}
                  <span className="text-[16px] font-normal text-[#7A7878]">
                    Community Care Coordinator
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className={`${figtree.className} lg:col-span-2 space-y-8`}>
            <div className="bg-white rounded-xl">
              <h4 className="text-[24px] font-semibold text-[#6F6F6F] mb-4">
                About the Role
              </h4>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Make a difference in your community by providing essential care
                and support to individuals in their own homes. This rewarding
                role offers the opportunity to help people maintain their
                independence while receiving professional care.
              </p>
            </div>

            <div>
              <h4 className="text-[24px] font-semibold text-[#6F6F6F] mb-4">
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {[
                  "Provide personal care and support",
                  "Assist with daily living activities",
                  "Help with medication management",
                  "Support mobility and exercise",
                  "Prepare meals and assist with feeding",
                  "Maintain detailed care records",
                  "Build trusted relationships with clients",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <i className="fa-solid fa-check text-[#03A9F4] mt-1"></i>{" "}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Support Workers",
      link: "/jobs",
      details: (
        <div className="border border-[#D4D4D4] bg-white p-8 rounded-[20px]">
          <div className="flex items-center gap-[10px] bg-[#A8D5BA26] h-[37px] px-6 rounded-[20px] w-fit mb-8">
            <p
              className={`${ibmPlexSans.className} text-[#309689] text-[18px] font-medium`}
            >
              Latest Opening
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-100 pb-8">
            <div className="flex items-start gap-6">
              <div className="bg-blue-50 p-3 rounded-xl">
                <img
                  src="/Images/Logo-3.png"
                  alt="Job Icon"
                  className="w-14 h-14"
                />
              </div>
              <div>
                <h3
                  className={`${andika.className} text-[32px] font-bold text-[#03A9F4] mb-2`}
                >
                  Support Worker
                </h3>
                <p
                  className={`${figtree.className} text-[#7A7878] text-[16px] font-bold flex items-center gap-2`}
                >
                  Reports to:{" "}
                  <span className="text-[16px] font-normal text-[#7A7878]">
                    Support Worker Coordinator
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className={`${figtree.className} lg:col-span-2 space-y-8`}>
            <div className="bg-white rounded-xl">
              <h4 className="text-[24px] font-semibold text-[#6F6F6F] mb-4">
                About the Role
              </h4>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Make a difference in your community by providing essential care
                and support to individuals in their own homes. This rewarding
                role offers the opportunity to help people maintain their
                independence while receiving professional care.
              </p>
            </div>

            <div>
              <h4 className="text-[24px] font-semibold text-[#6F6F6F] mb-4">
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {[
                  "Provide personal care and support",
                  "Assist with daily living activities",
                  "Help with medication management",
                  "Support mobility and exercise",
                  "Prepare meals and assist with feeding",
                  "Maintain detailed care records",
                  "Build trusted relationships with clients",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <i className="fa-solid fa-check text-[#03A9F4] mt-1"></i>{" "}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Care Workers",
      link: "/jobs",
      details: (
        <div className="border border-[#D4D4D4] bg-white p-8 rounded-[20px]">
          <div className="flex items-center gap-[10px] bg-[#A8D5BA26] h-[37px] px-6 rounded-[20px] w-fit mb-8">
            <p
              className={`${ibmPlexSans.className} text-[#309689] text-[18px] font-medium`}
            >
              Latest Opening
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-100 pb-8">
            <div className="flex items-start gap-6">
              <div className="bg-blue-50 p-3 rounded-xl">
                <img
                  src="/Images/Logo-3.png"
                  alt="Job Icon"
                  className="w-14 h-14"
                />
              </div>
              <div>
                <h3
                  className={`${andika.className} text-[32px] font-bold text-[#03A9F4] mb-2`}
                >
                  Care Worker
                </h3>
                <p
                  className={`${figtree.className} text-[#7A7878] text-[16px] font-bold flex items-center gap-2`}
                >
                  Reports to:{" "}
                  <span className="text-[16px] font-normal text-[#7A7878]">
                    Support Care Coordinator
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className={`${figtree.className} lg:col-span-2 space-y-8`}>
            <div className="bg-white rounded-xl">
              <h4 className="text-[24px] font-semibold text-[#6F6F6F] mb-4">
                About the Role
              </h4>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Make a difference in your community by providing essential care
                and support to individuals in their own homes. This rewarding
                role offers the opportunity to help people maintain their
                independence while receiving professional care.
              </p>
            </div>

            <div>
              <h4 className="text-[24px] font-semibold text-[#6F6F6F] mb-4">
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {[
                  "Provide personal care and support",
                  "Assist with daily living activities",
                  "Help with medication management",
                  "Support mobility and exercise",
                  "Prepare meals and assist with feeding",
                  "Maintain detailed care records",
                  "Build trusted relationships with clients",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <i className="fa-solid fa-check text-[#03A9F4] mt-1"></i>{" "}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);
  const [verified, setVerified] = useState(false);

  const handleRecaptchaChange = (value) => {
    if (value) setVerified(true);
  };
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection
        badgeText="Trusted Care Solutions Since 2013"
        badgeTextColor="#5AA678"
        badgeColor="#A8D5BA26"
        badgeIcon="/Images/Care-solution.svg"
        NavyBlueHeading="Interested In A"
        subHeading="Career With Us?"
        description="Care Work That Counts — For You and For Others."
        primaryButtonText="Find a Position"
        primaryButtonLink="/career"
        secondaryButtonText="Send Us Your CV"
        secondaryButtonLink="/career"
        heroImage="/Images/careers-hero.png"
        heroImageAlt="Caregiver with patient"
      />

      <AboutSection
        badgeText="Careers"
        badgeTextColor="#A8D5BA"
        badgeColor="#A8D5BA26" badgeIcon="/Images/Assisted-li.svg"
        NavyBlueHeading="Our"
        subHeading="Careers"
        image="/Images/Career-2.png"
        description={false}
        description1="We believe people join care because they want to make a difference — not just fill shifts. At Care Direct Recruitment, we support carers and nurses at every stage, whether you're just starting out or stepping into something more senior."
        description2="You'll be matched to meaningful work that suits your experience, location, and goals — always with clear communication, real support, and fair pay."
        isAboutUsPage={false}
      />
      <section className="bg-[#084B9205] " >
        <div className="container mx-auto  py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
          {/* Image at the top */}
          <Badge
            text="Vacancies"
            textColor="#A8D5BA"
            badgeColor="#A8D5BA26" iconSrc="/Images/Assisted-li.svg" />

          {/* Heading and button inline */}
          <div className="flex flex-col sm:flex-row justify-between  items-start sm:items-center gap-4 sm:gap-0 mb-4 sm:mb-6">
            <h2
              className={`${ibmPlexSans.className} text-[24px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-gray-800 `}
            >
              New Job <span className="text-[#03A9F4]">Openings</span>
              <span className="text-[#03A9F4] text-[20px] ml-2">
                (no under 18s)
              </span>
            </h2>
            <Link href="/jobs">
              <button
                className={`${heebo.className} bg-[#084B92] text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-500  h-[50px] sm:h-[58px] md:h-[66px] px-4 sm:px-5 md:px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-[#084B91] transition`}
              >
                <span>Apply Now</span>
                <span
                  className="flex items-center justify-center bg-white rounded-full"
                  style={{ width: "28px", height: "28px", padding: "6px" }}
                >
                  <ArrowRight className="text-[#084B92] w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
                </span>
              </button>
            </Link>
          </div>

          {/* Job list */}
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <div key={index}>
                <div
                  className="border border-[#03A9F4] rounded-[15px] sm:rounded-[18px] md:rounded-[20px] h-[80px] sm:h-[90px] md:h-[100.46px] px-3 sm:px-4 py-2 sm:py-3 flex justify-between items-center hover:bg-blue-50 transition cursor-pointer"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <span
                    className={`${andika.className} text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold text-[#084B92] pr-2`}
                  >
                    {job.title}
                  </span>
                  {activeIndex === index ? (
                    <Minus
                      size={16}
                      className="text-blue-600 transition sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                    />
                  ) : (
                    <Plus
                      size={16}
                      className="text-blue-600 hover:translate-x-1 transition sm:w-[18px] sm:h-[18px] md:w-5 md:h-5"
                    />
                  )}
                </div>

                {/* Dropdown content */}
                {activeIndex === index && job.details && (
                  <div className="pt-2 sm:pt-3">{job.details}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto bg-white py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Left side: heading and benefits */}
          <div>
            {/* Icon above heading */}
            <Badge text="Work With Us"
              textColor="#A8D5BA"
              badgeColor="#A8D5BA26" iconSrc="/Images/About.svg" />
            {/* Heading */}
            <h2
              className={`${ibmPlexSans.className} text-[24px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-blue-900 mb-4 sm:mb-5 md:mb-6`}
            >
              Why Work With{" "}
              <span className="text-[#03A9F4]">
                <br className="hidden sm:block" />
                Care Direct?
              </span>
            </h2>
            {/* List of benefits */}
            <ul className="space-y-2 sm:space-y-3">
              {benefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-2 text-gray-500 text-[12px] sm:text-[14px] md:text-[16px]"
                >
                  <CheckCircle
                    size={16}
                    className={`${poppins.className} text-[#03A9F4] mt-1 w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px]`}
                  />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side: image */}
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <Image
              src="/Images/Work-3.png"
              alt="Nurses working"
              width={800}
              height={800}
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[800px] h-auto object-contain"
            />
          </div>
        </div>
      </section>
      <GettingStartedinServices

        badgeText="Starting"
        badgeTextColor="#A8D5BA"
        badgeColor="#A8D5BA26"
        badgeIcon="/Images/Starting.svg"
        buttonText="Contact Us"
        buttonLink="/contact"
        navyBlueHeading="What You"
        subHeading="'ll Need"
        centerContent={{
          labelText:
            "Our step-by-step process ensures families can access residential care with ease:",
          image: "/Images/MiddleCard-2.png",
          imageAlt: "Nurses",
        }}
        stepsData={[
          {
            number: "01",
            icon: "/Icons/Residential-1.svg",
            description: "A kind and reliable nature",
          },
          {
            number: "02",
            icon: "/Icons/Residential-2.svg",
            description: "Previous experience or willingness to train",
          },
          {
            number: "03",
            icon: "/Icons/Residential-3.svg",
            description: "A DBS on the update service",
          },
          {
            number: "04",
            icon: "/Icons/Residential-4.svg",
            description: "RGN and RMN qualification for nursing roles",
          },
        ]}
      />
      <section className="container mx-auto flex flex-col items-center py-6 sm:py-8 md:py-10 lg:py-12 bg-white px-4 sm:px-6 lg:px-8">
        {/* Heading and Icon Section on Top */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 mb-6 sm:mb-8 w-full">
          <Badge
            text="Contact"
            textColor="#A8D5BA"
            badgeColor="#A8D5BA26" iconSrc="/Images/Starting.svg" />
          <h2
            className={`${ibmPlexSans.className} text-[24px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-[#004990]`}
          >
            Contact <span className="text-[#03A9F4]">Us</span>
          </h2>
          <p
            className={`${poppins.className} text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-300 text-[#888888] `}
          >
            We're Here to Help — Always. Whether you're looking for care,
            building your team, or exploring a career with us — getting in touch
            is simple. Our support team is available 24/7 to provide guidance,
            answer questions, or begin your journey with Care Direct
            Recruitment.
          </p>
        </div>

        {/* Form Section */}
        <JobsForm isJobsPage={false} />
      </section>
      <Footer />
    </div>
  );
}
