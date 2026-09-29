import React from 'react';

import { CategoryItem } from '@/types/category.type';


interface CategoryCardProps {
  category: CategoryItem;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { title, icon: Icon} = category;

  return (
    <div
      className={`flex h-[167px] w-full min-w-[140px] flex-col items-center justify-center gap-4 rounded-2xl bg-white p-4 transition-all duration-200 hover:shadow-md
          border border-gray-200
     `}
    >
     
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#CCFF00]">
        <Icon className="h-6 w-6 text-black" strokeWidth={2} />
      </div>

      {/* Category Title */}
      <span className="text-center text-sm font-semibold text-slate-800">
        {title}
      </span>
    </div>
  );
}
