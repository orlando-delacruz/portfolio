#!/usr/bin/env node
/**
 * Hygraph content seeder — portfolio dynamic content.
 *
 * Inserts the previous static copy (recovered from git history) into the
 * models created by scripts/hygraph-migrate-schema.mjs, then publishes.
 *
 * IDEMPOTENT: every entry is existence-checked first (unique slug/key,
 * singletons via first:1). Re-runs skip existing entries — never duplicates.
 * ASSETS ARE SKIPPED: upload images in the Hygraph UI and attach them after.
 *
 * Prerequisites:
 *   npm install graphql-request   (already a project dependency)
 *   A token with Content API MUTATION + PUBLISH rights on master.
 *   (The app's read-only token cannot write — mint a separate one.)
 *
 * Usage (token is NEVER stored in this file — pass it explicitly):
 *   node scripts/hygraph-seed-content.mjs --endpoint <MASTER_CONTENT_ENDPOINT> --token <WRITE_TOKEN> [--dry-run]
 *   # or via env: HYGRAPH_CONTENT_ENDPOINT / HYGRAPH_WRITE_TOKEN
 */

import { GraphQLClient } from "graphql-request";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, cur, i, arr) => {
    if (cur.startsWith("--")) {
      const key = cur.slice(2);
      const next = arr[i + 1];
      acc.push([key, next && !next.startsWith("--") ? next : true]);
    }
    return acc;
  }, []),
);

const endpoint = args.endpoint || process.env.HYGRAPH_CONTENT_ENDPOINT;
const token = args.token || process.env.HYGRAPH_WRITE_TOKEN;
const dryRun = Boolean(args["dry-run"]);

if (!endpoint || !token) {
  console.error(
    "Missing endpoint/token.\n" +
      "Usage: node scripts/hygraph-seed-content.mjs --endpoint <MASTER_ENDPOINT> --token <WRITE_TOKEN> [--dry-run]",
  );
  process.exit(1);
}

/** Build a minimal valid RichText AST from plain paragraphs. */
const toRichText = (paragraphs) => ({
  children: paragraphs.map((text) => ({ type: "paragraph", children: [{ text }] })),
});

// ─── Seed payloads (recovered from git history of src/data/*) ───
// Each entry: { model, list, unique: {field, value} | {singleton: true}, data }

