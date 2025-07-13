"use client";
import { ibmPlexSans, poppins, heebo, andika, roboto } from "@/app/font";
import Link from "next/link";
import Image from "next/image";

import ReCAPTCHA from "react-google-recaptcha";
import { ArrowRight, Bold } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/app/Footer";
import Badge from "@/components/Badge";
import OurRecomendations from "@/components/OurRecomendations";
import React from "react";
import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurServices";
import ContactForm from "@/components/ContactForm";
import OrbitAnimation from "@/components/OrbitAnimation";
import Snowfall from "@/components/SnowFall";

export default function Homepage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Data for featured roles and services
  const featuredRoles = [
    {
      formattedTitle: "Featured",
      title: " Roles",
      description:
        "Seeking a career where your work matters? Care Direct is the place to grow.",
      link: "View Job",
    },
    { title: "Registered Nurses", link: "View Job" },
    { title: "Care Workers", link: "Careers" },
    { title: "Download Brochure", link: "Careers" },
  ];

  const cardData = [
    {
      id: 1,
      title:
        "From RGN and RMNs to senior carers, we provide fully qualified, ethically recruited professionals for roles in both community and residential settings.",
      icon: "/Images/Work-face.svg",
    },
    {
      id: 2,
      title: "RMN-qualified and DBS-cleared candidates",
      icon: "/Images/Work-face.svg",
    },
    {
      id: 3,
      title: "Rigorous vetting: interviews, references, compliance",
      icon: "/Images/Work-face.svg",
    },
    {
      id: 4,
      title: "Structured onboarding and role-specific induction",
      icon: "/Images/Work-face.svg",
    },
    {
      id: 5,
      title: "Ongoing supervision and quality reviews",
      icon: "/Images/Work-face.svg",
    },
  ];

  return (
    <main className="bg-white w-full overflow-x-hidden">
      <Snowfall />
      <div className="">
        <HeroSection

          badgeText="12 years of trusted care solutions"
          badgeTextColor="#5AA678"
          badgeColor="#A8D5BA4D"
          badgeIcon="/Images/Care-solution.svg"
          mainHeading="Quality Care Starts With The Right People!"
          subHeading="That's Exactly What We Deliver."
          description="Every nurse and carer is DBS-checked, RGN and RMN-qualified where required, and trained to meet NHS-aligned standards, regulated by the CQC."
          primaryButtonText="Find Trusted Local Care"
          primaryButtonLink="/career"
          secondaryButtonText="Staff Your Facility"
          secondaryButtonLink="/career"
          heroImage="/Images/homepage-hero.png"
          heroImageAlt="Caregiver with patient"
        />
      </div>

      <div className="bg-white">

        <section className="container mx-auto mt-[20px]  ">
          <div className="container mx-auto px-4">

            <div className="relative from-lightBlue to-backgroundGray h-52 rounded-[80px] -mb-10 sm:py-72 md:py-52 lg:py-40 xl:py-28 z-10">
              <div className="absolute top-[300px] md:top-[300px] lg:top-[270px] xl:top-[260px] 2xl:top-[245px] left-1/2 transform -translate-x-1/2 w-full -mt-75  px-4">
                <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 lg:flex lg:flex-row lg:justify-center lg:gap-0">
                  {featuredRoles.map((role, index) => {
                    const isFirstCard = index === 0;
                    const showButton = index === 1 || index === 2 || index === 3;
                    const isLastCard = index === 3;

                    return (
                      <div
                        key={index}
                        className={` text-center
              w-full md:w-auto lg:w-[320px] 
              h-[186.96484375px]
              hover:-translate-y-1 transition-transform 
              flex flex-col items-center justify-center
              mb-4 md:mb-0
              ${!isFirstCard ? "lg:-ml-[1px]" : ""}
              ${isLastCard ? "lg:rounded-r-[20px]" : ""}
              ${isFirstCard
                            ? "bg-white shadow-lg rounded-[20px] lg:rounded-l-[20px] lg:rounded-r-none"
                            : "rounded-[20px] lg:rounded-none"
                          }
              ${index === 1
                            ? "bg-[url(/Images/Background2.png)] bg-cover bg-center"
                            : ""
                          }
              ${index === 2
                            ? "bg-[url(/Images/Background3.png)] bg-cover bg-center"
                            : ""
                          }
              ${index === 3
                            ? "bg-[url(/Images/Background2.png)] bg-cover bg-center"
                            : ""
                          }`}
                      >
                        <div
                          className={`${ibmPlexSans.className
                            } text-center justify-center ${isFirstCard ? "items-start" : "items-center"
                            } flex flex-col p-4 sm:p-5 md:p-6 text-white `}
                        >

                          {isFirstCard ? (
                            <h3 className="text-[20px] sm:text-[21px] md:text-[22px] lg:text-[25px] font-bold mb-2 text-center">
                              <span className="text-[#084B92]">
                                {role.formattedTitle}
                              </span>
                              <span className="text-[#03A9F4]">{role.title}</span>
                            </h3>
                          ) : (
                            <h3 className="text-[16px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-bold mb-2 p-2 sm:p-2 md:p-3 text-white">
                              {role.title}
                            </h3>
                          )}

                          {role.description && (
                            <p
                              className={`${poppins.className
                                } text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-400 text-left mb-3 sm:mb-3 md:mb-4 ${isFirstCard ? "text-[#979797]" : "text-white"
                                }`}
                            >
                              {role.description}
                            </p>
                          )}

                          {showButton && (
                            <a
                              href="#careerjob"
                              className={`${heebo.className} flex flex-row items-center gap-2 justify-center text-white text-sm font-medium border-1 border-white px-4 py-2 rounded-full`}
                            >
                              <span>View Job</span>
                              <ArrowRight className="text-white w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[19px] md:h-[19px] lg:w-[20px] lg:h-[20px] font-bold" />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Lower Section with Slider */}
            <OurServices />
          </div>
        </section>
        {/* Eclipse Image Container */}

        <div className="hidden md:block absolute left-0 -top-28- transform -translate-y-1/4 z-0">
          <div className="w-[200px] h-[300px] sm:w-[250px] sm:h-[350px] md:w-[500px] md:h-[600px] relative ml-[-140px]">
            <Image
              src="/Images/Oval.svg"
              alt="Decorative oval"
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              priority={false}
            />
          </div>
        </div>


        <section className="container  mx-auto bg-white py-8 sm:py-12 md:py-14 lg:py-16">
          <div className="container mx-auto px-4">
            <div
              className="bg-blue-900  rounded-[20px] sm:rounded-[25px] md:rounded-[30px] px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 text-white bg-center bg-cover relative z-10"
              style={{ backgroundImage: 'url("/Images/Background-3.png")' }}
            >
              <div className="text-center mb-6 sm:mb-8 md:mb-10">
                <h2
                  className={`${ibmPlexSans.className} text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold mb-3 sm:mb-4`}
                >
                  Built To Strengthen The UK's Care Workforce
                </h2>
                <p
                  className={`${poppins.className} text-[14px] sm:text-[15px] md:text-[16px] font-500 mb-2 max-w-3xl mx-auto px-2 sm:px-4`}
                >
                  Practical Support for Pressured Providers From last-minute
                  staff shortages to long-term workforce planning, we deliver
                  professional care teams who are prepared, dependable, and
                  fully compliant.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                <div className="w-full rounded-[20px] sm:rounded-[25px] md:rounded-[30px] bg-white bg-opacity-10 text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
                  <Image
                    src="/Images/Hand.svg"
                    alt="How We Deliver"
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
                  />
                  <p
                    className={`${poppins.className} text-[18px] sm:text-[20px] md:text-[22px] font-bold text-[#084B92]`}
                  >
                    How We <span className="text-[#03A9F4]">Deliver</span>
                  </p>
                </div>

                {cardData.map((card, index) => (
                  <div
                    key={card.id}
                    className="w-full rounded-[20px] sm:rounded-[25px] md:rounded-[30px] bg-white bg-opacity-10 text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative"
                  >
                    {/* Step Number */}
                    <span className="absolute top-[25px] sm:top-[30px] md:top-[35px] right-[15px] sm:right-[20px] md:right-[25px] text-[40px] sm:text-[50px] md:text-[60px] font-bold text-[#084B921A] z-0 leading-none">
                      {`0${card.id}`}
                    </span>

                    {/* Icon and Text */}
                    <div className="absolute top-[20px] sm:top-[25px] md:top-[30px] left-[20px] sm:left-[25px] md:left-[30px] z-10">
                      <Image
                        src={card.icon}
                        alt={`Icon ${card.id}`}
                        width={60}
                        height={60}
                        className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px]"
                      />
                    </div>
                    <p
                      className={`${poppins.className} text-[14px] sm:text-[15px] md:text-[16px] text-center font-300 text-[#888888] mt-[80px] sm:mt-[90px] md:mt-[100px] z-10`}
                    >
                      {card.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto bg-white py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 h-[1140px]">
            <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2">

                <Badge text="Work with us"
                  textColor="#A8D5BA"
                  badgeColor="#A8D5BA26"
                  iconSrc="/Images/Work-ba.svg" />
                <div className={`${ibmPlexSans.className} max-w-xl`}>
                  <h3 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-bold text-blue-900 mt-3">
                    7 Reasons To
                    <span className="text-[#03A9F4]"> Work With Us</span>
                  </h3>
                </div>
                <p
                  className={`${poppins.className} mt-3 sm:mt-4 text-[14px] sm:text-[15px] md:text-[16px] font-300 text-[#888888] max-w-xl`}
                >
                  As a care provider recruitment agency, our success comes from
                  the heartfelt connections we build with our incredible members
                  of staff. If you’re thinking about joining our family, here
                  are seven wonderful reasons to Join us.
                </p>
                <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {[
                    {
                      number: "01",
                      text: "Weekly pay & competitive rates",
                      icon: "/Images/Icon-1.svg",
                    },
                    {
                      number: "02",
                      text: "Accredited training aligned with NHS & CQC",
                      icon: "/Images/Icon-2.svg",
                    },
                    {
                      number: "03",
                      text: "Consistent shift planning & weekly rotas",
                      icon: "/Images/Icon-3.svg",
                    },
                    {
                      number: "04",
                      text: "Transport support when needed",
                      icon: "/Images/Icon-4.svg",
                    },
                    {
                      number: "05",
                      text: "Secure bookings & team continuity",
                      icon: "/Images/Icon-5.svg",
                    },
                    {
                      number: "06",
                      text: "Regular supervision & support",
                      icon: "/Images/Icon-6.svg",
                    },
                    {
                      number: "07",
                      text: "Clear career progression",
                      icon: "/Images/Icon-7.svg",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="relative p-4 sm:p-5 md:p-6 rounded-lg shadow-lg bg-[#084B920D] bg-cover bg-center"
                    >
                      <div className="flex flex-col items-center rounded-lg w-full">
                        <img
                          src={item.icon}
                          alt={`Icon ${item.number}`}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                        />
                        <div>
                          <div className="poppins text-[#084B92] text-[24px] sm:text-[30px] md:text-[36px] font-bold opacity-10 absolute top-0 left-2">
                            {item.number}
                          </div>
                          <div
                            className={`${poppins.className} text-[14px] sm:text-[15px] md:text-[16px] text-[#4A4848] text-center font-300 mt-3 sm:mt-4`}
                          >
                            {item.text}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Button aligned with the 7th card */}
                  <Link
                    href="/career"
                    className={`${heebo.className} rounded-[10px] p-4 sm:p-5 md:p-6 bg-[#084B92] text-white text-[14px] sm:text-[15px] md:text-[16px] hover:bg-[#083B91] transition flex items-center justify-center cursor-pointer`}
                  >
                    Start Your Journey With Us
                    <span
                      className="flex items-center justify-center bg-white rounded-full ml-[10px] sm:ml-[12px] md:ml-[15px]"
                      style={{ width: "28px", height: "28px", padding: "6px" }}
                    >
                      <ArrowRight className="text-[#084B92] w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 h-[1140px] flex justify-center items-center">
                <div className="flex items-center justify-center w-full h-full">
                  {isMobile ? (
                    <div className="w-full h-full">
                      <img
                        src="/Images/staticOrbitImage.png"
                        alt="Homepage Image"
                        className="w-full h-[300px] object-contain"
                      />
                    </div>
                  ) : (
                    <div>
                      <OrbitAnimation />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="hidden md:block absolute right-0 -top-28- transform -translate-y-1/2 z-0">
          <div className="w-[200px] h-[300px] sm:w-[250px] sm:h-[350px] md:w-[500px] md:h-[600px] relative mr-[-150px]   ">
            <Image
              src="/Images/Oval.svg"
              alt="Decorative oval"
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                transform: "scaleX(-1)",
              }}
              priority={false}
            />
          </div>
        </div>

        <section
          className={`${isMobile && "mt-[350px]"
            } container mx-auto bg-[#084B920D] py-8 sm:py-12 md:py-16 relative z-10`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8">
              <div className="w-full">
                <div>
                  <Badge text="Blogs"
                    textColor="#A8D5BA"
                    badgeColor="#A8D5BA26"
                    iconSrc="/Images/Blogs.svg" />
                  <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4 sm:gap-0">
                    <h3
                      className={`${ibmPlexSans.className} text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-blue-900 text-center sm:text-left`}
                    >
                      Care Direct{" "}
                      <span className="text-[#03A9F4]">Blogs</span>
                    </h3>
                    <a
                      href="#"
                      className={`${heebo.className} inline-flex items-center justify-center bg-[#084B92] text-white text-[12px] sm:text-sm hover:bg-opacity-90 px-6 sm:px-8 py-3 sm:py-4 rounded-full whitespace-nowrap`}
                    >
                      Read All Articles
                      <span
                        className="flex items-center justify-center bg-white rounded-full ml-[10px] sm:ml-[15px]"
                        style={{ width: "28px", height: "28px", padding: "6px" }}
                      >
                        <ArrowRight className="text-[#084B92] w-4 h-4 sm:w-5 sm:h-5" />
                      </span>
                    </a>
                  </div>


                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  image: "/Images/Card-img5.png",
                  title: "How to Choose Home Care that Feels Like Family",
                  description:
                    "Finding the right home care is crucial for your loved one's wellbeing. Learn how to evaluate care providers, understand different care options, and ensure your family member receives compassionate, professional support in the comfort of their home.",
                  // profile: "/Images/Profile-img1.png",
                  // author: "Joanna Wellick",
                  // date: "June 28, 2018",
                  tags: ["Aenean Eleifend", "Aliquam"],
                },
                {
                  image: "/Images/Card-img6.png",
                  title: "Why Compassionate Care Is Our Core Value",
                  description:
                    "At Care Direct, compassion isn't just a buzzword - it's the foundation of everything we do. Discover how our commitment to empathetic care creates better outcomes for clients and their families, while maintaining the highest standards of professional service.",
                  // profile: "/Images/Profile-img1.png",
                  // author: "Joanna Wellick",
                  // date: "June 28, 2018",
                  tags: ["Aenean Eleifend"],
                },
                {
                  image: "/Images/image.png",
                  title: "A Day in the Life of a Caregiver at Care Direct",
                  description:
                    "Experience what it means to be a professional caregiver at Care Direct. From morning routines to evening check-ins, learn about the rewarding moments and challenges that make caregiving such a meaningful career choice. We are committed to providing the best care.",
                  // profile: "/Images/Profile-img1.png",
                  // author: "Joanna Wellick",
                  // date: "June 28, 2018",
                  tags: ["Aenean Eleifend", "Aliquam"],
                },
              ].map((blog, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[20px] shadow-lg overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 sm:h-56 md:h-72 object-cover border-[2px] border-white rounded-[20px] p-2 sm:p-3"
                    />
                    <div className="absolute top-3 sm:top-5 left-3 sm:left-5 flex flex-wrap gap-2">
                      {blog.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`${poppins.className} ${tag === "Aenean Eleifend"
                            ? "bg-[#03A9F44D]"
                            : "bg-[#03A9F44D]"
                            } text-white text-[10px] sm:text-[12px] rounded-full font-500 p-1.5 sm:p-2`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3
                      className={`${poppins.className} font-normal text-center text-[16px] sm:text-[18px] md:text-[20px] font-500 text-[#084B92] mb-2`}
                    >
                      {blog.title}
                    </h3>
                    <p
                      className={`${poppins.className} text-[#888888] text-[12px] sm:text-[13px] md:text-[14px] font-400 mb-3 sm:mb-4 text-center line-clamp-4 sm:line-clamp-none`}
                    >
                      {blog.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {/* <Image
                          src={blog.profile}
                          alt={blog.author}
                          width={100}
                          height={100}
                          className="w-10 h-10"
                        />
                        <p className="font-normal">{blog.author}</p> */}
                      </div>
                      {/* <div className="w-10 h-px border-t border-[#6C757D66]"></div> */}
                      {/* <p className="text-[#6C757D]">{blog.date}</p> */}
                    </div>
                    <a
                      href="#"
                      className={`${heebo.className} w-full inline-flex items-center justify-center text-[#03A9F4] text-[14px] sm:text-[16px] md:text-[18px] hover:bg-opacity-30 transition mt-3 sm:mt-4`}
                    >
                      Learn More
                      <span
                        className="flex items-center justify-center bg-[#03A9F4] rounded-full ml-[10px] sm:ml-[15px]"
                        style={{
                          width: "28px",
                          height: "28px",
                          padding: "5px",
                        }}
                      >
                        <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="hidden md:block absolute left-0 -top-28- transform -translate-y-1/2 z-0">
          <div className="w-[200px] h-[300px] sm:w-[250px] sm:h-[350px] md:w-[500px] md:h-[600px] relative ml-[-140px]">
            <Image
              src="/Images/Oval.svg"
              alt="Decorative oval"
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              priority={false}
            />
          </div>
        </div>
        <div className="container mx-auto px-4 pb-12 md:pb-20">
          <OurRecomendations />
          <div className="hidden md:block absolute right-0 -top-28- transform -translate-y-1/5 z-0">
            <div className="w-[200px] h-[300px] sm:w-[250px] sm:h-[350px] md:w-[500px] md:h-[600px] relative mr-[-150px]">
              <Image
                src="/Images/Oval.svg"
                alt="Decorative oval"
                fill
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  transform: "scaleX(-1)",
                }}
                priority={false}
              />
            </div>
          </div>
          <ContactForm />
        </div>
        <Footer />
      </div>
    </main>
  );
}
