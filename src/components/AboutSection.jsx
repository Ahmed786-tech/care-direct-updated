import React from "react";
import Image from "next/image";
import { ibmPlexSans, poppins } from "@/app/font";
import Badge from "./Badge";

const AboutSection = ({
  badgeText,
  badgeIcon,
  NavyBlueHeading,
  subHeading,
  image,
  description,
  isAboutUsPage,
  cardData,
  description1,
  description2,
}) => {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:p-[60px] flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 bg-white">
      {/* Left Side - Single Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <Image
          src={image}
          alt="Nurse with clipboard"
          width={750}
          height={510.61}
          className="rounded-xl object-contain w-full h-auto max-w-[500px] lg:max-w-none"
        />
      </div>

      {/* Right Side - Text and Principles */}
      <div className="w-full lg:w-1/2 flex flex-col gap-2.5 mt-6 lg:mt-0">
        <div className="flex items-center gap-2">
          <Badge text={badgeText} iconSrc={badgeIcon} />
        </div>

        <h2
          className={`${ibmPlexSans.className} text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-blue-900`}
        >
          {NavyBlueHeading} <span className="text-[#03A9F4]">{subHeading}</span>
        </h2>
        <p
          className={`${poppins.className} text-[#03A9F4] font-medium text-[10px] sm:text-[11px] md:text-[12px]`}
        >
          {description}
        </p>

        <p
          className={`${poppins.className} text-[#888888] text-[14px] sm:text-[15px] md:text-[16px]`}
        >
          {description1}
        </p>
        <p
          className={`${poppins.className} text-[#888888] text-[14px] sm:text-[15px] md:text-[16px]`}
        >
          {description2}
        </p>

        {isAboutUsPage && (
          <>
            <h3
              className={`${ibmPlexSans.className} text-[20px] sm:text-[22px] md:text-[25px] font-bold text-[#084B92] mt-4 sm:mt-6`}
            >
              Our Principles
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mt-4">
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className="bg-white shadow-md border border-gray-200 rounded-[10px] p-3 sm:p-4 flex items-start gap-4 sm:gap-5 md:gap-6"
                >
                  <div className="bg-[#084B920D] p-2 sm:p-3 Border rounded-[5px] flex-shrink-0">
                    <Image
                      src={card.icon}
                      alt={`${card.title} Icon`}
                      width={32}
                      height={32}
                      className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]"
                    />
                  </div>
                  <div>
                    <h4
                      className={`${poppins.className} text-[#03A9F4] font-semibold text-[14px] sm:text-[15px] md:text-[16px]`}
                    >
                      {card.title}
                    </h4>
                    <p
                      className={`${poppins.className} text-[#888888] text-[12px] sm:text-[13px] md:text-[14px]`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
