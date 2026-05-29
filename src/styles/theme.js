const theme = {
    colors: {
        primary: "#2562ea",
        primaryRgb: "37, 98, 234",
        primaryLight: "#0277BD",
        primaryDark: "#050E22",
        secondary: "#1E293B",

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
            h1: "clamp(36px, 6vw, 55px)",
            h2: "clamp(26px, 5vw, 40px)",
            h3: "clamp(20px, 4vw, 30px)",
            h4: "clamp(16px, 3vw, 24px)",
            h5: "20px",
            h6: "18px"
        },

        size: {
            xs: "12px",
            sm: "14px",
            body: "16px",
            md: "18px",
            lg: "20px",
            xl: "30px",
        },

        weight: {
            light: "300",
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