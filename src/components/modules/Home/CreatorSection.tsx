import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { images } from '../auth/LoginForm';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const FEATURES = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

export function CreatorSection() {
  return (
    <section className="grid items-center gap-12 lg:min-h-[574px] lg:grid-cols-2 lg:gap-16">
      <div
        className="
          relative order-2 mx-auto
          h-[430px] w-full max-w-[540px]
          sm:h-[500px]
          lg:order-1
        "
      >
        {/* Female Creator Image */}
        <div
          className="
            absolute bottom-0
            left-1/2
            z-10
            h-[350px] w-[260px]
            -translate-x-1/2
            sm:h-[420px] sm:w-[300px]
            md:h-[460px] md:w-[325px]
            lg:left-[70px]
            lg:h-[480px] lg:w-[340px]
            lg:translate-x-0
          "
        >
          <Image
            src="https://i.ibb.co.com/z3C2z1W/0d6596fb1df66aaf843ee85722f439fada233946.png"
            alt="Female course creator"
            fill
            className="object-contain drop-shadow-xl"
            sizes="(max-width: 640px) 260px, (max-width: 1024px) 325px, 340px"
          />
        </div>

        <div
          className="
            absolute
            left-2 top-15
            z-20
            w-[145px]
            rounded-xl
            bg-[#003BE2]
            p-3
            text-white
            shadow-md

            sm:left-4 sm:top-8
            sm:w-[170px] sm:p-4

            lg:left-0 lg:top-[20px]
          "
        >
          <p className="text-[10px] opacity-80 sm:text-xs">Total Revenue</p>

          <p className="mt-1 text-lg font-bold sm:text-2xl">$120.29</p>

          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/20 sm:mt-3">
            <div className="h-full w-[70%] bg-[#CCFF00]" />
          </div>
        </div>

        <div
          className="
            absolute
            left-2 top-[200px]
            z-20
            w-[145px]
            rounded-xl
            bg-[#003BE2]
            p-3
            text-white
            shadow-md

            sm:left-4 sm:top-[150px]
            sm:w-[170px] sm:p-4

            lg:left-0
          "
        >
          <p className="text-[10px] opacity-80 sm:text-xs">Year to Date</p>

          <p className="mt-1 text-lg font-bold sm:text-2xl">$1,200.38</p>

          <span
            className="
              mt-2
              inline-block
              rounded-full
              bg-[#CCFF00]
              px-2
              py-0.5
              text-[9px]
              font-bold
              text-slate-900
              sm:mt-3 sm:px-2.5 sm:text-[11px]
            "
          >
            +12%
          </span>
        </div>

        <svg
          className="
            absolute
            right-[5%]
            top-[90px]
            z-20
            h-[90px]
            w-[65px]

            sm:right-[8%]
            sm:top-[110px]
            sm:h-[120px]
            sm:w-[80px]

            lg:left-[290px]
            lg:right-auto
            lg:top-[110px]
            lg:h-[150px]
            lg:w-[105px]
          "
          viewBox="0 0 60 100"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 10 Q 50 20 10 38 Q 50 52 10 68 Q 50 84 10 98"
            stroke="#CCFF00"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </svg>

        <div
          className="
            absolute
            bottom-2
            right-2
            z-30
            w-[180px]
            rounded-2xl
            bg-white
            p-3
            shadow-lg

            sm:bottom-5
            sm:right-5
            sm:w-[220px]
            sm:p-4

            lg:bottom-[30px]
            lg:left-[240px]
            lg:right-auto
          "
        >
          <p className="text-xs font-bold text-slate-900 sm:text-sm">
            Happy Students
          </p>

          <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-500 sm:text-xs">
            <span className="font-bold">4.5</span>
            <span className="text-amber-400">★</span>
            <span>(240)</span>
          </div>

          <div className="mt-2 flex items-center -space-x-2 sm:mt-3 sm:-space-x-3">
            {images.map((item, index) => (
              <Avatar key={index}>
                <AvatarImage src={item} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ))}
            <div
              className="
                flex
                h-6 w-6
                items-center
                justify-center
                rounded-full
                border-2 border-white
                bg-[#CCFF00]
                text-[8px]
                font-bold
                text-slate-900
                 ml-2
                sm:h-8 sm:w-8
                sm:text-[10px]
              "
            >
              2K+
            </div>
          </div>
        </div>
      </div>

      <div
        className="
          order-1
          mx-auto
          w-full
          max-w-[500px]
          lg:order-2
        "
      >
        <h2
          className="
            text-[30px]
            font-bold
            leading-[1.2]
            tracking-tight
            text-slate-900

            sm:text-[36px]
            md:text-[40px]
          "
        >
          Create &amp; Manage
          <br />
          Courses Easily.
        </h2>

        <p
          className="
            mt-5
            text-sm
            leading-[1.75]
            text-slate-500

            sm:mt-6
          "
        >
          <span className="font-semibold text-slate-900">ByteSpace</span>{' '}
          supports individuals or entities in the creation, publication, and
          administration of educational courses.
        </p>

        {/* Features */}
        <div className="mt-7 space-y-3.5 sm:mt-8 sm:space-y-4">
          {FEATURES.map(feature => (
            <div key={feature} className="flex items-center gap-3">
              <CheckCircle2
                className="
                  h-4 w-4
                  shrink-0
                  fill-[#003BE2]
                  text-white

                  sm:h-5 sm:w-5
                "
              />

              <span
                className="
                  text-xs
                  font-medium
                  text-slate-800

                  sm:text-sm
                "
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
