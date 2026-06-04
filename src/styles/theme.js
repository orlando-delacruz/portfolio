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
            h5: "clamp(1.25rem, 3vw, 1rem)",
            h6: "clamp(1.125rem, 3vw, 1rem)"
        },

        size: {
            xs: "12px",
            sm: "14px",
            body: "16px",
            md: "18px",
            lg: "clamp(1.25rem, 3vw, 1rem)",
            xl: "30px",
            xxl: "clamp(1.5rem ,5vw, 2.188rem)"
        },

        weight: {
            regular: "400",
            medium: "500",
            semibold: "600",
        }
    },

    media: {
        mobile: "(max-width: 576px)",
        tablet: "(max-width: 1024px)",
        laptop: "(max-width: 1280px)",
        desktop: "(min-width: 1440px)"
    }
}

export default theme