import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
    </div>
  );
}
