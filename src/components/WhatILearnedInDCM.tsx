"use client";

import React, { useState } from 'react';

const WhatILearnedInDCM = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      name: "Cecilio Po DCM Yoda",
      achievement: "Silver to Gold in six months",
      profit: "Inv Profit: was $328/hr, with DCM $1301/hr",
      content: [
        "Meet Jonathan-",
        "Existing patient we had talked about misalignment and open bite. Patient abfractions galore and got an occlusal guard prior to invisalign. Patient CC - I just want to save my teeth, I don't want any more abfractions.",
        "F@ck my life!!!! This case took forever!!!! You can see why I did not think that CAT was profitable!!!",
        "10hrs and 45min",
        "13 months.",
        "Fee paid $5666",
        "lab fee $2054",
        "Profit: $3612",
        "Profit per hour: $328/hr",
        "Doctor time: since this is prior to DCM - its ALL ME!!! 10hrs and 45min",
        "What I learned is that open bites can be closed. Believe in the plastic!!! Compliance, compliance, compliance. Have the assistants do the data collection and the attachments.",
        "What I would do differently since DCM:",
        "Total chair time - with DCM protocol 3.25hrs",
        "Total doctor time-with DCM protocol 1 hr.",
        "Total fee: $3476 with DCM new pricing",
        "Total lab: $2175 Profit: $1301",
        "Profit per hour: $1301 THANK YOU DCM!!!!",
        "THANK YOU DR. WOLLOCK!!!"
      ]
    },
    {
      name: "Joshua Chupp DCM Yoda",
      achievement: "Silver Plus to Platinum in DCM",
      profit: "Inv Profit was $403/hr with DCM $700/hr",
      content: [
        "wanted to share a case that I had taken on when I did not know enough to know didn't know enough blindly accepting finst clinchech I think we call this unconscious incompetence",
        "Peter is a truck driver from the UK. He moved to FL and wanted to fix his teeth. Apparently ortho is not a thing in the UK. At the time, I had not taken a Reengage and I figured I would just trust the algorithm on this one (or the tech I should say.) I had not truly had an Invisalign case go sideways on me at this point. If I could go back and do this case again. I would change just about everything. I would not move molars, no posterior IPR, better anchorage w attachments, fewer visits, no changing attachments mid stream, staging the IPR better, I would've added some IPR to upper arch to reduce OJ. Just too many things to list. I had a lucky break looking back on this one. Somehow got to finish without any refinements, pt was happy and we were done.",
        "24 aligners total 2 week wear time (some over) approx 1 year treatment.",
        "8 visits",
        "7/7/19-7/20/20",
        "Total chair time -7 hours around 4 hours Dr time on schedule Case fee 5,000 including retainers.. lab bill = 2179 = 2821ish income around $403/hour of production With DCM protocols I could have probably done this case in 4 visits with much less chair time at new fee of 3279 so likely $700 per hour using what I have learned.",
        "If I had to do any refinements at this time it would've made this go into the negatives. I was an associate at the time of this case and not thinking about business aspect at all! So much has changed. Thank you for opening my eyes in this course Dr. Wollock!"
      ]
    },
    {
      name: "Jessica Nieva DCM Yoda",
      achievement: "Platinum Plus to Platinum Plus with a shitload more profit!",
      profit: "",
      content: [
        "Meet Adam. He's been a patient of mine for 10 years. He is my second Invisalign case. I got my first iTero April 2021 and started Invisalign in May 2021. Took Re-engage July 2021. First AACA 2022. Bought second iTero August 2022. Took CAT Teen Residency December 2022 and now DCM 2023!",
        "I didn't know what the heck I was doing. Adam had no complaints. No CC. No questions. And I convinced him that his bite can be improved by not wearing down more teeth. I told him he may need more crowns if his bite is not fixed. He'd get his nose pierced if I proposed it! Oh Geez! He was happy with the result after the first round. He was fine with the second round especially after 30 more additional aligners. I was not sure and not happy with the outcome. Nah- he didn't achieve anterior clearance. So I put him through two refinement hell to satisfy my inner dentist perfection and lack of knowledge.",
        "15 months of treatment. 14 appointments!! The party started on 5/11/21 and ended 8/23/22. Every Invisalign appointment was booked for one hour chairside time in the Overflow/Invisalign room. Dumb Dumb Dumb",
        "7 ClinChecks 14 hours of chairtime Total income: Comprehensive case treatment: $4995-(1899+ 288- lab fees) = $2807 My income: $200.5 per hour!! What a Joke!",
        "I did everything the dumb hard way. With DCM- protocols, my chairside time and treatment time would obviously by cut by 75% at least! Also- just F#$^$ stop and go into retainers when patient is happy and done with aligners!!!!",
        "Also- I know not to rely on cartoon clinchecks and the techs. I am more educated on predictable clinical outcomes.",
        "Since DCM- I have implemented post-op photos, Selfie photo, review and referral requests. Adam is relieved. He's happy. I think he still likes me. He still comes in for his recare with his wife and 2 kids",
        "I am laughing as I review this case. I still have a long way to go. I thank each one of you especially Dr. Wollock for kicking common sense and educational ways to improve and change lives!"
      ]
    },
    {
      name: "Quyen Dang DCM Yoda",
      achievement: "Platinum to Diamond in six months",
      profit: "Inv Profit: was $830/hr, with DCM $4980/hr",
      content: [
        "Micheal 25 you'll",
        "Start Invisalign 10/5/2020",
        "Total chair time: 4hrs30min",
        "Total collection: $5735",
        "Lab cost: about $2000",
        "Profit: 5735-2000 = $3735",
        "About $830/hr",
        "If I do this case today, after DCM training this is what I would SAVE 3:45hrs bringing my time down to 45minutes Which means an u believable $4980/hour"
      ]
    },
    {
      name: "Elizabeth Abell DCM Yoda",
      achievement: "Silver to Gold Plus in 6 months",
      profit: "Inv Profit: was $480/hr, with DCM $4000/hr",
      content: [
        "This is Jessica. She is 41. She would never smile. We like to joke, smile, and have laughter in our office with our patients, but she would always laugh with her mouth closed. She is a totally different person now following Invisalign treatment and is always smiling! But, could I have achieved it faster and easier with DCM principles? Yes.",
        "I was intimidated by this case, but I have learned over the time through more case acceptance with DCM and introducing Invisalign to ALL patients that these are the best cases. I realize now that the cases that intimidated me the most or I previously viewed as the most challenging produce the more easily pleased and ecstatic patient. The case simply generates a more \"wow\" factor result for the patient. I can't speak for all patients, but their expectations are easily met and with much excitement. I now want to treat everyone- big or small issue due to confidence gained with DCM. And, I know how to treatment plan better too.",
        "The case fee totaled 4300 for 5 hours of my time: $4300 - &1900 lab case is 2400 /5hours = $480/hr of profitability.",
        "Using DCM protocols this would have only been 35 minutes of Dr time. This means I am now doing $4114/hour in Invisalign profit with DCM protocols!",
        "We also have a much higher acceptance rate with our competitive advantage fee which has made a huge impact on profitability especially with reduced chair time."
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[currentSlide];

  return (
                   <section className="bg-white py-0 sm:py-2 lg:py-1">
             <div className="max-w-4xl mx-auto px-2 sm:px-3 lg:px-4">
        {/* Main Heading with Navigation */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-sansation-regular text-[#004681] text-center flex-1" style={{ fontSize: '30px' }}>
            What I Learned In DCM
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex space-x-3">
            <button
              onClick={prevSlide}
              className="w-14 h-14 bg-gray-200 rounded-lg flex items-center justify-center text-white hover:bg-gray-300 transition-colors duration-200 shadow-md"
            >
              <span className="text-2xl font-bold">&lt;</span>
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 bg-gray-200 rounded-lg flex items-center justify-center text-white hover:bg-gray-300 transition-colors duration-200 shadow-md"
            >
              <span className="text-2xl font-bold">&gt;</span>
            </button>
          </div>
        </div>

                 {/* Case Study Content */}
         <div className="space-y-6">
                       {/* Case Study Name/Doctor */}
            <h3 className="font-sansation-regular text-[#004681] mb-0" style={{ fontSize: '27px' }}>
              {currentCase.name}
            </h3>
            
            {/* Achievement/Status */}
            <p className="font-sansation-regular text-[#004681] mt-0" style={{ fontSize: '27px' }}>
              {currentCase.achievement}
            </p>
          
                                 {/* Profit Information */}
            {currentCase.profit && (
              <p className="font-sansation-regular text-[#6b6b6b] -mt-4" style={{ fontSize: '17px' }}>
                {currentCase.profit}
              </p>
            )}
          
          {/* Body Content */}
          <div className="space-y-4">
            {currentCase.content.map((paragraph, index) => (
              <p 
                key={index} 
                className="font-sansation-regular text-[#6b6b6b] leading-relaxed" 
                style={{ fontSize: '17px', lineHeight: '1.7' }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>


        
      </div>
    </section>
  );
};

export default WhatILearnedInDCM;
