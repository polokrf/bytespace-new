import Link from 'next/link';
import { ShoppingBag, Menu } from 'lucide-react';
import NavLink from '../shared/NavLink';

export function Navbar() {
  return (
    <header className="  w-full border-b border-[#FFE800] bg-transparent py-4 px-6 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-black tracking-wider text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded bg-[#CCFF00] text-lg font-extrabold text-blue-700">
            b
          </span>
          <span className="font-bold">ByteSpace</span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/courses">Courses</NavLink>
          <NavLink href="/creators">Creators</NavLink>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <NavLink href="/login">Sign In</NavLink>
          <NavLink href="/register">Join Us</NavLink>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center text-white transition-colors hover:text-[#CCFF00]"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>

          {/* Mobile Menu Icon */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center text-white md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
