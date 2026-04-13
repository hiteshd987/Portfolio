# Portfolio

A modern, responsive portfolio built to showcase my personal and professional projects, highlighting my skills in AI/ML, Software Engineering, and Web Development. 

This project is built with [Next.js](https://nextjs.org) (App Router) and features smooth animations, a custom dark/light mode toggle, and an interactive UI.

## ✨ Key Features

- **Custom Theme Management:** Fully integrated Light, Dark, and System theme toggling using a custom `ThemeContext` and Tailwind CSS. Includes glassmorphism effects tailored for dark mode.
- **Interactive Project Carousel:** An infinite, circular project carousel built with Framer Motion, featuring dynamic modals for deep-dives into project details.
- **Fluid Animations:** Scroll-triggered reveal animations, parallax backgrounds, and typewriter effects to create an engaging user experience.
- **Responsive Mobile-First Design:** Carefully crafted breakpoints and flexible layouts to ensure the portfolio looks perfect on devices of all sizes.
- **Interactive Timeline:** A visually distinct, animated vertical timeline detailing education and work experience.

## 🛠️ Tech Stack & Libraries

- **Framework:** Next.js (App Router), React
- **Styling:** Tailwind CSS (v4)
- **Animation:** Framer Motion
- **Icons:** React Icons
- **UI Components:** - `react-scroll` (Smooth navigation)
  - `react-parallax` (Profile background effect)
  - `react-vertical-timeline-component` (Experience timeline)
  - `typewriter-effect` (Dynamic text rendering)

## 📂 Folder Structure

```text
├── app/
│   ├── globals.css        # Tailwind directives and custom CSS animations
│   ├── layout.js          # Root layout, injects ThemeProvider and handles initial theme load
│   └── page.js            # Main homepage assembling all components
│
├── components/
│   ├── ThemeContext.js    # Context API for managing Light/Dark/System preferences
│   ├── Navbar.js          # Sticky navigation bar with mobile hamburger menu
│   ├── Profile.js         # Hero section with parallax and typewriter effects
│   ├── Projects.js        # Infinite scrolling carousel and detailed project modals
│   ├── Timeline.js        # Professional and educational history timeline
│   ├── Skills.js          # Themed skill grid with hover interactions
│   └── Footer.js          # Social links and copyright
```

## 💻 Getting Started

To install all the required dependencies after cloning or downloading the project run:

```bash
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🌐 Live Demo

Check out the live version of this portfolio here: **https://portfolio-hiteshwd.vercel.app/**

## 📫 Let's Connect

Whether you have a question about AI/ML, a project idea, or just want to say hi, my inbox is always open!

- **LinkedIn:** [Hitesh Derkar](https://www.linkedin.com/in/hitesh-derkar-151aa7147/)
- **GitHub:** [@hiteshd987](https://github.com/hiteshd987)

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
