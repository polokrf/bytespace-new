import React from 'react';

interface Category {
  id: string;
  label: string;
  isFeatured?: boolean;
  isMore?: boolean;
}

const CATEGORIES: Category[] = [
  { id: 'featured', label: 'Featured', isFeatured: true },
  { id: 'marketing', label: 'Marketing' },
  { id: 'animation', label: 'Animation' },
  { id: 'social-media', label: 'Social Media' },
  { id: 'ui-ux', label: 'UI/UX Design' },
  { id: 'creative-marketing', label: 'Creative Marketing' },
  { id: 'digital-illustration', label: 'Digital Illustration' },
  { id: 'film-video', label: 'Film & Video' },
  { id: 'crafts', label: 'Crafts' },
  { id: 'freelance', label: 'Freelance & Entrepreneurship' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'photography', label: 'Photography' },
  { id: 'productivity', label: 'Productivity' },
  { id: 'web-dev', label: 'Web Development' },
  { id: 'data-science', label: 'Data Science' },
  { id: 'cooking', label: 'Cooking' },
  { id: 'more', label: '+ More', isMore: true },
];

export function PassionSection() {
  return (
    <section className="relative w-full bg-white py-16 px-4 md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Main Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Discover Your Passion, <br className="hidden sm:inline" />
          Build Your Skills
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base font-normal text-slate-500 leading-relaxed px-2">
          At ByteSpace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        {/* Category Pills Group */}
        <div className="relative mt-10 sm:mt-12 flex w-full flex-wrap items-center justify-center gap-2.5 sm:gap-3">
      

          {CATEGORIES.map(cat => {
            if (cat.isFeatured) {
              return (
                <button
                  key={cat.id}
                  type="button"
                  className="rounded-full bg-[#CCFF00] px-5 py-2 text-xs sm:text-sm font-semibold text-slate-900 transition-opacity hover:opacity-90 shadow-sm"
                >
                  {cat.label}
                </button>
              );
            }

            if (cat.isMore) {
              return (
                <button
                  key={cat.id}
                  type="button"
                  className="px-3 py-2 text-xs sm:text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#1d4ed8]"
                >
                  {cat.label}
                </button>
              );
            }

            return (
              <button
                key={cat.id}
                type="button"
                className="rounded-full bg-[#F3F4F6] px-5 py-2 text-xs sm:text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200"
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
