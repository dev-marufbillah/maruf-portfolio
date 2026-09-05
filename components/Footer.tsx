"use client";

import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/dev.marubillah",
    Icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dev-marufbillah/",
    Icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/dev-marufbillah",
    Icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:marufsalauddinofficial@gmail.com",
    Icon: FaEnvelope,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 px-6 py-10 text-center text-white">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mx-auto mb-6 flex flex-col items-center gap-1 text-xs tracking-widest text-gray-400 transition hover:text-white"
      >
        <span>^</span>
        <span>BACK TO TOP</span>
      </button>

      <div className="mb-6 flex justify-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.label !== "Email" ? "_blank" : undefined}
            rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
            aria-label={s.label}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/30 text-sm transition hover:bg-white hover:text-black"
          >
            <s.Icon size={14} />
          </a>
        ))}
      </div>

      <p className="text-xs text-gray-400">
        &copy;{year} Maruf Billah. All rights reserved.
      </p>
    </footer>
  );
}