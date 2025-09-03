import React from 'react';
import Image from 'next/image';

const AttachedSection = () => {
  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h2 className="font-sansation-regular text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#004681] mb-3 sm:mb-4 text-center sm:text-left">
            Six step terracycle guide
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Six Step Guide */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
              <Image
                src="/other/sixStep.jpg"
                alt="Six Step Recycling Guide"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
              <Image
                src="/other/section-2.jpg"
                alt="Recycling Process Section 2"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 sm:col-span-2 lg:col-span-1">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
              <Image
                src="/other/section-3.jpg"
                alt="Label Process Section 3"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttachedSection;
