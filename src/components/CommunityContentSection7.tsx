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
    image: "/community/community7-1.jpeg"
  },
  {
    id: 62,
    title: "R & R",
    date: "July 8, 2022",
    author: "Jim Olsen from DCM Norton",
    slug: "r-and-r",
    content: "Just a little vacay time on Lake Michigan after GRC. Returning to the office rested and ready!",
    image: "/community/community7-2-1",
    image2: "/community/community7-2-2",
    image3: "/community/community7-2.jpeg"
  },
  {
    id: 63,
    title: "Recent fave: Maryz makes Gold plus",
    date: "July 8, 2022",
    author: "Robin Lucas from DCM Destruction",
    slug: "recent-fave-maryz-makes-gold-plus",
    content: "",
    image: "/community/community7-3.jpg"
  },
  {
    id: 64,
    title: "Cuteness to the max",
    date: "June 19, 2023",
    author: "Harpreet Singh Dhillon from DCM other",
    slug: "cuteness-to-the-max",
    content: "This is one of my favorite photos of my DCM group. It's A fellow DCM Rebel, Brian with his son.",
    image: "/community/community7-5.jpg"
  },
  {
    id: 65,
    title: "Having fun while carving Diamond",
    date: "June 19, 2023",
    author: "Quyen Dang from DCM other",
    slug: "having-fun-while-carving-diamond",
    content: "Dr. Winston Feng is the embodiment of joy in our Yoda class, consistently spreading positivity and humor wherever he goes.",
    image: "/community/community7-6.jpeg"
  },
  {
    id: 66,
    title: "Dr. Andrew of Yoda",
    date: "June 19, 2023",
    author: "Joshua Chupp",
    slug: "dr-andrew-of-yoda",
    content: "Gets his brush on",
    image: "/community/community7-7.jpeg"
  },
  {
    id: 67,
    title: "Best Friends!",
    date: "June 19, 2023",
    author: "Ken Bevan from DCM other",
    slug: "best-friends",
    content: "Always an optimist, always ready to lend a hand and great contributor to our class DCM Yoda; I love that Dr Tapani falls into the category of looking like his dog 🙂",
    image: "/community/community7-8.jpg"
  },
  {
    id: 68,
    title: "Amy Jung- a rising star!",
    date: "June 19, 2023",
    author: "Elizabeth Abell from DCM other",
    slug: "amy-jung-a-rising-star",
    content: "Amy, your dedication to your team, office growth, and willingness to always implement course materials quickly has always inspired me. I feel so fortunate to have met you at Rengage 2. I can't wait to see you again soon and value your expertise and friendship! Congratulations on all of your success!",
    image: "/community/community7-9.jpeg"
  },
  {
    id: 69,
    title: "YONATAN AHDUT",
    date: "June 21, 2023",
    author: "YONATAN AHDUT from DCM other",
    slug: "yonatan-ahdut",
    content: "",
    image: "/community/community7-7.jpeg"
  },
  {
    id: 70,
    title: "Dr Annah Tran",
    date: "June 21, 2023",
    author: "Jonathan Chen from DCM other",
    slug: "dr-annah-tran",
    content: "Badass Dr Tran getting her Platinum bling 💎💎",
    image: "/community/community7-10.jpeg"
  }
];

const CommunityContentSection7 = () => {
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
                <div className="w-full">
                  {post.image3 ? (
                    // Three images layout - all in single line
                    <div className="flex flex-col sm:flex-row gap-2">
                      {/* First image - left */}
                      <div className="flex-1">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={200}
                          height={150}
                          className="object-cover w-full"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </div>
                      {/* Second image - middle */}
                      <div className="flex-1">
                        <Image
                          src={post.image2}
                          alt={post.title}
                          width={200}
                          height={150}
                          className="object-cover w-full"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </div>
                      {/* Third image - right */}
                      <div className="flex-1">
                        <Image
                          src={post.image3}
                          alt={post.title}
                          width={300}
                          height={250}
                          className="object-cover w-full"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </div>
                    </div>
                  ) : post.image2 ? (
                    // Two images layout - first left, second right on same line
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-4">
                      {/* First image - left aligned */}
                      <div className="w-full sm:w-auto flex justify-start">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={300}
                          height={250}
                          className="object-cover w-full sm:w-auto"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </div>
                      {/* Second image - right aligned */}
                      <div className="w-full sm:w-auto flex justify-start sm:justify-end">
                        <Image
                          src={post.image2}
                          alt={post.title}
                          width={300}
                          height={250}
                          className="object-cover w-full sm:w-auto"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </div>
                    </div>
                  ) : (
                    // Single image layout (fallback for other posts)
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

export default CommunityContentSection7;
