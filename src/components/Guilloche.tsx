import React from "react";

interface GuillocheProps {
  className?: string;
  opacity?: number;
  type?: "wave" | "complex";
}

export const Guilloche = ({ className = "", opacity = 0.1, type = "wave" }: GuillocheProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ opacity }}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Base Wave Structure - Banknote Style */}
        <path
          d="M-100 300 C 200 100, 400 500, 700 300 S 1200 100, 1600 300"
          stroke="currentColor"
          strokeWidth="0.5"
          className="opacity-80"
        />
        <path
          d="M-100 310 C 200 110, 400 510, 700 310 S 1200 110, 1600 310"
          stroke="currentColor"
          strokeWidth="0.5"
          className="opacity-70"
        />
        <path
          d="M-100 320 C 200 120, 400 520, 700 320 S 1200 120, 1600 320"
          stroke="currentColor"
          strokeWidth="0.5"
          className="opacity-60"
        />
        
        {/* Intersecting Reverse Waves for Mesh Effect */}
        <path
          d="M-100 300 C 200 500, 400 100, 700 300 S 1200 500, 1600 300"
          stroke="currentColor"
          strokeWidth="0.5"
          className="opacity-50"
        />
         <path
          d="M-100 310 C 200 510, 400 110, 700 310 S 1200 510, 1600 310"
          stroke="currentColor"
          strokeWidth="0.5"
          className="opacity-40"
        />

        {/* High Frequency Oscillations for Texture */}
        <path
          d="M0 100 Q 20 600 40 100 T 80 100 T 120 100 T 160 100 T 200 100 T 240 100" // Simplified pattern for brevity, in reality would be a loop
          stroke="none" 
        />
        
        {/* Generative-style Guilloche Paths */}
        {Array.from({ length: 20 }).map((_, i) => (
           <path
            key={`g1-${i}`}
            d={`M-100 ${200 + i * 15} C 400 ${100 + i * 5}, 800 ${500 - i * 5}, 1600 ${200 + i * 15}`}
            stroke="currentColor"
            strokeWidth="0.3"
            className="opacity-40"
           />
        ))}

         {Array.from({ length: 20 }).map((_, i) => (
           <path
            key={`g2-${i}`}
            d={`M-100 ${400 - i * 15} C 400 ${500 - i * 5}, 800 ${100 + i * 5}, 1600 ${400 - i * 15}`}
            stroke="currentColor"
            strokeWidth="0.3"
            className="opacity-40"
           />
        ))}
      </svg>
    </div>
  );
};

export default Guilloche;
