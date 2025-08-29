import React from 'react';
import Link from 'next/link';

const SubmitHeroSection = () => {
  return (
    <section className="bg-[#004681] py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
        <h1 className="text-white font-sansation-regular mb-2 sm:mb-3 md:mb-4" style={{
          fontSize: 'clamp(28px, 6vw, 45px)',
          fontWeight: 700,
          lineHeight: 1.2,
          color: '#ffffff'
        }}>
          Submit a Community Post
        </h1>
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-center space-x-2 text-white">
          <Link 
            href="/" 
            className="font-sansation-regular hover:text-[#029fde] transition-colors duration-200"
            style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}
          >
            Home
          </Link>
          <span className="font-sansation-regular" style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}>
            »
          </span>
          <span className="font-sansation-regular text-[#029fde]" style={{ fontSize: 'clamp(14px, 3vw, 18px)' }}>
            Submit a Community Post
          </span>
        </div>
      </div>
    </section>
  );
};

export default SubmitHeroSection;
