import React, { useState } from "react";
import { ibmPlexSans, poppins } from "@/app/font";
import { andika } from "@/app/font";
import { roboto } from "@/app/font";
import { ReCAPTCHA } from "react-google-recaptcha";
import { ArrowRight } from "lucide-react";

export default function JobsForm({ isJobsPage }) {
  const [verified, setVerified] = useState(false);

  const handleRecaptchaChange = (value) => {
    if (value) setVerified(true);
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 bg-white mx-6 sm:mx-8 md:mx-10 mb-20 sm:mb-28 md:mb-36 lg:mb-40 xl:mb-52">
      <div className="bg-white rounded-[15px] sm:rounded-[18px] md:rounded-[20px]  ">
        {/* Heading Section */}
        {isJobsPage && (
          <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            <h3
              className={`${ibmPlexSans.className} text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-500 text-[#03A9F4]`}
            >
              Fill Out Form To Get enrolled yourself for future jobs opening
            </h3>
          </div>
        )}

        {/* Form Section */}
        <div className="w-full border border-[#D4D0D0] rounded-[10px] sm:rounded-[15px] md:rounded-[20px]">
          <form className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 p-4 sm:p-5 md:p-6 lg:p-8">
            {/* Name Field */}
            <div>
              <label
                htmlFor="fullName"
                className={`${andika.className} block text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-[#7A7878] mb-1 sm:mb-2`}
              >
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter Your Full Name"
                className={`${poppins.className} w-full p-2.5 sm:p-3 md:p-3.5 lg:p-4 border border-[#C8C8C8] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#9D9797] rounded-[6px] sm:rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className={`${andika.className} block text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-[#7A7878] mb-1 sm:mb-2`}
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className={`${poppins.className} w-full p-2.5 sm:p-3 md:p-3.5 lg:p-4 border border-[#C8C8C8] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#9D9797] rounded-[6px] sm:rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className={`${andika.className} block text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-[#7A7878] mb-1 sm:mb-2`}
              >
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter Phone"
                className={`${poppins.className} w-full p-2.5 sm:p-3 md:p-3.5 lg:p-4 border border-[#C8C8C8] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#9D9797] rounded-[6px] sm:rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
            </div>

            {/* Radio Button Questions */}
            {[
              {
                question: "Are you interested in working full-time?",
                name: "fullTime",
              },
              {
                question: "Are you interested in working part-time?",
                name: "partTime",
              },
              {
                question: "Do you have previous care experience?",
                name: "experience",
              },
              {
                question:
                  "Would you like us to send you details about the qualifications required?",
                name: "emailDetails",
              },
            ].map(({ question, name }) => (
              <div key={name}>
                <label
                  className={`${andika.className} block text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-[#7A7878] mb-2 sm:mb-3`}
                >
                  {question}
                </label>
                <div className="flex space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 mt-1 sm:mt-2">
                  <label
                    className={`${poppins.className} flex items-center space-x-1.5 sm:space-x-2 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#9D9797] cursor-pointer`}
                  >
                    <input
                      type="radio"
                      name={name}
                      value="Yes"
                      required
                      className="accent-[#084B92] w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                    />
                    <span>Yes</span>
                  </label>
                  <label
                    className={`${poppins.className} flex items-center space-x-1.5 sm:space-x-2 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#9D9797] cursor-pointer`}
                  >
                    <input
                      type="radio"
                      name={name}
                      value="No"
                      className="accent-[#084B92] w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            ))}

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className={`${andika.className} block text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-[#7A7878] mb-1 sm:mb-2`}
              >
                Message / Anything you'd like us to know
              </label>
              <textarea
                id="message"
                placeholder="Type Your Message"
                rows="3"
                className={`${poppins.className} w-full p-2.5 sm:p-3 md:p-3.5 lg:p-4 border border-[#C8C8C8] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#9D9797] rounded-[6px] sm:rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical min-h-[80px] sm:min-h-[90px] md:min-h-[100px]`}
              ></textarea>
            </div>

            {/* ReCAPTCHA */}
            <div
              className={`${roboto.className} flex justify-center py-2 sm:py-3`}
            >
              <div className="scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100">
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  onChange={handleRecaptchaChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!verified}
              className={`w-full py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-full transition duration-300 flex items-center justify-center ${
                poppins.className
              } text-white font-500 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] bg-[#084B92] hover:bg-[#083B91] ${
                !verified
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              }`}
            >
              Submit
              <span className="flex items-center justify-center bg-white rounded-full ml-[8px] sm:ml-[10px] md:ml-[12px] lg:ml-[15px] w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[26px] md:h-[26px] lg:w-[28px] lg:h-[28px] p-[3px] sm:p-[4px] md:p-[5px] lg:p-[6px]">
                <ArrowRight className="text-[#084B92] w-3 h-3 sm:w-[14px] sm:h-[14px] md:w-4 md:h-4 lg:w-5 lg:h-5" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
