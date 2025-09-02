import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Community posts data for page 10
const communityPosts = [
  {
    id: 91,
    title: "Family Time!! :-)",
    date: "June 25, 2023",
    author: "Andrew Reingold from DCM other",
    slug: "family-time",
    content: "These are the moments that we work for.",
    image: "/community/community-1.jpeg"
  },
  {
    id: 92,
    title: "Haniel Rosemond",
    date: "June 25, 2023",
    author: "Haniel Rosemond from DCM other",
    slug: "haniel-rosemond",
    content: "David I always look forward to your messages . Always humorous and positive . See you in Vegas !!",
    image: "/community/community-2"
  },
  {
    id: 93,
    title: "CECILIO PO",
    date: "June 25, 2023",
    author: "CECILIO PO from DCM other",
    slug: "cecilio-po",
    content: "",
    image: "/community/community-3.jpeg"
  },
  {
    id: 94,
    title: "DCM Yoda - Our Biggest Encourager and Cheerleader",
    date: "June 25, 2023",
    author: "Anu Sood from DCM other",
    slug: "dcm-yoda-our-biggest-encourager-and-cheerleader",
    content: "Through the entire 6 months, Linty has been such a positive inspiration to our DCM family. She's an eloquent writer and would beautifully convey what so many of us felt during this incredible journey. Can't wait to meet in Vegas!",
    image: "/community/community-4.jpeg"
  },
  {
    id: 95,
    title: "Vasudha Narra",
    date: "June 25, 2023",
    author: "Vasudha Narra from DCM other",
    slug: "vasudha-narra",
    content: "Shout out to fellow yoda Brian Rencher . Always with a smile reaching new heights with implementing everything he learns . Inspiration for me.",
    image: "/community/community-5.jpeg"
  },
  {
    id: 96,
    title: "Dr Isaac Perle",
    date: "June 27, 2023",
    author: "Amir Daoud from DCM Neo",
    slug: "dr-isaac-perle",
    content: "Love this photo of Dr Perle in front of his bookcase.\nWhat a wealth of knowledge that he always shares.",
    image: "/community/community-6.jpeg"
  },
  {
    id: 97,
    title: "Summit selfie",
    date: "June 27, 2023",
    author: "Danny Lawen from DCM Neo",
    slug: "summit-selfie",
    content: "Great to see fellow DCM at a TTi summit in Orlando !",
    image: "/community/community-7.jpeg"
  },
  {
    id: 98,
    title: "Kelly smudde",
    date: "June 27, 2023",
    author: "Kelly smudde from DCM Norton",
    slug: "kelly-smudde",
    content: "Thank you Hazem for always motivating me to eat right!!",
    image: "/community/community-8.jpeg"
  },
  {
    id: 99,
    title: "Multiple DCM classes all together at the January 2023 KOL meeting",
    date: "June 27, 2023",
    author: "Lindsey Papac from DCM Neo",
    slug: "multiple-dcm-classes-all-together-at-the-january-2023-kol-meeting",
    content: "",
    image: "/community/community-9.jpeg"
  },
  {
    id: 100,
    title: "Aim for my bucket list",
    date: "June 27, 2023",
    author: "Lauren Lee from DCM Norton",
    slug: "aim-for-my-bucket-list",
    content: "So inspired by fellow DCMers and their travels. It is important to break away from the office to recharge and make memories. Hope to see the tulips in the Netherlands one day sooner than later!",
    image: null
  }
];

const CommunityContentSection10 = () => {
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

export default CommunityContentSection10;
