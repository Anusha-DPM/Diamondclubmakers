import React from 'react';
import Image from 'next/image';

const AttachedSection = () => {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-sansation-regular text-2xl sm:text-3xl font-bold text-[#004681] mb-4">
            Six step terracycle guide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Six Step Guide */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/other/sixStep.jpg"
                alt="Six Step Recycling Guide"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/other/section-2.jpg"
                alt="Recycling Process Section 2"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/other/section-3.jpg"
                alt="Label Process Section 3"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttachedSection;
