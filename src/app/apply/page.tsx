import Header from "@/components/Header";
import ApplyHeroSection from "@/components/ApplyHeroSection";
import ImageSlider from "@/components/ImageSlider";
import ApplyInfoSection from "@/components/ApplyInfoSection";
import GHLApplyForm from "@/components/GHLApplyForm";
import DCMClassesSection from "@/components/DCMClassesSection";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

export default function Apply() {
  return (
    <main className="min-h-screen">
      <Header />
      <ApplyHeroSection />
      <ImageSlider />
      <ApplyInfoSection />
      <GHLApplyForm />
      <ApplicationForm />
      <DCMClassesSection />
      <Footer />
    </main>
  );
}
