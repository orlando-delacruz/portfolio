const theme = {
    colors: {
        primary: "#2562EA",
        primaryLight: "#0277BD",
        primaryDark: "#050E22",
        secondary: "#1E293B",

        background: "#0B1222",
        sectionBackground: "#050E22",

        white: "#FFFFFF",
        black: "#222222",

        overlay: "rgba(0, 0, 0, 0.5)",
    },

    typography: {
        font: {
            main: "Inter",
            secondary: "sans-serif",
        },


        heading: {
            h1: "55px",
            h2: "40px",
            h3: "22px",
            h4: "20px",
            h5: "18px",
            h6: "16px"
        },

        size: {
            xs: "12px",
            sm: "14px",
            body: "16px",
            md: "18px",
            lg: "20px"
        },

        weight: {
            thin: "200",
            light: "300",
            regular: "400",
            medium: "500",
            semibold: "600",
            bold: "700"
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