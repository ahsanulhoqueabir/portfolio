# Md Ahsanul Hoque Abir — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, responsive personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. It showcases projects, skills, experience, and provides a contact form — all with smooth animations and full dark/light mode support.

🌐 **Live:** [ahsanull.com](https://ahsanull.com)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Pages](#pages)
- [Deployment](#deployment)
- [Contact](#contact)

---

## Features

- ⚡ **Next.js 15 App Router** — File-based routing with server and client components
- 🌗 **Dark / Light Mode** — System-aware theme with manual toggle via `next-themes`
- 🎞️ **Smooth Animations** — Powered by Framer Motion / Motion
- 📬 **Contact Form** — Backed by Google Forms with Cloudflare Turnstile CAPTCHA
- 📱 **Fully Responsive** — Mobile-first design that works on all screen sizes
- 🧩 **Component Library** — Built on shadcn/ui (Radix UI primitives + Tailwind)
- 📊 **Skills Visualization** — Interactive skill level bars and stats
- 🔍 **SEO Optimised** — Open Graph and Twitter Card meta tags
- 📈 **Analytics Ready** — Google Tag Manager integration

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| Animations | [Framer Motion](https://www.framer-motion.com/) / [Motion](https://motion.dev/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Forms | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| CAPTCHA | [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) |
| Theme | [next-themes](https://github.com/pacocoursey/next-themes) |
| Notifications | [Sonner](https://sonner.emilkowal.ski/) |
| Fonts | [Inter (Google Fonts)](https://fonts.google.com/specimen/Inter) |

---

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── (pages)/            # Route groups for each page
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── projects/
│   │   └── skills/
│   ├── actions/            # Server actions
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout (Navbar, Footer, ThemeProvider)
│   └── page.tsx            # Home page
├── components/             # Shared UI components
│   ├── ui/                 # shadcn/ui primitives
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── contact-form.tsx
│   ├── mode-toggle.tsx
│   ├── loading-spinner.tsx
│   └── theme-provider.tsx
├── constants/              # Static data for each section
│   ├── about.constant.ts
│   ├── contact.constant.ts
│   ├── projects.constant.ts
│   └── skills.constant.ts
├── config/
│   └── env.config.ts       # Typed environment variable exports
├── hooks/                  # Custom React hooks
├── lib/                    # Utility helpers
├── services/
│   └── contacts.services.ts  # Contact form Google Forms integration
├── styles/                 # Additional stylesheets
├── types/                  # TypeScript type definitions
├── public/                 # Static assets (images, icons)
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (or pnpm / yarn)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ahsanulhoqueabir/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Copy the environment variable template and fill in the values
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Public base URL of the site
NEXT_PUBLIC_API_SITE_URL=https://ahsanull.com

# JWT secret (used for server-side token operations)
JWT_SECRET=your_jwt_secret_here

# Cloudflare Turnstile — CAPTCHA for the contact form
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

> **Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Keep `JWT_SECRET` and `TURNSTILE_SECRET_KEY` private.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server at `localhost:3000` |
| `npm run build` | Create an optimised production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint checks |

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero / Home — introduction and call-to-action |
| `/about` | About — background, experience, and values |
| `/projects` | Projects — featured and all personal projects |
| `/skills` | Skills — categorised proficiency and certifications |
| `/blog` | Blog — articles and write-ups |
| `/contact` | Contact — form and direct contact details |

---

## Deployment

The project is optimised for **[Vercel](https://vercel.com)**:

1. Push your code to GitHub.
2. Import the repository in the Vercel dashboard.
3. Add all [environment variables](#environment-variables) in the Vercel project settings.
4. Vercel will automatically build and deploy on every push to `main`.

You can also deploy to any platform that supports Node.js (Netlify, Railway, a VPS, etc.) by running:

```bash
npm run build && npm run start
```

---

## Contact

**Md Ahsanul Hoque Abir**
CSE Undergraduate · Jagannath University, Dhaka, Bangladesh

| Channel | Link |
|---|---|
| 🌐 Website | [ahsanull.com](https://ahsanull.com) |
| 📧 Email | [contact.ahsanul@gmail.com](mailto:contact.ahsanul@gmail.com) |
| 📞 Phone | [+880 1875 507852](tel:+8801875507852) |
| 💼 LinkedIn | [linkedin.com/in/ahsanulhoqueabir](https://linkedin.com/in/ahsanulhoqueabir) |
| 🐙 GitHub | [github.com/ahsanulhoqueabir](https://github.com/ahsanulhoqueabir) |

---

> Built with ❤️ by Md Ahsanul Hoque Abir
