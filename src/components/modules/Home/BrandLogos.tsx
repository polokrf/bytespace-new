import React from 'react';

// Placeholder SVG icons corresponding to the 5 Logoipsum logos in the Figma reference

function WaveCircleLogo() {
  return (
    <div className="flex items-center gap-2.5 text-[#5C6470] transition-colors hover:text-[#2D3139]">
      <svg className="h-8 w-8 fill-current" viewBox="0 0 36 36">
        <path d="M18 0C8.058 0 0 8.058 0 18s8.058 18 18 18 18-8.058 18-18S27.942 0 18 0zm0 32C10.268 32 4 25.732 4 18S10.268 4 18 4s14 6.268 14 14-6.268 14-14 14z" />
        <path
          d="M9 16c2.5-3 5.5-3 9 0s6.5 3 9 0"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M9 22c2.5-3 5.5-3 9 0s6.5 3 9 0"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="text-xl font-bold tracking-tight text-[#5C6470]">
        Logoipsum
      </span>
    </div>
  );
}

function SunBurstLogo() {
  return (
    <div className="flex items-center gap-2.5 text-[#5C6470] transition-colors hover:text-[#2D3139]">
      <svg
        className="h-8 w-8 stroke-current stroke-[2.5] fill-none"
        viewBox="0 0 36 36"
      >
        <circle cx="18" cy="18" r="8" />
        <path
          d="M18 2v5M18 29v5M2 18h5M29 18h5M6.69 6.69l3.53 3.53M25.78 25.78l3.53 3.53M6.69 29.31l3.53-3.53M25.78 10.22l3.53-3.53"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-xl font-bold tracking-tight text-[#5C6470]">
        Logoipsum
      </span>
    </div>
  );
}

function LightningCircleLogo() {
  return (
    <div className="flex items-center gap-2.5 text-[#5C6470] transition-colors hover:text-[#2D3139]">
      <svg className="h-8 w-8 fill-current" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="18" />
        <path d="M20 7l-8 12h6l-2 10 10-14h-6l2-8z" fill="#F5F5F6" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-[#5C6470]">
        Logoipsum
      </span>
    </div>
  );
}

function FourDotsLogo() {
  return (
    <div className="flex items-center gap-2.5 text-[#5C6470] transition-colors hover:text-[#2D3139]">
      <svg className="h-8 w-8 fill-current" viewBox="0 0 36 36">
        <circle cx="12" cy="12" r="5" />
        <circle cx="24" cy="12" r="5" />
        <circle cx="12" cy="24" r="5" />
        <circle cx="24" cy="24" r="5" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-[#5C6470]">
        Logoipsum
      </span>
    </div>
  );
}

function SphereGlobeLogo() {
  return (
    <div className="flex items-center gap-2.5 text-[#5C6470] transition-colors hover:text-[#2D3139]">
      <svg className="h-8 w-8 fill-current" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="18" fillOpacity="0.25" />
        <circle cx="18" cy="18" r="13" fillOpacity="0.4" />
        <path d="M18 5a13 13 0 1 0 13 13A13.015 13.015 0 0 0 18 5zm0 22a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9z" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-[#5C6470]">
        Logoipsum
      </span>
    </div>
  );
}

export function BrandLogos() {
  return (
    <section className="relative w-full bg-[#F5F5F6] border-y border-gray-200 py-12 md:h-[202px] md:py-0">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-16">
        <div className="flex w-full flex-wrap items-center justify-center gap-8 md:flex-nowrap md:justify-between md:gap-4">
          <WaveCircleLogo />
          <SunBurstLogo />
          <LightningCircleLogo />
          <FourDotsLogo />
          <SphereGlobeLogo />
        </div>
      </div>
    </section>
  );
}
