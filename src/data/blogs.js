import Blog1 from "../assets/images/blog/blog-1.webp";
import Blog2 from "../assets/images/blog/blog-2.webp";
import Blog3 from "../assets/images/blog/blog-3.webp";
import Blog4 from "../assets/images/blog/blog-4.webp";

const blogs = [
  // BLOG 1
  {
    slug: "how-i-built-my-first-laravel-project",
    thumbnail: Blog1,
    date: "May 20, 2026",
    duration: "8 Min Read",
    category: "Laravel",
    title: "How I Built My First Laravel Project",
    description:
      "Thinking about learning Laravel? Read about my journey building my very first project, including the concepts that clicked, the mistakes I made, and the lessons that helped me understand modern web development.",
    intro: [
      "Learning Laravel felt overwhelming at first because there were so many concepts to understand. Routing, controllers, models, migrations, authentication, and database relationships all seemed connected in ways I didn't fully understand.",
      "However, building a real project helped me connect those pieces together. Instead of watching endless tutorials, I learned more by creating something practical and solving problems as they appeared.",
    ],
    sections: [
      {
        id: "why-laravel",
        heading: "Why I Chose Laravel",
        paragraphs: [
          "As someone who started with frontend development, I wanted a backend framework that had a strong community, excellent documentation, and practical tools for building web applications.",
          "Laravel stood out because it provides a clean structure and many built-in features that simplify common development tasks such as routing, authentication, database management, and validation.",
        ],
      },
      {
        id: "first-challenges",
        heading: "The First Challenges I Faced",
        paragraphs: [
          "One of the first challenges I encountered was understanding Laravel's MVC architecture.",
          "At first, I struggled to determine where certain logic should live. I often mixed responsibilities between routes, controllers, and views.",
          "As I continued building features, I gradually understood how separating concerns improves maintainability and makes applications easier to manage.",
        ],
      },
      {
        id: "working-with-databases",
        heading: "Working with Databases",
        paragraphs: [
          "Database relationships were another concept that initially felt difficult.",
          "Learning how one-to-many and many-to-many relationships worked required practice, but seeing real data flow between tables made the concepts easier to understand.",
          "Using migrations and Eloquent ORM also helped me appreciate how Laravel simplifies database management.",
        ],
      },
      {
        id: "lessons-learned",
        heading: "Lessons Learned",
        paragraphs: [
          "The biggest lesson I learned is that building projects teaches more than passive learning.",
          "Tutorials are useful for understanding concepts, but real growth happens when you encounter problems, research solutions, and implement them yourself.",
          "Every challenge became an opportunity to understand Laravel more deeply and improve my development skills.",
        ],
      },
    ],
    takeaways: [
      "Build projects while learning.",
      "Focus on understanding MVC architecture.",
      "Learn database relationships through practice.",
      "Read the documentation regularly.",
      "Don't be afraid to make mistakes.",
    ],
    related: [
      "react-vs-vanilla-javascript-for-beginners",
      "understanding-rest-apis-for-frontend-developers",
      "a-beginners-guide-to-git-and-github",
    ],
  },

  // BLOG 2
  {
    slug: "react-vs-vanilla-javascript-for-beginners",
    thumbnail: Blog2,
    date: "May 27, 2026",
    duration: "6 Min Read",
    category: "React",
    title: "React vs Vanilla JavaScript for Beginners",
    description:
      "Should you learn React right away or master JavaScript first? This article compares both approaches, highlighting their strengths, limitations, and when each one makes the most sense.",
    intro: [
      "When you start learning web development, one of the first big questions you'll face is whether to learn React right away or spend more time mastering vanilla JavaScript first.",
      "Both paths have real merit, and the right answer depends on your goals, your timeline, and how you learn best. This article breaks down the trade-offs so you can make an informed choice.",
    ],
    sections: [],
    takeaways: [],
    related: [
      "how-i-built-my-first-laravel-project",
      "understanding-rest-apis-for-frontend-developers",
      "a-beginners-guide-to-git-and-github",
    ],
  },
  // BLOG 3
  {
    slug: "understanding-rest-apis-for-frontend-developers",
    thumbnail: Blog3,
    date: "June 3, 2026",
    duration: "7 Min Read",
    category: "Frontend Development",
    title: "Understanding REST APIs for Frontend Developers",
    description:
      "Think of a REST API as a waiter taking your order to the kitchen. This beginner-friendly guide explains requests, responses, endpoints, and how frontend applications communicate with backend services.",
    intro: [
      "Think of a REST API as a waiter at a restaurant. You tell the waiter what you want, the waiter goes to the kitchen, and the kitchen prepares your order. The waiter then brings the result back to your table.",
      "As a frontend developer, you are the customer placing the order. The API is the waiter. Understanding how that communication works is one of the most important skills you can build early in your career.",
    ],
    sections: [],
    takeaways: [],
    related: [
      "how-i-built-my-first-laravel-project",
      "react-vs-vanilla-javascript-for-beginners",
      "a-beginners-guide-to-git-and-github",
    ],
  },
  // BLOG 4
  {
    slug: "a-beginners-guide-to-git-and-github",
    thumbnail: Blog4,
    date: "June 10, 2026",
    duration: "9 Min Read",
    category: "Tools",
    title: "A Beginner's Guide to Git and GitHub",
    description:
      "Stop fearing the terminal. This step-by-step guide breaks down Git and GitHub into plain English, showing how version control works and why every developer should learn it.",
    intro: [
      "The terminal can look intimidating when you first start. Commands like git commit, git push, and git merge sound technical, but once you understand what they do, version control becomes one of the most freeing tools in your workflow.",
      "This guide walks through Git and GitHub in plain English — no jargon, no assumptions. By the end, you will understand why every developer uses version control and how to start using it yourself.",
    ],
    sections: [],
    takeaways: [],
    related: [
      "how-i-built-my-first-laravel-project",
      "react-vs-vanilla-javascript-for-beginners",
      "understanding-rest-apis-for-frontend-developers",
    ],
  },
];

