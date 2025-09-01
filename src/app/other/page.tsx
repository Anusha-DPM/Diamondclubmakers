"use client";

import Header from "@/components/Header";
import OtherHeroSection from "@/components/OtherHeroSection";
import SimpleDCMClassesSection from "@/components/SimpleDCMClassesSection";
import Footer from "@/components/Footer";

export default function Other() {
  return (
    <main className="min-h-screen">
      <Header />
      <OtherHeroSection />
      <SimpleDCMClassesSection />
      <Footer />
    </main>
  );
}
