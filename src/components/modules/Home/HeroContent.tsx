import Image from 'next/image';
import { Search, MousePointer2 } from 'lucide-react';

export function HeroContent() {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-8 pb-12 text-center md:pt-12">
      {/* Yellow Border Box around Heading */}
      <div className="mb-4 rounded-xl  p-4 md:p-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
          Get Access to Hundreds <br className="hidden sm:block" />
          Courses Available
        </h1>
      </div>

      {/* Description */}
      <p className="max-w-2xl text-sm font-normal text-white/90 md:text-base">
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses
      </p>

      {/* Search Input Bar */}
      <div className="mt-8 flex w-full max-w-xl items-center rounded-full bg-white p-1.5 shadow-lg">
        <div className="flex flex-1 items-center gap-2 pl-4 text-gray-400">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Course, topic, creator"
            className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
          />
        </div>
        <button
          type="button"
          className="rounded-full bg-[#CCFF00] px-6 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-95"
        >
          Search
        </button>
      </div>

      {/* Hero  Area */}
      <div className="relative mt-12 flex w-full justify-center">
       
        <div className="absolute bottom-0 h-[280px] w-[280px] rounded-full bg-[#CCFF00] sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px]" />

        
        <div className="relative z-10 w-full max-w-lg">
          <Image
            src="https://i.ibb.co.com/ch99Wg4M/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
            alt="Student with headphones holding laptop"
            width={600}
            height={600}
            className="mx-auto h-auto w-full object-contain"
            priority
          />
        </div>

       
        <div className="absolute left-4 top-12 z-20 hidden rounded-xl bg-white p-3.5 shadow-xl sm:block md:left-12 lg:left-24">
          <h4 className="text-xs font-bold text-gray-900">UI/UX Design</h4>
          <p className="mt-0.5 text-[10px] text-gray-500">
            200 Courses • 1000+ Students
          </p>
        </div>

      
        <div className="absolute right-4 top-20 z-20 hidden rounded-xl bg-white p-4 shadow-xl sm:block md:right-12 lg:right-24">
          <p className="text-[10px] font-medium text-gray-500">
            Learning Progress
          </p>
          <p className="mt-1 text-2xl font-black text-gray-900">55%</p>
          <div className="mt-2 h-1.5 w-24 overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-[55%] rounded-full bg-[#CCFF00]" />
          </div>
        </div>

        {/* Happy Students */}
        <div className="absolute left-8 bottom-8 z-20 hidden rounded-xl bg-white p-3 shadow-xl sm:block md:left-16 lg:left-32">
          <p className="text-xs font-bold text-gray-900">Happy Students</p>
          <div className="mt-1 flex items-center gap-1 text-[10px] text-gray-600">
            <span className="font-bold">4.6</span>
            <span className="text-yellow-400">★</span>
            <span>(240)</span>
          </div>
          <div className="mt-2 flex items-center -space-x-2">
            <div className="h-6 w-6 rounded-full bg-gray-300 border-2 border-white" />
            <div className="h-6 w-6 rounded-full bg-gray-400 border-2 border-white" />
            <div className="h-6 w-6 rounded-full bg-gray-500 border-2 border-white" />
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#CCFF00] text-[9px] font-bold text-black border-2 border-white">
              2K+
            </div>
          </div>
        </div>

        

       
        {/* Decorative Left Green Spring/Zigzag Shape */}
        <div className="absolute left-0 top-1/4 hidden lg:block">
          <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
            <path
              d="M10 20 Q 70 30 10 50 Q 70 70 10 90 Q 70 110 10 130"
              stroke="#CCFF00"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </svg>
        </div>

       

        {/* Bottom Right Decorative White Zigzag */}
        <div className="absolute right-12 bottom-12 hidden lg:block">
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
            <path
              d="M10 10 Q 50 20 10 40 Q 50 50 10 70"
              stroke="#FFFFFF"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
