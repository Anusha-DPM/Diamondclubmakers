"use client";

import { useState } from 'react';

const DiamondClubMakerSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <h1 
          className="font-sansation-regular text-[#004681] text-center mb-3 sm:mb-4 lg:mb-6"
          style={{ fontSize: '30px' }}
        >
          What is required to become a Diamond Club Maker
        </h1>

        {/* Section 1: It really boils down to desire */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h2 
            className="font-sansation-regular text-[#004681] mb-3 sm:mb-4 lg:mb-6"
            style={{ fontSize: '27px' }}
          >
            It really boils down to desire.
          </h2>
          
          <div className="space-y-4 sm:space-y-6">
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
              I have taken large multi-dentist big city offices who are stuck at Platinum to Diamond. Small rural single 3 chair offices from Gold to Diamond. And brand-new dentists just starting their office with very little Invisalign experience from Bronze to Diamond. All within the six-month course. And while not everyone reaches Diamond, almost all do more Invisalign, do it significantly more profitably, with greater predictability, with confidence and knowledge that they couldn&apos;t and can&apos;t get anywhere else. This almost always leads to a substantial rise in overall practice collections. Which leads DCM doctors to long-term business and financial security. And the only thing that anyone needs to become another DCM success story is the desire to do more, to do it better, and to create happy patient&apos;s that appreciate all you do while significantly increasing your income.
            </p>
            
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
              Sorry no DSO offices at this point in time. I choose to serve the small dentist/business like myself. In an effort to help them remain independent and to thrive in this ever-increasing competitive world.
            </p>
            
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
              So go up to the Menu at the top of the page and press Apply to fill out the application to be considered for the next class. The sooner you join, the quicker and longer exponential growth can happen.
            </p>
          </div>
        </div>

        {/* Section 2: Let's do DCM Math */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 
            className="font-sansation-regular text-[#004681] mb-6 sm:mb-8 lg:mb-10"
            style={{ fontSize: '27px' }}
          >
            Let&apos;s do DCM Math
          </h2>
          
          <div className="space-y-4 sm:space-y-6">
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
              Diamond Club Makers costs around 11k. Which is no small number. Some ask, isn&apos;t that a lot of money for a CE course? Fair questions, but a flawed perspective. It&apos;s not about how much money a course costs. It&apos;s about how much money that course can make you.
            </p>
            
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
              The reality is that almost every DCM graduate would tell you they made a minimum of 10-fold back easily during the six months of the course alone. Many have made upwards of $250,000 to an almost unbelievable million back within those same six months. And none of that accounts for the staggering amount of money from increased income they make over the entire year or even their career. I know that it&apos;s tough to believe, but this is what DCM graduates consistently report.
            </p>
            
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
              Additionally, most dentists have taken a day or two course. They may pay $500 to $2500 for that course. If they spent a day they could have been working. They lost 8 hours and 20-30k in income because they had not been in the office producing. (If you are not making at least 20-30k a day then you definitely need this course). Only to learn a few pearls that give them very little ROI and fails to make significant change in their stalled minimal growth practice. If that works for you, then keep doing what you&apos;re doing, and this course is not for you.
            </p>
            
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
              But if you want to do something better, if you want to improve your practice by leaps and bounds, if you want a 10-fold PLUS return on investment (understated) in the six months of this course alone. And if you are wise enough to think outside the box you are trapped in. Then DCM is for you.
            </p>
            
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
              If you are still unsure, I will happily make you a deal. Pay me nothing now. But since I am investing in you. I want return for my investment. So, you sign away 1% of any and all future practice growth every year over the next ten years. Then and only then will I be truly compensated for the millions of extra dollars I have helped you achieve.
            </p>
            
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
              Then there are some that would rather buy a 10k shiny piece of equipment that you use once or twice a month until you forget about it, and it collects dust in the storage closet. Why not invest in yourself. The untapped power within you to produce more. The only thing holding anyone back is desire and knowledge. I share that knowledge. You just need to bring the desire.
            </p>
            
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
              Others jump on board with programs like Scheduling Institute. Amazing content and for hundreds of thousands of dollars over time they will make you a lot of money. But why are you paying them an ungodly amount more?
            </p>
            
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
              So, you have options:
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                Continue to sit on the sidelines missing out on your real and true income potential. What&apos;s another year or two? I can tell you it is 100&apos;s of thousands of dollars and millions over the course of your career.
              </p>
              
              <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                Take minimally effective programs that you miss work and lose more than you make.
              </p>
              
              <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                Buy some fancy piece of equipment that promises everything just like the other fancy pieces of equipment in your storage closet did. Or start using your best piece of equipment to its maximum potential (your brain).
              </p>
              
              <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                Pay 100&apos;s of thousands of dollars for something with real change.
              </p>
              
              <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                Or do what over 300 others have done now. Making them better Invisalign dentists, better dentists overall, and better businesspersons. Sign up now for what turns out to be a small amount of investment in yourself in order to unlock your true potential.
              </p>
            </div>
            
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
              Don&apos;t take my word. Listen to these dentists:
            </p>
          </div>
        </div>
      </div>

             {/* Video Section with 4 columns (3 videos + 1 empty) */}
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-4 gap-6">
                     {/* Video 1 - Helga Idrizi */}
           <div className="col-span-1">
             <div className="relative">
                               <div className="relative cursor-pointer group" onClick={() => openVideo('/Helga-Idrizi.mp4')}>
                  <img 
                    src="/1.jpg"
                    alt="Helga Idrizi"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                 {/* Play Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-opacity-100 transition-all duration-200">
                     <svg className="w-8 h-8 text-[#004681] ml-1" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M8 5v14l11-7z"/>
                     </svg>
                   </div>
                 </div>
               </div>
               <div className="mt-3">
                 <p className="font-sansation-regular text-[#004681]" style={{ fontSize: '17px' }}>
                   Helga Idrizi, DCM Rebellion
                 </p>
                 <p className="font-sansation-regular text-[#004681]" style={{ fontSize: '17px' }}>
                   Jumped three tiers during the class and two more after for a total of five tiers
                 </p>
               </div>
             </div>
           </div>

                     {/* Video 2 - Moshe Rechthand */}
           <div className="col-span-1">
             <div className="relative">
                               <div className="relative cursor-pointer group" onClick={() => openVideo('/Moshe-Rechthand.mp4')}>
                  <img 
                    src="/2.jpg"
                    alt="Moshe Rechthand"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                 {/* Play Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-opacity-100 transition-all duration-200">
                     <svg className="w-8 h-8 text-[#004681] ml-1" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M8 5v14l11-7z"/>
                     </svg>
                   </div>
                 </div>
               </div>
               <div className="mt-3">
                 <p className="font-sansation-regular text-[#004681]" style={{ fontSize: '17px' }}>
                   Moshe Rechthand, DCM Yoda
                 </p>
                 <p className="font-sansation-regular text-[#004681]" style={{ fontSize: '17px' }}>
                   Jumped three tiers
                 </p>
               </div>
             </div>
           </div>

                     {/* Video 3 - Rebecca Charpentier */}
           <div className="col-span-1">
             <div className="relative">
                               <div className="relative cursor-pointer group" onClick={() => openVideo('/Rebecca-Charpentier.mp4')}>
                  <img 
                    src="/3.jpg"
                    alt="Rebecca Charpentier"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                 {/* Play Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-opacity-100 transition-all duration-200">
                     <svg className="w-8 h-8 text-[#004681] ml-1" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M8 5v14l11-7z"/>
                     </svg>
                   </div>
                 </div>
               </div>
               <div className="mt-3">
                 <p className="font-sansation-regular text-[#004681]" style={{ fontSize: '17px' }}>
                   Rebecca Charpentier, DCM Rebellion
                 </p>
                 <p className="font-sansation-regular text-[#004681]" style={{ fontSize: '17px' }}>
                   Jumped one tier
                 </p>
               </div>
             </div>
           </div>

          {/* Empty 4th column */}
          <div className="col-span-1">
            {/* Empty space */}
                     </div>
         </div>
       </div>

               {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors z-10"
              >
                ×
              </button>
              
              {/* Video Player */}
              <video
                className="w-full h-auto max-h-[80vh] rounded-lg"
                controls
                autoPlay
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* Call-to-Action Section */}
        <div className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Heading */}
                         <h2 
               className="font-sansation-regular text-[#004681] mb-4"
               style={{ fontSize: '30px' }}
             >
               Are You Ready to Join the Diamond Club Makers?
             </h2>

             {/* Apply Now Button */}
             <div className="mb-4">
               <button 
                 className="font-sansation-regular bg-[#029fde] text-white px-10 py-2.5 rounded-lg hover:bg-[#0288c7] transition-colors duration-200 font-semibold"
                 style={{ fontSize: '20px' }}
               >
                 Apply Now
               </button>
             </div>

             {/* Descriptive Text */}
             <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed max-w-4xl mx-auto" style={{ fontSize: '17px' }}>
              For more information email us at{' '}
              <a 
                href="mailto:michaeliwollock@hotmail.com" 
                className="text-[#004681] hover:underline transition-all duration-200"
              >
                michaeliwollock@hotmail.com
              </a>
              . We are currently accepting applicants. Classes usually start in January and July but are formed in the months prior. Early applications are given preference.
            </p>
          </div>
        </div>
      </section>
   );
 };

export default DiamondClubMakerSection;
