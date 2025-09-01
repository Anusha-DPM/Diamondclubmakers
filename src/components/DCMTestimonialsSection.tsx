"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const DCMTestimonialsSection = () => {
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null);

  const handleVideoClick = (index: number) => {
    setPlayingVideoIndex(index);
  };

  const getVideoPath = (name: string) => {
    const videoMap: { [key: string]: string } = {
      "Dr. Andreea Torok": "/doctor-video/Dr.-Andreea-Torok.mp4",
      "Dr. Yonatan Ahdut": "/doctor-video/Dr.-Yonatan-Ahdut.mp4",
      "Dr. Linty John-Varghese": "/doctor-video/Dr.-Linty-John-Varghese-1.mp4",
      "Dr. Adriann Hooks": "/doctor-video/dr-hooks-HD-720p.mp4",
      "Dr Dan Blazo": "/doctor-video/dr-dan-blazo.mp4",
      "Dr. Brock Arms": "/doctor-video/dr-brock-arms.mp4",
      "Dr Simranjit Bawa": "/doctor-video/dr-simranjit-bawa-video.mp4",
      "Dr Karen Ho": "/doctor-video/dr-karen-ho-video.mp4",
      "Dr Lauren Lee": "/doctor-video/dr-lauren-lee-video.mp4",
      "Dr Saba Rizvi": "/doctor-video/dr-sabra-rizvi.mp4",
      "Dr. Ciaran Murphy": "/doctor-video/dr-ciaran-murphy.mp4",
      "Cara Lund": "/doctor-video/dr-cara-lund.mp4",
      "Dr. Arezoo Nasiry": "/doctor-video/dr-arezoo-nasiry.mp4",
      "Dr Andrew Paek": "/doctor-video/dr-andrew-paek.mp4",
      "Dr Azy Nasiry": "/doctor-video/dr-asy-nasiry.mp4",
      "Dr William Sung": "/doctor-video/dr-william-sung.mp4",
      "Dr Rob Herron": "/doctor-video/dr-rob-herron.mp4",
      "Dr Jaime Breziner": "/doctor-video/dr-jaime-breziner.mp4",
      "Dr Jim Olsen": "/doctor-video/dr-jim-olsen.mp4",
      "Dr Shari Morningstar": "/doctor-video/Dr-Shari-Morningstar.mp4",
      "Dr. Amelia Chan": "/doctor-video/dr-amelia-chan-video-HD-720p.mp4",
      "Dr. Drew W. Fairweather": "/doctor-video/testimonials-drew.mp4",
      "Dr. Shauna Basil": "/doctor-video/testimonials-shauna-HD-720p.mp4",
      "Dr. Edward G. Johnson": "/doctor-video/dr-johnson-video-HD-720p.mp4",
      "Dr. Danny Lawen": "/doctor-video/dr-lawen-video.mp4",
      "Dr. Lindsay Papac": "/doctor-video/Dr-Lindsey-Papac.mp4",
      "Amir Daoud, DDS": "/doctor-video/Amir-Daoud.mp4",
      "Aman Bhullar": "/doctor-video/bhullar-testimonial.mp4",
      "Dr. Grisel Martos": "/doctor-video/testimonials-dr-martos.mp4",
      "Dr. Deepthy Thomas": "/doctor-video/Dr-Deepthy-Thomas.mp4"
    };
    return videoMap[name] || "";
  };
  const testimonials = [
    {
      id: 1,
      name: "Dr. Andreea Torok",
      location: "Denver Colorado",
      title: "DCM Yoda",
      content: "Bronze to Gold Plus, 4 tiers in the five and 1/2 months so far. $350k in practice growth so far this year due to DCM!",
      thumbnail: "/doctors/Dr.-Andreea-Torok.png"
    },
    {
      id: 2,
      name: "Dr. Yonatan Ahdut",
      location: "Seattle Washington",
      title: "DCM Yoda",
      content: "Estimated $180k in Invisalign growth for the first five months of the course. I had been at Platinum Plus but couldn't sustain it. I slid back and got stuck at Gold Plus. But now I am going to hit Platinum Plus during DCM and be able to sustain it while finding a better balance within my entire practice. And I am hoping to reach Diamond over the next six months.",
      thumbnail: "/doctors/Dr.-Yonatan-Ahdut.png"
    },
    {
      id: 3,
      name: "Dr. Linty John-Varghese",
      location: "Centerville Ohio",
      title: "DCM Yoda",
      content: "$150k growth just in my Invisalign collections over the six month course. Jumped 4 tiers from Bronze to Gold Plus in the six months and looking forward to continued growth.",
      thumbnail: "/doctors/Linty.webp"
    },
    {
      id: 4,
      name: "Dr. Adriann Hooks",
      location: "Kittanning, PA",
      title: "Armstrong Dental Care",
             content: "Dr. Adriann Hooks found the pot of gold under the rainbow. &quot;My rural not high income small town practice increased revenue 440K in that year from what I learned in DCM.&quot;",
      thumbnail: "/doctors/dr-hooks-HD-720p.png"
    },
    {
      id: 5,
      name: "Dr Dan Blazo",
      location: "Dearborn, Michigan",
      title: "Advanced Smile",
             content: "Prior to starting DCM, I really struggled to increase my Invialisgn® case count, and just didn&apos;t have that confidence when it came to handling some of the more advanced cases, so I decided to join DCM, and man, it has been the best investment of my career. Learning from Dr. Michael Wollock has completely changed my office in all areas, Invisalign®, restorative, hygiene, everything.",
      thumbnail: "/doctors/dr-dan-blazo.png"
    },
    {
      id: 6,
      name: "Dr. Brock Arms",
      location: "Cadillac, Michigan",
      title: "Lifesmiles Dentistry",
             content: "I was one of those dentists that dabbled in Invisalign® for several years, never breaking free from the Silver level. I attended Reingage with Dr. Geller this past December and saw with new eyes the incredible potential with Invisalign® in my practice. So I really wanted to implement things as fast and effectively as possible, and I heard about Dr. Wollock&apos;s DCM class, and I signed up with that…never looked back. I went from Silver to Platinum in four and a half months.",
      thumbnail: "/doctors/dr-brock-arms.png"
    },
    {
      id: 7,
      name: "Dr Simranjit Bawa",
      location: "North Potomac, Maryland",
      title: "Potomac Crown Dentistry",
             content: "If you are committed and dedicated and willing to put in the work, and you&apos;re looking to take your practice to the next level and become the best Invisalign® doctor in your community, you have to take this course, without a doubt.",
      thumbnail: "/doctors/dr-simranjit-bawa-video.png"
    },
    {
      id: 8,
      name: "Dr Karen Ho",
      location: "Alhambra, California",
      title: "Palm View Dental",
             content: "I learned so much in these last six months, and with Mike&apos;s help, I was able to jump from Platinum to Diamond Top 1% Provider. All within six months.",
      thumbnail: "/doctors/dr-karen-ho-video.png"
    },
    {
      id: 9,
      name: "Dr Lauren Lee",
      location: "Orange Beach, Alabama",
      title: "Orange Beach Family Dentistry",
      content: "Your Invisalign® cases will have less refinements, you will be more confident doing them, they will be faster, and the whole team is going to just know what to do.",
      thumbnail: "/doctors/dr-lauren-lee-video.png"
    },
    {
      id: 10,
      name: "Dr Saba Rizvi",
      location: "Plantation, FL",
      title: "My Dentist for Life",
             content: "It has really helped my practice increase in numbers, we&apos;re doing a lot more Invisalign®. And it&apos;s not just Invisalign®, but in every aspect, all the procedures we are doing. It just makes you a more efficient dentist, because time is the most valuable thing that we have.",
      thumbnail: "/doctors/dr-sabra-rizvi.png"
    },
    {
      id: 11,
      name: "Dr. Ciaran Murphy",
      location: "Fort Collins, Colorado",
      title: "Harbor Dental",
      content: "Truly, it was a game changer for my practice. Not just for an increase in Invisalign® cases, but also just for increasing our productivity, getting our staff more involved, getting more excited about doing some of these procedures. They really felt like they were much more part of a team. The class helps you get much more efficient with your Invisalign®, first of all, but at the same time it's going to reduce the doctor chair time and increase your staff's chair time, which will make you more productive.",
      thumbnail: "/doctors/dr-ciaran-murphy.png"
    },
    {
      id: 12,
      name: "Cara Lund",
      location: "Stoneham, Massachusetts",
      title: "Lund Dental Associates",
             content: "In terms of the program, you really get the ins and outs of everything, from pricing to marketing to advertising to the appointments, everything that you could want to know about how someone who&apos;s super successful with Invisalign® does it.",
      thumbnail: "/doctors/dr-cara-lund.png"
    },
    {
      id: 13,
      name: "Dr. Arezoo Nasiry",
      location: "Los Angeles, California",
      title: "LA Dental Clinic",
             content: "I was at a Gold Plus and I was thinking to myself that there&apos;s no way this course on a WhatsApp chat is going to get me to Diamond. But I found that Mike&apos;s teachings not only helped us to get to Diamond in Invisalign®, but we&apos;ve been able to use a lot of the same systems for other parts of our practice as well.",
      thumbnail: "/doctors/dr-arezoo-nasiry.png"
    },
    {
      id: 14,
      name: "Dr Andrew Paek",
      location: "Jersey City, New Jersey",
      title: "Jersey City Dental Center",
             content: "It&apos;s an amazing course, and it will change not only the way you provide Invisalign®, but also the way you run your practice, market, all aspects of being a clinician and a business owner.",
      thumbnail: "/doctors/dr-andrew-paek.png"
    },
    {
      id: 15,
      name: "Dr Azy Nasiry",
      location: "Los Angeles, California",
      title: "LA Dental Clinic",
             content: "This course has been absolutely invaluable to me. He doesn&apos;t only teach you how to market to bring in those kinds of cases, but how to do your Clinchecks properly so that you can manage that kind of volume, how to set up your office so that your team can process the cases for you…but the most important thing that I&apos;ve learned here is how to achieve my goals.",
      thumbnail: "/doctors/dr-asy-nasiry.png"
    },
    {
      id: 16,
      name: "Dr William Sung",
      location: "Richmond, Texas",
      title: "Grand Mission Dentistry",
             content: "Out of the group that I&apos;m currently with, I was probably one of the least-experienced providers in the group. However, the things that he&apos;s taught just makes you a lot more confident, makes you more efficient with Invisalign® so that way you&apos;re able to increase your production while minimizing chair time, and some of the things he teaches you can also apply to other facets of dentistry, which I really appreciated.",
      thumbnail: "/doctors/dr-william-sung.png"
    },
    {
      id: 17,
      name: "Dr Rob Herron",
      location: "Columbus, Kansas",
      title: "Herron Regional Dental Center",
             content: "Everyone thinks, &quot;Well, it&apos;s to help people that are struggling,&quot; but nothing could be less true. In our class…we had people that we&apos;re doing under 10 cases a year, and then you had people like me who were doing Platinum…but we had people that were over 100 every six months. And while the name is Diamond Club Makers…that&apos;s a goal, and I think that&apos;s a goal for everyone. But I watched everyone who put Mike&apos;s princples to use, did better.",
      thumbnail: "/doctors/dr-rob-herron.png"
    },
    {
      id: 18,
      name: "Dr Jaime Breziner",
      location: "La Jolla, California",
      title: "La Jolla Family Smile Design",
             content: "It was a great game changer. I do a lot of Invisalign® now, I do it much faster, I can expedite the cases through the pipeline very quick, because of the knowledge that I gained through DCM…it&apos;s worth every penny and I would do it all over again.",
      thumbnail: "/doctors/dr-jaime-breziner.png"
    },
    {
      id: 19,
      name: "Dr Jim Olsen",
      location: "Ann Arbor, Michigan",
      title: "James Olsen DDS",
             content: "Thanks to Dr. Michael Wollock and his system, me and my team were able to achieve Diamond in just over five months. I can&apos;t express my gratitude adequately to Dr. Wollock for showing me the way, for giving us an outline on how to get this done. If you&apos;re considering joining the Diamond Club, I think you really need to do it. It will change your practice and it will give you confidence in doing more Invisalign® and you&apos;ll do it better than ever.",
      thumbnail: "/doctors/dr-jim-olsen.png"
    },
    {
      id: 20,
      name: "Dr Shari Morningstar",
      location: "Royal Oak, Michigan",
      title: "Gustafson & Morningstar Dentistry",
             content: "I&apos;ve got to tell you, this is unlike any mentoring program that I have ever been involved with. You have daily contact with Dr. Wollock and all your other team members. Every week, you get a lesson, and I have to say that that has taken me out of my comfort zone, going over those lessons…and it&apos;s paid off. I have increased my production over 200%, tripling my cases. But we know it&apos;s not just about the numbers, I have learned to break down barriers, barriers I didn&apos;t know existed in my practice.",
      thumbnail: "/doctors/Dr-Shari-Morningstar.png"
    },
    {
      id: 21,
      name: "Dr. Amelia Chan",
      location: "Toronto, Canada",
      title: "Downtown Dentistry",
             content: "I am the owner and principal dentist at Downtown Dentistry. I am currently a platinum plus Invisalign Provider with many thanks to Dr. Mike Wollock for all his fabulous guidance and support since 2016. He has amazing tips and I have followed through with almost every one of them. I am now starting at least 15 cases per month and finishing many cases on time! Before I met Dr. Mike, I might have started only 1 case per month. I&apos;ve also been awarded the Galler Invisalign trophy for being a group member of top Invisalign providers in North America. Being part of the Galler group and knowing Dr. Mike has been a huge game changer in my life and career. I highly recommend that you connect with Dr. Mike Wollock and you will see a huge difference shortly.",
      thumbnail: "/doctors/dr-amelia-chan-video-HD-720p.png"
    },
    {
      id: 22,
      name: "Dr. Drew W. Fairweather",
      location: "Bridgewater Township, New Jersey",
      title: "Better Image Dentistry",
      content: "I have a bright, motivated team, but we were floundering with mediocre Invisalign numbers. Dr. Wollock showed all of us how to present Invisalign treatment and to convert more cases. Just as important, and maybe moreso, he taught us how to be efficient in these presentations… When systems were properly structured, I was able to only do what I needed to do, with my team handling most of the duties and chair time.",
      thumbnail: "/doctors/testimonials-drew.png"
    },
    {
      id: 23,
      name: "Dr. Shauna Basil",
      location: "Westwood, Massachusetts",
      title: "Dental Arts of Westwood",
             content: "Since 2016, I&apos;ve been able to grow Invisalign in my office and I&apos;ve become a Gold+ Provider, and most recently we&apos;ve hit Platinum. I owe a lot of my successs to Dr. Michael Wollock. Without his guidance, I don&apos;t think that I would have been able to hit these goals that I had set for myself.",
      thumbnail: "/doctors/testimonials-shauna-HD-720p.png"
    },
    {
      id: 24,
      name: "Dr. Edward G. Johnson",
      location: "Bedminster, New Jersey",
      title: "Johnson Family & Cosmetic Dentistry",
             content: "I had the good fortune five years ago of meeting Dr. Mike Wollock at a dental conference. Prior to that, the 5 years prior, I did 40 cases, which was averaging about eight cases a year of Invisalign. Since meeting Mike with his leadership and guidance, we&apos;ve upped that to 325 cases in the next 5 years… I can&apos;t say enough what Mike has done for my practice. I know if you choose to go in and have Mike be your leader, your educator, that you won&apos;t regret it.",
      thumbnail: "/doctors/dr-johnson-video-HD-720p.png"
    },
    {
      id: 25,
      name: "Dr. Danny Lawen",
      location: "Halifax, Nova Scotia, Canada",
      title: "Lawen Dentistry",
             content: "I was lucky enough to be selected as part of the first ever Diamond Club Maker study group hosted by Dr. Mike Wollock…we were able to increase our case numbers, probably about by double. We&apos;re on pace to become a Diamond level for the first time ever, so we&apos;re pretty excited about that. Currently in under four months we&apos;ve done more cases than we normally would do in around seven or eight months.",
      thumbnail: "/doctors/dr-lawen-video.png"
    },
    {
      id: 26,
      name: "Dr. Lindsay Papac",
      location: "Auburn, WA",
      title: "Great Northwest Dental",
             content: "I feel less overwhelmed about all the cases I&apos;m managing and taking on, I have more efficient systems in place, my assistants are more efficient, my use of time is better and it&apos;s constantly improving. So I would say that if someone is looking to be challenged, to be pushed, to be better at what they&apos;re doing…this is the right thing to do and you won&apos;t be disappointed doing this program.",
      thumbnail: "/doctors/Dr-Lindsey-Papac.png"
    },
    {
      id: 27,
      name: "Amir Daoud, DDS",
      location: "Clearwater, FL",
      title: "Feather Sound Smiles",
             content: "I urge anybody who is serious about increasing their numbers of Invisalign®, not just increasing numbers but also looking at some of the systems that they have in their practice, to seriously consider taking this. I&apos;m a big believer in &quot;Numbers don&apos;t lie&quot;…prior to taking the Diamond Club, my best ever six months was Platinum, which was 65 cases. I&apos;m four months into it…and I&apos;m at 95 cases as of today, with still two months to go, so I&apos;m actually on pace to hit Diamond.",
      thumbnail: "/doctors/Amir-Daoud.png"
    },
    {
      id: 28,
      name: "Aman Bhullar",
      location: "San Jose, CA",
      title: "The Glen Dental, CEO of 3dimplants educational services",
             content: "Jumping in with the DCM and Mike&apos;s leadership allowed her to do more cases and acquire new patients into the practice. That turned into other treatment…that treatment turned into more crown and bridge, more restorations, more fillings, more hygiene appointments into the practice, so it&apos;s really allowed her to increase her revenue from a practice that&apos;s still doing over a million in a three-day work-week to almost fifty per cent more in the first 6 months of 2021.",
      thumbnail: "/doctors/bhullar-testimonial.png"
    },
    {
      id: 29,
      name: "Dr. Grisel Martos",
      location: "Miami, FL",
      title: "305 My Smile",
      content: "This course is only for someone who really, really wants to do a lot of Invisalign® cases and under Dr. Wollock, you are going to have amazing success. Listen to everything he does…It really, really changed my life, he really changed the way I practice, the way I do Invisalign®.",
      thumbnail: "/doctors/testimonials-dr-martos.png"
    },
    {
      id: 30,
      name: "Dr. Deepthy Thomas",
      location: "San Ramon, California",
      title: "Reflections Dental Spa",
             content: "There was a lot of ups and downs in my Invisalign® journey. I&apos;ve been doing Invisalign® for 8-10 years…Dr. Mike, he gives you and teaches you a blueprint of what works and how he&apos;s able to scale things and to be the Diamond+ Provider that he is.",
      thumbnail: "/doctors/Dr-Deepthy-Thomas.png"
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 
          className="font-sansation-regular text-center mb-16 sm:mb-20"
          style={{ 
            fontSize: '30px',
            color: '#004681'
          }}
        >
          Read Our Testimonials
        </h2>

        {/* Testimonials Grid */}
        <div className="space-y-16 sm:space-y-20">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                             {/* Video Thumbnail - Left Side */}
               <div className="w-full lg:w-[300px] flex justify-center lg:justify-start">
                 <div className="relative w-[200px] h-[300px] overflow-hidden">
                   {/* Video Thumbnail - shown when not playing */}
                   {playingVideoIndex !== testimonial.id && (
                     <>
                       <Image 
                         src={testimonial.thumbnail} 
                         alt={testimonial.name}
                         fill
                         className="object-cover"
                       />
                       {/* Play Button Overlay */}
                       <div className="absolute inset-0 flex items-center justify-center">
                         <button
                           onClick={() => handleVideoClick(testimonial.id)}
                           className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-200"
                           type="button"
                           aria-label="Play video"
                         >
                           <svg className="w-8 h-8 text-[#004681] ml-1" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M8 5v14l11-7z"/>
                           </svg>
                         </button>
                       </div>
                     </>
                   )}
                   
                   {/* Video Element - shown when playing */}
                   {playingVideoIndex === testimonial.id && (
                     <video 
                       className="w-[200px] h-[300px] object-cover"
                       src={getVideoPath(testimonial.name)}
                       controls
                       autoPlay
                       muted
                       onEnded={() => setPlayingVideoIndex(null)}
                       onPause={() => setPlayingVideoIndex(null)}
                       onPlay={() => setPlayingVideoIndex(testimonial.id)}
                     />
                   )}
                 </div>
               </div>

              {/* Testimonial Content - Right Side */}
              <div className="flex-1 space-y-6">
                {/* Testimonial Text */}
                <p 
                  className="font-sansation-regular leading-relaxed"
                  style={{ 
                    fontSize: '17px',
                    color: '#6b6b6b'
                  }}
                >
                  {testimonial.content}
                </p>

                {/* Attribution */}
                <div className="text-right space-y-1">
                  <p 
                    className="font-sansation-regular font-semibold"
                    style={{ 
                      fontSize: '17px',
                      color: '#6b6b6b'
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p 
                    className="font-sansation-regular"
                    style={{ 
                      fontSize: '17px',
                      color: '#6b6b6b'
                    }}
                  >
                    {testimonial.location}
                  </p>
                  <p 
                    className="font-sansation-regular"
                    style={{ 
                      fontSize: '17px',
                      color: '#6b6b6b'
                    }}
                  >
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DCMTestimonialsSection;
