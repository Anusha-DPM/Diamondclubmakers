import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Community posts data for page 4
const communityPosts = [
  {
    id: 31,
    title: "Daniel Blazo",
    date: "June 22, 2022",
    author: "Daniel Blazo from DCM Pitt",
    slug: "daniel-blazo",
    content: "Shout out to my fellow tiger fan Shari! Go tigers!",
    image: "/community/community-1.jpeg"
  },
  {
    id: 32,
    title: "Best ever Bagel ride",
    date: "June 22, 2022",
    author: "Supriya shetty from DCM Pitt",
    slug: "best-ever-bagel-ride",
    content: "",
    image: "/community/community-2"
  },
  {
    id: 33,
    title: "Post of appreciation",
    date: "June 22, 2022",
    author: "Alexander Moqattash from DCM Pitt",
    slug: "post-of-appreciation",
    content: "Wanted to thank Matthew for reaching out during a time of difficulty. Your help had an immense impact on my practice",
    image: "/community/community-3.jpeg"
  },
  {
    id: 34,
    title: "Brock's Pathfinder camping",
    date: "June 22, 2022",
    author: "Will sung from DCM Norton",
    slug: "brocks-pathfinder-camping",
    content: "Brock's picture brought back memories of when I was in the pathfinders. Always looked forward to the camporees, thank you for sharing.",
    image: "/community/community-4.jpeg"
  },
  {
    id: 35,
    title: "No excuses",
    date: "June 22, 2022",
    author: "Joan Werleman from DCM Pitt",
    slug: "no-excuses",
    content: "I love this picture of Talia Davidson. Talia birthed a beautiful child during DCM Pitt class and kept on going. Checking clinchecks and never missed a step. Assistants scanning back at the office and you submitting cases in between feedings and diaper changes and virtually no sleep. I am so proud of you 👏🏻 ⭐️⭐️⭐️⭐️⭐️",
    image: "/community/community-5.jpeg"
  },
  {
    id: 36,
    title: "Jovan Spinnato",
    date: "June 22, 2022",
    author: "Jovan Spinnato from DCM Norton",
    slug: "jovan-spinnato",
    content: "Lauren Lee, you are too hilarious. One of my favourite photos of the past 6 months.",
    image: "/community/community-6.jpeg"
  },
  {
    id: 37,
    title: "My family",
    date: "June 22, 2022",
    author: "Talia Davidson from DCM Pitt",
    slug: "my-family",
    content: "",
    image: "/community/community-7.jpeg"
  },
  {
    id: 38,
    title: "Daddy's Got You",
    date: "June 22, 2022",
    author: "Amanda Sheehan from DCM Pitt",
    slug: "daddys-got-you",
    content: "Dr. Alex and his beautiful daughter. Just a moment of time caught on camera, showing the pure love between father and daughter.",
    image: "/community/community-8.jpeg"
  },
  {
    id: 39,
    title: "You Go Girl!",
    date: "June 22, 2022",
    author: "Talia Davidson from DCM Pitt",
    slug: "you-go-girl",
    content: "Mackenzie really rocked it during the last 6 months. I feel like she gave the course her all and she got a lot out of it as a result. And it also looks like she has fun in her spare time too. The sky's the limit for her!",
    image: "/community/community-9.jpeg"
  },
  {
    id: 40,
    title: "Thank you, Simran",
    date: "June 23, 2022",
    author: "Izzy Perle from DCM Norton",
    slug: "thank-you-simran",
    content: "Simran, I have been looking up to you and your tremendous success. I derived my inspiration from you. A man of faith. A man of honesty and integrity. A man that has been the leader since the beginning. Thank you., Simran",
    image: null
  }
];

const CommunityContentSection4 = () => {
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

export default CommunityContentSection4;
