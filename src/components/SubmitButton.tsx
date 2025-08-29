import React from 'react';

const SubmitButton = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center">
          <a
            href="https://prod.imkloud.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sansation-regular inline-block text-center transition-all duration-200 hover:bg-[#0288c7] hover:border-[#0288c7]"
            style={{
              fontSize: '20px',
              padding: '10px 40px',
              borderRadius: '5px',
              border: '2px solid #fff',
              background: '#029fde',
              clear: 'both',
              display: 'inline-block',
              textDecoration: 'none',
              color: '#fff'
            }}
          >
            Submit
          </a>
        </div>
      </div>
    </section>
  );
};

export default SubmitButton;
