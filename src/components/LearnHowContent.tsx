import React from 'react';
import Image from 'next/image';

const LearnHowContent = () => {
  return (
    <div className="bg-white">
      {/* It Pays to "Learn How" From Extraordinary Experts Section */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <h2 className="font-sansation-regular text-[#004681] text-center mb-8 sm:mb-12" style={{ fontSize: 'clamp(24px, 5vw, 32px)' }}>
            It Pays to "Learn How" From Extraordinary<br />Experts:
          </h2>

          {/* Central Content Box */}
          <div className="bg-white mx-auto mb-8 sm:mb-12" style={{
            border: '5px solid #2baada',
            maxWidth: '506px',
            padding: '25px',
            borderRadius: '20px'
          }}>
            {/* Video-5 Image */}
            <div className="mb-6 flex justify-center">
              <Image
                src="/video-5.png"
                alt="Video 5"
                width={350}
                height={300}
                className="w-full max-w-[350px] h-auto"
              />
            </div>

            {/* Main Message */}
            <h3 className="font-sansation-regular text-[#004681] text-center text-xl sm:text-2xl lg:text-3xl mb-6" style={{ 
              fontSize: 'clamp(20px, 4vw, 27px)',
              lineHeight: '1.1'
            }}>
              Learn "How" From North America's Largest Solo Doctor Invisalign Provider!
            </h3>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-0 sm:py-0 md:py-0 lg:py-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hello Section */}
          <div className="mb-6">
            <div style={{
              background: '#eee',
              padding: '30px',
              fontSize: '16px',
              color: '#6b6b6b'
            }}>
              <p className="font-sansation-regular leading-relaxed">
                <strong>Hello!</strong> It pays to listen to the world's most successful dentists…who are actually doing it TODAY! One such <strong>PROVEN</strong> & <strong>DOCUMENTED EXPERT</strong> is Dr. Mike Wollock. A two-decade chrisad client in the Philadelphia suburb of Ardmore, Dr. Wollock is Invisalign's <strong>LARGEST Solo Doctor Invisalign Provider</strong> in North America <strong>SIX+ YEARS IN A ROW!</strong>
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-6">
            <div style={{
              background: '#eee',
              padding: '24px 32px 32px 32px',
              borderRadius: '8px'
            }}>
              <h3 className="font-sansation-regular text-2xl sm:text-3xl mb-3 text-left" style={{ fontSize: '30px', color: '#004681' }}>
                26 Hrs. a Week! 1x DDS! 700 Invisalign Starts a Year!
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b6b6b',
                lineHeight: '1.6'
              }}>
                After assuming ownership of this practice from a prior chrisad client from the late 1980s, Mike started producing in the low $100,000s/month range. NOW…WITH ONLY ONE DOCTOR (no associates or partners)…only 8 chairs & no site sign…working only 26 hours a week…46 weeks a year…he is <strong>COLLECTING</strong> around <strong>$5.1 MILLION a year</strong>. He (amazingly!!) frequently checks as many as <strong>508 hygiene patients</strong> a month (200 is the maximum for most doctors)…diagnosing & starting <strong>700 INVISALIGN CASES A YEAR!</strong>
              </p>
            </div>
          </div>

          {/* Course Information Section */}
          <div className="mb-6">
            <div style={{
              background: '#eee',
              padding: '30px',
              borderRadius: '8px'
            }}>
              <h3 className="font-sansation-regular mb-4 text-left" style={{ fontSize: '30px', color: '#004681' }}>
                Consider Mike's Invisalign Course: Immediately More Than DOUBLE Invisalign Production…Forever!
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b6b6b',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                If you know anything about the management of dental practices, you'll know this is a guy you need to both look up to…& listen to. We believe in passing on information to you that we believe will change your life for the better. As you may know, we refuse any compensation for any recommendation we offer. We simply want you to do as best as you can.
              </p>
              <p style={{
                fontSize: '16px',
                color: '#6b6b6b',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                His course, called "<strong>Diamond Club Makers</strong>", teaches you how to make a lot more money, with a lot less work…on Invisalign. While not inexpensive, most of the 200+ dentists who have completed this course immediately at least double their profit per hour on their Invisalign cases. They learn to more consistently solve difficult movements like laterals with fewer corrections/refinements while expanding their expertise on more difficult case types.
              </p>
              <p style={{
                fontSize: '16px',
                color: '#6b6b6b',
                lineHeight: '1.6'
              }}>
                His extraordinary 6-month course allows participants to learn via iPhone so that their productive days are not interrupted. While less directly, this course may apply to other ortho approaches such as Fastbraces & traditional orthodontics. <strong>Less Doctor time. FAR more profit.</strong> Very limited spots are available for his next class. Contact Dr. Wollock today:
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnHowContent;
