"use client";

import Header from "@/components/Header";
import CommunityHeroSection from "@/components/CommunityHeroSection";
import CommunityContentSection5 from "@/components/CommunityContentSection5";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

export default function CommunityPage5() {
  return (
    <main className="min-h-screen">
      <Header />
      <CommunityHeroSection />
      <CommunityContentSection5 />
      <Pagination currentPage={5} totalPages={12} basePath="/community" />
      <Footer />
    </main>
  );
}
