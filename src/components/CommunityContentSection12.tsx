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
      <div className="w-full" style={{ paddingLeft: '150px', paddingRight: '150px' }}>
        <div className="space-y-8">
          {communityPosts.map((post, index) => (
            <div key={post.id}>
              {/* Clickable Article Area */}
              <Link 
                href={`/community/${post.slug}`}
                className="block hover:bg-gray-50 hover:opacity-95 transition-all duration-200 rounded-lg p-2 -m-2"
              >
                {/* Post Header */}
                <div className="mb-4">
                  <h2 
                    className="font-sansation-bold mb-2"
                    style={{ 
                      fontSize: '30px', 
                      color: '#004681' 
                    }}
                  >
                    {post.title}
                  </h2>
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

              {/* Image */}
              {post.image && (
                <div className="w-full flex justify-end">
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
              </Link>

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
