"use client";
import {
  ibmPlexSans,
  poppins,
  heebo,
  andika,
  roboto,
  figtree,
} from "@/app/font";
import JobApplicationModal from "@/components/JobApplicationModal";

import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ArrowRight, Plus, Minus } from "lucide-react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Image from "next/image";
import Badge from "@/components/Badge";
import React from "react";
import HeroSection from "@/components/HeroSection";
import JobsForm from "../../components/JobsForm";

export default function page() {
  const [verified, setVerified] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleRecaptchaChange = (value) => {
    if (value) setVerified(true);
  };
  const [activeIndex, setActiveIndex] = useState(null);
  const jobOpenings = [
    {
      title: "Senior Carer",
      link: "#",

      details: (
        <div className="border border-[#D4D4D4] bg-white p-4 sm:p-6 md:p-8 rounded-[20px]">
          {/* Top Section - Time Badge */}
          <div className="flex items-center gap-[10px] bg-[#A8D5BA26] h-[32px] sm:h-[37px] px-4 sm:px-6 rounded-[20px] w-fit mb-6 sm:mb-8">
            <p
              className={`${ibmPlexSans.className} text-[#309689] text-[14px] sm:text-[16px] md:text-[18px] font-medium`}
            >
              10 Min Ago
            </p>
          </div>

          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8 border-b border-gray-100 pb-6 sm:pb-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full md:w-auto">
              <div className="bg-blue-50 p-2 sm:p-3 rounded-xl">
                <img
                  src="/Images/Logo-3.png"
                  alt="Job Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                />
              </div>
              <div className="flex-1">
                <h3
                  className={`${andika.className} text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#03A9F4] mb-1 sm:mb-2`}
                >
                  Senior Carer
                </h3>
                <p
                  className={`${figtree.className} text-[#7A7878] font-bold text-[14px] sm:text-[15px] md:text-[16px] flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2`}
                >
                  <span className="font-semibold">Reports to:</span>{" "}
                  <span className="text-[14px] sm:text-[15px] md:text-[16px] font-normal text-[#7A7878]">
                    Senior Carer / Care Coordinator
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info Section */}
          <div className="flex flex-col xl:flex-row gap-6 justify-between items-stretch xl:items-center mb-8 sm:mb-10 lg:mb-12">
            <div
              className={`${figtree.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl flex-1`}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                  <Image
                    src="/Icons/briefcase.svg"
                    alt="Job Icon"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#7A7878] text-[12px] sm:text-[14px] md:text-[16px]">Commerce</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                  <Image
                    src="/Icons/clock.svg"
                    alt="Job Icon"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#7A7878] text-[12px] sm:text-[14px] md:text-[16px]">Full time</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                  <Image
                    src="/Icons/wallet.svg"
                    alt="Job Icon"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#7A7878] text-[12px] sm:text-[14px] md:text-[16px]">$40000-$42000</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                  <Image
                    src="/Icons/map-pin.svg"
                    alt="Job Icon"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#7A7878] text-[12px] sm:text-[14px] md:text-[16px]">New-York, USA</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center xl:justify-end">
              <button
                onClick={() => setIsModalOpen(true)}
                className={`${heebo.className} h-[48px] sm:h-[56px] md:h-[63px] w-full sm:w-[250px] md:w-[280px] lg:w-[300px] bg-[#084B92] text-white px-6 sm:px-8 py-3 rounded-full cursor-pointer hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 sm:gap-3 text-[14px] sm:text-[16px]`}
              >
                <span>Apply Now</span>
                <i className="fas fa-arrow-right text-[12px] sm:text-[14px]"></i>
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Content */}
            <div className={`${figtree.className} lg:col-span-2 space-y-6 sm:space-y-8`}>
              {/* About Section */}
              <div className="bg-white rounded-xl">
                <h4 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#6F6F6F] mb-3 sm:mb-4">
                  About the Role
                </h4>
                <p className="text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
                  We're looking for compassionate and dedicated care
                  professionals to join our growing team. In this role, you'll
                  make a real difference in people's lives by providing
                  essential care and support, helping our service users maintain
                  their independence and dignity.
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="bg-white rounded-xl">
                <h4 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#6F6F6F] mb-3 sm:mb-4">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Provide personal care and support with daily activities",
                    "Assist with medication management when required",
                    "Help with meal preparation and feeding assistance",
                    "Support mobility and exercise programs",
                    "Maintain accurate care records and documentation",
                    "Communicate effectively with service users, families, and healthcare professionals",
                    "Follow care plans and health & safety procedures",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 text-gray-600 text-[13px] sm:text-[14px] md:text-[15px]"
                    >
                      <i className="fa-solid fa-check text-[#03A9F4] mt-1 text-[12px] sm:text-[14px]"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-xl">
                <h4 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#6F6F6F] mb-3 sm:mb-4">
                  Requirements
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Previous care experience (preferred but not essential)",
                    "Compassionate and patient-centered approach",
                    "Strong communication and interpersonal skills",
                    "Ability to work flexibly, including evenings and weekends",
                    "Right to work in the UK",
                    "DBS check required",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 text-gray-600 text-[13px] sm:text-[14px] md:text-[15px]"
                    >
                      <i className="fa-solid fa-check text-[#03A9F4] mt-1 text-[12px] sm:text-[14px]"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sidebar */}
            <div
              className={`${figtree.className} p-4 sm:p-6 rounded-xl h-fit space-y-4 sm:space-y-6`}
              style={{ backgroundColor: '#084B9208' }}
            >
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#6F6F6F] pb-3 sm:pb-4 border-b border-gray-200">
                Job Overview
              </h3>

              {[
                {
                  icon: "/Icons/clock.svg",
                  title: "Employment Type",
                  value: "Full-time / Part-time / Temporary",
                },
                {
                  icon: "/Icons/briefcase.svg",
                  title: "Category",
                  value: "Health Care",
                },
                {
                  icon: "/Icons/award.svg",
                  title: "Experience",
                  value: "5 Years",
                },
                {
                  icon: "/Icons/degree.svg",
                  title: "Qualification",
                  value: "Master",
                },
                {
                  icon: "/Icons/map-pin.svg",
                  title: "Location",
                  value: "Various placements across the UK",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt="Job Icon"
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                      width={24}
                      height={24}
                    />
                  </div>

                  <div className="flex-1">
                    <h5 className="font-semibold text-[#084B92] mb-1 text-[12px] sm:text-[14px] md:text-[16px]">
                      {item.title}
                    </h5>
                    <p className="text-[#A8A8A8] font-normal text-[11px] sm:text-[12px] md:text-[14px] break-words">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* Social Share */}
              <div className=" flex items-center justify-between border-t border-gray-200 pt-8 px-4">
                <p className="text-[#6F6F6F] font-bold   text-[12px] sm:text-[14px] md:text-[16px]">Share Job:</p>
                <div className="flex gap-3 sm:gap-4 ">
                  <a
                    href="#"
                    className="rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors p-1"
                  >
                    <i className="fa-brands fa-facebook text-[#03a9f4] text-[20px] sm:text-[24px] md:text-[28px] lg:text-3xl"></i>
                  </a>
                  <a
                    href="#"
                    className="rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors p-1"
                  >
                    <i className="fa-brands fa-x-twitter text-[#03a9f4] text-[20px] sm:text-[24px] md:text-[28px] lg:text-3xl"></i>
                  </a>
                  <a
                    href="#"
                    className="rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors p-1"
                  >
                    <i className="fa-brands fa-linkedin text-[#03a9f4] text-[20px] sm:text-[24px] md:text-[28px] lg:text-3xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Carer / Care Assistant",
      link: "#",
      details: (
        <div className="border border-[#D4D4D4] bg-white p-4 sm:p-6 md:p-8 rounded-[20px]">
          {/* Top Section - Time Badge */}
          <div className="flex items-center gap-[10px] bg-[#A8D5BA26] h-[32px] sm:h-[37px] px-4 sm:px-6 rounded-[20px] w-fit mb-6 sm:mb-8">
            <p
              className={`${ibmPlexSans.className} text-[#309689] text-[14px] sm:text-[16px] md:text-[18px] font-medium`}
            >
              10 Min Ago
            </p>
          </div>

          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8 border-b border-gray-100 pb-6 sm:pb-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full md:w-auto">
              <div className="bg-blue-50 p-2 sm:p-3 rounded-xl">
                <img
                  src="/Images/Logo-3.png"
                  alt="Job Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                />
              </div>
              <div className="flex-1">
                <h3
                  className={`${andika.className} text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#03A9F4] mb-1 sm:mb-2`}
                >
                  Carer / Care Assistant
                </h3>
                <p
                  className={`${figtree.className} text-[#7A7878] text-[14px] sm:text-[15px] md:text-[16px] flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2`}
                >
                  <span className="font-bold">Reports to:</span>{" "}
                  <span className="text-[14px] sm:text-[15px] md:text-[16px] font-normal text-[#7A7878]">
                    Senior Carer / Care Coordinator
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info Section */}
          <div className="flex flex-col xl:flex-row gap-6 justify-between items-stretch xl:items-center mb-8 sm:mb-10 lg:mb-12">
            <div
              className={`${figtree.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl flex-1`}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                  <Image
                    src="/Icons/briefcase.svg"
                    alt="Job Icon"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#7A7878] text-[12px] sm:text-[14px] md:text-[16px]">Commerce</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                  <Image
                    src="/Icons/clock.svg"
                    alt="Job Icon"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#7A7878] text-[12px] sm:text-[14px] md:text-[16px]">Full time</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                  <Image
                    src="/Icons/wallet.svg"
                    alt="Job Icon"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#7A7878] text-[12px] sm:text-[14px] md:text-[16px]">$40000-$42000</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                  <Image
                    src="/Icons/map-pin.svg"
                    alt="Job Icon"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#7A7878] text-[12px] sm:text-[14px] md:text-[16px]">New-York, USA</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center xl:justify-end">
              <button
                onClick={() => setIsModalOpen(true)}
                className={`${heebo.className} h-[48px] sm:h-[56px] md:h-[63px] w-full sm:w-[250px] md:w-[280px] lg:w-[300px] bg-[#084B92] text-white px-6 sm:px-8 py-3 rounded-full cursor-pointer hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 sm:gap-3 text-[14px] sm:text-[16px]`}
              >
                <span>Apply Now</span>
                <i className="fas fa-arrow-right text-[12px] sm:text-[14px]"></i>
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Content */}
            <div className={`${figtree.className} lg:col-span-2 space-y-6 sm:space-y-8`}>
              {/* About Section */}
              <div className="bg-white rounded-xl">
                <h4 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#6F6F6F] mb-3 sm:mb-4">
                  About the Role
                </h4>
                <p className="text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
                  As a Care Assistant with Care Direct Recruitment, you'll be
                  the heart of our service. You'll help individuals with
                  day-to-day tasks, offer companionship, and support people to
                  live with dignity and confidence in their own homes or care
                  environments.
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="bg-white rounded-xl">
                <h4 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#6F6F6F] mb-3 sm:mb-4">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Provide hands-on personal care including washing, dressing, and toileting",
                    "Assist with medication (where trained)",
                    "Help with meal preparation and feeding if required",
                    "Encourage independence and emotional well-being",
                    "Offer companionship and conversation",
                    "Maintain accurate daily records and report concerns",
                    "Work respectfully and sensitively with service users and their families",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 text-gray-600 text-[13px] sm:text-[14px] md:text-[15px]"
                    >
                      <i className="fa-solid fa-check text-[#03A9F4] mt-1 text-[12px] sm:text-[14px]"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-xl">
                <h4 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#6F6F6F] mb-3 sm:mb-4">
                  Requirements
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "A kind, caring, and reliable nature",
                    "Some care experience is preferred but not essential – full training provided",
                    "Good communication and time-management skills",
                    "Right to work in the UK",
                    "Enhanced DBS (or willingness to undergo one)",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 text-gray-600 text-[13px] sm:text-[14px] md:text-[15px]"
                    >
                      <i className="fa-solid fa-check text-[#03A9F4] mt-1 text-[12px] sm:text-[14px]"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sidebar */}
            <div
              className={`${figtree.className} p-4 sm:p-6 rounded-xl h-fit space-y-4 sm:space-y-6`}
              style={{ backgroundColor: '#084B9208' }}
            >
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#6F6F6F] pb-3 sm:pb-4 border-b border-gray-200">
                Job Overview
              </h3>

              {[
                {
                  icon: "/Icons/clock.svg",
                  title: "Employment Type",
                  value: "Full-time / Part-time",
                },
                {
                  icon: "/Icons/briefcase.svg",
                  title: "Category",
                  value: "Healthcare",
                },
                {
                  icon: "/Icons/award.svg",
                  title: "Experience",
                  value: "2+ Years",
                },
                {
                  icon: "/Icons/degree.svg",
                  title: "Qualification",
                  value: "Care Certificate (provided)",
                },
                {
                  icon: "/Icons/map-pin.svg",
                  title: "Location",
                  value: "Community-based and care home settings across the UK",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt="Job Icon"
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-[#084B92] mb-1 text-[12px] sm:text-[14px] md:text-[16px]">
                      {item.title}
                    </h5>
                    <p className="text-[#A8A8A8] font-normal text-[11px] sm:text-[12px] md:text-[14px] break-words">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* Social Share */}
              <div className=" flex items-center justify-between border-t border-gray-200 pt-8 px-4">
                <p className="text-[#6F6F6F] font-bold   text-[12px] sm:text-[14px] md:text-[16px]">Share Job:</p>
                <div className="flex gap-3 sm:gap-4 ">
                  <a
                    href="#"
                    className="rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors p-1"
                  >
                    <i className="fa-brands fa-facebook text-[#03a9f4] text-[20px] sm:text-[24px] md:text-[28px] lg:text-3xl"></i>
                  </a>
                  <a
                    href="#"
                    className="rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors p-1"
                  >
                    <i className="fa-brands fa-x-twitter text-[#03a9f4] text-[20px] sm:text-[24px] md:text-[28px] lg:text-3xl"></i>
                  </a>
                  <a
                    href="#"
                    className="rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors p-1"
                  >
                    <i className="fa-brands fa-linkedin text-[#03a9f4] text-[20px] sm:text-[24px] md:text-[28px] lg:text-3xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection
        badgeTextColor="#5AA678"
        badgeColor="#A8D5BA26"
        badgeText="Trusted Care Solutions Since 2013"
        badgeIcon="/Images/Care-solution.svg"
        NavyBlueHeading="Interested In A"
        subHeading="Career With Us?"
        description="Please fill out this quick form, and we'll get back to you with more information."
        primaryButtonText="Find a Position"
        primaryButtonLink="/career"
        secondaryButtonText="Send Us Your CV"
        secondaryButtonLink="/career"
        heroImage="/Images/career-section-hero-img.png"
        heroImageAlt="Caregiver with patient"
      />

      <JobApplicationModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      // Pass the specific job title
      />

      <section className=" py-6 sm:py-8 md:py-10 bg-white mx-6 sm:mx-8 md:mx-10">
        {/* <section className="container mx-auto py-6 sm:py-8 md:py-10 bg-white px-4 sm:px-6 md:px-8"> */}
        <div className="bg-white rounded-[15px] sm:rounded-[18px] md:rounded-[20px] shadow-lg p-8 ">
          {/* Badge at the top */}
          <div className="mb-3 sm:mb-4">
            <Badge
              text="Contact"
              textColor="#A8D5BA"
              badgeColor="#A8D5BA26" iconSrc="/Images/Contact.svg" />
          </div>

          {/* Heading */}
          <div className="flex justify-between items-center mb-4 sm:mb-5 md:mb-6">
            <h2
              className={`${ibmPlexSans.className} text-[28px] sm:text-[34px] md:text-[42px] font-bold text-gray-800`}
            >
              New Job <span className="text-[#03A9F4]">Openings</span>
            </h2>
          </div>

          {/* Job List */}
          <div className="space-y-3 sm:space-y-4">
            {jobOpenings.map((job, index) => (
              <div key={index}>
                <div
                  className="border border-[#03A9F4] h-[80px] sm:h-[90px] md:h-[100.46px] rounded-[15px] sm:rounded-[18px] md:rounded-[20px] px-3 sm:px-4 py-2 sm:py-3 flex justify-between items-center hover:bg-blue-50 transition cursor-pointer"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <span
                    className={`${andika.className} text-[16px] sm:text-[18px] md:text-[20px] font-bold text-blue-900`}
                  >
                    {job.title}
                  </span>
                  {activeIndex === index ? (
                    <Minus
                      size={16}
                      className="text-blue-600 transition sm:size-[18px] md:size-[20px]"
                    />
                  ) : (
                    <Plus
                      size={16}
                      className="text-blue-600 hover:translate-x-1 transition sm:size-[18px] md:size-[20px]"
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
      <JobsForm isJobsPage={true} />

      <Footer></Footer>
    </div>
  );
}
