import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiGit,
  SiFigma,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiCplusplus,
  SiC,
} from "react-icons/si";

const usingNow = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "Sass", Icon: SiSass, color: "#CC6699" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
];

const learning = [
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
];

const otherSkills = [
  { name: "English C1/C2" },
  { name: "Spanish B1/B2" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "C", Icon: SiC, color: "#A8B9CC" },
];

function SkillGrid({
  items,
}: {
  items: {
    name: string;
    Icon?: React.ComponentType<{ size?: number; color?: string }>;
    color?: string;
  }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.name} className="flex flex-col items-center gap-2">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
            {item.Icon ? (
              <item.Icon size={28} color={item.color} />
            ) : (
              <span className="text-xs font-medium text-gray-500">
                {item.name.slice(0, 2)}
              </span>
            )}
          </div>
          <span className="text-xs text-gray-600">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 px-6 py-20 text-center md:px-14">
      <div className="mx-auto mb-16 inline-block border border-black px-8 py-3">
        <h2 className="text-lg font-semibold tracking-[0.3em]">SKILLS</h2>
      </div>

      <div className="mx-auto max-w-3xl space-y-16 text-left">
        <div>
          <p className="mb-6 text-xs font-semibold tracking-widest text-gray-700">
            USING NOW:
          </p>
          <SkillGrid items={usingNow} />
        </div>

        <div>
          <p className="mb-6 text-xs font-semibold tracking-widest text-gray-700">
            LEARNING:
          </p>
          <SkillGrid items={learning} />
        </div>

        <div>
          <p className="mb-6 text-xs font-semibold tracking-widest text-gray-700">
            OTHER SKILLS:
          </p>
          <SkillGrid items={otherSkills} />
        </div>
      </div>
    </section>
  );
}