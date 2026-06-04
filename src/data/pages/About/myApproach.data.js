import { FiCode, FiEye, FiZap, FiUsers } from "react-icons/fi";

/**
 * @typedef {Object} ApproachCard
 * @property {string} id
 * @property {React.ElementType} icon
 * @property {string} title
 * @property {string} content
 */

/** @type {ApproachCard[]} */
export const approachCards = [
  {
    id: "clean-code",
    icon: FiCode,
    title: "Clean Code",
    content: "Maintainable and scalable code structures.",
  },
  {
    id: "attention-to-detail",
    icon: FiEye,
    title: "Attention to Detail",
    content: "Consistent layouts, spacing, and responsive behavior.",
  },
  {
    id: "problem-solving",
    icon: FiZap,
    title: "Problem Solving",
    content: "Finding practical solutions to development challenges.",
  },
  {
    id: "collaboration",
    icon: FiUsers,
    title: "Collaboration",
    content: "Clear communication with clients and teams.",
  },
];

export const approachHeading = {
  pretitle: "MY APPROACH",
  title: "How I Approach Every",
  highlight: "Project",
  ariaLabel: "My Approach — How I approach every project",
};

export const approachDescription = [
  "I believe successful websites are built through a combination of clean code, thoughtful design implementation, and a strong focus on user experience.",
  "My goal is not only to develop functional interfaces but also to create digital experiences that are reliable, accessible, and easy to maintain.",
];