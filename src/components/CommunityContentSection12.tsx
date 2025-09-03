import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Community posts data for page 12
const communityPosts = [
  {
    id: 111,
    title: "Vlad and his Pink Ladies",
    date: "January 1, 2024",
    author: "Sumbul Naqvi from DCM other",
    slug: "vlad-and-his-pink-ladies",
    content: "Diamond Provider Vlad from DCM Resolute with his Pink Ladies.",
    image: "/community/community12-1.jpeg"
  },
  {
    id: 112,
    title: "DCMers learning advanced Botox",
    date: "January 1, 2024",
    author: "Uppasna Chand from DCM other",
    slug: "dcmer-learning-advanced-botox",
    content: "",
    image: "/community/community12-2.jpeg"
  }
];

const CommunityContentSection12 = () => {
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

export default CommunityContentSection12;
