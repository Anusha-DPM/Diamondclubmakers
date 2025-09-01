"use client";

import Header from "@/components/Header";
import CommunityHeroSection from "@/components/CommunityHeroSection";
import CommunityContentSection from "@/components/CommunityContentSection";
import Footer from "@/components/Footer";

export default function Community() {
  return (
    <main className="min-h-screen">
      <Header />
      <CommunityHeroSection />
      <CommunityContentSection />
      <Footer />
    </main>
  );
}
