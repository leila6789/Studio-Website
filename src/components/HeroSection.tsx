import { Button } from "./ui/button";
import { Header } from "./Header";

export function HeroSection() {
  return (
    <section className="relative z-0 min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/hero-bg-img.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <Header />

      <div className="relative z-10 min-h-screen pt-[120px]">
        <div className="absolute left-0 w-1/2 bg-white/80 backdrop-blur-sm border-r border-white/20 rounded-r-lg shadow-2xl" style={{ top: '250px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
          <div style={{ marginLeft: '100px', paddingRight: '81px', paddingTop: '32px', paddingBottom: '64px' }}>
            <h1 className="russo-h1 text-white mb-6 font-normal" style={{ lineHeight: '150%', letterSpacing: '0%', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
              Every Legend<br />hides a Curse
            </h1>

            <p className="exo-p text-gray-300 mb-8 max-w-md font-normal" style={{ lineHeight: '150%', letterSpacing: '0%' }}>
              Discover a world where gold glitters, but danger lurks beneath every corner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="exo-p bg-teal-400 hover:bg-teal-500 text-black px-8 py-3 rounded-lg text-lg">
                Start Your Journey
              </Button>
              <Button
                variant="outline"
                className="exo-p border-white text-black hover:text-black px-8 py-3 rounded-lg text-lg"
              >
                Join Our Discord
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}