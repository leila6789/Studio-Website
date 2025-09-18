import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-400 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-black rounded transform rotate-45"></div>
            </div>
            <span className="text-white font-semibold text-lg">SPARK OF GENIUS STUDIOS</span>
          </div>

          {/* Navigation Links - Full Width */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center justify-between w-full max-w-2xl">
              <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Games</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">News</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </nav>
      </div>
    </header>
  );
}