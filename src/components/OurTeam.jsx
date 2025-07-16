import React from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import SectionHeadingWithButton from "./SectionHeadingWithButton";
import Badge from "./Badge";
import PrimaryButton from "./PrimaryButton";

const OurTeam = () => {
  const team = [
    {
      name: "Juanita Jones",
      role: "Operations Manager",
      description:
        "With 17 years of experience in the care sector, Juanita Jones brings a wealth of practical knowledge to her role as Operations Manager. Known for her hands-on leadership style, she keeps daily operations running smoothly while always prioritising the highest standards of care.",
      image: "/Images/Team/Juanita.jpg",
      email: "example@example.com",
      phone: "+40 72 322 76 70",
      linkedin: "#",
    },
    {
      name: "Carole Anne Brown",
      role: "CQC Registered Manager",
      description:
        "Carole Anne Brown has dedicated over four decades to the care industry, earning a reputation for excellence in compliance and quality assurance. As our CQC Registered Manager, she ensures our services consistently meet—and often exceed—Care Quality Commission standards.",
      image: "/Images/Team/Carole.jpg",
      email: "example@example.com",
      phone: "+40 72 322 76 70",
      linkedin: "#",
    },
    {
      name: "Iuliana Balcan",
      role: "On-Call Coordinator",
      description:
        "Iuliana Balcan has spent the past nine years making sure that support is always just a call away. As On-Call Coordinator, she plays a vital role in managing after-hours needs with calm efficiency and strong organisational skills.",
      image: "/Images/Team/LulianaBalcan.png",
      email: "example@example.com",
      phone: "+40 72 322 76 70",
      linkedin: "#",
    },
    {
      name: "Ann Holland",
      role: "Training Manager",
      description:
        "With over 40 years in health and social care, Ann brings extensive experience as a qualified adult education tutor and registered manager. She has contributed to key industry publications and holds postgraduate qualifications in education. Ann is passionate about training the next generation of care workers to ensure the highest standards of care delivery.",
      image: "/Images/Team/TrainerAnnHolland.jpg",
      email: "example@example.com",
      phone: "+40 72 322 76 70",
      linkedin: "#",
    },
  ];

  return (
    <div className="relative bg-[#084B9205] py-8 mt-16 sm:py-10 md:py-12 poppins mb-20 sm:mb-24 md:mb-48">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Badge
          text="Team"
          textColor="#A8D5BA"
          badgeColor="#A8D5BA26"
          iconSrc="/Icons/team.svg"
          alt="Team"
        />
        <div className="flex flex-col md:flex-row justify-between justify-items-start mb-6 sm:mb-8 md:mb-10 gap-4 md:gap-0">
          <div className="flex flex-col w-full md:w-[50%]">
            <h2 className="text-[#084B92] text-[24px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-semibold">
              Meet <span className="text-[#03A9F4]">Our Team</span>
            </h2>
            <p className="text-[#888888] text-[14px] sm:text-[15px] md:text-[16px] mt-2 sm:mt-3">
              Meet our dedicated leadership team who bring expertise, passion
              and commitment to delivering exceptional care services.
            </p>
          </div>
          <div className="flex items-center w-full md:w-[50%] justify-start md:justify-end">
            <PrimaryButton
              text="Join Our Team"
              link="/contact"
              iconSrc="/Icons/JoinOurTeam.svg"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {team.map((item, index) => (
            <div
              key={index}
              className="bg-white has-[]: shadow-md rounded-2xl p-1 border border-[#084B9280]"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>

              <div className="p-2 sm:p-3 poppins">
                <h2 className="text-base sm:text-lg lg:text-[18px] font-medium text-[#666666]">
                  {item.name}
                </h2>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10px] sm:text-xs bg-[#084B921A] text-[#084B92] px-2 sm:px-3 py-1 rounded-full font-medium text-center">
                    {item.role}
                  </span>
                </div>

                <p className="text-[11px] sm:text-[12px] text-[#969696] mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
