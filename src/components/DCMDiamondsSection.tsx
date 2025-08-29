"use client";

import { useState, useEffect } from 'react';

interface DCMDoctor {
  id: number;
  name: string;
  program: string;
  tiers: string;
  diamondCount: number;
  image: string;
}

const DCMDiamondsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(5);

  // Set cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(5); // Desktop: 5 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerView(3); // Tablet: 3 cards
      } else {
        setCardsPerView(1); // Mobile: 1 card
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const doctors: DCMDoctor[] = [
    { 
      id: 1, 
      name: "Dr. Geoff Jackson", 
      program: "DCM Pitt", 
      tiers: "2 tiers: Platinum to Diamond", 
      diamondCount: 1,
      image: "/Dr.-Geoff-Jackson💎-300x300.jpg"
    },
    { 
      id: 2, 
      name: "Dr. Harjinder S. Girn", 
      program: "DCM Norton", 
      tiers: "2 tiers: Platinum to Diamond", 
      diamondCount: 1,
      image: "/Dr.-Harjinder-S.-Girn-💎-300x300.jpg"
    },
    { 
      id: 3, 
      name: "Dr. Harpreet Singh Dhillon", 
      program: "DCM Rebellion", 
      tiers: "4 tiers: Gold to Diamond", 
      diamondCount: 1,
      image: "/Dr. Harpreet Singh Dhillon.jpg"
    },
    { 
      id: 4, 
      name: "Dr. Isaac V. Perle", 
      program: "DCM Norton", 
      tiers: "3 tiers: Platinum to Diamond Plus", 
      diamondCount: 2,
      image: "/Dr. Isaac V Perle.jpg"
    },
    { 
      id: 5, 
      name: "Dr. Jaime Breziner", 
      program: "DCM Pitt", 
      tiers: "1 tier: Platinum Plus to Diamond", 
      diamondCount: 1,
      image: "/Dr. Jaime Breziner.jpg"
    },
    { 
      id: 6, 
      name: "Dr. Dalvir Gupta", 
      program: "DCM Yoda", 
      tiers: "3 tiers: Gold Plus to Diamond", 
      diamondCount: 1,
      image: "/Dr.-Dalvir-Gupta💎💎🦄-300x300.jpg"
    },
    { 
      id: 7, 
      name: "Dr. Danny Lawen", 
      program: "DCM Neo", 
      tiers: "2 tiers: Platinum to Diamond", 
      diamondCount: 1,
      image: "/Dr.-Danny-Lawen-💎-300x300.jpg"
    },
    { 
      id: 8, 
      name: "Dr. Eric Kwon", 
      program: "DCM Pitt", 
      tiers: "2 tiers: Platinum to Diamond", 
      diamondCount: 1,
      image: "/Dr.-Eric-Kwon💎-300x300.jpg"
    },
    { 
      id: 9, 
      name: "Dr. Frank Neves", 
      program: "DCM Pitt", 
      tiers: "1 tier: Platinum Plus to Diamond", 
      diamondCount: 1,
      image: "/Dr.-Frank-Neves💎-300x300.jpg"
    },
    { 
      id: 10, 
      name: "Dr. James Olsen", 
      program: "DCM Norton", 
      tiers: "2 tiers: Platinum Plus to Diamond Plus", 
      diamondCount: 2,
      image: "/Dr. James Olsen.jpg"
    },
    { 
      id: 11, 
      name: "Dr. Jason Ganong", 
      program: "DCM Destruction", 
      tiers: "2 tiers: Platinum to Diamond", 
      diamondCount: 1,
      image: "/Dr.-Jason-Ganong-💎-300x300.jpg"
    },
    { 
      id: 12, 
      name: "Dr. Karen Ho", 
      program: "DCM Destruction", 
      tiers: "2 tiers: Platinum to Diamond", 
      diamondCount: 1,
      image: "/Dr.-Karen-Ho-💎-300x300.jpg"
    },
    { 
      id: 13, 
      name: "Dr. Lindsey Papac", 
      program: "DCM Neo", 
      tiers: "2 tiers: Platinum Plus to Diamond Plus", 
      diamondCount: 2,
      image: "/Dr.-Lindsey-Papac-💎-💎-300x300.jpg"
    },
    { 
      id: 14, 
      name: "Dr. Quyen Dang", 
      program: "DCM Yoda", 
      tiers: "2 tiers: Platinum to Diamond", 
      diamondCount: 1,
      image: "/Dr.-Quyen-Dang-💎-300x300.jpg"
    },
    { 
      id: 15, 
      name: "Dr. Richard A Dickinson", 
      program: "DCM Yoda", 
      tiers: "2 tiers: Platinum to Diamond", 
      diamondCount: 1,
      image: "/Dr. Richard A Dickinson.jpeg"
    },
    { 
      id: 16, 
      name: "Dr. Savita Chaudhry", 
      program: "DCM Rebellion", 
      tiers: "2 tiers: Platinum to Diamond", 
      diamondCount: 1,
      image: "/Dr.-Savita-Chaudhry-💎-300x300.jpg"
    },
    { 
      id: 17, 
      name: "Dr. Simranjit S. Bawa", 
      program: "DCM Rebellion", 
      tiers: "3 tiers: Platinum to Diamond Plus", 
      diamondCount: 2,
      image: "/Dr.-Simranjit-S.-Bawa-💎-💎-300x300.jpg"
    },
    { 
      id: 18, 
      name: "Dr. Yujin \"Amy\" Jung", 
      program: "DCM Yoda", 
      tiers: "7 tiers: Bronze to Diamond", 
      diamondCount: 1,
      image: "/Dr. Yujin \"Amy\" Jung.jpeg"
    },
    { 
      id: 19, 
      name: "Dr. Adriann Hooks", 
      program: "DCM Destruction", 
      tiers: "2 tiers: Platinum to Diamond", 
      diamondCount: 1,
      image: "/Dr.-Adriann-Hooks💎-300x300.jpg"
    },
    { 
      id: 20, 
      name: "Dr. Amir Daoud", 
      program: "DCM Neo", 
      tiers: "3 tiers: Platinum to Diamond PLUS", 
      diamondCount: 2,
      image: "/Dr. Amir Daoud💎💎.jpg"
    },
    { 
      id: 21, 
      name: "Dr. Bhawna Gupta", 
      program: "DCM Rebellion", 
      tiers: "3 tiers: Platinum to Diamond PLUS", 
      diamondCount: 2,
      image: "/Dr.-Bhawna-Gupta💎💎🦄-300x300.jpg"
    }
  ];

  // Auto carousel effect with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [doctors.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length);
  };

  const renderDiamonds = (count: number) => {
    return "💎".repeat(count);
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 
          className="font-sansation-regular text-[#004681] mb-6"
          style={{ fontSize: '30px' }}
        >
          DCM Diamonds
        </h1>

        {/* Introductory Text */}
        <p 
          className="font-sansation-regular text-[#6b6b6b] mb-12 max-w-6xl mx-auto leading-relaxed"
          style={{ fontSize: '17px' }}
        >
          Congratulations to the many DCM graduates who have now reached Diamond or even Diamond Plus. These are some of the top Invisalign GP dentists in all of North America. Their desire to be better has guided their successful climb to the top. Well done!
        </p>

        {/* Carousel Section */}
        <div className="relative">
          {/* Navigation Arrows - Outside Carousel */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-[#004681] p-3 rounded-full shadow-lg transition-all duration-200 z-20 border border-gray-200"
            aria-label="Previous doctor"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-[#004681] p-3 rounded-full shadow-lg transition-all duration-200 z-20 border border-gray-200"
            aria-label="Next doctor"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

                                {/* Carousel Container */}
            <div className="overflow-hidden bg-[#fafafa] rounded-lg p-8">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` 
                }}
              >
                {doctors.map((doctor, index) => (
                                     <div 
                     key={doctor.id} 
                     className="w-full sm:w-1/3 lg:w-1/5 flex-shrink-0 px-1"
                     style={{ width: `${100 / cardsPerView}%` }}
                   >
                   <div className="text-center">
                                         {/* Doctor Image - Square */}
                     <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 overflow-hidden shadow-md">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                                <span class="text-white text-lg sm:text-xl font-bold">${doctor.name.split(' ')[1]}</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>

                    {/* Doctor Name with Diamond Icon */}
                    <div className="flex items-center justify-center mb-2">
                      <h3 className="font-sansation-regular text-[#004681] font-bold mr-2 text-center" style={{ fontSize: '14px' }}>
                        {doctor.name}
                      </h3>
                      <span className="text-sm">
                        {renderDiamonds(doctor.diamondCount)}
                      </span>
                    </div>

                    {/* DCM Program */}
                    <p className="font-sansation-regular text-[#6b6b6b] mb-2 text-center" style={{ fontSize: '12px' }}>
                      {doctor.program}
                    </p>

                    {/* Tiers */}
                    <p className="font-sansation-regular text-[#6b6b6b] font-medium text-center" style={{ fontSize: '12px' }}>
                      {doctor.tiers}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DCMDiamondsSection;
