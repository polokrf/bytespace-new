'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { images } from './LoginForm';
import Image from 'next/image';
import AuthCourseCard from './AuthCourseCard';

const BLUE = '#003BE2';
const LIME = '#D4F52C';

export default function RegisterForm() {
  return (
    <main
      className="relative min-h-screen w-full overflow-hidden font-body"
      style={{
        backgroundColor: BLUE,
        // Figma er layout grid
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '70px 70px',
      }}
    >
      <div className="mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 items-center gap-10 px-2 md:px-4 py-10 lg:grid-cols-2 lg:px-20">
        {/* LEFT */}
        <section className="flex flex-col ">
          {/* logo */}
          <div
            className="mb-10 flex h-8 w-8 items-center justify-center rounded-lg text-lg font-black text-[#003BE2]"
            style={{ background: LIME }}
          >
            b
          </div>

          <h2 className="font-heading text-lg font-semibold">
            Sign up and come in
          </h2>
          <p className="mt-4 max-w-[290px] text-sm leading-relaxed text-white/80">
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no cost
          </p>

          <AuthCourseCard />
        </section>

        {/* RIGHT */}
        <section className="flex justify-center lg:justify-end">
          <div className="flex min-h-[460px] w-full max-w-[340px] flex-col rounded-2xl border border-neutral-200 bg-white p-10 sm:max-w-[420px] lg:min-h-[462px]">
            <p className="text-xs text-[#003BE2]">Create an Account</p>
            <h1 className="mt-2 font-heading text-[32px] font-semibold leading-tight text-neutral-900">
              Welcome to ByteSpace
            </h1>

            <form className="mt-8 flex flex-col gap-5">
              <Label htmlFor="fullName">FullName</Label>
              <Input type="text" name="fullName" placeholder="Jamie Davis" />

              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="designer@example.com"
              />
              <Label htmlFor="password">Password</Label>
              <Input name="password" type="password" placeholder="********" />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-full px-6 py-2 text-sm font-medium text-neutral-900 transition hover:brightness-95 disabled:opacity-60"
                  style={{ background: LIME }}
                >
                  Continue
                </button>
              </div>
            </form>

            <p className="mt-auto pt-10 text-center text-xs text-neutral-600">
              Already have an account?{' '}
              <Link href="/login" className="text-[#003BE2] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
