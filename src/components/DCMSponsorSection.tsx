import React from 'react';

const DCMSponsorSection = () => {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 
            className="font-sansation-regular text-2xl sm:text-3xl lg:text-[27px] font-bold text-[#004681] mb-6"
            style={{ fontSize: '27px', color: '#004681' }}
          >
            DCM is a proud sponsor of a local minority student doctor group
          </h2>
          
          <div className="mb-6">
            <a 
              href="https://www.PhillyStudentDoctors.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sansation-regular text-lg sm:text-xl lg:text-[17px] text-[#004681] hover:underline transition-all duration-200"
              style={{ fontSize: '17px', color: '#004681' }}
            >
              www.PhillyStudentDoctors.com
            </a>
          </div>

          <div className="mb-6">
            <h3 
              className="font-sansation-regular text-base sm:text-lg lg:text-[17px] font-bold text-[#6b6b6b] mb-4"
              style={{ fontSize: '17px', color: '#6b6b6b' }}
            >
              Their mission:
            </h3>
          </div>

          <div className="max-w-4xl">
            <p 
              className="font-sansation-regular text-base sm:text-lg lg:text-[17px] text-[#6b6b6b] leading-relaxed"
              style={{ fontSize: '17px', color: '#6b6b6b' }}
            >
              PhillyStudentDoctors is a 501(c)(3) non-profit organization founded in 2022 whose purpose is to create a community of support for Black student doctors in health professional programs throughout Philadelphia. Black students in health professional programs are usually one of a few and typically don&apos;t have as much support as their majority counterparts. PhillyStudentDoctors was founded by Temple Dental and Drexel Medical students who desired to connect and bond with other students like themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DCMSponsorSection;
