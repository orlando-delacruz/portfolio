// Centralized timing tokens. Variants import from here so every
// entrance/hover animation across the site shares the same feel,
// and global timing can be retuned in one place.

export const ease = {
  standard: [0.16, 1, 0.3, 1], // smooth ease-out — good for entrances
};

export const duration = {
  container: 0.8, // whole-section fade-in
  item: 0.6, // heading / description / individual blocks
  button: 0.45, // CTA buttons, social icons
  image: 0.8, // hero image entrance
  hover: 0.2, // hover/tap micro-interactions
  float: 6, // one full float loop — slow and subtle on purpose
};

export const stagger = {
  section: 0.15, // delay between major blocks (heading, buttons, socials)
  group: 0.12, // delay between items inside a group (badge, title, subtitle)
};
