import React from "react";
import { ibmPlexSans, poppins } from "@/app/font";
import Badge from "./Badge";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

export default function GettingStartedinServices({
  badgeTextColor,
  badgeColor,
  badgeText,
  badgeIcon,
  buttonText,
  buttonLink,
  navyBlueHeading,
  subHeading,
  centerContent,
  stepsData,
}) {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-[#084B9205]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Badge
                text={badgeText}
                textColor={badgeTextColor || "#000"}
                badgeColor={badgeColor || "#000"}
                iconSrc={badgeIcon}
              />
            </div>
            <h2
              className={`${ibmPlexSans.className} text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#004990]`}
            >
              {navyBlueHeading}{" "}
              <span className="text-[#03A9F4]">{subHeading}</span>
            </h2>
          </div>

          <PrimaryButton text={buttonText} link={buttonLink} />
        </div>

        {/* Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Step 1 */}
            <div className="relative border border-[#A2CFFF] bg-white rounded-[20px] p-4 sm:p-5 md:p-6 h-auto sm:h-[200px] md:h-[220px] w-full flex flex-col justify-center">
              <span className="absolute z-10 top-[10px] sm:top-[15px] md:top-[20px] right-[15px] sm:right-[20px] md:right-[25px] text-[40px] sm:text-[52px] md:text-[64px] font-bold text-[#FFF4B1B2]">
                {stepsData[0].number}
              </span>
              <div className="flex items-center gap-3">
                <Image
                  src={stepsData[0].icon}
                  alt="Step 1 Icon"
                  width={60}
                  height={60}
                  className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px] object-contain"
                />
              </div>
              <p
                className={`${poppins.className} text-[14px] sm:text-[15px] md:text-[16px] font-normal text-gray-500 mt-4`}
              >
                {stepsData[0].description}
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative border bg-white border-[#A2CFFF] rounded-[20px] p-4 sm:p-5 md:p-6 h-auto sm:h-[200px] md:h-[220px] w-full flex flex-col justify-center">
              <span className="absolute top-[10px] sm:top-[15px] md:top-[20px] right-[15px] sm:right-[20px] md:right-[25px] text-[40px] sm:text-[52px] md:text-[64px] font-bold text-[#FFF4B1B2]">
                {stepsData[1].number}
              </span>
              <div className="flex items-center gap-3">
                <Image
                  src={stepsData[1].icon}
                  alt="Step 2 Icon"
                  width={60}
                  height={60}
                  className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px] object-contain"
                />
              </div>
              <p
                className={`${poppins.className} text-[14px] sm:text-[15px] md:text-[16px] font-normal text-gray-500 mt-4`}
              >
                {stepsData[1].description}
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="px-2 sm:px-4 md:px-6 lg:px-8 my-6 lg:my-0">
            <div className="flex flex-col items-center gap-4">
              {/* Top Label Card */}
              <div className="w-full max-w-[450px] h-auto min-h-[80px] sm:min-h-[90px] md:min-h-[100px] bg-[#084B920D] text-center rounded-[10px] poppins text-[14px] sm:text-[15px] md:text-[16px] font-normal text-[#888888] flex items-center justify-center px-4 sm:px-5 md:px-6 py-4">
                <p>{centerContent.labelText}</p>
              </div>

              {/* Center Image */}
              <div className="w-full max-w-[450px]">
                <Image
                  src={centerContent.image}
                  alt={centerContent.imageAlt}
                  width={450}
                  height={365}
                  className="w-full h-auto object-cover rounded-b-[20px]"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Step 3 */}
            <div className="relative border bg-white border-[#A2CFFF] rounded-[20px] p-4 sm:p-5 md:p-6 h-auto sm:h-[200px] md:h-[220px] w-full flex flex-col justify-center">
              <span className="absolute top-[10px] sm:top-[15px] md:top-[20px] right-[15px] sm:right-[20px] md:right-[25px] text-[40px] sm:text-[52px] md:text-[64px] font-bold text-[#FFF4B1B2]">
                {stepsData[2].number}
              </span>
              <div className="flex items-center gap-3">
                <Image
                  src={stepsData[2].icon}
                  alt="Step 3 Icon"
                  width={60}
                  height={60}
                  className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px] object-contain"
                />
              </div>
              <p
                className={`${poppins.className} text-[14px] sm:text-[15px] md:text-[16px] font-normal text-gray-500 mt-4`}
              >
                {stepsData[2].description}
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative border bg-white border-[#A2CFFF] rounded-[20px] p-4 sm:p-5 md:p-6 h-auto sm:h-[200px] md:h-[220px] w-full flex flex-col justify-center">
              <span className="absolute top-[10px] sm:top-[15px] md:top-[20px] right-[15px] sm:right-[20px] md:right-[25px] text-[40px] sm:text-[52px] md:text-[64px] font-bold text-[#FFF4B1B2]">
                {stepsData[3].number}
              </span>
              <div className="flex items-center gap-3">
                <Image
                  src={stepsData[3].icon}
                  alt="Step 4 Icon"
                  width={60}
                  height={60}
                  className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] md:w-[80px] md:h-[80px] object-contain"
                />
              </div>
              <p
                className={`${poppins.className} text-[14px] sm:text-[15px] md:text-[16px] font-normal text-gray-500 mt-4`}
              >
                {stepsData[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
