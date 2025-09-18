import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="w-full max-w-2xl">
          <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
            Every Legend<br />
            hides a Curse
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-md">
            Discover a world where gold glitters, 
            but danger lurks beneath every corner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-teal-400 hover:bg-teal-500 text-black px-8 py-3 rounded-lg text-lg">
              Start Your Journey
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg text-lg">
              Join Our Discord
            </Button>
          </div>
        </div>

        
      </div>

     
    </section>
  );
}