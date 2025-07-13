import React from "react";
import { ibmPlexSans, poppins, heebo } from "@/app/font";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

export default function WhatWeProvideServices({
  badgeText,
  badgeIcon,
  services,
  title,
  buttonText,
  buttonLink,
}) {
  return (
    <section
      className="min-h-[650px] py-8 sm:py-10 md:py-12 px-4 sm:px-5 md:px-6 overflow-hidden relative z-10" // Changed overflow-visible to overflow-hidden
      // className="min-h-[630px] py-8 sm:py-10 md:py-12 px-4 sm:px-5 md:px-6 overflow-hidden" // Changed overflow-visible to overflow-hidden
      style={{
        backgroundImage: "url('/Images/Background-5.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 md:mb-10 gap-4 sm:gap-0">
          <div className="flex flex-col items-start gap-3 sm:gap-4">
            <div>
              <div className="flex items-center gap-[8px] sm:gap-[10px] bg-[#A8D5BA26] h-[48px] sm:h-[56px] md:h-[64px] p-4 sm:p-5 md:p-6 rounded-tl-[15px] sm:rounded-tl-[20px] rounded-tr-[15px] sm:rounded-tr-[20px] rounded-bl-[15px] sm:rounded-bl-[20px] mb-[20px] sm:mb-[25px] md:mb-[30px] w-fit">
                <Image
                  src={badgeIcon}
                  alt="Workers icon"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]"
                />
                <p
                  className={`${ibmPlexSans.className} text-white text-[16px] sm:text-[18px] md:text-[20px] font-medium`}
                >
                  {badgeText}
                </p>
              </div>
            </div>
            <h2
              className={`${ibmPlexSans.className} text-white text-[28px] sm:text-[35px] md:text-[42px] font-bold`}
            >
              {title}
            </h2>
          </div>
          <Link
            href={buttonLink}
            className={`${heebo.className} text-white border border-white px-6 sm:px-7 md:px-9 py-2 sm:py-2.5 md:py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-[#084B92] transition text-[14px] sm:text-[15px] md:text-[16px]`}
          >
            {buttonText}
            <span
              className="flex items-center justify-center bg-white rounded-full"
              style={{ width: "30px", height: "30px", padding: "6px" }}
            >
              <ArrowRight className="text-[#084B92] w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </Link>
        </div>

        {/* Slider */}
        <div className="px-[20px] sm:px-[30px] md:px-[40px]">
          {" "}
          {/* Added padding container for slider */}
          <Slider
            // dots={true}
            infinite={true}
            speed={500}
            slidesToShow={4}
            slidesToScroll={1}
            // appendDots={(dots) => (
            //   <div>
            //     <ul className="custom-dots flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
            //       {dots}
            //     </ul>
            //   </div>
            // )}
            customPaging={(i) => (
              <div className="dot w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[13px] md:h-[13px] rounded-full bg-[#5F8EBB] transition-all duration-300 mt-[35px] sm:mt-[40px] md:mt-[45px]" />
            )}
            responsive={[
              {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="px-2 relative overflow-visible mt-[80px] sm:mt-[90px] md:mt-[100px]"
              >
                {/* Card */}
                <div className="relative bg-white border border-[#A2CFFF] rounded-[15px] sm:rounded-[20px] pt-[70px] sm:pt-[80px] md:pt-[90px] px-3 sm:px-4 text-center shadow-md z-10 h-[180px] sm:h-[190px] md:h-[200px]">
                  <h3
                    className={`${poppins.className} text-[#084B92] font-bold text-[16px] sm:text-[18px] md:text-[20px] mt-2`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`${poppins.className} text-[#888888] text-[14px] sm:text-[15px] md:text-[16px] mt-1`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Floating Image */}
                <div className="absolute top-[-70px] sm:top-[-80px] md:top-[-90px] left-1/2 transform -translate-x-1/2 w-[240px] sm:w-[260px] md:w-[280px] h-[142px] sm:h-[152px] md:h-[162.69px] rounded-[15px] sm:rounded-[20px] border-1 border-white shadow-lg z-20 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={244.82}
                    height={162.69}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
