import Image from 'next/image';

export function GrowthSection() {
  return (
    <section className="grid items-center gap-5 sm:gap-12 lg:min-h-[574px] lg:grid-cols-2 lg:gap-16">
   
      <div className="relative z-10 max-w-[520px]">
        <h2 className="text-[30px] font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-[36px] md:text-[40px]">
          Your Path to Professional
          <br />
          Growth Starts Here!
        </h2>

        <p className="mt-5 max-w-[440px] text-xs leading-[1.7] text-slate-500 sm:mt-6 sm:text-sm">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or embark
          on a new career path entirely, we have the resources you need.
        </p>

        {/* Statistics */}
        <div className="mt-7 flex items-start gap-7 sm:mt-8 sm:gap-10 md:gap-12">
          <div>
            <p className="text-[26px] font-semibold leading-none text-[#003BE2] sm:text-[30px] md:text-[32px]">
              12K
            </p>

            <p className="mt-2 text-xs text-slate-500 sm:text-sm">Students</p>
          </div>

          <div>
            <p className="text-[26px] font-semibold leading-none text-[#003BE2] sm:text-[30px] md:text-[32px]">
              70+
            </p>

            <p className="mt-2 text-xs text-slate-500 sm:text-sm">Courses</p>
          </div>

          <div>
            <p className="text-[26px] font-semibold leading-none text-[#003BE2] sm:text-[30px] md:text-[32px]">
              16
            </p>

            <p className="mt-2 text-xs text-slate-500 sm:text-sm">Creators</p>
          </div>
        </div>
      </div>

     

      <div
        className="
          relative
          mx-auto
          h-[390px]
          w-full
          max-w-[540px]

          sm:h-[450px]

          md:h-[500px]

          lg:h-[500px]
        "
      >
      

        <div
          className="
            absolute
            bottom-0
            left-1/2
            z-40
            h-[300px]
            w-[300px]
            -translate-x-1/2

            sm:h-[370px]
            sm:w-[370px]

            md:h-[410px]
            md:w-[410px]

            lg:right-[4%]
            lg:left-auto
            lg:h-[440px]
            lg:w-[440px]
            lg:translate-x-0
          "
        >
          <Image
            src="https://i.ibb.co.com/ch99Wg4M/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
            alt="Student holding laptop"
            fill
            className="object-contain drop-shadow-xl"
            sizes="(max-width: 640px) 300px, (max-width: 768px) 370px, (max-width: 1024px) 410px, 440px"
          />
        </div>

       

        <div
          className="
            absolute
            left-0
            top-0
            z-10
            w-[220px]
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-2
            shadow-md

            sm:w-[270px]
            sm:rounded-3xl
            sm:p-3

            md:w-[300px]

            lg:w-[320px]
          "
        >
          {/* Course Image */}
          <div
            className="
              relative
              h-[110px]
              overflow-hidden
              rounded-xl

              sm:h-[135px]

              md:h-[155px]

              lg:h-[170px]
            "
          >
            <Image
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80"
              alt="Course preview"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 220px, (max-width: 768px) 270px, (max-width: 1024px) 300px, 320px"
            />

            {/* Image Meta */}
            <div className="absolute bottom-2 left-2 flex gap-1 sm:bottom-3 sm:left-3 sm:gap-2">
              <span className="rounded-full bg-white/90 px-2 py-0.5 text-[6px] text-slate-700 sm:px-3 sm:py-1 sm:text-[9px]">
                17 Lessons
              </span>

              <span className="rounded-full bg-white/90 px-2 py-0.5 text-[6px] text-slate-700 sm:px-3 sm:py-1 sm:text-[9px]">
                2 hours 16 mins
              </span>
            </div>
          </div>

          {/* Course Details */}
          <div className="px-1 pb-1 pt-2 sm:pt-3">
            <h4 className="truncate text-[10px] font-bold text-slate-900 sm:text-sm md:text-base">
              Learn Figma from Basic
            </h4>

            <p className="mt-1 text-[8px] text-slate-500 sm:text-[10px] md:text-xs">
              by <span className="text-[#003BE2]">purepearl studio</span>
            </p>

            <div className="mt-2 flex items-center justify-between sm:mt-3">
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[7px] text-slate-500 sm:px-3 sm:py-1 sm:text-xs">
                Beginner
              </span>

              <span className="text-xs font-bold text-[#003BE2] sm:text-sm md:text-base">
                $25
              </span>
            </div>
          </div>
        </div>

       
        <div
          className="
            absolute
            right-0
            top-[200px]
            z-[60]
            w-[135px]
            rounded-xl
            bg-white
            p-3
            shadow-lg

            sm:top-[200px]
            sm:w-[165px]
            sm:rounded-2xl
            sm:p-4

            md:top-[210px]
            md:w-[180px]

            lg:w-[200px]
          "
        >
          <p className="text-[8px] text-slate-500 sm:text-xs">
            Learning Progress
          </p>

          <p className="mt-1 text-[28px] font-black leading-none text-slate-900 sm:text-[34px] md:text-[40px]">
            55%
          </p>

          <div className="mt-2 h-1.5  overflow-hidden rounded-full bg-slate-100 sm:h-2">
            <div className="h-full w-[55%] rounded-full bg-[#CCFF00]" />
          </div>
        </div>

       

        <svg
          className="
            absolute
            right-[-5px]
            top-[45px]
            z-70
            h-[85px]
            w-[60px]

            sm:right-[-5px]
            sm:top-[55px]
            sm:h-[110px]
            sm:w-[75px]

            md:h-[130px]
            md:w-[90px]

            lg:right-[-8px]
            lg:top-[70px]
            lg:h-[150px]
            lg:w-[105px]
          "
          viewBox="0 0 62 105"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 12 Q55 22 10 40 Q55 55 10 70 Q55 87 10 100"
            stroke="#CCFF00"
            strokeWidth="13"
            strokeLinecap="round"
          />
        </svg>

        
      </div>
    </section>
  );
}
