"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from 'next/navigation';

// Community post data
const communityPosts = [
  {
    id: 1,
    title: "DCM Success Story: From Silver to Diamond in 6 Months",
    excerpt: "Discover how Dr. Sarah Johnson transformed her practice using DCM principles and achieved Diamond status in just 6 months...",
    content: `
      <p>Dr. Sarah Johnson's journey from Silver to Diamond status in just 6 months is a testament to the power of the Diamond Club Makers program. When she first joined DCM, Dr. Johnson was struggling with low Invisalign case acceptance rates and feeling overwhelmed by the complexity of treatment planning.</p>
      
      <p>Through the systematic approach taught in DCM, she learned to:</p>
      <ul>
        <li>Streamline her consultation process</li>
        <li>Implement effective case presentation strategies</li>
        <li>Train her team to handle routine tasks</li>
        <li>Optimize her scheduling for maximum efficiency</li>
      </ul>
      
      <p>The results were remarkable. Within 6 months, Dr. Johnson's practice saw:</p>
      <ul>
        <li>A 300% increase in Invisalign case starts</li>
        <li>Improved patient satisfaction scores</li>
        <li>Reduced chair time per case</li>
        <li>Significant increase in practice revenue</li>
      </ul>
      
      <p>"The DCM program gave me the confidence and systems I needed to transform my practice," says Dr. Johnson. "I'm now able to help more patients achieve their smile goals while running a more efficient and profitable practice."</p>
    `,
    image: "/community/community-1.jpeg",
    date: "March 15, 2024",
    author: "Dr. Sarah Johnson",
    slug: "dcm-success-story-silver-to-diamond"
  },
  {
    id: 2,
    title: "5 Key Strategies for Increasing Invisalign Case Acceptance",
    excerpt: "Learn the proven strategies that top DCM providers use to increase their Invisalign case acceptance rates...",
    content: `
      <p>Increasing Invisalign case acceptance is crucial for practice growth and patient satisfaction. Based on the experiences of top DCM providers, here are the five key strategies that consistently deliver results:</p>
      
      <h3>1. Master the Consultation Process</h3>
      <p>A well-structured consultation is the foundation of case acceptance. Focus on understanding patient concerns, presenting clear treatment options, and addressing objections proactively.</p>
      
      <h3>2. Leverage Before-and-After Images</h3>
      <p>Visual evidence of successful outcomes is incredibly powerful. Maintain a comprehensive gallery of before-and-after cases to show patients what's possible.</p>
      
      <h3>3. Implement Team Training</h3>
      <p>Your team should be knowledgeable about Invisalign and able to answer common questions. Regular training sessions ensure everyone is on the same page.</p>
      
      <h3>4. Use Technology Effectively</h3>
      <p>Modern tools like iTero scans and ClinCheck presentations can significantly enhance patient understanding and confidence in treatment.</p>
      
      <h3>5. Follow Up Consistently</h3>
      <p>Regular follow-up with potential patients keeps Invisalign top-of-mind and demonstrates your commitment to their care.</p>
    `,
    image: "/community/community-2",
    date: "March 12, 2024",
    author: "Dr. Mike Wollock",
    slug: "5-key-strategies-invisalign-case-acceptance"
  },
  {
    id: 3,
    title: "Building Your Dream Team: Staff Training for Invisalign Success",
    excerpt: "How to train and empower your team to handle more Invisalign cases efficiently...",
    content: `
      <p>Your team is the backbone of your Invisalign success. A well-trained, motivated staff can handle routine tasks, answer patient questions, and create a positive experience that encourages case acceptance.</p>
      
      <h3>Essential Training Areas</h3>
      <p>Focus on these key areas when training your team:</p>
      <ul>
        <li>Invisalign treatment basics and terminology</li>
        <li>Patient communication and education</li>
        <li>Appointment scheduling and management</li>
        <li>Treatment monitoring and progress tracking</li>
      </ul>
      
      <h3>Creating a Learning Culture</h3>
      <p>Encourage continuous learning by providing regular training opportunities, recognizing achievements, and creating an environment where questions are welcome.</p>
    `,
    image: "/community/community-3.jpeg",
    date: "March 10, 2024",
    author: "Dr. Emily Chen",
    slug: "building-dream-team-staff-training"
  },
  {
    id: 4,
    title: "Marketing Your Invisalign Practice: Digital Strategies That Work",
    excerpt: "Effective digital marketing strategies to attract more Invisalign patients to your practice...",
    content: `
      <p>Digital marketing has become essential for attracting Invisalign patients in today's competitive landscape. Here are proven strategies that DCM providers use to grow their practices:</p>
      
      <h3>Social Media Marketing</h3>
      <p>Platforms like Instagram and Facebook are perfect for showcasing before-and-after results, sharing patient testimonials, and educating potential patients about Invisalign benefits.</p>
      
      <h3>Content Marketing</h3>
      <p>Create valuable content that addresses common patient concerns and questions. Blog posts, videos, and infographics can establish your expertise and attract organic traffic.</p>
      
      <h3>Search Engine Optimization</h3>
      <p>Optimize your website and content for relevant keywords to improve your visibility in local search results.</p>
    `,
    image: "/community/community-4.jpeg",
    date: "March 8, 2024",
    author: "Dr. James Rodriguez",
    slug: "marketing-invisalign-practice-digital-strategies"
  },
  {
    id: 5,
    title: "Case Study: Complex Invisalign Treatment Planning",
    excerpt: "A detailed look at how to approach complex Invisalign cases with confidence...",
    content: `
      <p>Complex Invisalign cases require careful planning and systematic execution. This case study demonstrates how to approach challenging treatments with confidence.</p>
      
      <h3>Case Overview</h3>
      <p>Patient presented with severe crowding, deep bite, and midline discrepancy. Traditional treatment would have required multiple phases and extended treatment time.</p>
      
      <h3>Treatment Strategy</h3>
      <p>Using DCM principles, we developed a comprehensive treatment plan that addressed all issues systematically while maintaining patient comfort and compliance.</p>
      
      <h3>Results</h3>
      <p>Treatment completed in 18 months with excellent results and high patient satisfaction. The systematic approach ensured predictable outcomes.</p>
    `,
    image: "/community/community-5.jpeg",
    date: "March 5, 2024",
    author: "Dr. Lisa Thompson",
    slug: "case-study-complex-invisalign-treatment"
  },
  {
    id: 6,
    title: "Time Management: How to See More Patients in Less Time",
    excerpt: "Efficient scheduling and time management techniques for busy Invisalign providers...",
    content: `
      <p>Efficient time management is crucial for Invisalign providers who want to maximize their impact and profitability. Here are proven techniques used by successful DCM practitioners.</p>
      
      <h3>Optimize Your Schedule</h3>
      <p>Group similar appointments together, use template scheduling, and allocate appropriate time for different types of visits.</p>
      
      <h3>Delegate Effectively</h3>
      <p>Train your team to handle routine tasks, allowing you to focus on complex treatment planning and patient care.</p>
      
      <h3>Use Technology Wisely</h3>
      <p>Implement systems that streamline your workflow and reduce administrative overhead.</p>
    `,
    image: "/community/community-6.jpeg",
    date: "March 3, 2024",
    author: "Dr. Robert Kim",
    slug: "time-management-more-patients-less-time"
  },
  {
    id: 7,
    title: "Patient Communication: Building Trust and Confidence",
    excerpt: "Communication strategies that help patients feel confident about their Invisalign treatment...",
    content: `
      <p>Effective communication is the foundation of patient trust and successful Invisalign treatment. Here are strategies that help patients feel confident and committed to their care.</p>
      
      <h3>Active Listening</h3>
      <p>Take time to understand patient concerns and goals. This builds trust and helps you tailor your recommendations.</p>
      
      <h3>Clear Explanations</h3>
      <p>Use simple language and visual aids to explain treatment options and expected outcomes.</p>
      
      <h3>Ongoing Support</h3>
      <p>Provide consistent communication throughout treatment to maintain patient engagement and confidence.</p>
    `,
    image: "/community/community-7.jpeg",
    date: "March 1, 2024",
    author: "Dr. Amanda Wilson",
    slug: "patient-communication-building-trust"
  },
  {
    id: 8,
    title: "Financial Planning: Maximizing Profitability in Your Practice",
    excerpt: "Financial strategies to maximize profitability while providing excellent patient care...",
    content: `
      <p>Financial success in Invisalign practice requires careful planning and strategic decision-making. Here are key strategies for maximizing profitability while maintaining high-quality care.</p>
      
      <h3>Pricing Strategy</h3>
      <p>Develop a pricing structure that reflects the value you provide while remaining competitive in your market.</p>
      
      <h3>Cost Management</h3>
      <p>Monitor and optimize your operational costs without compromising patient care quality.</p>
      
      <h3>Revenue Diversification</h3>
      <p>Consider additional services and products that complement your Invisalign practice and increase overall profitability.</p>
    `,
    image: "/community/community-8.jpeg",
    date: "February 28, 2024",
    author: "Dr. David Park",
    slug: "financial-planning-maximizing-profitability"
  },
  {
    id: 9,
    title: "Technology Integration: Tools That Enhance Patient Experience",
    excerpt: "Modern technology tools that can enhance your patients' Invisalign experience...",
    content: `
      <p>Technology integration can significantly enhance the patient experience and improve treatment outcomes. Here are the most effective tools for modern Invisalign practices.</p>
      
      <h3>Digital Scanning</h3>
      <p>iTero and similar scanning technologies provide comfortable, accurate impressions and enhance patient comfort.</p>
      
      <h3>Treatment Visualization</h3>
      <p>ClinCheck presentations help patients understand their treatment journey and expected results.</p>
      
      <h3>Patient Communication Platforms</h3>
      <p>Use technology to maintain regular communication and provide ongoing support throughout treatment.</p>
    `,
    image: "/community/community-9.jpeg",
    date: "February 25, 2024",
    author: "Dr. Jennifer Lee",
    slug: "technology-integration-enhance-patient-experience"
  }
];

interface CommunityPostPageProps {
  params: {
    slug: string;
  };
}

export default function CommunityPostPage({ params }: CommunityPostPageProps) {
  const post = communityPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#004681] py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              <span className="text-white font-sansation-regular">Post</span>
            </nav>
          </div>

          {/* Post Title */}
          <h1 
            className="text-white font-sansation-regular text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
            style={{ fontSize: 'clamp(24px, 5vw, 36px)' }}
          >
            {post.title}
          </h1>

          {/* Post Meta */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-white text-sm sm:text-base">
            <span className="font-sansation-regular">By {post.author}</span>
            <span className="font-sansation-regular">{post.date}</span>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="mb-8 sm:mb-12">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Post Content */}
          <article className="prose prose-lg max-w-none">
            <div 
              className="font-sansation-regular leading-relaxed"
              style={{ fontSize: '17px', color: '#6b6b6b' }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Back to Community Link */}
          <div className="mt-12 sm:mt-16 text-center">
            <Link 
              href="/community"
              className="inline-flex items-center text-[#004681] hover:text-[#024093] font-semibold transition-colors duration-200 font-sansation-regular"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Community
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
