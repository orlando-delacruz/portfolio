import { ease, duration, stagger } from "./transitions";

/* ---------- Generic entrance variants ----------
   Each "visible" state carries its own transition, so any motion
   component can use e.g. `variants={fadeUp}` on its own without also
   passing a separate `transition` prop everywhere it's used. */

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.item, ease: ease.standard },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.item, ease: ease.standard },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.item, ease: ease.standard },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.item, ease: ease.standard },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.item, ease: ease.standard },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.item, ease: ease.standard },
  },
};

/* ---------- Stagger container ----------
   Orchestrates children; itself fades in over `duration.container`.
   Usage: <motion.div variants={staggerContainer()} initial="hidden" whileInView="visible" viewport={defaultViewport}>
   Children just need `variants={fadeUp}` (or any fade* variant) — no
   need to repeat initial/whileInView/viewport on every child; Framer
   Motion propagates the "hidden"/"visible" state down the tree. */
export const staggerContainer = (
  staggerChildren = stagger.section,
  delayChildren = 0,
) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.container,
      ease: ease.standard,
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItem = fadeUp;

/* ---------- Hero image ---------- */

// One-time entrance: fade + slide in from the right.
export const heroImageIn = {
  hidden: { opacity: 0, x: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: duration.image, ease: ease.standard },
  },
};

// Continuous slow float — reusable for any image or decorative element.
// Small amplitude (8px) + slow duration so it reads as "alive," not bouncy.
export const floating = {
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: duration.float,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ---------- Interactive elements ----------
   These intentionally do NOT define hidden/visible — entrance for
   buttons/icons is handled by their parent wrapper's opacity (real
   CSS opacity hides descendants too), so these only need to describe
   hover/tap gestures. Keeps the two concerns from fighting each other. */

export const buttonHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.04,
    y: -3,
    transition: { duration: duration.hover, ease: "easeOut" },
  },
  tap: { scale: 0.97, y: 0, transition: { duration: 0.1, ease: "easeOut" } },
};

export const iconHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.08,
    y: -2,
    transition: { duration: duration.hover, ease: "easeOut" },
  },
  tap: { scale: 0.94, transition: { duration: 0.1, ease: "easeOut" } },
};
