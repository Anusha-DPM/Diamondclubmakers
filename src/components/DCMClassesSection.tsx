"use client";

import { useRef } from 'react';

const DCMClassesSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      console.log('Scrolling left, current scrollLeft:', carouselRef.current.scrollLeft);
      const newScrollLeft = carouselRef.current.scrollLeft - 300;
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      console.log('New scrollLeft:', newScrollLeft);
    } else {
      console.log('Carousel ref not found');
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      console.log('Scrolling right, current scrollLeft:', carouselRef.current.scrollLeft);
      const newScrollLeft = carouselRef.current.scrollLeft + 300;
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      console.log('New scrollLeft:', newScrollLeft);
    } else {
      console.log('Carousel ref not found');
    }
  };

  const testScroll = () => {
    if (carouselRef.current) {
      console.log('Test scroll - ref found, scrollLeft:', carouselRef.current.scrollLeft);
      carouselRef.current.scrollLeft = 100;
      console.log('Test scroll - new scrollLeft:', carouselRef.current.scrollLeft);
    } else {
      console.log('Test scroll - ref not found');
    }
  };

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 
          className="font-sansation-regular text-[#004681] text-center mb-8 sm:mb-10 lg:mb-12"
          style={{ fontSize: '27px' }}
        >
          DCM Classes
        </h2>
        
        {/* Test Button for Debugging */}
        <div className="text-center mb-4">
          <button 
            onClick={testScroll}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Test Scroll (Check Console)
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          {/* Navigation Arrows */}
          <button 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
            onClick={scrollLeft}
            type="button"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200"
            onClick={scrollRight}
            type="button"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Items */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-16"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
             {/* DCM First */}
             <div className="flex flex-col items-center min-w-[200px] sm:min-w-[220px] lg:min-w-[240px]">
               <div className="relative">
                 <img 
                   src="/DCM class/dcm-first.jpg" 
                   alt="DCM First Class"
                   className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain"
                 />
               </div>
             </div>

             {/* DCM Second */}
             <div className="flex flex-col items-center min-w-[200px] sm:min-w-[220px] lg:min-w-[240px]">
               <div className="relative">
                 <img 
                   src="/DCM class/dcm-second.jpg" 
                   alt="DCM Second Class"
                   className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain"
                 />
               </div>
             </div>

             {/* DCM Third */}
             <div className="flex flex-col items-center min-w-[200px] sm:min-w-[220px] lg:min-w-[240px]">
               <div className="relative">
                 <img 
                   src="/DCM class/dcm-third.png" 
                   alt="DCM Third Class"
                   className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain"
                 />
               </div>
             </div>

             {/* DCM Fourth */}
             <div className="flex flex-col items-center min-w-[200px] sm:min-w-[220px] lg:min-w-[240px]">
               <div className="relative">
                 <img 
                   src="/DCM class/dcm-fourth.png" 
                   alt="DCM Fourth Class"
                   className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain"
                 />
               </div>
             </div>

             {/* DCM Fifth */}
             <div className="flex flex-col items-center min-w-[200px] sm:min-w-[220px] lg:min-w-[240px]">
               <div className="relative">
                 <img 
                   src="/DCM class/dcm-fifth.jpg" 
                   alt="DCM Fifth Class"
                   className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain"
                 />
               </div>
             </div>

             {/* DCM Sixth */}
             <div className="flex flex-col items-center min-w-[200px] sm:min-w-[220px] lg:min-w-[240px]">
               <div className="relative">
                 <img 
                   src="/DCM class/dcm-sixth.png" 
                   alt="DCM Sixth Class"
                   className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain"
                 />
               </div>
             </div>

             {/* DCM Seventh */}
             <div className="flex flex-col items-center min-w-[200px] sm:min-w-[220px] lg:min-w-[240px]">
               <div className="relative">
                 <img 
                   src="/DCM class/dcm-seventh.jpg" 
                   alt="DCM Seventh Class"
                   className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain"
                 />
               </div>
             </div>

             {/* DCM Eighth */}
             <div className="flex flex-col items-center min-w-[200px] sm:min-w-[220px] lg:min-w-[240px]">
               <div className="relative">
                 <img 
                   src="/DCM class/dcm8-1.png" 
                   alt="DCM Eighth Class"
                   className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain"
                 />
               </div>
             </div>

             {/* Diamond Grey */}
             <div className="flex flex-col items-center min-w-[200px] sm:min-w-[220px] lg:min-w-[240px]">
               <div className="relative">
                 <img 
                   src="/DCM class/diamond-grey.png" 
                   alt="Diamond Grey"
                   className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain"
                 />
               </div>
             </div>

             {/* Lucky Diamond */}
             <div className="flex flex-col items-center min-w-[200px] sm:min-w-[220px] lg:min-w-[240px]">
               <div className="relative">
                 <img 
                   src="/DCM class/lucky-1.png" 
                   alt="Lucky Diamond"
                   className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain"
                 />
               </div>
             </div>

             {/* Main DCM */}
             <div className="flex flex-col items-center min-w-[200px] sm:min-w-[220px] lg:min-w-[240px]">
               <div className="relative">
                 <img 
                   src="/DCM class/main-dcm.png" 
                   alt="Main DCM"
                   className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain"
                 />
               </div>
             </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default DCMClassesSection;
