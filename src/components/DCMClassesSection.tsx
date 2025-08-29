"use client";

const DCMClassesSection = () => {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 
          className="font-sansation-regular text-[#004681] text-center mb-8 sm:mb-10 lg:mb-12"
          style={{ fontSize: '27px' }}
        >
          DCM Classes
        </h2>

        {/* Carousel Container with Navigation */}
        <div className="relative w-full">
          {/* Navigation Arrows - Outside Carousel */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200 active:bg-gray-100"
            onClick={() => {
              const carousel = document.getElementById('dcm-carousel');
              if (carousel) carousel.scrollLeft -= 300;
            }}
            type="button"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200 active:bg-gray-100"
            onClick={() => {
              const carousel = document.getElementById('dcm-carousel');
              if (carousel) carousel.scrollLeft += 300;
            }}
            type="button"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Items */}
          <div 
            id="dcm-carousel"
            className="flex gap-4 sm:gap-6 lg:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 sm:px-8 lg:px-16"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* DCM First */}
            <div className="flex flex-col items-center min-w-[280px] sm:min-w-[220px] lg:min-w-[200px]">
              <div className="relative">
                <img 
                  src="/DCM class/dcm-first.jpg" 
                  alt="DCM First Class"
                  className="w-auto h-[200px] object-contain"
                />
              </div>
            </div>

            {/* DCM Second */}
            <div className="flex flex-col items-center min-w-[280px] sm:min-w-[220px] lg:min-w-[200px]">
              <div className="relative">
                <img 
                  src="/DCM class/dcm-second.jpg" 
                  alt="DCM Second Class"
                  className="w-auto h-[200px] object-contain"
                />
              </div>
            </div>

            {/* DCM Third */}
            <div className="flex flex-col items-center min-w-[280px] sm:min-w-[220px] lg:min-w-[200px]">
              <div className="relative">
                <img 
                  src="/DCM class/dcm-third.png" 
                  alt="DCM Third Class"
                  className="w-auto h-[200px] object-contain"
                />
              </div>
            </div>

            {/* DCM Fourth */}
            <div className="flex flex-col items-center min-w-[280px] sm:min-w-[220px] lg:min-w-[200px]">
              <div className="relative">
                <img 
                  src="/DCM class/dcm-fourth.png" 
                  alt="DCM Fourth Class"
                  className="w-auto h-[200px] object-contain"
                />
              </div>
            </div>

            {/* DCM Fifth */}
            <div className="flex flex-col items-center min-w-[280px] sm:min-w-[220px] lg:min-w-[200px]">
              <div className="relative">
                <img 
                  src="/DCM class/dcm-fifth.jpg" 
                  alt="DCM Fifth Class"
                  className="w-auto h-[200px] object-contain"
                />
              </div>
            </div>

            {/* DCM Sixth */}
            <div className="flex flex-col items-center min-w-[280px] sm:min-w-[220px] lg:min-w-[200px]">
              <div className="relative">
                <img 
                  src="/DCM class/dcm-sixth.png" 
                  alt="DCM Sixth Class"
                  className="w-auto h-[200px] object-contain"
                />
              </div>
            </div>

            {/* DCM Seventh */}
            <div className="flex flex-col items-center min-w-[280px] sm:min-w-[220px] lg:min-w-[200px]">
              <div className="relative">
                <img 
                  src="/DCM class/dcm-seventh.jpg" 
                  alt="DCM Seventh Class"
                  className="w-auto h-[200px] object-contain"
                />
              </div>
            </div>

            {/* DCM 8-1 */}
            <div className="flex flex-col items-center min-w-[280px] sm:min-w-[220px] lg:min-w-[200px]">
              <div className="relative">
                <img 
                  src="/DCM class/dcm8-1.png" 
                  alt="DCM 8-1 Class"
                  className="w-auto h-[200px] object-contain"
                />
              </div>
            </div>

            {/* Diamond Grey */}
            <div className="flex flex-col items-center min-w-[280px] sm:min-w-[220px] lg:min-w-[200px]">
              <div className="relative">
                <img 
                  src="/DCM class/diamond-grey.png" 
                  alt="Diamond Grey"
                  className="w-auto h-[200px] object-contain"
                />
              </div>
            </div>

            {/* Lucky 1 */}
            <div className="flex flex-col items-center min-w-[280px] sm:min-w-[220px] lg:min-w-[200px]">
              <div className="relative">
                <img 
                  src="/DCM class/lucky-1.png" 
                  alt="Lucky 1"
                  className="w-auto h-[200px] object-contain"
                />
              </div>
            </div>

            {/* Main DCM */}
            <div className="flex flex-col items-center min-w-[280px] sm:min-w-[220px] lg:min-w-[200px]">
              <div className="relative">
                <img 
                  src="/DCM class/main-dcm.png" 
                  alt="Main DCM"
                  className="w-auto h-[200px] object-contain"
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
