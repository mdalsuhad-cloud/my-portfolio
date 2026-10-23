import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suhad | Full Stack Web Developer",
  description: "Explore Suhad's developer portfolio, skills, projects and contact information.",
  openGraph: {
    title: "Suhad | Full Stack Web Developer",
    description: "Modern web applications built with React, Next.js and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