const ENTRIES = [
  // — Section headings (10) —
  ...[
    ["home-projects", "Featured Projects", "My Projects", "Showcase"],
    ["home-blog", "Blogs", "Latest Articles &", "Learning Journey"],
    ["home-skills", "Skills & Technologies", "My Tech", "Stack"],
    ["home-services", "Services", "What I Can", "Offer"],
    ["home-experience", "Experience", "My Development", "Journey"],
    ["home-testimonials", "Testimonials", "What People", "Say"],
    ["about-whatido", "WHAT I DO", "Areas Where I Create", "Value"],
    ["about-approach", "MY APPROACH", "How I Approach Every", "Project"],
    ["contact-info", "CONTACT INFORMATION", "Get in Touch", "With Me"],
    ["contact-faq", "FAQ", "Frequently Asked", "Questions"],
  ].map(([key, pretitle, title, highlight]) => ({
    model: "SectionHeading", list: "sectionHeadings",
    unique: { field: "key", value: key },
    data: { key, pretitle, title, highlight },
  })),

  // — Page heroes (5, keyed) —
  {
    model: "PageHero", list: "pageHeroes",
    unique: { field: "key", value: "home" },
    data: {
      key: "home",
      label: "Front-End Developer",
      title: "I am",
      highlightTitle: "Orlando Dela Cruz",
      subtitle: "I craft clean, responsive, and user-focused web interfaces with a passion for modern design and performance.",
      primaryLabel: "View Projects",
      primaryLink: "#projects",
      secondaryLabel: "Download CV",
    },
  },
  {
    model: "PageHero", list: "pageHeroes",
    unique: { field: "key", value: "about" },
    data: {
      key: "about",
      label: "About Me",
      title: "Building Digital",
      highlight: "Experiences",
      subheading: "Orlando Dela Cruz · Front-End Developer",
    },
  },
  {
    model: "PageHero", list: "pageHeroes",
    unique: { field: "key", value: "project" },
    data: {
      key: "project",
      pretitle: "PROJECTS",
      headingMain: "Projects I've Built Throughout My",
      headingHighlight: "Development Journey",
      description: "A collection of academic, freelance, and personal projects that showcase my skills in frontend development, responsive design, content management systems, and modern web technologies.",
    },
  },
  {
    model: "PageHero", list: "pageHeroes",
    unique: { field: "key", value: "blog" },
    data: {
      key: "blog",
      pretitle: "BLOGS",
      headingMain: "Articles, Insights, and My",
      headingHighlight: "Learning Journey",
      description: "A collection of articles where I share what I learn about web development, frontend technologies, modern tools, and the experiences I gain while building real-world projects.",
    },
  },
  {
    model: "PageHero", list: "pageHeroes",
    unique: { field: "key", value: "contact" },
    data: {
      key: "contact",
      pretitle: "CONTACT",
      title: "Let's Build Something",
      highlight: "Great Together",
      description: "I'm always open to freelance opportunities, collaborations, or simply discussing your next project. Feel free to reach out — I'd love to hear from you.",
    },
  },

  // — Social links: hero socials (4) + hero skills (3) + footer socials (5) —
  ...[
    ["github", "Visit my Github", "https://github.com/orlando-delacruz", null, "github", "hero-socials"],
    ["linkedin", "Visit my LinkedIn", "https://www.linkedin.com/in/orlando-jr-dela-cruz-127998273/", null, "linkedin", "hero-socials"],
    ["facebook", "Visit my Facebook", "https://web.facebook.com/orlando.arcangel/", null, "facebook", "hero-socials"],
    ["gmail", "Send me an Email", "mailto:orlando.delacruz.dev@gmail.com", null, "mail", "hero-socials"],
    ["skill-react", "React", null, "#00BCD4", "react", "hero-skills"],
    ["skill-javascript", "JavaScript", null, "#F7DF1E", "javascript", "hero-skills"],
    ["skill-nextjs", "Next.js", null, "#FFFFFF", "nextjs", "hero-skills"],
    ["footer-github", "Visit my GitHub profile", "https://github.com/orlando-delacruz", null, "github", "footer-socials"],
    ["footer-linkedin", "Visit my LinkedIn profile", "https://www.linkedin.com/in/orlando-jr-dela-cruz-127998273/", null, "linkedin", "footer-socials"],
    ["footer-mail", "Send me an email", "mailto:orlando.delacruz.dev@gmail.com", null, "mail", "footer-socials"],
    ["footer-phone", "Call me", "tel:+639095984478", null, "phone", "footer-socials"],
    ["footer-facebook", "Visit my Facebook profile", "https://web.facebook.com/orlando.arcangel/", null, "facebook", "footer-socials"],
  ].map(([platform, label, url, color, iconKey, placement], i) => ({
    model: "SocialLink", list: "socialLinks",
    unique: { field: "platform", value: platform },
    data: { platform, label, ...(url ? { url } : {}), ...(color ? { color } : {}), iconKey, placement, order: i % 10 },
  })),

  // — Home about (singleton) —
  {
    model: "HomeAbout", list: "homeAbouts", unique: { singleton: true },
    data: {
      pretitle: "About Me",
      title: "My Development",
      titleHighlight: "Journey",
      body1: "I started my journey in web development by learning HTML, CSS, and JavaScript, eventually progressing into React and modern frontend development. Currently, I am expanding my expertise into backend technologies such as Laravel, APIs, authentication systems, and database management.",
      body2: "I enjoy building real-world projects that improve both my technical skills and problem-solving abilities while continuously learning modern web development best practices.",
      imageAlt: "Orlando showing UI holograms",
      ctaLabel: "Learn More About Me",
      ctaLink: "/about",
    },
  },

  // — Feature cards: services (4) + what-i-do (4) + approach (4) —
  ...[
    ["frontend", "home-services", "Frontend Development", "Building responsive and interactive user interfaces using modern frontend technologies and component-based architecture.", null, "React · JS", "code"],
    ["responsive", "home-services", "Responsive Design", "Designing websites optimized for desktop, tablet, and mobile devices with clean and accessible layouts.", null, "Mobile-first", "monitor"],
    ["ui", "home-services", "UI Implementation", "Converting Figma and design mockups into fully functional and responsive web pages.", null, "Figma → Code", "layout"],
    ["backend", "home-services", "Backend System Learning", "Developing backend knowledge in APIs, authentication systems, databases, and Laravel application structure.", null, "Laravel · REST", "zap"],
    ["frontend-development", "about-whatido", "Frontend Development", null, "Building responsive and interactive user interfaces using React, JavaScript, and modern frontend technologies.", null, "code"],
    ["responsive-web-design", "about-whatido", "Responsive Web Design", null, "Creating websites that provide a seamless experience across desktop, tablet, and mobile devices.", null, "monitor"],
    ["ui-implementation", "about-whatido", "UI Implementation", null, "Transforming Figma designs into functional, pixel-accurate, and responsive web pages.", null, "layout"],
    ["continuous-learning", "about-whatido", "Continuous Learning", null, "Expanding my expertise in Laravel, APIs, backend systems, and modern development workflows.", null, "trending-up"],
    ["clean-code", "about-approach", "Clean Code", null, "Maintainable and scalable code structures.", null, "code"],
    ["attention-to-detail", "about-approach", "Attention to Detail", null, "Consistent layouts, spacing, and responsive behavior.", null, "eye"],
    ["problem-solving", "about-approach", "Problem Solving", null, "Finding practical solutions to development challenges.", null, "zap"],
    ["collaboration", "about-approach", "Collaboration", null, "Clear communication with clients and teams.", null, "users"],
  ].map(([slug, section, title, description, content, tag, iconKey], i) => ({
    model: "FeatureCard", list: "featureCards",
    unique: { field: "slug", value: slug },
    data: { slug, section, title, ...(description ? { description } : {}), ...(content ? { content } : {}), ...(tag ? { tag } : {}), iconKey, order: i % 10 },
  })),

  // — Experience (2) —
  ...[
    ["intern-monte-carlo", "February – May 2026", "Web Development Intern", "Monte Carlo Technologies", "Worked on responsive page development, UI implementation, backend QA testing, page optimization, and frontend enhancements for company projects and client websites."],
    ["freelance-web-dev", "April 2025 – Present", "Web Developer", "Freelance", "Developed responsive, user-friendly websites using modern technologies like React, collaborating directly with clients and teams to deliver tailored design, UX, and accessibility solutions."],
  ].map(([slug, date, position, company, description], i) => ({
    model: "Experience", list: "experiences",
    unique: { field: "slug", value: slug },
    data: { slug, date, position, company, description, order: i },
  })),

  // — Testimonials (6) —
  ...[
    ["Richard Guevara", "Internship Supervisor", "A highly motivated developer who is eager to learn modern technologies and continuously improve both technical and problem-solving skills."],
    ["Dhennis Nizal", "Full Stack Developer", "Working with Orlando during our capstone project was a great experience. He consistently delivered his tasks on time, communicated well with the team, and showed strong dedication to building a quality product."],
    ["Jorence Mendoza", "Full Stack Developer", "Orlando was a reliable teammate throughout our capstone project. He contributed effectively to the development process and was always willing to collaborate and solve challenges with the team."],
    ["Gabriel Villanueva", "Full Stack Developer", "I had the opportunity to work with Orlando on several projects at Monte Carlo Technologies. He is detail-oriented, easy to work with, and consistently focused on delivering functional and user-friendly solutions."],
    ["Darcy Tabafunda", "TWA Student", "Orlando developed our Classic English research website and exceeded our expectations. He was responsive, professional, and successfully transformed our requirements into a clean and functional website."],
    ["Maan Managbanag", "Teacher, SANHS", "Orlando and his team developed the SANHS website with professionalism and dedication. He listened carefully to our needs and delivered a solution that effectively represented our school online."],
  ].map(([name, position, quote], i) => ({
    model: "Testimonial", list: "testimonials",
    unique: { field: "name", value: name },
    data: { name, position, quote, rating: 5, order: i },
  })),

  // — Content blocks (4, keyed) —
  {
    model: "ContentBlock", list: "contentBlocks",
    unique: { field: "key", value: "about-story" },
    data: {
      key: "about-story",
      pretitle: "MY STORY",
      title: "From Curiosity to",
      highlight: "Web Development",
      imageAlt: "A developer working at a desk surrounded by code and creative tools",
      paragraphs: toRichText([
        "My journey into web development began with a curiosity about how websites work behind the scenes. What started as learning HTML, CSS, and JavaScript eventually grew into a passion for creating digital experiences that are both functional and visually engaging.",
        "As I continued learning, I explored modern frontend technologies such as React, responsive design principles, component-based architecture, and UI implementation. Through academic projects, freelance work, and internship experience, I gained valuable exposure to real-world development workflows and collaborative environments.",
        "Today, I focus on building user-friendly web interfaces while continuously expanding my knowledge of backend technologies, striving to become a well-rounded developer.",
      ]),
    },
  },
  {
    model: "ContentBlock", list: "contentBlocks",
    unique: { field: "key", value: "approach-intro" },
    data: {
      key: "approach-intro",
      paragraphs: toRichText([
        "I believe successful websites are built through a combination of clean code, thoughtful design implementation, and a strong focus on user experience.",
        "My goal is not only to develop functional interfaces but also to create digital experiences that are reliable, accessible, and easy to maintain.",
      ]),
    },
  },
  {
    model: "ContentBlock", list: "contentBlocks",
    unique: { field: "key", value: "current-goals" },
    data: {
      key: "current-goals",
      pretitle: "LOOKING AHEAD",
      title: "Growing Beyond",
      highlight: "Frontend Development",
      paragraphs: toRichText([
        "While frontend development remains my primary focus, I am actively expanding my knowledge of backend development, APIs, authentication systems, and database management.",
        "My long-term goal is to become a well-rounded full stack developer capable of building complete web applications that solve real-world problems and deliver meaningful value to users.",
      ]),
      tags: ["Laravel", "REST APIs", "Authentication", "Database Design", "Full Stack", "Node.js"],
    },
  },
  {
    model: "ContentBlock", list: "contentBlocks",
    unique: { field: "key", value: "project-overview" },
    data: {
      key: "project-overview",
      headingMain: "Building Solutions Through",
      headingHighlight: "Real-World Projects",
      paragraphs: toRichText([
        "Each project represents a step in my development journey, helping me strengthen my technical skills, problem-solving abilities, and understanding of modern web development workflows.",
        "From personal portfolio websites to freelance client projects and academic systems, every project has provided valuable lessons — in architecture decisions, performance trade-offs, and the art of translating design into living, responsive interfaces.",
      ]),
    },
  },

  // — Quick facts (4) —
  ...[
    ["Role", "Frontend Web Developer"],
    ["Experience", "Freelance & Internship"],
    ["Focus", "React & Modern Frontend Development"],
    ["Availability", "Open for Opportunities"],
  ].map(([label, value], i) => ({
    model: "QuickFact", list: "quickFacts",
    unique: { field: "label", value: label },
    data: { label, value, order: i },
  })),

  // — Contact channels (4) —
  ...[
    ["email", "Email", "orlando.delacruz.dev@gmail.com", "mailto:orlando.delacruz.dev@gmail.com", "I'll get back to you within 24 hours.", "mail"],
    ["phone", "Phone", "+63 909 598 4478", "tel:+639095984478", "Available for urgent inquiries.", "call"],
    ["location", "Location", "San Antonio, Quezon, Philippines", "https://maps.google.com/?q=San+Antonio+Quezon+Philippines", "Open to remote and on-site opportunities.", "location"],
    ["availability", "Availability", "Open for Opportunities", null, "Freelance · Internship · Full-time", "time"],
  ].map(([slug, title, value, href, description, iconKey], i) => ({
    model: "ContactChannel", list: "contactChannels",
    unique: { field: "slug", value: slug },
    data: { slug, title, value, ...(href ? { href } : {}), description, iconKey, order: i },
  })),

  // — FAQ (6) —
  ...[
    ["What services do you offer?", "I specialize in frontend web development, responsive design, UI implementation, and modern web technologies including React, JavaScript, Styled Components, and Tailwind CSS. I also have experience with backend technologies like Laravel and REST APIs."],
    ["How long does a project take?", "Timelines vary depending on project scope and complexity. A simple landing page might take 1-2 weeks, while a full-featured web application could take 1-3 months. I work closely with clients to establish realistic timelines and deliver on schedule."],
    ["What technologies do you use?", "My primary stack includes React, JavaScript, Styled Components, and CSS. I also work with Laravel, GraphQL, REST APIs, and various CMS platforms. I'm always learning new technologies to stay current with industry trends."],
    ["Do you accept freelance work?", "Yes! I'm currently open to freelance projects, collaborations, and part-time opportunities. Whether you need a new website, a redesign, or ongoing maintenance, I'd be happy to discuss how I can help."],
    ["Can you work with existing designs?", "Absolutely. I frequently work with Figma, Adobe XD, and other design tools to convert mockups into pixel-perfect, responsive web pages. I ensure the final product matches the design while maintaining clean, maintainable code."],
    ["Do you provide post-launch support?", "Yes, I offer ongoing support and maintenance for projects I build. This includes bug fixes, updates, performance optimizations, and feature enhancements to ensure your website remains secure and up-to-date."],
  ].map(([question, answer], i) => ({
    model: "FaqItem", list: "faqItems",
    unique: { field: "question", value: question },
    data: { question, answer, order: i },
  })),

  // — Footer (singleton) + links (17) —
  {
    model: "FooterContent", list: "footerContents", unique: { singleton: true },
    data: {
      title: "Orlando Dela Cruz",
      subtitle: "Web Developer",
      description: "Web developer focused on building responsive and scalable modern web applications.",
      logoAlt: "Orlando Dela Cruz Logo",
    },
  },
  ...[
    ["Home", "/", "page", "quick", null],
    ["About", "/about", "page", "quick", null],
    ["Projects", "/projects", "page", "quick", null],
    ["Blogs", "/blogs", "page", "quick", null],
    ["Contact", "/contact", "page", "quick", null],
    ["Skills", "#skills", "section", "quick", null],
    ["Services", "#services", "section", "quick", null],
    ["Testimonials", "#testimonials", "section", "quick", null],
    ["Experience", "#experience", "section", "quick", null],
    ["Home Page", "/", "page", "pages", null],
    ["About Page", "/about", "page", "pages", null],
    ["Project Page", "/projects", "page", "pages", null],
    ["Blog Page", "/blogs", "page", "pages", null],
    ["Contact Page", "/contact", "page", "pages", null],
    ["Brgy. Bagong Niing, San Antonio, Quezon", "https://maps.google.com/?q=San+Antonio+Quezon+Philippines", "external", "contact", "location"],
    ["09095984478", "tel:+639095984478", "external", "contact", "phone"],
    ["orlando.delacruz.dev@gmail.com", "mailto:orlando.delacruz.dev@gmail.com", "external", "contact", "mail"],
  ].map(([label, href, linkType, group, iconKey], i) => ({
    model: "FooterLink", list: "footerLinks",
    unique: { field: "label", value: label },
    data: { label, href, linkType, group, ...(iconKey ? { iconKey } : {}), order: i },
  })),

  // — CTA (singleton) —
  {
    model: "CtaContent", list: "ctaContents", unique: { singleton: true },
    data: {
      title: "Let's Build Something Amazing Together",
      description: "I'm currently open to freelance projects, collaborations, and junior web developer roles.",
      primaryLabel: "Contact Me",
      primaryHref: "mailto:orlando.delacruz.dev@gmail.com",
      secondaryLabel: "View Resume",
      secondaryHref: "/resume.pdf",
      imageAlt: "Developer workspace illustration for the call-to-action section",
    },
  },
];

