"use client";
import {
  ibmPlexSans,
  poppins,
  heebo,
  andika,
  roboto,
  dmSans,
} from "@/app/font";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Badge from "@/components/Badge";
import React from "react";
import HeroSection from "@/components/HeroSection";

export default function page() {
  const [verified, setVerified] = useState(false);

  const handleRecaptchaChange = (value) => {
    if (value) setVerified(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection
        badgeText="Trusted Care Solutions Since 2013"
        badgeIcon="/Images/Care-solution.svg"
        NavyBlueHeading="Contact"
        subHeading="Us"
        description="Get in touch for your queries."
        heroImage="/Images/contactus-hero.png"
        heroImageAlt="Caregiver with patient"
        showButtons={false}
      />

      <section className="container mx-auto flex flex-col min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-20 bg-white">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Form Section */}
          <div className="lg:col-span-2 bg-white rounded-[20px] p-4 sm:p-6 md:p-8 shadow-md border-[2px] border-[#D4D0D0]">
            <div>
              <Badge text="Contact" iconSrc="/Images/Assisted-li.svg" />
              <div className={`${ibmPlexSans.className}`}>
                <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-[#084B92] mb-4">
                  Get In <span className="text-[#03A9F4]">Touch</span>
                </h2>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className={`${andika.className} block text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#7A7878] mb-2`}
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    className={`${poppins.className} w-full p-3 sm:p-4 border border-[#C8C8C8] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="phone"
                    className={`${andika.className} block text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#7A7878] mb-2`}
                  >
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter Phone"
                    className={`${poppins.className} w-full p-3 sm:p-4 border border-[#C8C8C8] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className={`${andika.className} block text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#7A7878] mb-2`}
                >
                  Service<span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  className={`${poppins.className} w-full p-3 sm:p-4 border border-[#C8C8C8] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                >
                  <option value="">Choose a service</option>
                  <option value="healthcare">Health Care</option>
                  <option value="homecare">Home Care</option>
                  <option value="support">Support Services</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`${andika.className} block text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#7A7878] mb-2`}
                >
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  placeholder="Type Your Message"
                  rows="4"
                  className={`${poppins.className} w-full p-3 sm:p-4 border border-[#C8C8C8] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
              </div>

              <div
                className={`${roboto.className} flex justify-center scale-75 sm:scale-90 md:scale-100`}
              >
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  onChange={handleRecaptchaChange}
                />
              </div>

              <button
                type="submit"
                disabled={!verified}
                className={`w-full py-3 sm:py-4 rounded-full transition duration-300 flex items-center justify-center ${
                  poppins.className
                } text-white font-500 text-[16px] sm:text-[18px] md:text-[20px] bg-[#084B92] hover:bg-[#083B91] ${
                  !verified
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-100 cursor-pointer"
                }`}
              >
                Contact Us
                <span
                  className="flex items-center justify-center bg-white rounded-full ml-[15px]"
                  style={{ width: 32, height: 32, padding: 6 }}
                >
                  <ArrowRight className="text-[#084B92] w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Info Section */}
          <div className="bg-white rounded-[20px] p-4 sm:p-6 md:p-8 shadow-md border-[2px] border-[#D4D0D0] space-y-6 sm:space-y-8 h-full flex flex-col">
            <div>
              <h3
                className={`${ibmPlexSans.className} font-bold text-[24px] sm:text-[26px] md:text-[28px] text-[#004990]`}
              >
                Contact <span className="text-[#03A9F4]">Info</span>
              </h3>
              <div
                className={`${dmSans.className} mt-4 sm:mt-6 text-gray-700 space-y-4 sm:space-y-6`}
              >
                <p className="flex items-center text-[16px] sm:text-[17px] md:text-[18px] font-400 text-gray-500 gap-2 sm:gap-3">
                  <Image
                    src="/Icons/phonecontact.svg"
                    alt="Phone"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
                  />{" "}
                  0800 123 4567
                </p>
                <p className="flex items-center text-[16px] sm:text-[17px] md:text-[18px] font-400 text-gray-500 gap-2 sm:gap-3">
                  <Image
                    src="/Icons/mailcontact.svg"
                    alt="Email"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
                  />{" "}
                  example@example.com
                </p>
                <div className="flex items-center text-blue-900 gap-4 sm:gap-6 pt-2 sm:pt-4">
                  <a href="" className="hover:text-[#03A9F4] transition-colors">
                    <FaFacebookF className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]" />
                  </a>
                  <a href="" className="hover:text-[#03A9F4] transition-colors">
                    <FaTwitter className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]" />
                  </a>
                  <a href="" className="hover:text-[#03A9F4] transition-colors">
                    <FaLinkedinIn className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]" />
                  </a>
                  <a href="" className="hover:text-[#03A9F4] transition-colors">
                    <FaInstagram className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]" />
                  </a>
                </div>
              </div>
            </div>

            <div className="py-4 sm:py-6 flex-grow">
              <h3
                className={`${ibmPlexSans.className} font-bold text-[24px] sm:text-[26px] md:text-[28px] text-[#004990]`}
              >
                Office <span className="text-[#03A9F4]">Address</span>
              </h3>
              <p
                className={`${dmSans.className} text-[16px] sm:text-[17px] md:text-[18px] text-gray-500 font-400 mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3`}
              >
                <Image
                  src="/Icons/map-pin-contact.svg"
                  alt="Map"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
                />{" "}
                1234 Main St, Anytown, UK 12345
              </p>
            </div>

            <div className="flex-grow flex items-center justify-center">
              <Image
                src="/Images/Care-bo.png"
                alt="Care Office"
                width={400}
                height={300}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto w-full bg-white mb-30 sm:mb-30 md:mb-40 px-4 sm:px-6 lg:px-8">
        <Image
          src="/Images/map.png"
          alt="Map"
          width={1600}
          height={900}
          className="rounded-md object-cover w-full"
        />
      </section>
      <Footer />
    </div>
  );
}
