# Bhanu Prasad Pitla | Portfolio

A premium, single-page portfolio for Bhanu Prasad Pitla, AI Engineer and Software Engineer. Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons. It has no backend and needs no paid services.

## Features

- Sticky navigation with active-section highlighting and a mobile menu
- Hero, About, Experience timeline, Projects, Skills, Certifications, Education, and Contact sections
- Glassmorphism cards, smooth scrolling, and scroll-triggered animations
- Contact form with frontend validation (opens your email app with the message pre-filled)
- Downloadable resume and SEO metadata
- Responsive from mobile to desktop, and respects reduced-motion preferences

## Getting started

Requirements: [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal (usually http://localhost:5173).

Other commands:

```bash
npm run build     # production build in dist/
npm run preview   # serve the production build locally
npm run lint      # code quality checks
npm run typecheck # TypeScript checks
```

## Customizing the content

Almost all text and links live in one file: `src/data/portfolio.ts`.

- **Profile details, links, and roles:** the `profile` object
- **Navigation labels:** `navItems`
- **Experience, projects, skills, certifications, education:** the matching arrays
- **Profile photo:** place an image in `public/` (for example `public/profile.jpg`) and set `photo: '/profile.jpg'` in `profile`. Until then, a styled "BP" placeholder is shown.
- **Resume:** replace `public/resume.pdf` with your own PDF, keeping the same file name.
- **Project links:** each project's `github` field currently points to your GitHub profile. Replace it with the repository URL, and add a `demo` URL where you have a live deployment.
- **Colors and fonts:** `tailwind.config.js` (color ramps and fonts) and `src/styles/globals.css`.

Sections are assembled in `src/pages/HomePage.tsx`, and the layout (navigation and footer) is in `src/components/layout/`.

## Project structure

```
public/                  Static files (profile photo, resume.pdf)
src/
  components/
    layout/              Navbar, Footer
    sections/            Hero, About, Experience, Projects, Skills, ...
    ui/                  Reusable pieces (Button, GlassCard, Reveal, ...)
  data/portfolio.ts      All website content
  hooks/                 Scroll-spy hook for the navigation
  pages/HomePage.tsx     Page composition
  styles/globals.css     Base styles and utility classes
  types.ts               Shared content types
  App.tsx                App shell and background
  main.tsx               Entry point
```

## Contact form

The contact form validates input in the browser and then opens the visitor's email app with the message pre-filled, addressed to your email. It does not send messages from the website itself. If you later want messages delivered directly to your inbox, connect a form service such as Formspree or a backend of your choice and update `ContactForm.tsx`.

## Deployment

### GitHub Pages

The workflow in `.github/workflows/pages.yml` builds and deploys the site whenever changes are pushed to `main`. It sets the repository URL base only in the Pages build, so local development remains available at the Vite root URL.

After pushing the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source if it is not already selected. The public site will be available at `https://bhanuprasad5066.github.io/bhanu-prasad-pitla-portfolio/`.

### Vercel

1. Import the GitHub repository at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
3. Click **Deploy**. No environment variables are required.

## License

Content and design belong to Bhanu Prasad Pitla. All rights reserved.
