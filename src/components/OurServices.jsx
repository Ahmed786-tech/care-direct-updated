import React from "react";
import Badge from "./Badge";
import { poppins } from "@/app/font";
import { heebo } from "@/app/font";
import { ArrowRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SectionHeadingWithButton from "./SectionHeadingWithButton";

const OurServices = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const sliderRef = React.useRef(null);

  // Custom arrow components
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-[-20px] md:left-[-35px] lg:left-[-55px] top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2 md:p-3 cursor-pointer"
        onClick={onClick}
      >
        <img
          src="/Icons/SliderArrowLeft.svg"
          alt="Previous"
          className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px]"
        />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-[-20px] md:right-[-35px] lg:right-[-55px] top-1/2 transform -translate-y-1/2 z-10 rounded-full p-2 md:p-3 cursor-pointer"
        onClick={onClick}
      >
        <img
          src="/Icons/SliderArrowRight.svg"
          alt="Next"
          className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px]"
        />
      </button>
    );
  };

  // Slider settings for react-slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const services = [
    {
      title: "Domiciliary Support",
      description:
        "In-home care tailored to daily routines and personal needs with a focus on preserving independence and trust.",
      image: "/Images/Card-img1.png",
      link: "/assisted",
    },
    {
      title: "Residential Care Support",
      description:
        "Round-the-clock support in CQC-regulated care environments. Our professionals deliver care with compassion and clinical precision.",
      image: "/Images/Card-img2.png",
      link: "/residential",
    },
    {
      title: "Staffing Solutions",
      description:
        "Staffing SolutionsFlexible, fast-response recruitment across South East & East of England. Built for healthcare realities.",
      image: "/Images/Card-img3.png",
      link: "/staffing",
    },
    {
      title: "Nurse & Care Worker Recruitment",
      description:
        "From RGN and RMNs to senior carers, we provide fully qualified, ethically recruited professionals for roles in both community and residential settings.",
      image: "/Images/service4.png",
      link: "#",
    },
  ];

  return (
    <>
      <div className="relative mt-[670px] sm:mt-[300px] md:mt-[50px] lg:mt-0 px-4 md:px-6 lg:px-8">
        <Badge text="Services" iconSrc="/Images/Services.svg" />
        <SectionHeadingWithButton
          heading="Our"
          span="Services"
          description="Focused. Reliable. Professional."
          buttonText="Explore All Services"
          buttonLink="/services"
        />

        <div className="relative overflow-visible">
          <Slider {...settings} ref={sliderRef}>
            {services.map((service, index) => (
              <div key={index} className="p-2">
                <div className="bg-white border-2 h-[320px] border-[#A2CFFF] rounded-[20px] pt-[75px] sm:pt-[85px] md:pt-[95px] px-3 sm:px-4 pb-4 flex flex-col items-center justify-between relative mt-[80px] sm:mt-[90px] md:mt-[100px]">
                  {/* Floating Image */}
                  <div className="absolute top-[-80px] sm:top-[-90px] md:top-[-107px] left-1/2 transform -translate-x-1/2 w-[250px] sm:w-[280px] md:w-[307.64px] h-[150px] sm:h-[170px] md:h-[189.3px] rounded-[20px] overflow-hidden shadow-md z-20">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3
                    className={`${poppins.className} text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#084B92] mt-2 sm:mt-3 mb-2 text-center`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`${poppins.className} text-gray-500 font-light text-[12px] mb-4 text-center justify-center`}
                  >
                    {service.description}
                  </p>

                  <a
                    href={service.link}
                    className={`${heebo.className} inline-flex items-center justify-center text-[#03A9F4] text-[13px] sm:text-[14px] md:text-[15px]`}
                    style={{
                      width: "140px",
                      height: "40px",
                      padding: "8px 24px",
                      borderRadius: "100px",
                      border: "1px solid #03A9F4",
                      gap: "2px",
                      fontWeight: 500,
                    }}
                  >
                    More Info
                    <ArrowRight className="text-[#03A9F4] w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default OurServices;
