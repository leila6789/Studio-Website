import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b header-angled">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <nav className="flex items-center justify-between w-full">
          {/* Left Nav */}
          <div className="hidden md:flex items-center gap-20">
            <a href="#" className="orbitron-nav text-teal-400 hover:text-teal-300 transition-colors glow-active">Home</a>
            <a href="#" className="orbitron-nav text-gray-300 hover:text-white transition-colors">Games</a>
            <a href="#" className="orbitron-nav text-gray-300 hover:text-white transition-colors">About</a>
          </div>

          {/* Logo Centered */}
          <div className="flex items-center space-x-2">
            <img
              src="/src/assets/sog-header-logo.svg"
              alt="Spark of Genius Studios Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Right Nav */}
          <div className="hidden md:flex items-center gap-20">
            <a href="#" className="orbitron-nav text-gray-300 hover:text-white transition-colors">News</a>
            <a href="#" className="orbitron-nav text-gray-300 hover:text-white transition-colors">Careers</a>
            <a href="#" className="orbitron-nav text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
