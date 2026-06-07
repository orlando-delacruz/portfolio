import Blog1 from "../../../assets/images/blog/blog-1.webp";
import Blog2 from "../../../assets/images/blog/blog-2.webp";
import Blog3 from "../../../assets/images/blog/blog-3.webp";
import Blog4 from "../../../assets/images/blog/blog-4.webp";

const blogList = [
  {
    id: "1",
    thumbnail: Blog1,
    thumbnailAlt: "How I Built My First Laravel Project article thumbnail",
    date: "May 20, 2026",
    dateTime: "2026-05-20",
    duration: "8 Min Read",
    category: "Laravel",
    title: "How I Built My First Laravel Project",
    description:
      "Thinking about learning Laravel? Read about my journey building my very first project, including the concepts that clicked, the mistakes I made, and the lessons that helped me understand modern web development.",
    slug: "how-i-built-my-first-laravel-project",
  },
  {
    id: "2",
    thumbnail: Blog2,
    thumbnailAlt: "React vs Vanilla JavaScript for Beginners article thumbnail",
    date: "May 27, 2026",
    dateTime: "2026-05-27",
    duration: "6 Min Read",
    category: "React",
    title: "React vs Vanilla JavaScript for Beginners",
    description:
      "Should you learn React right away or master JavaScript first? This article compares both approaches, highlighting their strengths, limitations, and when each one makes the most sense.",
    slug: "react-vs-vanilla-javascript-for-beginners",
  },
  {
    id: "3",
    thumbnail: Blog3,
    thumbnailAlt: "Understanding REST APIs for Frontend Developers article thumbnail",
    date: "June 3, 2026",
    dateTime: "2026-06-03",
    duration: "7 Min Read",
    category: "Frontend Development",
    title: "Understanding REST APIs for Frontend Developers",
    description:
      "Think of a REST API as a waiter taking your order to the kitchen. This beginner-friendly guide explains requests, responses, endpoints, and how frontend applications communicate with backend services.",
    slug: "understanding-rest-apis-for-frontend-developers",
  },
  {
    id: "4",
    thumbnail: Blog4,
    thumbnailAlt: "A Beginner's Guide to Git and GitHub article thumbnail",
    date: "June 10, 2026",
    dateTime: "2026-06-10",
    duration: "9 Min Read",
    category: "Tools",
    title: "A Beginner's Guide to Git and GitHub",
    description:
      "Stop fearing the terminal. This step-by-step guide breaks down Git and GitHub into plain English, showing how version control works and why every developer should learn it.",
    slug: "a-beginners-guide-to-git-and-github",
  },
];

export default blogList;