export function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-black rounded transform rotate-45"></div>
              </div>
              <span className="text-white text-xl">Spark of Genius Studios</span>
            </div>
            
            <div className="text-gray-400 space-y-2">
              <p>CONTACT US</p>
              <p>+1 (XXX) XXX - XXXX</p>
              <p>email@example.com</p>
              <p className="mt-4">
                XXXX XXX XX Street,<br />
                City, State XXXXX
              </p>
              <p className="mt-4">
                Email:<br />
                hello@example.com
              </p>
            </div>
          </div>

          {/* Navbar Links */}
          <div>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Games</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">News</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">About</a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Press Kit</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 - Spark of Genius Studios
          </p>
        </div>
      </div>
    </footer>
  );
}