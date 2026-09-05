"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "all" | "codes" | "designed";

type Project = {
  title: string;
  description: string;
  category: Category;
  image: string;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "Project One",
    description: "A short one-line description of what this project does.",
    category: "codes",
    image: "https://picsum.photos/seed/proj1/500/400",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Two",
    description: "A short one-line description of what this project does.",
    category: "designed",
    image: "https://picsum.photos/seed/proj2/500/400",
    tech: ["Figma", "UI/UX"],
    demoUrl: "#",
  },
  {
    title: "Project Three",
    description: "A short one-line description of what this project does.",
    category: "codes",
    image: "https://picsum.photos/seed/proj3/500/400",
    tech: ["React", "Node.js", "Express"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Four",
    description: "A short one-line description of what this project does.",
    category: "designed",
    image: "https://picsum.photos/seed/proj4/500/400",
    tech: ["Figma", "Branding"],
  },
  {
    title: "Project Five",
    description: "A short one-line description of what this project does.",
    category: "codes",
    image: "https://picsum.photos/seed/proj5/500/400",
    tech: ["TypeScript", "Next.js", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Six",
    description: "A short one-line description of what this project does.",
    category: "designed",
    image: "https://picsum.photos/seed/proj6/500/400",
    tech: ["Figma", "Prototyping"],
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Codes", value: "codes" },
  { label: "Designed", value: "designed" },
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("all");

  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="bg-neutral-900">
      {/* Banner with background image and heading */}
      <div className="relative flex h-56 items-center justify-center bg-neutral-800">
        <Image
          src="https://picsum.photos/seed/mountains/1600/400"
          alt=""
          fill
          className="object-cover opacity-70"
        />
        <div className="relative border border-white px-8 py-3">
          <h2 className="text-lg font-semibold tracking-[0.3em] text-white">
            PORTFOLIO
          </h2>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex justify-center gap-10 border-b border-white/10 py-6">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`text-xs font-medium tracking-widest transition ${
              active === f.value
                ? "border-b border-white text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {f.label.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col bg-neutral-900 pb-6"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col px-5 pt-4 text-left">
              <h3 className="mb-1 text-base font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-3 text-sm text-gray-400">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/20 px-3 py-1 text-[11px] text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto flex gap-4 text-xs font-medium tracking-wide">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline-offset-4 hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 underline-offset-4 hover:text-white hover:underline"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="py-8 text-center text-sm text-gray-400">
        And many more to come!
      </p>
    </section>
  );
}