import { GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Education() {
  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">MY BACKGROUND</p>
          <h2>Education & <span className="gradient-text">Learning</span></h2>
        </div>

        <div className="education-list">
          {portfolio.education.map((item) => (
            <article className="education-card" key={item.title}>
              <div className="icon-box"><GraduationCap size={25} /></div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.field}</p>
                <span>{item.institution}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="learning-note">
          <h3>Always learning, always building.</h3>
          <p>My learning journey combines web development fundamentals with hands-on application building.</p>
        </div>
      </div>
    </section>
  );
}
