import Link from 'next/link';
import {Star, BarChart3 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CourseCardProps } from '@/types/auth.type';
import FacebookIcon from '@/components/ui/facebook-icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';


export const images = [
  'https://i.ibb.co.com/1YKWJGWY/9ef8cb329b949267cc8214b6727067c4a13af4b4-1.png',
  'https://i.ibb.co.com/7d190T9z/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png',
  'https://i.ibb.co.com/dw7fmdR2/83fb3e04056cc892636460bee5791aa3f243854c.png',
  'https://i.ibb.co.com/0yMGwM0z/f3cf29a8fed39589ceb38423e65b26b8d6c93123.png',
  'https://i.ibb.co.com/prdWzkx3/5824acacb3b76175bc84084ec18597109498f96d.png',
];

export default function LoginForm() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#003BE2]">
      {/* Grid Background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.35) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.35) 1px,
              transparent 1px
            )
          `,
          backgroundSize: '70px 70px',
        }}
      />

      {/* Main Content */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1280px]
          flex-col
          px-6
          py-8
          lg:grid
          lg:grid-cols-[1fr_1fr]
          lg:items-center
          lg:gap-12
          lg:px-12
        "
      >
        <section className="relative flex min-h-[600px] flex-col">
          {/* Logo */}
          <Link href="/" className="flex w-fit items-center gap-2">
            <span className="relative h-6 w-6">
              <span className="absolute left-0 top-0 h-6 w-2 rounded-full bg-[#C8FF00]" />
              <span className="absolute left-[6px] top-[6px] h-3 w-4 rounded-r-full bg-[#C8FF00]" />
            </span>

            <span className="text-lg font-bold tracking-tight text-white">
              ByteSpace
            </span>
          </Link>

          {/* Intro */}
          <div className="mt-8 max-w-[420px]">
            <h1 className="text-[28px] font-semibold leading-[1.15] text-white">
              Sign in with ease
            </h1>

            <p className="mt-3 max-w-[380px] text-[13px] leading-6 text-white/75">
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
          </div>

          {/* Floating Course Cards */}
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
                bottom-[45px]
                left-[5px]
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
              <p className="text-[12px] font-semibold text-black">
                Happy Students
              </p>

              <p className="mt-1 text-[9px] text-black/70">4.9 (124)</p>

              <div className="mt-2 flex items-center">
                {images.map((item, index) => (
                  <Avatar key={index}>
                    <AvatarImage src={item} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                ))}

                <span className="ml-1 text-[9px] font-medium text-black">
                  2K+
                </span>
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
        </section>

        <section className="flex items-center justify-center lg:justify-end">
          <div
            className="
              w-full
              max-w-[430px]
              rounded-[18px]
              bg-white
              px-8
              py-10
              shadow-2xl
              sm:px-9
              sm:py-11
            "
          >
            {/* Header */}
            <div>
              <p className="text-[11px] font-medium text-[#2563EB]">Sign In</p>

              <h2
                className="
                  mt-1
                  text-[30px]
                  font-bold
                  leading-tight
                  tracking-[-0.03em]
                  text-[#292929]
                "
              >
                Welcome Back
              </h2>
            </div>

            {/* Form */}
            <form className="mt-7 space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-[10px] font-normal text-[#333]"
                >
                  Email
                </Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="designer@example.com"
                  className="
                    h-[32px]
                    rounded-[7px]
                    border-[#E4E4E4]
                    px-3
                    text-[10px]
                    shadow-none
                    placeholder:text-[#A0A0A0]
                    focus-visible:ring-1
                    focus-visible:ring-[#003BE2]
                  "
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-[10px] font-normal text-[#333]"
                >
                  Password
                </Label>

                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  className="
                    h-[32px]
                    rounded-[7px]
                    border-[#E4E4E4]
                    px-3
                    text-[10px]
                    shadow-none
                    placeholder:text-[#A0A0A0]
                    focus-visible:ring-1
                    focus-visible:ring-[#003BE2]
                  "
                />
              </div>

              {/* Sign In */}
              <div className="flex justify-end pt-1">
                <Button
                  type="submit"
                  className="
                    h-[30px]
                    rounded-full
                    bg-[#C8FF00]
                    px-5
                    text-[11px]
                    font-medium
                    text-black
                    hover:bg-[#b8ed00]
                  "
                >
                  Sign In
                </Button>
              </div>
            </form>

            {/* Divider */}
            <div className="my-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#E6E6E6]" />

              <span className="text-[10px] text-[#999]">or</span>

              <div className="h-px flex-1 bg-[#E6E6E6]" />
            </div>

            {/* Social Login */}
            <div className="flex items-center justify-center gap-3">
              {/* Facebook */}
              <button
                type="button"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#E3E3E3]
                  transition
                  hover:bg-[#F7F7F7]
                "
              >
                <FacebookIcon />
              </button>

              {/* Google */}
              <button
                type="button"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#E3E3E3]
                  transition
                  hover:bg-[#F7F7F7]
                "
              >
                <span className="text-[17px] font-bold">G</span>
              </button>
            </div>

            {/* Register */}
            <p className="mt-11 text-center text-[10px] text-[#999]">
              New user?{' '}
              <Link
                href="/register"
                className="font-medium text-[#2563EB] hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}




function CourseCard({
  title,
  price,
  className = '',
  large = false,
  image
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
            {images.map((item ,index)=> (
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
