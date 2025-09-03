import React from 'react';

const OtherHeroSection = () => {
  return (
    <section className="bg-[#004681] py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-white font-sansation-regular" style={{
          fontSize: 'clamp(24px, 5vw, 40px)',
          fontWeight: 700,
          lineHeight: 1.2,
          paddingBottom: '20px'
        }}>
          DCM Recycling UPDATE
        </h1>
      </div>
    </section>
  );
};

export default OtherHeroSection;
