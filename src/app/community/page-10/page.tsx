"use client";

import Header from "@/components/Header";
import CommunityHeroSection from "@/components/CommunityHeroSection";
import CommunityContentSection10 from "@/components/CommunityContentSection10";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

export default function CommunityPage10() {
  return (
    <main className="min-h-screen">
      <Header />
      <CommunityHeroSection />
      <CommunityContentSection10 />
      <Pagination currentPage={10} totalPages={12} basePath="/community" />
      <Footer />
    </main>
  );
}
