import React from 'react';
import Image from 'next/image';

const OtherRecyclingSection = () => {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-start">
          {/* Left: DCM Image */}
          <div className="flex md:block justify-center mb-4 md:mb-0">
            <Image
              src="/DCM class/dcm-fifth.jpg"
              alt="DCM logo"
              width={220}
              height={300}
              className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-auto object-contain"
            />
          </div>

          {/* Right: Content */}
          <div className="md:col-span-2">
            <h2
              className="font-sansation-regular mb-4 text-[27px] sm:text-[17px]"
              style={{ color: '#004681', fontWeight: 400, lineHeight: '1.2' }}
            >
              DCM is now facilitating change!
            </h2>

            <div className="space-y-3 sm:space-y-4">
              <p className="font-sansation-regular text-[16px] sm:text-[15px] md:text-[16px]" style={{ color: '#6b6b6b', lineHeight: 1.6 }}>
                There is just no reason a 17 billion dollar company can&apos;t work with us to recycle the plastic they put into the environment.  Let&apos;s just see what 200 of the highest Invisalign producing dentists in North America can do to make change happen.
              </p>

              <p className="font-sansation-regular text-[16px] sm:text-[15px] md:text-[16px]" style={{ color: '#6b6b6b', lineHeight: 1.6 }}>
                Watch the video to order FREE Align boxes to ship the used trays for FREE back to Align via terracycle.  Or you can use any box you have around the office.
              </p>

              <p className="font-sansation-regular text-[16px] sm:text-[15px] md:text-[16px]" style={{ color: '#6b6b6b', lineHeight: 1.6 }}>
                Order a plastic storage container for your office like mine from Amazon (pictured).  Or get any other.
                Create an account with Terracycle at:
              </p>

              <p>
                <a
                  href="https://www.terracycle.com/en-US/brigades/Invisalign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sansation-regular underline text-[16px] sm:text-[15px] md:text-[16px]"
                  style={{ color: '#004681' }}
                >
                  TerraCycle.com/en-US/brigades/Invisalign
                </a>
              </p>

              <p className="font-sansation-regular text-[16px] sm:text-[15px] md:text-[16px]" style={{ color: '#6b6b6b', lineHeight: 1.6 }}>
                Follow the 6-step guide provided by Terracycle (pictured below).
              </p>

              <p className="font-sansation-regular text-[16px] sm:text-[15px] md:text-[16px]" style={{ color: '#6b6b6b', lineHeight: 1.6 }}>
                Also pictured is the process of having a label emailed to me and then printed from my phone.
              </p>

              <p className="font-sansation-regular text-[16px] sm:text-[15px] md:text-[16px]" style={{ color: '#6b6b6b', lineHeight: 1.6 }}>
                Attach the label to the box and send your used plastic aligners back to Align.
              </p>

              <p className="font-sansation-regular text-[16px] sm:text-[15px] md:text-[16px]" style={{ color: '#6b6b6b', lineHeight: 1.6 }}>
                Send a photo to your DCM groups every time you mail them.
              </p>

              <p className="font-sansation-regular font-semibold text-[16px] sm:text-[15px] md:text-[16px]" style={{ color: '#6b6b6b' }}>
                EACH OF YOU can make a small difference.
              </p>
              <p className="font-sansation-regular font-semibold text-[16px] sm:text-[15px] md:text-[16px]" style={{ color: '#6b6b6b' }}>
                AND TOGETHER we will make a big difference.
              </p>

              <div className="pt-3 sm:pt-4 space-y-1">
                <p className="font-sansation-regular text-[16px] sm:text-[15px] md:text-[16px]" style={{ color: '#6b6b6b' }}>Mike Wollock</p>
                <p className="font-sansation-regular text-[16px] sm:text-[15px] md:text-[16px]" style={{ color: '#6b6b6b' }}>Chief Diamond Maker</p>
                <p className="font-sansation-regular text-[16px] sm:text-[15px] md:text-[16px]" style={{ color: '#6b6b6b' }}>(and environmentalist)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherRecyclingSection;
