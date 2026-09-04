"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "About me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 flex items-center justify-between bg-black px-6 py-4 md:px-10">
      <Link href="/" className="text-sm font-semibold tracking-wide text-white">
        MB
      </Link>

      {/* Desktop links */}
      <div className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm text-gray-300 transition hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contact"
          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-gray-200"
        >
          Contact me
        </Link>
      </div>

      {/* Mobile hamburger / close button */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1.5 md:hidden"
      >
        {open ? (
          <span className="text-2xl leading-none text-white">×</span>
        ) : (
          <>
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </>
        )}
      </button>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="absolute left-0 top-full flex w-full flex-col items-center gap-6 bg-black py-8 md:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-gray-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black"
          >
            Contact me
          </Link>
        </div>
      )}
    </nav>
  );
}