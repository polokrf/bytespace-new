import Link from 'next/link';
import { Star, BarChart3 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import FacebookIcon from '@/components/ui/facebook-icon';


import AuthCourseCard from './AuthCourseCard';

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
          <div>
            <AuthCourseCard />
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
