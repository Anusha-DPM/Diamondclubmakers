import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Community posts data for page 5
const communityPosts = [
  {
    id: 41,
    title: "Richard Racanelli",
    date: "June 22, 2022",
    author: "Richard Racanelli",
    slug: "richard-racanelli",
    content: "Love this pic of newly minted Diamond Jim Olsen rocking new shades for the start of golf season !",
    image: "/community/community5-1.jpeg"
  },
  {
    id: 42,
    title: "Getting time away",
    date: "June 23, 2022",
    author: "Jeff from DCM Pitt.",
    slug: "getting-time-away",
    content: "Love this, taking time to reconnect and recharge with spouse.",
    image: "/community/community5-2.jpeg"
  },
  {
    id: 43,
    title: "Community",
    date: "June 23, 2022",
    author: "Bella Kramer",
    slug: "community",
    content: "Thank you to all for such an adventure. Getting to know each of you was a true pleasure!\nDuring the past six months we saw eachother ups and downs and became a real community. I definitely struggled with implementing a lot of this and it's a work in progress. Many of you have inspired me to get out of my box and routines and go for it!!! Seeing Michaels techniques have so much success for many of us is proof of how successful one can be if they go out of their comfort zone. Thank you Michael for challenging us all to go outside of our comfort for more success!",
    image: "/community/community5-3.jpeg"
  },
  {
    id: 44,
    title: "Family Time",
    date: "June 23, 2022",
    author: "Ghanem Ghannam from DCM Pitt",
    slug: "family-time",
    content: "Always enjoyed the family photos. This one especially of a shared activity.",
    image: "/community/community5-4.jpeg"
  },
  {
    id: 45,
    title: "One of my favorite posts",
    date: "June 23, 2022",
    author: "Aimee Russo-Mounger from DCM Norton",
    slug: "one-of-my-favorite-posts",
    content: "Wealth accelerator you tube video was great. Started listening to this guy!! Thanks",
    image: "/community/community5-5.jpeg"
  },
  {
    id: 46,
    title: "Simran Family Time",
    date: "June 23, 2022",
    author: "Harjinder Girn from DCM Norton",
    slug: "simran-family-time",
    content: "Love seeing different generations of families spending time together not only at home but vacation getaways. Simran is truly an honourable man of integrity and great values.",
    image: "/community/community5-6.jpeg"
  },
  {
    id: 47,
    title: "An amazing group with lots of skills!",
    date: "June 23, 2022",
    author: "Jay Kansal from DCM Pitt",
    slug: "an-amazing-group-with-lots-of-skills",
    content: "I've had the pleasure of interacting with Dr. Meghna Dassani in another mastermind group. I was luckily to interact with her even more in our Dcm Pitt group. She is a treasure trove of info on airway, so definitely reach out to her!",
    image: "/community/community5-7.jpeg"
  },
  {
    id: 48,
    title: "Les Neville",
    date: "June 23, 2022",
    author: "Les Neville from DCM Norton",
    slug: "les-neville",
    content: "",
    image: "/community/community5-8.jpeg"
  },
  {
    id: 49,
    title: "2022 Opening session",
    date: "June 29, 2022",
    author: "Rush bhatnagar from DCM Destruction",
    slug: "2022-opening-session",
    content: "#DCMDestruction",
    image: "/community/community5-9.jpeg"
  },
  {
    id: 50,
    title: "Norton representing",
    date: "June 29, 2022",
    author: "Diana from DCM Norton",
    slug: "norton-representing",
    content: "",
    image: "/community/community5-10.jpeg"
  }
];

const CommunityContentSection5 = () => {
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

export default CommunityContentSection5;
