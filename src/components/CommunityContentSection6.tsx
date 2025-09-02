import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Community posts data for page 6
const communityPosts = [
  {
    id: 51,
    title: "Super happy Dr. W",
    date: "June 29, 2022",
    author: "Diana from DCM Norton",
    slug: "super-happy-dr-w",
    content: "",
    image: "/community/community-1.jpeg"
  },
  {
    id: 52,
    title: "Meeting DCM Norton's Noelle",
    date: "June 29, 2022",
    author: "Joan Werleman from DCM Pitt",
    slug: "meeting-dcm-nortons-noelle",
    content: "",
    image: "/community/community-2"
  },
  {
    id: 53,
    title: "With the one and only 🤩",
    date: "June 29, 2022",
    author: "Joan Werleman from DCM Pitt",
    slug: "with-the-one-and-only",
    content: "",
    image: "/community/community-3.jpeg"
  },
  {
    id: 54,
    title: "Thank u Dr. W",
    date: "June 29, 2022",
    author: "Diana from DCM Norton",
    slug: "thank-u-dr-w",
    content: "",
    image: "/community/community-4.jpeg"
  },
  {
    id: 55,
    title: "Diana",
    date: "June 30, 2022",
    author: "Diana from DCM Norton",
    slug: "diana",
    content: "The master minds all reunited!!",
    image: "/community/community-5.jpeg"
  },
  {
    id: 56,
    title: "Eric Murias",
    date: "June 30, 2022",
    author: "Eric Murias from DCM Norton",
    slug: "eric-murias",
    content: "",
    image: "/community/community-6.jpeg"
  },
  {
    id: 57,
    title: "The man, the myth, the legend Dr Wollock !!",
    date: "June 30, 2022",
    author: "Amir Daoud from DCM Neo",
    slug: "the-man-the-myth-the-legend-dr-wollock",
    content: "",
    image: "/community/community-7.jpeg"
  },
  {
    id: 58,
    title: "Schu",
    date: "July 1, 2022",
    author: "Brock Arms from DCM Norton",
    slug: "schu",
    content: "Schu and I ready to add some pressure to make Diamond this cycle starting today!",
    image: "/community/community-8.jpeg"
  },
  {
    id: 59,
    title: "Angie Anton",
    date: "July 6, 2022",
    author: "Angie Anton from DCM Destruction",
    slug: "angie-anton",
    content: "Fun times at GRC 2022",
    image: "/community/community-9.jpeg"
  },
  {
    id: 60,
    title: "True DCM Destruction Legend",
    date: "July 6, 2022",
    author: "Ciaran Murphy from DCM Destruction",
    slug: "true-dcm-destruction-legend",
    content: "Nothing speaks to the nature of DCM like our man Rob Herron. He is all about helping others achieve their goals, and loves sharing stories about his family. Cheers to all the DCM family!",
    image: null
  }
];

const CommunityContentSection6 = () => {
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

export default CommunityContentSection6;
