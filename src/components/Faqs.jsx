import React, { useState } from "react";
import { ibmPlexSans, poppins, heebo } from "@/app/font";
import Badge from "./Badge";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

export default function Faqs({
  faqs,
  badgeText,
  badgeIcon,
  buttonText,
  buttonLink,
  navyBlueHeading,
  descriptionText,
  subHeading,
  image,
  iconSrc = "/Images/Faq-4.svg",
}) {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="container mx-auto bg-white py-8 sm:py-12 md:py-16 lg:py-[100px] px-4 sm:px-6 md:px-8 mb-20 sm:mb-24 md:mb-30">
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-start">
        {/* Left Side - Text & Image */}
        <div className="flex-1 w-full md:w-1/2">
          <Badge text={badgeText} iconSrc={badgeIcon} />
          <h2
            className={`${ibmPlexSans.className} text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-bold text-blue-900 mb-3 sm:mb-4`}
          >
            {navyBlueHeading}{" "}
            <span className="text-[#03A9F4]">{subHeading}</span>
          </h2>
          <p
            className={`${poppins.className} text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] font-400 mb-4 sm:mb-5 md:mb-6`}
          >
            {descriptionText}
          </p>
          <img
            src={image}
            alt="FAQ Section"
            className="rounded-[15px] sm:rounded-[18px] md:rounded-[20px] shadow-md w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[588.84px] object-cover mt-[20px] sm:mt-[25px] md:mt-[30px] border-3 border-[#03A9F4]"
          />
        </div>

        {/* Right Side - FAQ Accordion */}
        <div className="flex-1 w-full md:w-1/2 flex flex-col items-start md:items-end mt-10 md:mt-22">
          <PrimaryButton
            text={buttonText}
            link={buttonLink}
            iconSrc={iconSrc}
          />

          <div className="space-y-3 sm:space-y-4 mt-10  md:mt-16  w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-3 sm:mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between text-blue-900 items-center px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 font-medium text-left border border-gray-300 rounded-full"
                >
                  <span
                    className={`${poppins.className} text-[14px] sm:text-[15px] md:text-[16px] pr-2`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`${
                      poppins.className
                    } h-4 w-4 sm:h-5 sm:w-5 text-blue-900 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div
                    className={`${poppins.className} mt-2 p-4 sm:p-5 md:p-6 text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] sm:leading-[22px] md:leading-[24px] text-gray-600 bg-white rounded-[15px] sm:rounded-[18px] md:rounded-[20px] border border-gray-200 shadow-sm`}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
