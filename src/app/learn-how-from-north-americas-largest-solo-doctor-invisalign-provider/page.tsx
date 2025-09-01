import Header from "@/components/Header";
import LearnHowHeroSection from "@/components/LearnHowHeroSection";
import LearnHowContent from "@/components/LearnHowContent";
import Footer from "@/components/Footer";

export default function LearnHow() {
  return (
    <main className="min-h-screen">
      <Header />
      <LearnHowHeroSection />
      <LearnHowContent />
      <Footer />
    </main>
  );
}
