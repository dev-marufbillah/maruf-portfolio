export default function AboutStrip() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 px-6 py-14 text-white md:px-14">
      {/* Decorative faint watermark text */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 bottom-0 select-none text-[10rem] font-bold leading-none text-white/5 md:text-[14rem]"
      >
        IT
      </span>

      <div className="relative max-w-xl">
        <h2 className="mb-4 text-2xl font-bold">Company or brand name</h2>
        <p className="mb-6 text-sm leading-relaxed text-gray-400">
          Write a short paragraph here about the company, agency, or yourself —
          what you do, who you work with, and what makes your work stand out.
          Keep it to two or three sentences so it stays easy to scan.
        </p>
        <a
          href="#about"
          className="inline-block rounded-full border border-white/30 px-6 py-2 text-sm transition hover:bg-white hover:text-black"
        >
          Read more
        </a>
      </div>
    </section>
  );
}