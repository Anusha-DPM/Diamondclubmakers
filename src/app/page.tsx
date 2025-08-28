import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageSlider from "@/components/ImageSlider";
import ContentSection from "@/components/ContentSection";
import CaseStudies from "@/components/CaseStudies";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ImageSlider />
      <ContentSection />
      <CaseStudies />
    </div>
  );
}
