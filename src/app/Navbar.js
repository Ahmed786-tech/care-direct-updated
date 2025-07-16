"use client";
import { poppins, dmSans } from "@/app/font";

import { useState, useEffect, useRef } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  // Ensure component is mounted before rendering
  useEffect(() => {
    setMounted(true);

    // Initialize mobile detection
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
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

  // Enhanced click outside handler with better mobile support
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close mobile menu if clicking outside
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }

      // Close services dropdown if clicking outside
      if (!event.target.closest('.services-dropdown') &&
        !event.target.closest('.mobile-services-dropdown') &&
        !event.target.matches('button')) {
        setIsServicesOpen(false);
      }
    };

    // Add listener when menu or dropdown is open
    if (menuOpen || isServicesOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen, isServicesOpen]);

  // Auto-close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && menuOpen) {
      setMenuOpen(false);
    }
  }, [isMobile, menuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/career", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => pathname === href;

  const servicePaths = ["/assisted", "/residential", "/staffing"];
  const isServicesActive = servicePaths.includes(pathname);

  // Prevent hydration mismatch by showing loading state
  if (!mounted) {
    return (
      <header className="shadow-md z-50 bg-white">
        {/* Top Bar Skeleton */}
        <div className="hidden sm:block bg-[#084B92] text-white text-xs sm:text-sm py-2 top-bar">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="bg-[#084B92] px-3 py-1 rounded w-64 h-6"></div>
            <div className="bg-[#084B92] px-3 py-1 rounded w-48 h-6"></div>
          </div>
        </div>

        {/* Main Header Skeleton */}
        <div className="bg-white py-3 sm:py-5 lg:py-7 px-4 sm:px-7">
          <div className="container mx-auto flex justify-between items-center min-h-[40px]">
            <div className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[282px] h-[36px] bg-gray-200 rounded animate-pulse"></div>
            <div className="hidden md:flex gap-4 lg:gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="block md:hidden w-10 h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="shadow-md z-50 bg-white" ref={menuRef}>
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
                <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-40 lg:w-48 z-50 border border-gray-100">
                  <Link
                    href="/assisted"
                    className={`block px-3 lg:px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${pathname === "/assisted"
                      ? "text-[#004990] bg-blue-50"
                      : "text-gray-700"
                      }`}
                  >
                    Domiciliary Care
                  </Link>
                  <Link
                    href="/residential"
                    className={`block px-3 lg:px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${pathname === "/residential"
                      ? "text-[#004990] bg-blue-50"
                      : "text-gray-700"
                      }`}
                  >
                    Residential Support
                  </Link>
                  <Link
                    href="/staffing"
                    className={`block px-3 lg:px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${pathname === "/staffing"
                      ? "text-[#004990] bg-blue-50"
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

          {/* Mobile Menu Button - Enhanced with better accessibility */}
          <div className="block md:hidden">
            <button
              className="text-xl sm:text-2xl text-[#004990] cursor-pointer p-2 flex items-center justify-center w-10 h-10 relative z-50 transition-transform duration-200 hover:scale-110"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              <div className="hamburger-menu">
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with improved animations */}
      <div className={`md:hidden bg-white shadow-md z-20 transition-all duration-300 ease-in-out ${menuOpen
        ? `opacity-100 max-h-screen transform translate-y-0 ${isSticky ? 'mt-[72px]' : ''}`
        : 'opacity-0 max-h-0 transform -translate-y-2 overflow-hidden'
        }`}>
        <div className="px-6 sm:px-[98px] py-4 space-y-3">
          {/* Navigation Links */}
          <Link
            href="/"
            className="block text-[#004990] font-semibold cursor-pointer text-sm sm:text-base hover:text-[#003366] transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-[#004990] font-semibold cursor-pointer text-sm sm:text-base hover:text-[#003366] transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>

          {/* Mobile Services Dropdown */}
          <div className="mobile-services-dropdown">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left font-medium flex items-center justify-between cursor-pointer text-sm sm:text-base text-[#004990] hover:text-[#003366] transition-colors duration-200"
            >
              Our Services
              {isServicesOpen ? (
                <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
              ) : (
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
              )}
            </button>

            {/* Dropdown Items with smooth animation */}
            <div className={`ml-4 mt-2 space-y-2 transition-all duration-200 ${isServicesOpen ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0 overflow-hidden'
              }`}>
              <Link
                href="/assisted"
                className="block cursor-pointer text-sm sm:text-base text-[#004990] hover:text-[#003366] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Domiciliary Care
              </Link>
              <Link
                href="/residential"
                className="block cursor-pointer text-sm sm:text-base text-[#004990] hover:text-[#003366] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Residential Support
              </Link>
              <Link
                href="/staffing"
                className="block cursor-pointer text-sm sm:text-base text-[#004990] hover:text-[#003366] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Staffing Solutions
              </Link>
            </div>
          </div>

          <Link
            href="/career"
            className="block text-[#004990] font-semibold cursor-pointer text-sm sm:text-base hover:text-[#003366] transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="block text-[#004990] font-semibold cursor-pointer text-sm sm:text-base hover:text-[#003366] transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <hr className="border-gray-200" />

          {/* Contact Info for Mobile */}
          <div className="flex flex-col space-y-2 pb-4 border-b border-gray-200">
            <a
              href="mailto:info@caredirectrecruitment.co.uk"
              className="flex items-center text-[#084B92] text-sm hover:text-[#003366] transition-colors duration-200"
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
              className="flex items-center text-[#084B92] text-sm hover:text-[#003366] transition-colors duration-200"
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
            <a href="#" className="text-[#084B92] text-sm hover:text-[#003366] transition-colors duration-200">
              Quick Apply
            </a>
            <a href="#" className="text-[#084B92] text-sm hover:text-[#003366] transition-colors duration-200">
              Quick Care
            </a>
          </div>

          {/* Social Links for Mobile */}
          <div className="flex gap-4 pb-4">
            <a href="#" className="text-[#084B92] hover:text-[#003366] transition-colors duration-200">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-[#084B92] hover:text-[#003366] transition-colors duration-200">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-[#084B92] hover:text-[#003366] transition-colors duration-200">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-[#084B92] hover:text-[#003366] transition-colors duration-200">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}