# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
orlando-portfolio
├─ eslint.config.js
├─ index.html
├─ package.json
├─ public
│  ├─ images
│  │  ├─ logo.webp
│  │  └─ preview.webp
│  ├─ resume.pdf
│  ├─ robots.txt
│  └─ sitemap.xml
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ fonts
│  │  │  ├─ inter-v20-latin-500.woff2
│  │  │  ├─ inter-v20-latin-600.woff2
│  │  │  └─ inter-v20-latin-regular.woff2
│  │  ├─ images
│  │  │  ├─ about-image.webp
│  │  │  ├─ blog
│  │  │  │  ├─ blog-1.webp
│  │  │  │  ├─ blog-2.webp
│  │  │  │  ├─ blog-3.webp
│  │  │  │  └─ blog-4.webp
│  │  │  ├─ cta-vector.webp
│  │  │  ├─ cta.webp
│  │  │  ├─ footer.webp
│  │  │  ├─ hero-image.webp
│  │  │  ├─ logo.webp
│  │  │  ├─ pages
│  │  │  │  └─ about
│  │  │  │     └─ about-hero.webp
│  │  │  ├─ profile-filler.webp
│  │  │  ├─ projects
│  │  │  │  ├─ project-1.webp
│  │  │  │  ├─ project-2.webp
│  │  │  │  ├─ project-3.webp
│  │  │  │  └─ project-4.webp
│  │  │  ├─ services
│  │  │  │  ├─ backend-learning.webp
│  │  │  │  ├─ frontend-development.webp
│  │  │  │  ├─ responsive-design.webp
│  │  │  │  └─ ui-implementation.webp
│  │  │  └─ skills
│  │  │     ├─ adaptability.webp
│  │  │     ├─ ant-design.webp
│  │  │     ├─ attention-to-detail.webp
│  │  │     ├─ bootstrap.webp
│  │  │     ├─ canva.webp
│  │  │     ├─ chrome.webp
│  │  │     ├─ clickup.webp
│  │  │     ├─ communication.webp
│  │  │     ├─ css.webp
│  │  │     ├─ discord.webp
│  │  │     ├─ git.webp
│  │  │     ├─ github.webp
│  │  │     ├─ graphql.webp
│  │  │     ├─ html.webp
│  │  │     ├─ javascript.webp
│  │  │     ├─ laravel.webp
│  │  │     ├─ lighthouse.webp
│  │  │     ├─ php.webp
│  │  │     ├─ problem-solving.webp
│  │  │     ├─ react.webp
│  │  │     ├─ rest.webp
│  │  │     ├─ styled-components.webp
│  │  │     ├─ tailwind.webp
│  │  │     ├─ teamwork.webp
│  │  │     ├─ time-management.webp
│  │  │     ├─ vite.webp
│  │  │     └─ vscode.webp
│  │  ├─ logo.png
│  │  └─ logo.webp
│  ├─ components
│  │  ├─ BreadCrumb
│  │  │  ├─ BreadCrumb.jsx
│  │  │  └─ BreadCrumb.styled.js
│  │  ├─ Buttons
│  │  │  └─ ViewAll
│  │  │     ├─ index.js
│  │  │     └─ ViewAll.jsx
│  │  ├─ CallToAction
│  │  │  ├─ CallToAction.jsx
│  │  │  ├─ CallToAction.styled.js
│  │  │  └─ index.js
│  │  ├─ common
│  │  │  └─ SEO.jsx
│  │  ├─ Footer
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Footer.styled.js
│  │  │  └─ index.js
│  │  ├─ Layout
│  │  │  ├─ index.js
│  │  │  ├─ Layout.jsx
│  │  │  └─ Layout.styled.js
│  │  ├─ Navbar
│  │  │  ├─ index.js
│  │  │  ├─ Navbar.jsx
│  │  │  ├─ Navbar.styled.js
│  │  │  └─ useActiveSection.js
│  │  └─ SectionHeading
│  │     ├─ index.js
│  │     ├─ SectionHeading.jsx
│  │     └─ SectionHeading.styled.js
│  ├─ data
│  │  ├─ cta.js
│  │  ├─ footer.js
│  │  ├─ navbar.js
│  │  ├─ pages
│  │  │  ├─ About
│  │  │  │  ├─ currentGoals.data.js
│  │  │  │  ├─ hero.data.js
│  │  │  │  ├─ myApproach.data.js
│  │  │  │  ├─ quickFacts.data.js
│  │  │  │  ├─ story.data.js
│  │  │  │  └─ whatIDo.data.js
│  │  │  ├─ Home
│  │  │  │  ├─ aboutData.js
│  │  │  │  ├─ experienceData.js
│  │  │  │  ├─ heroData.js
│  │  │  │  ├─ serviceData.js
│  │  │  │  ├─ skillsData.js
│  │  │  │  └─ testimonialsData.js
│  │  │  └─ Project
│  │  │     ├─ hero.data.js
│  │  │     └─ overview.data.js
│  │  └─ project.js
│  ├─ features
│  │  ├─ About
│  │  │  ├─ CurrentGoals
│  │  │  │  ├─ CurrentGoals.jsx
│  │  │  │  ├─ CurrentGoals.styled.js
│  │  │  │  └─ index.js
│  │  │  ├─ Hero
│  │  │  │  ├─ Hero.jsx
│  │  │  │  ├─ Hero.styled.js
│  │  │  │  └─ index.js
│  │  │  ├─ MyApproach
│  │  │  │  ├─ index.js
│  │  │  │  ├─ MyApproach.jsx
│  │  │  │  └─ MyApproach.styled.js
│  │  │  ├─ QuickFacts
│  │  │  │  ├─ index.js
│  │  │  │  ├─ QuickFacts.jsx
│  │  │  │  └─ QuickFacts.styled.js
│  │  │  ├─ Story
│  │  │  │  ├─ index.js
│  │  │  │  ├─ Story.jsx
│  │  │  │  └─ Story.styled.js
│  │  │  └─ WhatIDo
│  │  │     ├─ index.js
│  │  │     ├─ WhatIDo.jsx
│  │  │     └─ WhatIDo.styled.js
│  │  ├─ Blog
│  │  │  ├─ BlogList
│  │  │  │  ├─ BlogCard.jsx
│  │  │  │  ├─ BlogList.jsx
│  │  │  │  ├─ BlogList.styled.js
│  │  │  │  └─ index.js
│  │  │  ├─ Featured
│  │  │  │  ├─ Featured.jsx
│  │  │  │  ├─ Featured.styled.js
│  │  │  │  └─ index.js
│  │  │  └─ Hero
│  │  │     ├─ Hero.jsx
│  │  │     ├─ Hero.styled.js
│  │  │     └─ index.js
│  │  ├─ BlogDetail
│  │  │  ├─ Content
│  │  │  │  ├─ Content.jsx
│  │  │  │  ├─ Content.styled.js
│  │  │  │  └─ index.js
│  │  │  └─ Hero
│  │  │     ├─ Hero.jsx
│  │  │     ├─ Hero.styled.js
│  │  │     └─ index.js
│  │  ├─ Contact
│  │  ├─ Home
│  │  │  ├─ AboutSection
│  │  │  │  ├─ AboutSection.jsx
│  │  │  │  ├─ AboutSection.styled.js
│  │  │  │  └─ index.js
│  │  │  ├─ BlogSection
│  │  │  │  ├─ BlogSection.jsx
│  │  │  │  ├─ BlogSection.styled.js
│  │  │  │  └─ index.js
│  │  │  ├─ ExperienceSection
│  │  │  │  ├─ ExperienceSection.jsx
│  │  │  │  ├─ ExperienceSection.styled.js
│  │  │  │  └─ index.js
│  │  │  ├─ HeroSection
│  │  │  │  ├─ HeroSection.jsx
│  │  │  │  ├─ HeroSection.styled.js
│  │  │  │  └─ index.js
│  │  │  ├─ ProjectsSection
│  │  │  │  ├─ index.js
│  │  │  │  ├─ ProjectsSection.jsx
│  │  │  │  └─ ProjectsSection.styled.js
│  │  │  ├─ ServiceSection
│  │  │  │  ├─ index.js
│  │  │  │  ├─ ServiceSection.jsx
│  │  │  │  └─ ServiceSection.styled.js
│  │  │  ├─ SkillSection
│  │  │  │  ├─ index.js
│  │  │  │  ├─ SkillSection.jsx
│  │  │  │  └─ SkillSection.styled.js
│  │  │  └─ TestimonialSection
│  │  │     ├─ index.js
│  │  │     ├─ StarRating.jsx
│  │  │     ├─ TestimonialCard.jsx
│  │  │     ├─ TestimonialSection.jsx
│  │  │     ├─ TestimonialSection.styled.js
│  │  │     └─ useTestimonialSlider.js
│  │  └─ Project
│  │     ├─ Filter
│  │     │  ├─ Filter.jsx
│  │     │  ├─ Filter.styled.js
│  │     │  └─ index.js
│  │     ├─ Hero
│  │     │  ├─ Hero.jsx
│  │     │  ├─ Hero.styled.js
│  │     │  └─ index.js
│  │     ├─ Overview
│  │     │  ├─ index.js
│  │     │  ├─ Overview.jsx
│  │     │  └─ Overview.styled.js
│  │     ├─ ProjectDetail
│  │     │  ├─ index.js
│  │     │  ├─ ProjectDetail.jsx
│  │     │  └─ ProjectDetail.styled.js
│  │     └─ ProjectGrid
│  │        ├─ index.js
│  │        ├─ ProjectCard.jsx
│  │        ├─ ProjectGrid.jsx
│  │        └─ ProjectGrid.styled.js
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ AboutPage
│  │  │  ├─ AboutPage.jsx
│  │  │  └─ index.js
│  │  ├─ BlogDetailPage
│  │  │  ├─ BlogDetailPage.jsx
│  │  │  └─ index.js
│  │  ├─ BlogPage
│  │  │  ├─ BlogPage.jsx
│  │  │  └─ index.js
│  │  ├─ ComingSoon.jsx
│  │  ├─ HomePage
│  │  │  ├─ HomePage.jsx
│  │  │  └─ index.js
│  │  ├─ ProjectDetailPage
│  │  │  ├─ index.js
│  │  │  └─ ProjectDetailPage.jsx
│  │  └─ ProjectPage
│  │     ├─ index.js
│  │     └─ ProjectPage.jsx
│  ├─ routes
│  │  └─ AppRoutes.jsx
│  ├─ services
│  ├─ styles
│  │  ├─ fonts.css
│  │  ├─ global.js
│  │  ├─ theme.css
│  │  └─ theme.js
│  └─ utils
│     ├─ convert-images.mjs
│     └─ ScrollToTop.jsx
├─ vercel.json
├─ vite.config.js
└─ yarn.lock

```