"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SectionHeadingWithButton = ({
  heading,
  span,
  description,
  buttonText,
  buttonIcon = "/Icons/ButtonArrowRight.svg",
  buttonLink,
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row justify-between justify-items-start mb-6 sm:mb-8 md:mb-10 gap-4 md:gap-0">
      <div className="flex flex-col w-full md:w-[50%]">
        <h2 className="text-[#084B92] text-[24px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-semibold">
          {heading} <span className="text-[#03A9F4]">{span}</span>
        </h2>
        <p className="text-[#888888] text-[14px] sm:text-[15px] md:text-[16px] mt-2 sm:mt-3">
          {description}
        </p>
      </div>
      <div className="flex items-center w-full md:w-[50%] justify-center md:justify-end">
        <button
          className="bg-[#084B92] text-white rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 flex items-center poppins cursor-pointer text-[14px] sm:text-[15px] md:text-[16px] w-full md:w-auto justify-center"
          onClick={() => router.push(buttonLink)}
        >
          {buttonText}
          <span className="rounded-full ml-2 sm:ml-3 bg-white">
            <Image
              src={buttonIcon}
              alt={buttonText}
              className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[35px]"
              width={20}
              height={20}
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SectionHeadingWithButton;
