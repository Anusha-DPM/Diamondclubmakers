import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Community posts data for page 2
const communityPosts = [
  {
    id: 11,
    title: "Alvin Lo gets ready for Vegas!",
    date: "June 20, 2022",
    author: "Sheila Farahani from DCM Norton",
    slug: "alvin-lo-gets-ready-for-vegas",
    content: "We all gotta look good on stage and Alvin is taking it seriously in the run up to Vegas!",
    image: "/community/community2-1.jpeg"
  },
  {
    id: 12,
    title: "Marathon",
    date: "June 20, 2022",
    author: "Eric Kwon from DCM Pitt",
    slug: "marathon",
    content: "Shout out to my fellow Trojan, Dr. Shari Morningstar! Love this photo which captures our journey together—a reminder that life is about this journey (not just the destination) and that we are running a marathon (not a sprint) together. Fight on DCMers!",
    image: "/community/community2-2.jpeg"
  },
  {
    id: 13,
    title: "What a great couple",
    date: "June 20, 2022",
    author: "Yaerin Lee from DCM Norton",
    slug: "what-a-great-couple",
    content: "William Fessler with his wife 😍 love all smiles on your face",
    image: "/community/community2-3.jpeg"
  },
  {
    id: 14,
    title: "Favorite DCM NORTON PIC",
    date: "June 20, 2022",
    author: "William Fessler from DCM Norton",
    slug: "favorite-dcm-norton-pic",
    content: "",
    image: "/community/community2-4.jpeg"
  },
  {
    id: 15,
    title: "Dr Joel getting engaged- Norton",
    date: "June 20, 2022",
    author: "Darcy Murphy from DCM Norton",
    slug: "dr-joel-getting-engaged-norton",
    content: "On top of that world",
    image: "/community/community2-5.jpeg"
  },
  {
    id: 16,
    title: "DCM Norton has some impressive people!",
    date: "June 20, 2022",
    author: "Lauren Lee from DCM Norton",
    slug: "dcm-norton-has-some-impressive-people",
    content: "Even though Dr. Aimee Russo-Mounger is in Africa on a mission trip right now, she will still grace us with her presence in Vegas next week. Talk about amazing!",
    image: "/community/community2-6.jpeg"
  },
  {
    id: 17,
    title: "New beginnings!❤️",
    date: "June 20, 2022",
    author: "Jennifer Schau from DCM Pitt",
    slug: "new-beginnings",
    content: "I love that Talia took the time to grow her practice whilst growing a human and family!! Talk about changing your life on so many levels!! Major new beginnings…..impressive!",
    image: "/community/community2-7.jpeg"
  },
  {
    id: 18,
    title: "Dr. Jen celebrating St. Patty's Day with her team",
    date: "June 20, 2022",
    author: "Geoff Jackson from DCM Pitt",
    slug: "dr-jen-celebrating-st-pattys-day-with-her-team",
    content: "",
    image: "/community/community2-8.png"
  },
  {
    id: 19,
    title: "Moved to a new office",
    date: "June 20, 2022",
    author: "Nicole Apollon Chirouze from DCM Pitt",
    slug: "moved-to-a-new-office",
    content: "Stefanie grew in numbers all while moving office spaces during our DCM Pitt course! Awesome!",
    image: "/community/community2-9.jpeg"
  },
  {
    id: 20,
    title: "Twinning!",
    date: "June 20, 2022",
    author: "Stefanie Sunnes from DCM Pitt",
    slug: "twinning",
    content: "Taking care of the cutie pie niece, way to go Dr. B!!",
    image: "/community/community2-10.jpeg"
  }
];

const CommunityContentSection2 = () => {
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

                {/* Images */}
                {post.image && (
                  <div className={`flex-shrink-0 ${!post.content ? 'ml-auto' : ''}`}>
                    {post.image2 ? (
                      // Two images layout (left and right)
                      <div className="flex gap-4">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={500}
                          height={400}
                          className="object-cover rounded-lg"
                          style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                        />
                        <Image
                          src={post.image2}
                          alt={post.title}
                          width={500}
                          height={400}
                          className="object-cover rounded-lg"
                          style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                        />
                      </div>
                    ) : (
                      // Single image layout
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={500}
                        height={400}
                        className="object-cover rounded-lg"
                        style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                      />
                    )}
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

export default CommunityContentSection2;
