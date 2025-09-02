"use client";

import Header from "@/components/Header";
import CommunityHeroSection from "@/components/CommunityHeroSection";
import CommunityContentSection9 from "@/components/CommunityContentSection9";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

export default function CommunityPage9() {
  return (
    <main className="min-h-screen">
      <Header />
      <CommunityHeroSection />
      <CommunityContentSection9 />
      <Pagination currentPage={9} totalPages={12} basePath="/community" />
      <Footer />
    </main>
  );
}
