import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Community posts data for page 6
const communityPosts = [
  {
    id: 51,
    title: "Super happy Dr. W",
    date: "June 29, 2022",
    author: "Diana from DCM Norton",
    slug: "super-happy-dr-w",
    content: "",
    image: "/community/community6-1.jpeg"
  },
  {
    id: 52,
    title: "Meeting DCM Norton's Noelle",
    date: "June 29, 2022",
    author: "Joan Werleman from DCM Pitt",
    slug: "meeting-dcm-nortons-noelle",
    content: "",
    image: "/community/community6-2.jpeg"
  },
  {
    id: 53,
    title: "With the one and only 🤩",
    date: "June 29, 2022",
    author: "Joan Werleman from DCM Pitt",
    slug: "with-the-one-and-only",
    content: "",
    image: "/community/community6-3.jpeg"
  },
  {
    id: 54,
    title: "Thank u Dr. W",
    date: "June 29, 2022",
    author: "Diana from DCM Norton",
    slug: "thank-u-dr-w",
    content: "",
    image: "/community/community6-4.jpeg"
  },
  {
    id: 55,
    title: "Diana",
    date: "June 30, 2022",
    author: "Diana from DCM Norton",
    slug: "diana",
    content: "The master minds all reunited!!",
    image: "/community/community6-5.jpeg"
  },
  {
    id: 56,
    title: "Eric Murias",
    date: "June 30, 2022",
    author: "Eric Murias from DCM Norton",
    slug: "eric-murias",
    content: "",
    image: "/community/community6-6.jpeg"
  },
  {
    id: 57,
    title: "The man, the myth, the legend Dr Wollock !!",
    date: "June 30, 2022",
    author: "Amir Daoud from DCM Neo",
    slug: "the-man-the-myth-the-legend-dr-wollock",
    content: "",
    image: "/community/community6-7",
    image2: "/community/community6-7-2.jpeg"
  },
  {
    id: 58,
    title: "Schu",
    date: "July 1, 2022",
    author: "Brock Arms from DCM Norton",
    slug: "schu",
    content: "Schu and I ready to add some pressure to make Diamond this cycle starting today!",
    image: "/community/community6-8.jpeg"
  },
  {
    id: 59,
    title: "Angie Anton",
    date: "July 6, 2022",
    author: "Angie Anton from DCM Destruction",
    slug: "angie-anton",
    content: "Fun times at GRC 2022",
    image: "/community/community6-9-1",
    image2: "/community/community6-9-2",
    image3: "/community/community6-9-3",
    image4: "/community/community6-9-5",
    image5: "/community/community6-9-4.jpeg"
  },
  {
    id: 60,
    title: "True DCM Destruction Legend",
    date: "July 6, 2022",
    author: "Ciaran Murphy from DCM Destruction",
    slug: "true-dcm-destruction-legend",
    content: "Nothing speaks to the nature of DCM like our man Rob Herron. He is all about helping others achieve their goals, and loves sharing stories about his family. Cheers to all the DCM family!",
    image: "/community/community6-10.jpeg"
  }
];

const CommunityContentSection6 = () => {
  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
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
                  className="font-sansation-regular mb-4 text-[16px] sm:text-[17px]"
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
                  {post.image5 ? (
                    // Five images layout - 3 top, 1 bottom left, 1 right
                    <div className="flex flex-col lg:flex-row gap-4">
                      {/* Left side - 3 top, 1 bottom */}
                      <div className="flex flex-col gap-2 flex-1">
                        {/* Top row - 3 images in single line */}
                        <div className="flex gap-1">
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
                          <div className="flex-1">
                            <Image
                              src={post.image3}
                              alt={post.title}
                              width={200}
                              height={150}
                              className="object-cover w-full"
                              style={{ maxWidth: '100%', height: 'auto' }}
                            />
                          </div>
                        </div>
                        {/* Bottom row - 1 image aligned with first image */}
                        <div className="flex gap-2">
                          <div className="flex-1">
                            <Image
                              src={post.image4}
                              alt={post.title}
                              width={200}
                              height={150}
                              className="object-cover w-full"
                              style={{ maxWidth: '100%', height: 'auto' }}
                            />
                          </div>
                          <div className="flex-1"></div>
                          <div className="flex-1"></div>
                        </div>
                      </div>
                      {/* Right side - 1 image */}
                      <div className="flex justify-center lg:justify-end lg:w-auto">
                        <Image
                          src={post.image5}
                          alt={post.title}
                          width={200}
                          height={150}
                          className="object-cover w-full max-w-[200px]"
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
                <div className="mt-8 border-t border-[#004681] border-opacity-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityContentSection6;
