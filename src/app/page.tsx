import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickStart from "@/components/QuickStart";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import MythctlCLI from "@/components/MythctlCLI";
import Integrations from "@/components/Integrations";
import Platform from "@/components/Platform";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickStart />
        <Features />
        <Architecture />
        <MythctlCLI />
        <Integrations />
        <Platform />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
