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
    image: "/community/community4-1.jpeg"
  },
  {
    id: 32,
    title: "Best ever Bagel ride",
    date: "June 22, 2022",
    author: "Supriya shetty from DCM Pitt",
    slug: "best-ever-bagel-ride",
    content: "",
    image: "/community/community4-2.jpeg"
  },
  {
    id: 33,
    title: "Post of appreciation",
    date: "June 22, 2022",
    author: "Alexander Moqattash from DCM Pitt",
    slug: "post-of-appreciation",
    content: "Wanted to thank Matthew for reaching out during a time of difficulty. Your help had an immense impact on my practice",
    image: "/community/community4-3.jpeg"
  },
  {
    id: 34,
    title: "Brock's Pathfinder camping",
    date: "June 22, 2022",
    author: "Will sung from DCM Norton",
    slug: "brocks-pathfinder-camping",
    content: "Brock's picture brought back memories of when I was in the pathfinders. Always looked forward to the camporees, thank you for sharing.",
    image: "/community/community4-4.jpg"
  },
  {
    id: 35,
    title: "No excuses",
    date: "June 22, 2022",
    author: "Joan Werleman from DCM Pitt",
    slug: "no-excuses",
    content: "I love this picture of Talia Davidson. Talia birthed a beautiful child during DCM Pitt class and kept on going. Checking clinchecks and never missed a step. Assistants scanning back at the office and you submitting cases in between feedings and diaper changes and virtually no sleep. I am so proud of you 👏🏻 ⭐️⭐️⭐️⭐️⭐️",
    image: "/community/community4-5.jpeg"
  },
  {
    id: 36,
    title: "Jovan Spinnato",
    date: "June 22, 2022",
    author: "Jovan Spinnato from DCM Norton",
    slug: "jovan-spinnato",
    content: "Lauren Lee, you are too hilarious. One of my favourite photos of the past 6 months.",
    image: "/community/community4-6.jpeg"
  },
  {
    id: 37,
    title: "My family",
    date: "June 22, 2022",
    author: "Talia Davidson from DCM Pitt",
    slug: "my-family",
    content: "",
    image: "/community/community4-7.jpeg"
  },
  {
    id: 38,
    title: "Daddy's Got You",
    date: "June 22, 2022",
    author: "Amanda Sheehan from DCM Pitt",
    slug: "daddys-got-you",
    content: "Dr. Alex and his beautiful daughter. Just a moment of time caught on camera, showing the pure love between father and daughter.",
    image: "/community/community4-8.jpeg"
  },
  {
    id: 39,
    title: "You Go Girl!",
    date: "June 22, 2022",
    author: "Talia Davidson from DCM Pitt",
    slug: "you-go-girl",
    content: "Mackenzie really rocked it during the last 6 months. I feel like she gave the course her all and she got a lot out of it as a result. And it also looks like she has fun in her spare time too. The sky's the limit for her!",
    image: "/community/community4-9.jpeg"
  },
  {
    id: 40,
    title: "Thank you, Simran",
    date: "June 23, 2022",
    author: "Izzy Perle from DCM Norton",
    slug: "thank-you-simran",
    content: "Simran, I have been looking up to you and your tremendous success. I derived my inspiration from you. A man of faith. A man of honesty and integrity. A man that has been the leader since the beginning. Thank you., Simran",
    image: "/community/community4-10.jpeg"
  }
];

const CommunityContentSection4 = () => {
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

export default CommunityContentSection4;
