"use client";

import Header from "@/components/Header";
import CommunityHeroSection from "@/components/CommunityHeroSection";
import CommunityContentSection4 from "@/components/CommunityContentSection4";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

export default function CommunityPage4() {
  return (
    <main className="min-h-screen">
      <Header />
      <CommunityHeroSection />
      <CommunityContentSection4 />
      <Pagination currentPage={4} totalPages={12} basePath="/community" />
      <Footer />
    </main>
  );
}
