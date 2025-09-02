import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Community posts data for page 7
const communityPosts = [
  {
    id: 61,
    title: "Tran Han",
    date: "July 7, 2022",
    author: "Tran Han from DCM Destruction",
    slug: "tran-han",
    content: "Bring apart of DCM has been amazing but getting to share it with so many awesome people was more than I can ask for. Especially with Rob Herron. This was a night to remember for sure 😉 Thanks to Sarah Pless for getting us out in Vegas!!!",
    image: "/community/community-1.jpeg"
  },
  {
    id: 62,
    title: "R & R",
    date: "July 8, 2022",
    author: "Jim Olsen from DCM Norton",
    slug: "r-and-r",
    content: "Just a little vacay time on Lake Michigan after GRC. Returning to the office rested and ready!",
    image: "/community/community-2"
  },
  {
    id: 63,
    title: "Recent fave: Maryz makes Gold plus",
    date: "July 8, 2022",
    author: "Robin Lucas from DCM Destruction",
    slug: "recent-fave-maryz-makes-gold-plus",
    content: "",
    image: "/community/community-3.jpeg"
  },
  {
    id: 64,
    title: "Cuteness to the max",
    date: "June 19, 2023",
    author: "Harpreet Singh Dhillon from DCM other",
    slug: "cuteness-to-the-max",
    content: "This is one of my favorite photos of my DCM group. It's A fellow DCM Rebel, Brian with his son.",
    image: "/community/community-4.jpeg"
  },
  {
    id: 65,
    title: "Having fun while carving Diamond",
    date: "June 19, 2023",
    author: "Quyen Dang from DCM other",
    slug: "having-fun-while-carving-diamond",
    content: "Dr. Winston Feng is the embodiment of joy in our Yoda class, consistently spreading positivity and humor wherever he goes.",
    image: "/community/community-5.jpeg"
  },
  {
    id: 66,
    title: "Dr. Andrew of Yoda",
    date: "June 19, 2023",
    author: "Joshua Chupp",
    slug: "dr-andrew-of-yoda",
    content: "Gets his brush on",
    image: "/community/community-6.jpeg"
  },
  {
    id: 67,
    title: "Best Friends!",
    date: "June 19, 2023",
    author: "Ken Bevan from DCM other",
    slug: "best-friends",
    content: "Always an optimist, always ready to lend a hand and great contributor to our class DCM Yoda; I love that Dr Tapani falls into the category of looking like his dog 🙂",
    image: "/community/community-7.jpeg"
  },
  {
    id: 68,
    title: "Amy Jung- a rising star!",
    date: "June 19, 2023",
    author: "Elizabeth Abell from DCM other",
    slug: "amy-jung-a-rising-star",
    content: "Amy, your dedication to your team, office growth, and willingness to always implement course materials quickly has always inspired me. I feel so fortunate to have met you at Rengage 2. I can't wait to see you again soon and value your expertise and friendship! Congratulations on all of your success!",
    image: "/community/community-8.jpeg"
  },
  {
    id: 69,
    title: "YONATAN AHDUT",
    date: "June 21, 2023",
    author: "YONATAN AHDUT from DCM other",
    slug: "yonatan-ahdut",
    content: "",
    image: "/community/community-9.jpeg"
  },
  {
    id: 70,
    title: "Dr Annah Tran",
    date: "June 21, 2023",
    author: "Jonathan Chen from DCM other",
    slug: "dr-annah-tran",
    content: "Badass Dr Tran getting her Platinum bling 💎💎",
    image: null
  }
];

const CommunityContentSection7 = () => {
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

export default CommunityContentSection7;
