"use client";

import Header from "@/components/Header";
import CommunityHeroSection from "@/components/CommunityHeroSection";
import CommunityContentSection12 from "@/components/CommunityContentSection12";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

export default function CommunityPage12() {
  return (
    <main className="min-h-screen">
      <Header />
      <CommunityHeroSection />
      <CommunityContentSection12 />
      <Pagination currentPage={12} totalPages={12} basePath="/community" />
      <Footer />
    </main>
  );
}
