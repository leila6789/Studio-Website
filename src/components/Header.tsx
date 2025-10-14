import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Sticky scroll logic
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 100);
    window.addEventListener("scroll", handleScroll);

    // Run once in case page is already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    //transparent background for the header
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "is-sticky bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-6"
        }`}
      >
        <nav className="flex items-center justify-between w-full">
          {/* Left Nav */}
          <div
            className={`hidden md:flex items-center gap-20 transition-all duration-300 ${
              isScrolled ? "gap-8" : "gap-20"
            }`}
          >
            {["Home", "Games", "About"].map((label) => (
              <a
                key={label}
                href="#"
                onClick={() => setActiveLink(label)}
                className={`orbitron-nav transition-colors ${
                  activeLink === label
                    ? "text-teal-400 glow-active"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Logo Centered */}
          <div className="flex items-center space-x-2 transition-all duration-300">
            <img
              src="/src/assets/sog-header-logo.svg"
              alt="Spark of Genius Studios Logo"
              className={`h-16 w-auto transition-all duration-300 ${
                isScrolled ? "h-12" : "h-16"
              }`}
            />
          </div>

          {/* Right Nav */}
          <div
            className={`hidden md:flex items-center gap-20 transition-all duration-300 ${
              isScrolled ? "gap-8" : "gap-20"
            }`}
          >
            {["News", "Careers", "Contact"].map((label) => (
              <a
                key={label}
                href="#"
                onClick={() => setActiveLink(label)}
                className={`orbitron-nav transition-colors ${
                  activeLink === label
                    ? "text-teal-400 glow-active"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </nav>
      </div>
    </header>
  );
}
