'use client';



import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { images } from './LoginForm';
import Image from 'next/image';

const BLUE = '#003BE2';
const LIME = '#D4F52C';


function AvatarStack({ count = '26+', dark = true }) {
  // const colors = ['#f59e0b', '#ec4899', '#8b5cf6', '#14b8a6', '#f97316'];
  return (
    <div className="flex items-center">
      {images.map((item, index) => (
        <Avatar className=" max-w-[30px]" key={index}>
          <AvatarImage src={item} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ))}
      <span
        className={`-ml-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-[9px] font-semibold text-white ${
          dark ? 'bg-black' : 'bg-neutral-800'
        }`}
      >
        {count}
      </span>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-neutral-200/80 px-3 py-1 text-[10px] text-neutral-700">
      {children}
    </span>
  );
}

// Left side: course card illustration (Figma er decorative part)
// Tomar existing Pill, AvatarStack, LIME use kore. Shudhu ei function ta replace koro.
function Showcase() {
  return (
    <div className="relative mt-16 hidden h-[560px] w-[480px] origin-top-left lg:block lg:scale-[0.8] xl:scale-100">
      {/* back card */}
      <div className="absolute left-0 top-[87px] w-[368px] rounded-[20px] bg-white p-4 shadow-lg">
        <div className="relative h-[170px] overflow-hidden rounded-xl bg-neutral-300">
          <img
            src="https://i.ibb.co.com/1GVJg8tT/c88264191d691ba3300ad4f82a942429bb912fa5.jpg"
            alt="Build Digital course"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-3 left-3 flex gap-2 [&>span]:text-xs">
            <Pill>17 Lessons</Pill>
          </div>
        </div>

        <h4 className="mt-4 font-heading text-xl font-semibold text-neutral-900">
          Build Digital Products
        </h4>
        <p className="mt-1 text-xs text-neutral-500">
          by <span className="text-[#003BE2]">purepearl studio</span>
        </p>

        {/* orange border remove: oita Figma selection highlight, design er part na */}
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs text-neutral-600">
            Beginner
          </span>
          <AvatarStack />
        </div>

        <p className="mt-3 text-xl font-bold text-[#003BE2]">
          $25
          <span className="text-xs font-normal text-neutral-500">/lifetime</span>
        </p>
      </div>

      {/* front card */}
      <div className="absolute left-[109px] top-0 z-10 w-[366px] rounded-[20px] bg-white p-4 shadow-xl">
        <div className="relative h-[170px] overflow-hidden rounded-xl bg-neutral-900">
          <img
            src="https://i.ibb.co.com/Txy4C9GC/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.jpg"
            alt="The Power of Big Data course"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-3 left-3 flex gap-2 [&>span]:text-xs">
            <Pill>17 Lessons</Pill>
            <Pill>2 hours 16 mins</Pill>
            <Pill>69 Comments</Pill>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <h4 className="font-heading text-xl font-semibold text-neutral-900">
            the Power of Big Data
          </h4>
          <span className="text-sm text-neutral-700">
            4.5 <span style={{ color: LIME }}>★</span>
          </span>
        </div>
        <p className="mt-1 text-xs text-neutral-500">
          by <span className="text-[#003BE2]">purepearl studio</span>
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs text-neutral-600">
            Beginner
          </span>
          <AvatarStack />
        </div>

        <p className="mt-3 text-xl font-bold text-[#003BE2]">
          $25
          <span className="text-xs font-normal text-neutral-500">/lifetime</span>
        </p>
      </div>

      {/* happy students */}
      <div
        className="absolute left-[222px] top-[380px] z-20 w-[252px] rounded-[20px] p-4 shadow-lg"
        style={{ background: LIME }}
      >
        <p className="text-sm font-medium text-neutral-900">Happy Students</p>
        <p className="text-xs text-neutral-700">4.5 (240) ★</p>
        <div className="mt-2">
          <AvatarStack count="2K+" />
        </div>
      </div>

      {/* decorative ring */}
      <span
        className="absolute left-[50px] top-[40px] z-30 h-24 w-24 rounded-full border-[20px]"
        style={{ borderColor: LIME }}
      />
    </div>
  );
}

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
        <section className="flex flex-col text-white">
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

          <Showcase />
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
