import React, { useState } from 'react';
import Image from 'next/image';

const ImageCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    '/other/other-1.jpeg',
    '/other/other-2.jpeg',
    '/other/other-3.jpeg',
    '/other/other-4.jpeg',
    '/other/other-5.jpeg',
    '/other/other-6.jpeg',
    '/other/other-7.jpeg',
    '/other/other-9.jpeg'
  ];

  // Calculate how many images to show based on screen size
  const getImagesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // desktop
      if (window.innerWidth >= 768) return 2;  // tablet
      return 1; // mobile
    }
    return 1; // default for SSR (mobile-first)
  };

  const imagesPerView = getImagesPerView();
  const maxIndex = Math.max(0, images.length - imagesPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <div className="relative bg-[#cccccc] p-3 sm:p-4 md:p-6 rounded-lg">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#004681] p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous images"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#004681] p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next images"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex * 100) / imagesPerView}%)` }}
            >
              {images.map((src, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-full px-1 sm:px-2"
                  style={{ width: `${100 / imagesPerView}%` }}
                >
                  <div className="w-full max-w-sm sm:max-w-md md:max-w-xl h-64 sm:h-80 md:h-96 bg-white rounded-lg shadow-md overflow-hidden mx-auto">
                    <Image
                      src={src}
                      alt={`Product Image ${index + 1}`}
                      width={600}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots - Now below the carousel */}
        <div className="flex justify-center mt-3 sm:mt-4 space-x-1.5 sm:space-x-2">
          {Array.from({ length: Math.ceil(images.length / imagesPerView) }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * imagesPerView)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / imagesPerView) === index
                  ? 'bg-[#004681] scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarouselSection;
