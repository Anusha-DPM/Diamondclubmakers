import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from 'next/navigation';
import { communityPosts } from '@/data/communityPosts';

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
      <section className="bg-[#004681] py-8 sm:py-10 lg:py-12">
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
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
          {/* Header and Image Layout - Image aligned with heading */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start mb-6">
            {/* Left Column - Header and Content */}
            <div className="flex-1">
              {/* Post Header */}
              <div className="mb-6">
                <h1 
                  className="font-sansation-regular mb-3"
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

              {/* Content */}
              {post.content && (
                <div 
                  className="font-sansation-regular"
                  style={{ 
                    fontSize: '17px', 
                    color: '#6b6b6b' 
                  }}
                >
                  <p className="whitespace-pre-line">{post.content}</p>
                </div>
              )}
            </div>

            {/* Right Column - Image aligned with heading */}
            {post.image && (
              <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
                <div className="relative w-full max-w-[300px] sm:w-[300px] h-[250px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="pt-8 border-t border-[#004681] border-opacity-20">
            {/* Mobile Layout */}
            <div className="flex flex-col space-y-3 sm:hidden">
              {prevPost && (
                <Link 
                  href={`/community/${prevPost.slug}`}
                  className="inline-flex items-center justify-center text-[#004681] hover:text-[#003366] transition-colors duration-200 font-sansation-regular"
                  style={{ fontSize: '15px' }}
                >
                  <span className="mr-2">←</span>
                  <span className="truncate max-w-[280px]">{prevPost.title}</span>
                </Link>
              )}
              
              <Link 
                href="/community"
                className="text-[#004681] hover:text-[#003366] transition-colors duration-200 font-sansation-regular text-center"
                style={{ fontSize: '15px' }}
              >
                Back to Community
              </Link>
              
              {nextPost && (
                <Link 
                  href={`/community/${nextPost.slug}`}
                  className="inline-flex items-center justify-center text-[#004681] hover:text-[#003366] transition-colors duration-200 font-sansation-regular"
                  style={{ fontSize: '15px' }}
                >
                  <span className="truncate max-w-[280px]">{nextPost.title}</span>
                  <span className="ml-2">→</span>
                </Link>
              )}
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex justify-between items-center gap-4">
              <div className="flex-1 min-w-0">
                {prevPost && (
                  <Link 
                    href={`/community/${prevPost.slug}`}
                    className="inline-flex items-center text-[#004681] hover:text-[#003366] transition-colors duration-200 font-sansation-regular"
                    style={{ fontSize: '17px' }}
                  >
                    <span className="mr-2 flex-shrink-0">←</span>
                    <span className="truncate">{prevPost.title}</span>
                  </Link>
                )}
              </div>
              
              <div className="flex-shrink-0 px-4">
                <Link 
                  href="/community"
                  className="text-[#004681] hover:text-[#003366] transition-colors duration-200 font-sansation-regular whitespace-nowrap"
                  style={{ fontSize: '17px' }}
                >
                  Back to Community
                </Link>
              </div>
              
              <div className="flex-1 min-w-0 text-right">
                {nextPost && (
                  <Link 
                    href={`/community/${nextPost.slug}`}
                    className="inline-flex items-center justify-end text-[#004681] hover:text-[#003366] transition-colors duration-200 font-sansation-regular"
                    style={{ fontSize: '17px' }}
                  >
                    <span className="truncate">{nextPost.title}</span>
                    <span className="ml-2 flex-shrink-0">→</span>
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
