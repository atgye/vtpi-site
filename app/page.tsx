import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-cyan-500/30">
      <Hero />
      <Features />
      <PricingSection />
      <Footer />
    </main>
  );
}
