import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#004681] py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
        <h1 className="text-white font-sansation-regular mb-2 sm:mb-3 md:mb-4" style={{
          fontSize: 'clamp(28px, 6vw, 45px)',
          fontWeight: 700,
          lineHeight: 1.2
        }}>
          Diamond Club Makers
        </h1>
        <h3 className="text-white font-sansation-regular" style={{
          fontSize: 'clamp(18px, 4vw, 27px)',
          fontWeight: 500
        }}>
          Your path to more profitable Invisalign®
        </h3>
      </div>
    </section>
  );
};

export default HeroSection;
