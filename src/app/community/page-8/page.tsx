"use client";

import Header from "@/components/Header";
import CommunityHeroSection from "@/components/CommunityHeroSection";
import CommunityContentSection8 from "@/components/CommunityContentSection8";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

export default function CommunityPage8() {
  return (
    <main className="min-h-screen">
      <Header />
      <CommunityHeroSection />
      <CommunityContentSection8 />
      <Pagination currentPage={8} totalPages={12} basePath="/community" />
      <Footer />
    </main>
  );
}
