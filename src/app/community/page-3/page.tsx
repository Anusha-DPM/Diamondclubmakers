"use client";

import Header from "@/components/Header";
import CommunityHeroSection from "@/components/CommunityHeroSection";
import CommunityContentSection3 from "@/components/CommunityContentSection3";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

export default function CommunityPage3() {
  return (
    <main className="min-h-screen">
      <Header />
      <CommunityHeroSection />
      <CommunityContentSection3 />
      <Pagination currentPage={3} totalPages={12} basePath="/community" />
      <Footer />
    </main>
  );
}
