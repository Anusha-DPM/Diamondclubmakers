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
    image: "/community/community-1.jpeg"
  },
  {
    id: 112,
    title: "DCMers learning advanced Botox",
    date: "January 1, 2024",
    author: "Uppasna Chand from DCM other",
    slug: "dcmer-learning-advanced-botox",
    content: "",
    image: "/community/community-2"
  }
];

const CommunityContentSection12 = () => {
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
                  <div className={`flex-shrink-0 ${!post.content ? 'ml-auto' : ''}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={500}
                      height={400}
                      className="object-cover rounded-lg"
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                    />
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

export default CommunityContentSection12;
