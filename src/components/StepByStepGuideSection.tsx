import React from 'react';
import Image from 'next/image';

const StepByStepGuideSection = () => {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="font-sansation-regular text-[#6b6b6b] text-base leading-relaxed">
            Ordering boxes from Align or use whatever you have around the office. Also pictured is the Amazon storage container for my office.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {/* Top Row */}
          {/* Image 1 - Top Left */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/other/section-3-4.jpeg"
              alt="Step 5: Start Collecting Process"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 2 - Top Middle */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/other/section-3-1.jpeg"
              alt="Step 1-2: TerraCycle Program and Sign Up"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 3 - Top Right */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/other/section-3-2.jpeg"
              alt="Step 2: Sign Up for TerraCycle Account"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Bottom Row */}
          {/* Image 4 - Bottom Left */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/other/section-3-3.jpeg"
              alt="Step 3-5: Join Program and Start Collecting"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 5 - Bottom Middle */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/other/section-3-4.jpeg"
              alt="Step 5: Start Collecting Process"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Video 6 - Bottom Right */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <video
              src="/other/sixthVideo.mp4"
              controls
              className="w-full h-auto object-cover"
              poster="/other/section-3-4.jpeg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepByStepGuideSection;
