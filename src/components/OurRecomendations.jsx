import React from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import SectionHeadingWithButton from "./SectionHeadingWithButton";
import Badge from "./Badge";

const OurRecomendations = () => {
  const recommendations = [
    {
      name: "Georgiana Adelina Virlan",
      role: "CARE WORKER",
      description:
        "Amazing people and amazing team! Brilliant training and I've learned a lot with you guys! You the best!!",
      image: "/Images/Recomendations/Recomendation1.png",
      email: "georgiana@caredirect.com",
      phone: "+44 7700 900077",
      linkedin: "#",
      rating: 5,
    },
    {
      name: "Sredha Shine",
      role: "SENIOR CARER",
      description:
        "Wonderful company! The staff is exceptional! I loved my experience with them!",
      image: "/Images/Recomendations/Recomendation2.png",
      email: "sunitha@caredirect.com",
      phone: "+44 7700 900088",
      linkedin: "#",
      rating: 5,
    },
    {
      name: "Juanita Jones",
      role: "REGISTERED NURSE",
      description:
        "I have now worked for Care Direct for nearly a year. Fantastic Job and wonderful Team to work with. ",
      image: "/Images/Recomendations/Recomendation3.png",
      email: "juanita@caredirect.com",
      phone: "+44 7700 900099",
      linkedin: "#",
      rating: 5,
    },
    {
      name: "Cat Ford",
      role: "CARE MANAGER",
      description:
        "A great place to work, all the staff are friendly and always happy to help. Highly recommend!!",
      image: "/Images/Recomendations/Recomendation4.png",
      email: "carl@caredirect.com",
      phone: "+44 7700 900066",
      linkedin: "#",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-12 md:py-14 lg:py-16 ">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <Badge
          className=""
          text="Recommendations"
          textColor="#A8D5BA"
          badgeColor="#A8D5BA26"
          iconSrc="/Icons/Recommendations.svg"
          alt="Recommendations"
        />
        <div className="mb-8 sm:mb-10 md:mb-12 relative z-10">
          <SectionHeadingWithButton
            heading="Our"
            span="Recommendations"
            description="These reviews share real stories of compassionate, dependable support from our team. They highlight our commitment to caring staffing solutions that feel like family — ensuring peace of mind, trust, and heartfelt dedication in every placement."
            buttonText="See on Google"
            buttonIcon="/Icons/ChatNowIcon.svg"
            buttonLink="/contact"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {recommendations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow duration-300 border border-[#084B9280]"
            >
              <div className="text-start">
                <h2 className="text-lg sm:text-xl font-semibold text-[#666666] mb-1 sm:mb-2">
                  {item.name}
                </h2>
                <div className="flex flex-col items-start text-start mb-1 sm:mb-2">
                  <div className="flex items-start justify-start mb-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-[#969696] text-xs sm:text-sm md:text-base mb-3 sm:mb-4 text-start line-clamp-4 sm:line-clamp-none">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurRecomendations;
