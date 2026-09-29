import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CourseCardProps } from '@/types/auth.type';
import { BarChart3, Star } from 'lucide-react';
import Image from 'next/image';
import { images } from './LoginForm';

const AuthCourseCard = () => {
    
  return (
    <div>
      <div className="relative mt-16 h-[390px] w-full max-w-[430px]">
        <CourseCard
          className="
                absolute
                left-0
                top-[70px]
                z-10
                rotate-0
                sm:left-2
              "
          image="https://i.ibb.co.com/1GVJg8tT/c88264191d691ba3300ad4f82a942429bb912fa5.jpg"
          title="Build Digital"
          price="$25"
        />

        <CourseCard
          className="
                absolute
                left-[65px]
                top-[15px]
                z-20
                w-[220px]
                rotate-0
              "
          image="https://i.ibb.co.com/Txy4C9GC/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.jpg"
          title="The Power of Big Data"
          price="$25"
          large
        />

        {/* Green Circle */}
        <div
          className="
                absolute
                left-[30px]
                top-[10px]
                z-30
                flex
                h-[62px]
                w-[62px]
                rotate-[-20deg]
                items-center
                justify-center
                rounded-full
                border-[13px]
                border-[#C8FF00]
                bg-transparent
              "
        />

        {/* Arrow */}
        <div
          className="
                absolute
                bottom-[25px]
                left-[35px]
                z-30
                h-0
                w-0
                rotate-[15deg]
                border-l-[35px]
                border-r-[35px]
                border-t-[70px]
                border-l-transparent
                border-r-transparent
                border-t-[#C8FF00]
              "
        />

        {/* Happy Students */}
        <div
          className="
                absolute
                bottom-[25px]
                right-[70px]
                z-30
               
                rounded-xl
                bg-[#C8FF00]
                p-3
              "
        >
          <p className="text-[12px] font-semibold text-black">Happy Students</p>

          <p className="mt-1 text-[9px] text-black/70">4.9 (124)</p>

          <div className="mt-2 flex items-center">
            {images.map((item, index) => (
              <Avatar key={index}>
                <AvatarImage src={item} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ))}

            <span className="ml-1 text-[9px] font-medium text-black">2K+</span>
          </div>
        </div>

        {/* White decoration */}
        <div
          className="
                absolute
                bottom-[80px]
                right-[55px]
                z-40
                h-[75px]
                w-[25px]
                rotate-[25deg]
                rounded-full
                bg-white
                opacity-90
              "
        />

        <div
          className="
                absolute
                bottom-[105px]
                right-[40px]
                z-40
                h-[65px]
                w-[20px]
                rotate-[50deg]
                rounded-full
                bg-white
                opacity-90
              "
        />
      </div>
    </div>
  );

 function CourseCard({
    title,
    price,
    className = '',
    large = false,
    image,
  }: CourseCardProps) {
    return (
      <div
        className={`
        overflow-hidden
        rounded-[14px]
        bg-white
        shadow-xl
        ${large ? 'w-[220px]' : 'w-[185px]'}
        ${className}
      `}
      >
        {/* Fake Image */}
        <div
          className="
          relative
          h-[115px]
          overflow-hidden
          bg-[#171717]
        "
        >
          {/* Chart */}
          <div className="absolute  inset-x-5 bottom-5 flex items-end gap-2">
            <Image
              width={341}
              height={195}
              src={image || '/http'}
              alt="card-image"
            />
          </div>

          {/* Small stats */}
          <div className="absolute bottom-2 left-3 flex gap-1">
            <span className="rounded-full bg-white/90 px-2 py-1 text-[6px]">
              17 Lessons
            </span>

            <span className="rounded-full bg-white/90 px-2 py-1 text-[6px]">
              2 hours 16 mins
            </span>
            <span className="rounded-full bg-white/90 px-2 py-1 text-[6px]">
              59 Comments
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[11px] font-bold text-black">{title}</h3>

            <span className="flex items-center gap-0.5 text-[9px]">
              4.5
              <Star className="h-3 w-3 fill-[#C8FF00]" />
            </span>
          </div>

          <p className="mt-1 text-[7px] text-[#666]">by purepurl studio</p>

          <div className="mt-3 flex items-center gap-1">
            <span className="flex items-center gap-1 rounded-full bg-[#F3F3F3] px-2 py-1 text-[7px]">
              <BarChart3 className="h-2.5 w-2.5" />
              Beginner
            </span>

            <div className="flex -space-x-1">
              {images.map((item, index) => (
                <Avatar className=" max-w-[30px]" key={index}>
                  <AvatarImage src={item} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>

          <p className="mt-3 text-[12px] font-bold text-[#1455E8]">
            {price}
            <span className="ml-1 text-[7px] font-normal text-[#666]">
              /lifetime
            </span>
          </p>
        </div>
      </div>
    );
  }
 

};

export default AuthCourseCard;