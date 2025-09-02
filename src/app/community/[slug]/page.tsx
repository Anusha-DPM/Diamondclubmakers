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
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Post Header */}
            <div className="mb-8">
              <h1 
                className="font-sansation-regular mb-4"
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
