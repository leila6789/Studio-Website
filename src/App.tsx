import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AdventureSection } from "./components/AdventureSection";
import { NewsletterSection } from "./components/NewsletterSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <HeroSection />
      <AdventureSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
