import React from 'react';
import { CourseCard } from './course-card';

import { COURSES } from '../../shared/course.data';

export function CourseSection() {
  return (
    <section className="w-full bg-white py-12 px-4 md:py-16">
      <div className="mx-auto max-w-[1199px]">
        <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
