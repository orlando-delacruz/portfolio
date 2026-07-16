// src/animations/viewport.js
// Shared viewport thresholds for whileInView animations.
// `once: true` means content animates in and stays settled —
// it never replays on re-scroll.
export const defaultViewport = { once: true, amount: 0.3 };

export const viewport = (amount = 0.3, once = true) => ({ once, amount });
