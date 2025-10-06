import { useEffect, useRef, useState } from "react";
import GlitchButton from "./ui/glitch-button";
import { Header } from "./Header";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const range = 400; // scroll distance for full dissolve
      const offset = Math.min(Math.max(-rect.top / range, 0), 1);
      setProgress(offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative z-0 min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/src/assets/hero-bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <Header />

      {/* Hero Content */}
      <div
        ref={heroRef}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 dissolve-group"
        style={{ "--progress": progress } as React.CSSProperties}
      >
        <h1
          className="aspekta-h1 text-white mb-6 font-normal"
          style={{
            lineHeight: "150%",
            letterSpacing: "0%",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          }}
        >
          Craft worlds that breathe<br />and stories that live
        </h1>

        <p
          className="exo-p text-gray-300 mb-8 max-w-xl font-normal"
          style={{ lineHeight: "150%", letterSpacing: "0%" }}
        >
          We craft immersive game experiences that challenge boundaries<br />
          and ignite imagination through bold storytelling and innovative design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <GlitchButton variant="primary">Start Your Journey</GlitchButton>
          <GlitchButton variant="secondary">Join Our Discord</GlitchButton>
        </div>
      </div>
    </section>
  );
}
