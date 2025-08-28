"use client";

import { useState, useEffect } from 'react';

interface DCMDoctor {
  id: number;
  name: string;
  program: string;
  title?: string;
  tiers: string;
  diamondCount: number;
}

const DCMDiamondsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const doctors: DCMDoctor[] = [
    { id: 1, name: "Dr. Dalvir Gupta", program: "DCM Yoda", tiers: "3 tiers: Gold Plus to Diamond", diamondCount: 1 },
    { id: 2, name: "Dr. Danny Lawen", program: "DCM Neo", title: "DCM Neo-Destruction President", tiers: "2 tiers: Platinum to Diamond", diamondCount: 1 },
    { id: 3, name: "Dr. Eric Kwon", program: "DCM Pitt", title: "MIKE", tiers: "2 tiers: Platinum to Diamond", diamondCount: 1 },
    { id: 4, name: "Dr. Frank Neves", program: "DCM Pitt", tiers: "1 tier: Platinum Plus to Diamond", diamondCount: 1 },
    { id: 5, name: "Dr. Geoff Jackson", program: "DCM Pitt", tiers: "2 tiers: Platinum to Diamond", diamondCount: 1 },
    { id: 6, name: "Dr. Harjinder S. Girn", program: "DCM Norton", tiers: "2 tiers: Platinum to Diamond", diamondCount: 1 },
    { id: 7, name: "Dr. Harpreet Singh Dhillon", program: "DCM Rebellion", tiers: "4 tiers: Gold to Diamond", diamondCount: 1 },
    { id: 8, name: "Dr. Isaac V. Perle", program: "DCM Norton", tiers: "3 tiers: Platinum to Diamond Plus", diamondCount: 2 },
    { id: 9, name: "Dr. Jaime Breziner", program: "DCM Pitt", tiers: "1 tier: Platinum Plus to Diamond", diamondCount: 1 },
    { id: 10, name: "Dr. James Olsen", program: "DCM Norton", title: "DCM Norton-Pitt President", tiers: "2 tiers: Platinum Plus to Diamond Plus", diamondCount: 2 },
    { id: 11, name: "Dr. Jason Ganong", program: "DCM Destruction", tiers: "2 tiers: Platinum to Diamond", diamondCount: 1 },
    { id: 12, name: "Dr. Karen Ho", program: "DCM Destruction", tiers: "2 tiers: Platinum to Diamond", diamondCount: 1 },
    { id: 13, name: "Dr. Lindsey Papac", program: "DCM Neo", tiers: "2 tiers: Platinum Plus to Diamond Plus", diamondCount: 2 },
    { id: 14, name: "Dr. Quyen Dang", program: "DCM Yoda", tiers: "2 tiers: Platinum to Diamond", diamondCount: 1 },
    { id: 15, name: "Dr. Richard A Dickinson", program: "DCM Yoda", tiers: "2 tiers: Platinum to Diamond", diamondCount: 1 },
    { id: 16, name: "Dr. Savita Chaudhry", program: "DCM Rebellion", tiers: "2 tiers: Platinum to Diamond", diamondCount: 1 },
    { id: 17, name: "Dr. Simranjit S. Bawa", program: "DCM Rebellion", tiers: "3 tiers: Platinum to Diamond Plus", diamondCount: 2 },
    { id: 18, name: "Dr. Yujin \"Amy\" Jung", program: "DCM Yoda", tiers: "7 tiers: Bronze to Diamond", diamondCount: 1 },
    { id: 19, name: "Dr. Adriann Hooks", program: "DCM Destruction", tiers: "2 tiers: Platinum to Diamond", diamondCount: 1 },
    { id: 20, name: "Dr. Amir Daoud", program: "DCM Neo", title: "DCM Diamonds President", tiers: "3 tiers: Platinum to Diamond PLUS", diamondCount: 2 },
    { id: 21, name: "Dr. Bhawna Gupta", program: "DCM Rebellion", tiers: "3 tiers: Platinum to Diamond PLUS", diamondCount: 2 }
  ];

  // Auto carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [doctors.length]);

  const renderDiamonds = (count: number) => {
    return "💎".repeat(count);
  };

  const getDoctorImage = (doctor: DCMDoctor) => {
    const imageMap: { [key: string]: string } = {
      "Dr. Dalvir Gupta": "/Dr.-Dalvir-Gupta💎💎🦄-300x300.jpg",
      "Dr. Danny Lawen": "/Dr.-Danny-Lawen-💎-300x300.jpg",
      "Dr. Eric Kwon": "/Dr.-Eric-Kwon💎-300x300.jpg",
      "Dr. Frank Neves": "/Dr.-Frank-Neves💎-300x300.jpg",
      "Dr. Geoff Jackson": "/Dr.-Geoff-Jackson💎-300x300.jpg",
      "Dr. Harjinder S. Girn": "/Dr.-Harjinder-S.-Girn-💎-300x300.jpg",
      "Dr. Harpreet Singh Dhillon": "/Dr. Harpreet Singh Dhillon.jpg",
      "Dr. Isaac V. Perle": "/Dr. Isaac V Perle.jpg",
      "Dr. Jaime Breziner": "/Dr. Jaime Breziner.jpg",
      "Dr. James Olsen": "/Dr. James Olsen.jpg",
      "Dr. Jason Ganong": "/Dr.-Jason-Ganong-💎-300x300.jpg",
      "Dr. Karen Ho": "/Dr.-Karen-Ho-💎-300x300.jpg",
      "Dr. Lindsey Papac": "/Dr.-Lindsey-Papac-💎-💎-300x300.jpg",
      "Dr. Quyen Dang": "/Dr.-Quyen-Dang-💎-300x300.jpg",
      "Dr. Richard A Dickinson": "/Dr. Richard A Dickinson.jpeg",
      "Dr. Savita Chaudhry": "/Dr.-Savita-Chaudhry-💎-300x300.jpg",
      "Dr. Simranjit S. Bawa": "/Dr.-Simranjit-S.-Bawa-💎-💎-300x300.jpg",
      "Dr. Yujin \"Amy\" Jung": "/Dr. Yujin \"Amy\" Jung.jpeg",
      "Dr. Adriann Hooks": "/Dr.-Adriann-Hooks💎-300x300.jpg",
      "Dr. Amir Daoud": "/Dr. Amir Daoud💎💎.jpg",
      "Dr. Bhawna Gupta": "/Dr.-Bhawna-Gupta💎💎🦄-300x300.jpg"
    };
    
    return imageMap[doctor.name] || "/main-dcm.png"; // fallback to main-dcm.png
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 
          className="font-sansation-regular text-[#004681] mb-8 sm:mb-10 lg:mb-12"
          style={{ fontSize: '30px' }}
        >
          DCM Diamonds
        </h1>

        {/* Introductory Text */}
        <p 
          className="font-sansation-regular text-[#6b6b6b] mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto leading-relaxed"
          style={{ fontSize: '17px' }}
        >
          Congratulations to the many DCM graduates who have now reached Diamond or even Diamond Plus. These are some of the top Invisalign GP dentists in all of North America. Their desire to be better has guided their successful climb to the top. Well done!
        </p>

        {/* Carousel Section with Navigation */}
        <div className="relative">
          {/* Auto Carousel Container */}
          <div className="relative overflow-hidden bg-[#fafafa] rounded-lg p-8">
            <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {doctors.map((doctor) => (
                <div key={doctor.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg p-6 sm:p-8 max-w-md mx-auto border border-gray-200">
                    {/* Doctor Image */}
                    <div className="w-24 h-24 mx-auto mb-4 overflow-hidden bg-gray-200 flex items-center justify-center">
                      <img
                        src={getDoctorImage(doctor)}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                                <span class="text-white text-2xl font-bold">${doctor.name.split(' ')[1]}</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>

                                         {/* Doctor Name with Diamonds */}
                     <div className="flex items-center justify-center mb-4">
                       <h3 className="font-sansation-regular text-[#004681] font-semibold mr-2" style={{ fontSize: '15px' }}>
                         {doctor.name}
                       </h3>
                       <span className="text-2xl sm:text-3xl">
                         {renderDiamonds(doctor.diamondCount)}
                       </span>
                     </div>

                     {/* DCM Program */}
                     <p className="font-sansation-regular text-[#6b6b6b] mb-2" style={{ fontSize: '12px' }}>
                       {doctor.program}
                     </p>

                     {/* Title (if exists) */}
                     {doctor.title && (
                       <p className="font-sansation-regular text-[#6b6b6b] mb-2" style={{ fontSize: '12px' }}>
                         {doctor.title}
                       </p>
                     )}

                     {/* Tiers */}
                     <p className="font-sansation-regular text-[#6b6b6b] font-medium" style={{ fontSize: '12px' }}>
                       {doctor.tiers}
                     </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Previous/Next Buttons - Outside Carousel */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition-colors duration-200 z-10"
            aria-label="Previous doctor"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % doctors.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition-colors duration-200 z-10"
            aria-label="Next doctor"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DCMDiamondsSection;
