import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Community posts data for page 8
const communityPosts = [
  {
    id: 71,
    title: "true passion toward diamond and DCM",
    date: "June 21, 2023",
    author: "Amy Jung from DCM other",
    slug: "true-passion-toward-diamond-and-dcm",
    content: "\"Your passion for dentistry is what sets apart. Keep pushing your dreams and never give up!\" by Dr. Wollock.\nDr. Dang's commitment and passion inspired me so much!",
    image: "/community/community8-1.jpeg"
  },
  {
    id: 72,
    title: "Shiva",
    date: "June 21, 2023",
    author: "Abinaash Kaur from DCM other",
    slug: "shiva",
    content: "A rising star dentist, an humble human being, and\na wicked social media content creator. Love her creativity and positive energy.",
    image: "/community/community8-2.jpeg"
  },
  {
    id: 73,
    title: "Sheena Sood with her niece",
    date: "June 21, 2023",
    author: "Olga Dontsova from DCM other",
    slug: "sheena-sood-with-her-niece",
    content: "Would like to honor Sheena, an amazing human, who is always helping others.\nThank you Sheena for being there, you inspired me and taught me a lot.\nThank you for sharing your wisdom with everyone, who would like to learn, such a generous heart.",
    image: "/community/community8-3.png"
  },
  {
    id: 74,
    title: "Quyen Dang, Coolest Dude out there",
    date: "June 22, 2023",
    author: "Brian Rencher from DCM other",
    slug: "quyen-dang-coolest-dude-out-there",
    content: "DCM Goals!!! Quyen is the coolest dude out there and we all want to be like him, from achieving Diamond Status to looking Rico Suave in a leather coat and a fast bike! One day I want to be like you!",
    image: "/community/community8-4.jpeg"
  },
  {
    id: 75,
    title: "Quyen Dang- Journey on a diamond road to success",
    date: "June 22, 2023",
    author: "Rani Dasgupta from DCM other",
    slug: "quyen-dang-journey-on-a-diamond-road-to-success",
    content: "",
    image: "/community/community8-4.jpeg"
  },
  {
    id: 76,
    title: "Deep thought Linty",
    date: "June 22, 2023",
    author: "Linda Wu from DCM other",
    slug: "deep-thought-linty",
    content: "I always look forward to your posts…you always view the world with a full glass!!",
    image: "/community/community8-6.jpeg"
  },
  {
    id: 77,
    title: "Yoni",
    date: "June 22, 2023",
    author: "Moshe Rechthand from DCM other",
    slug: "yoni",
    content: "Here's to Yoni Ahdut – the best smile in DCM YODA.",
    image: "/community/community8-7.jpeg"
  },
  {
    id: 78,
    title: "Linty- our Yoda voice",
    date: "June 22, 2023",
    author: "Jessica Nieva from DCM other",
    slug: "linty-our-yoda-voice",
    content: "Linty has a way to be resilient, encouraging, be optimistic, spread gratitude and be our biggest cheerleader with her eloquent talent of writing🥰.",
    image: "/community/community8-8.jpeg"
  },
  {
    id: 79,
    title: "DCM Yoda Life Coach",
    date: "June 22, 2023",
    author: "Annah Tran from DCM other",
    slug: "dcm-yoda-life-coach",
    content: "To the most inspiring person I have never met. I look forward to your posts almost as much as Dr. Wollock's because I know it will instantly inspire me to do better. Meet you soon in Vegas!",
    image: "/community/community8-9.jpeg"
  },
  {
    id: 80,
    title: "Jessica Nieva 💪🏻💪🏻💪🏻",
    date: "June 22, 2023",
    author: "Lauren Shepard from DCM other",
    slug: "jessica-nieva",
    content: "This girls is one strong, powerful, beautiful mom boss! She has overcome so many challenges, yet still strives for more! She also sets a wonderful example for her precious girl gang! She truly exemplifies the DCM spirit!",
    image: "/community/community8-10.jpeg"
  }
];

const CommunityContentSection8 = () => {
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

export default CommunityContentSection8;