export const blogData = {
  heading: {
    pretitle: "Blogs",
    title: "Latest Articles &",
    highlight: "Learning Journey",
    ariaLabel: "latest articles",
  },
  blogs,
};

export const blogList = blogs;

export const featured = {
  id: blogs[0].slug,
  badge: "Featured Article",
  thumbnail: blogs[0].thumbnail,
  thumbnailAlt: `${blogs[0].title} - featured article thumbnail`,
  date: blogs[0].date,
  dateTime: "2026-05-20",
  duration: blogs[0].duration,
  title: blogs[0].title,
  description:
    "Building my first Laravel project was both exciting and challenging. In this article, I share how I approached learning Laravel, the mistakes I made, and the lessons that helped me understand backend development more effectively.",
  link: `/blogs/${blogs[0].slug}`,
};

export const hero = {
  breadcrumb: {
    label: "Blogs",
    paths: [],
  },
  pretitle: "BLOGS",
  heading: {
    main: "Articles, Insights, and My",
    highlight: "Learning Journey",
  },
  description:
    "A collection of articles where I share what I learn about web development, frontend technologies, modern tools, and the experiences I gain while building real-world projects.",
  stats: [
    {
      id: "stat-1",
      value: "4+",
      label: "Articles Published",
      ariaLabel: "4 or more articles published",
    },
    {
      id: "stat-2",
      value: "React",
      label: "Main Topic",
      ariaLabel: "Main topic is React",
    },
    {
      id: "stat-3",
      value: "Frontend",
      label: "Primary Focus",
      ariaLabel: "Primary focus is Frontend Development",
    },
  ],
};

export const authorData = {
  name: "Orlando Dela Cruz",
  role: "Web Developer",
  avatar: null,
  description:
    "Frontend-focused web developer sharing lessons, experiences, and insights from building projects and learning modern web technologies.",
};

export const blogDetailData = blogs.reduce((acc, blog) => {
  const {
    slug,
    thumbnail,
    title,
    category,
    date,
    duration,
    intro,
    sections,
    takeaways,
    related,
  } = blog;
  acc[slug] = {
    slug,
    thumbnail,
    thumbnailAlt: `${title} article cover`,
    category,
    categoryKey: category.toLowerCase().replace(/\s+/g, "-"),
    date,
    dateTime: date,
    duration,
    title,
    intro,
    sections,
    takeaways,
    related,
  };
  return acc;
}, {});
