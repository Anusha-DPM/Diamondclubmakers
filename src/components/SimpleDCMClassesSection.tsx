"use client";
import Image from 'next/image';

const SimpleDCMClassesSection = () => {
  return (
    <div className="bg-white pt-12 sm:pt-16 lg:pt-20 w-full" style={{ paddingBottom: '50px' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 
          className="font-sansation-regular text-[#004681] text-center mb-8 sm:mb-10 lg:mb-12"
          style={{ fontSize: '27px' }}
        >
          DCM Classes
        </h2>

        {/* Simple Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* DCM First */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image 
                src="/DCM class/dcm-first.jpg" 
                alt="DCM First Class"
                width={200}
                height={200}
                className="w-auto h-[200px] object-contain"
              />
            </div>
          </div>

          {/* DCM Second */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image 
                src="/DCM class/dcm-second.jpg" 
                alt="DCM Second Class"
                width={200}
                height={200}
                className="w-auto h-[200px] object-contain"
              />
            </div>
          </div>

          {/* DCM Third */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image 
                src="/DCM class/dcm-third.png" 
                alt="DCM Third Class"
                width={200}
                height={200}
                className="w-auto h-[200px] object-contain"
              />
            </div>
          </div>

          {/* DCM Fourth */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image 
                src="/DCM class/dcm-fourth.png" 
                alt="DCM Fourth Class"
                width={200}
                height={200}
                className="w-auto h-[200px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleDCMClassesSection;
