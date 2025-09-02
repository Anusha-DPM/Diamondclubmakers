"use client";

import Header from "@/components/Header";
import CommunityHeroSection from "@/components/CommunityHeroSection";
import CommunityContentSection6 from "@/components/CommunityContentSection6";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

export default function CommunityPage6() {
  return (
    <main className="min-h-screen">
      <Header />
      <CommunityHeroSection />
      <CommunityContentSection6 />
      <Pagination currentPage={6} totalPages={12} basePath="/community" />
      <Footer />
    </main>
  );
}
