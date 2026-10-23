
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p>A selection of applications I have built or worked on.</p>
        </div>

        <div className="projects-grid">
          {portfolio.projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-preview">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="project-image"
                />

                <div className="project-preview-overlay" />

                <div className="project-preview-content">
                  <span className="project-number">
                    PROJECT / {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{project.title}</h3>
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="project-body">
                <p>{project.description}</p>

                <div className="skill-tags">
                  {project.tech.map((tech) => (
                    <span className="skill-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={17} /> Source Code
                  </Link>

                  {project.demo ? (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo <ArrowUpRight size={17} />
                    </Link>
                  ) : (
                    <span className="demo-unavailable">
                      Demo not added
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
