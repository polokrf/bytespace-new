'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ children, href }: { children: React.ReactNode, href: string }) => {
  const pathName = usePathname()
  const isActive = pathName === href
  return (
    <Link
      href={href}
      className={`  hidden text-sm font-medium transition-colors hover:text-[#CCFF00] sm:block ${isActive ? 'font-bold text-white underline' : 'text-gray-300'}`}
    >
    {children}
    </Link>
  );
};

export default NavLink;