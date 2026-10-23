import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <p className="eyebrow">LET&apos;S CONNECT</p>
          <h2>Have a project in<br /><span className="gradient-text">mind?</span></h2>
          <p className="contact-description">I&apos;m interested in discussing web development projects, opportunities and ideas. Feel free to reach out.</p>

          <a className="button button-primary" href={`mailto:${portfolio.email}?subject=Portfolio%20Inquiry`}>
            <Mail size={18} /> Send Me an Email <ArrowUpRight size={18} />
          </a>

          <div className="contact-socials">
            <Link href={portfolio.social.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</Link>
            <Link href={portfolio.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
