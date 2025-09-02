import React from 'react';
import Link from 'next/link';

const CommunityHeroSection = () => {
  return (
    <section className="bg-[#004681] py-8 sm:py-10 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 
          className="text-white font-sansation-regular text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          style={{ fontSize: 'clamp(28px, 6vw, 45px)' }}
        >
          Community
        </h1>

        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <nav className="text-sm sm:text-base">
            <Link 
              href="/" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-sansation-regular"
            >
              Home
            </Link>
            <span className="text-white mx-2">»</span>
            <span className="text-white font-sansation-regular">Community</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default CommunityHeroSection;
