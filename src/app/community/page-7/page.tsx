"use client";

import Header from "@/components/Header";
import CommunityHeroSection from "@/components/CommunityHeroSection";
import CommunityContentSection7 from "@/components/CommunityContentSection7";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

export default function CommunityPage7() {
  return (
    <main className="min-h-screen">
      <Header />
      <CommunityHeroSection />
      <CommunityContentSection7 />
      <Pagination currentPage={7} totalPages={12} basePath="/community" />
      <Footer />
    </main>
  );
}
