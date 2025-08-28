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
      <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden bg-[#004681]" style={{ paddingBottom: '43px' }}>
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
              />
            </div>
          ))}
        </div>
      </section>

      {/* Carousel Indicators - Outside the slider background */}
      <div className="flex justify-center space-x-1.5 sm:space-x-2 mt-3 sm:mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex 
                ? 'bg-[#004681]' 
                : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
