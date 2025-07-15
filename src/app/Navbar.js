"use client";
import { poppins, dmSans } from "@/app/font";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const topBarHeight = document.querySelector('.top-bar')?.offsetHeight || 0;
      setIsSticky(window.scrollY > topBarHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and services dropdown when pathname changes
  useEffect(() => {
    setMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside (but not when clicking on the button itself)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close if we're not clicking on a dropdown button or dropdown content
      if (!event.target.closest('.services-dropdown') &&
        !event.target.closest('.mobile-services-dropdown') &&
        !event.target.matches('button')) {
        setIsServicesOpen(false);
      }
    };

    // Only add listener when dropdown is open
    if (isServicesOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isServicesOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/career", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => pathname === href;

  const servicePaths = ["/assisted", "/residential", "/staffing"];
  const isServicesActive = servicePaths.includes(pathname);

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <header className="shadow-md z-50 bg-white">
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden sm:block bg-[#084B92] text-white text-xs sm:text-sm py-2 top-bar">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          <div className="flex items-center gap-2 sm:gap-4 text-white bg-[#084B92] px-2 sm:px-3 py-1 rounded w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">
            <span
              className={`${dmSans.className} flex items-center text-xs sm:text-sm`}
            >
              <img
                src="/Icons/MailWhite.svg"
                alt="Email"
                className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] mr-1 sm:mr-2"
              />
              <span className="hidden sm:inline">
                info@caredirectrecruitment.co.uk
              </span>
              <span className="sm:hidden">info@care...</span>
            </span>
            <span className="border-l border-white h-4 hidden sm:block"></span>
            <span
              className={`${dmSans.className} flex items-center text-xs sm:text-sm`}
            >
              <img
                src="/Icons/PhoneWhite.svg"
                alt="Phone"
                className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] mr-1 sm:mr-2"
              />
              01424 716 739
            </span>
          </div>

          <div
            className={`${dmSans.className} flex items-center gap-2 sm:gap-3 text-white text-xs sm:text-sm`}
          >
            <a
              href="#"
              className="hover:underline text-[#03A9F4] cursor-pointer whitespace-nowrap"
            >
              Quick Apply
            </a>
            <span className="border-l border-white h-4"></span>
            <a
              href="#"
              className="hover:underline text-[#03A9F4] cursor-pointer whitespace-nowrap"
            >
              Quick Care
            </a>
            <span className="border-l border-white h-4 hidden sm:block"></span>
            <div className="hidden sm:flex items-center gap-2">
              <a href="#" className="cursor-pointer hover:text-[#03A9F4]">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="cursor-pointer hover:text-[#03A9F4]">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="cursor-pointer hover:text-[#03A9F4]">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="cursor-pointer hover:text-[#03A9F4]">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-white py-3 sm:py-5 lg:py-7 px-4 sm:px-7 z-20 ${isSticky ? 'fixed top-0 left-0 right-0 shadow-md transition-all duration-300' : ''}`}>
        <div className="container mx-auto flex justify-between items-center relative z-20 min-h-[40px]">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/Images/Logo.svg"
                alt="Logo"
                width={180}
                height={36}
                className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[282.33px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop/Tablet Nav */}
          <nav
            className={`${poppins?.className || ""} hidden md:flex gap-4 lg:gap-8 text-xs lg:text-sm text-[#979797] relative flex-shrink-0`}
          >
            {/* Left links: Home and About Us */}
            {navLinks.slice(0, 2).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${isActive(href)
                  ? "text-[#004990] after:absolute after:bottom-[-5px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-[40%] after:h-[2px] after:bg-[#004990] rounded-md"
                  : "text-[#979797] hover:text-[#004990]"
                  }`}
              >
                {label}
              </Link>
            ))}

            {/* Dropdown in the middle */}
            <div className="relative services-dropdown">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${isServicesActive
                  ? "text-[#004990]"
                  : "text-[#979797] hover:text-[#004990]"
                  }`}
              >
                Our Services
                {isServicesOpen ? (
                  <ChevronUp className="ml-1 w-3 h-3 lg:w-4 lg:h-4" />
                ) : (
                  <ChevronDown className="ml-1 w-3 h-3 lg:w-4 lg:h-4" />
                )}
              </button>

              {isServicesOpen && (
                <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-40 lg:w-48 z-50">
                  <Link
                    href="/assisted"
                    className={`block px-3 lg:px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 cursor-pointer ${pathname === "/assisted"
                      ? "text-[#004990]"
                      : "text-gray-700"
                      }`}
                  >
                    Domiciliary Care
                  </Link>
                  <Link
                    href="/residential"
                    className={`block px-3 lg:px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 cursor-pointer ${pathname === "/residential"
                      ? "text-[#004990]"
                      : "text-gray-700"
                      }`}
                  >
                    Residential Support
                  </Link>
                  <Link
                    href="/staffing"
                    className={`block px-3 lg:px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 cursor-pointer ${pathname === "/staffing"
                      ? "text-[#004990]"
                      : "text-gray-700"
                      }`}
                  >
                    Staffing Solutions
                  </Link>
                </div>
              )}
            </div>

            {/* Right links: Career and Contact */}
            {navLinks.slice(2).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${isActive(href)
                  ? "text-[#004990] after:absolute after:bottom-[-5px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-[40%] after:h-[2px] after:bg-[#004990]"
                  : "text-[#979797] hover:text-[#004990]"
                  }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - Always visible on mobile with fixed positioning */}
          <div className="block md:hidden">
            <button
              className="text-xl sm:text-2xl text-[#004990] cursor-pointer p-2 flex items-center justify-center w-10 h-10 relative z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden bg-white px-6 sm:px-[98px] py-4 space-y-3 shadow-md z-20 ${isSticky ? 'mt-[72px]' : ''}`}>
          {/* Navigation Links */}
          <Link
            href="/"
            className="block text-[#004990] font-semibold cursor-pointer text-sm sm:text-base"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-[#004990] font-semibold cursor-pointer text-sm sm:text-base"
          >
            About Us
          </Link>

          {/* Dropdown Toggle */}
          <div className="mobile-services-dropdown">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left font-medium flex items-center justify-between cursor-pointer text-sm sm:text-base text-[#004990]"
            >
              Our Services
              {isServicesOpen ? (
                <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
              ) : (
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
              )}
            </button>

            {/* Dropdown Items */}
            {isServicesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  href="/assisted"
                  className={`block cursor-pointer text-sm sm:text-base text-[#004990]`}
                >
                  Domiciliary Care
                </Link>
                <Link
                  href="/residential"
                  className={`block cursor-pointer text-sm sm:text-base text-[#004990]`}
                >
                  Residential Support
                </Link>
                <Link
                  href="/staffing"
                  className={`block cursor-pointer text-sm sm:text-base text-[#004990]`}
                >
                  Staffing Solutions
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/career"
            className="block text-[#004990] font-semibold cursor-pointer text-sm sm:text-base"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="block text-[#004990] font-semibold cursor-pointer text-sm sm:text-base"
          >
            Contact
          </Link>

          <hr className="border-gray-200" />
          {/* Contact Info for Mobile */}
          <div className="flex flex-col space-y-2 pb-4 border-b border-gray-200">
            <a
              href="mailto:info@caredirectrecruitment.co.uk"
              className="flex items-center text-[#084B92] text-sm"
            >
              <img
                src="/Icons/Email.svg"
                alt="Email"
                className="w-4 h-4 mr-2"
              />
              info@caredirectrecruitment.co.uk
            </a>
            <a
              href="tel:01424716739"
              className="flex items-center text-[#084B92] text-sm"
            >
              <img
                src="/Icons/Phone.svg"
                alt="Phone"
                className="w-4 h-4 mr-2"
              />
              01424 716 739
            </a>
          </div>

          {/* Quick Links for Mobile */}
          <div className="flex flex-col space-y-2 pb-4 border-b border-gray-200">
            <a href="#" className="text-[#084B92] text-sm">
              Quick Apply
            </a>
            <a href="#" className="text-[#084B92] text-sm">
              Quick Care
            </a>
          </div>

          {/* Social Links for Mobile */}
          <div className="flex gap-4">
            <a href="#" className="text-[#084B92]">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-[#084B92]">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-[#084B92]">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-[#084B92]">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}