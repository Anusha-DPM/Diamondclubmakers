"use client";

import Header from "@/components/Header";
import CommunityHeroSection from "@/components/CommunityHeroSection";
import CommunityContentSection2 from "@/components/CommunityContentSection2";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

export default function CommunityPage2() {
  return (
    <main className="min-h-screen">
      <Header />
      <CommunityHeroSection />
      <CommunityContentSection2 />
      <Pagination currentPage={2} totalPages={12} basePath="/community" />
      <Footer />
    </main>
  );
}
