const services = [
  {
    title: "Design",
    description:
      "I can design the site based on your needs and suggestions. I can also design the interface from scratch and consult you along the way.",
  },
  {
    title: "Development",
    description:
      "I can design the site based on your needs and suggestions. I can also design the interface from scratch and consult you along the way.",
  },
  {
    title: "Maintenance",
    description:
      "I can design the site based on your needs and suggestions. I can also design the interface from scratch and consult you along the way.",
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="bg-gray-100 px-6 py-20 text-center md:px-14">
      {/* Heading in a bordered box */}
      <div className="mx-auto mb-8 inline-block border border-black px-8 py-3">
        <h2 className="text-lg font-semibold tracking-[0.3em]">ABOUT ME</h2>
      </div>

      {/* Intro paragraph */}
      <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-gray-500">
        Write a short introduction about yourself here — your background,
        what you specialize in, and the kind of projects you enjoy working on.
        Keep it to two or three sentences.
      </p>

      {/* Explore link */}
      <a
        href="#portfolio"
        className="text-xs font-medium tracking-[0.3em] text-gray-700"
      >
        | EXPLORE |
      </a>

      {/* Divider */}
      <div className="my-10 text-gray-300">~~~~~~~~</div>

      {/* Three service columns */}
      <div className="mx-auto grid max-w-4xl gap-12 text-left md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title}>
            <div className="mb-4 h-8 w-8 rounded-full border border-gray-400" />
            <h3 className="mb-2 text-sm font-semibold tracking-widest">
              {service.title.toUpperCase()}
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}