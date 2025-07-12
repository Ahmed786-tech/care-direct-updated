"use client";
import Image from "next/image";

import PropTypes from "prop-types";
import React from "react";

function Badge({ text, iconSrc, alt }) {
  return (
    <div>
      <div className="flex items-center gap-[6px] sm:gap-[8px] md:gap-[10px] bg-[#A8D5BA4D] h-[40px] sm:h-[50px] md:h-[58px] lg:h-[64px] p-3 sm:p-4 md:p-5 lg:p-6 rounded-tl-[12px] sm:rounded-tl-[15px] md:rounded-tl-[18px] lg:rounded-tl-[20px] rounded-tr-[12px] sm:rounded-tr-[15px] md:rounded-tr-[18px] lg:rounded-tr-[20px] justify-content-center rounded-bl-[12px] sm:rounded-bl-[15px] md:rounded-bl-[18px] lg:rounded-bl-[20px] mb-[15px] sm:mb-[20px] md:mb-[25px] lg:mb-[30px] w-fit">
        <Image
          src={iconSrc}
          alt={alt || "icon"}
          width={35}
          height={35}
          className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px]"
        />
        <p
          className={`ibm-plex-sans text-[#5AA678] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Badge;
