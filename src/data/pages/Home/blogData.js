import Blog1 from "../../../assets/images/blog/blog-1.webp";
import Blog2 from "../../../assets/images/blog/blog-2.webp";
import Blog3 from "../../../assets/images/blog/blog-3.webp";
import Blog4 from "../../../assets/images/blog/blog-4.webp";

const blogData = {
  heading: {
    pretitle: "Blogs",
    title: "Latest Articles &",
    highlight: "Learning Journey",
    ariaLabel: "latest articles",
  },

  blogs: [
    {
      id: "1",
      thumbnail: Blog1,
      date: "May 20, 2026",
      title: "How I Built My First Laravel Project",
      duration: "8 Min Read",
      description:
        "Thinking about learning Laravel? Read about my journey building my very first project, including the concepts that clicked, the mistakes I made, and the lessons that helped me understand modern web development.",
    },
    {
      id: "2",
      thumbnail: Blog2,
      date: "May 27, 2026",
      title: "React vs Vanilla JavaScript for Beginners",
      duration: "6 Min Read",
      description:
        "Should you learn React right away or master JavaScript first? This article compares both approaches, highlighting their strengths, limitations, and when each one makes the most sense.",
    },
    {
      id: "3",
      thumbnail: Blog3,
      date: "June 3, 2026",
      title: "Understanding REST APIs for Frontend Developers",
      duration: "7 Min Read",
      description:
        "Think of a REST API as a waiter taking your order to the kitchen. This beginner-friendly guide explains requests, responses, endpoints, and how frontend applications communicate with backend services.",
    },
    {
      id: "4",
      thumbnail: Blog4,
      date: "June 10, 2026",
      title: "A Beginner's Guide to Git and GitHub",
      duration: "9 Min Read",
      description:
        "Stop fearing the terminal. This step-by-step guide breaks down Git and GitHub into plain English, showing how version control works and why every developer should learn it.",
    },
  ],
};

export default blogData;