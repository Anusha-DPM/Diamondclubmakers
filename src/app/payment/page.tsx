import Header from "@/components/Header";
import PaymentHeroSection from "@/components/PaymentHeroSection";
import ImageSlider from "@/components/ImageSlider";
import PaymentInfoSection from "@/components/PaymentInfoSection";
import GHLPaymentForm from "@/components/GHLPaymentForm";
import DCMClassesSection from "@/components/DCMClassesSection";
import Footer from "@/components/Footer";

export default function Payment() {
  return (
    <main>
      <Header />
      <PaymentHeroSection />
      <ImageSlider />
      <PaymentInfoSection />
      <GHLPaymentForm />
      <DCMClassesSection />
      <Footer />
    </main>
  );
}
