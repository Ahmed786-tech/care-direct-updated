"use client";
import {
  ibmPlexSans,
  poppins,
  heebo,
  inter,
  montserrat,
  redHatDisplay,
  dmSans,
} from "@/app/font";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-x-0 top-0 transform -translate-y-1/2">
          <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-28">
            <div className="relative container mx-auto rounded-[20px] overflow-hidden shadow-lg">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                  backgroundImage: "url('/Images/Background6.png')",
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#03A9F4E8] z-0" />

              {/* Content */}
              <div className="relative z-10 text-white p-4 sm:p-6 lg:p-8">
                {/* Top Text */}
                <div className="text-center mb-4 sm:mb-6">
                  <h3
                    className={`${ibmPlexSans.className} text-[28px] sm:text-[36px] lg:text-[42px] font-bold`}
                  >
                    Like Our Services?
                  </h3>
                  <p
                    className={`${poppins.className} mt-2 text-[14px] sm:text-[16px] lg:text-[18px] font-400`}
                  >
                    Subscribe us to get the latest news and updates
                  </p>
                </div>

                {/* Form Below Text - Improved Mobile Layout */}
                <div className="flex flex-row items-center justify-center bg-white rounded-full px-3 py-2 shadow-inner w-full sm:max-w-xl mx-auto gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className={`${montserrat.className} flex-1 px-4 py-2 rounded-full focus:outline-none text-[#BDBCBC] w-full text-[14px] font-400`}
                  />
                  <button
                    className={`${heebo.className} bg-[#03A9F4] text-white px-4 py-2 rounded-full font-400 hover:bg-[#03A9F5] transition cursor-pointer min-w-[120px] text-[14px] whitespace-nowrap`}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#084B92] text-white pt-32 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-[70px]">
            <div className="text-center sm:text-left">
              <Link href="/">
                <img
                  src="/Images/Logo.svg"
                  alt="CARE DIRECT RECRUITMENT LTD"
                  className="bg-white rounded-[10px] p-3 mx-auto sm:mx-0"
                />
              </Link>
              <p
                className={`${poppins.className} mt-4 text-white text-[13px] sm:text-[14px] lg:text-[15px] font-300 w-full lg:w-[417px]`}
              >
                Care Direct Recruitment Ltd has built a reputation for trust by
                prioritising client relationships and trusted family care advice
                for your loved ones.
              </p>
              <div className="mt-4 flex justify-center sm:justify-start space-x-4">
                <a href="#" className="text-white hover:text-white/90">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white hover:text-white/90">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white hover:text-white/90">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-white hover:text-white/90">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div>
              <div className="ml-0 sm:ml-[50px] lg:ml-[130px] text-center sm:text-left">
                <h4
                  className={`${dmSans.className} text-[14px] sm:text-[16px] font-600 mb-4 sm:mb-8`}
                >
                  Pages
                </h4>
                <ul
                  className={`${inter.className} mt-4 space-y-2 text-[white] cursor-pointer text-[11px] sm:text-[12px] leading-[25px]`}
                >
                  <li>
                    <Link href="/" className="hover:text-white hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-white hover:underline"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="hover:text-white hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/career"
                      className="hover:text-white hover:underline"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/jobs"
                      className="hover:text-white hover:underline"
                    >
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-white hover:underline"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="ml-0 sm:ml-[30px] lg:ml-[70px] text-center sm:text-left">
                <h4
                  className={`${dmSans.className} text-[14px] sm:text-[16px] font-600 mb-4 sm:mb-8`}
                >
                  Services
                </h4>
                <ul
                  className={`${inter.className} mt-4 space-y-2 text-[white] text-[11px] sm:text-[12px] font-400 leading-[25px]`}
                >
                  <li>
                    <Link
                      href="/assisted"
                      className="hover:text-white hover:underline"
                    >
                      Domiciliary Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/residential"
                      className="hover:text-white hover:underline"
                    >
                      Residential Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/staffing"
                      className="hover:text-white hover:underline"
                    >
                      Staffing Solutions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h4
                className={`${dmSans.className} text-[14px] sm:text-[16px] font-600`}
              >
                Contact Us
              </h4>
              <ul className={`${dmSans.className} mt-4 space-y-4 text-[white]`}>
                <Link href="tel:01424716739">
                  <li>
                    <div className="text-[#03A9F4] font-bold text-[14px] sm:text-[16px]">
                      Call Us At (24/7)
                    </div>
                    <div className="flex items-center justify-center sm:justify-start mt-1 text-[12px] sm:text-[14px] font-400">
                      <img
                        src="/Icons/PhoneWhite.svg"
                        alt="Phone"
                        className="w-4 h-4 mr-2"
                      />
                      01424 716 739
                    </div>
                  </li>
                </Link>
                <Link href="mailto:info@caredirectrecruitment.co.uk">
                  <li className="mt-4">
                    <div
                      className={`${dmSans.className} text-[#03A9F4] font-bold text-[14px] sm:text-[16px]`}
                    >
                      Email Us
                    </div>
                    <div
                      className={`${dmSans.className} flex items-center justify-center sm:justify-start mt-1 text-[12px] sm:text-[14px] font-400`}
                    >
                      <img
                        src="/Icons/MailWhite.svg"
                        alt="Email"
                        className="w-4 h-4 mr-2"
                      />
                      info@caredirectrecruitment.co.uk
                    </div>
                  </li>
                </Link>
                <li className="mt-4">
                  <div
                    className={`${dmSans.className} text-[#03A9F4] font-bold text-[14px] sm:text-[16px]`}
                  >
                    Our Address
                  </div>
                  <div
                    className={`${dmSans.className}  flex items-center justify-center sm:justify-start mt-1 text-[12px] sm:text-[14px] font-400`}
                  >
                    <img
                      src="/Icons/PinWhite.svg"
                      alt="Location"
                      className="w-4 h-4 mr-2"
                    />
                    389a London Rd, St. Leonards-on-Sea TN37 6PA
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${redHatDisplay.className} mt-8 sm:mt-12 border-t border-white-700 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center`}
          >
            <p className="text-white text-[12px] sm:text-[14px] font-400 mb-4 sm:mb-0">
              COPYRIGHT © 2025 AYS DIGITAL
            </p>
            <div className="flex space-x-4">
              <a href="#">
                <img
                  src="/Images/Google-play.png"
                  alt="Google Play"
                  className="h-8 sm:h-10"
                />
              </a>
              <a href="#">
                <img
                  src="/Images/App-store.png"
                  alt="App Store"
                  className="h-8 sm:h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
