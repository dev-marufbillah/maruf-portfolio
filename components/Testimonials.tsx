const testimonials = [
  {
    quote:
      "Write a short quote here from a client or collaborator about what it was like working with you.",
    name: "Client name",
    role: "Their role or company",
  },
  {
    quote:
      "Write a short quote here from a client or collaborator about what it was like working with you.",
    name: "Client name",
    role: "Their role or company",
  },
  {
    quote:
      "Write a short quote here from a client or collaborator about what it was like working with you.",
    name: "Client name",
    role: "Their role or company",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white px-6 py-20 text-center md:px-14">
      <div className="mx-auto mb-8 inline-block border border-black px-8 py-3">
        <h2 className="text-lg font-semibold tracking-[0.3em]">TESTIMONIALS</h2>
      </div>

      <p className="mx-auto mb-14 max-w-lg text-sm leading-relaxed text-gray-500">
        A few words from people I have worked with.
      </p>

      <div className="mx-auto grid max-w-5xl gap-8 text-left md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col justify-between rounded-lg bg-gray-100 p-6"
          >
            <p className="mb-6 text-sm italic leading-relaxed text-gray-600">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}