import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageSlider from "@/components/ImageSlider";
import ContentSection from "@/components/ContentSection";
import CaseStudies from "@/components/CaseStudies";
import WhatILearnedInDCM from "@/components/WhatILearnedInDCM";
import VideoSection from "@/components/VideoSection";
import LearnHowSection from "@/components/LearnHowSection";
import DiamondClubMakerSection from "@/components/DiamondClubMakerSection";
import DCMDiamondsSection from "@/components/DCMDiamondsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ImageSlider />
      <ContentSection />
      <CaseStudies />
      <WhatILearnedInDCM />
      <VideoSection />
      <LearnHowSection />
      <DCMDiamondsSection />
      <DiamondClubMakerSection />
    </main>
  );
}
