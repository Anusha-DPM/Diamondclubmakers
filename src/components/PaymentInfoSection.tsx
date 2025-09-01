import React from 'react';

const PaymentInfoSection = () => {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 
            className="font-sansation-regular text-2xl sm:text-3xl lg:text-[30px] font-bold text-[#004681] mb-6"
            style={{ fontSize: '30px', color: '#004681' }}
          >
            Please Submit Your Payment to Secure Your Spot
          </h2>
          
          <div className="mb-6">
            <p 
              className="font-sansation-regular text-base sm:text-lg lg:text-[17px] text-[#6b6b6b] leading-relaxed"
              style={{ fontSize: '17px', color: '#6b6b6b' }}
            >
              This payment form is for applicants that have been accepted to the Diamond Club Makers&apos; program.
            </p>
          </div>

          <div className="flex items-center">
            <span className="text-red-500 text-lg mr-2">*</span>
            <p 
              className="font-sansation-regular text-base sm:text-lg lg:text-[17px] text-[#6b6b6b]"
              style={{ fontSize: '17px', color: '#6b6b6b' }}
            >
              indicates required fields
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfoSection;
