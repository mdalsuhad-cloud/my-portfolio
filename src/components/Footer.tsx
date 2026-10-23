import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link href="#home" className="logo">{portfolio.brand}</Link>
          <p>Designed with purpose. Built with code.</p>
        </div>
        <a className="back-to-top" href="#home">Back to top <ArrowUpRight size={16} /></a>
        <p className="copyright">© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
