import { Button } from "./ui/button";
import GlitchButton from "./ui/glitch-button";

export function AdventureSection() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: "#202020" }}
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none z-0">
        <img
          src="/src/assets/SoGLogo-2_optimized.png"
          alt="SoG Logo Stamp"
          className="stamp-fade w-[120px] h-auto ml-[-60px] opacity-[0.012]"
        />
      </div>


      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="exo-p text-gray-400 text-2xl mb-2 max-w-md">
              Our Studio
            </p>

            <h2 className="aspekta-h1 text-4xl md:text-5xl text-white mb-6 leading-tight">
              Where Imagination
              Becomes Reality
            </h2>

            <p className="exo-p text-gray-400 text-lg mb-8 max-w-md">
              We are creators, dreamers, and storytellers who believe games are more than just entertainment.
They’re a bridge between imagination and reality and we are here to build that bridge, one story at a time.
            </p>

            <GlitchButton variant="primary">Our Team</GlitchButton>
          </div>

          {/* Right Content */}
<div className="exo-p space-y-6">
  {/* Profile 1 */}
  <div className="bg-[#2a2a2a] rounded-lg p-6 border border-gray-700 flex justify-between items-start">
    {/* Left Side: Profile */}
    <div className="flex items-start">
      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
        <span className="text-white font-semibold">X</span>
      </div>
      <div>
        <h4 className="text-white font-semibold">Daniel Ogden</h4>
        <p className="text-gray-400">Owner</p>
        <p className="text-sm text-teal-400 mt-2 italic">*Add social links*</p>
      </div>
    </div>

    {/* Right Side: Short Bio */}
    <div className="text-right text-gray-400 text-sm leading-relaxed max-w-[250px]">
      <p>Bachelor’s in Computer Science</p>
      <p>10+ years in Game Production</p>
      <p>Founder of Spark of Genius Studios</p>
    </div>
  </div>

  {/* Profile 2 */}
  <div className="bg-[#2a2a2a] rounded-lg p-6 border border-gray-700 flex justify-between items-start">
    {/* Left Side: Profile */}
    <div className="flex items-start">
      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
        <span className="text-white font-semibold">X</span>
      </div>
      <div>
        <h4 className="text-white font-semibold">Gerald G.</h4>
        <p className="text-gray-400">Design Director</p>
        <p className="text-sm text-teal-400 mt-2 italic">*Add social links*</p>
      </div>
    </div>

    {/* Right Side: Short Bio */}
    <div className="text-right text-gray-400 text-sm leading-relaxed max-w-[250px]">
      <p>Bachelor’s in Game Design</p>
      <p>8+ years in Environment Art</p>
      <p>Focused on World building & Player<br />Immersion</p>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  );
}
