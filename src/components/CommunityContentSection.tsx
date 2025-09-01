import React from 'react';
import Image from 'next/image';

const CommunityContentSection = () => {
  const communityPosts = [
    {
      id: 1,
      title: "Thank you, Mike! From the Wince's!",
      date: "June 15, 2022",
      author: "Stacy Wince",
      group: "DCM Neo",
      content: "",
      hasImage: false
    },
    {
      id: 2,
      title: "getting ready DCM",
      date: "June 15, 2022",
      author: "Viviana Waich",
      group: "DCM Neo",
      content: "i was shaking my green juice so i can ve strong and healthy for GRC but….. massive explosion happen …. i still laughing🤣🤣🤣",
      image: "/community/community-2",
      hasImage: true,
      imagePosition: "right"
    },
    {
      id: 3,
      title: "DCM",
      date: "June 15, 2022",
      author: "Viviana Waich",
      group: "DCM Neo",
      content: "great DCM moment",
      image: "/community/community-3.jpeg",
      hasImage: true,
      imagePosition: "left"
    },
    {
      id: 4,
      title: "Sandhya Anantuni",
      date: "June 16, 2022",
      author: "Sandhya Anantuni",
      group: "DCM Neo",
      content: "",
      image: "/community/community-4.jpeg",
      hasImage: true,
      imagePosition: "right"
    },
    {
      id: 5,
      title: "DCM Diamond Award",
      date: "June 16, 2022",
      author: "Amir Daoud",
      group: "DCM Neo",
      content: "My DCM journey officially started in Jan 2021. Truth is I had already been listening to all the advise I could from Dr Mike Wollack whom I have known for several years on the AACA Board. What I didn't expect was the explosive growth my practice would have. We are now relocating to a new location to be able to continue our growth. The group of fellow DCMers will always be so close because of the like minded nature of what we do. DCM for LIFe !!!!",
      image: "/community/community-5.jpeg",
      hasImage: true,
      imagePosition: "right"
    },
    {
      id: 6,
      title: "DCM Pitt achieve Diamond Status!",
      date: "June 20, 2022",
      author: "Saba Rizvi",
      group: "DCM Pitt",
      content: "Fellow DCMer achieving Diamond status and his daughter graduate dental school!!!! What a huge accomplishment in one week! So happy for his success and for his daughter's future!",
      image: "/community/community-6.jpeg",
      hasImage: true,
      imagePosition: "right"
    },
    {
      id: 7,
      title: "Dr. Lauren Lee and her arm candy.",
      date: "June 20, 2022",
      author: "Jim Olsen",
      group: "DCM Norton",
      content: "I love this pic of Lauren and her \"arm candy\". Lauren brought the spirit of fun, hard work, and authentic connection to us all in DCM Norton while we struggled to show up and keep up. Thx Lauren for being such a bright spot every week for us in this group.",
      image: "/community/community-7.jpeg",
      hasImage: true,
      imagePosition: "right"
    },
    {
      id: 8,
      title: "Dr Isaac Perle Passover Blessing",
      date: "June 20, 2022",
      author: "Simran Bawa",
      group: "DCM Norton",
      content: "We were all amazed when Isaac completed an astounding 31.5 cases in a single week! His faith and strength in the almighty has shown us the light during this amazing journey together.",
      image: "/community/community-8.jpeg",
      hasImage: true,
      imagePosition: "right"
    },
    {
      id: 9,
      title: "Future of dental and DCM",
      date: "June 20, 2022",
      author: "Andrew Paek",
      group: "DCM Pitt",
      content: "Fellow DCMer attending his daughter's dental school graduation! Cheers to the future of our profession and DCM!",
      image: "/community/community-9.jpeg",
      hasImage: true,
      imagePosition: "right"
    },
    {
      id: 10,
      title: "Insta famous",
      date: "June 20, 2022",
      author: "Andrew Paek",
      group: "DCM Pitt",
      content: "Amazing insight from our DCMer on how to utilize social media successfully!",
      hasImage: false
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Community Posts */}
        <div className="space-y-0">
          {communityPosts.map((post, index) => (
            <div key={post.id}>
              {/* Post Content */}
              <div className="py-8 sm:py-12">
                <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
                  {/* Text Content - Left Side */}
                  <div className={`flex-1 ${post.hasImage && post.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Post Title */}
                    <h3 
                      className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 font-sansation-regular"
                      style={{ color: '#004681' }}
                    >
                      {post.title}
                    </h3>

                    {/* Post Meta */}
                    <div className="text-sm sm:text-base text-gray-600 mb-4 font-sansation-regular">
                      {post.date} by {post.author} from {post.group}
                    </div>

                    {/* Post Content */}
                    {post.content && (
                      <p 
                        className="text-base sm:text-lg leading-relaxed font-sansation-regular"
                        style={{ fontSize: '17px', color: '#6b6b6b' }}
                      >
                        {post.content}
                      </p>
                    )}
                  </div>

                  {/* Image - Right Side (if exists and positioned right) */}
                  {post.hasImage && post.imagePosition === 'right' && (
                    <div className="lg:order-2 flex-shrink-0">
                      <div className="w-full lg:w-80 h-64 lg:h-80 rounded-lg overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={320}
                          height={320}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {/* Image - Left Side (if exists and positioned left) */}
                  {post.hasImage && post.imagePosition === 'left' && (
                    <div className="lg:order-1 flex-shrink-0">
                      <div className="w-full lg:w-80 h-64 lg:h-80 rounded-lg overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={320}
                          height={320}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Blue Separator Line (except for last post) */}
              {index < communityPosts.length - 1 && (
                <div className="border-t-2 border-[#004681] opacity-30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityContentSection;
