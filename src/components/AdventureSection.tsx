import { Button } from "./ui/button";

export function AdventureSection() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
              Our World, Your Next Adventure
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Made by dreamers, for players who believe every adventure should feel personal.
            </p>

            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg">
              Our Team
            </Button>
          </div>

         
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">XX</span>
                </div>
                <div>
                  <h4 className="text-white">XX</h4>
                  <p className="text-gray-400">Creative Director</p>
                </div>
              </div>
              <p className="text-gray-300">
                xxxxxxxxxx
              </p>
            </div>

          
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">XX</span>
                </div>
                <div>
                  <h4 className="text-white">X X</h4>
                  <p className="text-gray-400">Lead Game Designer</p>
                </div>
              </div>
              <p className="text-gray-300">
              lead  game designer               </p>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}