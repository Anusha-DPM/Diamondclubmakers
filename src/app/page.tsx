import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageSlider from "@/components/ImageSlider";
import ContentSection from "@/components/ContentSection";
import CaseStudies from "@/components/CaseStudies";
import WhatILearnedInDCM from "@/components/WhatILearnedInDCM";
import VideoSection from "@/components/VideoSection";
import LearnHowSection from "@/components/LearnHowSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ImageSlider />
      <ContentSection />
      <CaseStudies />
      <WhatILearnedInDCM />
      <VideoSection />
      <LearnHowSection />
    </div>
  );
}
