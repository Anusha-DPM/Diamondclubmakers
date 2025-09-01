"use client";
import Image from 'next/image';

const SimpleDCMClassesSection = () => {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
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
            <div className="relative w-full max-w-[200px] h-[200px] bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src="/DCM class/dcm-first.jpg" 
                alt="DCM First Class"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* DCM Second */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[200px] h-[200px] bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src="/DCM class/dcm-second.jpg" 
                alt="DCM Second Class"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* DCM Third */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[200px] h-[200px] bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src="/DCM class/dcm-third.png" 
                alt="DCM Third Class"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* DCM Fourth */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-[200px] h-[200px] bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src="/DCM class/dcm-fourth.png" 
                alt="DCM Fourth Class"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleDCMClassesSection;
