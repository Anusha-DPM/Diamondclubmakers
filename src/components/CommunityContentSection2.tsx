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
                      color: '#004681' 
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
                      className="object-cover rounded-lg w-full sm:w-auto"
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

export default CommunityContentSection2;
