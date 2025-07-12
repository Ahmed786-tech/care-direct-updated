'use client';

import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Paperclip, SendHorizontal } from 'lucide-react';
import React from 'react'

export default function page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobTitle: '',
    resume: null,
    coverLetter: '',
    recaptchaToken: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleCaptchaChange = (token) => {
    setFormData({ ...formData, recaptchaToken: token });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    // You can now send this data to an API
  };
  return (
    <div>
         <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-xl font-semibold mb-6">Job Application Form</h2>

      {/* Full Name */}
      <div className="mb-4">
        <label className="block font-medium mb-1">
          Full Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Area of Service"
          required
          className="w-full border rounded px-4 py-2"
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block font-medium mb-1">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Area of Service"
          required
          className="w-full border rounded px-4 py-2"
          onChange={handleChange}
        />
      </div>

      {/* Job Title */}
      <div className="mb-4">
        <label className="block font-medium mb-1">
          Select Job Title<span className="text-red-500">*</span>
        </label>
        <select
          name="jobTitle"
          required
          className="w-full border rounded px-4 py-2"
          onChange={handleChange}
        >
          <option value="">Area of Service</option>
          <option value="Senior Carer">Senior Carer</option>
          <option value="Registered Nurse">Registered Nurse</option>
          <option value="Healthcare Assistant">Healthcare Assistant</option>
        </select>
      </div>

      {/* Resume Upload */}
      <div className="mb-4">
        <label className="block font-medium mb-1">
          Upload Resume<span className="text-red-500">*</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer border rounded px-4 py-2 bg-gray-50">
          <Paperclip className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-500">Upload Resume Here</span>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            className="hidden"
            required
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Cover Letter */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Cover Letter</label>
        <textarea
          name="coverLetter"
          rows="5"
          placeholder="Type Your Message"
          className="w-full border rounded px-4 py-2"
          onChange={handleChange}
        ></textarea>
      </div>

      {/* reCAPTCHA */}
      <div className="mb-6">
        <ReCAPTCHA
          sitekey="YOUR_RECAPTCHA_SITE_KEY"
          onChange={handleCaptchaChange}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex justify-center items-center gap-2 bg-blue-700 text-white py-3 rounded-full hover:bg-blue-800 transition"
      >
        Submit Job Application <SendHorizontal className="w-4 h-4" />
      </button>
    </form> 
    </div>
  )
}
