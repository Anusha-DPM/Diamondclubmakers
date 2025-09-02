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
    image: "/community/community-1.jpeg"
  },
  {
    id: 102,
    title: "DCM Rebellion",
    date: "June 29, 2023",
    author: "Brittany McKinley from DCM other",
    slug: "dcm-rebellion",
    content: "Two of my favorite ladies! The amazing, talented and beautiful Gina Marcus and Tracy Blessing. Gina is a fellow member of rebellion and Tracy allowed me to rock some Botox and fillers.",
    image: "/community/community-2"
  },
  {
    id: 103,
    title: "Hanging with the Big Dog Jim Olsen",
    date: "June 30, 2023",
    author: "Scott Schumann aka SCHU from DCM Norton",
    slug: "hanging-with-the-big-dog-jim-olsen",
    content: "I love meeting up with fellow DCM Norton Bad Ass Teammates, Our Fearless Leaders, and Friends from the past while listening to them just dropping bombs of Knowledge!",
    image: "/community/community-3.jpeg"
  },
  {
    id: 104,
    title: "Favorite Photo - Brad",
    date: "July 2, 2023",
    author: "Brian Brodersen from DCM other",
    slug: "favorite-photo-brad",
    content: "Who doesn't love Christmas jammies? Great picture of Brad Jonnes and his family!",
    image: "/community/community-4.jpeg"
  },
  {
    id: 105,
    title: "Second GRC First time DCMer !",
    date: "July 11, 2023",
    author: "Dr. Marta Rivera DCM from DCM Rebellion",
    slug: "second-grc-first-time-dcmer",
    content: "",
    image: "/community/community-5.jpeg"
  },
  {
    id: 106,
    title: "With the Man Himself",
    date: "July 12, 2023",
    author: "Sheena Sood from DCM Yoda",
    slug: "with-the-man-himself",
    content: "👏👏👏👏",
    image: "/community/community-6.jpeg"
  },
  {
    id: 107,
    title: "GRC White Party",
    date: "July 14, 2023",
    author: "Haniel Rosemond from DCM Yoda",
    slug: "grc-white-party",
    content: "",
    image: "/community/community-7.jpeg"
  },
  {
    id: 108,
    title: "The best lecture by our own DCM class yoda♥️",
    date: "July 16, 2023",
    author: "Amy from DCM Yoda",
    slug: "the-best-lecture-by-our-own-dcm-class-yoda",
    content: "Thank you! Sheena for amazing lecture.\nWe are so lucky to have you in our class and we can't wait to learn ab what you do!😆😆",
    image: "/community/community-8.jpeg"
  },
  {
    id: 109,
    title: "DCM community",
    date: "July 16, 2023",
    author: "Amy from DCM Yoda",
    slug: "dcm-community",
    content: "We are all lucky to learn from you. Dr. Wollock.🦷🤍🤍",
    image: "/community/community-9.jpeg"
  },
  {
    id: 110,
    title: "The finest example EVER!",
    date: "July 18, 2023",
    author: "Jessica Nieva from DCM Yoda",
    slug: "the-finest-example-ever",
    content: "",
    image: null
  }
];

const CommunityContentSection11 = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8">
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

              {/* Post Content and Image */}
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Text Content */}
                {post.content && (
                  <div 
                    className="font-sansation-regular flex-1"
                    style={{ 
                      fontSize: '17px', 
                      color: '#6b6b6b' 
                    }}
                  >
                    <p className="whitespace-pre-line">{post.content}</p>
                  </div>
                )}

                {/* Image */}
                {post.image && (
                  <div className="flex-shrink-0">
                    <div className="relative w-[273px] h-[204px]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-lg"
                        sizes="273px"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Separator Line */}
              {index < communityPosts.length - 1 && (
                <div className="mt-8 pt-8 border-t border-[#004681] border-opacity-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityContentSection11;
