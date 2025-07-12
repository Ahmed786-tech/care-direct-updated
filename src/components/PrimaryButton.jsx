import React from "react";
import Link from "next/link";
import { heebo } from "@/app/font";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const PrimaryButton = ({ text, link, iconSrc }) => {
  return (
    <Link href={link}>
      <button
        className={`
          ${heebo.className}
          flex items-center justify-center
          bg-[#084B92] hover:bg-[#063b74] transition-colors
          rounded-[50px] 
          px-6 py-3
          min-w-[180px]
          gap-3
        `}
      >
        <span
          className={`
            ${heebo.className}
            text-white
            text-lg font-medium
            whitespace-nowrap
          `}
        >
          {text}
        </span>

        {iconSrc ? (
          <Image
            src={iconSrc}
            alt="Button Icon"
            width={24}
            height={24}
            className="object-contain"
          />
        ) : (
          <div className="bg-white rounded-full p-1.5">
            <ArrowRight className="w-4 h-4 text-[#084B92]" />
          </div>
        )}
      </button>
    </Link>
  );
};

export default PrimaryButton;
