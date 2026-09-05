const education = [
  {
    degree: "B.Sc. in Computer Science / Your Field",
    place: "Your University or College",
    period: "20XX — 20XX",
  },
];

const certifications = [
  { name: "Certification name", issuer: "Issuing platform", year: "20XX" },
  { name: "Certification name", issuer: "Issuing platform", year: "20XX" },
  { name: "Certification name", issuer: "Issuing platform", year: "20XX" },
];

export default function Education() {
  return (
    <section id="education" className="bg-gray-100 px-6 py-20 text-center md:px-14">
      <div className="mx-auto mb-8 inline-block border border-black px-8 py-3">
        <h2 className="text-lg font-semibold tracking-[0.3em]">EDUCATION</h2>
      </div>

      <p className="mx-auto mb-14 max-w-lg text-sm leading-relaxed text-gray-500">
        My academic background and the certifications I have completed along
        the way.
      </p>

      <div className="mx-auto grid max-w-4xl gap-14 text-left md:grid-cols-2">
        {/* Education */}
        <div>
          <p className="mb-6 text-xs font-semibold tracking-widest text-gray-700">
            DEGREE
          </p>
          {education.map((edu) => (
            <div key={edu.degree} className="mb-6">
              <h3 className="mb-1 text-base font-bold">{edu.degree}</h3>
              <p className="mb-1 text-sm text-gray-500">{edu.place}</p>
              <p className="text-xs tracking-widest text-gray-400">
                {edu.period}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <p className="mb-6 text-xs font-semibold tracking-widest text-gray-700">
            CERTIFICATIONS
          </p>
          <ul className="space-y-4">
            {certifications.map((cert, i) => (
              <li key={i} className="border-b border-gray-300 pb-4">
                <p className="text-sm font-semibold">{cert.name}</p>
                <p className="text-xs text-gray-500">
                  {cert.issuer} · {cert.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}