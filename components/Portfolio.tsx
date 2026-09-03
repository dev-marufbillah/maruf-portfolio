"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "all" | "codes" | "designed";

const projects: { title: string; category: Category; image: string }[] = [
  { title: "Project one", category: "codes", image: "https://picsum.photos/seed/proj1/500/400" },
  { title: "Project two", category: "designed", image: "https://picsum.photos/seed/proj2/500/400" },
  { title: "Project three", category: "codes", image: "https://picsum.photos/seed/proj3/500/400" },
  { title: "Project four", category: "designed", image: "https://picsum.photos/seed/proj4/500/400" },
  { title: "Project five", category: "codes", image: "https://picsum.photos/seed/proj5/500/400" },
  { title: "Project six", category: "designed", image: "https://picsum.photos/seed/proj6/500/400" },
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
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {visible.map((project) => (
          <div
            key={project.title}
            className="group relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-black/0 p-4 opacity-0 transition group-hover:bg-black/50 group-hover:opacity-100">
              <span className="text-sm text-white">{project.title}</span>
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