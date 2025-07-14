import React, { useState } from "react";
import Image from "next/image";
import Badge from "./Badge";
import { ibmPlexSans, andika, poppins, roboto } from "@/app/font";
import ReCAPTCHA from "react-google-recaptcha";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };
  return (
    <section className="bg-[#084B9205] py-4 sm:py-6 md:py-8 mb-24 sm:mb-24 md:mb-30">
      <div className="container mx-auto px-2 sm:px-4 md:px-8">
        <div className="bg-gray-50 rounded-[10px] sm:rounded-[15px] md:rounded-[20px] overflow-hidden">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 py-8 md:py-16">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2">
              <Image
                src="/Images/Left-img5.png"
                alt="Person with phone"
                width={550}
                height={800}
                className="w-full object-cover"
              />
            </div>

            {/* Right Side - Form */}
            <div className="relative z-10 w-full md:w-1/2 bg-white border-[1px] sm:border-[1.5px] md:border-[2px] border-[#D4D0D0] p-4 sm:p-6 md:p-8 rounded-[10px] sm:rounded-[15px] md:rounded-[20px]">
              <Badge
                text="Contact"
                textColor="#A8D5BA"
                badgeColor="#A8D5BA26"
                iconSrc="/Images/Contact.svg"
              />
              <div className={`${ibmPlexSans.className}`}>
                <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-bold text-[#084B92] mb-2 sm:mb-3 md:mb-4">
                  Get In <span className="text-[#03A9F4]">Touch</span>
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="email"
                      className={`${andika.className} block text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#7A7878] mb-1 sm:mb-2`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter Your Email"
                      className={`${poppins.className} w-full p-3 sm:p-3.5 md:p-4 border border-[#C8C8C8] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="phone"
                      className={`${andika.className} block text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#7A7878] mb-1 sm:mb-2`}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter Phone"
                      className={`${poppins.className} w-full p-3 sm:p-3.5 md:p-4 border border-[#C8C8C8] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className={`${andika.className} block text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#7A7878] mb-1 sm:mb-2`}
                  >
                    Service
                  </label>
                  <select
                    id="service"
                    className={`${poppins.className} w-full p-3 sm:p-4 border border-[#C8C8C8] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  >
                    <option value="">Choose a service</option>
                    <option value="healthcare">Domiciliary Care</option>
                    <option value="homecare">Residential Support</option>
                    <option value="support">Staffing Solutions</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`${andika.className} block text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#7A7878] mb-1 sm:mb-2`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Type Your Message"
                    rows="4"
                    className={`${poppins.className} w-full p-3 sm:p-3.5 md:p-4 border border-[#C8C8C8] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                {/* reCAPTCHA */}
                <div
                  className={`${roboto.className} flex justify-center scale-90 sm:scale-95 md:scale-100`}
                >
                  <ReCAPTCHA
                    sitekey="YOUR_SITE_KEY_HERE"
                    onChange={handleCaptchaChange}
                  />
                </div>

                <button
                  disabled={!captchaValue}
                  className={`w-full py-3 sm:py-3.5 md:py-4 rounded-full transition duration-300 flex items-center justify-center ${
                    poppins.className
                  } text-white font-500 text-[16px] sm:text-[18px] md:text-[20px] bg-[#084B92] hover:bg-[#083B91] ${
                    !captchaValue
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100 cursor-pointer"
                  }`}
                >
                  Contact Us
                  <span
                    className="flex items-center justify-center bg-white rounded-full ml-[10px] sm:ml-[12px] md:ml-[15px]"
                    style={{ width: "28px", height: "28px", padding: "6px" }}
                  >
                    <ArrowRight className="text-[#084B92] w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
