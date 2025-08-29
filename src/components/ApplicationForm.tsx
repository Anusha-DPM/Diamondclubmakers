"use client";

import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceName: '',
    practiceLocation: '',
    currentInvisalignLevel: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email functionality or API call here
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sansation-regular text-[#004681] mb-4" style={{ fontSize: '30px' }}>
            Apply for DCM Program
          </h2>
          <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed max-w-2xl mx-auto" style={{ fontSize: '17px' }}>
            Ready to transform your Invisalign practice? Fill out the application below and take the first step towards becoming a Diamond Club Maker.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block font-sansation-regular text-[#004681] mb-2" style={{ fontSize: '16px' }}>
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#029fde] focus:border-transparent font-sansation-regular"
                style={{ fontSize: '16px' }}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block font-sansation-regular text-[#004681] mb-2" style={{ fontSize: '16px' }}>
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#029fde] focus:border-transparent font-sansation-regular"
                style={{ fontSize: '16px' }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block font-sansation-regular text-[#004681] mb-2" style={{ fontSize: '16px' }}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#029fde] focus:border-transparent font-sansation-regular"
                style={{ fontSize: '16px' }}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-sansation-regular text-[#004681] mb-2" style={{ fontSize: '16px' }}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#029fde] focus:border-transparent font-sansation-regular"
                style={{ fontSize: '16px' }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="practiceName" className="block font-sansation-regular text-[#004681] mb-2" style={{ fontSize: '16px' }}>
                Practice Name
              </label>
              <input
                type="text"
                id="practiceName"
                name="practiceName"
                value={formData.practiceName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#029fde] focus:border-transparent font-sansation-regular"
                style={{ fontSize: '16px' }}
              />
            </div>

            <div>
              <label htmlFor="practiceLocation" className="block font-sansation-regular text-[#004681] mb-2" style={{ fontSize: '16px' }}>
                Practice Location
              </label>
              <input
                type="text"
                id="practiceLocation"
                name="practiceLocation"
                value={formData.practiceLocation}
                onChange={handleChange}
                placeholder="City, State"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#029fde] focus:border-transparent font-sansation-regular"
                style={{ fontSize: '16px' }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="currentInvisalignLevel" className="block font-sansation-regular text-[#004681] mb-2" style={{ fontSize: '16px' }}>
              Current Invisalign Level
            </label>
            <select
              id="currentInvisalignLevel"
              name="currentInvisalignLevel"
              value={formData.currentInvisalignLevel}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#029fde] focus:border-transparent font-sansation-regular"
              style={{ fontSize: '16px' }}
            >
              <option value="">Select your current level</option>
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
              <option value="Diamond">Diamond</option>
              <option value="Diamond Plus">Diamond Plus</option>
              <option value="New to Invisalign">New to Invisalign</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-sansation-regular text-[#004681] mb-2" style={{ fontSize: '16px' }}>
              Tell us about your goals and why you want to join DCM
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#029fde] focus:border-transparent font-sansation-regular"
              style={{ fontSize: '16px' }}
              placeholder="Share your story and what you hope to achieve..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="font-sansation-regular bg-[#029fde] text-white px-10 py-3 hover:bg-[#0288c7] transition-colors duration-200 font-semibold rounded-lg"
              style={{ fontSize: '18px' }}
            >
              Submit Application
            </button>
          </div>

          <div className="text-center">
            <p className="font-sansation-regular text-[#6b6b6b] text-sm">
              For immediate assistance, email us at{' '}
              <a 
                href="mailto:michaeliwollock@hotmail.com" 
                className="text-[#004681] hover:underline transition-all duration-200"
              >
                michaeliwollock@hotmail.com
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;
