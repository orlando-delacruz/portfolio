import {
  FiCode,
  FiLayout,
  FiMonitor,
  FiTrendingUp,
} from "react-icons/fi";

/**
 * @typedef {Object} WhatIDoCard
 * @property {string} id
 * @property {React.ElementType} icon
 * @property {string} title
 * @property {string} content
 * @property {string} ariaLabel
 */

/** @type {WhatIDoCard[]} */
export const whatIDoCards = [
  {
    id: "frontend-development",
    icon: FiCode,
    title: "Frontend Development",
    content:
      "Building responsive and interactive user interfaces using React, JavaScript, and modern frontend technologies.",
    ariaLabel: "Frontend Development service",
  },
  {
    id: "responsive-web-design",
    icon: FiMonitor,
    title: "Responsive Web Design",
    content:
      "Creating websites that provide a seamless experience across desktop, tablet, and mobile devices.",
    ariaLabel: "Responsive Web Design service",
  },
  {
    id: "ui-implementation",
    icon: FiLayout,
    title: "UI Implementation",
    content:
      "Transforming Figma designs into functional, pixel-accurate, and responsive web pages.",
    ariaLabel: "UI Implementation service",
  },
  {
    id: "continuous-learning",
    icon: FiTrendingUp,
    title: "Continuous Learning",
    content:
      "Expanding my expertise in Laravel, APIs, backend systems, and modern development workflows.",
    ariaLabel: "Continuous Learning service",
  },
];

export const whatIDoHeading = {
  pretitle: "WHAT I DO",
  title: "Areas Where I Create",
  highlight: "Value",
  ariaLabel: "What I do — areas where I create value",
};