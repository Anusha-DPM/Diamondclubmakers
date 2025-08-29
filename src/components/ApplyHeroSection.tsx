import React from 'react';

const ApplyHeroSection = () => {
  return (
    <section className="bg-[#004681] py-1 sm:py-1 md:py-2 lg:py-3">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
        <h1 className="text-white font-sansation-regular" style={{
          fontSize: 'clamp(28px, 6vw, 45px)',
          fontWeight: 700,
          lineHeight: 1.2,
          paddingBottom: '30px'
        }}>
          Diamond Club Makers Application
        </h1>

      </div>
    </section>
  );
};

export default ApplyHeroSection;
