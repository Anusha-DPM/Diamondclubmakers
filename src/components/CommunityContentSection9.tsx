import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Community posts data for page 9
const communityPosts = [
  {
    id: 81,
    title: "Winston Feng",
    date: "June 22, 2023",
    author: "Sheena Sood from DCM other",
    slug: "winston-feng",
    content: "Celebrating his team getting on board. I love the smile 😃",
    image: "/community/community-1.jpeg"
  },
  {
    id: 82,
    title: "Golfer from another Mother",
    date: "June 22, 2023",
    author: "David Tapani from DCM other",
    slug: "golfer-from-another-mother",
    content: "Ken, thank you for your friendship. We leaned on each other a lot over the last 6 months and together we've accomplished a great feat. I look forward to having a drink with you in Vegas!",
    image: "/community/community-2"
  },
  {
    id: 83,
    title: "Abinaash Kaur Queen of clear aligners and compassion",
    date: "June 22, 2023",
    author: "Andrew Holovnia from DCM other",
    slug: "abinaash-kaur-queen-of-clear-aligners-and-compassion",
    content: "Abinaash's beautiful smile is a pure reflection of her heart and compassion. Her caring words and actions helped immensely during a time I was really struggling. Her attitude rubbed off on me and helped propel me to reach new heights and blow past previous personal best! I'm proud to consider you a friend and I've got a drink with your name on it when I see you in Vegas!",
    image: "/community/community-3.jpeg"
  },
  {
    id: 84,
    title: "Four of Diamonds- Richard A. Dickinson Sr and family",
    date: "June 22, 2023",
    author: "Rani Dasgupta from DCM other",
    slug: "four-of-diamonds-richard-a-dickinson-sr-and-family",
    content: "",
    image: "/community/community-4.jpeg"
  },
  {
    id: 85,
    title: "TikTok/IG Queen Shiva Soleimani",
    date: "June 22, 2023",
    author: "Linty John-Varghese from DCM other",
    slug: "tiktok-ig-queen-shiva-soleimani",
    content: "More have I learned from my DCM YODA fam, Shiva, The Queen of TikTok & IG, .. about Strength of Social media, Creating Presence & Content, Introduction to the World of Chat GPT and her immense Love for Rescuing Cats. Rockstar Dentist with a Heart of Gold,.. an absolute Honor to have you as my Friend for Life ❤️.",
    image: "/community/community-5.jpeg"
  },
  {
    id: 86,
    title: "Shiva Soleimani, Queen of TikTok & IG",
    date: "June 22, 2023",
    author: "Linty John-Varghese from DCM other",
    slug: "shiva-soleimani-queen-of-tiktok-ig",
    content: "More have I learned from my DCM YODA fam, Shiva Soleimani, .. The Queen of TikTok & IG, .. about Strength of Social media, Creating Presence & Content, Introduction to the World of Chat GPT and her immense Love for Rescuing Cats. Rockstar Dentist with a Heart of Gold,.. an absolute Honor to have you as my Friend for Life ❤️.",
    image: "/community/community-6.jpeg"
  },
  {
    id: 87,
    title: "Andreea Torok",
    date: "June 23, 2023",
    author: "Andreea Torok",
    slug: "andreea-torok",
    content: "Richard, you are such an inspiration to me and this group. I am amazed of your passion and dedication to our profession and patients after so many years in the field.",
    image: "/community/community-7.jpeg"
  },
  {
    id: 88,
    title: "Andreea Torok",
    date: "June 23, 2023",
    author: "Andreea Torok from DCM other",
    slug: "andreea-torok-2",
    content: "David\nThis pic was too funny not to share\nI love your positivity and great attitude\nYou lifted my mood every Friday",
    image: "/community/community-8.jpeg"
  },
  {
    id: 89,
    title: "Relaxation!!",
    date: "June 23, 2023",
    author: "DCM2022 from DCM other",
    slug: "relaxation",
    content: "",
    image: "/community/community-9.jpeg"
  },
  {
    id: 90,
    title: "Inspiration Unlimited",
    date: "June 25, 2023",
    author: "Shilpa Desai from DCM other",
    slug: "inspiration-unlimited",
    content: "~Richard A. Dickinson Sr , you are an inspiration to me. You taught me that age is no limit just follow ur dreams.",
    image: null
  }
];

const CommunityContentSection9 = () => {
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

export default CommunityContentSection9;
