


import Link from 'next/link';

const BLUE = '#003BE2';
const LIME = '#D4F52C';

export const metadata = {
  title: '404 - Page not found',
};

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 font-body"
      style={{
        backgroundColor: BLUE,
        // Register page er moto same grid
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '70px 70px',
      }}
    >
      <div className="flex w-full max-w-[900px] flex-col items-center text-center">
        {/* 404: upore lime, niche e blue te fade hoye jay */}
        <span
          aria-hidden="true"
          className="select-none font-heading text-[180px] font-semibold leading-none sm:text-[280px] lg:text-[400px] xl:text-[480px]"
          style={{
            backgroundImage: `linear-gradient(180deg, ${LIME} 25%, rgba(212,245,44,0) 92%)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
          }}
        >
          404
        </span>

        {/* heading 404 er niche part er upor overlap kore */}
        <h1 className="relative z-10 -mt-[0.9em] font-heading text-4xl font-semibold leading-tight text-white sm:-mt-[0.6em] sm:text-5xl lg:-mt-[0.5em] lg:text-6xl">
          The page you are looking for doesn&apos;t exist
        </h1>

        <p className="mt-8 text-sm text-white/80 sm:text-base">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="mt-10 rounded-full px-6 py-2 text-sm font-medium text-neutral-900 transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          style={{ background: LIME }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
