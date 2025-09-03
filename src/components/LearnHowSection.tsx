"use client";

import Image from 'next/image';
import Link from 'next/link';

const LearnHowSection = () => {
  return (
    <section className="bg-white py-8 sm:py-4 lg:py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 
          className="font-sansation-regular text-[#004681] mb-6 sm:mb-8 lg:mb-12 text-[27px]"
          style={{ fontWeight: 400, lineHeight: '1.2' }}
        >
          It Pays to &quot;Learn How&quot; From Extraordinary Experts:
        </h2>

        {/* Central Content Box */}
        <div 
          className="bg-white mx-auto mb-4 sm:mb-6 lg:mb-8 w-full max-w-[506px]"
          style={{
            border: '5px solid #2baada',
            padding: '15px',
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
              className="w-full max-w-[300px] sm:max-w-[350px] h-auto"
            />
          </div>

          {/* Main Message */}
          <p 
            className="font-sansation-regular text-[#004681] text-[16px] sm:text-xl md:text-2xl lg:text-3xl"
            style={{ 
              lineHeight: '1.1'
            }}
          >
            Learn &quot;How&quot; From North America&apos;s Largest Solo Doctor Invisalign Provider!
          </p>
        </div>

        {/* Read More Button - Now Links to Learn How Page */}
        <Link 
          href="/learn-how-from-north-americas-largest-solo-doctor-invisalign-provider"
          className="bg-[#004681] text-white font-medium hover:bg-[#003366] transition-colors duration-300 inline-block px-4 py-2 rounded text-[16px]"
          style={{
            textDecoration: 'none'
          }}
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default LearnHowSection;
