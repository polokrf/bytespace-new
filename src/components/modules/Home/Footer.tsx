import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const featuredCourses = [
  'Featured Courses',
  'Featured Categories',
  'Business',
  'IT',
  'Design',
];

const development = [
  'Development',
  'Marketing',
  'Photography',
  'Finance',
  'Sport',
];

const companyLinks = [
  'Become a Creator',
  'Affiliate Program',
  'Contact',
  'Help',
  'About',
];

export function Footer() {
  return (
    <footer className="w-full bg-white text-[#171717]">
      {/* Main Footer */}
      <div className="mx-auto w-full max-w-[1200px] px-6 py-[71px]">
        <div
          className="
            grid
            grid-cols-1
            gap-12
            md:grid-cols-[1.8fr_1fr_1fr_1fr]
            md:gap-[50px]
          "
        >
          {/* Newsletter */}
          <div className="max-w-[580px]">
            {/* Logo */}
            <Link
              href="/"
              className="mb-[14px] inline-flex items-center gap-[6px]"
            >
              {/* Logo Icon */}
              <span className="relative flex h-[20px] w-[18px] items-center">
                <span className="absolute left-0 top-0 h-[20px] w-[7px] rounded-full bg-[#C8FF00]" />

                <span className="absolute left-[5px] top-[5px] h-[10px] w-[13px] rounded-r-full bg-[#C8FF00]" />
              </span>

              <span className="text-[16px] font-bold tracking-[-0.04em]">
                ByteSpace
              </span>
            </Link>

            {/* Description */}
            <p
              className="
                mb-[27px]
                max-w-[440px]
                text-[12px]
                leading-[1.5]
                text-[#555]
              "
            >
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Email + Search */}
            <form className="flex max-w-[365px] items-center gap-[14px]">
              <Input
                type="email"
                placeholder="Enter your email"
                className="
                  h-[34px]
                  rounded-full
                  border-[#D9D9D9]
                  px-[14px]
                  text-[11px]
                  shadow-none
                  placeholder:text-[#777]
                  focus-visible:ring-1
                  focus-visible:ring-[#C8FF00]
                "
              />

              <Button
                type="submit"
                className="
                  h-[30px]
                  rounded-full
                  bg-[#C8FF00]
                  px-[18px]
                  text-[11px]
                  font-medium
                  text-black
                  hover:bg-[#b8ed00]
                "
              >
                Search
              </Button>
            </form>

            {/* Privacy */}
            <p
              className="
                mt-[14px]
                max-w-[410px]
                text-[10px]
                leading-[1.5]
                text-[#666]
              "
            >
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Featured Courses */}
          <FooterColumn title="Featured Courses" links={featuredCourses} />

          {/* Development */}
          <FooterColumn title="Development" links={development} />

          {/* Company */}
          <FooterColumn title="Become a Creator" links={companyLinks} />
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-[#E8E8E8]" />

      {/* Bottom Footer */}
      <div
        className="
          mx-auto
          flex
          min-h-[67px]
          max-w-[1200px]
          flex-col
          justify-center
          gap-4
          px-6
          py-4
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        {/* Copyright */}
        <p className="text-[10px] text-[#555]">
          © 2023 ByteSpace. All rights reserved.
        </p>

        {/* Bottom Links */}
        <div className="flex flex-wrap items-center gap-5">
          <FooterBottomLink href="#">Privacy Policy</FooterBottomLink>

          <FooterBottomLink href="#">Terms of Service</FooterBottomLink>

          <FooterBottomLink href="#">Cookies Settings</FooterBottomLink>
        </div>
      </div>
    </footer>
  );
}



interface FooterColumnProps {
  title: string;
  links: string[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      {/* Column Title */}
      <h3
        className="
          mb-[16px]
          text-[12px]
          font-medium
          leading-none
          text-[#222]
        "
      >
        {title}
      </h3>

      {/* Links */}
      <ul className="space-y-[13px]">
        {links.slice(1).map(link => (
          <li key={link}>
            <Link
              href="#"
              className="
                text-[11px]
                leading-[1.4]
                text-[#555]
                transition-colors
                hover:text-black
              "
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}



function FooterBottomLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        text-[10px]
        leading-none
        text-[#555]
        transition-colors
        hover:text-black
      "
    >
      {children}
    </Link>
  );
}
