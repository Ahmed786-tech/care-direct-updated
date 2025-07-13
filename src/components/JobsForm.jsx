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
    <section className="container mx-auto flex flex-col items-center mb-40  md:mb-52 py-4 sm:py-6 md:py-8 bg-white px-8 ">
      {/* <section className="container mx-auto flex flex-col items-center mb-24 sm:mb-24 md:mb-30 py-4 sm:py-6 md:py-8 bg-white px-4 sm:px-6 md:px-8"> */}
      {/* Heading and Icon Section on Top */}
      {isJobsPage && (
        <div className="container mx-auto flex flex-col items-start gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <h3
            className={`${ibmPlexSans.className} text-[16px] sm:text-[18px] md:text-[20px] font-500 text-[#03A9F4]`}
          >
            Fill Out Form To Get enrolled yourself for future jobs opening
          </h3>
        </div>
      )}
      {/* Form Section */}
      <div className="container mx-auto border border-[#D4D0D0] rounded-[10px] sm:rounded-[15px] md:rounded-[20px]">
        <form className="space-y-4 sm:space-y-5 md:space-y-6 p-4 sm:p-5 md:p-6">
          <div>
            <label
              htmlFor="fullName"
              className={`${andika.className} block text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#7A7878] mb-1 sm:mb-2`}
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter Your Full Name"
              className={`${poppins.className} w-full p-3 sm:p-4 border border-[#C8C8C8] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[6px] sm:rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className={`${andika.className} block text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#7A7878] mb-1 sm:mb-2`}
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className={`${poppins.className} w-full p-3 sm:p-4 border border-[#C8C8C8] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[6px] sm:rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className={`${andika.className} block text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#7A7878] mb-1 sm:mb-2`}
            >
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter Phone"
              className={`${poppins.className} w-full p-3 sm:p-4 border border-[#C8C8C8] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[6px] sm:rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
          </div>

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
                className={`${andika.className} block text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#7A7878] mb-1 sm:mb-2`}
              >
                {question}
              </label>
              <div className="flex space-x-4 sm:space-x-6 mt-1">
                <label
                  className={`${poppins.className} flex items-center space-x-1 text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797]`}
                >
                  <input
                    type="radio"
                    name={name}
                    value="Yes"
                    required
                    className="accent-[#084B92] w-3 h-3 sm:w-4 sm:h-4"
                  />{" "}
                  <span>Yes</span>
                </label>
                <label
                  className={`${poppins.className} flex items-center space-x-1 text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797]`}
                >
                  <input
                    type="radio"
                    name={name}
                    value="No"
                    className="accent-[#084B92] w-3 h-3 sm:w-4 sm:h-4"
                  />{" "}
                  <span>No</span>
                </label>
              </div>
            </div>
          ))}

          <div>
            <label
              htmlFor="message"
              className={`${andika.className} block text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#7A7878] mb-1 sm:mb-2`}
            >
              Message / Anything you'd like us to know
            </label>
            <textarea
              id="message"
              placeholder="Type Your Message"
              rows="4"
              className={`${poppins.className} w-full p-3 sm:p-4 border border-[#C8C8C8] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[6px] sm:rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500`}
            ></textarea>
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
            Submit
            <span
              className="flex items-center justify-center bg-white rounded-full ml-[10px] sm:ml-[12px] md:ml-[15px]"
              style={{ width: "28px", height: "28px", padding: "6px" }}
            >
              <ArrowRight className="text-[#084B92] w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
