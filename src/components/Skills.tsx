import { Code2 } from "lucide-react";

const groups = [
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"] },
  { title: "Backend & Database", skills: ["Node.js", "REST APIs", "MongoDB"] },
  { title: "Tools & Workflow", skills: ["Git", "GitHub", "VS Code"] },
];

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2>Skills & <span className="gradient-text">Technologies</span></h2>
          <p>Technologies I use and continue to learn.</p>
        </div>

        <div className="skill-groups">
          {groups.map((group) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-title"><Code2 size={21} /><h3>{group.title}</h3></div>
              <div className="skill-tags">
                {group.skills.map((skill) => <span key={skill} className="skill-tag">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
