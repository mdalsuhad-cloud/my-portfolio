export const portfolio = {
  name: "Suhad",
  brand: "SUHAD.DEV",
  role: "Full Stack Web Developer",
  email: "mdalsuhad@gmail.com",

  description:
    "I build modern, responsive and user-friendly web applications using React, Next.js and TypeScript.",

  social: {
    github: "https://github.com/mdalsuhad-cloud",
    linkedin: "https://www.linkedin.com/in/md-al-suhad/",
  },

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Git & GitHub",
  ],

  projects: [
    {
      title: "Bazar Dor",
      category: "Web Application",
      description:
        "A Bangla product and market-price website for browsing product prices and categories.",
      tech: ["Next.js", "TypeScript", "API"],
      github: "https://github.com/mdalsuhad-cloud/b14-a07-bazar-dor",
      demo: "https://b14-a07-bazar-dor-vert.vercel.app/",
      image: "/images/bazardor.png",
    },
     {
      title: "FITLOG",
      category: "Web Application",
      description:
        "A workout library application for discovering and browsing workout information.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/mdalsuhad-cloud/b14-fitlog-a06",
      demo: "https://harmonious-cendol-7e723c.netlify.app/",
      image: "/images/fitlog.png",
    },
    {
      title: "SHOMBHAR",
      category: "E-commerce",
      description:
        "A food brand website with product browsing and ordering features.",
      tech: ["Next.js", "TypeScript", "MongoDB"],
      github: "https://github.com/YOUR_USERNAME/shombhar",
      demo: "",
      image: "/images/shombhar.png",
    },
   
    
{
  title: "Development Stack Builder",
  category: "React Project",
  description:
    "A technology stack builder for exploring and selecting development tools.",
  tech: ["React", "TypeScript", "Vite"],
  github: "https://github.com/YOUR_USERNAME/my-react-app",
  demo: "",
  image: "",
},

  ],

  education: [
    {
      title: "Postgraduate Studies",
      field: "Psychology",
      institution: "National University of Bangladesh",
    },
     {
      title: "Learner",
      field: "FULL STACK WEB DEVELOPER",
      institution: "Programming Hero",
    },
  ],
} as const;