console.log(`Seed plan: ${ENTRIES.length} entries across ${new Set(ENTRIES.map((e) => e.model)).size} models.`);
if (dryRun) {
  for (const e of ENTRIES) {
    const id = e.unique.singleton ? "(singleton)" : `${e.unique.field}=${JSON.stringify(e.unique.value)}`;
    console.log(`- create${e.model} ${id}`);
  }
  console.log("Dry run — no requests sent. Re-run without --dry-run to seed.");
  process.exit(0);
}

const client = new GraphQLClient(endpoint, { headers: { Authorization: `Bearer ${token}` } });

const exists = async (entry) => {
  const { list, unique } = entry;
  const query = unique.singleton
    ? `query Check { ${list}(first: 1) { id } }`
    : `query Check($v: String) { ${list}(where: { ${unique.field}: $v }, first: 1) { id } }`;
  const vars = unique.singleton ? {} : { v: unique.value };
  try {
    const data = await client.request(query, vars);
    return (data[list] || [])[0]?.id || null;
  } catch (err) {
    throw new Error(`Existence check failed for ${entry.model}: ${err.message}`);
  }
};

let created = 0;
let skipped = 0;
for (const entry of ENTRIES) {
  const idLabel = entry.unique.singleton ? "(singleton)" : `${entry.unique.field}=${entry.unique.value}`;
  const existing = await exists(entry).catch((err) => {
    console.error(`✕ ${entry.model} ${idLabel}: ${err.message}`);
    process.exitCode = 1;
    return "ERROR";
  });
  if (existing === "ERROR") continue;
  if (existing) {
    console.log(`= skip ${entry.model} ${idLabel} (already exists: ${existing})`);
    skipped++;
    continue;
  }
  try {
    const createdData = await client.request(
      `mutation Create($data: ${entry.model}CreateInput!) { create${entry.model}(data: $data) { id } }`,
      { data: entry.data },
    );
    const id = createdData[`create${entry.model}`].id;
    await client.request(
      `mutation Publish($id: ID!) { publish${entry.model}(where: { id: $id }, to: PUBLISHED) { id } }`,
      { id },
    );
    console.log(`+ created+published ${entry.model} ${idLabel} (${id})`);
    created++;
  } catch (err) {
    console.error(`✕ ${entry.model} ${idLabel}: ${err.message}`);
    process.exitCode = 1;
  }
}

console.log(`Done: ${created} created, ${skipped} skipped.`);
console.log("Next: upload images in Hygraph UI and attach them (hero, about, avatars, CTA, footer bg/logo, story, contact).");
