# SUHAD.DEV — Personal Developer Portfolio

A responsive, dark modern developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, and Lucide icons.

## Features

- Dark navy design with blue/purple accents
- Responsive navigation with mobile menu
- Hero, About, Skills, Projects, Education, Contact and Footer sections
- Centralized editable content in `src/data/portfolio.ts`
- Project source-code and optional live-demo links
- CV download link (`public/resume.pdf`)
- SEO metadata and accessible labels
- Reduced-motion support

## Requirements

- Node.js 20.9 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Personalize before publishing

1. Edit `src/data/portfolio.ts` with your actual name, email, education, social URLs and project URLs.
2. Add your photo at `public/images/profile.jpg`. If you do not add a photo, the hero uses a placeholder.
3. Add your CV PDF at `public/resume.pdf`.
4. Confirm each GitHub URL and add real demo URLs where available.
5. Run `npm run build`.
6. Push to GitHub and import the repository into Vercel.

## Important

- Project links are starter examples. Replace them with your real repository URLs before publishing.
- The contact section opens the visitor's email app using `mailto:`. It does not store messages.
- This is a frontend portfolio; it does not include authentication, a database, or an admin CMS.
