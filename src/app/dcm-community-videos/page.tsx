import Header from "@/components/Header";
import DCMCommunityVideosHeroSection from "@/components/DCMCommunityVideosHeroSection";
import DCMTestimonialsSection from "@/components/DCMTestimonialsSection";
import Footer from "@/components/Footer";

export default function DCMCommunityVideos() {
  return (
    <main className="min-h-screen">
      <Header />
      <DCMCommunityVideosHeroSection />
      <DCMTestimonialsSection />
      <Footer />
    </main>
  );
}
