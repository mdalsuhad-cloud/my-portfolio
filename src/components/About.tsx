import { Code2, Lightbulb, Rocket } from "lucide-react";

const qualities = [
  { icon: Code2, title: "Clean Code", text: "Building maintainable and reusable components." },
  { icon: Lightbulb, title: "Problem Solving", text: "Learning through practical projects and challenges." },
  { icon: Rocket, title: "Continuous Growth", text: "Exploring modern tools and development practices." },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About <span className="gradient-text">Me</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p className="lead">I am a web developer passionate about turning ideas into useful digital products.</p>
            <p>My focus is on creating responsive interfaces and practical web applications using React, Next.js, TypeScript and modern web technologies.</p>
            <p>I enjoy learning by building projects, improving my problem-solving skills and writing code that is easy to understand and maintain.</p>
          </div>

          <div className="quality-list">
            {qualities.map(({ icon: Icon, title, text }) => (
              <article className="quality-card" key={title}>
                <div className="icon-box"><Icon size={22} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
