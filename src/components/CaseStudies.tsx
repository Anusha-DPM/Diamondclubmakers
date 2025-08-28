const CaseStudies = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title */}
        <h2 className="font-sansation-regular font-bold text-[#004681] mb-8 text-center" style={{ fontSize: '30px' }}>
          Three Average DCM Cases:
        </h2>
        
        {/* Introduction */}
        <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed mb-8 text-center" style={{ fontSize: '17px' }}>
          These are not "perfect" cases. These are three average cases selected from a lecture given at the Align GP Summit in 2021.
        </p>
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Average Case Time */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-sansation-regular font-bold text-[#004681] mb-4" style={{ fontSize: '20px' }}>
              Average Case Time:
            </h3>
            <div className="space-y-2">
              <p className="font-sansation-regular text-[#6b6b6b]" style={{ fontSize: '17px' }}>
                <span className="font-bold">Doctor time:</span> 21 minutes
              </p>
              <p className="font-sansation-regular text-[#6b6b6b]" style={{ fontSize: '17px' }}>
                <span className="font-bold">Chair time:</span> 3 hours 35 minutes
              </p>
            </div>
          </div>
          
          {/* Doctor Time Value */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-sansation-regular font-bold text-[#004681] mb-4" style={{ fontSize: '20px' }}>
              Doctor Time Value:
            </h3>
            <div className="space-y-2">
              <p className="font-sansation-regular text-[#6b6b6b]" style={{ fontSize: '17px' }}>
                Collections after lab fee: <span className="font-bold">$2509</span>
              </p>
              <p className="font-sansation-regular text-[#6b6b6b]" style={{ fontSize: '17px' }}>
                For average 21 minutes equals: <span className="font-bold">$7168/hour</span>
              </p>
            </div>
          </div>
          
          {/* Chair Time Value */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-sansation-regular font-bold text-[#004681] mb-4" style={{ fontSize: '20px' }}>
              Chair Time Value:
            </h3>
            <div className="space-y-2">
              <p className="font-sansation-regular text-[#6b6b6b]" style={{ fontSize: '17px' }}>
                <span className="font-bold">$3776</span> for average 3 hours 35 minutes equals: <span className="font-bold">$1053/hour</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Program Benefits */}
        <div className="mb-8">
          <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed mb-4" style={{ fontSize: '17px' }}>
            These financial returns are off the charts compared to hygiene and restorative services. Plus, you get patient testimonials, reviews, and referrals that drive growth through DCM.
          </p>
          <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed mb-4" style={{ fontSize: '17px' }}>
            The learning lesson is the minimal doctor and chair time required to achieve these average results using DCM protocols and principles.
          </p>
        </div>
        
        {/* Benefits List */}
        <div className="mb-12">
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-black mr-3 mt-2 w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
              <span className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                Reducing wasted time and money on cases.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-3 mt-2 w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
              <span className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                Dramatically reducing chair time costs and increasing profits.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-3 mt-2 w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
              <span className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                Lowering correction rates, leading to happier patients and greater profit.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-3 mt-2 w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
              <span className="font-sansation-regular text-[#6b6b6b] leading-relaxed" style={{ fontSize: '17px' }}>
                Significantly growing Invisalign and restorative aspects of a practice.
              </span>
            </li>
          </ul>
        </div>
        
        {/* Individual Case Studies */}
        <div className="space-y-12">
          
          {/* Case 1: Anthony L. */}
          <div>
            <h3 className="font-sansation-regular font-bold text-[#004681] mb-4" style={{ fontSize: '24px' }}>
              Anthony L.
            </h3>
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed mb-6" style={{ fontSize: '17px' }}>
              Generalized moderate crowding with severe crowding on #22 and crossbite #27. Doctor time was 24 minutes, chair time 3 hours 40 minutes. Anthony had one correction and posted a "Wollock selfie" which was reposted and printed.
            </p>
            
            {/* Before/After Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="font-sansation-regular text-[#6b6b6b] mb-2" style={{ fontSize: '14px' }}>Before</p>
                <img src="/case1.png" alt="Anthony L. Before - Smile" className="w-full h-32 object-cover rounded-lg shadow-md" />
              </div>
              <div className="text-center">
                <p className="font-sansation-regular text-[#6b6b6b] mb-2" style={{ fontSize: '14px' }}>After</p>
                <img src="/case2.png" alt="Anthony L. After - Smile" className="w-full h-32 object-cover rounded-lg shadow-md" />
              </div>
              <div className="text-center">
                <p className="font-sansation-regular text-[#6b6b6b] mb-2" style={{ fontSize: '14px' }}>Teeth Close-up</p>
                <img src="/case3.png" alt="Anthony L. Teeth Close-up" className="w-full h-32 object-cover rounded-lg shadow-md" />
              </div>
            </div>
          </div>
          
          {/* Case 2: Megin T. */}
          <div>
            <h3 className="font-sansation-regular font-bold text-[#004681] mb-4" style={{ fontSize: '24px' }}>
              Megin T.
            </h3>
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed mb-6" style={{ fontSize: '17px' }}>
              Generalized moderate crowding with severe crowding on #6 and crossbite #27. Doctor time was 20 minutes, chair time 4 hours 10 minutes. Megin was referred by her sister, had a consult during an emergency restorative visit, and is now a long-term patient driving from 10 miles away for multiple crowns.
            </p>
            
            {/* Before/After Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="font-sansation-regular text-[#6b6b6b] mb-2" style={{ fontSize: '14px' }}>Before</p>
                <img src="/case4.png" alt="Megin T. Before - Smile" className="w-full h-32 object-cover rounded-lg shadow-md" />
              </div>
              <div className="text-center">
                <p className="font-sansation-regular text-[#6b6b6b] mb-2" style={{ fontSize: '14px' }}>After</p>
                <img src="/case1.png" alt="Megin T. After - Smile" className="w-full h-32 object-cover rounded-lg shadow-md" />
              </div>
              <div className="text-center">
                <p className="font-sansation-regular text-[#6b6b6b] mb-2" style={{ fontSize: '14px' }}>Teeth Close-up</p>
                <img src="/case2.png" alt="Megin T. Teeth Close-up" className="w-full h-32 object-cover rounded-lg shadow-md" />
              </div>
            </div>
          </div>
          
          {/* Case 3: Gordon G. */}
          <div>
            <h3 className="font-sansation-regular font-bold text-[#004681] mb-4" style={{ fontSize: '24px' }}>
              Gordon G.
            </h3>
            <p className="font-sansation-regular text-[#6b6b6b] leading-relaxed mb-6" style={{ fontSize: '17px' }}>
              Generalized moderate crowding with severe crowding on #26 as well as crossbite #26. Doctor time was 19 minutes, chair time 3 hours. Gordon was very happy with the "life changing" result and was asked to tell others.
            </p>
            
            {/* Before/After Images */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <p className="font-sansation-regular text-[#6b6b6b] mb-2" style={{ fontSize: '14px' }}>Before</p>
                <img src="/case3.png" alt="Gordon G. Before - Smile" className="w-full h-32 object-cover rounded-lg shadow-md" />
              </div>
              <div className="text-center">
                <p className="font-sansation-regular text-[#6b6b6b] mb-2" style={{ fontSize: '14px' }}>After</p>
                <img src="/case4.png" alt="Gordon G. After - Smile" className="w-full h-32 object-cover rounded-lg shadow-md" />
              </div>
              <div className="text-center">
                <p className="font-sansation-regular text-[#6b6b6b] mb-2" style={{ fontSize: '14px' }}>Teeth Close-up</p>
                <img src="/case1.png" alt="Gordon G. Teeth Close-up" className="w-full h-32 object-cover rounded-lg shadow-md" />
              </div>
              <div className="text-center">
                <p className="font-sansation-regular text-[#6b6b6b] mb-2" style={{ fontSize: '14px' }}>Video</p>
                <div className="relative w-full h-32 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
