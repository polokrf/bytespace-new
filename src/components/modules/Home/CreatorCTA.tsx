import React from 'react';

export const CreatorCTA: React.FC = () => {
  return (
    <section className="relative w-full bg-[#003BE2] overflow-hidden py-16 md:py-20 lg:py-24 min-h-[488px] flex items-center justify-center">
      {/* Background Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Top-Left Lime Wavy Spring */}
        <div className="absolute -top-6 -left-6 w-36 sm:w-48 md:w-60 opacity-90 transition-transform duration-500 hover:scale-105 hidden md:block">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto drop-shadow-md"
          >
            <path
              d="M20 40 C60 10, 120 70, 70 100 C20 130, 110 180, 150 140"
              stroke="#D4FF00"
              strokeWidth="28"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Top-Left White Squiggle */}
        <div className="absolute top-6 left-[18%] sm:left-[22%] w-20 sm:w-28 opacity-90 hidden sm:block">
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto filter drop-shadow-lg"
          >
            <path
              d="M15 35 Q45 15 65 35 T105 35"
              stroke="#FFFFFF"
              strokeWidth="18"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M25 70 Q55 50 75 70 T105 70"
              stroke="#FFFFFF"
              strokeWidth="18"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Bottom-Left White Cone Shape */}
        <div className="absolute -bottom-4 left-0 w-20 sm:w-28 md:w-36 opacity-90">
          <svg
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path d="M50 0 L100 120 L0 120 Z" fill="url(#whiteConeGrad)" />
            <defs>
              <linearGradient
                id="whiteConeGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#D9E2EC" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Bottom-Left Lime Ring/Torus */}
        <div className="absolute -bottom-12 left-[8%] sm:left-[12%] w-36 sm:w-48 md:w-60 opacity-90">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M100 30 A70 70 0 1 1 30 100"
              stroke="#D4FF00"
              strokeWidth="32"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Top-Right Lime 3D Pyramid */}
        <div className="absolute top-4  hidden md:block md:right-[16%] w-24 sm:w-32 md:w-40 opacity-95">
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto drop-shadow-xl"
          >
            {/* Front Face */}
            <polygon points="60,10 10,95 85,110" fill="#E2FF26" />
            {/* Right Face / Shadow */}
            <polygon points="60,10 85,110 110,80" fill="#B3E600" />
            {/* Bottom Accent */}
            <polygon
              points="10,95 85,110 110,80"
              fill="#99CC00"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Right Side White Cylinder */}
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-32 sm:w-44 md:w-56 opacity-90 rotate-[15deg] hidden md:block">
          <svg
            viewBox="0 0 140 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M10 40 C10 20 130 20 130 40 L130 180 C130 200 10 200 10 180 Z"
              fill="url(#whiteCylinderGrad)"
            />
            <ellipse cx="70" cy="40" rx="60" ry="20" fill="#FFFFFF" />
            <defs>
              <linearGradient
                id="whiteCylinderGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="70%" stopColor="#F0F4F8" />
                <stop offset="100%" stopColor="#D9E2EC" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Bottom-Right Lime Coiled Zigzag */}
        <div className="absolute -bottom-8 right-[5%] sm:right-[10%] w-32 sm:w-44 md:w-52 opacity-90">
          <svg
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M30 30 Q130 20 130 60 T30 90 T130 130"
              stroke="#D4FF00"
              strokeWidth="24"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[964px] mx-auto px-6 sm:px-8 text-center flex flex-col items-center gap-[40px]">
        {/* Title / Heading */}
        <h2 className="text-white text-2xl sm:text-4xl md:text-[44px] font-bold leading-tight sm:leading-snug tracking-tight max-w-[900px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        {/* Description Paragraph */}
        <p className="text-white/90 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-[840px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* Action Button */}
        <button
          type="button"
          className="bg-[#D4FF00] hover:bg-[#bde600] text-[#0A0A0A] font-semibold text-sm sm:text-base px-7 py-3 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#D4FF00]/40"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
};

export default CreatorCTA;
