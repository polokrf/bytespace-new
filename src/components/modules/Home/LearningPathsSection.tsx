import React from 'react';
import {
  PenTool,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from 'lucide-react';
import { CategoryCard } from './CategoryCard';
import { CATEGORIES } from '@/components/shared/category.data';




export function LearningPathsSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:py-20">
      <div className="mx-auto flex max-w-[1202px] flex-col items-center">
        {/* Header & Description Group */}
        <div className="flex max-w-[917px] flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-slate-500 sm:text-sm md:text-base">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        {/* Category Cards Group */}
        <div className="mt-12 w-full">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6 lg:gap-[40px]">
            {CATEGORIES.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
