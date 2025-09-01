import React from 'react';

const ApplyInfoSection = () => {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left space-y-4">
          <div className="flex items-center">
            <span className="text-red-500 text-lg mr-2">*</span>
            <p 
              className="font-sansation-regular text-base sm:text-lg lg:text-[17px] text-[#6b6b6b]"
              style={{ fontSize: '17px', color: '#6b6b6b' }}
            >
              indicates required fields
            </p>
          </div>

          <p 
            className="font-sansation-regular text-base sm:text-lg lg:text-[17px] text-[#6b6b6b]"
            style={{ fontSize: '17px', color: '#6b6b6b' }}
          >
            Please answer all in full.
          </p>

          <p 
            className="font-sansation-regular text-base sm:text-lg lg:text-[17px] text-[#6b6b6b]"
            style={{ fontSize: '17px', color: '#6b6b6b' }}
          >
            This will be used to tell if I can help you. It is important to me that I can really help you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplyInfoSection;
