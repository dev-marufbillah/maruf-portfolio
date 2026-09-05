const experiences = [
  {
    role: "Front-end Developer",
    place: "Company or client name",
    period: "2024 — Present",
    description:
      "Describe what you worked on here — the kind of projects, the stack you used, and any impact you had.",
  },
  {
    role: "Junior Web Developer",
    place: "Company or client name",
    period: "2023 — 2024",
    description:
      "Describe what you worked on here — the kind of projects, the stack you used, and any impact you had.",
  },
  {
    role: "Freelance Projects",
    place: "Self-employed",
    period: "2022 — 2023",
    description:
      "Describe the freelance work you did here — client types, project scope, and tools used.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white px-6 py-20 text-center md:px-14">
      <div className="mx-auto mb-8 inline-block border border-black px-8 py-3">
        <h2 className="text-lg font-semibold tracking-[0.3em]">EXPERIENCE</h2>
      </div>

      <p className="mx-auto mb-14 max-w-lg text-sm leading-relaxed text-gray-500">
        A short timeline of where I have worked and what I have built along
        the way.
      </p>

      <div className="mx-auto max-w-2xl text-left">
        {experiences.map((exp) => (
          <div key={exp.role} className="relative border-l border-gray-300 pb-12 pl-8 last:pb-0">
            <span className="absolute -left-1.75 top-1 h-3 w-3 rounded-full border-2 border-black bg-white" />
            <p className="mb-1 text-xs font-semibold tracking-widest text-gray-400">
              {exp.period}
            </p>
            <h3 className="mb-1 text-lg font-bold">{exp.role}</h3>
            <p className="mb-3 text-sm text-gray-500">{exp.place}</p>
            <p className="text-sm leading-relaxed text-gray-600">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}