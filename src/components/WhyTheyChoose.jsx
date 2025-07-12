import React from "react";
import { ibmPlexSans, poppins, heebo } from "@/app/font";
import Badge from "./Badge";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function WhyTheyChoose({
  showButton = true,
  items = [],
  image,
  navyBlueHeading,
  subHeading,
  badgeText,
  badgeIcon,
  buttonText,
}) {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-14 lg:py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10 ">
        <div className="w-full lg:w-1/2 xl:w-2/4">
          <Badge text={badgeText} iconSrc={badgeIcon} />

          <h3
            className={`${ibmPlexSans.className} text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#084B92] mt-3`}
          >
            {navyBlueHeading}
            <span className="text-[#03A9F4]"> {subHeading}</span>
          </h3>

          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="rounded-lg shadow-lg p-4 sm:p-6 flex items-center"
              >
                <div className="flex flex-row items-center gap-3 sm:gap-4">
                  <Image
                    src={item.icon}
                    alt={`Icon ${index + 1}`}
                    width={35}
                    height={35}
                    className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px]"
                  />
                  <div>
                    <div
                      className={`${poppins.className} text-[13px] sm:text-[14px] text-[#888888]`}
                    >
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {showButton && (
              <button
                className={`${heebo.className} w-full h-full sm:w-auto rounded-[10px] p-3 sm:p-4 bg-[#084B92] text-white text-[14px] sm:text-[16px] transition flex items-center justify-center`}
              >
                {buttonText}
                <span
                  className="flex items-center justify-center bg-white rounded-full ml-3"
                  style={{ width: 32, height: 32, padding: 6 }}
                >
                  <ArrowRight className="text-[#084B92] w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </button>
            )}
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src={image}
            alt="Caregiver with elderly"
            width={800}
            height={700}
            className="rounded-[10px] mx-auto object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
