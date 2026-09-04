const services = [
  {
    title: "LEARNING",
    description:
      "I’m continuously learning modern web development through Programming Hero and strengthening my knowledge through practical exercises, coding challenges, and real-world projects. I believe consistent learning and practice are the keys to becoming a better developer.",
  },
  {
    title: "Development",
    description:
      "I enjoy developing responsive and user-friendly websites using modern web technologies such as HTML, CSS, JavaScript, React, and TypeScript. I focus on writing clean, organized code and creating interfaces that work smoothly across different devices.",
  },
  {
    title: "PROJECTS",
    description:
      "I love turning what I learn into practical projects that help me improve my problem-solving and development skills. Each project gives me an opportunity to experiment with new ideas, learn from challenges, and build a stronger portfolio as I work toward becoming a professional Web Developer.",
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
        I’m a passionate and dedicated Web Development student currently learning and growing my skills 
        through Programming Hero. I’m focused on building modern, responsive, 
        and user-friendly websites while developing a strong understanding of HTML, CSS, JavaScript, React, and TypeScript. 
        I enjoy turning ideas into real-world projects, solving problems through code, 
        and continuously improving my development and design skills. 
        My goal is to become a professional Web Developer and create clean, functional, 
        and meaningful digital experiences that provide real value to users and businesses.
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