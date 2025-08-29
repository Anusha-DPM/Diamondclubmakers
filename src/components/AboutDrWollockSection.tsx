"use client";

const AboutDrWollockSection = () => {
  return (
         <div className="bg-white pt-12 sm:pt-16 lg:pt-20 pb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 lg:pr-8">
            {/* Heading */}
            <h2 
              className="font-sansation-regular text-[#004681]"
              style={{ fontSize: '30px' }}
            >
              About Dr. Michael I. Wollock and the origin of DCM
            </h2>

            {/* Paragraph 1 */}
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed mb-6" style={{ fontSize: '17px' }}>
              Learn from someone who has done Invisalign for over 23 plus years. Certified in Aligns first class for GP's. Who has already helped over 300 other dentists achieve their true Invisalign practice potential. Who is consistently on pace for 700 cases a year, in an eight-chair full general dentistry office, average 26 hours a week 46 weeks a year, one dentist no associates or partners, with over 5.1 million in collections.
            </p>

            {/* Paragraph 2 */}
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed mb-6" style={{ fontSize: '17px' }}>
              For those who don't know me; I am a Board Member and Fellow of the AACA (American Academy of Cosmetic Aligners), President of the Empire Chapter since its inception; 2016, and Chief Diamond Maker for the Diamond Club Makers. As an organization DCM has produced more GP Diamonds than any other organization ever. I personally have been the AACA's biggest Invisalign producer every year since we have been in existence. I am and have been an Invisalign Diamond PLUS 1%er since 2017. Now, well over 5000 plus Invisalign Patients. I serve as an educator, consultant, and Board Member for Align on its North American GP Advisory Board. And now besides running and practicing in my office on the Main Line of Philadelphia (Dentistry at Suburban Square), I am sharing my vast Invisalign knowledge and experience with fellow dentists through Diamond Club Makers. Where I gain great joy and pride in serving those members. Helping them achieve unparalleled growth in their Invisalign numbers as well as their overall practice collections and management.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start lg:pl-4">
            <div className="relative">
                             <img 
                 src="/about.jpg"
                 alt="Dr. Michael I. Wollock"
                 className="w-full max-w-sm lg:max-w-md object-cover"
                 style={{ height: '300px', marginTop: '50px' }}
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDrWollockSection;
