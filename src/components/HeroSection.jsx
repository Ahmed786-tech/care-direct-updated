import React from "react";
import Badge from "@/components/Badge";
import { ibmPlexSans } from "@/app/font";
import { poppins } from "@/app/font";
import { heebo } from "@/app/font";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const HeroSection = ({
  badgeColor,
  badgeTextColor,
  badgeText,
  badgeIcon,
  mainHeading,
  NavyBlueHeading,
  subHeading,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  heroImage,
  heroImageAlt,
  showButtons = true,
}) => {
  const pathname = usePathname();
  return (
    <>
      <section
        className={`relative flex flex-col justify-center h-[85vh] items-center`}
      >
        {/* Background Image*/}

        <div className="absolute inset-0">
          <img
            src={
              pathname === "/privacy"
                ? "/Images/privacypolicy-hero.png"
                : heroImage
            }
            alt="Hero Bg Image"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto grid md:grid-cols-2 gap-6 lg:gap-10 px-2 sm:px-6 py-6 items-center justify-center md:justify-start">
          {/* Left Text Section */}
          <div
            className={`${
              pathname !== "/privacy" ? "bg-[#ffffff]/[.85]" : ""
            }  rounded-[20px] flex flex-col px-3 sm:px-4 md:px-5 lg:px-7 h-[fit-content] py-6 sm:py-7 md:py-8 lg:py-10 justify-center md:items-start relative w-[fit-content]`}
          >
            <Badge
              text={badgeText}
              textColor={badgeTextColor}
              badgeColor={badgeColor}
              iconSrc={badgeIcon}
            />

            <div
              className={`${ibmPlexSans.className} ${
                pathname !== "/" ? "-mt-8 md:-mt-14" : ""
              }`}
            >
              <h1
                className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#084B92] mb-2"
                style={{ fontWeight: 700 }}
              >
                <span className="text-xl ">{mainHeading}</span>
                <br />
                {NavyBlueHeading && (
                  <span
                    className="text-[#084B92] text-2xl sm:text-2xl md:text-3xl lg:text-[40px]"
                    style={{ fontWeight: 700, marginRight: 10 }}
                  >
                    {NavyBlueHeading}
                  </span>
                )}
                <span
                  className="text-[#03A9F4] text-2xl sm:text-2xl md:text-3xl lg:text-[40px]"
                  style={{ fontWeight: 700 }}
                >
                  {subHeading}
                </span>
              </h1>
            </div>
            <p
              className={`${poppins.className} text-[#000000] text-sm sm:text-sm md:text-[15px] lg:text-base mb-4 sm:mb-5 md:mb-6`}
              style={{ fontWeight: 400 }}
            >
              {description}
            </p>
            {showButtons && (
              <div className="flex flex-col lg:flex-row justify-center items-center gap-4 w-full mt-4 sm:mt-5 md:mt-[25px] lg:mt-[15px]">
                <Link
                  href={primaryButtonLink}
                  className="bg-[#084B92] w-full md:w-[300px] lg:flex-1 text-white text-[14px] md:text-[14px] lg:text-[15px] font-medium rounded-full px-6 py-2.5 sm:py-2.5 md:py-3 flex items-center justify-center poppins cursor-pointer hover:bg-[#03A9F4] transition-colors"
                >
                  {primaryButtonText}
                  <span className="rounded-full ml-2 bg-white">
                    <Image
                      src="/Icons/ButtonArrowRight.svg"
                      alt={primaryButtonText}
                      className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] md:w-[27px] md:h-[27px] lg:w-[30px] lg:h-[30px]"
                      width={30}
                      height={30}
                    />
                  </span>
                </Link>

                <div className={`${heebo.className} hidden sm:block`}>
                  <span
                    className="px-2 text-[#084B92] text-sm md:text-sm lg:text-[15px]"
                    style={{ fontWeight: 400 }}
                  >
                    or
                  </span>
                </div>

                <Link
                  href={secondaryButtonLink}
                  className="bg-transparent w-full lg:flex-1 text-[#03A9F4] rounded-full px-4 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-2.5 md:py-3 flex items-center poppins cursor-pointer border border-[#03A9F4] text-center justify-center text-[14px] md:text-[14px] lg:text-[15px] hover:bg-[#03A9F4] hover:text-white transition-colors"
                >
                  {secondaryButtonText}
                </Link>
              </div>
            )}
          </div>
          {/* Right Image Section */}
          {pathname === "/privacy" && (
            <div className="relative flex justify-center items-center">
              <Image
                src={heroImage}
                alt={heroImageAlt}
                width={720.4}
                height={550}
                className="w-full h-auto max-w-[550px]"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
