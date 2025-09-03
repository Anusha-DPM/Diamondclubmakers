import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Community posts data for page 3
const communityPosts = [
  {
    id: 21,
    title: "Dr. Simran Bawa, laser focus",
    date: "June 20, 2022",
    author: "Diana from DCM Norton",
    slug: "dr-simran-bawa-laser-focus",
    content: "Simran, this message reminded me of why I wanted to join the DCM community: my screws were removed and it changed the aligment of my own loupes👁.",
    image: "/community/community3-1.jpeg"
  },
  {
    id: 22,
    title: "Always First on Friday",
    date: "June 20, 2022",
    author: "Cara Lund from DCM Pitt",
    slug: "always-first-on-friday",
    content: "I loved seeing Dr. Joan Werleman's Friday posts. she was pretty much always the first to post, giving me something to look forward to when I would sleepily grab my phone on Friday morning and open DCM Pitt. As a cat lover, this pic is a favorite.",
    image: "/community/community3-2.jpeg"
  },
  {
    id: 23,
    title: "TGIF",
    date: "June 20, 2022",
    author: "Kaushal Gandhi from DCM Pitt",
    slug: "tgif",
    content: "When it's been a long week and you're tired! Loved this photo of Matt and his kids!",
    image: "/community/community3-3.jpeg"
  },
  {
    id: 24,
    title: "0.125",
    date: "June 21, 2022",
    author: "Hazem Elbialy from DCM Norton",
    slug: "0-125",
    content: "I would like to eat these snacky snacks at 0.125",
    image: "/community/community3-4.jpeg"
  },
  {
    id: 25,
    title: "Ashley Hill Got Married!",
    date: "June 21, 2022",
    author: "Elliot Singer from DCM Norton",
    slug: "ashley-hill-got-married",
    content: "She got married during this journey!\nCongratulations!!!",
    image: "/community/community3-5.jpeg"
  },
  {
    id: 26,
    title: "Double post!!!!!! As usual it takes me a few tries, but I get it eventually👍👍",
    date: "June 21, 2022",
    author: "Frank neves from DCM Pitt",
    slug: "double-post-as-usual-it-takes-me-a-few-tries-but-i-get-it-eventually",
    content: "",
    image: "/community/community3-6.jpeg"
  },
  {
    id: 27,
    title: "Isaac hurts his shoulder skiing",
    date: "June 21, 2022",
    author: "Andrea Ho-Fatt Wang from DCM Norton",
    slug: "isaac-hurts-his-shoulder-skiing",
    content: "Isaac hurts his shoulder on the ski hill but doesn't stop him from doing video consults leading him to Diamond status! Super inspirational – I want to be Isaac when I grow up 🙂",
    image: "/community/community3-7.jpg"
  },
  {
    id: 28,
    title: "Mike",
    date: "June 22, 2022",
    author: "Mike from DCM other",
    slug: "mike",
    content: "",
    image: "/community/community3-8.jpeg"
  },
  {
    id: 29,
    title: "One of our exceptional diamonds making time for the important things!",
    date: "June 22, 2022",
    author: "Brock Arms from DCM Norton",
    slug: "one-of-our-exceptional-diamonds-making-time-for-the-important-things",
    content: "",
    image: "/community/community3-9.jpeg"
  },
  {
    id: 30,
    title: "I love babies!",
    date: "June 22, 2022",
    author: "Kelly Smudde from DCM Norton",
    slug: "i-love-babies",
    content: "Bill Fessler has a new grand baby that is already training to be an Irish Guard! It's never too early to start trading them up right. Go ND!!!",
    image: "/community/community3-10.jpeg"
  }
];

const CommunityContentSection3 = () => {
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

export default CommunityContentSection3;
