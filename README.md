# Md Ahsanul Hoque Abir - Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)

Modern personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. The site renders portfolio content from MongoDB-backed services with graceful fallback content and includes a protected contact workflow using Cloudflare Turnstile.

Live site: [ahsanull.com](https://ahsanull.com)

---

## Table of Contents

- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture Snapshot](#architecture-snapshot)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Routes](#routes)
- [Deployment](#deployment)
- [Contact](#contact)

---

## Key Features

- Next.js App Router architecture (`app/` + route groups)
- Dynamic content pipeline from MongoDB (`services/` + `models/` + `lib/site-context.ts`)
- Home page fallback content when DB data is missing
- Dynamic project details route: `/projects/[projectId]`
- Contact form with:
  - Server Action submission (`app/actions/contact.action.ts`)
  - Cloudflare Turnstile validation
  - Google Forms POST integration
- Dark/light theme toggle via `next-themes`
- Motion-enhanced UI (Framer Motion + Motion)
- Component system with shadcn/ui and Radix primitives
- GTM integration in root layout

---

## Tech Stack

| Layer      | Technology                                                                      |
| ---------- | ------------------------------------------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org/)                                               |
| Language   | [TypeScript 5](https://www.typescriptlang.org/)                                 |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com/) + `tailwindcss-animate`              |
| UI System  | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)     |
| Animations | [Framer Motion](https://www.framer-motion.com/) + [Motion](https://motion.dev/) |
| Forms      | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)       |
| CAPTCHA    | [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/)          |
| Database   | [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)       |
| Theme      | [next-themes](https://github.com/pacocoursey/next-themes)                       |
| Icons      | [Lucide React](https://lucide.dev/)                                             |

---

## Architecture Snapshot

1. Page route loads via App Router.
2. `getSiteContext()` fetches data from service layer using cached server-side calls.
3. Services query MongoDB models and return active content.
4. UI components render mapped data; selected pages use fallback content when needed.
5. Contact submissions are validated by Turnstile and then forwarded to Google Forms.

---

## Project Structure

```txt
portfolio/
|-- app/
|   |-- (pages)/
|   |   |-- about/
|   |   |-- blog/
|   |   |-- contact/
|   |   |-- projects/
|   |   |   |-- [projectId]/
|   |   |-- skills/
|   |-- actions/
|   |   |-- contact.action.ts
|   |-- globals.css
|   |-- layout.tsx
|   |-- page.tsx
|-- components/
|   |-- about-page/
|   |-- contact-page/
|   |-- home-page/
|   |-- project-details-page/
|   |-- projects-page/
|   |-- shared/
|   |-- skills-page/
|   |-- ui/
|-- config/
|   |-- env.config.ts
|-- hooks/
|-- lib/
|   |-- mongodb.ts
|   |-- site-context.ts
|   |-- turnstile.ts
|-- models/
|-- public/
|-- scripts/
|   |-- update-db.ts
|-- services/
|-- types/
|-- next.config.mjs
|-- postcss.config.mjs
|-- tailwind.config.mjs
|-- tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/ahsanulhoqueabir/portfolio.git
cd portfolio
npm install
```

### Configure environment

Create `.env.local` in the project root and add values from the Environment Variables section.

### Run locally

```bash
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

Required keys used by the current codebase:

```env
# Site / API
NEXT_PUBLIC_API_SITE_URL=https://ahsanull.com

# Security
JWT_SECRET=your_jwt_secret_here
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key

# Analytics
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Contact integration (Google Form ID only)
FORM_ID=your_google_form_id

# Database
MONGODB_URI=your_mongodb_connection_string
```

Notes:

- Any variable prefixed with `NEXT_PUBLIC_` is exposed to the browser.
- Keep `JWT_SECRET`, `TURNSTILE_SECRET_KEY`, and `MONGODB_URI` private.

---

## Available Scripts

| Command             | Description                                                                     |
| ------------------- | ------------------------------------------------------------------------------- |
| `npm run dev`       | Start development server                                                        |
| `npm run build`     | Build production output                                                         |
| `npm run start`     | Start production server                                                         |
| `npm run lint`      | Run Next.js lint checks                                                         |
| `npm run db:update` | Sync/update MongoDB-backed content from `scripts/update-db.ts`                  |
| `npm run seed`      | Runs `scripts/seed.ts` (script target currently not present in this repository) |

---

## Routes

| Route                   | Description                                              |
| ----------------------- | -------------------------------------------------------- |
| `/`                     | Home page (hero, about, services, skills, projects, CTA) |
| `/about`                | About page content                                       |
| `/projects`             | All projects listing                                     |
| `/projects/[projectId]` | Dynamic project details page                             |
| `/skills`               | Skills and certifications                                |
| `/contact`              | Contact information + contact form                       |
| `/blog`                 | Blog placeholder page                                    |

---

## Deployment

Recommended: deploy on Vercel.

1. Push repository to GitHub.
2. Import project in Vercel.
3. Set all environment variables.
4. Deploy.

You can also self-host using:

```bash
npm run build
npm run start
```

---

## Contact

Md Ahsanul Hoque Abir  
CSE Undergraduate, Jagannath University, Dhaka, Bangladesh

| Channel  | Link                                                                         |
| -------- | ---------------------------------------------------------------------------- |
| Website  | [ahsanull.com](https://ahsanull.com)                                         |
| Email    | [contact.ahsanul@gmail.com](mailto:contact.ahsanul@gmail.com)                |
| Phone    | [+880 1875 507852](tel:+8801875507852)                                       |
| LinkedIn | [linkedin.com/in/ahsanulhoqueabir](https://linkedin.com/in/ahsanulhoqueabir) |
| GitHub   | [github.com/ahsanulhoqueabir](https://github.com/ahsanulhoqueabir)           |

---

Built by Md Ahsanul Hoque Abir
