"use client";
import { ibmPlexSans, poppins, andika } from "@/app/font";

import Footer from "../Footer";
import Navbar from "../Navbar";
import Image from "next/image";
import Badge from "@/components/Badge";
import React from "react";
import HeroSection from "@/components/HeroSection";

export default function page() {
  return (
    <div className="bg-white">
      <Navbar></Navbar>
      <HeroSection

        badgeTextColor="#A8D5BA"
        badgeColor="#A8D5BA26"
        badgeText="Trusted Care Solutions Since 2013"
        badgeIcon="/Images/Care-solution.svg"
        NavyBlueHeading="Privacy"
        subHeading="Policy"
        description="Read our privacy policy conditions"
        heroImage="/Images/PrivacyPolicyHeroSection.png"
        heroImageAlt="Caregiver with patient"
        showButtons={false}
      />

      <section className="container mx-auto  p-[20px] md:p-[100px]  mb-24 text-gray-800 leading-relaxed bg-white">
        <p
          className={`${andika.className} text-[15px] font-700 text-[#7A7878]`}
        >
          Welcome to the caredirect site (the “Site”). caredirect.com
        </p>
        <h1
          className={`${andika.className} text-2xl font-semibold text-blue-900 mb-2`}
        >
          Agreement
        </h1>
        <p className={`${poppins.className} text-sm text-[#03A9F4] mb-6`}>
          Last Updated: 6th April 2025
        </p>

        <p
          className={`${poppins.className} mb-6 text-[12px] font-400 text-gray-700`}
        >
          At Care Direct Recruitment Ltd, we are committed to respecting and
          protecting your privacy. This Privacy Policy explains how we collect,
          use, store, and safeguard your personal information in accordance with
          the UK General Data Protection Regulation (UK GDPR), the Data
          Protection Act 2018, and guidelines from the Care Quality Commission
          (CQC).
        </p>

        <section className="mb-8">
          <h2
            className={`${andika.className} text-lg font-semibold text-[#03A9F4] mb-2`}
          >
            1. Who We Are
          </h2>
          <p
            className={`${poppins.className} mb-2 text-[12px] font-400 text-gray-700`}
          >
            Care Direct Recruitment Ltd is a specialist care recruitment agency
            based in Hastings, with over 13 years of experience providing
            staffing solutions to care homes, nursing homes, hospitals, and
            individuals receiving care at home.
          </p>
          <p className={`${poppins.className} mb-2 font-semibold`}>
            Registered Address:
          </p>
          <p
            className={`${poppins.className} text-[12px] font-400 text-gray-700`}
          >
            Care Direct Recruitment Ltd
            <br />
            383b London Road
            <br />
            Hastings
            <br />
            Saint Leonards-On-Sea
            <br />
            TN37 6PA
            <br />
            United Kingdom
          </p>
        </section>

        <section className="mb-8">
          <h2
            className={`${andika.className} text-lg font-semibold text-[#03A9F4] mb-2`}
          >
            2. Information We Collect
          </h2>
          <p
            className={`${poppins.className} text-[12px] font-400 text-gray-700`}
          >
            We may collect the following types of personal data:
          </p>

          <h3 className={`${poppins.className} font-semibold mt-4`}>
            a. Job Candidates and Carers
          </h3>
          <ul
            className={`${poppins.className} list-disc list-inside text-[12px] font-400 text-gray-700 ml-4`}
          >
            <li>Full names, address, and contact details</li>
            <li>Date of birth, gender, and nationality</li>
            <li>Employment and education history</li>
            <li>
              DBS check details, right to work documents, qualifications,
              training
            </li>
            <li>Health information (where relevant to your role)</li>
            <li>References and work performance data</li>
          </ul>

          <h3 className={`${poppins.className} font-semibold mt-4`}>
            b. Clients (Care Providers and Individuals)
          </h3>
          <ul
            className={`${poppins.className} list-disc list-inside text-[12px] font-400 text-gray-700 ml-4`}
          >
            <li>Name and contact details</li>
            <li>Service needs and preferences</li>
            <li>Billing and payment information</li>
            <li>Notes related to care provision</li>
          </ul>

          <h3 className={`${poppins.className} font-semibold mt-4`}>
            c. Website Visitors
          </h3>
          <ul
            className={`${poppins.className} list-disc list-inside text-[12px] font-400 text-gray-700 ml-4`}
          >
            <li>
              IP address, browser type, and usage data (via cookies and
              analytics)
            </li>
            <li>Contact details submitted via enquiry forms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2
            className={`${andika.className} text-lg font-semibold text-[#03A9F4] mb-2`}
          >
            3. How We Use Your Information
          </h2>
          <h3 className={`${poppins.className}`}>
            We use your data for the following purposes:
          </h3>
          <ul
            className={`${poppins.className} list-disc list-inside text-[12px] font-400 text-gray-700 ml-4`}
          >
            <li>To match candidates with suitable job placements</li>
            <li>To deliver care and recruitment services effectively</li>
            <li>To meet legal and regulatory obligations (e.g., CQC, DBS)</li>
            <li>For invoicing and payment</li>
            <li>To improve our website and services</li>
            <li>To communicate updates, opportunities, or changes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2
            className={`${andika.className} text-lg font-semibold text-[#03A9F4] mb-2`}
          >
            4. Lawful Basis for Processing
          </h2>
          <h3 className={`${poppins.className}`}>
            We process personal data under the following legal bases:
          </h3>
          <ul
            className={`${poppins.className} list-disc list-inside text-[12px] font-400 text-gray-700 ml-4`}
          >
            <li>Contractual obligation – to provide or receive services</li>
            <li>
              Legal obligation – for compliance with regulatory bodies like CQC
              or HMRC
            </li>
            <li>
              Legitimate interests – to manage our business efficiently and
              improve services
            </li>
            <li>
              Consent – where required, particularly for marketing
              communications
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2
            className={`${andika.className} text-lg font-semibold text-[#03A9F4] mb-2`}
          >
            5. Data Sharing and Disclosure
          </h2>
          <p className={`${poppins.className}`}>
            We will never sell your data. We may share personal information
            with:
          </p>
          <ul
            className={`${poppins.className} list-disc list-inside text-[12px] font-400 text-gray-700 ml-4`}
          >
            <li>
              Care providers or clients (for recruitment placements or care
              delivery)
            </li>
            <li>Disclosure and Barring Service (DBS)</li>
            <li>Regulatory authorities (e.g., CQC, HMRC)</li>
            <li>Trusted third parties (e.g., payroll, software)</li>
            <li>Emergency services if required</li>
          </ul>
          <p className={`${poppins.className} mt-2 font-medium`}>
            All data processors comply with UK GDPR standards and
            confidentiality agreements.
          </p>
        </section>

        <section className="mb-8">
          <h2
            className={`${andika.className} text-lg font-semibold text-[#03A9F4] mb-2`}
          >
            6. Data Storage and Security
          </h2>
          <p
            className={`${poppins.className} text-[12px] font-400 text-gray-700`}
          >
            We store data securely using encrypted systems. Only authorised
            personnel can access your data. Data is retained only as long as
            necessary under our retention policy and applicable laws.
          </p>
        </section>

        <section className="mb-8">
          <h2
            className={`${andika.className} text-lg font-semibold text-[#03A9F4] mb-2`}
          >
            7. Your Rights
          </h2>
          <p className={`${poppins.className}`}>You have the right to:</p>
          <ul
            className={`${poppins.className} list-disc list-inside text-[12px] font-400 text-gray-700 ml-4`}
          >
            <li>Access your data</li>
            <li>Request correction or deletion</li>
            <li>Object to or restrict processing</li>
            <li>Withdraw consent</li>
            <li>File a complaint with the ICO</li>
          </ul>
          <p className={`${poppins.className}`}>
            To exercise any of your rights, please contact us via email at
            info@caredirectrecruitment.co.uk.
          </p>
        </section>

        <section className="mb-8">
          <h2
            className={`${andika.className} text-lg font-semibold text-[#03A9F4] mb-2`}
          >
            8. Cookies and Website Analytics
          </h2>
          <p
            className={`${poppins.className} text-[12px] font-400 text-gray-700`}
          >
            We use cookies to enhance your experience. You can disable cookies
            via your browser. We also use Google Analytics to monitor site usage
            and improve services.
          </p>
        </section>

        <section className="mb-8">
          <h2
            className={`${andika.className} text-lg font-semibold text-[#03A9F4]mb-2`}
          >
            9. Updates to This Policy
          </h2>
          <p
            className={`${poppins.className} text-[12px] font-400 text-gray-700`}
          >
            We may update this policy periodically. The latest version will
            always be available on our website.
          </p>
        </section>

        <section className="">
          <h2
            className={`${andika.className} text-lg font-semibold text-[#03A9F4] mb-2`}
          >
            10. Contact Us
          </h2>
          <p
            className={`${poppins.className} text-[12px] font-400 text-gray-700`}
          >
            If you have questions, contact our Data Protection Officer:
          </p>
          <h3 className={`${poppins.className}`}>Data Protection Officer</h3>
          <p
            className={`${poppins.className} mt-2 text-[12px] font-400 text-gray-700`}
          >
            <strong>Care Direct Recruitment Ltd</strong>
            <br />
            383b London Road
            <br />
            Hastings
            <br />
            Saint Leonards-On-Sea
            <br />
            TN37 6PA
            <br />
            United Kingdom
            <br />
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@caredirectrecruitment.co.uk"
              className="text-[#03A9F4] underline"
            >
              info@caredirectrecruitment.co.uk
            </a>
            <br />
            <strong>Phone:</strong> 01424 717519
          </p>
        </section>
      </section>
      <Footer className=""></Footer>
    </div>
  );
}
