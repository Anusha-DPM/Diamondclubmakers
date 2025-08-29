"use client";

import { useState } from 'react';
import Image from 'next/image';
import AboutDrWollockSection from './AboutDrWollockSection';
import DCMClassesSection from './DCMClassesSection';
import DCMCourseStructureSection from './DCMCourseStructureSection';
import InTheirOwnWordsSection from './InTheirOwnWordsSection';

const DiamondClubMakerSection = () => {
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null);

  const handleVideoClick = (index: number) => {
    setPlayingVideoIndex(index);
  };

  const handleVideoEnd = () => {
    setPlayingVideoIndex(null);
  };

  return (
    <section className="bg-white pt-12 sm:pt-16 lg:pt-20">
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
               <div className="relative w-full h-64">
                 {/* Video Thumbnail - shown when not playing */}
                 {playingVideoIndex !== 0 && (
                   <>
                     <Image 
                       src="/1.jpg"
                       alt="Helga Idrizi"
                       width={256}
                       height={256}
                       className="w-full h-64 object-cover rounded-lg"
                     />
                     {/* Play Button Overlay - Clickable */}
                     <div 
                       className="absolute inset-0 flex items-center justify-center cursor-pointer"
                       onClick={() => handleVideoClick(0)}
                     >
                       <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-200">
                         <svg className="w-8 h-8 text-[#004681] ml-1" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M8 5v14l11-7z"/>
                         </svg>
                       </div>
                     </div>
                   </>
                 )}
                 
                 {/* Video Element - shown when playing */}
                 {playingVideoIndex === 0 && (
                   <video 
                     className="w-full h-64 object-cover rounded-lg"
                     src="/Helga-Idrizi.mp4"
                     controls
                     autoPlay
                     muted
                     onEnded={handleVideoEnd}
                     onPause={() => setPlayingVideoIndex(null)}
                     onPlay={() => setPlayingVideoIndex(0)}
                   />
                 )}
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
               <div className="relative w-full h-64">
                 {/* Video Thumbnail - shown when not playing */}
                 {playingVideoIndex !== 1 && (
                   <>
                     <Image 
                       src="/2.jpg"
                       alt="Moshe Rechthand"
                       width={256}
                       height={256}
                       className="w-full h-64 object-cover rounded-lg"
                     />
                     {/* Play Button Overlay - Clickable */}
                     <div 
                       className="absolute inset-0 flex items-center justify-center cursor-pointer"
                       onClick={() => handleVideoClick(1)}
                     >
                       <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-200">
                         <svg className="w-8 h-8 text-[#004681] ml-1" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M8 5v14l11-7z"/>
                         </svg>
                       </div>
                     </div>
                   </>
                 )}
                 
                 {/* Video Element - shown when playing */}
                 {playingVideoIndex === 1 && (
                   <video 
                     className="w-full h-64 object-cover rounded-lg"
                     src="/Moshe-Rechthand.mp4"
                     controls
                     autoPlay
                     muted
                     onEnded={handleVideoEnd}
                     onPause={() => setPlayingVideoIndex(null)}
                     onPlay={() => setPlayingVideoIndex(1)}
                   />
                 )}
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
               <div className="relative w-full h-64">
                 {/* Video Thumbnail - shown when not playing */}
                 {playingVideoIndex !== 2 && (
                   <>
                     <Image 
                       src="/3.jpg"
                       alt="Rebecca Charpentier"
                       width={256}
                       height={256}
                       className="w-full h-64 object-cover rounded-lg"
                     />
                     {/* Play Button Overlay - Clickable */}
                     <div 
                       className="absolute inset-0 flex items-center justify-center cursor-pointer"
                       onClick={() => handleVideoClick(2)}
                     >
                       <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-200">
                         <svg className="w-8 h-8 text-[#004681] ml-1" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M8 5v14l11-7z"/>
                         </svg>
                       </div>
                     </div>
                   </>
                 )}
                 
                 {/* Video Element - shown when playing */}
                 {playingVideoIndex === 2 && (
                   <video 
                     className="w-full h-64 object-cover rounded-lg"
                     src="/Rebecca-Charpentier.mp4"
                     controls
                     autoPlay
                     muted
                     onEnded={handleVideoEnd}
                     onPause={() => setPlayingVideoIndex(null)}
                     onPlay={() => setPlayingVideoIndex(2)}
                   />
                 )}
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



        {/* Call-to-Action Section */}
        <div className="bg-white pt-12 sm:pt-16 lg:pt-20" style={{ paddingBottom: '50px' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Heading */}
            <h2 
              className="font-sansation-regular text-[#004681] mb-4"
              style={{ fontSize: '30px', marginBottom: '20px' }}
            >
              Are You Ready to Join the Diamond Club Makers?
            </h2>

            {/* Apply Now Button */}
            <div className="mb-4">
              <button 
                className="font-sansation-regular bg-[#029fde] text-white px-10 py-2.5 hover:bg-[#0288c7] transition-colors duration-200 font-semibold"
                style={{ fontSize: '20px', borderRadius: '5px' }}
              >
                Apply Now
              </button>
            </div>

            {/* Descriptive Text */}
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed max-w-4xl mx-auto" style={{ fontSize: '17px', paddingTop: '20px', paddingLeft: '110px', paddingRight: '110px' }}>
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

        {/* In Their Own Words Section */}
        <InTheirOwnWordsSection />

                                              {/* About Dr. Michael I. Wollock Section */}
          <AboutDrWollockSection />

                   {/* Additional Content Section - Full Width */}
          <div className="bg-white pt-0 pb-12 sm:pb-16 lg:pb-20">
           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="space-y-6">
               {/* Paragraph 1 */}
               <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                 Since being certified by Align in 2001, I had been hovering around 40 cases a year. While having greater experience than the average GP doing 15 a year, I still really had no idea what I was doing. I thought that&apos;s what Align was doing. That was and is a naïve idea. I attended all the CE on Invisalign that there was. At the time it was entirely orthodontists who lectured, and they spoke a different language then us as GP&apos;s. They also had very little interest in having GP&apos;s compete for what was their exclusive market segment. But I knew that I only referred out 5-15% of my patient&apos;s RCT&apos;s, extractions, kids, perio, etc… But why am I referring out 100% of my patients ortho needs. After searching far and wide, I found the one non-orthodontist Invisalign lecturer. He was just starting his lecture career. In fact, I believe I was at one of his first lectures outside New York where he was practicing at the time. After seeing Dr David Galler speak on GST (Galler Spacing Technique) at an Align Dinner CE at Maggiano&apos;s in King of Prussia PA, I was hooked. We exchanged phone numbers (WhatsApp wasn&apos;t even a twinkle in anyone&apos;s eye).
               </p>

               {/* Paragraph 2 */}
               <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                 When David began his Reingage series long ago, I called him, and he gave me a choice of where I could go. Yeah, as then and now, its waiting list only. I choose a short drive to Terrytown NY. Went up for a Thursday morning and at the end of the day I discovered there was another day of the class. I called my team and cancelled my patient schedule; I couldn&apos;t miss the second day. Just after, I became President of that class, the Empire Aligners. My Invisalign production jumped from 40 to 80 that year, but that wasn&apos;t enough. I started playing the Align Advantage game, thinking saving money by doing more cases was the only path. While I have been at Diamond and Diamond Plus since 2017, what I learned and teach in DCM is that saving from Aligns Advantage game is small compared to the time saving I show DCM doctors, the savings in making Invisalign significantly more predictable, and the exponential growth effect that Invisalign facilitates throughout my entire GP practice.
               </p>

                               {/* Paragraph 3 */}
                <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                  At some point in this journey Frank Quinn at the time Align&apos;s North American Sales and Special Markets VP turned to me on one of our many conversations over Perfect Manhattans and said I was a &quot;Unicorn&quot;. That what I was doing with Invisalign as a GP was unique and not reproducible. This challenged a very core belief I have of myself, that I am not special. That what I do is reproducible. And that each and every one of you can achieve any and all I have and more. That&apos;s what I strive to help each DCM doctor with.
                </p>

                                                  {/* Invisalign Awards and Badges Section */}
                 <div className="mt-12">
                   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4 md:gap-6">
                     {/* Elite Provider 2007 */}
                     <div className="flex flex-col items-center">
                       <Image 
                         src="/invisalign-logo1.png" 
                         alt="Invisalign 2007 Elite Provider"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain"
                       />
                     </div>

                     {/* Elite Provider 2008 */}
                     <div className="flex flex-col items-center">
                       <Image 
                         src="/invisalign-logo2.png" 
                         alt="Invisalign 2008 Elite Provider"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain"
                       />
                     </div>

                     {/* Elite Provider 2009 */}
                     <div className="flex flex-col items-center">
                       <Image 
                         src="/invisalign-logo3.png" 
                         alt="Invisalign 2009 Elite Provider"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain"
                       />
                     </div>

                     {/* Elite Provider 2010 */}
                     <div className="flex flex-col items-center">
                       <Image 
                         src="/invisalign-logo4.png" 
                         alt="Invisalign 2010 Elite Provider"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain"
                       />
                     </div>

                     {/* Elite Provider 2011 */}
                     <div className="flex flex-col items-center">
                       <Image 
                         src="/invisalign-logo5.png" 
                         alt="Invisalign 2011 Elite Provider"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain"
                       />
                     </div>

                     {/* Elite Provider 2012 */}
                     <div className="flex flex-col items-center">
                       <Image 
                         src="/invisalign-logo6.png" 
                         alt="Invisalign 2012 Elite Provider"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain"
                       />
                     </div>

                     {/* Elite Provider 2013 */}
                     <div className="flex flex-col items-center">
                       <Image 
                         src="/invisalign-logo7.jpg" 
                         alt="Invisalign 2013 Elite Provider"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain"
                       />
                     </div>

                     {/* Elite Provider 2014 */}
                     <div className="flex flex-col items-center">
                       <Image 
                         src="/invisalign-logo8.png" 
                         alt="Invisalign 2014 Elite Provider"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain"
                       />
                     </div>

                     {/* Elite Provider 2015 */}
                     <div className="flex flex-col items-center">
                       <Image 
                         src="/invisalign-logo9.png" 
                         alt="Invisalign 2015 Elite Provider"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain"
                       />
                     </div>

                     {/* Elite Provider 2016 */}
                     <div className="flex flex-col items-center">
                       <Image 
                         src="/invisalign-logo10.png" 
                         alt="Invisalign 2016 Elite Provider"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain"
                       />
                     </div>

                     {/* Elite Provider 2017 */}
                     <div className="flex flex-col items-center">
                       <Image 
                         src="/invisalign-logo11.png" 
                         alt="Invisalign 2017 Elite Provider"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain"
                       />
                     </div>

                     {/* Diamond+ 2018 */}
                     <div className="flex flex-col items-center">
                       <Image 
                         src="/invisalign-logo12.png" 
                         alt="Diamond+ Invisalign Provider 2018"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain"
                       />
                     </div>

                     {/* Diamond+ Top 1% 2019 */}
                     <div className="flex flex-col items-center justify-center text-center">
                       <Image 
                         src="/invisalign-logo13.png" 
                         alt="Diamond+ Top 1% Invisalign Provider 2019"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain mx-auto"
                       />
                     </div>

                     {/* Diamond+ Top 1% 2020 */}
                     <div className="flex flex-col items-center justify-center text-center">
                       <Image 
                         src="/invisalign-logo14.jpg" 
                         alt="Diamond+ Top 1% Invisalign Provider 2020"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain mx-auto"
                       />
                     </div>

                     {/* Diamond+ Top 1% 2021 */}
                     <div className="flex flex-col items-center justify-center text-center">
                       <Image 
                         src="/invisalign-logo15.jpg" 
                         alt="Diamond+ Top 1% Invisalign Provider 2021"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain mx-auto"
                       />
                     </div>

                     {/* Diamond+ Top 1% 2022 */}
                     <div className="flex flex-col items-center justify-center text-center">
                       <Image 
                         src="/invisalign-logo17.jpg" 
                         alt="Diamond+ Top 1% Invisalign Provider 2022"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain mx-auto"
                       />
                     </div>

                     {/* Diamond+ Top 1% 2023 */}
                     <div className="flex flex-col items-center justify-center text-center">
                       <Image 
                         src="/invisalign-logo18.jpg" 
                         alt="Diamond+ Top 1% Invisalign Provider 2023"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain mx-auto"
                       />
                     </div>

                     {/* Blue Diamond+ 2024 */}
                     <div className="flex flex-col items-center">
                       <Image 
                         src="/invisalign-logo19.jpg" 
                         alt="Blue Diamond+ Invisalign Provider 2024"
                         width={75}
                         height={75}
                         className="w-[75px] h-auto object-contain"
                       />
                     </div>
                   </div>
                                   </div>
              </div>
            </div>
          </div>

                     {/* New Section: Why Reinvent the Wheel */}
           <div className="bg-white pt-0 pb-0">
             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="space-y-6">
                 {/* Main Text Block */}
                 <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                   Why reinvent the wheel when I can show you the blueprints that will help you to build what I have. Join me on your journey to become the pinnacle Invisalign provider in your community. To position your office for success during difficult business headwinds. Stop being the workhorse that is towing the cart weighed down by an unmotivated group of employees. Start spreading your wings to become a unicorn leading your Team to new heights.
                 </p>

                 {/* Apply Now Button */}
                 <div className="mb-6">
                   <button 
                     className="font-sansation-regular text-white font-semibold hover:opacity-90 transition-opacity duration-200"
                     style={{ 
                       fontSize: '16px',
                       backgroundColor: '#004681',
                       padding: '6px 15px',
                       borderRadius: '0'
                     }}
                   >
                     Apply Now
                   </button>
                 </div>

                 {/* Secondary Text Block */}
                 <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed italic" style={{ fontSize: '17px' }}>
                   The online six-month class starts every July and January. But fills up long before. You can add your name to our next classes waiting list by applying now. Early applicants are given preference.
                 </p>
               </div>
             </div>
           </div>

                       {/* DCM Classes Section */}
            <DCMClassesSection />
            
                        {/* DCM Course Structure Section */}
            <DCMCourseStructureSection />
          </section>
    );
  };

export default DiamondClubMakerSection;
