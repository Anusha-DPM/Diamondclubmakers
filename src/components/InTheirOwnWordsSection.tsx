"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const InTheirOwnWordsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

  // Comprehensive testimonial data with all 30 testimonials
  const testimonials = [
         {
       id: 1,
       name: "Dr. Andreea Torok",
       location: "Denver Colorado",
       title: "DCM Yoda",
       video: "/doctor-video/Dr.-Andreea-Torok.mp4",
       thumbnail: "/doctors/Dr.-Andreea-Torok.png",
       content: [
         "Bronze to Gold Plus, 4 tiers in the five and 1/2 months so far.",
         "$350k in practice growth so far this year due to DCM!"
       ]
     },
         {
       id: 2,
       name: "Dr. Yonatan Ahdut",
       location: "Seattle Washington",
       title: "DCM Yoda",
       video: "/doctor-video/Dr.-Yonatan-Ahdut.mp4",
       thumbnail: "/doctors/Dr.-Yonatan-Ahdut.png",
       content: [
         "Estimated $180k in Invisalign growth for the first five months of the course.",
         "I had been at Platinum Plus but couldn't sustain it. I slid back and got stuck at Gold Plus. But now I am going to hit Platinum Plus during DCM and be able to sustain it while finding a better balance within my entire practice. And I am hoping to reach Diamond over the next six months."
       ]
     },
         {
       id: 3,
       name: "Dr. Linty John-Varghese",
       location: "Centerville Ohio",
       title: "DCM Yoda",
       video: "/doctor-video/Dr.-Linty-John-Varghese-1.mp4",
       thumbnail: "/doctors/Linty.webp",
       content: [
         "$150k growth just in my Invisalign collections over the six month course.",
         "Jumped 4 tiers from Bronze to Gold Plus in the six months and looking forward to continued growth."
       ]
     },
         {
       id: 4,
       name: "Dr. Adriann Hooks",
       location: "Armstrong Dental Care, Kittanning, PA",
       title: "DCM Graduate",
       video: "/doctor-video/dr-hooks-HD-720p.mp4",
       thumbnail: "/doctors/dr-hooks-HD-720p.png",
       content: [
         "Dr. Adriann Hooks found the pot of gold under the rainbow.",
         "My rural not high income small town practice increased revenue 440K in that year from what I learned in DCM."
       ]
     },
    {
      id: 5,
      name: "Dr Dan Blazo",
      location: "Advanced Smile, Dearborn, Michigan",
      title: "DCM Pitt",
      video: "/doctor-video/dr-lawen-video.mp4",
      thumbnail: "/doctors/dr-dan-blazo.png",
      content: [
        "Prior to starting DCM, I really struggled to increase my Invialisgn® case count, and just didn't have that confidence when it came to handling some of the more advanced cases, so I decided to join DCM, and man, it has been the best investment of my career.",
        "Learning from Dr. Michael Wollock has completely changed my office in all areas, Invisalign®, restorative, hygiene, everything."
      ]
    },
    {
      id: 6,
      name: "Dr Brock Arms",
      location: "Lifesmiles Dentistry, Cadillac, Michigan",
      title: "DCM Norton",
      video: "/doctor-video/dr-brock-arms.mp4",
      thumbnail: "/doctors/dr-brock-arms.png",
      content: [
        "I was one of those dentists that dabbled in Invisalign® for several years, never breaking free from the Silver level. I attended Reingage with Dr. Geller this past December and saw with new eyes the incredible potential with Invisalign® in my practice.",
        "So I really wanted to implement things as fast and effectively as possible, and I heard about Dr. Wollock's DCM class, and I signed up with that…never looked back. I went from Silver to Platinum in four and a half months."
      ]
    },
    {
      id: 7,
      name: "Dr Simranjit Bawa",
      location: "Potomac Crown Dentistry, North Potomac, Maryland",
      title: "DCM Norton",
      video: "/doctor-video/dr-simranjit-bawa-video.mp4",
      thumbnail: "/doctors/dr-simranjit-bawa-video.png",
      content: [
        "If you are committed and dedicated and willing to put in the work, and you're looking to take your practice to the next level and become the best Invisalign® doctor in your community, you have to take this course, without a doubt."
      ]
    },
    {
      id: 8,
      name: "Dr Karen Ho",
      location: "Palm View Dental, Alhambra, California",
      title: "DCM Destruction",
      video: "/doctor-video/dr-karen-ho-video.mp4",
      thumbnail: "/doctors/dr-karen-ho-video.png",
      content: [
        "I learned so much in these last six months, and with Mike's help, I was able to jump from Platinum to Diamond Top 1% Provider. All within six months."
      ]
    },
    {
      id: 9,
      name: "Dr Lauren Lee",
      location: "Orange Beach Family Dentistry, Orange Beach, Alabama",
      title: "DCM Norton",
      video: "/doctor-video/dr-lauren-lee-video.mp4",
      thumbnail: "/doctors/dr-lauren-lee-video.png",
      content: [
        "Your Invisalign® cases will have less refinements, you will be more confident doing them, they will be faster, and the whole team is going to just know what to do."
      ]
    },
    {
      id: 10,
      name: "Dr Saba Rizvi",
      location: "My Dentist for Life, Plantation, FL",
      title: "DCM Pitt",
      video: "/doctor-video/dr-sabra-rizvi.mp4",
      thumbnail: "/doctors/dr-sabra-rizvi.png",
      content: [
        "It has really helped my practice increase in numbers, we're doing a lot more Invisalign®. And it's not just Invisalign®, but in every aspect, all the procedures we are doing.",
        "It just makes you a more efficient dentist, because time is the most valuable thing that we have."
      ]
    },
    {
      id: 11,
      name: "Dr. Ciaran Murphy",
      location: "Harbor Dental, Fort Collins, Colorado",
      title: "DCM Graduate",
      video: "/doctor-video/dr-ciaran-murphy.mp4",
      thumbnail: "/doctors/dr-ciaran-murphy.png",
      content: [
        "Truly, it was a game changer for my practice. Not just for an increase in Invisalign® cases, but also just for increasing our productivity, getting our staff more involved, getting more excited about doing some of these procedures.",
        "They really felt like they were much more part of a team. The class helps you get much more efficient with your Invisalign®, first of all, but at the same time it's going to reduce the doctor chair time and increase your staff's chair time, which will make you more productive."
      ]
    },
    {
      id: 12,
      name: "Cara Lund",
      location: "Lund Dental Associates, Stoneham, Massachusetts",
      title: "DCM Pitt",
      video: "/doctor-video/dr-cara-lund.mp4",
      thumbnail: "/doctors/dr-cara-lund.png",
      content: [
        "In terms of the program, you really get the ins and outs of everything, from pricing to marketing to advertising to the appointments, everything that you could want to know about how someone who's super successful with Invisalign® does it."
      ]
    },
    {
      id: 13,
      name: "Dr. Arezoo Nasiry",
      location: "LA Dental Clinic, Los Angeles, California",
      title: "DCM Destruction",
      video: "/doctor-video/dr-arezoo-nasiry.mp4",
      thumbnail: "/doctors/dr-arezoo-nasiry.png",
      content: [
        "I was at a Gold Plus and I was thinking to myself that there's no way this course on a WhatsApp chat is going to get me to Diamond. But I found that Mike's teachings not only helped us to get to Diamond in Invisalign®, but we've been able to use a lot of the same systems for other parts of our practice as well."
      ]
    },
    {
      id: 14,
      name: "Dr Andrew Paek",
      location: "Jersey City Dental Center, Jersey City, New Jersey",
      title: "DCM Pitt",
      video: "/doctor-video/dr-andrew-paek.mp4",
      thumbnail: "/doctors/dr-andrew-paek.png",
      content: [
        "It's an amazing course, and it will change not only the way you provide Invisalign®, but also the way you run your practice, market, all aspects of being a clinician and a business owner."
      ]
    },
    {
      id: 15,
      name: "Dr Azy Nasiry",
      location: "LA Dental Clinic, Los Angeles, California",
      title: "DCM Neo",
      video: "/doctor-video/dr-asy-nasiry.mp4",
      thumbnail: "/doctors/dr-asy-nasiry.png",
      content: [
        "This course has been absolutely invaluable to me. He doesn't only teach you how to market to bring in those kinds of cases, but how to do your Clinchecks properly so that you can manage that kind of volume, how to set up your office so that your team can process the cases for you…but the most important thing that I've learned here is how to achieve my goals."
      ]
    },
    {
      id: 16,
      name: "Dr William Sung",
      location: "Grand Mission Dentistry, Richmond, Texas",
      title: "DCM Norton",
      video: "/doctor-video/dr-william-sung.mp4",
      thumbnail: "/doctors/dr-william-sung.png",
      content: [
        "Out of the group that I'm currently with, I was probably one of the least-experienced providers in the group. However, the things that he's taught just makes you a lot more confident, makes you more efficient with Invisalign® so that way you're able to increase your production while minimizing chair time, and some of the things he teaches you can also apply to other facets of dentistry, which I really appreciated."
      ]
    },
    {
      id: 17,
      name: "Dr Rob Herron",
      location: "Herron Regional Dental Center, Columbus, Kansas",
      title: "DCM Destruction",
      video: "/doctor-video/dr-rob-herron.mp4",
      thumbnail: "/doctors/dr-rob-herron.png",
      content: [
        "Everyone thinks, 'Well, it's to help people that are struggling,' but nothing could be less true. In our class…we had people that we're doing under 10 cases a year, and then you had people like me who were doing Platinum…but we had people that were over 100 every six months.",
        "And while the name is Diamond Club Makers…that's a goal, and I think that's a goal for everyone. But I watched everyone who put Mike's princples to use, did better."
      ]
    },
    {
      id: 18,
      name: "Dr Jaime Breziner",
      location: "La Jolla Family Smile Design, La Jolla, California",
      title: "DCM Pitt",
      video: "/doctor-video/dr-jaime-breziner.mp4",
      thumbnail: "/doctors/dr-jaime-breziner.png",
      content: [
        "It was a great game changer. I do a lot of Invisalign® now, I do it much faster, I can expedite the cases through the pipeline very quick, because of the knowledge that I gained through DCM…it's worth every penny and I would do it all over again."
      ]
    },
    {
      id: 19,
      name: "Dr Jim Olsen",
      location: "James Olsen DDS, Ann Arbor, Michigan",
      title: "DCM Norton",
      video: "/doctor-video/dr-jim-olsen.mp4",
      thumbnail: "/doctors/dr-jim-olsen.png",
      content: [
        "Thanks to Dr. Michael Wollock and his system, me and my team were able to achieve Diamond in just over five months. I can't express my gratitude adequately to Dr. Wollock for showing me the way, for giving us an outline on how to get this done.",
        "If you're considering joining the Diamond Club, I think you really need to do it. It will change your practice and it will give you confidence in doing more Invisalign® and you'll do it better than ever."
      ]
    },
    {
      id: 20,
      name: "Dr Shari Morningstar",
      location: "Gustafson & Morningstar Dentistry, Royal Oak, Michigan",
      title: "DCM Pitt",
      video: "/doctor-video/Dr-Shari-Morningstar.mp4",
      thumbnail: "/doctors/Dr-Shari-Morningstar.png",
      content: [
        "I've got to tell you, this is unlike any mentoring program that I have ever been involved with. You have daily contact with Dr. Wollock and all your other team members. Every week, you get a lesson, and I have to say that that has taken me out of my comfort zone, going over those lessons…and it's paid off.",
        "I have increased my production over 200%, tripling my cases. But we know it's not just about the numbers, I have learned to break down barriers, barriers I didn't know existed in my practice."
      ]
    },
    {
      id: 21,
      name: "Dr. Amelia Chan",
      location: "Downtown Dentistry, Toronto, Canada",
      title: "DCM Graduate",
      video: "/doctor-video/dr-amelia-chan-video-HD-720p.mp4",
      thumbnail: "/doctors/dr-amelia-chan-video-HD-720p.png",
      content: [
        "I am the owner and principal dentist at Downtown Dentistry. I am currently a platinum plus Invisalign Provider with many thanks to Dr. Mike Wollock for all his fabulous guidance and support since 2016. He has amazing tips and I have followed through with almost every one of them.",
        "I am now starting at least 15 cases per month and finishing many cases on time! Before I met Dr. Mike, I might have started only 1 case per month. I've also been awarded the Galler Invisalign trophy for being a group member of top Invisalign providers in North America. Being part of the Galler group and knowing Dr. Mike has been a huge game changer in my life and career. I highly recommend that you connect with Dr. Mike Wollock and you will see a huge difference shortly."
      ]
    },
    {
      id: 22,
      name: "Dr. Drew W. Fairweather",
      location: "Better Image Dentistry, Bridgewater Township, New Jersey",
      title: "DCM Graduate",
      video: "/doctor-video/testimonials-drew.mp4",
      thumbnail: "/doctors/testimonials-drew.png",
      content: [
        "I have a bright, motivated team, but we were floundering with mediocre Invisalign numbers. Dr. Wollock showed all of us how to present Invisalign treatment and to convert more cases. Just as important, and maybe moreso, he taught us how to be efficient in these presentations…",
        "When systems were properly structured, I was able to only do what I needed to do, with my team handling most of the duties and chair time."
      ]
    },
    {
      id: 23,
      name: "Dr. Shauna Basil",
      location: "Dental Arts of Westwood, Westwood, Massachusetts",
      title: "DCM Graduate",
      video: "/doctor-video/testimonials-shauna-HD-720p.mp4",
      thumbnail: "/doctors/testimonials-shauna-HD-720p.png",
      content: [
        "Since 2016, I've been able to grow Invisalign in my office and I've become a Gold+ Provider, and most recently we've hit Platinum. I owe a lot of my successs to Dr. Michael Wollock. Without his guidance, I don't think that I would have been able to hit these goals that I had set for myself."
      ]
    },
    {
      id: 24,
      name: "Dr. Edward G. Johnson",
      location: "Johnson Family & Cosmetic Dentistry, Bedminster, New Jersey",
      title: "DCM Graduate",
      video: "/doctor-video/dr-johnson-video-HD-720p.mp4",
      thumbnail: "/doctors/dr-johnson-video-HD-720p.png",
      content: [
        "I had the good fortune five years ago of meeting Dr. Mike Wollock at a dental conference. Prior to that, the 5 years prior, I did 40 cases, which was averaging about eight cases a year of Invisalign. Since meeting Mike with his leadership and guidance, we've upped that to 325 cases in the next 5 years…",
        "I can't say enough what Mike has done for my practice. I know if you choose to go in and have Mike be your leader, your educator, that you won't regret it."
      ]
    },
    {
      id: 25,
      name: "Dr. Danny Lawen",
      location: "Lawen Dentistry, Halifax, Nova Scotia, Canada",
      title: "DCM Graduate",
      video: "/doctor-video/dr-lawen-video.mp4",
      thumbnail: "/doctors/dr-lawen-video.png",
      content: [
        "I was lucky enough to be selected as part of the first ever Diamond Club Maker study group hosted by Dr. Mike Wollock…we were able to increase our case numbers, probably about by double. We're on pace to become a Diamond level for the first time ever, so we're pretty excited about that.",
        "Currently in under four months we've done more cases than we normally would do in around seven or eight months."
      ]
    },
    {
      id: 26,
      name: "Dr. Lindsay Papac",
      location: "Great Northwest Dental, Auburn, WA",
      title: "DCM Graduate",
      video: "/doctor-video/Dr-Lindsey-Papac.mp4",
      thumbnail: "/doctors/Dr-Lindsey-Papac.png",
      content: [
        "I feel less overwhelmed about all the cases I'm managing and taking on, I have more efficient systems in place, my assistants are more efficient, my use of time is better and it's constantly improving.",
        "So I would say that if someone is looking to be challenged, to be pushed, to be better at what they're doing…this is the right thing to do and you won't be disappointed doing this program."
      ]
    },
    {
      id: 27,
      name: "Amir Daoud, DDS",
      location: "Feather Sound Smiles, Clearwater, FL",
      title: "DCM Graduate",
      video: "/Amir-Daoud.mp4",
      thumbnail: "/doctors/Amir-Daoud.png",
      content: [
        "I urge anybody who is serious about increasing their numbers of Invisalign®, not just increasing numbers but also looking at some of the systems that they have in their practice, to seriously consider taking this. I'm a big believer in 'Numbers don't lie'…prior to taking the Diamond Club, my best ever six months was Platinum, which was 65 cases.",
        "I'm four months into it…and I'm at 95 cases as of today, with still two months to go, so I'm actually on pace to hit Diamond."
      ]
    },
    {
      id: 28,
      name: "Aman Bhullar",
      location: "The Glen Dental, San Jose, CA",
      title: "CEO of 3dimplants educational services",
      video: "/bhullar-testimonial.mp4",
      thumbnail: "/doctors/bhullar-testimonial.png",
      content: [
        "Jumping in with the DCM and Mike's leadership allowed her to do more cases and acquire new patients into the practice. That turned into other treatment…that treatment turned into more crown and bridge, more restorations, more fillings, more hygiene appointments into the practice, so it's really allowed her to increase her revenue from a practice that's still doing over a million in a three-day work-week to almost fifty per cent more in the first 6 months of 2021."
      ]
    },
    {
      id: 29,
      name: "Dr. Grisel Martos",
      location: "305 My Smile, Miami, FL",
      title: "DCM Graduate",
      video: "/doctor-video/testimonials-dr-martos.mp4",
      thumbnail: "/doctors/testimonials-dr-martos.png",
      content: [
        "This course is only for someone who really, really wants to do a lot of Invisalign® cases and under Dr. Wollock, you are going to have amazing success. Listen to everything he does…It really, really changed my life, he really changed the way I practice, the way I do Invisalign®."
      ]
    },
    {
      id: 30,
      name: "Dr. Deepthy Thomas",
      location: "Reflections Dental Spa, San Ramon, California",
      title: "DCM Graduate",
      video: "/doctor-video/Dr-Deepthy-Thomas.mp4",
      thumbnail: "/doctors/Dr-Deepthy-Thomas.png",
      content: [
        "There was a lot of ups and downs in my Invisalign® journey. I've been doing Invisalign® for 8-10 years…Dr. Mike, he gives you and teaches you a blueprint of what works and how he's able to scale things and to be the Diamond+ Provider that he is."
      ]
    }
  ];

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  const handleVideoClick = (index) => {
    setPlayingVideoIndex(index);
  };

  const handleVideoEnd = () => {
    setPlayingVideoIndex(null);
  };

  return (
    <div className="bg-[#019fde] w-full py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
                 <h2 
           className="font-sansation-regular text-white text-center mb-0"
           style={{ fontSize: '30px' }}
         >
           In Their Own Words
         </h2>

                                   {/* Carousel Container */}
          <div className="relative overflow-hidden">
            {/* Main Content with proper spacing for navigation arrows */}
                        <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                                 <div 
                   key={testimonial.id}
                   className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12 px-20 min-w-full"
                 >
                                       {/* Video Section - Left Side */}
                    <div className="w-full lg:w-[30%] flex justify-center">
                     <div className="relative w-[200px] h-[300px]">
                       <div className="relative w-[200px] h-[300px] rounded-lg overflow-hidden shadow-lg">
                         {/* Video Thumbnail - shown when not playing */}
                         {playingVideoIndex !== index && (
                           <>
                             <Image 
                               src={testimonial.thumbnail} 
                               alt={testimonial.name}
                               width={200}
                               height={300}
                               className="w-[200px] h-[300px] object-cover"
                             />
                             
                             {/* Play Button Overlay */}
                             <div className="absolute inset-0 flex items-center justify-center">
                               <button
                                 onClick={() => handleVideoClick(index)}
                                 className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-200"
                                 type="button"
                                 aria-label="Play video"
                               >
                                 <svg className="w-8 h-8 text-[#019fde] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                   <path d="M8 5v14l11-7z"/>
                                 </svg>
                               </button>
                             </div>
                           </>
                         )}
                         
                                                   {/* Video Element - shown when playing */}
                          {playingVideoIndex === index && (
                            <video 
                              className="w-[200px] h-[300px] object-cover"
                              src={testimonial.video}
                              controls
                              autoPlay
                              muted
                              onEnded={() => setPlayingVideoIndex(null)}
                              onPause={() => setPlayingVideoIndex(null)}
                              onPlay={() => setPlayingVideoIndex(index)}
                            />
                          )}
                       </div>
                     </div>
                   </div>

                   {/* Testimonial Content - Right Side */}
                   <div className="w-full lg:w-[70%] space-y-6">
                                         {/* Testimonial Text */}
                     <div className="space-y-4 text-left">
                       {testimonial.content.map((text, textIndex) => (
                         <p 
                           key={textIndex}
                           className="font-sansation-regular text-white leading-relaxed"
                           style={{ fontSize: '17px' }}
                         >
                           {text}
                         </p>
                       ))}
                     </div>

                                         {/* Attribution */}
                     <div className="text-right space-y-1">
                       <p 
                         className="font-sansation-regular text-white font-semibold"
                         style={{ fontSize: '16px' }}
                       >
                         {testimonial.name}
                       </p>
                       <p 
                         className="font-sansation-regular text-white"
                         style={{ fontSize: '16px' }}
                       >
                         {testimonial.location}
                       </p>
                       <p 
                         className="font-sansation-regular text-white"
                         style={{ fontSize: '16px' }}
                       >
                         {testimonial.title}
                       </p>
                     </div>

                                                                                                             {/* Read More Button for each testimonial */}
                         <div className="flex justify-start mt-6">
                           <button 
                             className="font-sansation-regular text-white bg-[#004681] hover:bg-[#003366] transition-colors duration-200"
                             style={{ 
                               fontSize: '16px', 
                               padding: '6px 15px',
                               borderRadius: '0',
                               marginTop: '30px',
                               marginLeft: '150px'
                             }}
                           >
                             Read More
                           </button>
                         </div>
                   </div>
                 </div>
               ))}
             </div>

           {/* Navigation Arrows - positioned outside content area */}
           <button 
             onClick={prevSlide}
             className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-200"
             type="button"
             aria-label="Previous testimonial"
           >
             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
             </svg>
           </button>

           <button 
             onClick={nextSlide}
             className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-200"
             type="button"
             aria-label="Next testimonial"
           >
             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
             </svg>
           </button>

                   </div>
       </div>
     </div>
   );
 };
 
 export default InTheirOwnWordsSection;
