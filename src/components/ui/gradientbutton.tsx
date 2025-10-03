import React from "react";

const GradientButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button
      type="button"
      className="relative rounded-full p-[2px] overflow-hidden group"
    >
      {/* Animated gradient border */}
      <span className="absolute inset-0 bg-gradient-to-tr from-[#7A69F9] via-[#F26378] to-[#F5833F] animate-gradient" />

      {/* Inner solid background */}
      <span className="relative block rounded-full bg-black px-6 py-3 text-white font-medium group-hover:scale-[1.02] transition-transform">
        {children}
      </span>
    </button>
  );
};

export default GradientButton;
