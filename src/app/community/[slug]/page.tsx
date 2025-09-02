import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from 'next/navigation';

// Community posts data (same as in CommunityContentSection)
const communityPosts = [
  {
    id: 1,
    title: "Thank you, Mike! From the Wince's!",
    date: "June 15, 2022",
    author: "Stacy Wince from DCM Neo",
    slug: "thank-you-mike-from-the-winces",
    content: "",
    image: null
  },
  {
    id: 2,
    title: "getting ready DCM",
    date: "June 15, 2022",
    author: "Viviana Waich from DCM Neo",
    slug: "getting-ready-dcm",
    content: "i was shaking my green juice so i can ve strong and healthy for GRC but..... massive explosion happen .... i still laughing🤣🤣🤣",
    image: "/community/community-2"
  },
  {
    id: 3,
    title: "DCM",
    date: "June 15, 2022",
    author: "Viviana Waich from DCM Neo",
    slug: "dcm",
    content: "great DCM moment",
    image: "/community/community-3.jpeg"
  },
  {
    id: 4,
    title: "Sandhya Anantuni",
    date: "June 16, 2022",
    author: "Sandhya Anantuni from DCM Neo",
    slug: "sandhya-anantuni",
    content: "",
    image: "/community/community-4.jpeg"
  },
  {
    id: 5,
    title: "DCM Diamond Award",
    date: "June 16, 2022",
    author: "Amir Daoud from DCM Neo",
    slug: "dcm-diamond-award",
    content: "My DCM journey officially started in Jan 2021. Truth is I had already been listening to all the advise I could from Dr Mike Wollack whom I have known for several years on the AACA Board.\nWhat I didn't expect was the explosive growth my practice would have. We are now relocating to a new location to be able to continue our growth.\nThe group of fellow DCMers will always be so close because of the like minded nature of what we do.\nDCM for LIFe !!!!",
    image: "/community/community-5.jpeg"
  },
  {
    id: 6,
    title: "DCM Pitt achieve Diamond Status!",
    date: "June 20, 2022",
    author: "Saba Rizvi from DCM Pitt",
    slug: "dcm-pitt-achieve-diamond-status",
    content: "Fellow DCMer achieving Diamond status and his daughter graduate dental school!!!! What a huge accomplishment in one week! So happy for his success and for his daughter's future!",
    image: "/community/community-6.jpeg"
  },
  {
    id: 7,
    title: "Dr. Lauren Lee and her arm candy.",
    date: "June 20, 2022",
    author: "Jim Olsen from DCM Norton",
    slug: "dr-lauren-lee-and-her-arm-candy",
    content: "I love this pic of Lauren and her \"arm candy\". Lauren brought the spirit of fun, hard work, and authentic connection to us all in DCM Norton while we struggled to show up and keep up. Thx Lauren for being such a bright spot every week for us in this group.",
    image: "/community/community-7.jpeg"
  },
  {
    id: 8,
    title: "Dr Isaac Perle Passover Blessing",
    date: "June 20, 2022",
    author: "Simran Bawa from DCM Norton",
    slug: "dr-isaac-perle-passover-blessing",
    content: "We were all amazed when Isaac completed an astounding 31.5 cases in a single week! His faith and strength in the almighty has shown us the light during this amazing journey together.",
    image: "/community/community-8.jpeg"
  },
  {
    id: 9,
    title: "Future of dental and DCM",
    date: "June 20, 2022",
    author: "Andrew Paek from DCM Pitt",
    slug: "future-of-dental-and-dcm",
    content: "Fellow DCMer attending his daughter's dental school graduation! Cheers to the future of our profession and DCM!",
    image: "/community/community-9.jpeg"
  },
  {
    id: 10,
    title: "Insta famous",
    date: "June 20, 2022",
    author: "Andrew Paek from DCM Pitt",
    slug: "insta-famous",
    content: "Amazing insight from our DCMer on how to utilize social media successfully!",
    image: null
  }
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CommunityPost({ params }: PageProps) {
  const { slug } = await params;
  const post = communityPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  const currentIndex = communityPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? communityPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < communityPosts.length - 1 ? communityPosts[currentIndex + 1] : null;

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#004681] py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading */}
          <h1 
            className="text-white font-sansation-regular text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontSize: 'clamp(28px, 6vw, 45px)' }}
          >
            Community
          </h1>

          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <nav className="text-sm sm:text-base">
              <Link 
                href="/" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-sansation-regular"
              >
                Home
              </Link>
              <span className="text-white mx-2">»</span>
              <Link 
                href="/community" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-sansation-regular"
              >
                Community
              </Link>
              <span className="text-white mx-2">»</span>
              <span className="text-white font-sansation-regular">{post.title}</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Post Header */}
            <div className="mb-8">
              <h1 
                className="font-sansation-regular font-bold mb-4"
                style={{ 
                  fontSize: '30px', 
                  color: '#004681' 
                }}
              >
                {post.title}
              </h1>
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
                className="font-sansation-regular mb-8"
                style={{ 
                  fontSize: '17px', 
                  color: '#6b6b6b' 
                }}
              >
                <p className="whitespace-pre-line">{post.content}</p>
              </div>
            )}

            {/* Post Image */}
            {post.image && (
              <div className="flex justify-end mb-8">
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

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-[#004681] border-opacity-20">
              <div className="flex-1">
                {prevPost && (
                  <Link 
                    href={`/community/${prevPost.slug}`}
                    className="inline-flex items-center text-[#004681] hover:text-[#003366] transition-colors duration-200 font-sansation-regular"
                    style={{ fontSize: '17px' }}
                  >
                    <span className="mr-2">←</span>
                    <span className="truncate max-w-xs">{prevPost.title}</span>
                  </Link>
                )}
              </div>
              
              <div className="flex-1 text-center">
                <Link 
                  href="/community"
                  className="text-[#004681] hover:text-[#003366] transition-colors duration-200 font-sansation-regular"
                  style={{ fontSize: '17px' }}
                >
                  Back to Community
                </Link>
              </div>
              
              <div className="flex-1 text-right">
                {nextPost && (
                  <Link 
                    href={`/community/${nextPost.slug}`}
                    className="inline-flex items-center text-[#004681] hover:text-[#003366] transition-colors duration-200 font-sansation-regular"
                    style={{ fontSize: '17px' }}
                  >
                    <span className="truncate max-w-xs">{nextPost.title}</span>
                    <span className="ml-2">→</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
