const theme = {
  colors: {
    primary: "#2562ea",
    primaryRgb: "37, 98, 234",
    primaryLight: "#0277BD",
    primaryDark: "#050E22",
    secondary: "#1E293B",

    gray: "#eeeeee",

    background: "#0B1222",
    sectionBackground: "#050E22",

    white: "#ffffff",
    black: "#222222",

    overlay: "rgba(0, 0, 0, 0.5)",

    textPrimary: "#ffffff",
    textSecondary: "#c3cad6",
    textMuted: "#9aa4b5",

    borderSubtle: "rgba(255, 255, 255, 0.08)",
    borderStrong: "rgba(255, 255, 255, 0.14)",

    error: "#ff6b6b",
    errorBackground: "rgba(255, 107, 107, 0.12)",
  },

  elevation: {
    card: "0 12px 32px rgba(2, 8, 26, 0.45)",
    cardHover: "0 18px 44px rgba(2, 8, 26, 0.55), 0 0 0 1px rgba(37, 98, 234, 0.22)",
    popover: "0 20px 55px rgba(2, 8, 26, 0.6)",
  },

  motion: {
    hoverLift: -6,
  },

  spacing: {
    section: "50px",
    block: "32px",
    group: "24px",
    tight: "16px",
  },

  zIndex: {
    base: 0,
    sticky: 10,
    dropdown: 20,
    overlay: 40,
    modal: 100,
    toast: 1000,
  },

  typography: {
    font: {
      main: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      secondary: "sans-serif",
    },

    heading: {
      h1: "clamp(2.25rem, 6vw, 3.438rem)",
      h2: "clamp(1.625rem, 5vw, 2.5rem)",
      h3: "clamp(1.25rem, 4vw, 1.875rem)",
      h4: "clamp(1rem, 3vw, 24px)",
      h5: "clamp(1rem, 3vw, 1.25rem)",
      h6: "clamp(1rem, 3vw, 1.125rem)",
    },

    size: {
      xs: "12px",
      sm: "clamp(0.75rem, 3vw, 0.875rem)",
      body: "16px",
      md: "18px",
      lg: "clamp(1rem, 3vw, 1.25rem)",
      xl: "30px",
      xxl: "clamp(1.5rem ,5vw, 2.188rem)",
    },

    weight: {
      regular: "400",
      medium: "500",
      semibold: "600",
    },
  },

  media: {
    mobile: "(max-width: 576px)",
    tablet: "(max-width: 1024px)",
    laptop: "(max-width: 1280px)",
    desktop: "(min-width: 1440px)",
  },
};

export default theme;
