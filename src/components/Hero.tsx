
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            WEB DEVELOPER PORTFOLIO
          </div>

          <h1>
            Building digital
            <br />
            experiences that
            <br />
            <span className="gradient-text">make an impact.</span>
          </h1>

          <p className="hero-description">{portfolio.description}</p>

          <div className="hero-actions">
            <Link className="button button-primary" href="#projects">
              Explore Projects
            </Link>

            <a
              className="button button-secondary"
              href="/MD_Al_Suhad_CV.pdf"
              download
            >
              Download CV
            </a>
          </div>

          <div className="social-links">
            <a
              href={portfolio.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a href={`mailto:${portfolio.email}`}>
              {portfolio.email}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-frame">
            <Image
              src="./images/suhad.png"
              alt="My developer profile photo"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 420px"
              className="profile-image"
            />
          </div>

          <div className="decorative-orbit" />
        </div>
      </div>
    </section>
  );
}
