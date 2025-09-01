import Header from "@/components/Header";
import SubmitHeroSection from "@/components/SubmitHeroSection";
import SubmitButton from "@/components/SubmitButton";
import Footer from "@/components/Footer";

export default function Submit() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <SubmitHeroSection />
      <div className="flex-1 flex items-center justify-center bg-white">
        <SubmitButton />
      </div>
      <Footer />
    </main>
  );
}
