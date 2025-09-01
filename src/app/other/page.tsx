"use client";

import Header from "@/components/Header";
import OtherHeroSection from "@/components/OtherHeroSection";
import SimpleDCMClassesSection from "@/components/SimpleDCMClassesSection";
import OtherRecyclingSection from "@/components/OtherRecyclingSection";
import AttachedSection from "@/components/AttachedSection";
import StepByStepGuideSection from "@/components/StepByStepGuideSection";
import ImageCarouselSection from "@/components/ImageCarouselSection";
import DCMSponsorSection from "@/components/DCMSponsorSection";
import Footer from "@/components/Footer";

export default function Other() {
  return (
    <main className="min-h-screen">
      <Header />
      <OtherHeroSection />
      <OtherRecyclingSection />
      <AttachedSection />
      <StepByStepGuideSection />
      <ImageCarouselSection />
      <SimpleDCMClassesSection />
      <DCMSponsorSection />
      <Footer />
    </main>
  );
}
