import { ContactMe } from "@/components/ContactMe";
import FeaturedInstruments from "@/components/FeaturedInstruments";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import MusicWebinars from "@/components/ui/MusicWebinars";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/95 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedInstruments />
      <Testimonials />
      <MusicWebinars />
      <ContactMe />

    </main>
  );
}
