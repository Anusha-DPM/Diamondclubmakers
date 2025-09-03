import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Community posts data
const communityPosts = [
  {
    id: 1,
    title: "Thank you, Mike! From the Wince's!",
    date: "June 15, 2022",
    author: "Stacy Wince from DCM Neo",
    slug: "thank-you-mike-from-the-winces",
    content: "",
    image: null
  },
  {
    id: 2,
    title: "getting ready DCM",
    date: "June 15, 2022",
    author: "Viviana Waich from DCM Neo",
    slug: "getting-ready-dcm",
    content: "i was shaking my green juice so i can ve strong and healthy for GRC but..... massive explosion happen .... i still laughing🤣🤣🤣",
    image: "/community/community-1.jpeg"
  },
  {
    id: 3,
    title: "DCM",
    date: "June 15, 2022",
    author: "Viviana Waich from DCM Neo",
    slug: "dcm",
    content: "great DCM moment",
    image: "/community/community-2.jpeg",
    image2: "/community/community-3.jpeg"
  },
  {
    id: 4,
    title: "Sandhya Anantuni",
    date: "June 16, 2022",
    author: "Sandhya Anantuni from DCM Neo",
    slug: "sandhya-anantuni",
    content: "",
    image: "/community/community-4.jpeg"
  },
  {
    id: 5,
    title: "DCM Diamond Award",
    date: "June 16, 2022",
    author: "Amir Daoud from DCM Neo",
    slug: "dcm-diamond-award",
    content: "My DCM journey officially started in Jan 2021. Truth is I had already been listening to all the advise I could from Dr Mike Wollack whom I have known for several years on the AACA Board.\nWhat I didn't expect was the explosive growth my practice would have. We are now relocating to a new location to be able to continue our growth.\nThe group of fellow DCMers will always be so close because of the like minded nature of what we do.\nDCM for LIFe !!!!",
    image: "/community/community-5.jpeg"
  },
  {
    id: 6,
    title: "DCM Pitt achieve Diamond Status!",
    date: "June 20, 2022",
    author: "Saba Rizvi from DCM Pitt",
    slug: "dcm-pitt-achieve-diamond-status",
    content: "Fellow DCMer achieving Diamond status and his daughter graduate dental school!!!! What a huge accomplishment in one week! So happy for his success and for his daughter's future!",
    image: "/community/community-6.jpeg"
  },
  {
    id: 7,
    title: "Dr. Lauren Lee and her arm candy.",
    date: "June 20, 2022",
    author: "Jim Olsen from DCM Norton",
    slug: "dr-lauren-lee-and-her-arm-candy",
    content: "I love this pic of Lauren and her \"arm candy\". Lauren brought the spirit of fun, hard work, and authentic connection to us all in DCM Norton while we struggled to show up and keep up. Thx Lauren for being such a bright spot every week for us in this group.",
    image: "/community/community-7.jpeg"
  },
  {
    id: 8,
    title: "Dr Isaac Perle Passover Blessing",
    date: "June 20, 2022",
    author: "Simran Bawa from DCM Norton",
    slug: "dr-isaac-perle-passover-blessing",
    content: "We were all amazed when Isaac completed an astounding 31.5 cases in a single week! His faith and strength in the almighty has shown us the light during this amazing journey together.",
    image: "/community/community-8.jpeg"
  },
  {
    id: 9,
    title: "Future of dental and DCM",
    date: "June 20, 2022",
    author: "Andrew Paek from DCM Pitt",
    slug: "future-of-dental-and-dcm",
    content: "Fellow DCMer attending his daughter's dental school graduation! Cheers to the future of our profession and DCM!",
    image: "/community/community-9.jpeg"
  },
  {
    id: 10,
    title: "Insta famous",
    date: "June 20, 2022",
    author: "Andrew Paek from DCM Pitt",
    slug: "insta-famous",
    content: "Amazing insight from our DCMer on how to utilize social media successfully!",
    image: null
  }
];

const CommunityContentSection = () => {
  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12">
      <div className="w-full" style={{ paddingLeft: '150px', paddingRight: '150px' }}>
        <div className="space-y-8">
          {communityPosts.map((post, index) => (
            <div key={post.id}>
              {/* Post Header */}
              <div className="mb-4">
                <Link 
                  href={`/community/${post.slug}`}
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <h2 
                    className="font-sansation-bold mb-2"
                    style={{ 
                      fontSize: '30px', 
                      color: '#004681' 
                    }}
                  >
                    {post.title}
                  </h2>
                </Link>
                <p 
                  className="font-sansation-regular"
                  style={{ 
                    fontSize: '17px', 
                    color: '#6b6b6b' 
                  }}
                >
                  {post.date} by {post.author}
                </p>
              </div>

                            {/* Post Content */}
              {post.content && (
                <div 
                  className="font-sansation-regular mb-4"
                  style={{ 
                    fontSize: '17px', 
                    color: '#6b6b6b' 
                  }}
                >
                  <p className="whitespace-pre-line">{post.content}</p>
                </div>
              )}

              {/* Images */}
              {post.image && (
                <div className="w-full">
                  {post.image2 ? (
                    // Two images layout - first left, second right on same line
                    <div className="flex justify-between items-start gap-4">
                      {/* First image - left aligned */}
                      <div className="flex justify-start">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={300}
                          height={250}
                          className="object-cover rounded-lg"
                          style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                        />
                      </div>
                      {/* Second image - right aligned */}
                      <div className="flex justify-end">
                        <Image
                          src={post.image2}
                          alt={post.title}
                          width={300}
                          height={250}
                          className="object-cover rounded-lg"
                          style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                        />
                      </div>
                    </div>
                  ) : (
                    // Single image layout
                    <div className={`w-full ${post.content === "great DCM moment" ? 'flex justify-start' : 'flex justify-end'}`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={300}
                        height={250}
                        className="object-cover rounded-lg"
                        style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Separator Line */}
              <div className="mt-8 pt-8 border-t border-[#004681] border-opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityContentSection;
