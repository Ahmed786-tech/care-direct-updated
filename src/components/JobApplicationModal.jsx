"use client";

import { ibmPlexSans, poppins } from "@/app/font";
import { andika } from "@/app/font";
import { roboto } from "@/app/font";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Paperclip, ArrowRight, X, Home } from "lucide-react";

export default function JobApplicationModal({
  children,
  isOpen,
  onOpenChange,
  triggerText = "Apply Now",
  jobTitle = "",
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    jobTitle: jobTitle,
    resume: null,
    coverLetter: "",
    captchaVerified: false,
  });

  const [verified, setVerified] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleRecaptchaChange = (value) => {
    setVerified(!!value);
    setFormData((prev) => ({ ...prev, captchaVerified: !!value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Close current modal and show success dialog
    onOpenChange(false);
    setShowSuccessDialog(true);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleApplyAnother = () => {
    setShowSuccessDialog(false);
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      jobTitle: "",
      resume: null,
      coverLetter: "",
      captchaVerified: false,
    });
    setVerified(false);
    // Reopen application modal
    onOpenChange(true);
  };

  const handleGoHome = () => {
    setShowSuccessDialog(false);
    // You can add navigation logic here
    window.location.href = "/";
  };

  return (
    <>
      {/* Main Application Modal */}
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        {children && <DialogTrigger asChild>{children}</DialogTrigger>}

        <DialogContent className="sm:max-w-[800px] max-h-[95vh] p-0 overflow-auto">
          <div className="relative bg-white rounded-lg">
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="w-full p-6 sm:p-8 lg:p-10">
              <h2
                className={`${ibmPlexSans.className} text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#084B92] mb-6 sm:mb-8 text-center`}
              >
                Job Application Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Full Name Field */}
                <div>
                  <label
                    htmlFor="fullName"
                    className={`${andika.className} block text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#7A7878] mb-2`}
                  >
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    placeholder="Area of Service"
                    className={`${poppins.className} w-full p-3 sm:p-4 border border-[#E5E5E5] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className={`${andika.className} block text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#7A7878] mb-2`}
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Area of Service"
                    className={`${poppins.className} w-full p-3 sm:p-4 border border-[#E5E5E5] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    required
                  />
                </div>

                {/* Job Title Dropdown */}
                <div>
                  <label
                    htmlFor="jobTitle"
                    className={`${andika.className} block text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#7A7878] mb-2`}
                  >
                    Select Job Title<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) =>
                      handleInputChange("jobTitle", e.target.value)
                    }
                    className={`${poppins.className} w-full p-3 sm:p-4 border border-[#E5E5E5] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white`}
                    required
                  >
                    <option value="">Area of Service</option>
                    <option value="Senior Carer">Senior Carer</option>
                    <option value="Care Assistant">Care Assistant</option>
                    <option value="Community Care Worker">
                      Community Care Worker
                    </option>
                    <option value="Support Worker">Support Worker</option>
                    <option value="RGN Nurse">RGN Nurse</option>
                    <option value="RMN Nurse">RMN Nurse</option>
                  </select>
                </div>

                {/* Resume Upload */}
                <div>
                  <label
                    htmlFor="resume"
                    className={`${andika.className} block text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#7A7878] mb-2`}
                  >
                    Upload Resume<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      onChange={handleFileUpload}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className={`${poppins.className} w-full p-3 sm:p-4 border border-[#E5E5E5] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[8px] cursor-pointer flex items-center gap-3 hover:border-blue-300 transition-colors`}
                    >
                      <Paperclip className="w-5 h-5 text-blue-500" />
                      {formData.resume
                        ? formData.resume.name
                        : "Upload Resume Here"}
                    </label>
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label
                    htmlFor="coverLetter"
                    className={`${andika.className} block text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#7A7878] mb-2`}
                  >
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) =>
                      handleInputChange("coverLetter", e.target.value)
                    }
                    placeholder="Type Your Message"
                    rows="4"
                    className={`${poppins.className} w-full p-3 sm:p-4 border border-[#E5E5E5] text-[14px] sm:text-[15px] md:text-[16px] text-[#9D9797] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical`}
                  ></textarea>
                </div>

                {/* ReCAPTCHA */}
                <div className={`${roboto.className} flex justify-center py-4`}>
                  <ReCAPTCHA
                    sitekey="YOUR_RECAPTCHA_SITE_KEY"
                    onChange={handleRecaptchaChange}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  // disabled={!verified}
                  className={`w-full py-4 rounded-full transition duration-300 flex items-center justify-center ${poppins.className} text-white font-600 text-[16px] sm:text-[18px] bg-[#084B92] hover:bg-[#083B91] 
                
                `}
                >
                  Submit Job Application
                  <span className="flex items-center justify-center bg-white rounded-full ml-3 w-6 h-6 p-1">
                    <ArrowRight className="text-[#084B92] w-4 h-4" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-[800px] py-16">
          <div className="relative bg-white rounded-lg p-8 sm:p-10 text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/Images/submitted-Icon.svg"
                alt="Job Icon"
                width={80}
                height={80}
              />
            </div>

            <h2
              className={`${andika.className} sm:text-[18px] md:text-[22px] font-bold text-[#4CAF50] mb-4`}
            >
              Application for {formData.jobTitle || "Carer / Care Assistant"}{" "}
              has been submitted successfully!
            </h2>

            <p
              className={`${andika.className} text-[14px] sm:text-[18px] text-[#B4B4B4] mb-8 font-normal leading-relaxed`}
            >
              Thank you for your time and interest to apply here for the job.
              Our Team will be analyzing your application and will get back to
              you soon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
              <button
                onClick={handleApplyAnother}
                className={`${poppins.className} bg-[#084B92] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#083B91] transition-colors text-[14px] sm:text-[16px] font-500`}
              >
                Apply For Another Job
                <span className="flex items-center justify-center bg-white rounded-full w-6 h-6 p-1">
                  <ArrowRight className="text-[#084B92] w-4 h-4" />
                </span>
              </button>

              <button
                onClick={handleGoHome}
                className={`${poppins.className} border-2 border-[#084B92] text-[#084B92] px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#084B92] hover:text-white transition-colors text-[14px] sm:text-[16px] font-500`}
              >
                Go To Home Page
                <span className="flex items-center justify-center bg-[#084B92] rounded-full w-6 h-6 p-1">
                  <Home className="text-white w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
