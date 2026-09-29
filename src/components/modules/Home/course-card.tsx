import Image from 'next/image';
import { Star, BarChart2 } from 'lucide-react';
import { Course } from '@/types/course';



interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group flex h-[384px] w-full max-w-[373px] flex-col justify-between rounded-[24px] border border-[#CED0D3] bg-white p-[16px] transition-shadow hover:shadow-lg">
      {/* Top Image Container with Overlay Badges */}
      <div className="relative h-[168px] w-full overflow-hidden rounded-[16px]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 373px"
        />

        {/* Overlay Metadata Pills at the bottom of the image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 overflow-x-auto text-[10px] font-medium text-slate-700">
          <span className="rounded-full bg-white/80 px-2.5 py-1 backdrop-blur-md">
            {course.lessons}
          </span>
          <span className="rounded-full bg-white/80 px-2.5 py-1 backdrop-blur-md">
            {course.duration}
          </span>
          <span className="rounded-full bg-white/80 px-2.5 py-1 backdrop-blur-md">
            {course.comments}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between pt-3">
        {/* Title, Instructor, and Rating Row */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="line-clamp-1 text-base font-bold text-slate-900">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0 text-xs font-semibold text-slate-700">
              <span>{course.rating.toFixed(1)}</span>
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            </div>
          </div>
          <p className="mt-0.5 text-xs text-slate-500">
            by{' '}
            <span className="font-medium text-[#003BE2]">
              {course.instructor}
            </span>
          </p>
        </div>

        {/* Level and Avatar Group Row */}
        <div className="flex items-center justify-between pt-2">
          {/* Level Badge */}
          <div className="flex items-center gap-1.5 rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-medium text-slate-700">
            <BarChart2 className="h-3.5 w-3.5 text-slate-500" />
            <span>{course.level}</span>
          </div>

          {/* Overlapping Avatars + Badge */}
          <div className="flex items-center -space-x-1.5">
            {course.avatars.map((avatarUrl, idx) => (
              <div
                key={idx}
                className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-white bg-slate-200"
              >
                <Image
                  src={avatarUrl}
                  alt="Student Avatar"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            <div className="flex h-6 items-center justify-center rounded-full border-2 border-white bg-[#CCFF00] px-1.5 text-[9px] font-bold text-slate-900">
              {course.additionalStudents}
            </div>
          </div>
        </div>

        {/* Price Row */}
        <div className="flex items-baseline gap-1 border-t border-slate-100 pt-3">
          <span className="text-xl font-black text-[#003BE2]">
            ${course.price}
          </span>
          <span className="text-[11px] font-normal text-slate-500">
            /{course.pricingLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
