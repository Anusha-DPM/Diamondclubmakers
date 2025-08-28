import React from 'react';

const CaseStudies = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title */}
        <h2 className="font-sansation-regular text-[#004681] mb-4 text-center" style={{ fontSize: '30px' }}>
          Three Average DCM Cases:
        </h2>
        
        {/* Introduction */}
        <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed mb-4 text-left" style={{ fontSize: '17px' }}>
          I gave a lecture (one of very few I ever give) at Align GP Summit in 2021. I picked three cases (out of 5-8 daily average) finishing the very day I was actually writing the lecture. None are special, none are great, none are the &quot;perfect&quot; cases most lecturers and consultants show everyone. They are just three average cases.
        </p>
        
        {/* Statistics Section - Changed to vertical stack */}
        <div className="space-y-6 mb-6">
          
          {/* Average Case Time */}
          <div>
            <p className="font-sansation-regular text-[#6b6b6b] mb-2" style={{ fontSize: '17px' }}>
              Average Case Time:
            </p>
            <p className="font-sansation-regular text-[#6b6b6b] leading-tight mb-1" style={{ fontSize: '17px' }}>
              Doctor time 21minutes
            </p>
            <p className="font-sansation-regular text-[#6b6b6b] leading-tight" style={{ fontSize: '17px' }}>
              Chair time 3hours 35minutes
            </p>
          </div>
          
          {/* Doctor Time Value */}
          <div>
            <p className="font-sansation-regular text-[#6b6b6b] mb-2" style={{ fontSize: '17px' }}>
              Doctor Time Value
            </p>
            <p className="font-sansation-regular text-[#6b6b6b] leading-tight mb-1" style={{ fontSize: '17px' }}>
              = collections after lab fee $2509
            </p>
            <p className="font-sansation-regular text-[#6b6b6b] leading-tight mb-1" style={{ fontSize: '17px' }}>
              for average 21 minutes equals
            </p>
            <p className="font-sansation-regular text-[#6b6b6b] leading-tight" style={{ fontSize: '17px' }}>
              $7168/hour
            </p>
          </div>
          
          {/* Chair time value */}
          <div>
            <p className="font-sansation-regular text-[#6b6b6b] mb-2" style={{ fontSize: '17px' }}>
              Chair time value
            </p>
            <p className="font-sansation-regular text-[#6b6b6b] leading-tight" style={{ fontSize: '17px' }}>
              = $3776 for average 3hours 35min equals $1053/hour
            </p>
          </div>
        </div>
        
        {/* Program Benefits */}
        <div className="mb-8">
          <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed mb-2" style={{ fontSize: '17px' }}>
            Compared to hygiene &amp; restorative, this is off the charts! Labor and materials are roughly the same as running hygiene but your hygiene program doesn&apos;t pull in nearly that much an hour. Not to mention all the other value of selfies, testimonials, reviews, referrals, and more that DCM shows you how to gain from your cases. Including all the restorative that comes from this new patient source.
          </p>
          <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed mb-2" style={{ fontSize: '17px' }}>
            The learning lesson is the little amount of time when using DCM protocols and principles. How little doctor time. How little chair time I use to achieve these average results.
          </p>
        </div>
        
        {/* Benefits List */}
        <div className="mb-6">
          <ul className="space-y-1">
            <li className="flex items-start">
              <span className="text-black mr-3 mt-2 w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
              <span className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                Just think how much time YOU are wasting right now on your cases. And how much money that is costing you.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-3 mt-2 w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
              <span className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                When DCM principles and protocols are applied the cost of chair time is dramatically reduced and your profits go through the roof.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-3 mt-2 w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
              <span className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                Also, DCM principles and protocols dramatically bring down your correction rates. Which not only leads to happier patients who refer more, but significantly greater profit.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-3 mt-2 w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
              <span className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                All this brings significantly greater Invisalign and restorative growth to your practice.
              </span>
            </li>
          </ul>
        </div>
        
        {/* Individual Case Studies */}
        <div className="space-y-6">
          
          {/* Case 1: Anthony L. */}
          <div>
            <h3 className="font-sansation-regular font-bold text-[#212529] mb-3" style={{ fontSize: '24px' }}>
              Anthony L.
            </h3>
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed mb-4" style={{ fontSize: '17px' }}>
              Generalized moderate crowding with severe crowding on #22 and crossbite #27. Doctor time was 24 minutes, chair time 3 hours 40 minutes. Anthony had one correction and posted a &quot;Wollock selfie&quot; which was reposted and printed.
            </p>
          </div>
          
          {/* Case 2: Megin T. */}
          <div>
            <h3 className="font-sansation-regular font-bold text-[#212529] mb-3" style={{ fontSize: '24px' }}>
              Megin T.
            </h3>
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed mb-4" style={{ fontSize: '17px' }}>
              Generalized moderate crowding with severe crowding on #6 and crossbite #27. Doctor time was 20 minutes, chair time 4 hours 10 minutes. Megin was referred by her sister, had a consult during an emergency restorative visit, and is now a long-term patient driving from 10 miles away for multiple crowns.
            </p>
          </div>
          
          {/* Case 3: Gordon G. */}
          <div>
            <h3 className="font-sansation-regular font-bold text-[#212529] mb-4" style={{ fontSize: '24px' }}>
              Gordon G.
            </h3>
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed mb-6" style={{ fontSize: '17px' }}>
              Generalized moderate crowding with severe crowding on #26 as well as crossbite #26. Doctor time was 19 minutes, chair time 3 hours. Gordon was very happy with the &quot;life changing&quot; result and was asked to tell others.
            </p>
            
            {/* Before/After Images and Video */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
              <div className="text-center">
                <img src="/case-1.jpeg" alt="Gordon G. Before - Smile" className="w-full h-48 object-contain bg-gray-100" />
              </div>
              <div className="text-center">
                <img src="/case-2.jpeg" alt="Gordon G. After - Smile" className="w-full h-48 object-contain bg-gray-100" />
              </div>
              <div className="text-center">
                <img src="/case-3.jpeg" alt="Gordon G. Upper Arch" className="w-full h-48 object-contain bg-gray-100" />
              </div>
              <div className="text-center">
                <img src="/case-4.jpeg" alt="Gordon G. Lower Arch" className="w-full h-48 object-contain bg-gray-100" />
              </div>
              <div className="text-center">
                <img src="/Thumb.jpg" alt="Gordon G. Thumb" className="w-full h-48 object-contain bg-gray-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
