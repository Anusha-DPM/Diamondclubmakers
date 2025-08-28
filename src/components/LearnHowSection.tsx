"use client";

import Image from 'next/image';

const LearnHowSection = () => {
  return (
    <section className="bg-white py-0 sm:py-4 lg:py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 
          className="font-sansation-regular text-[#004681] mb-8 sm:mb-10 lg:mb-12"
          style={{ fontSize: '27px' }}
        >
          It Pays to &quot;Learn How&quot; From Extraordinary Experts:
        </h2>

        {/* Central Content Box */}
        <div 
          className="bg-white mx-auto mb-4 sm:mb-6 lg:mb-8"
          style={{
            border: '5px solid #2baada',
            width: '506px',
            padding: '25px',
            borderRadius: '20px'
          }}
        >
          {/* Video-5 Image */}
          <div className="mb-4 flex justify-center">
            <Image
              src="/video-5.png"
              alt="Video 5"
              width={350}
              height={300}
            />
          </div>

          {/* Main Message */}
          <p 
            className="font-sansation-regular text-[#004681] text-xl sm:text-2xl lg:text-3xl"
            style={{ 
              fontSize: '27px',
              lineHeight: '1.1'
            }}
          >
            Learn &quot;How&quot; From North America&apos;s Largest Solo Doctor Invisalign Provider!
          </p>
        </div>

        {/* Read More Button */}
        <button 
          className="bg-[#004681] text-white font-medium hover:bg-[#003366] transition-colors duration-300"
          style={{
            padding: '6px 15px',
            fontSize: '16px'
          }}
        >
          Read More
        </button>
      </div>
    </section>
  );
};

export default LearnHowSection;
