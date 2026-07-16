// src/animations/variants.js
import { ease, duration, stagger } from "./transitions";

/* ---------- Generic entrance variants ---------- */

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

/* ---------- Stagger containers ---------- */

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

// Same orchestration as staggerContainer, but the container itself also
// slides in from a direction. Useful when a whole content block should
// enter from one side while its own children reveal in sequence
// (e.g. About's text column entering from the right while its
// title/description/button stagger in below it).
export const staggerContainerFrom = (
  direction = "up",
  staggerChildren = stagger.section,
  delayChildren = 0,
) => {
  const offsets = {
    up: { y: 32 },
    down: { y: -32 },
    left: { x: -32 },
    right: { x: 32 },
  };
  const offset = offsets[direction] ?? offsets.up;

  return {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration.container,
        ease: ease.standard,
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const staggerItem = fadeUp;

/* ---------- Hero image (kept for reuse, no longer used in Hero itself) ---------- */

export const heroImageIn = {
  hidden: { opacity: 0, x: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: duration.image, ease: ease.standard },
  },
};

// Continuous slow float. Small amplitude (8px), slow duration —
// reads as "alive," not bouncy. Pair with a separate wrapper element
// so it never fights an entrance animation's transform on the same node.
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

/* ---------- Interactive elements ---------- */

// hidden/visible: entrance, for buttons that are direct stagger
// children with no wrapping container of their own.
// rest: explicit opt-out state for buttons whose entrance is instead
// handled by a parent wrapper's opacity (e.g. Hero's two-button group).
// hover/tap: gesture states, always active regardless of the above.
export const buttonHover = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.button, ease: ease.standard },
  },
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

export const cardIn = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: duration.item, ease: ease.standard },
  },
};

// Subtle lift on hover for cards/images/panels. Only animates `y`
// (transform) — pair with a plain CSS box-shadow/border transition
// for the rest of the "lift" effect so Motion and CSS never fight
// over the same property on the same element.
export const hoverLift = {
  hover: { y: -6, transition: { duration: duration.hover, ease: "easeOut" } },
};
