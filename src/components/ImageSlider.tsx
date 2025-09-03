'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/hero1.png',
    '/hero6.png',
    '/hero2.png',
    '/hero3.png',
    '/hero4.png',
    '/hero5.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <section className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] overflow-hidden bg-[#004681]">
        {/* Image Container */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                index === currentIndex 
                  ? 'translate-x-0' 
                  : index < currentIndex 
                    ? '-translate-x-full' 
                    : 'translate-x-full'
              }`}
            >
              <Image
                src={image}
                alt={`Hero image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Carousel Indicators - Outside the slider background */}
      <div className="flex justify-center space-x-2 sm:space-x-3 mt-4 sm:mt-5">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors duration-300 ${
              index === currentIndex 
                ? 'bg-[#004681]' 
                : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
