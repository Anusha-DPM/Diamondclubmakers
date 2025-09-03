import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Community posts data for page 11
const communityPosts = [
  {
    id: 101,
    title: "Rob Herron Preparing for his Teen Invisalign Lecture",
    date: "June 28, 2023",
    author: "Ciaran Murphy from DCM Destruction",
    slug: "rob-herron-preparing-for-his-teen-invisalign-lecture",
    content: "DCM has changed my practice in so many ways, but I have also got to meet some amazing people including Rob Herron. He is a true inspiration in life, a practice owner, and an amazing teacher of Invisalign.",
    image: "/community/community11-1.jpeg"
  },
  {
    id: 102,
    title: "DCM Rebellion",
    date: "June 29, 2023",
    author: "Brittany McKinley from DCM other",
    slug: "dcm-rebellion",
    content: "Two of my favorite ladies! The amazing, talented and beautiful Gina Marcus and Tracy Blessing. Gina is a fellow member of rebellion and Tracy allowed me to rock some Botox and fillers.",
    image: "/community/community11-2.jpeg"
  },
  {
    id: 103,
    title: "Hanging with the Big Dog Jim Olsen",
    date: "June 30, 2023",
    author: "Scott Schumann aka SCHU from DCM Norton",
    slug: "hanging-with-the-big-dog-jim-olsen",
    content: "I love meeting up with fellow DCM Norton Bad Ass Teammates, Our Fearless Leaders, and Friends from the past while listening to them just dropping bombs of Knowledge!",
    image: "/community/community11-3-1",
    image2: "/community/community11-3-2",
    image3: "/community/community11-3.jpg"
  },
  {
    id: 104,
    title: "Favorite Photo - Brad",
    date: "July 2, 2023",
    author: "Brian Brodersen from DCM other",
    slug: "favorite-photo-brad",
    content: "Who doesn't love Christmas jammies? Great picture of Brad Jonnes and his family!",
    image: "/community/community11-4.jpg"
  },
  {
    id: 105,
    title: "Second GRC First time DCMer !",
    date: "July 11, 2023",
    author: "Dr. Marta Rivera DCM from DCM Rebellion",
    slug: "second-grc-first-time-dcmer",
    content: "",
    image: "/community/community11-5.jpeg"
  },
  {
    id: 106,
    title: "With the Man Himself",
    date: "July 12, 2023",
    author: "Sheena Sood from DCM Yoda",
    slug: "with-the-man-himself",
    content: "👏👏👏👏",
    image: "/community/community11-6.jpeg"
  },
  {
    id: 107,
    title: "GRC White Party",
    date: "July 14, 2023",
    author: "Haniel Rosemond from DCM Yoda",
    slug: "grc-white-party",
    content: "",
    image: "/community/community11-7.jpeg"
  },
  {
    id: 108,
    title: "The best lecture by our own DCM class yoda♥️",
    date: "July 16, 2023",
    author: "Amy from DCM Yoda",
    slug: "the-best-lecture-by-our-own-dcm-class-yoda",
    content: "Thank you! Sheena for amazing lecture.\nWe are so lucky to have you in our class and we can't wait to learn ab what you do!😆😆",
    image: "/community/community11-8.jpeg"
  },
  {
    id: 109,
    title: "DCM community",
    date: "July 16, 2023",
    author: "Amy from DCM Yoda",
    slug: "dcm-community",
    content: "We are all lucky to learn from you. Dr. Wollock.🦷🤍🤍",
    image: null
  },
  {
    id: 110,
    title: "The finest example EVER!",
    date: "July 18, 2023",
    author: "Jessica Nieva from DCM Yoda",
    slug: "the-finest-example-ever",
    content: "",
    image: "/community/community11-9.jpeg"
  }
];

const CommunityContentSection11 = () => {
  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <div className="space-y-6 sm:space-y-8">
          {communityPosts.map((post, index) => (
            <div key={post.id}>
              {/* Clickable Article Area */}
              <Link 
                href={`/community/${post.slug}`}
                className="block hover:opacity-95 transition-all duration-200 rounded-lg p-2 -m-2"
              >
                {/* Post Header */}
                <div className="mb-3 sm:mb-4">
                  <h2 
                    className="font-sansation-regular mb-2 text-[27px] sm:text-[30px]"
                    style={{ 
                      color: '#004681',
                      lineHeight: '1.2'
                    }}
                  >
                    {post.title}
                  </h2>
                <p 
                  className="font-sansation-regular text-[16px] sm:text-[17px]"
                  style={{ 
                    color: '#6b6b6b' 
                  }}
                >
                  {post.date} by {post.author}
                </p>
              </div>

              {/* Post Content */}
              {post.content && (
                <div 
                  className="font-sansation-regular mb-3 sm:mb-4 text-[16px] sm:text-[17px]"
                  style={{ 
                    color: '#6b6b6b' 
                  }}
                >
                  <p className="whitespace-pre-line">{post.content}</p>
                </div>
              )}

              {/* Image */}
              {post.image && (
                <div className="w-full">
                  {post.image3 ? (
                    // Three images layout - first two left, third right on same line
                    <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-4">
                      {/* Left side - 2 images */}
                      <div className="flex flex-col sm:flex-row gap-2 flex-1">
                        {/* First image */}
                        <div className="flex-1">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={200}
                            height={150}
                            className="object-cover w-full"
                            style={{ maxWidth: '100%', height: 'auto' }}
                          />
                        </div>
                        {/* Second image */}
                        <div className="flex-1">
                          <Image
                            src={post.image2}
                            alt={post.title}
                            width={200}
                            height={150}
                            className="object-cover w-full"
                            style={{ maxWidth: '100%', height: 'auto' }}
                          />
                        </div>
                      </div>
                      {/* Right side - 1 image */}
                      <div className="flex justify-center lg:justify-end lg:w-auto">
                        <Image
                          src={post.image3}
                          alt={post.title}
                          width={200}
                          height={150}
                          className="object-cover w-full max-w-[200px]"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </div>
                    </div>
                  ) : post.image2 ? (
                    // Two images layout - first left, second right on same line
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-4">
                      {/* First image - left aligned */}
                      <div className="w-full sm:w-auto flex justify-start">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={300}
                          height={250}
                          className="object-cover w-full sm:w-auto"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </div>
                      {/* Second image - right aligned */}
                      <div className="w-full sm:w-auto flex justify-start sm:justify-end">
                        <Image
                          src={post.image2}
                          alt={post.title}
                          width={300}
                          height={250}
                          className="object-cover w-full sm:w-auto"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </div>
                    </div>
                  ) : (
                    // Single image layout (fallback for other posts)
                    <div className="w-full flex justify-start sm:justify-end">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={300}
                        height={250}
                        className="object-cover w-full sm:w-auto"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                  )}
                </div>
              )}
              </Link>

              {/* Separator Line */}
              {index < communityPosts.length - 1 && (
                <div className="mt-6 sm:mt-8 border-t border-[#004681] border-opacity-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityContentSection11;
