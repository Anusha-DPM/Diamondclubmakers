"use client";

import Header from "@/components/Header";
import CommunityHeroSection from "@/components/CommunityHeroSection";
import CommunityContentSection11 from "@/components/CommunityContentSection11";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

export default function CommunityPage11() {
  return (
    <main className="min-h-screen">
      <Header />
      <CommunityHeroSection />
      <CommunityContentSection11 />
      <Pagination currentPage={11} totalPages={12} basePath="/community" />
      <Footer />
    </main>
  );
}
