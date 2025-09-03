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
    image: "/community/community10-1.jpeg"
  },
  {
    id: 92,
    title: "Haniel Rosemond",
    date: "June 25, 2023",
    author: "Haniel Rosemond from DCM other",
    slug: "haniel-rosemond",
    content: "David I always look forward to your messages . Always humorous and positive . See you in Vegas !!",
    image: "/community/community10-2.jpeg"
  },
  {
    id: 93,
    title: "CECILIO PO",
    date: "June 25, 2023",
    author: "CECILIO PO from DCM other",
    slug: "cecilio-po",
    content: "",
    image: "/community/community10-3.jpg"
  },
  {
    id: 94,
    title: "DCM Yoda - Our Biggest Encourager and Cheerleader",
    date: "June 25, 2023",
    author: "Anu Sood from DCM other",
    slug: "dcm-yoda-our-biggest-encourager-and-cheerleader",
    content: "Through the entire 6 months, Linty has been such a positive inspiration to our DCM family. She's an eloquent writer and would beautifully convey what so many of us felt during this incredible journey. Can't wait to meet in Vegas!",
    image: "/community/community10-4.jpg"
  },
  {
    id: 95,
    title: "Vasudha Narra",
    date: "June 25, 2023",
    author: "Vasudha Narra from DCM other",
    slug: "vasudha-narra",
    content: "Shout out to fellow yoda Brian Rencher . Always with a smile reaching new heights with implementing everything he learns . Inspiration for me.",
    image: "/community/community10-5.jpeg"
  },
  {
    id: 96,
    title: "Dr Isaac Perle",
    date: "June 27, 2023",
    author: "Amir Daoud from DCM Neo",
    slug: "dr-isaac-perle",
    content: "Love this photo of Dr Perle in front of his bookcase.\nWhat a wealth of knowledge that he always shares.",
    image: "/community/community10-6.jpeg"
  },
  {
    id: 97,
    title: "Summit selfie",
    date: "June 27, 2023",
    author: "Danny Lawen from DCM Neo",
    slug: "summit-selfie",
    content: "Great to see fellow DCM at a TTi summit in Orlando !",
    image: "/community/community10-7.jpg"
  },
  {
    id: 98,
    title: "Kelly smudde",
    date: "June 27, 2023",
    author: "Kelly smudde from DCM Norton",
    slug: "kelly-smudde",
    content: "Thank you Hazem for always motivating me to eat right!!",
    image: "/community/community10-8.jpeg"
  },
  {
    id: 99,
    title: "Multiple DCM classes all together at the January 2023 KOL meeting",
    date: "June 27, 2023",
    author: "Lindsey Papac from DCM Neo",
    slug: "multiple-dcm-classes-all-together-at-the-january-2023-kol-meeting",
    content: "",
    image: "/community/community10-9.jpeg"
  },
  {
    id: 100,
    title: "Aim for my bucket list",
    date: "June 27, 2023",
    author: "Lauren Lee from DCM Norton",
    slug: "aim-for-my-bucket-list",
    content: "So inspired by fellow DCMers and their travels. It is important to break away from the office to recharge and make memories. Hope to see the tulips in the Netherlands one day sooner than later!",
    image: "/community/community10-10.jpeg"
  }
];

const CommunityContentSection10 = () => {
  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12">
      <div className="w-full" style={{ paddingLeft: '150px', paddingRight: '150px' }}>
        <div className="space-y-8">
          {communityPosts.map((post, index) => (
            <div key={post.id}>
              {/* Clickable Article Area */}
              <Link 
                href={`/community/${post.slug}`}
                className="block hover:opacity-95 transition-all duration-200 rounded-lg p-2 -m-2"
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
                <div className="mt-8 border-t border-[#004681] border-opacity-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityContentSection10;
